# Arbeitsregeln

## Datei-Zugriff

- **Lesen:** im gesamten Dateisystem erlaubt (`C:`, `D:`, `E:`), ohne Rückfrage.
- **Schreiben:** ausschließlich unterhalb von `D:\SourceAI\ai-seminar`.
  Einzige Ausnahme: das Session-Scratchpad für temporäre Dateien.
- Änderungen an fremden Projekten oder an System- und Config-Pfaden nur nach
  ausdrücklicher Aufforderung. Das gilt besonders für
  `~\.claude\skills\create-slides\`, denn der Skill ist Vorlage für andere Projekte.

## Werkzeug-Schritte

Build- und Werkzeugschritte nicht erfragen, sondern ausführen: Bild- und
Videokonvertierung, Schriften einbetten, Prüfläufe, Hilfsskripte im Scratchpad.
Inhaltliche und gestalterische Weichenstellungen weiterhin vorab klären,
gebündelt und früh.

## Anrede

Andrew wird geduzt. Das gilt auch für alles, was im Deck steht: es ist eine
**interne** Veranstaltung, und intern wird bei orangedental geduzt.

## Schreibweise

Es gelten die allgemeinen Regeln aus `~\.claude\CLAUDE.md`: Umlaute und ß werden
ausgeschrieben, auch in Quelltextkommentaren; das Komma ist das Standardzeichen,
der Gedankenstrich bleibt nur, wo er wirklich etwas leistet; kein Strichpunkt in
deutscher Prosa. Dazu zwei Dinge, die nur hier gelten und beide schon einmal
Arbeit gekostet haben:

**Dateinamen sind Bezeichner und bleiben, wie sie sind.** `pruefen.bat` heißt
weiter so, `references/buehne-und-system.md` und `references/pruefen.md` im Skill
ebenfalls. Wer beim Nachziehen der Umlaute pauschal ersetzt, bricht diese
Verweise, und zwar ohne Fehlermeldung, weil es nur Text in einer Tabelle ist.

**Die `.bat`-Dateien sind der einzige Ort mit einer echten Kodierungsfrage.**
Sie tragen `chcp 65001 >nul` als erste Zeile nach `@echo off` und sind UTF-8
**ohne BOM**. Alles vor dieser Zeile bleibt reines ASCII, weil `cmd.exe` die
Datei mit der gerade gültigen Codepage liest. So gemessen und in der echten
Konsole gegengeprüft. Wer eine `.bat` neu anlegt, übernimmt diesen Kopf.

Für Node-Skripte braucht es das nicht: Node schreibt auf der Konsole über die
Unicode-Schnittstelle und gibt Umlaute auch bei Codepage 850 korrekt aus.

---

# Projekt: KI-Seminar bei orangedental

Fullscreen-HTML-Präsentation für ein 15–20-minütiges Seminar vor rund 50
Mitarbeitenden. Läuft per Doppelklick auf `index.html` offline ohne Server.

Stand: **Abschnitt 01 steht, der geschichtliche Rückblick.** Fünf inhaltliche
Folien und drei Referenzfolien, die herausfliegen, sobald das Deck steht. Es
fehlen der Rest von Abschnitt 01, Abschnitt 02 („Wie KI funktioniert") und
Abschnitt 03 („KI bei orangedental").

Der Auftrag und alle Festlegungen stehen in `dev/BRIEFING.md`, die Belege mit
Adressen zum Nachlesen in `quellenangabe.md`.

## Herkunft und Zuständigkeit

Die Technik ist aus `D:\SourceAI\byzz-whats-new` portiert: Engine, Bewegung,
Design-System, Referentenansicht. Der Namensraum heißt hier `window.DECK`
statt `BYZZ`, weil die Werkzeuge das so verlangen.

**Maßgeblich ist der Skill `create-slides`** (`~\.claude\skills\create-slides\`).
Dort steht der Weg als Vorschrift, dort liegen die Werkzeuge, dort steht die
gemessene `file://`-Tabelle. Vor größeren Eingriffen:

