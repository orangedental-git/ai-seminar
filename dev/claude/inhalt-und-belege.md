# Inhalt und Belege

Lesen, bevor ein Satz, eine Zahl, eine Unterzeile oder eine Quelle auf eine
Folie, in eine Sprechnotiz oder in `referat.md` kommt. Langfassung der Regeln
14, 20 bis 26 in `CLAUDE.md`, dazu die Regeln für Publikum, Quellenzeilen,
Prozentzahlen und Abkürzungen.

## Regel 14: Nichts erfinden

Keine Zahlen, Jahreszahlen oder Funktionsumfänge ohne Beleg. Bei einem
KI-Vortrag besonders heikel: die Zahlen veralten monatlich.

## Regel 20: Unterzeilen

**Jede Unterzeile unter einer Überschrift ist `.sub`.** Auf den Trennern
wie auf den Inhaltsfolien, direkt unter der Überschrift oder unter dem
Strich `.rule`. Nicht `.lead`, nicht `.tiny`, keine neue Klasse. Auf
Folie 06 (KI für alle - ChatGPT) stand die Unterzeile einmal in `.lead`,
30 px und dunkler als auf den Trennern. Auf der einzelnen Folie sah das
richtig aus, aufgefallen ist es erst im Vergleich. Gegenprobe, muss leer bleiben:
`grep -nA1 'class="rule"' index.html | grep '<p' | grep -v 'class="sub"'`
Angeordnet am 18.09.2026.

**Und eine Unterzeile muss etwas sagen.** Auf Folie 13 stand „Was beim
Bauen geschieht, geschieht beim Benutzen nicht mehr", auf Folie 14 „Eine
Rechnung, Stück für Stück". Beides formuliert nur die Überschrift um und
ist damit Leerlauf: Es kostet Platz und Aufmerksamkeit und liefert
nichts. Vor jeder `.sub` steht dieselbe Frage wie vor einer Quellenzeile:
**Versteht der Zuhörer ohne diese Zeile weniger?** Wenn nein, fällt sie
ersatzlos.

**Und eine Ersatzzeile ist keine, nur weil sie neu ist.** Auf Folie 13
stand daraufhin „Drei Dinge, die oft für eins gehalten werden", und die
Zeile war schlechter als das, was sie ersetzte: Sie behauptet eine
Verwechslung, die es nicht gibt, und zählt drei, während die Überschrift
darüber zwei aufmacht. Aufgefallen ist das erst Andrew. Eine Unterzeile
muss also nicht nur **etwas** sagen, sie muss auch **stimmen** und zur
Überschrift passen. Die Zeilen, die das leisten, sind „Bedient wird nie
das Modell selbst" auf Folie 13 und „Die Antwort entsteht erst beim
Schreiben" auf Folie 14. Nachgetragen am 22.09.2026, der erste Teil am
Vormittag, der zweite am Nachmittag desselben Tages.

