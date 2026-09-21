/* =============================================================================
   KI-Seminar — Bewegungslogik

   Unverändert aus D:/SourceAI/byzz-whats-new übernommen, bis auf den
   Namensraum. Blur-Werte, Aurora-Formel und Staffelabstand sind gemessen —
   wer daran dreht, misst neu.

   Leitgedanke: Das Deck ist EINE Kamerafahrt, kein Stapel Folien.
   Vorwärts kommt der neue Inhalt aus der Tiefe auf den Betrachter zu, während
   der alte nach hinten wegfällt. Rückwärts ist das exakt gespiegelt — wie man
   eine Folie verlässt, bestimmt, wie man in die nächste hineinkommt.

   Der Hintergrund bewegt sich NIE von allein. Er verschiebt sich ausschließlich
   als Folge eines Folienwechsels und steht danach still. Dauerbewegung ohne
   Anlass liest sich als Zappeln, nicht als Ruhe.

   Kostenregeln, die hier eingehalten werden:
     - Blur nur auf .slide-inner, nie auf Einzelelementen. Maximal zwei Ebenen
       gleichzeitig (abgehende + ankommende Folie).
     - Screenshots blenden ueber eine vorgeblurte Zwillingsebene ein. Animiert
       wird deren opacity; der Blur selbst ist statisch und wird einmal gerastert.
     - will-change wird direkt vor dem Tween gesetzt und im onComplete
       zurückgenommen. filter endet auf 'none', nicht auf blur(0px) — sonst
       bleibt die Filter-Pipeline aktiv.
   ========================================================================== */
