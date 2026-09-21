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

Zwei getrennte Dinge:

- **Andrew als Entwickler wird geduzt**, in jeder Antwort, Rückfrage und
  jedem Kommentar.
- **Die Präsentation duzt niemanden.** Keine Folie, keine Sprechnotiz, kein
  Satz in `referat.md` spricht das Publikum mit „du", „dein", „dir" an. Auch
  keine Befehlsform wie „schreib rein" oder „zeig einem Computer".

Dazu: **„man" so sparsam wie möglich.** Ein Satz mit „man" lässt offen, wer
handelt. Auf der Folie steht stattdessen, wer es tut („Jeder kann sie
nachlesen", „Ältere Modelle lasen Wort für Wort").

Gegenprobe, muss leer bleiben:
`grep -niE '\b(du|dein\w*|dir|dich)\b' index.html referat.md`

Angeordnet am 18.09.2026. Vorher stand hier, auch das Deck duze, weil die
Veranstaltung intern ist. Das gilt nicht mehr.

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

Stand: **Abschnitt 01 und 02 stehen**, „Von den Anfängen bis ChatGPT" und „Was ist KI
heute?". Elf Folien, die Referenzfolien sind herausgeflogen. Es fehlen
Abschnitt 03 („Wie KI funktioniert") und Abschnitt 04 („KI bei orangedental").

**Der Schnitt zwischen 02 und 03 ist eine Festlegung, keine Zufälligkeit.**
Abschnitt 02 klärt den Begriff und den Stand, Abschnitt 03 geht ins
Innenleben. Token, Wahrscheinlichkeit und Halluzinationen bleiben deshalb aus
02 draußen, obwohl das Material dazu recherchiert ist.

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

17. **Nie `data-anim` und `data-frag` am selben Element.** `T.enter()` zieht
    beim Betreten der Folie **alle** `[data-anim]` auf sichtbar und überfährt
    damit die Fragmentlogik: Der Punkt steht ab Zustand 0 da, und ein
    Klick später passiert gar nichts mehr. Kein Prüflauf meldet das, die
    Folie ist ja gültig. Das Muster ist immer dasselbe und steht schon auf
    Folie 03: **Der Container trägt `data-anim`, seine Kinder tragen
    `data-frag`.** Gegenprobe, muss leer bleiben:
    `grep -n 'data-anim[^>]*data-frag\|data-frag[^>]*data-anim' index.html`
    Die allgemeine Fassung steht im Skill, `references/buehne-und-system.md` §5.
18. **`DECK.settle()` muss jede neue Animation kennen.** Es zieht erst alle
    GSAP-Tweens auf ihr Ende und normalisiert dann **von Hand** — es kennt
    nur die Elementarten, die dort aufgezählt sind. Und es setzt den
    **geltenden** Zustand, nicht den Endzustand: Das PDF macht aus jedem
    Zustand eine eigene Seite, wer dort pauschal fertigstellt, hat die
    Schlusszahl schon auf der ersten Seite stehen. Deshalb ruft `settle()`
    `T.stepExtras(sl, S.frag, true)` und nicht irgendein festes `gsap.set()`.
    Die allgemeine Fassung steht im Skill, `references/buehne-und-system.md` §3.
19. **Ein Abschnittsname steht an drei Stellen.** Die Kopfzeile jeder Folie
    kommt nicht aus dem HTML, sondern aus `SECTIONS` in `assets/js/deck.js`.
    Wer nur `data-title` und die Überschrift auf dem Trenner ändert, bekommt
    eine Kopfzeile, die anders lautet als die Überschrift darunter, und zwar
    auf **allen** Folien des Abschnitts gleichzeitig. Gegenprobe:
    `grep -n "<Abschnittsname>" assets/js/deck.js index.html`
20. **Jede Unterzeile unter einer Überschrift ist `.sub`.** Auf den Trennern
    wie auf den Inhaltsfolien, direkt unter der Überschrift oder unter dem
    Strich `.rule`. Nicht `.lead`, nicht `.tiny`, keine neue Klasse. Auf
    Folie 06 (KI für alle - ChatGPT) stand die Unterzeile einmal in `.lead`,
    30 px und dunkler als auf den Trennern. Auf der einzelnen Folie sah das
    richtig aus, aufgefallen ist es erst im Vergleich. Gegenprobe, muss leer bleiben:
    `grep -nA1 'class="rule"' index.html | grep '<p' | grep -v 'class="sub"'`
    Angeordnet am 18.09.2026.
