# Die Zeitachse

Lesen, bevor eine Zeitachse gebaut oder verändert wird (Folien 03 bis 05). Die
Klassen `.axis__*`, `.marks--tight` und `.axis__span` sind in
`dev/claude/bauteile.md` beschrieben.

**Die Geometrie wird gerechnet, nicht geschätzt, und zwar von
`achsen-rechnen.mjs` im Skill.** Das Skript nimmt eine Stationenliste, verteilt
die Seiten, rechnet Positionen und maximale Textbreiten, prüft Kollisionen,
Überlauf am rechten Rand und Bänder, und **bricht mit Rückgabewert 1 ab**,
statt stillschweigend etwas Krummes zu liefern. Gegen die frühere Achse
1950–2012 geprüft: Es reproduziert deren acht Positionen und Breiten aufs Pixel.

```bash
node ~/.claude/skills/create-slides/scripts/achsen-rechnen.mjs achse.json --html
```

Zwei Dinge, die das Skript kennt und die man beim Schätzen übersieht: Eine
Fläche ragt 16 px über ihren Text hinaus (die von 2022 als einzige 28), am
rechten Rand zählt deshalb sie und nicht der Text. Und ein Band liegt waagerecht
dort, wo die Textblöcke der `--dn`-Marken stehen — wo beides zusammenfällt,
meldet das Skript einen Fehler.

**Die Werte, mit denen die drei Achsen dieses Decks gerechnet sind**, gehören in
jede `achse.json`, sonst rechnet das Skript mit seinen Voreinstellungen und die
Flächen stoßen aneinander:

```json
{ "textGap": 60, "textGapKey": 68, "surfaceBleed": 16, "spannedAxis": true }
```

60 px zwischen zwei Textblöcken sind 16 px Überstand links, 16 px rechts und
28 px sichtbare Luft dazwischen. Weil jede Station eine Fläche hat, trägt in der
`achse.json` auch **jede** Station `"mile": true` — das Feld heißt dort „hat eine
Fläche", die Tönung im Deck ist eine andere Frage.

```
.axis                 absolut, Höhe 380, Breite inline
  .axis__line         die Linie, steht ab Zustand 0
  .axis__span         ein Zeitraum, --fade-l und --fade-r für weiche Kanten
                      left und width INLINE, ohne Beschriftung   <-- data-frag
  .axis__mark         eine Marke, --up oder --dn   <-- HIER sitzt data-frag
                      --mile tönt die Fläche: hier war das Verfahren neu
                      --key macht sie hell, mit Rand und Schatten, für die eine
                      Station, die den Abschnitt trägt
                      left und width kommen INLINE, weil beide gerechnet sind
    .axis__t          der Textblock UND seine Fläche
      .axis__y        das Jahr, Mono
      .axis__d        der Satz dazu, <b> für den Kopf
        .axis__ab     die englische Auflösung einer Abkürzung

.marks.marks--tight   das Detailband unter der Achse, eine Zeile je Station
  .mark               eine Zeile   <-- data-frag, dasselbe wie ihre Station
    .mark__y          das Jahr
    .mark__t          der Satz dazu
```

**Die Achse ist maßstäblich.** Die x-Position jeder Marke entspricht ihrem
Jahr:

```
left = (jahr - startjahr) * (achsenbreite / (endjahr - startjahr))
```

Zehn Punkte, die Arbeit gekostet haben:

- **Der Text beginnt am Punkt, mit einer Ausnahme: `--tx`.** Braucht eine
  gleichseitige Nachbarmarke rechts den Platz, rückt der Textblock um `--tx`
  nach links, der Punkt bleibt auf seinem Jahr. Der Versatz wird gerechnet:
  Textende ≤ Punkt der Nachbarmarke − 40 (− 28 bei `--key`), Textanfang ≥
  Textende der Marke links davon + 40 (+ 28 bei `--key`). Auf Folie 03
  (KI ist älter als die meisten denken) dient der Versatz einem anderen Zweck: 1986 steht am rechten Rand und braucht
  Breite für einen zweiten Satz, `--tx:-120px` bei 462 px.

