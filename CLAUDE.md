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

Andrew wird geduzt, das regelt `~\.claude\CLAUDE.md`. Für das Deck gilt:

- **Die Präsentation duzt niemanden.** Keine Folie, keine Sprechnotiz, kein
  Satz in `referat.md` spricht das Publikum mit „du", „dein", „dir" an. Auch
  keine Befehlsform wie „schreib rein" oder „zeig einem Computer".
- **„man" so sparsam wie möglich.** Auf der Folie steht, wer handelt („Jeder
  kann sie nachlesen", „Ältere Modelle lasen Wort für Wort").

Gegenprobe, muss leer bleiben:
`grep -niE '\b(du|dein\w*|dir|dich)\b' index.html referat.md`

Angeordnet am 18.09.2026. Vorher duzte das Deck, weil die Veranstaltung intern
ist. Das gilt nicht mehr.

## Schreibweise

Es gelten die allgemeinen Regeln aus `~\.claude\CLAUDE.md` (Umlaute, Komma
statt Gedankenstrich, kein Strichpunkt, Zitate bleiben wörtlich). Dazu zwei
Dinge, die nur hier gelten:

- **Dateinamen sind Bezeichner und bleiben, wie sie sind.** `pruefen.bat`,
  `references/buehne-und-system.md`, `references/pruefen.md`. Wer beim
  Nachziehen der Umlaute pauschal ersetzt, bricht diese Verweise ohne
  Fehlermeldung.
- **Die `.bat`-Dateien:** `chcp 65001 >nul` als erste Zeile nach `@echo off`,
  UTF-8 **ohne BOM**, alles davor reines ASCII, weil `cmd.exe` die Datei mit der
  gerade gültigen Codepage liest. Gemessen und in der echten Konsole
  gegengeprüft. Neue `.bat` übernehmen diesen Kopf. Node-Skripte brauchen das
  nicht.
- **Kein Gendern**, Regel in `~\.claude\CLAUDE.md`. Paarformen wie „Kolleginnen
  und Kollegen" sind erlaubt. Gegenprobe, muss leer bleiben:
  `grep -nE '\w+(\*|:|_)innen|\w+Innen\b|Mitarbeitende|Teilnehmende|Nutzende|Ansprechperson|Beschäftigte' index.html referat.md`

---

# Projekt: KI-Seminar bei orangedental

Fullscreen-HTML-Präsentation für ein 15–20-minütiges Seminar vor rund 50
Mitarbeitern. Läuft per Doppelklick auf `index.html` offline ohne Server.

Stand: **Alle fünf Abschnitte stehen**, „Von den Anfängen bis ChatGPT", „Was ist
KI heute?", „Wie KI funktioniert", „KI-Agenten" und „KI bei orangedental".
**Achtundzwanzig Folien.** Abschnitt 05 ist am 24.09.2026 gebaut, auf Folie 26
(byzz app) fehlt noch Andrews Bestätigung der Eckdaten. Folie 28 ist seit dem
28.09.2026 die Abschlussfolie „Fragen?", allein mit dem Bild des Firmengebäudes. Aus vier Abschnitten
sind am 22.09.2026 fünf geworden, weil das Kapitel zu agentischen Systemen als
„mehr als ein Folienpunkt" bestellt war.

**Der Schnitt zwischen 02 und 03 ist eine Festlegung.** 02 klärt Begriff und
Stand, 03 geht ins Innenleben (Token, Wahrscheinlichkeit, Halluzinationen).

Auftrag und Festlegungen: `dev/BRIEFING.md`. Belege mit Adressen:
`quellenangabe.md`. Was absichtlich fehlt: `dev/nicht-erzaehlen.md`.

## Herkunft und Zuständigkeit

Die Technik ist aus `D:\SourceAI\byzz-whats-new` portiert: Engine, Bewegung,
Design-System, Referentenansicht. Der Namensraum heißt hier `window.DECK`
statt `BYZZ`, weil die Werkzeuge das so verlangen.