21. **Ein Verbindungssatz ist selbst eine Behauptung.** Regel 14 sagt „nichts
    erfinden", und trotzdem sind zwei Sätze an der Belegpflicht vorbeigerutscht,
    weil sie wie Bindeglieder zwischen zwei belegten Zahlen aussahen: „Auf
    diesen Fotos" setzte drei verschiedene Datenmengen gleich, „bis dahin rang
    man um Zehntelpunkte" war schlicht falsch. Beide hatten **nie** einen
    Eintrag in `quellenangabe.md`, weil niemand sie für eine Aussage hielt. Wer
    zwei Belege nebeneinanderstellt, belegt damit nicht den Satz dazwischen.
22. **Die Quellenhierarchie für die Zeitachse.** Die Seite der Klickpunkt
    Schule (`klickpunktschule.bycs.de/beitrag/ki-geschichte-der-ki`, ISB
    Bayern) bestimmt **Auswahl und Gliederung** der Stationen und die
    Unterscheidung zwischen methodischem Meilenstein und Publikumsereignis. Bei
    **Einzeldaten und Zahlen** entscheidet die Primärquelle. Die Seite hat sieben
    nachgewiesene Mängel, sie ist als Schiedsinstanz über Zahlen nicht geeignet.
    **Jede Abweichung wird in `quellenangabe.md` in der vierten Spalte
    festgehalten, in beide Richtungen** — auch dort, wo das Deck der Seite gegen
    andere Übersichten folgt, etwa bei der Datierung des ersten Winters.
    Zweite Leitquelle für die Gliederung ist die Fraunhofer-Studie
    „Maschinelles Lernen" (2018). Auch sie hat einen Fehler, siehe
    `quellenangabe.md`. Angeordnet am 21.09.2026.

## Bauteile, die es nur hier gibt

Über das aus dem byzz-Deck portierte Design-System hinaus. Wer eine Folie
baut, nimmt diese, statt neue zu erfinden.