| Vorhaben | Pflichtlektüre im Skill |
|---|---|
| Bühne, Engine, Design-System | `references/buehne-und-system.md` |
| Was unter `file://` geht und was nicht | `references/randbedingungen.md` |
| Prüfläufe, Befundarten | `references/pruefen.md` |
| Referentenansicht | `references/referentenansicht.md` |
| PDF, Weitergabe, Veröffentlichung | `references/ausliefern.md` |
| Folien parallel bauen lassen | `references/agenten-briefing.md` |

Nicht aus dem Gedächtnis arbeiten, die Dokumente enthalten gemessene Werte und
konkrete Fehler, die schon einmal Stunden gekostet haben.

## Aufbau

```
index.html            das Deck: Bühne, Sprite, alle Folien
deck.config.json      alle Projektzahlen, ohne sie findet kein Werkzeug das Projekt
readme.txt            Bedienung für den Vortragenden
referat.md            der gesprochene Vortrag, ein Kapitel je Folie
quellenangabe.md      jede Zahl mit Beleg und Adresse zum Nachlesen
README.md             Einstieg
CLAUDE.md             diese Datei

pruefen.bat          Doppelklick: Abnahme
pdf.bat               Doppelklick: PDF erzeugen (erst am Ende)
publish.bat           Doppelklick: Weitergabe-Ordner ohne dev/

.claude/settings.json Projektrechte
.github/workflows/    der Pages-Workflow

assets/
  css/fonts.css       Schriften, Base64 eingebettet
  css/deck.css        Design-System und Folien-Vorlagen
  js/deck.js          Zustand, Navigation, Skalierung, der DECK-Vertrag
  js/transitions.js   Bewegungslogik
  js/overview.js      Folienübersicht (O)
  js/presenter.js     Referentenansicht (P), Notizen stehen nur dort
  js/vendor/          GSAP 3.13
  img/                Bilder                                       [erzeugt]
  brand/              Logos

dev/
  BRIEFING.md         Auftrag und Festlegungen
  nicht-erzaehlen.md  was recherchiert wurde und absichtlich draußen bleibt
  platzhalter.png     Quellbild                                    [Quelle]
  shots/              Prüfaufnahmen                                [erzeugt]
```

**Die Werkzeuge liegen nicht hier**, sondern im Skill. Deshalb gibt es kein
`dev/build/`, keine `package.json` und kein `node_modules/` im Projekt.

## Harte Regeln

Diese Punkte sind keine Stilfragen. Wer sie verletzt, macht das Deck kaputt,
teils so, dass es erst im Seminar auffällt.

1. **`file://` ist die Randbedingung.** Keine ES-Module, kein `import()`, kein
   `fetch()` auf lokale Dateien, kein `@font-face` mit Datei-URL, keine Iframes
   zwischen lokalen Dateien, kein `BroadcastChannel`/`localStorage` als Kanal.
   Alles davon ist gemessen blockiert.
2. **Zustand nie aus dem DOM lesen.** Während eines Übergangs tragen zwei Folien
   `is-active`. Immer `DECK.current()` / `DECK.slideAt(n)`.
3. **Die Sperre `if (fired) return;` in `preload()` bleibt.** Ohne sie springt
   das Deck sechs Sekunden nach dem Start zurück auf Folie 1, mitten im Vortrag.
4. **`data-fragments` ist die Anzahl der Zustände, nicht der Einblendungen.**
   Zustand 0 ist die Folie ohne jeden Punkt, `data-frag="1"` erscheint ab
   Zustand 1. Drei Punkte ergeben `data-fragments="4"`. Wer sich hier vertut,
   verliert die letzte Einblendung in PDF und Prüflauf, und zwar **lautlos**.
5. **`DECK.nextFragment()` wechselt nie die Folie.** Die Werkzeuge rufen sie
   `count-1`-mal blind auf. Würde sie am letzten Schritt durchrutschen, landeten
   Folgefolien im PDF, ohne dass sich etwas beschwert.
6. **Ladereihenfolge nicht umsortieren:** `gsap → transitions → overview → deck
   → presenter`. `deck.js` bindet `DECK.transitions` beim Auswerten des Skripts,
   `presenter.js` meldet sich über `DECK.onChange` an. Die Begründung steht als
   Kommentar in `index.html`.
