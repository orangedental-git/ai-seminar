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

Stand: **Grundgerüst mit fünf Referenzfolien.** Die Inhalte kommen noch.
Der Auftrag und alle Festlegungen stehen in `dev/BRIEFING.md`.

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