| Klasse | Wofür |
|---|---|
| `.h-title` | Schriftstufe 128 px, zwischen `.h-xl` (168) und `.h-l` (96). Die Titelfolie. `.h-xl` bleibt im Stylesheet, wird derzeit aber von keiner Folie benutzt. |
| `.title-list` | Die drei Zeilen unter dem Titel. Kein Aufzählungszeichen, das Fragewort in `<b>` trägt die **Farbe**, nicht das Gewicht: fett stünde neben der 128er Headline zu laut. |
| `.axis` und `.axis__*` | Die waagerechte Zeitachse, siehe unten. |
| `.card__yr` | Jahreszahl als Kartenkopf, anstelle des Piktogramms. Gleiche Höhe und gleicher Abstand wie `.card__ico`, damit Karten mit Jahr und Karten mit Piktogramm nebeneinander auf einer Linie stehen. Nicht zu verwechseln mit `.card__n`, das ist die kleine blasse Ordnungszahl oben rechts. |
| `.card__ab` | Die englische Auflösung einer Abkürzung, unter dem Kartentitel. Steht auf der Folie, damit auch das PDF ohne den Vortragenden verständlich bleibt. Auf der Zeitachse gibt es dafür `.axis__ab`, derzeit von keiner Folie benutzt: Auflösungen auf einer Zeitachse stehen im Detailband (`.marks--tight`), sonst doppeln sie sich über mehrere Stationen. |
| `.marks--tight` | Das Detailband unter einer Zeitachse. Eine Zeile je Station, das Jahr in der ersten Spalte an der Stelle der Raute. Die Zeilen bleiben stehen, am Ende steht die ganze Liste da. Auf Folie 05 (KI wird erwachsen) ist das Band eine Fußnotenleiste: die erste Spalte trägt Sternchen und Abkürzung („\* LLM", „\*\* GPT"), dasselbe Sternchen steht als `.star` am Wort in der Station („Modell\*", „ChatGPT\*\*"), und die Zeile erscheint mit dieser Station. Für die breitere Spalte setzt der Container `--col` (Standard 62px, hier 84px). Oberkante gemessen: Unterkante des tiefsten unteren Textblocks + 30 px. |
| `.ico-arrow` | Freistehender Pfeil zwischen zwei Werten. Steht außerhalb von `.card__ico` und `.path` und ist deshalb **eigens** im Kontur-Selektor eingetragen. |
| `.rings` und `.ring--1` bis `--4` | Die vier ineinanderliegenden Begriffsflächen auf Folie 08 (KI ist nicht eine Sache). Die Verschachtelung **ist** die Aussage, deshalb echte Verschachtelung und nicht vier Karten nebeneinander. Die Einrückung ist konstant, die 92 px oben sind der Platz für Titel und Beisatz des darüberliegenden Ringes. Wer sie verkleinert, schiebt den nächsten Ring in den Text des vorigen. Die Höhe steht **inline**, weil sie zum Inhalt gehört. |
| `.flow` und `.flow__*` | Die Gegenüberstellung auf Folie 09 (Was unterscheidet KI von normaler Software?). Zwei gleich schwere Hälften, dazwischen eine Linie statt zweier Rahmen: zwei Rahmen lesen sich als zwei Themen, es ist aber ein Thema mit zwei Seiten. **Zwei Kästchen je Seite, alle gleich breit**, davon genau **eines** `--key` mit dem Wort „Regeln", links oben und rechts unten. Das ist der ganze Witz der Folie. Die Beschriftungen sind ganze Sätze, keine Substantive: ein Kästchen, in dem nur „Regeln" steht, ist ein Datenflussdiagramm für Informatiker. |
| `.duo` und `.duo__*` | Das Zahlenpaar auf Folie 11 (KI im Alltag). Mono, weil beide Zahlen dieselbe Breite brauchen, sonst wackelt die Eins und der Sprung sieht kleiner aus, als er ist. **Beide Zahlen tragen das Prozentzeichen** — eine nackte 58 neben einer 76 % liest sich wie zwei verschiedene Größen. |
| `.card--key` | Die eine Karte, die einen Abschnitt trägt, auf Folie 06 (KI für alle - ChatGPT) der 30.11.2022. Optik wie `.flow__n--key`, das Datum in `.card__yr` wird größer, die Kopfhöhe bleibt 44 px, damit die Titel der Nachbarkarten auf einer Linie stehen. Das Datum steht in `.card__date`, darunter `.card__stroke` mit `data-draw`. |
| `.star` | Das orange Sternchen, das auf eine Fußnote verweist: auf Folie 10 (Was sie kann und was nicht) hinter „…morgen wieder.", auf Folie 05 (KI wird erwachsen) an „Modell" und „ChatGPT" (Fußnoten im Band unter der Achse). Es steht mit der Karte da, die Fußnote in `.tiny` kommt einen Klick später. Dasselbe `.star` beginnt auch die Fußnote, damit beide als Paar erkennbar sind. |
| `.sub` | Die Unterzeile unter einer Überschrift, 26 px in `--ink-3`. Auf den Trennern unter `.h-l`, auf Inhaltsfolien unter `.rule`. Es gibt keine zweite Stufe dafür, siehe Regel 20. `.lead` ist Fließtext, keine Unterzeile. |
| `.axis__span` | Ein **Zeitraum** auf der Achse, kein Ereignis. Ein Punkt sagt „hier", ein Band sagt „solange". 10 px hoch, liegt bei `top:176` unter der Linie, `left` und `width` inline aus den Jahren gerechnet. **Trägt bewusst keine Beschriftung:** unter der Linie sitzen die Textblöcke der `--dn`-Marken, und eine Beschriftung dort bräuchte 34 px statt 10, die unteren Blöcke müssten auf 236 rücken, und die Folie liefe 28 px über das Inhaltsband. Was die Phase war, erklärt ihre Zeile im Detailband, die im selben Zustand erscheint. Die Tönung steckt in der **Farbe**, nicht in `opacity`: `showFragment()` zieht jedes `data-frag`-Element auf `opacity: 1` und würde einen Wert dort überschreiben. |
| `.axis__span--fade-l` / `--fade-r` | Weiche Kante links oder rechts, frei kombinierbar. Sie ist kein Schmuck, sondern die einzige Form, die **keine Jahreszahl behauptet, die niemand hat**. Der erste KI-Winter trägt beide Kanten („späte 1960er bis 1970er Jahre"), der zweite nur die rechte, weil 1987 als Anfang datierbar ist und für das Ende keine geprüfte Darstellung ein Ereignis nennt. Gemacht mit einer Maske aus `linear-gradient`, nicht mit Blur, das Blur-Budget bleibt unberührt. Trägt ein Band beide Kanten, sind die Verläufe kürzer (70 statt 120 px), sonst bleibt bei 479 px Breite nichts auf voller Deckung stehen und das Band liest sich als Schlagschatten der Linie. |
| `.axis__t` | Der Textblock jeder Station, und zugleich **die Fläche, auf der er steht**. Sie ist die Grundform und kein Zeichen: `rgba(255,253,250,0.26)`, Polsterung 14/16/13, kein Rand. Die Fläche ragt **16 px** über die Textbreite hinaus, links wie rechts, damit der Satzspiegel bündig zum Punkt bleibt. Diese 16 px sind der Platz, den zwei benachbarte Flächen brauchen, und sie stehen als `surfaceBleed` in der Rechnung. Dazu ein flacher Schatten, `0 12px 26px -18px` bei 0.18: Links auf jeder Achse liegt der Grund fast weiß, und 26 % Off-White darauf sieht niemand. Er bleibt flacher als der der `--key`-Karte, die muss die stärkste Fläche bleiben. |
| `.axis__mark--mile` | Die **Tönung** der Fläche, `rgba(246,139,26,0.10)`, sonst nichts: keine andere Größe, kein Rand, kein Schatten. Sie bedeutet **genau eine Sache: hier war das Verfahren neu.** Publikumswirkung steht im Satz der Station, nicht als Zeichen — Deep Blue 1997 bleibt deshalb neutral, AlphaGo 2016 ist getönt. Nicht der Haus-Ton `--orange-soft` (12 % plus Rand 38 %): der gehört den Stellen, die einen Abschnitt tragen. |
| `.marks--inset` | Dieselben `.mark`-Zeilen innerhalb einer Karte. Nur die absolute Lage fällt weg. `.mark--no` färbt die Raute kühl statt orange, für die Gegenspalte auf Folie 10 (Was sie kann und was nicht). Es sind gleichwertige Zeilen, keine Warnungen. |

### Die Zeitachse

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
  Textende der Marke links davon + 40 (+ 28 bei `--key`). Auf Folie 05
  (KI wird erwachsen) steht so 2022 mit `--tx:-90px` und 488 px Breite, damit
  2025 Platz hat. Auf Folie 03 (KI ist älter als die meisten denken) dient
  derselbe Versatz einem anderen Zweck: 1986 steht am rechten Rand und braucht
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

### Die drei Animationen

Bewegt wird mit **GSAP**, das als `assets/js/vendor/gsap.min.js` im Projekt
liegt und schon die Folienübergänge trägt. **HyperFrames kommt hier nicht in
Frage**, auch wenn es dieselbe Bibliothek benutzt: Es ist eine
Video-Render-Umgebung mit npx-Laufzeit und erzeugt eine MP4-Datei. Dieses Deck
ist interaktiv, läuft per Doppelklick unter `file://` und hat Fragmente und
eine Referentenansicht. Wer einen gerenderten Clip will, baut ihn getrennt und
bindet ihn als `<video>` ein, das geht unter `file://`.

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

## Eine Quellenzeile muss erklären, nicht belegen

**Herausgeber, Datum und Stichprobengröße gehören in `quellenangabe.md`, nicht
auf die Folie.** Eine Zeile wie „Bitkom, September 2026, 603 Unternehmen ab 20
Beschäftigten" liest im Vortrag niemand, im PDF auch nicht, und erklärt nichts.
Sie kostet nur Platz und Aufmerksamkeit.

Auf die Folie kommt eine solche Zeile **nur, wenn sie eine Aussage hinzufügt**,
die der Zuhörer sonst nicht hätte. Gesetzt wird sie in **`.tiny`** (19 px), der
Stufe, die auch das Detailband unter einer Zeitachse trägt. Die eine, die im
Deck steht, tut das:

| Folie | Zeile | Warum sie bleibt |
|---|---|---|
| 08 | „Für generative Systeme entwickelt die Behörde erst noch ein Verfahren." | Das ist der Beweis für die Aussage darüber, nicht ihr Beleg |

Auf Folie 11 (KI im Alltag) stand einmal „Dieselben Behandler, dieselben
Bilder." Andrew hat
die Zeile gestrichen, die Aussage steht jetzt nur in Sprechnotiz und Referat.

Der Unterschied ist nicht die Länge, sondern die Frage: **Versteht der Zuhörer
ohne diese Zeile weniger?** Wenn nein, gehört sie in die Quellendatei.

**Und keine eigene Schriftstufe dafür erfinden.** Es gab hier einmal eine
Klasse `.src` mit 17 px, für genau das, was `.tiny` mit 19 px schon leistete.
Vier Stufen für dieselbe Sache ergeben einen sichtbaren Bruch, und genau so ist
es aufgefallen: Auf einer Folie stand der Beleg plötzlich in einer anderen
Größe als auf allen anderen. Das ist Regel 11, und sie gilt auch für
Schriftstufen.

Angeordnet am 18.09.2026, nachdem auf zwei Folien reine Nachweiszeilen standen.

## Das Publikum ist der Maßstab, nicht die Fachlichkeit

Rund die Hälfte der Zuhörer hat keinen IT-Hintergrund. Daraus folgt eine
Prüfung, die **jede** Zeile bestehen muss, bevor sie auf eine Folie kommt:

- **Keine erfundenen Wörter.** „Stundenleistung" stand auf einer Folie und
  bedeutet nichts.
- **Kein Verweis auf die Nachbarspalte.** „Die Zahl nebenan" zwingt den Leser,
  zwischen zwei Stellen hin- und herzuspringen, und im PDF ohne Vortragenden
  bricht der Bezug ganz weg.
- **Fachwörter auch dann nicht, wenn sie stimmen.** „Er leitet die Regel daraus
  ab" ist fachlich richtig und für Laien eine Hürde. „Er findet die Regel
  selbst" sagt dasselbe. Ebenso **„blind bewertet"** statt „verblindet
  bewertet": Der Terminus ist korrekt und sagt trotzdem niemand. Im Beleg bleibt
  die Fachsprache stehen, dort ist sie richtig.
- **Substantive erklären nichts.** Ein Kästchen mit „Regeln" darin ist ein
  Datenflussdiagramm für Informatiker. „Der Mensch gibt die Regel vor" ist ein
  Satz, den jeder versteht.
- **Wer handelt, muss im Satz stehen.** „Merken, wenn sie etwas erfindet" lässt
  offen, wer was merkt. „Merken, wenn sie *selbst* etwas erfindet" nicht.

Die Gegenprobe ist einfach und unbestechlich: **Stockt man beim Vorlesen, ist
die Zeile kaputt.** Auch dann, wenn sie stimmt.

Angeordnet am 18.09.2026, nachdem ein ganzer Abschnitt aus fachlich korrekten
Sätzen bestand, die beim Gegenlesen niemand auf Anhieb verstanden hat.

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

# Unterzeilen nur als .sub (Regel 20), muss leer bleiben
grep -nA1 'class="rule"' index.html | grep '<p' | grep -v 'class="sub"'
```

**Ist eine Folie dazugekommen oder weggefallen, gehört ein Schritt dazu:**

```bash
node "$SK/gliederung.mjs" --md README.md
```

Der Abschnitt „Die Folien" in `README.md` steht zwischen zwei Markern und wird
erzeugt, nicht gepflegt. Und danach **die Folienverweise in der Doku prüfen**:
Sie tragen Nummer und Titel zusammen („Folie 09 (Was unterscheidet KI von
normaler Software?)"), damit ein Verschieben sichtbar wird, statt sich zu
verstecken. Widerspricht ein Titel seiner Nummer, ist die Nummer alt.

**Das PDF wird erst ganz zum Schluss erzeugt**, wenn das Deck inhaltlich fertig
ist. Nicht zwischendurch, auch nicht „nur zur Kontrolle". Solange sich Folien
ändern, ist jedes erzeugte PDF sofort veraltet, und ein veraltetes PDF neben
einem aktuellen Deck ist schlimmer als gar keins. `pdf.bat` und
`node "$SK/deck-pdf.mjs"` laufen also erst am Ende.

**Rückgabewert 0 ist das Abnahmekriterium, nicht die Textausgabe.** Vorsicht bei
`| tail`, dann liest `$?` das letzte Pipeglied und meldet immer Erfolg.

**Die Zeile „Folien im Deck" gegenlesen — es müssen 11 sein.** Kein Prüflauf
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
