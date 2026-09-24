# Die drei Animationen

Lesen, bevor an Bewegung, Fragmenten oder `transitions.js` etwas geändert wird.
Langfassung von Regel 17 und 18 in `CLAUDE.md`.

## Regel 17, ausführlich: nie `data-anim` und `data-frag` am selben Element

`T.enter()` zieht beim Betreten der Folie **alle** `[data-anim]` auf sichtbar
und überfährt damit die Fragmentlogik: Der Punkt steht ab Zustand 0 da, und ein
Klick später passiert gar nichts mehr. Kein Prüflauf meldet das, die Folie ist
ja gültig. Das Muster ist immer dasselbe und steht schon auf Folie 03: **Der
Container trägt `data-anim`, seine Kinder tragen `data-frag`.** Die allgemeine
Fassung steht im Skill, `references/buehne-und-system.md` §5.

## Regel 18, ausführlich: `DECK.settle()` muss jede neue Animation kennen

Es zieht erst alle GSAP-Tweens auf ihr Ende und normalisiert dann **von Hand**
— es kennt nur die Elementarten, die dort aufgezählt sind. Und es setzt den
**geltenden** Zustand, nicht den Endzustand: Das PDF macht aus jedem Zustand
eine eigene Seite, wer dort pauschal fertigstellt, hat die Schlusszahl schon
auf der ersten Seite stehen. Deshalb ruft `settle()`
`T.stepExtras(sl, S.frag, true)` und nicht irgendein festes `gsap.set()`. Die
allgemeine Fassung steht im Skill, `references/buehne-und-system.md` §3.

## Womit bewegt wird

Bewegt wird mit **GSAP**, das als `assets/js/vendor/gsap.min.js` im Projekt
liegt und schon die Folienübergänge trägt. **HyperFrames kommt hier nicht in
Frage**, auch wenn es dieselbe Bibliothek benutzt: Es ist eine
Video-Render-Umgebung mit npx-Laufzeit und erzeugt eine MP4-Datei. Dieses Deck
ist interaktiv, läuft per Doppelklick unter `file://` und hat Fragmente und
eine Referentenansicht. Wer einen gerenderten Clip will, baut ihn getrennt und
bindet ihn als `<video>` ein, das geht unter `file://`.

## Die drei Stellen

Über die Folienübergänge hinaus bewegt sich im ganzen Deck an genau **drei
Stellen** etwas, und jedes Mal, weil die Bewegung selbst etwas sagt, das ein
Standbild nicht sagen kann. Alle drei hängen in `transitions.js` an `T.stepExtras`, das von
`T.showFragment` aufgerufen wird — also dort, wo auch `T.movePointer` sitzt.

| Attribut | Was es tut |
|---|---|
| `data-travel="dx,dy"` | Das Element startet um diesen Versatz verschoben und fährt auf seinen Platz. Auf Folie 09 (Was unterscheidet KI von normaler Software?) fährt so auf beiden Seiten das Kästchen mit „Regeln" an seinen Platz, gespiegelt: links von unten nach oben (`0,110`), rechts von oben nach unten (`0,-110`). **Der Versatz steht im Attribut**, weil er aus dem Layout folgt: er ist der Weg zwischen zwei Stellen der Grafik. |
| `data-count="von,bis"` | Zählt beim Erscheinen hoch. Auf Folie 11 (KI im Alltag) von 58 auf 76. |
| `data-draw` | Ein Strich wächst einmal von links auf volle Breite, kurz nachdem seine Karte erscheint. Auf Folie 06 (KI für alle - ChatGPT) unter dem 30.11.2022, dem Tag, auf den der Rückblick zuläuft. |

Vier Dinge, die daran hängen:

- **Der Zustand kommt vom Elternteil.** Alle drei Attribute lesen das `data-frag`
  des nächsten Vorfahren, sie tragen keine eigene Zustandsangabe. Sonst stünde
  dieselbe Zahl zweimal in der Folie und könnte auseinanderlaufen.
- **Geflogen wird einmal.** Ohne die Merkung an `__flew` fährt das Element bei
  jedem weiteren Zustand der Folie erneut los, und aus einer Aussage wird
  Zappelei.
- **Der Endwert steht auch im Quelltext.** `<span data-count="58,76">76</span>`
  ist keine Doppelung aus Bequemlichkeit: Ohne ihn zeigt jede Umgebung ohne
  GSAP dauerhaft den Startwert, und das ist auch die Rückfallebene
  `body.no-anim`. Aus demselben Grund steht `.card__stroke` im Stylesheet
  fertig gezeichnet da, erst `transitions.js` setzt ihn auf null zurück.
- **Nicht mehr davon.** Die dritte Stelle kam auf ausdrücklichen Wunsch, weil
  das Datum das Zentrum des Abschnitts ist. Eine vierte wäre Masche. Das Deck
  ist ruhig, und das ist der Punkt.

Geprüft wird das nicht von `layout-audit` oder `abnahme` — die kennen Geometrie
und Start, nicht den Wert einer Zahl in einem bestimmten Zustand. Wer hier
etwas ändert, klickt diese drei Folien **von Hand vorwärts und rückwärts durch**:
06 (KI für alle - ChatGPT), 09 (Was unterscheidet KI von normaler Software?) und
11 (KI im Alltag).
Der Skill führt diese Lücke inzwischen in `references/pruefen.md` unter „Was
kein Werkzeug prüft".

**Der Reiseversatz wird gemessen, nicht geschätzt.** Er hängt an den
Kästchenhöhen und ändert sich mit jeder Layoutänderung — beim Umbau von drei
auf zwei Kästchen halbierte er sich von 220 auf 110. Wer ihn schätzt, lässt
das Wort an einer Stelle starten, an der nichts ist.