7. **Bilder nie über 1,15× ihrer nativen Breite** anzeigen. Panelhöhe aus dem
   nativen Seitenverhältnis rechnen, nicht schätzen. Native Maße ans `<img>`.
8. **Die `:not()`-Listen in `deck.config.json` sind Absicht.** `.eyebrow` und
   `.counter` sitzen bewusst oberhalb des Inhaltsbands, `.shot__spill` und
   `.shot__soft` sind 44-px-Miniaturen und *sind* die Weichzeichnung. Niemals
   stattdessen `content.top` senken oder `imageScaleMax` anheben.
9. **Schutzzonen bleiben frei:** Logo x 100–372 / y 948–1034, Wortmarke
   x 1655–1820 / y 970–1034. Inhalt zwischen y = 200 und y = 940.
10. **Blur-Budget einhalten:** Aurora nur als `radial-gradient`, maximal zwei
    geblurrte Ebenen, Radius ≤ 12 px, danach `filter: none` (nicht `blur(0px)`),
    `backdrop-filter` höchstens einmal pro Folie, kein Leerlauf-Wackeln.
11. **Bestehende CSS-Klassen und Piktogramm-IDs verwenden.** Erfundene
    `#i-*`-IDs rendern als Leerfläche, ohne Fehlermeldung. Wer eine neue Stelle
    mit Icons baut, **muss** sie in den globalen Kontur-Selektor in `deck.css`
    aufnehmen, sonst füllt der Browser die Pfade zu schwarzen Klecksen.
    Stand jetzt im Selektor: `svg use`, `.ico svg`, `.path svg`,
    `.card__ico svg`, `.ico-arrow`.
12. **`#stage` und `#frame` nicht zusammenlegen.** `#frame` ist der komponierte
    Bereich und immer exakt 1920 × 1080. `#stage` wächst über `--stage-w` /
    `--stage-h` so weit, dass er jedes Fensterformat deckt. Fällt das zusammen,
    stehen bei jedem Format außer 16:9 helle Balken am Rand.
13. **`index.html` ist die einzige Quelle der Folien.** `assemble.order` bleibt
    leer. Eine gefüllte `order` überschreibt alles zwischen den Markern, auch
    Handarbeit, und ohne Rückfrage.
14. **Nichts erfinden.** Keine Zahlen, Jahreszahlen oder Funktionsumfänge ohne
    Beleg. Bei einem KI-Vortrag besonders heikel: die Zahlen veralten monatlich.
15. **„orangedental" wird immer kleingeschrieben**, auch am Satzanfang und in
    Überschriften. Nicht „nach Duden" korrigieren.
16. **`data-title` trägt die Überschrift der Folie**, nicht ihren Arbeitsnamen.
    Das Attribut ist das Einzige, was Folienübersicht (O) und
    Referentenansicht (P) anzeigen, und beides liest der Vortragende, während
    fünfzig Leute warten. „Die Sprache" hilft ihm dabei nicht, „ChatGPT war
    keine Erfindung" schon. Bei einer mehrzeiligen Überschrift den tragenden
    Teil nehmen, ohne Schlusspunkt.

## Bauteile, die es nur hier gibt

Über das aus dem byzz-Deck portierte Design-System hinaus. Wer eine Folie
baut, nimmt diese, statt neue zu erfinden.

| Klasse | Wofür |
|---|---|
| `.h-title` | Schriftstufe 128 px, zwischen `.h-xl` (168) und `.h-l` (96). Die Titelfolie. `.h-xl` bleibt im Stylesheet, wird derzeit aber von keiner Folie benutzt. |
| `.title-list` | Die drei Zeilen unter dem Titel. Kein Aufzählungszeichen, das Fragewort in `<b>` trägt die **Farbe**, nicht das Gewicht: fett stünde neben der 128er Headline zu laut. |
| `.axis` und `.axis__*` | Die waagerechte Zeitachse, siehe unten. |
| `.card__yr` | Jahreszahl als Kartenkopf, anstelle des Piktogramms. Gleiche Höhe und gleicher Abstand wie `.card__ico`, damit Karten mit Jahr und Karten mit Piktogramm nebeneinander auf einer Linie stehen. Nicht zu verwechseln mit `.card__n`, das ist die kleine blasse Ordnungszahl oben rechts. |
| `.card__ab` | Die englische Auflösung einer Abkürzung, unter dem Kartentitel. Steht auf der Folie, damit auch das PDF ohne den Vortragenden verständlich bleibt. Auf der Zeitachse heißt dasselbe `.axis__ab`. |
| `.marks--tight` | Das Detailband unter einer Zeitachse. Eine Zeile je Station, das Jahr in der ersten Spalte an der Stelle der Raute. Die Zeilen bleiben stehen, am Ende steht die ganze Liste da. |
| `.ico-arrow` | Freistehender Pfeil zwischen zwei Werten. Steht außerhalb von `.card__ico` und `.path` und ist deshalb **eigens** im Kontur-Selektor eingetragen. |

