# Vortragstexte: Sprechnotiz, Referat und die übrigen Dateien

Lesen, bevor eine Sprechnotiz in `index.html`, ein Kapitel in `referat.md` oder
ein Eintrag in `quellenangabe.md`, `dev/nicht-erzaehlen.md` oder
`dev/BRIEFING.md` geschrieben wird.

## Fünf Dateien, fünf Zwecke

Derselbe Inhalt steht an drei Stellen, und das ist Absicht. Wer eine Aussage
ändert, ändert sie überall, wo sie vorkommt.

| Datei | Wofür | Form |
|---|---|---|
| `quellenangabe.md` | eine Zahl nachprüfen | Tabelle je Folie, mit Adresse zum Nachlesen |
| `dev/nicht-erzaehlen.md` | wissen, warum etwas fehlt | je Eintrag: die Behauptung, der Einwand, und was stattdessen sagbar ist |
| `referat.md` | Vortrag vorbereiten, nachlesen | **kurze** ganze Sätze, dicht gestellt. Andrew trägt aus dem Gedächtnis vor und schaut nur gelegentlich hin: keine Begrüßungsfloskeln, keine Absätze über die Wirkung einer Folie |
| `<template class="notes">` in `index.html` | im Vortrag, ein Blick genügt | Stichpunkte |
| `dev/BRIEFING.md` | Auftrag und Festlegungen | Entscheidungen, offene Punkte |

## Was in eine Sprechnotiz gehört

**Eine Sprechnotiz trägt zu jedem sichtbaren Punkt der Folie einen Stichpunkt
mit den wichtigsten Informationen dazu.** Sie ist das, was Andrew im Vortrag
anschaut, während er redet.

Sie enthält **keine Technik**: keine CSS-Klassen, keine Pixelmaße, keine
Attributnamen, keine Begründungen zum Folienbau. Das gehört in `CLAUDE.md` und
die Dateien unter `dev/claude/`, nicht in die Notiz.

**Und sie enthält nichts über die Machart der Folie.** Sätze wie „gleiche
Linie, viel kürzerer Zeitraum" oder „die Abstände entsprechen den Jahren"
beschreiben, wie die Grafik gebaut ist. Das sieht das Publikum, es muss ihm
nicht erklärt werden, und im Vortrag zählt der Inhalt, nicht die
Bauerklärung. Die Regel gilt für **alle drei Dateien, die im Vortrag gelesen
werden**: Folie, Sprechnotiz und `referat.md`. Am 17.09.2026 zum zweiten Mal
angeordnet, nachdem beim ersten Mal nur die Folien bereinigt worden waren und
dieselben Sätze in den Notizen stehen geblieben sind.

**Keine Hausformeln.** „Das ist der Punkt für dieses Haus" oder „für ein
Haus, das selbst Software baut" versteht beim Vorlesen niemand, und der Satz
trägt nichts, was die Aussage daneben nicht schon sagt. Gestrichen wird der
Vorspann, die Aussage selbst bleibt stehen. Wo der Bezug zur Firma wirklich
etwas leistet, heißt sie orangedental.

**Die Form ist Überschrift plus Liste**, keine Fließtext-Absätze und kein
Satz über den „Zweck dieser Folie". Das Popup bringt `.notes ul` und
`.notes li` bereits mit, `presenter.js` setzt die Notiz per `innerHTML` —
Listen werden also gerendert.

```html
<!-- FALSCH — das hilft im Vortrag niemandem -->
<p>Schriftstufe <code>.h-title</code> (128 px). <code>data-bare</code>
unterdrückt Kopfzeile und Zähler.</p>

<!-- RICHTIG — Fakten als Stichpunktsätze untereinander -->
<p><b>1973, Großbritannien</b></p>
<ul>
  <li>Regierung lässt Gutachten erstellen</li>
  <li>Urteil: in keinem Teilgebiet kam, was versprochen war</li>
  <li>Folge: Förderung gestrichen</li>
  <li>Streit darüber öffentliches Ereignis, im Fernsehen ausgetragen</li>
</ul>
```

Nützlich am Ende einer Notiz, wo es passt: ein Absatz **„Wenn jemand fragt:"**
für die vorhersehbare Nachfrage und einer **„Überleitung:"** für den Satz zur
nächsten Folie.

**Die ausführliche Fassung steht inzwischen im Skill**, in
`references/referentenansicht.md` §5, zusammen mit den Regeln zur Quellendatei
und zur Datei mit dem, was nicht gesagt wird. Hier steht sie nur noch, weil
dieses Deck sie besonders oft gebraucht hat.

Angeordnet am 17.09.2026, nachdem ein ganzer Foliensatz Sprechnotizen
enthielt, die über Pixelgrößen redeten statt über den Inhalt.