**Unterzeilen sind ganze, sachliche Sätze.** Auf Folie 15 stand „Drei
Gründe, und keiner davon ist ein Programmfehler". Das zählte drei, obwohl
die erste Karte („Häufiges sitzt") kein Grund ist, sondern das Gegenstück,
und es sagte nur, was die Ursache *nicht* ist. Vorschläge mit angehängtem
Nachsatz („…, und die Prüfungen belohnen das") und umgangssprachliche
Fassungen („lieber eine Antwort als keine") hat Andrew abgelehnt, weil ganze
Sätze professioneller wirken. Geworden ist daraus „Modelle sind darauf
ausgerichtet, eine Antwort zu geben". Dabei wurden zwei Fallen vermieden:
„Eine Antwort kommt immer" widerlegt der Selbstversuch (Regel 23), und
„Die Systeme müssen …" behauptet einen Zwang statt eines Anreizes und
verwechselt System und Modell (Regel 24).

**Auf den Trennern stehen Fragen, und jede wird im Abschnitt beantwortet.**
Die Trenner 07, 12 und 17 kündigen den Abschnitt mit drei Fragen an. Jede
Inhaltsfolie des Abschnitts kommt in einer davon vor. Hat ein Abschnitt vier
Folien, nimmt eine Frage zwei auf („Wer bietet sie an, und was schaffen
sie?"). Vor jeder Frage steht die Probe: **Welche Folie beantwortet sie, und
tut sie das wirklich?** Gekippt sind dabei „Was heißt eigentlich KI?" (Folie
08 zeigt, was KI umfasst, nicht, was das Wort heißt), „Wie entsteht ein
Modell?" (Folie 13 nennt Trainingsstoff und Rechenzeit, ihr Kern ist aber
Training, Modell und System), „Warum schätzt es Wort für Wort?" (Folie 14
zeigt, wie, nicht warum) und „Was folgt daraus für die Bedienung?" (Folie 16
beantwortet das nur mit einer ihrer zwei Karten). Die Sprechnotiz des
Trenners („Was der Abschnitt beantwortet") und `referat.md` nennen dieselben
Fragen. Angeordnet am 23.09.2026.

## Regel 21: Ein Verbindungssatz ist selbst eine Behauptung

Regel 14 sagt „nichts erfinden", und trotzdem sind zwei Sätze an der
Belegpflicht vorbeigerutscht, weil sie wie Bindeglieder zwischen zwei belegten
Zahlen aussahen: „Auf diesen Fotos" setzte drei verschiedene Datenmengen
gleich, „bis dahin rang man um Zehntelpunkte" war schlicht falsch. Beide
hatten **nie** einen Eintrag in `quellenangabe.md`, weil niemand sie für eine
Aussage hielt. Wer zwei Belege nebeneinanderstellt, belegt damit nicht den
Satz dazwischen.

## Regel 22: Die Quellenhierarchie für die Zeitachse

Die Seite der Klickpunkt Schule (`klickpunktschule.bycs.de/beitrag/ki-geschichte-der-ki`,
ISB Bayern) bestimmt **Auswahl und Gliederung** der Stationen und die
Unterscheidung zwischen methodischem Meilenstein und Publikumsereignis. Bei
**Einzeldaten und Zahlen** entscheidet die Primärquelle. Die Seite hat acht
nachgewiesene Mängel, sie ist als Schiedsinstanz über Zahlen nicht geeignet.
**Jede Abweichung wird in `quellenangabe.md` in der vierten Spalte
festgehalten, in beide Richtungen** — auch dort, wo das Deck der Seite gegen
andere Übersichten folgt, etwa bei der Datierung des ersten Winters.
Zweite Leitquelle für die Gliederung ist die Fraunhofer-Studie
„Maschinelles Lernen" (2018). Auch sie hat einen Fehler, siehe
`quellenangabe.md`.

**Die Seite von bosch.com hat keinen Rang**, weder für die Gliederung noch
für Einzeldaten. Sie ist geprüft, und sie ist Unternehmenskommunikation
ohne Autor und ohne Belegapparat, mit sieben eigenen Mängeln, davon vier
Umkehrungen der Primärquelle. Wert hat sie allein als weitere Gegenprobe
der Stationenauswahl. Wer sie aufschlägt, liest vorher den Abschnitt dazu
in `quellenangabe.md`. Angeordnet am 21.09.2026.

## Regel 23: Der Selbstversuch des Publikums

Regel 14 verlangt einen Beleg, Regel 21 auch für den Satz dazwischen. Beides
reicht nicht. Auf Folie 10 stand „Eine analoge Uhr ablesen: richtig gelesen in
50 % der Fälle. Also Münzwurf.", korrekt zitiert und trotzdem kaputt. Der
Test dahinter besteht aus eigens konstruierten Zifferblättern nach dem
erklärten Prinzip „für Menschen leicht, für KI schwer": römische Ziffern,
gespiegelt, gedreht, bunte Hintergründe. Ein gewöhnliches Zifferblatt auf
einem ordentlichen Foto liest die KI zuverlässig, und **jeder im Saal hat
ein Telefon**. Vor jeder Zeile steht deshalb die Frage: **Würde ein naiver
Selbstversuch das Gegenteil zeigen?** Wenn ja, fliegt sie raus, auch wenn
die Zahl stimmt, denn eine vorführbar falsche Zeile nimmt den Rest der
Folie mit. Am wertvollsten sind die Aussagen, die der Selbstversuch
**bestätigt**, so wie „Zweimal gleich antworten", das jetzt dort steht.
Der Fall und drei Ersatzkandidaten, die an derselben Probe gescheitert
sind, stehen in `dev/nicht-erzaehlen.md`. Angeordnet am 22.09.2026.

**Dieselbe Probe gilt für die Erfahrung im Haus.** Auf Folie 20 standen in
der ersten Fassung Messwerte: Bei vier von fünf Versuchen schafft ein Agent
Aufgaben von rund anderthalb Stunden. Das stimmt für einen Agenten, der
allein und in einem Anlauf arbeitet. Andrew hat mit Claude Code in drei
Wochen eine App-Anpassung erledigt, für die er sonst Monate gebraucht hätte,
und für ihn war die Folie damit vorführbar falsch. Ein Beleg, der gegen die
Erfahrung des Vortragenden steht, ist für diesen Vortrag untauglich, egal
wie sauber gemessen wurde. Ersetzt durch Fälle mit Vorher und Nachher, von
den Firmen selbst berichtet. Nachgetragen am 23.09.2026.

**Und über heutige Systeme sprechen heutige Quellen.** Folie 21 nannte in
der zweiten Fassung einen Herstellertest vom Januar 2025, mit einem Modell
ohne Schutzmaßnahmen. Belegt, aber für die Frage „was kann bei aktuellen
Agenten schiefgehen" ein alter Fall. Jetzt allgemein, nach der laufend
gepflegten BSI-Seite.

## Regel 24: Das Modell ist nicht das KI-System

Die beiden Wörter bezeichnen im Deck zwei verschiedene Dinge, und die
Unterscheidung trägt drei Folien: Das **Modell** ist das trainierte Ergebnis
mit Versionsnummer und Stichtag. Das **KI-System** ist das Programm darum
herum, das bedient wird, das jeder Frage eine eigene Anweisung beilegt, im Netz
sucht, Dokumente beifügt und Notizen führt. Eingeführt wird der Begriff auf
Folie 13 (Vom Training zum Einsatz), gebraucht wird er auf Folie 16
(Was sie braucht und was sie behält).

**Er ist nicht erfunden, sondern amtlich.** Erwägungsgrund 97 der
EU-Verordnung über künstliche Intelligenz: „Obwohl KI-Modelle wesentliche
Komponenten von KI-Systemen sind, stellen sie für sich genommen keine
KI-Systeme dar. Damit KI-Modelle zu KI-Systemen werden, ist die
Hinzufügung weiterer Komponenten, zum Beispiel einer Nutzerschnittstelle,
erforderlich."

**Drei Wörter sind dafür verbrannt.** „Dienst" wird falsch verstanden und
steht in keiner geprüften Quelle in dieser Bedeutung. „Anwendung" scheidet
aus, weil die BSI-Verbraucherbroschüre damit auch das Modell selbst
bezeichnet. „Programm" ist im Deck schon für ELIZA, Expertensysteme und
Agenten belegt und taugt nur als einmalige Erklärung im Nebensatz. Und
**„diese Programme" für die Modelle ist ebenfalls raus**, dort steht jetzt
„diese Modelle". Gegenprobe, muss leer bleiben:
`grep -n 'class="card__d"\|class="mark__t"' index.html | grep -i 'dienst'`
Angeordnet am 22.09.2026.

## Regel 25: Ein Beleg kann wörtlich stimmen und trotzdem falsch zugeordnet sein

Regel 14 verlangt einen Beleg, Regel 21 auch für den Satz dazwischen,
Regel 23 den Selbstversuch. Es fehlt eine vierte Prüfung, und sie kostet
am wenigsten Mühe: **die Adresse aufrufen und das Zitat gegenlesen.**

Die Nachprüfung von Abschnitt 03 hat das belegt. Von vier Zahlen aus einer
begutachteten Arbeit war jede einzelne wörtlich korrekt — und die
Sprechnotiz trotzdem falsch, weil sie **zwei Modelle** für eines hielt.
Zwei weitere Stellen stützten sich auf Sätze, die etwas anderes sagen als
behauptet, einer davon das Gegenteil. Keiner dieser drei Fehler wäre von
einem Prüflauf gemeldet worden, und zwei wären erst im Saal aufgefallen.

Also: **Nach jedem Rechercheblock ein eigener Gegenlesedurchgang**, der
nicht nach neuen Belegen sucht, sondern die vorhandenen widerlegt. Er
prüft vier Dinge je Zeile — gibt es die Quelle, steht das Zitat so dort,
stimmen Datum, Seite und Randnummer, und **trägt der Beleg die Aussage in
der linken Spalte**. Die letzte Frage ist die, an der es scheitert.
Angeordnet am 22.09.2026.

Im wörtlichen Zitat gelten die Hausregeln zur Schreibweise nicht, das regelt
`~/.claude/CLAUDE.md`. Hier passiert ist es in einem BSI-Zitat, dessen `;`
beim Nachziehen der Strichpunktregel zu einem `,` geworden war.

## Regel 26: Ein Datum braucht ein Kriterium

Auf Folie 19 stand bei fünf Produkten die allgemeine Verfügbarkeit, bei
Claude Cowork etwa April 2026 statt Januar, bei Gemini CLI und ChatGPT agent
dagegen der erste Start. Jedes Datum war irgendwo belegt,
aber die Folie hat zwei verschiedene Dinge mit demselben Wort „seit"
bezeichnet. Aufgefallen ist es Andrew, weil er Cowork schon früher benutzt
hatte.

**„Seit" heißt im Deck: erster öffentlicher Start, auch als Vorschau.** Die
allgemeine Verfügbarkeit steht in der Sprechnotiz und in `quellenangabe.md`.
Wer ein anderes Kriterium braucht, schreibt es aus („allgemein verfügbar
seit").

Dazu drei Gewohnheiten, die in derselben Runde angemahnt wurden:

- **Selbst im Rohtext lesen.** Die Zusammenfassung eines Recherche-Agenten
  ist ein Hinweis, kein Beleg. Gelesen wird mit `curl`, über `r.jina.ai` oder
  das Webarchiv (`https://web.archive.org/web/<Zeitstempel>id_/<Adresse>`,
  gzip-gepackt). `openai.com` und die Microsoft-Blogs weisen curl ab.
- **Keine Adresse raten.** Erst suchen, dann aufrufen, dann eintragen. Nach
  dem Eintragen alle Adressen einer Tabelle einmal aufrufen.
- **Aus Schweigen folgt nichts.** Dass eine Dokumentation etwas nicht
  beschreibt, belegt nicht das Gegenteil. Aus „die Codex-Doku beschreibt keine
  automatische Mitschrift" wurde einmal „bei Codex schreibt der Mensch die
  Datei", und das war falsch.

Angeordnet am 23.09.2026.

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

## Abkürzungen werden aufgelöst

**Jede Abkürzung wird bei ihrem ersten Auftreten im Deck aufgelöst** — die
englische Langform auf der Folie, was sie bedeutet in Sprechnotiz und
`referat.md`.

Der Grund ist nicht Stil, sondern die Weitergabe: Das Deck geht als PDF an
Leute, die den Vortrag nicht gehört haben. „ChatGPT" ohne Auflösung ist für
sie Buchstabensalat. Auf der Folie stehen dafür `.card__ab` und `.axis__ab`
bereit.