- **`--tx` macht die Marke nicht schmaler, nur ihren Text.** Das Element
  `.axis__mark` beginnt weiter auf seinem Jahr und ist `width` breit, der
  Versatz bewegt allein den Textblock darin. Bei der letzten Marke einer Achse
  ragt der unsichtbare Kasten deshalb über den Rahmen hinaus, und genau das
  meldet `layout-audit` als Überlauf, obwohl auf dem Bild nichts übersteht.
  **Es sind zwei Grenzen, und sie liegen 112 px auseinander.** Die sichtbare
  Fläche endet am Bundsteg, containerrelativ also bei 1696 — das rechnet
  `achsen-rechnen.mjs` über `contentRight` und den Überstand. Der unsichtbare
  Kasten `left` + `width` darf bis 1808 gehen, das ist der Rahmenrand, und erst
  dort meldet `layout-audit` einen Überlauf. Wer nur auf den Prüflauf schaut,
  baut also bis zu 112 px in den Bundsteg hinein, ohne dass sich etwas
  beschwert. Wer mehr Breite braucht, kürzt den Satz.

- **Eine Marke bei `left:0` braucht `--tx:16px`.** Sonst ragt ihre Fläche 16 px
  in den Bundsteg und beginnt links von der Überschrift darüber. Der Versatz
  schiebt die Fläche auf die Kante, der Text rückt dafür 16 px vom Punkt ab.
  Das betrifft 1950 auf Folie 03 und 2017 auf Folie 05. `layout-audit` meldet
  es **nicht**, es prüft nur den Rahmen und das Inhaltsband, und 96 liegt in
  beidem.

- **Positionen werden gerechnet, nicht geschätzt.** Eine geschätzte Position
  macht aus einer maßstäblichen Achse eine, die nur so aussieht — schlimmer
  als eine ehrlich gleichverteilte. Das Skript, das die Achsen erzeugt, prüft
  selbst auf Kollisionen und Überlauf und bricht ab, statt stillschweigend
  etwas Krummes zu liefern.
- **Die Marken wechseln zwischen `--up` und `--dn`.** Nur deshalb geht der
  Maßstab auf: zwei gleichseitige Marken brauchen rund 170 px Abstand, über
  Kreuz dürfen sie sich beliebig nahe kommen. 1956 und 1958 liegen 74 px
  auseinander und kollidieren trotzdem nicht.
- **Die Achse ist 1400 px breit, nicht 1696.** Der Text der letzten Marke
  läuft über das Linienende hinaus und braucht den Rest bis zum Rahmenrand.
  Wer die Linie auf volle Breite zieht, schiebt den letzten Text aus dem Bild.
- **`data-frag` sitzt an der einzelnen `.axis__mark`**, eine Station je Klick.
  `.axis__line` trägt keines: sonst beginnt die Folie mit einem leeren Bild
  und sieht aus, als sei sie nicht fertig geladen.
- **Zwischen zwei benachbarten Textblöcken bleiben 60 px Luft.** Davon gehen
  zweimal 16 px für den Überstand der Flächen ab, sichtbar bleiben 28. Ohne
  diesen Zuschlag stoßen die Flächen aneinander und lesen sich als eine. Der
  Generator prüft das, die Breite einer Marke ist deshalb höchstens der Abstand
  zur nächsten gleichseitigen Marke minus 60.
- **Keine Fläche rückt näher an die Linie als 196 px.** Rückt sie näher heran,
  legt sich ihr Schlagschatten auf die Achsenlinie, und die Achse reißt
  zwischen den Marken sichtbar ab. Das galt zuerst nur für `--key`, seit jede
  Station eine Fläche mit Schatten trägt, gilt es für alle. Die Flächen sind
  Attrappen: Optik wie `.card.glass`, aber **ohne** `backdrop-filter`. Sie
  kosten kein Blur-Budget, und mit Taste B verschwinden sie nicht.
- **Der Maßstab steht nicht auf der Folie.** Folie 03 zeigt 36 Jahre, Folie 04
  dieselbe Linienlänge für 30 Jahre, Folie 05 für 9. Eine Zeile wie „maßstäblich" oder
  „7,1-fach vergrößert" erklärt dem Publikum die Machart der Folie statt ihres
  Inhalts und hat dort nichts verloren. Dass der Maßstab innerhalb **einer**
  Achse stimmt, bleibt Pflicht — nur gesagt wird es nicht.
