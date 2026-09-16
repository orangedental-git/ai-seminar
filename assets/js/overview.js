/* =============================================================================
   KI-Seminar — Folienübersicht (Taste O)

   Zeigt ein Raster aller Folien mit Titel, Nummer und Abschnitt. Klick springt.
   Bewusst textbasiert statt mit Miniaturbildern: echte Vorschaubilder würden
   entweder alle Folien gleichzeitig gerendert verlangen oder eine Canvas-Kopie,
   und Canvas ist unter file:// nach dem Zeichnen lokaler Bilder tainted.
   ========================================================================== */
(function (w, d) {
  'use strict';

  var DECK = (w.DECK = w.DECK || {});
  var root, grid, built = false;

  /* Keine eigene Abschnittstabelle: die Gliederung steht in deck.js und wird
     ueber DECK.sections gelesen. Zwei Tabellen für dieselbe Sache laufen beim
     ersten Umbenennen auseinander — und zwar lautlos. */
  function sectionLabel(sec) {
    var map = DECK.sections || {};
    if (!map[sec]) return '';
    return String(sec).padStart(2, '0') + ' · ' + map[sec];
  }

  function build() {
    root = d.getElementById('overview');
    grid = root.querySelector('.ov-grid');
    var n = DECK.slideCount();

    for (var i = 0; i < n; i++) {
      var sl = DECK.slideAt(i);
      var b = d.createElement('button');
      b.type = 'button';
      b.className = 'ov-i';
      b.setAttribute('data-i', String(i));

      var num = d.createElement('span');
      num.className = 'ov-n';
      num.textContent = String(i + 1).padStart(2, '0');
      b.appendChild(num);

      b.appendChild(d.createTextNode(sl.getAttribute('data-title') || '—'));

      var sec = sl.getAttribute('data-section');
      var label = sec ? sectionLabel(sec) : '';
      if (label) {
        var s = d.createElement('span');
        s.className = 'ov-s';
        s.textContent = label;
        b.appendChild(s);
      }
      grid.appendChild(b);
    }

    grid.addEventListener('click', function (e) {
      var t = e.target.closest('.ov-i');
      if (!t) return;
      DECK.go(parseInt(t.getAttribute('data-i'), 10));
      close();
    });
    built = true;
  }

  function sync() {
    var cur = DECK.current();
    var items = grid.querySelectorAll('.ov-i');
    for (var i = 0; i < items.length; i++) items[i].classList.toggle('is-cur', i === cur);
    var act = items[cur];
    if (act) act.scrollIntoView({ block: 'nearest' });
  }

  function open() { if (!built) build(); sync(); root.classList.add('is-on'); }
  function close() { if (root) root.classList.remove('is-on'); }
  function toggle() { if (!built) build(); root.classList.contains('is-on') ? close() : open(); }

  DECK.overview = { open: open, close: close, toggle: toggle };
})(window, document);