### Die Zeitachse

```
.axis                 absolut, Höhe 380, Breite inline
  .axis__line         die Linie, steht ab Zustand 0
  .axis__mark         eine Marke, --up oder --dn   <-- HIER sitzt data-frag
                      left und width kommen INLINE, weil beide gerechnet sind
    .axis__t          der Textblock
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

Fünf Punkte, die Arbeit gekostet haben:

- **Positionen werden gerechnet, nicht geschätzt.** Eine geschätzte Position
  macht aus einer maßstäblichen Achse eine, die nur so aussieht — schlimmer
  als eine ehrlich gleichverteilte. Das Skript, das die Achsen erzeugt, prüft
  selbst auf Kollisionen und Überlauf und bricht ab, statt stillschweigend
  etwas Krummes zu liefern.
- **Die Marken wechseln zwischen `--up` und `--dn`.** Nur deshalb geht der
  Maßstab auf: zwei gleichseitige Marken brauchen rund 170 px Abstand, über
  Kreuz dürfen sie sich beliebig nahe kommen. 2009 und 2012 liegen 65 px
  auseinander und kollidieren trotzdem nicht.
- **Die Achse ist 1400 px breit, nicht 1696.** Der Text der letzten Marke
  läuft über das Linienende hinaus und braucht den Rest bis zum Rahmenrand.
  Wer die Linie auf volle Breite zieht, schiebt den letzten Text aus dem Bild.
- **`data-frag` sitzt an der einzelnen `.axis__mark`**, eine Station je Klick.
  `.axis__line` trägt keines: sonst beginnt die Folie mit einem leeren Bild
  und sieht aus, als sei sie nicht fertig geladen.
- **Zwischen zwei benachbarten Textblöcken bleiben 40 px Luft.** Ohne diesen
  Zuschlag stoßen sie aneinander und lesen sich als ein Absatz. Der Generator
  prüft das, die Breite einer Marke ist deshalb höchstens der Abstand zur
  nächsten gleichseitigen Marke minus 40.
- **Der Maßstab steht nicht auf der Folie.** Folie 03 zeigt 62 Jahre, Folie 04
  dieselbe Linienlänge für 9 Jahre. Eine Zeile wie „maßstäblich" oder
  „7,1-fach vergrößert" erklärt dem Publikum die Machart der Folie statt ihres
  Inhalts und hat dort nichts verloren. Dass der Maßstab innerhalb **einer**
  Achse stimmt, bleibt Pflicht — nur gesagt wird es nicht.

## Abkürzungen werden aufgelöst

**Jede Abkürzung wird bei ihrem ersten Auftreten im Deck aufgelöst** — die
englische Langform auf der Folie, was sie bedeutet in Sprechnotiz und
`referat.md`.

Der Grund ist nicht Stil, sondern die Weitergabe: Das Deck geht als PDF an
Leute, die den Vortrag nicht gehört haben. „ChatGPT" ohne Auflösung ist für
sie Buchstabensalat. Auf der Folie stehen dafür `.card__ab` und `.axis__ab`
bereit.

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
Attributnamen, keine Begründungen zum Folienbau. Das gehört in diese Datei
hier, nicht in die Notiz.

**Und sie enthält nichts über die Machart der Folie.** Sätze wie „gleiche
Linie, viel kürzerer Zeitraum" oder „die Abstände entsprechen den Jahren"
beschreiben, wie die Grafik gebaut ist. Das sieht das Publikum, es muss ihm
nicht erklärt werden, und im Vortrag zählt der Inhalt, nicht die
Bauerklärung. Die Regel gilt für **alle drei Dateien, die im Vortrag gelesen
werden**: Folie, Sprechnotiz und `referat.md`. Am 17.09.2026 zum zweiten Mal
angeordnet, nachdem beim ersten Mal nur die Folien bereinigt worden waren und
dieselben Sätze in den Notizen stehen geblieben sind.

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

## Prozentzahlen ohne Nachkommastellen

**Auf der Folie steht `26 %`, nicht `26,2 %`.** Vor einem Laienpublikum ist
die Nachkommastelle Scheingenauigkeit: Sie kostet Lesezeit, bleibt nicht
hängen und suggeriert eine Präzision, auf die es nicht ankommt.

**Im Beleg bleibt die exakte Zahl stehen.** Das ist der Unterschied zwischen
Runden und Erfinden: Die Folie vereinfacht, `dev/BRIEFING.md` bleibt
nachprüfbar. Wer beim Nachziehen auch den Beleg rundet, zerstört genau die
Nachprüfbarkeit, für die er da ist.

## Nach jeder Änderung

```bash
SK=~/.claude/skills/create-slides/scripts
node "$SK/layout-audit.mjs"    # Folien fotografieren und Layout prüfen
node "$SK/abnahme.mjs"         # Layout + Referent + Kaltstart, sammelnd
```

**Das PDF wird erst ganz zum Schluss erzeugt**, wenn das Deck inhaltlich fertig
ist. Nicht zwischendurch, auch nicht „nur zur Kontrolle". Solange sich Folien
ändern, ist jedes erzeugte PDF sofort veraltet, und ein veraltetes PDF neben
einem aktuellen Deck ist schlimmer als gar keins. `pdf.bat` und
`node "$SK/deck-pdf.mjs"` laufen also erst am Ende.

**Rückgabewert 0 ist das Abnahmekriterium, nicht die Textausgabe.** Vorsicht bei
`| tail`, dann liest `$?` das letzte Pipeglied und meldet immer Erfolg.

**Die Zeile „Folien im Deck" gegenlesen — es müssen 8 sein.** Kein Prüflauf
meldet, dass Folien *fehlen*: ein kürzeres Deck ist ein gültiges Deck, und alle
Tests bleiben grün. In diesem Projekt sind so schon einmal zwei Folien
verschwunden, zurückgeholt aus `git show HEAD:index.html`.

**`abnahme.mjs` erzeugt keine Aufnahmen**, es startet die Layoutprüfung mit
`--keine-bilder`. Wer danach ein Bild ansieht, begutachtet einen alten Stand.
Für frische Bilder `layout-audit.mjs` einzeln laufen lassen und **vor jeder
Sichtprüfung den Zeitstempel ansehen**:
`ls -l --time-style=+%H:%M:%S dev/shots`.

Nicht automatisierbar und deshalb von Hand: den Kontaktbogen ansehen, das
Fenster auf andere Seitenverhältnisse ziehen, **einmal wirklich `index.html`
doppelklicken**. Niemals über einen Dev-Server abnehmen, denn über `http://`
funktioniert genau das, was unter `file://` scheitert.

Nach einem Port oder größeren Umbau zusätzlich die mechanische Gegenprobe:

```bash
grep -rn "BYZZ" assets/            # muss leer sein
grep -rn 'type="module"' .         # muss leer sein
```

## Doku mitführen

Neue Klassen und Piktogramm-IDs gehören ins Stylesheet **und** in die
Beschreibung. Neue Stolperfallen als Regel hierher. Änderungen an der
allgemeinen Vorschrift gehören in den Skill, nicht hierher. Ändert sich etwas
an *diesem* Deck, dann hierher.

**Keine Änderungsgeschichte im Quelltext.** Kommentare in `.bat`, `.js` und
`.css` sagen, was der Code tut und warum er so aussieht, kein „seit … geändert",
keine Datumsangaben. Dafür ist Git da.

`readme.txt` enthält **ausschließlich die Bedienung** für den Vortragenden.
Dort keine Entwicklerhinweise ergänzen.