**Maßgeblich ist der Skill `create-slides`** (`~\.claude\skills\create-slides\`).
Dort liegen die Werkzeuge (deshalb kein `dev/build/`, keine `package.json`,
kein `node_modules/` im Projekt) und die gemessene `file://`-Tabelle.
Nicht aus dem Gedächtnis arbeiten, die Dokumente enthalten gemessene Werte und
konkrete Fehler, die schon einmal Stunden gekostet haben.

| Vorhaben | Pflichtlektüre im Skill |
|---|---|
| Bühne, Engine, Design-System | `references/buehne-und-system.md` |
| Was unter `file://` geht und was nicht | `references/randbedingungen.md` |
| Prüfläufe, Befundarten | `references/pruefen.md` |
| Referentenansicht | `references/referentenansicht.md` |
| PDF, Weitergabe, Veröffentlichung | `references/ausliefern.md` |
| Folien parallel bauen lassen | `references/agenten-briefing.md` |

## Pflichtlektüre im Projekt

Die Einzelheiten zu diesem Deck stehen unter `dev/claude/`. **Vor dem Vorhaben
die passende Datei lesen**, die Regeln unten sind nur ihr Kern.

| Vorhaben | Datei |
|---|---|
| Folie bauen oder umbauen, eine Klasse wählen | `dev/claude/bauteile.md` |
| Zeitachse (Folien 03 bis 05) anfassen | `dev/claude/zeitachse.md` |
| Bewegung, Fragmente, `transitions.js`, `DECK.settle()` | `dev/claude/animationen.md` |
| Satz, Zahl, Unterzeile, Quelle, Fachwort, Abkürzung | `dev/claude/inhalt-und-belege.md` |
| Sprechnotiz, `referat.md`, Quellen- und Briefingdateien | `dev/claude/vortragstexte.md` |
| Prüflauf auswerten, Skript an Textdatei, Folie dazu oder weg | `dev/claude/pruefen.md` |

Weitere Merkpunkte zum Aufbau: `readme.txt` enthält **ausschließlich die
Bedienung** für den Vortragenden. `pdf.bat` läuft erst am Ende. `publish.bat`
liefert ohne `dev/` aus. `assets/img/` und `dev/shots/` sind erzeugt.

## Harte Regeln

Diese Punkte sind keine Stilfragen. Wer sie verletzt, macht das Deck kaputt,
teils so, dass es erst im Seminar auffällt. Die Nummern werden aus anderen
Dateien zitiert und bleiben stabil.

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
   `.shot__soft` sind 44-px-Miniaturen und *sind* die Weichzeichnung.
   `.backdrop` ist ein zurückgenommenes Hintergrundbild und darf Inhaltsband und
   Folienrand verlassen, die Schutzzonen hält dann der Blick auf die Aufnahme
   frei. Das gilt auch für `.backdrop--photo`, die Fotos in voller Deckkraft
   auf Folie 02, 07, 12, 17, 22 und 28. Niemals stattdessen `content.top` senken oder `imageScaleMax` anheben.
9. **Schutzzonen bleiben frei:** Logo x 100–372 / y 948–1034, Wortmarke
   x 1655–1820 / y 970–1034. Inhalt zwischen y = 200 und y = 940.
10. **Blur-Budget einhalten:** Aurora nur als `radial-gradient`, maximal zwei
    geblurrte Ebenen, Radius ≤ 12 px, danach `filter: none` (nicht `blur(0px)`),
    `backdrop-filter` höchstens einmal pro Folie, kein Leerlauf-Wackeln.
11. **Bestehende CSS-Klassen und Piktogramm-IDs verwenden** (Katalog:
    `dev/claude/bauteile.md`). Erfundene `#i-*`-IDs rendern als Leerfläche,
    ohne Fehlermeldung. Wer eine neue Stelle mit Icons baut, **muss** sie in den
    globalen Kontur-Selektor in `deck.css` aufnehmen, sonst füllt der Browser
    die Pfade zu schwarzen Klecksen. Stand jetzt im Selektor: `svg use`,
    `.ico svg`, `.path svg`, `.card__ico svg`, `.ico-arrow`. Das gilt auch für
    Schriftstufen: keine neue erfinden.
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
    Referentenansicht (P) anzeigen. Bei einer mehrzeiligen Überschrift den
    tragenden Teil nehmen, ohne Schlusspunkt.
17. **Nie `data-anim` und `data-frag` am selben Element.** `T.enter()` zieht
    alle `[data-anim]` auf sichtbar und überfährt die Fragmentlogik, lautlos.
    **Der Container trägt `data-anim`, seine Kinder tragen `data-frag`.**
    Gegenprobe, muss leer bleiben:
    `grep -n 'data-anim[^>]*data-frag\|data-frag[^>]*data-anim' index.html`
    Einzelheiten: `dev/claude/animationen.md`.
18. **`DECK.settle()` muss jede neue Animation kennen.** Es normalisiert von
    Hand nur die dort aufgezählten Elementarten und setzt den **geltenden**
    Zustand, nicht den Endzustand, über `T.stepExtras(sl, S.frag, true)`.
    Einzelheiten: `dev/claude/animationen.md`.
19. **Ein Abschnittsname steht an drei Stellen.** Die Kopfzeile jeder Folie
    kommt aus `SECTIONS` in `assets/js/deck.js`, nicht aus dem HTML. Wer nur
    `data-title` und den Trenner ändert, bekommt auf **allen** Folien des
    Abschnitts eine abweichende Kopfzeile. Gegenprobe:
    `grep -n "<Abschnittsname>" assets/js/deck.js index.html`
20. **Jede Unterzeile unter einer Überschrift ist `.sub`**, nicht `.lead`, nicht
    `.tiny`, keine neue Klasse. Und sie muss etwas sagen, stimmen und zur
    Überschrift passen: **Versteht der Zuhörer ohne diese Zeile weniger?** Wenn
    nein, fällt sie ersatzlos. Unterzeilen sind ganze, sachliche Sätze, keine
    Schlagworte. Auf den Trennern stehen Fragen, und **jede Frage wird im
    Abschnitt beantwortet**. Gegenprobe, muss leer bleiben:
    `grep -nA1 'class="rule"' index.html | grep '<p' | grep -v 'class="sub"'`
    Fälle: `dev/claude/inhalt-und-belege.md`.
21. **Ein Verbindungssatz ist selbst eine Behauptung.** Wer zwei Belege
    nebeneinanderstellt, belegt damit nicht den Satz dazwischen. Auch er
    braucht einen Eintrag in `quellenangabe.md`.
22. **Quellenhierarchie für die Zeitachse:** Klickpunkt Schule (ISB Bayern)
    bestimmt Auswahl und Gliederung, bei Einzeldaten entscheidet die
    Primärquelle. Jede Abweichung in `quellenangabe.md`, vierte Spalte, in beide
    Richtungen. Zweite Leitquelle: Fraunhofer „Maschinelles Lernen" (2018).
    **bosch.com hat keinen Rang.** Einzelheiten:
    `dev/claude/inhalt-und-belege.md`.
23. **Jede Aussage muss dem Selbstversuch des Publikums standhalten.** Jeder im
    Saal hat ein Telefon. **Würde ein naiver Selbstversuch das Gegenteil
    zeigen?** Dann fliegt die Zeile raus, auch wenn die Zahl stimmt. Dasselbe
    gilt für die eigene Erfahrung im Haus. Fall:
    `dev/claude/inhalt-und-belege.md` und `dev/nicht-erzaehlen.md`.
24. **Das Modell ist nicht das KI-System.** Modell = trainiertes Ergebnis mit
    Version und Stichtag. KI-System = das bediente Programm darum herum
    (Erwägungsgrund 97 der KI-Verordnung). Verbrannt sind „Dienst",
    „Anwendung", „diese Programme" für die Modelle. Gegenprobe, muss leer
    bleiben:
    `grep -n 'class="card__d"\|class="mark__t"' index.html | grep -i 'dienst'`
    Einzelheiten: `dev/claude/inhalt-und-belege.md`.
25. **Ein Beleg kann wörtlich stimmen und trotzdem falsch zugeordnet sein.**
    Nach jedem Rechercheblock ein eigener Gegenlesedurchgang, der die Belege zu
    widerlegen versucht: Gibt es die Quelle, steht das Zitat so dort, stimmen
    Datum, Seite, Randnummer, und **trägt der Beleg die Aussage in der linken
    Spalte**? Einzelheiten: `dev/claude/inhalt-und-belege.md`.
26. **Ein Datum braucht ein Kriterium, und jedes Datum wird selbst gelesen.**
    „Seit" heißt im Deck: erster öffentlicher Start, auch als Vorschau. Die
    allgemeine Verfügbarkeit steht in der Sprechnotiz. Nie beides auf einer
    Folie mischen. Datum und Zitat im Rohtext der Primärquelle lesen, nicht
    aus der Zusammenfassung eines Agenten übernehmen, und keine Adresse aus
    dem Gedächtnis zusammensetzen. Einzelheiten:
    `dev/claude/inhalt-und-belege.md`.

Dazu für jede Zeile im Vortrag, ausführlich in `dev/claude/inhalt-und-belege.md`
und `dev/claude/vortragstexte.md`:

- **Das Publikum ist der Maßstab.** Die Hälfte hat keinen IT-Hintergrund.
  Stockt man beim Vorlesen, ist die Zeile kaputt, auch wenn sie stimmt.
- **Quellenzeilen auf der Folie nur, wenn sie etwas erklären**, sonst gehören
  Herausgeber, Datum und Stichprobe in `quellenangabe.md`.
- **Prozentzahlen auf der Folie ohne Nachkommastelle**, im Beleg exakt.
- **Jede Abkürzung wird beim ersten Auftreten aufgelöst.**
- **Sprechnotizen:** je sichtbarem Punkt ein Stichpunkt, Überschrift plus
  Liste, keine Technik, nichts über die Machart der Folie. Das gilt auch für
  Folie und `referat.md`.

## Nach jeder Änderung

```bash
SK=~/.claude/skills/create-slides/scripts
node "$SK/layout-audit.mjs"    # Folien fotografieren und Layout prüfen
node "$SK/abnahme.mjs"         # Layout + Referent + Kaltstart, sammelnd

# Unterzeilen nur als .sub (Regel 20), muss leer bleiben
grep -nA1 'class="rule"' index.html | grep '<p' | grep -v 'class="sub"'

# Kodierung, nach JEDEM Skript-Eingriff an einer Textdatei
for f in index.html referat.md quellenangabe.md dev/*.md dev/claude/*.md README.md CLAUDE.md; do
  iconv -f UTF-8 -t UTF-8 "$f" >/dev/null || echo "KAPUTT $f"; done
```

- **Rückgabewert 0 ist das Kriterium**, nicht die Textausgabe. Kein `| tail`.
- **„Folien im Deck" gegenlesen, es müssen 28 sein.** Fehlende Folien meldet
  kein Prüflauf.
- **Text mit Umlauten nie mit `perl -pe` ändern**, das schreibt Latin-1-Bytes
  und kein Prüflauf merkt es. Edit-Werkzeug oder `sed`.
- **`abnahme.mjs` erzeugt keine Aufnahmen.** Vor jeder Sichtprüfung den
  Zeitstempel in `dev/shots` ansehen.
- **Folie dazu oder weg:** `node "$SK/gliederung.mjs" --md README.md`, danach
  die Folienverweise „Folie NN (Titel)" in der Doku prüfen.
- **Das PDF erst ganz am Schluss**, nie zwischendurch.
- **Einmal wirklich `index.html` doppelklicken.** Nie über einen Dev-Server
  abnehmen.

Gründe und weitere Fallen: `dev/claude/pruefen.md`.

## Doku mitführen

Neue Klassen und Piktogramm-IDs gehören ins Stylesheet **und** in
`dev/claude/bauteile.md`. Neue Stolperfallen werden eine nummerierte Regel
hier, knapp, die Langfassung kommt in die passende Datei unter `dev/claude/`.
Änderungen an der allgemeinen Vorschrift gehören in den Skill, nicht hierher.

**Keine Änderungsgeschichte im Quelltext.** Kommentare in `.bat`, `.js` und
`.css` sagen, was der Code tut und warum er so aussieht, kein „seit … geändert",
keine Datumsangaben. Dafür ist Git da.

`readme.txt` enthält **ausschließlich die Bedienung** für den Vortragenden.
Dort keine Entwicklerhinweise ergänzen.
