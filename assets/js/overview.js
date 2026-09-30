/* =============================================================================
   KI-Seminar — Folienübersicht (Taste O)

   Zeigt ein Raster aller Folien mit Titel, Nummer und Abschnitt. Klick springt.
   Bewusst textbasiert statt mit Miniaturbildern: echte Vorschaubilder würden
   entweder alle Folien gleichzeitig gerendert verlangen oder eine Canvas-Kopie,
   und Canvas ist unter file:// nach dem Zeichnen lokaler Bilder tainted.

   Gegliedert wird über data-divider: Vor jeder Trennerfolie steht ein Band über
   die ganze Rasterbreite, dadurch beginnt jedes Kapitel eine neue Zeile. Die
   Bänder sind keine .ov-i, der Index der Karten bleibt der Folienindex.
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
      var sec = sl.getAttribute('data-section');
      var isDivider = sl.hasAttribute('data-divider');

      /* Trenner ohne Abschnitt (Titel, Schluss) bekommen ein Band ohne Text:
         eigene Zeile ja, erfundene Überschrift nein. */
      if (isDivider) {
        var band = d.createElement('div');
        band.className = 'ov-band';
        band.setAttribute('aria-hidden', 'true');
        band.textContent = sec ? sectionLabel(sec) : '';
        grid.appendChild(band);
      }

      var b = d.createElement('button');
      b.type = 'button';
      b.className = isDivider ? 'ov-i is-divider' : 'ov-i';
      b.setAttribute('data-i', String(i));

      var num = d.createElement('span');
      num.className = 'ov-n';
      num.textContent = String(i + 1).padStart(2, '0');
      b.appendChild(num);

      b.appendChild(d.createTextNode(sl.getAttribute('data-title') || '—'));
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