(function (w) {
  'use strict';

  var T = {};
  var g = w.gsap;

  /* Blur-Obergrenze auf der 1920er Bühne. Die Bühnenskalierung skaliert sie
     optisch mit, deshalb hier ein fester Pixelwert. */
  var BLUR_IN = 11;
  var BLUR_OUT = 8;

  /* ------------------------------------------------------------ Helfer */

  function mark(el, props) {
    if (!el) return;
    g.set(el, { willChange: props });
  }
  function unmark(el) {
    if (!el) return;
    g.set(el, { willChange: 'auto' });
  }
  /** filter vollständig entfernen statt auf blur(0px) stehen zu lassen. */
  function clearFilter(el) {
    if (el) el.style.filter = '';
  }

  function anims(slide) {
    return slide.querySelectorAll('[data-anim]');
  }

  /* --------------------------------------------------- Screenshot-Panels */

  /** Panels scharfstellen: die weiche Zwillingsebene blendet aus. */
  T.focusShots = function (slide, tl, at, fast) {
    var softs = slide.querySelectorAll('.shot__soft');
    if (!softs.length) return;
    if (fast) {
      g.set(softs, { opacity: 0, scale: 1 });
      return;
    }
    g.set(softs, { opacity: 1, scale: 1.05 });
    mark(softs, 'opacity, transform');
    tl.to(softs, {
      opacity: 0,
      scale: 1,
      duration: 0.78,
      ease: 'power2.out',
      onComplete: function () { unmark(softs); },
    }, at);
  };

  /** Beim Verlassen wieder aufweichen — das Panel tritt in den Hintergrund. */
  T.blurShots = function (slide, tl, at, fast) {
    var softs = slide.querySelectorAll('.shot__soft');
    if (!softs.length || fast) return;
    mark(softs, 'opacity, transform');
    tl.to(softs, { opacity: 1, scale: 1.03, duration: 0.3, ease: 'power2.in' }, at);
  };

  /* ------------------------------------------------------------ Eintritt */

  T.enter = function (slide, dir, fast) {
    var inner = slide.querySelector('.slide-inner');
    var kids = anims(slide);
    var tl = g.timeline();
    var back = dir < 0;

    if (fast) {
      g.set(inner, { opacity: 1, scale: 1, filter: 'none' });
      g.set(kids, { opacity: 1, y: 0 });
      T.focusShots(slide, tl, 0, true);
      tl.to({}, { duration: 0.12 });
      return tl;
    }

    mark(inner, 'transform, opacity, filter');

    /* Vorwärts: aus der Tiefe nach vorn (kleiner -> normal).
       Rückwärts: von vorn zurück auf die Ebene (größer -> normal).
       Das Vorzeichen der Skalierung trägt die Richtung. */
    tl.fromTo(inner,
      { opacity: 0, scale: back ? 1.035 : 0.968, filter: 'blur(' + BLUR_IN + 'px)' },
      {
        opacity: 1, scale: 1, filter: 'blur(0px)',
        duration: 0.62, ease: 'power3.out',
        onComplete: function () { clearFilter(inner); unmark(inner); },
      }, 0);

    if (kids.length) {
      mark(kids, 'transform, opacity');
      tl.fromTo(kids,
        { opacity: 0, y: back ? -22 : 26 },
        {
          opacity: 1, y: 0,
          duration: 0.55, ease: 'power3.out',
          stagger: 0.045,
          onComplete: function () { unmark(kids); },
        }, 0.1);
    }

    /* Das Panel wird etwas später scharf als der Text steht — es hat mehr
       Gewicht und darf sich langsamer setzen. */
    T.focusShots(slide, tl, 0.14, false);

    return tl;
  };

  /* ------------------------------------------------------------- Austritt */

  T.exit = function (slide, dir, fast) {
    var inner = slide.querySelector('.slide-inner');
    var tl = g.timeline();
    var back = dir < 0;

    if (fast) {
      tl.to(inner, { opacity: 0, duration: 0.11, ease: 'none' }, 0);
      return tl;
    }

    mark(inner, 'transform, opacity, filter');
    T.blurShots(slide, tl, 0, false);

    tl.to(inner, {
      opacity: 0,
      scale: back ? 0.972 : 1.03,
      filter: 'blur(' + BLUR_OUT + 'px)',
      duration: 0.38, ease: 'power2.in',
      onComplete: function () { clearFilter(inner); unmark(inner); },
    }, 0);

    return tl;
  };

  /* ------------------------------------------------- Hintergrund als Träger */

  /* Die Aurora wandert ueber das gesamte Deck als eine einzige langsame Fahrt.
     Position kommt deterministisch aus dem Folienindex — kein Zufall, damit
     Vor- und Rückwärtsnavigation exakt dieselben Zustände treffen. */
  function auroraState(i, total, isDivider) {
    var t = total > 1 ? i / (total - 1) : 0;
    var wide = isDivider ? 1.22 : 1;
    return {
      warm: {
        x: -260 + Math.sin(t * 4.1 + 0.4) * 620 + t * 380,
        y: -180 + Math.cos(t * 3.2 + 1.1) * 300,
        s: (isDivider ? 1.3 : 1.0) * wide,
        o: isDivider ? 1 : 0.82,
      },
      amber: {
        x: 1180 - Math.cos(t * 3.6) * 520,
        y: 560 + Math.sin(t * 4.6 + 2.0) * 300,
        s: 0.95 * wide,
        o: isDivider ? 0.9 : 0.7,
      },
      cool: {
        x: 640 + Math.cos(t * 2.4 + 0.9) * 780,
        y: 820 - Math.sin(t * 3.0 + 0.3) * 420,
        s: 1.05,
        o: 0.85,
      },
    };
  }

  T.moveAurora = function (i, total, isDivider, fast) {
    var st = auroraState(i, total, isDivider);
    var d = fast ? 0.18 : 0.95;
    [['warm', '.bloom--warm'], ['amber', '.bloom--amber'], ['cool', '.bloom--cool']].forEach(function (p) {
      var el = document.querySelector('#aurora ' + p[1]);
      if (!el) return;
      var s = st[p[0]];
      g.to(el, { x: s.x, y: s.y, scale: s.s, opacity: s.o, duration: d, ease: 'power2.out', overwrite: 'auto' });
    });
  };

  /* Das Signature-Zeichen steht fest rechts und vertikal mittig (Position in
     deck.css). Es wandert NICHT — auf Trennern tritt es hervor, auf
     Inhaltsfolien blendet es zurück, bleibt aber sichtbar. Nur Deckkraft
     bewegt sich; ein wanderndes Zeichen zieht den Blick vom Inhalt weg. */
  var BLOB_DIVIDER = 0.11;
  var BLOB_SLIDE = 0.035;   /* auf Inhaltsfolien liegt es hinter Text und
                               Schaubildern — mehr würde mitlesen wollen. */

  T.moveBlob = function (isDivider, fast) {
    var el = document.getElementById('blobmark');
    if (!el) return;
    g.to(el, {
      opacity: isDivider ? BLOB_DIVIDER : BLOB_SLIDE,
      duration: fast ? 0.2 : 1.05,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  };

  /* ------------------------------------------------------------ Fragmente */

  /* Zeiger, der von Schritt zu Schritt unter die jeweils aktive Schaltfläche
     im Screenshot wandert. data-pointer hält die Ziel-x in Bühnenkoordinaten,
     eine Angabe je Schritt; das Element selbst steht bei left:0.

     Bewegt wird ausschließlich transform:translateX. Das ist mit Absicht die
     einzige Bewegung: ein dauerhaft wippender Zeiger wäre Leerlaufbewegung
     und würde den Blick auch dann binden, wenn nichts passiert. */
  function pointerAt(slide, idx) {
    var el = slide.querySelector('[data-pointer]');
    if (!el) return null;
    var xs = el.getAttribute('data-pointer').split(',');
    var x = parseFloat(xs[Math.min(idx, xs.length - 1)]);
    return isNaN(x) ? null : { el: el, x: x };
  }

  T.movePointer = function (slide, idx, fast) {
    var p = pointerAt(slide, idx);
    if (!p) return;
    g.to(p.el, {
      x: p.x,
      duration: fast ? 0.14 : 0.5,
      ease: 'power3.inOut',
      overwrite: 'auto',
    });
  };

  /* Gerichteter Einflug. Ein Element mit data-travel="dx,dy" startet um diesen
     Versatz verschoben und fährt auf seinen Platz, sobald sein Block sichtbar
     wird. Wofür das gut ist, zeigt die Folie „Der eine Unterschied": dort
     wandert der Begriff „Regel" von der Eingangs- auf die Ausgangsseite, und
     genau diese Bewegung ist die Aussage der Folie. Ein Standbild kann eine
     Richtungsumkehr nicht zeigen.

     Der Versatz steht im Attribut und nicht hier, weil er aus dem Layout
     folgt: er ist der Weg zwischen zwei Stellen der Grafik.

     Es wird EINMAL geflogen, beim Einschalten. Ohne die Merkung an __flew
     würde das Element bei jedem weiteren Zustand der Folie erneut losfahren,
     und aus einer Aussage würde eine Zappelei. */
  function travelOne(el, on, fast) {
    var d = (el.getAttribute('data-travel') || '').split(',');
    var dx = parseFloat(d[0]) || 0;
    var dy = parseFloat(d[1]) || 0;
    var flew = el.__flew === true;

    if (!on) { g.set(el, { x: dx, y: dy }); el.__flew = false; return; }
    if (fast || flew) { g.set(el, { x: 0, y: 0 }); el.__flew = true; return; }

    el.__flew = true;
    g.fromTo(el, { x: dx, y: dy }, {
      x: 0, y: 0, duration: 0.62, ease: 'power3.out', overwrite: 'auto',
    });
  }

  /* Hochzählende Zahl. data-count="von,bis". Getweent wird ein Hilfsobjekt,
     der gerundete Wert landet je Bild im Textknoten.

     Der Endwert steht zusätzlich im Quelltext der Folie. Das ist keine
     Doppelung aus Bequemlichkeit: ohne ihn zeigt jede Umgebung ohne GSAP —
     und das ist auch die Rückfallebene body.no-anim — dauerhaft den
     Startwert, und im PDF stünde eine falsche Zahl. */
  function countOne(el, on, fast) {
    var p = (el.getAttribute('data-count') || '').split(',');
    var from = parseFloat(p[0]);
    var to = parseFloat(p[1]);
    if (isNaN(from) || isNaN(to)) return;

    if (!on) { el.textContent = String(from); el.__ran = false; return; }
    if (fast || el.__ran) { el.textContent = String(to); el.__ran = true; return; }

    el.__ran = true;
    var o = { v: from };
    g.to(o, {
      v: to, duration: 0.9, ease: 'power2.out', overwrite: 'auto',
      onUpdate: function () { el.textContent = String(Math.round(o.v)); },
      onComplete: function () { el.textContent = String(to); },
    });
  }

  /* Aufgezogener Strich. Ein Element mit data-draw wächst einmal von links
     auf volle Breite, kurz nachdem seine Karte eingeblendet ist. Auf der
     Folie „KI für alle“ unterstreicht es den 30.11.2022, den Tag, auf den
     der ganze Rückblick zuläuft.

     Wie beim Zählwerk ist der Grundzustand im Stylesheet der fertige: ohne
     GSAP steht der Strich einfach da. Gezeichnet wird EINMAL, die Merkung an
     __drawn verhindert, dass er bei jedem weiteren Zustand neu anfängt. */
  function drawOne(el, on, fast) {
    if (!on) { g.set(el, { scaleX: 0 }); el.__drawn = false; return; }
    if (fast || el.__drawn) { g.set(el, { scaleX: 1 }); el.__drawn = true; return; }

    el.__drawn = true;
    g.fromTo(el, { scaleX: 0 }, {
      scaleX: 1, duration: 0.7, delay: 0.3, ease: 'power2.inOut', overwrite: 'auto',
    });
  }

  /* Ab welchem Zustand ein Element sichtbar ist, entscheidet sein Block: die
     Reise und das Hochzählen hängen am data-frag des Elternteils, nicht an
     einem eigenen Attribut. Sonst stünden dieselbe Zahl zweimal in der Folie
     und könnten auseinanderlaufen. */
  function fragNeed(el) {
    var host = el.closest ? el.closest('[data-frag]') : null;
    if (!host) return 0;
    var n = parseInt(host.getAttribute('data-frag'), 10);
    return isNaN(n) ? 0 : n;
  }

  T.stepExtras = function (slide, idx, fast) {
    var i;
    var tr = slide.querySelectorAll('[data-travel]');
    for (i = 0; i < tr.length; i++) travelOne(tr[i], idx >= fragNeed(tr[i]), fast);
    var ct = slide.querySelectorAll('[data-count]');
    for (i = 0; i < ct.length; i++) countOne(ct[i], idx >= fragNeed(ct[i]), fast);
    var dr = slide.querySelectorAll('[data-draw]');
    for (i = 0; i < dr.length; i++) drawOne(dr[i], idx >= fragNeed(dr[i]), fast);
  };

  /* Sequenzfolien: drei Screenshots blenden an derselben Stelle uebereinander.
     Auch hier läuft nur opacity — die vorgeblurte Ebene liefert die Weichheit. */
  T.showFragment = function (slide, idx, fast) {
    var items = slide.querySelectorAll('.seq__item');
    var steps = slide.querySelectorAll('.step');
    var i;

    for (i = 0; i < steps.length; i++) steps[i].classList.toggle('is-on', i === idx);
    T.movePointer(slide, idx, fast);
    T.stepExtras(slide, idx, fast);

    if (!items.length) {
      /* Einfache Fragmentfolien: Elemente mit data-frag="n" erscheinen ab n. */
      var frags = slide.querySelectorAll('[data-frag]');
      for (i = 0; i < frags.length; i++) {
        var need = parseInt(frags[i].getAttribute('data-frag'), 10);
        var on = idx >= need;
        g.to(frags[i], {
          opacity: on ? 1 : 0,
          y: on ? 0 : 18,
          duration: fast ? 0.12 : 0.44,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      }
      return;
    }

    for (i = 0; i < items.length; i++) {
      var active = i === idx;
      items[i].classList.toggle('is-on', active);
      var soft = items[i].querySelector('.shot__soft');
      g.to(items[i], {
        opacity: active ? 1 : 0,
        duration: fast ? 0.12 : 0.5,
        ease: 'power2.out',
        overwrite: 'auto',
      });
      if (soft) {
        if (active && !fast) {
          g.fromTo(soft, { opacity: 1, scale: 1.05 },
            { opacity: 0, scale: 1, duration: 0.62, ease: 'power2.out', overwrite: 'auto' });
        } else {
          g.set(soft, { opacity: 0, scale: 1 });
        }
      }
    }
  };

  /** Anfangszustand einer Folie beim Betreten setzen (Fragment 0). */
  T.resetFragments = function (slide) {
    var frags = slide.querySelectorAll('[data-frag]');
    for (var i = 0; i < frags.length; i++) {
      g.set(frags[i], { opacity: 0, y: 18 });
    }
    /* Reise, Zählwerk und Strich auf Zustand 0. Ohne das zeigt eine rückwärts
       betretene Folie noch den Stand ihres letzten Besuchs.
       stepExtras erledigt dabei beide Fälle von selbst: was an einem
       data-frag hängt, geht auf seinen Startwert zurück, was an keinem
       hängt, steht sofort fertig da. Eine Rücksetzung von Hand wäre hier
       also nicht nur überflüssig, sie wäre falsch. */
    T.stepExtras(slide, 0, true);
    var items = slide.querySelectorAll('.seq__item');
    for (i = 0; i < items.length; i++) {
      items[i].classList.toggle('is-on', i === 0);
      g.set(items[i], { opacity: i === 0 ? 1 : 0 });
    }
    var steps = slide.querySelectorAll('.step');
    for (i = 0; i < steps.length; i++) steps[i].classList.toggle('is-on', i === 0);
    var p = pointerAt(slide, 0);
    if (p) g.set(p.el, { x: p.x });
  };

  /* ----------------------------------------------------------- Echtes Glas */

  /* backdrop-filter erst einschalten, wenn die Folie steht. Während des
     Uebergangs bewegt sich der Hintergrund, und jede Bewegung dahinter
     verwirft den Snapshot des Effekts in jedem einzelnen Frame. */
  T.liveGlass = function (slide) {
    var els = slide.querySelectorAll('.glass');
    for (var i = 0; i < els.length; i++) els[i].classList.add('glass-live');
  };
  T.deadGlass = function (slide) {
    var els = slide.querySelectorAll('.glass');
    for (var i = 0; i < els.length; i++) els[i].classList.remove('glass-live');
  };

  w.DECK = w.DECK || {};
  w.DECK.transitions = T;
})(window);
