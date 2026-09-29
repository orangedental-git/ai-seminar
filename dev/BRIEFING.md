# Briefing: KI-Seminar bei orangedental

Ergebnis von Phase 0 des Skills `create-slides`. Diese Datei ist später die
Antwort auf „warum ist das so?".

> **Hinweis zur Öffentlichkeit:** Der Pages-Workflow stellt das **gesamte**
> Repository online, auch dieses Verzeichnis. Hier gehört deshalb nichts hinein,
> was nicht öffentlich stehen darf, keine Kundendaten, keine unveröffentlichten
> Produktpläne, keine internen Personendaten. Wer das nicht will, macht das
> Repository privat, bevor er zum ersten Mal pusht.

## Anlass und Ziel

**Interne Schulung, ein Vortragender führt.** Andrew hält vor rund 50
Mitarbeitern ein Seminar über KI. Daraus folgt für den Bau:

- **Sprechnotizen ja.** Die Folien tragen nicht allein, Andrew erzählt dazu.
  Jede Folie bekommt ein `<template class="notes">`.
- **Wenig Text, große Bilder.** Aber mehr Text als in einem Vertriebsdeck: die
  Folien werden hinterher als PDF weitergereicht.
- **Kein Selbstläufer.** Wer nur das PDF liest, bekommt nicht alles. Das ist
  bewusst so und der Grund, warum die Notizen nicht sichtbar auf die Folie
  wandern.

## Publikum

Rund 50 Personen, quer durch die Firma: Vertrieb, Support, Verwaltung, Technik.
**Gemischt, eher Laien.** Die Mehrheit hat keinen IT-Hintergrund.

Daraus folgt: Bilder und Analogien vor Fachbegriffen. Jeder Begriff, der fällt
(Modell, Training, Token, Halluzination), braucht eine konkrete Erklärung oder
fliegt raus. Das ist auch die schärfste Leitplanke aus Andrews Schreibstil:
**keine Buzzwords ohne Substanz.**

## Tonfall

**Die Präsentation duzt niemanden**, auch wenn die Veranstaltung intern ist
(angeordnet am 18.09.2026, Einzelheiten in `CLAUDE.md` unter „Anrede"). Locker,
gerne humorvoll, aber kein Fülltext und keine
verschachtelten Sätze. Kurze Hauptsätze auf den Folien.

**„orangedental" wird immer kleingeschrieben**, auch am Satzanfang und auch in
Überschriften.

## Umfang

15–20 Minuten, **nach oben offen**. Angepeilt sind 20–25 Folien, also rund 45
Sekunden je Folie, ruhiger Takt mit Raum für Erklärungen. Mit Abschnitt 05
sind es seit dem 24.09.2026 28 Folien.

Gliederung in fünf Abschnitten (`SECTIONS` in `assets/js/deck.js`):

| | Abschnitt | Inhalt |
|---|---|---|
| 01 | Von den Anfängen bis ChatGPT | der geschichtliche Rückblick, 1950 bis 2025 |
| 02 | Was ist KI heute? | Begriffsstaffelung, der Bruch Regeln gegen Lernen, Können und Grenzen, Verbreitung |
| 03 | Wie KI funktioniert | Training und Einsatz, das geschätzte nächste Wort, warum daraus Erfindungen werden, was die Eingabe bewirkt |
| 04 | KI-Agenten | das ausdrücklich gewünschte Kapitel zu agentischen Systemen |
| 05 | KI bei orangedental | Einsatzmöglichkeiten im Haus, EU AI Act, Datenschutz |

**Aus vier Abschnitten sind am 22.09.2026 fünf geworden.** Das Kapitel zu
agentischen Systemen war als „mehr als ein Folienpunkt" bestellt, und das Deck
verweist an zwei Stellen darauf: Folie 10 beim Sternchen, Folie 11 bei den
11 Prozent. Als angehängter Teil von „KI bei orangedental" wäre es beides
halb. Der Bruch, den es beschreibt, trägt einen eigenen Abschnitt: **Ein
Chatbot antwortet, ein Agent arbeitet.**

Der Name „KI-Agenten" ist am 22.09.2026 gesetzt worden. Er steht an zwei
Stellen, in `SECTIONS` und hier. Wer ihn ändert, ändert ihn dort und auf dem
Trenner, siehe Regel 19 in `CLAUDE.md`.

## Marke

| | |
|---|---|
| Logo | `assets/brand/logo_od_premium_big.png`, unten links, 52 px hoch. Schutzzone x 100–372 / y 948–1034 |
| Wortmarke | „KI-Seminar" unten rechts, gemessen x 1667–1808 / y 986–1016 |
| Lichtzeichen | `#od-blob` aus `logo_od_symbol.svg`: das Hauszeichen, nicht das Produktzeichen |
| Schriften | Familjen Grotesk 500/600 · Inter 400/500/600 · IBM Plex Mono 500 |
| Bezug | aus dem byzz-Deck übernommen, Base64 in `assets/css/fonts.css` |
| Lizenz | alle drei SIL OFL, Weitergabe und Veröffentlichung unbedenklich |
| Farben | `--orange #F68B1A` (Fläche), `--orange-deep #C2620A` (Text, 4,6:1), `--slate #363E4B` als kühler Gegenpol, `--paper #FBF8F4` als Grund |

### Offener Punkt: welcher Orangewert gilt

Das Deck verwendet `#F68B1A`. Dieser Wert ist aus `logo_od_premium_big.png`
gepickt, also aus genau der Datei, die unten links auf jeder Folie steht.

Die Branding-Notiz im 2nd Brain (`00 Kontext/Branding.md`) nennt dagegen
`rgb(240, 131, 25)` = `#F08319`. Der Unterschied ist an der Wahrnehmungsschwelle
und auf einem Beamer nicht zu sehen. **Neben dem Logo-PNG wäre eine Abweichung
dagegen als Kante sichtbar.**

> **Entscheidung für Andrew:** Solange das ausgelieferte Logo-PNG `#F68B1A`
> trägt, bleibt das Deck dabei. Kommt eine verbindliche Freigabe auf `#F08319`,
> wird **zusätzlich** das Logo neu gezogen, sonst nicht.

Wenn gewechselt wird, ist es kein Ein-Zeilen-Eingriff: der Rohwert
`246, 139, 26` steht außerhalb des Tokens noch in `.bloom--warm`,
`.chip--link:hover`, `.step.is-on` und dreimal im Popup-CSS von
`assets/js/presenter.js`. Das Popup sieht die CSS-Variablen des Openers nicht.

## Ausgabe

Dreifach:

1. **Offline per Doppelklick** auf `index.html`, das ist die maßgebliche
   Fassung und der Weg, über den abgenommen wird.
2. **GitHub Pages** über `.github/workflows/pages.yml`.
3. **PDF** über `pdf.bat`, jede Aufbaustufe wird eine eigene Seite. Es entsteht erst,
   wenn das Deck inhaltlich fertig ist, nicht zwischendurch.

## Material

Für Abschnitt 05 trägt Andrews 2nd Brain (`C:\Users\andrewkerkel\2nd-brain`)
belegte Fälle aus dem Haus. Abschnitt 04 bleibt allgemein und stützt sich nur
auf öffentliche Quellen, entschieden am 23.09.2026. Belegt sind dort: der ChecksumHelper als Pre-Build-Event, die
Analyse, Dokumentation und der Umbau der byzz app, Flyer und Präsentationen und
ein ehrlicher Fehlschlag (von Claude versehentlich entfernte UseCases). Nur
geplant oder ohne Begründung notiert sind der Security-Review, das
n8n-Vorhaben und die Recherche zu LLM-Hardware. Die Landingpage-Entwürfe
stehen im 2nd Brain gar nicht. Stand der Prüfung vom 24.09.2026, siehe
„Entscheidungen vom 24.09.2026 · Abschnitt 05".

**Abschnitt 01 bis 03 stehen dort nicht** und müssen vollständig neu erarbeitet
werden.

## Festlegungen

- **`index.html` ist die einzige Quelle der Folien.** Kein Montageschritt,
  `assemble.order` bleibt leer. Ein Erzeugnis und seine Quelle dürfen nicht
  beide von Hand bearbeitbar aussehen.
- **Nichts erfinden.** Keine Zahl, kein Datum, kein Funktionsumfang ohne Beleg.
  Bei einem KI-Vortrag ist das besonders heikel: die Zahlen ändern sich monatlich.
- **Werkzeuge bleiben im Skill.** Kein `node_modules` im Projekt.
- Die Referenzfolien sind mit Abschnitt 02 herausgeflogen. Sie waren das
  **Muster** für Layout, Kartenraster und Aufbaustufen, nie Inhalt.
- **Die Hervorhebung auf den Zeitachsen ist dreistufig.** Zuerst war sie
  zweistufig und die Fläche selbst das Zeichen: Wer eine Fläche hatte, war
  methodisch neu. Das ist seit dem 21.09.2026 anders, weil die Fläche zu gut
  aussah, um sie den meisten Stationen vorzuenthalten.

  **Jede Station steht jetzt auf einer Fläche**, neutral und ohne Rand. Sie ist
  die Grundform und sagt nichts weiter, als dass hier eine Station steht.

  **Die getönte Fläche** (`.axis__mark--mile`, 10 % Orange) sagt: hier war das
  Verfahren neu. Sechs Stationen tragen sie, 1958, 1980, 1986, 2012, 2016 und
  2017. 1997 bleibt neutral, das war das alte Prinzip in schnell.

  **Die helle Fläche mit Rand und Schatten** (`.axis__mark--key`) trägt als
  einzige im ganzen Deck einen Abschnitt: Für das Publikum beginnt KI am
  30.11.2022, und der Abschnitt läuft darauf zu. Wer eine zweite so hervorhebt,
  hebt keine mehr hervor. Sie behält auch als einzige die großzügige Polsterung,
  alle anderen Flächen sind enger gepolstert, sonst stoßen sie aneinander.

  Farbe und Größe sagen damit verschiedene Dinge: **Farbe heißt „hier war das
  Verfahren neu", Rand und Schatten heißen „hierauf läuft der Abschnitt zu".**
  ChatGPT war Publikumswirkung und kein neues Verfahren, deshalb ist die größte
  Fläche der Achse nicht getönt.

  **Jede Fläche hat einen flachen Schatten**, auch die neutrale. Ohne ihn war
  sie dort, wo der Verlaufsgrund hell ist, schlicht nicht zu sehen, und ein
  Feld, das mal da ist und mal nicht, ist schlechter als keins. Der Schatten
  ist deshalb kein viertes Zeichen: Er liegt unter allen drei Stufen gleich,
  nur unter der Karte von 2022 tiefer.
- **Die Versionsnummer GPT-3.5 steht auf Folie 05 (KI wird erwachsen).** Ursprünglich sollte sie
  gar nicht fallen, weil sie mehr Fragen aufwirft, als sie beantwortet. Sie
  steht jetzt trotzdem da, weil „ChatGPT 3.5" als Produktname nicht existiert
  und die Folie sonst nur „ChatGPT" sagen könnte, während eine Folie später
  vom nachtrainierten Modell die Rede ist. Im Vortrag wird sie nicht
  vertieft, das steht so in der Sprechnotiz zu Folie 06 (KI für alle - ChatGPT).

## Belege

**Die Belege stehen in `quellenangabe.md`** im Wurzelverzeichnis: je Folie
eine Tabelle mit Aussage, Fundstelle und einer Adresse zum Nachlesen. Dort
steht auch, wo ein Beleg schwächer ist als der Rest, und warum die Zahlen auf
den Folien gerundet sind.

**Was recherchiert wurde und bewusst nicht vorgetragen wird**, steht in
`dev/nicht-erzaehlen.md`: die Legenden, die gut klingen und nicht stimmen,
und die Zahlen, die kursieren, ohne belegt zu sein. Beides steht absichtlich
nicht in den Sprechnotizen und nicht in `referat.md` — das sind die zwei
Dateien, die im Vortrag gelesen werden.

### Offene Punkte aus der Recherche

- **Keine belegbare Nutzerzahl für Deutschland — erledigt.** Weder OpenAI noch
  Google veröffentlichen Landeszahlen, und dabei bleibt es. Folie 11 (KI im Alltag) nimmt
  stattdessen zwei Bitkom-Erhebungen: 57 % der Unternehmen, 45 % der Menschen
  bei Gesundheitsfragen. Beide repräsentativ, beide mit Stichprobe und
  Zeitraum in `quellenangabe.md`.
- **Der dentale Anker steht — für die USA.** Folie 11 (KI im Alltag) trägt die Leserstudie
  aus dem International Dental Journal (57,9 % auf 76,2 % Sensitivität der
  Behandler), Folie 08 (KI ist nicht eine Sache) die Zahl der FDA-Zulassungen. **Für Europa gibt es
  nichts Vergleichbares**: Die MDR-Zertifizierung läuft über Benannte Stellen,
  EUDAMED ist nicht vollständig befüllt, eine öffentliche Übersicht existiert
  nicht. Wer eine europäische Zahl nennt, nennt eine Schätzung.
- **Für Zahnarztpraxen in Deutschland gibt es keine Nutzungserhebung.** Weder
  bei der KZBV noch bei den Landeskammern. Die Lücke wird im Vortrag benannt,
  nicht gefüllt.
- **Der EU AI Act ist recherchiert, aber bewusst nicht im Abriss.** Er steht
  vom 24.09. bis 28.09.2026 in der Sprechnotiz zur früheren Folie 28 (Wie der
  Einstieg gelingen kann), die entfallen ist. Derzeit steht er nirgends im Deck. Art. 4 zur KI-Kompetenz gilt seit dem 02.02.2025 und ist seit
  dem 27.07.2026 neu gefasst: Firmen, die KI einsetzen, „unterstützen“ die
  KI-Kompetenz ihrer Mitarbeiter, statt sie „sicherzustellen“. Die Fristen
  sind geklärt, siehe „EU AI Act, Fristen“ unter „Offen“.

## Offen

| Punkt | Was zum Schließen nötig ist |
|---|---|
| Orangewert `#F68B1A` vs. `#F08319` | Entscheidung Andrew, siehe oben |
| Live-Demos | Ob und wo aus dem Deck herausgesprungen wird |
| Vortragsdatum | Nicht mehr für die Schlussfolie: Folie 28 trägt seit dem 28.09.2026 nur das Gebäudebild, ohne Datum. Offen nur noch für Titel oder Weitergabe, falls gewünscht |
| Repository privat oder öffentlich | Vor dem ersten Push, siehe Kopf dieser Datei |
| Datenschutz-Folie | **Keine eigene Folie**, entschieden am 24.09.2026. Firmenkonto, keine Patientendaten und § 203 StGB standen auf der früheren Folie 28 und sind mit ihr am 28.09.2026 entfallen, Andrews Entscheidung. Sie stehen derzeit nirgends im Deck. Die OpenAI-Voreinstellung vorher **von Hand im eigenen Konto nachsehen**, sie war an der Quelle nicht abrufbar |
| Abschnitt 03, wie KI funktioniert | **Erledigt am 22.09.2026.** Trenner und vier Inhaltsfolien stehen, die Belege sind einzeln gegengelesen. Folie 13 ist am selben Abend noch einmal überarbeitet worden, siehe unten |
| Abschnitt 04, KI-Agenten | **Gebaut am 23.09.2026**, Trenner plus vier Inhaltsfolien, 17 bis 21, am selben Tag überarbeitet. Der Trenner 17 steht seit demselben Abend, zusammen mit 07 und 12 als Fragen, siehe Regel 20 in `CLAUDE.md` |
| Abschnitt 05, KI bei orangedental | **Gebaut am 24.09.2026**, Trenner plus sechs Inhaltsfolien, 22 bis 28. Seit 28.09.2026 ist 28 die Abschlussfolie „Fragen?“, der Abschnitt hat damit fünf Inhaltsfolien. Offen sind Andrews Eckdaten zur byzz app (Folie 26) und die Copilot-Stufe im eigenen Microsoft 365, siehe „Entscheidungen vom 24.09.2026" |
| EU AI Act, Fristen | **Geklärt am 24.09.2026** über dejure.org und die EU-Kommission, EUR-Lex war nicht abrufbar. Die Verordnung (EU) 2026/1744 verschiebt Hochrisiko-KI nach Anhang I, also auch Medizinprodukte, auf den 02.08.2028. Art. 4 heißt jetzt „unterstützen" statt „sicherstellen". Die Sprechnotiz zu Folie 21 ist nachgezogen |

## Material für das Kapitel zu agentischen Systemen

Recherchiert am 18.09.2026, vorgezogen weil ein Folienpunkt auf Folie 11 (KI im Alltag) schon
daraus stammt. Was nicht verwendet wird, steht mit Einwand in
`dev/nicht-erzaehlen.md`.

**Die Zahl, die schon im Deck steht.** Bitkom, 14.09.2026, dieselbe Erhebung
wie die 57 %: **11 % setzen KI-Agenten ein, 29 % planen es, 31 % diskutieren**,
und zwar bezogen auf die 95 % der Firmen, die KI nutzen oder planen. Auf alle
Firmen umgerechnet rund 10 % und 57 %, so steht es jetzt auf Folie 11. Das
ist erst beim Gegenlesen am 23.09.2026 aufgefallen. 603 Unternehmen ab 20 Beschäftigten, repräsentativ. Das ist
die einzige belastbare deutsche Agentenzahl, die ich gefunden habe. Weder
Destatis noch das ifo erheben Agenten gesondert — wer aus deren Zahlen eine
Agentenzahl macht, erfindet sie.

**Die Abgrenzung, laienverständlich.** Ein Chatbot antwortet, ein Agent
arbeitet. Der Chatbot bekommt eine Frage und gibt Text zurück, damit ist er
fertig. Der Agent bekommt ein Ziel, legt die Schritte selbst fest, benutzt
Werkzeuge, prüft das Ergebnis und macht weiter. Der Unterschied, der im Betrieb
zählt: **der Agent tut etwas.** Ein falscher Satz ist ärgerlich, eine falsche
Handlung hinterlässt Spuren. Quelle der Abgrenzung: Anthropic, „Building
Effective AI Agents", 19.12.2024.

**Der Satz, der für orangedental am schwersten wiegt.** Die
Bundeszahnärztekammer hat im Oktober 2025 Stellung bezogen: Die Behandelnden
„bleiben auch beim Einsatz von KI-Anwendungen persönlich voll verantwortlich",
und Hochrisiko-KI-Medizinprodukte werden „ausschließlich unter menschlicher
Aufsicht betrieben", Letzteres nach ihrer Angabe ab 02.08.2027. Die Frist ist
durch die Verordnung (EU) 2026/1744 auf den 02.08.2028 verschoben, Beleg in
`quellenangabe.md` bei Folie 21. Das ist die Grenze, die der
Berufsstand selbst zieht, und sie ist wichtiger als jede Prozentzahl. Hier
stand bis 23.09.2026 „autonomer Betrieb ausdrücklich ausgeschlossen". Das Wort
„autonom" kommt in der Stellungnahme nicht vor.
`https://www.bzaek.de/service/positionen-statements/einzelansicht/kuenstliche-intelligenz-in-der-zahnaerztlichen-praxis.html`

**Das Gegengewicht.** In einem Versuch mit 175 echten Büroaufgaben in einer
nachgebauten Firma erledigt der beste Agent rund 30 % eigenständig, bei
Datenanalyse und Verwaltung oft gar nichts, am schlechtesten dort, wo mit
Kollegen geredet werden muss. Vor Verwendung die Arbeit selbst aufschlagen,
die Zahlen der Erstfassung lagen niedriger.

**Sicherheit.** Anthropic misst gegen untergeschobene Anweisungen aus
Webseiten eine Erfolgsquote von 1 % und schreibt selbst dazu, das sei weiterhin
ein erhebliches Risiko und kein Browser-Agent sei dagegen immun. Eine
Fehlerquote von 1 % klingt klein, bis man sie mit der Zahl der Seitenaufrufe
multipliziert, die ein Agent an einem Arbeitstag macht.

**Worauf zu warten sich lohnt.** Das PraxisBarometer Digitalisierung 2026 der
KBV hat als Schwerpunkt den KI-Einsatz, die Befragung lief bis 23.08.2026, die
Veröffentlichung steht für Herbst 2026 an. Die Vorgängerwelle umfasste rund
1.700 Ärztinnen, Zahnärzte und Psychotherapeuten.

**Belege, die vor dem Kapitel selbst aufzumachen sind**, weil sie beim Abruf
gesperrt oder nicht auffindbar waren: McKinsey State of AI 2026, die
Deloitte-Agentenzahlen und sämtliche Gartner-Quellen.

---

## Entscheidungen vom 21.09.2026 · Zeitachse der KI-Geschichte

Anlass: Die Zahl 3,2 Mio. für 2009 war im Beleg auffindbar, im Papier zu 2012
nicht. Die Nachprüfung bestätigte das und legte ein größeres Problem frei.

| Frage | Entscheidung |
|---|---|
| Rang der ISB-Seite | Gliederung und Stationenauswahl ja, Einzeldaten nein. Jede Abweichung steht in `quellenangabe.md`, in beide Richtungen |
| Zweite Leitquelle | Fraunhofer, „Maschinelles Lernen" (2018), Kap. 1.2 und Tabelle 1 |
| KI-Winter | Als Zeitraum, neues Bauteil `.axis__span`. Punkt bleibt Ereignis, Band wird Phase |
| Erster Winter | „späte 1960er bis 1970er Jahre", nach der ISB-Seite, beide Kanten weich |
| Zweiter Winter | ab 1987, linke Kante scharf, rechte weich. Am Anfang des Bandes steht zusätzlich eine Marke ohne Karte, sie erscheint im selben Zustand wie das Band |
| Folienzahl | Zwei Geschichtsfolien statt einer. Deck hat jetzt 11 Folien |
| Kennzeichnung | Fläche = Station, getönte Fläche = methodisch neu. Publikumswirkung steht im Satz |
| Watson 2011 | Nur Sprechnotiz |
| McCulloch und Pitts 1943 | Nur Sprechnotiz und Referat. Im Detailband stand einmal „das Neuron als An-Aus-Prinzip", ein Etikett ohne Aussage. Jetzt sagt die Zeile, was An-Aus heißt, und nennt das Perzeptron. Jahr und Namen trägt der Vortrag |
| XAI 2016 | Draußen |
| 2009, die Fotosammlung | Draußen |
| Achsenskript | `achsen-rechnen.mjs`, dauerhaft im Skill |
| bosch.com als Quelle | Geprüft und **ohne Rang**, weder für die Gliederung noch für Einzeldaten. Sieben Mängel mit Gegenbeleg in `quellenangabe.md`, der Rang in Regel 22 |
| Was daraus übernommen wird | NETtalk bei 1986, Siri bei der Lücke 1997 bis 2012, die Bildgeneratoren bei 2022. **Alle drei nur in Sprechnotiz und Referat**, keine neue Station auf einer Achse |
| MYCIN und die Haftungsfragen | Gestrichen. Die Begründung stand in Notiz und Referat und ist nicht belegt: Das Buch nennt in Kapitel 36 selbst zu teure Rechner und ein zu schmales Wissensgebiet. Siehe `dev/nicht-erzaehlen.md` |
| NETtalk im Detailband von Folie 03 | Verworfen. Fünf Zeilen enden bei y 932, `content.bottom` liegt bei 940, eine sechste liefe 28 px über |
| Die Alltagszeile auf Folie 04 | Aus der Sprechnotiz **auf die Folie** geholt, als Fußzeile unter einem Trenner, eigener Klick am Ende. Sie füllt den Sprung von 1997 auf 2012 und führt auf den Schlusssatz des Abschnitts zu |
| Woher der Platz dafür kam | Aus dem Zeilenabstand des Detailbands, `gap:6px` statt 10. **Nicht** aus der Achse: sie steht auf Folie 03 und 04 gleich hoch, und ein Versatz ließe die Linie beim Folienwechsel springen. Der erste Versuch mit 20 px höherer Achse drückte zudem die Karte „ab 1987" bis auf 5 px an den Strich unter der Überschrift |

**Offen und ausdrücklich vertagt: der Dental-Strang.** Vollständig recherchiert,
Belege in `dev/nicht-erzaehlen.md` unter „Der Dental-Strang, geparkt". Er kommt
als **eigene Folie in einem getrennten Schritt**, nicht auf die Geschichtsachse.
Kern ist die Gegenüberstellung zweier Behördensätze, zwanzig Jahre auseinander:
1998 durfte das System erst nach der ärztlichen Erstbefundung markieren, 2018
entscheidet es ohne Bildbefundung durch einen Spezialisten.

---

## Entscheidungen vom 22.09.2026 · Folie 10

**Der Uhr-Punkt ist gestrichen.** In der rechten Karte stand „Eine analoge Uhr
ablesen: richtig gelesen in 50 % der Fälle. Also Münzwurf." Drei Gründe, und
der dritte ist der, auf den es ankommt: Die Zahl war veraltet (ClockBench,
September 2026: 66,7 % gegen 90,7 % beim Menschen), der Beleg zeigte auf eine
Seite, die gar keine Zahl nennt, und der Test misst etwas anderes, als der Satz
behauptet. Er besteht aus eigens konstruierten Zifferblättern, römische
Ziffern, gespiegelt, gedreht. Ein gewöhnliches Zifferblatt liest die KI
zuverlässig, und das kann jeder im Saal in dreißig Sekunden vorführen.
Vollständig in `dev/nicht-erzaehlen.md`.

**An seiner Stelle steht „Zweimal gleich antworten."** Ausgewählt aus fünf
Rechercheläufen und rund zwanzig geprüften Kandidaten, als einziger, den der
Selbstversuch des Publikums **bestätigt** statt widerlegt. Beleg an der
Primärquelle gegengelesen, Thinking Machines Lab vom 10.09.2025: dieselbe
Anfrage tausendmal an dasselbe Modell bei abgeschaltetem Zufall, achtzig
verschiedene Fassungen, inhaltlich abweichend in acht von tausend Läufen. Der
Satz der Folie ist nicht die Zahl, sondern die Ursache: Anfragen werden zu
Paketen gebündelt, und wer sonst gerade fragt, verändert das Rundungsverhalten.

**Die rechte Karte ist neu geordnet.** „Aus Korrekturen lernen" steht jetzt
unten, weil es das Sternchen trägt und die Fußnote direkt darunter sitzt. Die
Reihenfolge ist in Sprechnotiz und `referat.md` nachgezogen, samt der
Ordnungswörter im Fließtext.

**Daraus folgt Regel 23 in `CLAUDE.md`:** Jede Aussage muss dem Selbstversuch
des Publikums standhalten. Die Regel gilt für das ganze Deck, nicht nur für
diese Folie.

---

## Entscheidungen vom 22.09.2026 · Abschnitt 03

Vier Rechercheläufe parallel, je einer für Training, Rechenweise, Erfindungen
und Eingabe. Was verworfen wurde, steht mit Einwand in `dev/nicht-erzaehlen.md`.

| Frage | Entscheidung |
|---|---|
| Umfang | Trenner plus vier Inhaltsfolien. Der Stoff trug vier, nicht drei: Training, Rechenweise, Erfindungen und Bedienung lassen sich nicht zu zweit erklären, ohne dass eine Folie zwei Themen trägt |
| Gliederung | **Aus vier Abschnitten werden fünf.** Agenten werden Abschnitt 04, orangedental rückt auf 05 |
| Form | 3 Karten, 2 Karten, 3 Karten, 2 Karten im Wechsel. Der Kontaktbogen war der Grund: Vier gleich gebaute Folien hintereinander lesen sich als eine |
| Schlussfolie | **Was daraus für die Arbeit folgt**, keine Warnung. Links, was in die Fragen gehört, rechts, was davon bleibt. Damit endet der Abschnitt so, wie Folie 10 ihn begonnen hat |
| Zahlen auf den Folien | Nur eine: die 3.500 Jahre Rechenzeit. Der deutsche Aufschlag bei der Zerlegung (50 %) ist wieder heruntergenommen, er gilt nur für den Zerleger von 2023, siehe `dev/nicht-erzaehlen.md`. Alles andere steht in der Sprechnotiz oder im Beleg |

**Regel 23 hat in diesem Abschnitt mehr Zeilen gestrichen als Regel 14.** Das
ist der Befund, der über den Abschnitt hinaus zählt. Die gängigen Erklärsätze
über KI sind fast alle vorführbar falsch, obwohl sie belegt sind:

- „Die KI lernt nicht aus dem Chat" — die Dienste haben eine
  Gedächtnisfunktion, in den Privattarifen von sich aus an.
- „Sie schlägt nichts nach" — die Dienste haben eine Websuche. Dieser Einwand
  hat eine Zeile des Abschnittstrenners gekippt.
- „Wie viele R stecken in ‚Erdbeere'" — lösen die heutigen Programme
  zuverlässig.
- „Sie sagt nie, dass sie etwas nicht weiß" — im gemessenen Versuch ließ ein
  Modell 63 % der Fragen offen.

**Die Rettung ist jedes Mal dieselbe Umstellung: vom Modell auf den Dienst.**
Das Modell verändert sich nicht, greift in keine Datenbank und merkt sich
nichts. Der Dienst dagegen führt Notizen, sucht im Netz und kopiert Dokumente
in die Frage. Diese Trennung trägt gleich drei Folien und ist zugleich die
Brücke zur Datenschutzfolie in Abschnitt 05.

### Quellenlage, zwei Befunde fürs Protokoll

**Die Leitquelle zu den Erfindungen ist seit April 2026 begutachtet.** Sie
erschien als Kalai, Nachum, Vempala, Zhang, *Evaluating large language models
for accuracy incentivizes hallucinations*, **Nature 653, 1047–1051 (2026)**,
unter anderem Titel als der Vorabdruck *Why Language Models Hallucinate* vom
04.09.2025. Belegt wird immer die Zeitschriftenfassung.

**Für Abschnitt 03 tragen deutsche amtliche Quellen mehr als erwartet.** Die
Phasentrennung steht wörtlich beim Europäischen Datenschutzausschuss und beim
Büro für Technikfolgen-Abschätzung des Bundestages, die Rechenweise und die
Prüfpflicht beim BSI, die Zerlegung in Stücke beim Hamburgischen
Datenschutzbeauftragten und bei Fraunhofer. Das war vorher nicht absehbar und
erspart dem Deck jede Berufung auf Herstellerprosa in der Sache. Anbieterseiten
stehen nur dort, wo sie Primärquelle für **eine Zusage oder eine Einstellung**
sind, nicht für den technischen Stand.

### Überarbeitung am selben Tag, nach dem Gegenlesen

Fünf weitere Rechercheläufe parallel. Ergebnis: **zwei Sachfehler auf fertigen
Folien**, ein neuer Grundbegriff und vier gestrichene Leerformeln.

| Punkt | Entscheidung |
|---|---|
| **Der Grundbegriff** | **„Das KI-System"**, und zwar auf Folie 13 eingeführt. Erwägungsgrund 97 der EU-Verordnung sagt es wörtlich: Ein Modell ist für sich genommen kein KI-System, erst weitere Teile wie eine Nutzerschnittstelle machen eins daraus. Der zuvor verwendete „Dienst" ist raus, er wurde falsch verstanden und kommt in keiner geprüften Quelle in dieser Bedeutung vor |
| Warum nicht „die Anwendung" | Die BSI-Verbraucherbroschüre benutzt „Anwendung" **auch für das Modell selbst**. Ein Wort, das für beide Seiten der Grenze steht, kann die Grenze nicht ziehen. Gezählt, nicht geschätzt, siehe `dev/nicht-erzaehlen.md` |
| Die Kette auf Folie 13 | **Training → Modell → KI-System.** „Der Betrieb" ist entfallen, die Karte trägt jetzt den Begriff. „Ein besseres Modell ist immer ein neues" ist nach Karte 2 gewandert, wo es hingehört |
| **Sachfehler 1: der Trainingsstoff** | „Sehr viele Texte" war unvollständig. Vier Hersteller nennen im Abschnitt über die **Vortrainingsdaten** auch Bilder, zwei davon Ton und Video, zwei zusätzlich Programmcode. Auf der Folie steht deshalb „Texte und Bilder aus dem Netz, dazu Programmcode" — und ausdrücklich **nicht** Ton, weil das nur die halbe Beleglage trägt |
| **Sachfehler 2: die 3.500 Jahre** | Es sind **Grafikprozessor**-Stunden. „Auf einem einzelnen Prozessor" untertrieb also genau dort, wo die Zahl beeindrucken soll. Jetzt „Grafikkarte", was zusätzlich den Bogen zu Folie 04 schlägt: 2012 genügten zwei handelsübliche Karten und fünf Tage |
| Folie 14, der Begriff | **„Token" wird jetzt hier eingeführt und erklärt.** Das ist das Wort, das in jeder Dokumentation steht, und der Abschnitt ist der einzige Ort, an dem es ohne Bruch fällt |
| Folie 14, die Eingabe | Die linke Karte heißt nicht mehr „Der Text", sondern **„Die Eingabe"**, weil dort jetzt auch das Bild steht: Ein Screenshot wird verkleinert und in ein Raster kleiner Quadrate geschnitten, jedes davon ein Token. Belegt bei drei Anbietern. Der praktisch wertvolle Teil ist die **Verkleinerung** — kleine Schrift kann dabei verloren gehen, und das steht so beim Hersteller |
| Folie 14, das Reim-Beispiel | Ersetzt durch die **zusammengesetzte Frage** (Dallas → Texas → Austin), nachgewiesen durch einen Eingriff mit vorhergesagtem Ergebnis. Näher am Arbeitsalltag, und der Selbstversuch bestätigt sie. Das Reim-Beispiel hatte zwei Einschränkungen, die erst bei der Nachprüfung auffielen, siehe `dev/nicht-erzaehlen.md` |
| Folie 15 | Dritte Karte heißt **„Antwort um jeden Preis"**. „Null Punkte" ist gestrichen, es erklärt sich nicht. Jetzt: „Wer nichts sagt, hat sicher verloren." Und „diese Programme" ist zu „diese **Modelle**" geworden, sonst hieße dasselbe Wort zwei Dinge |
| **Vier Leerformeln gestrichen** | „Was beim Bauen geschieht, geschieht beim Benutzen nicht mehr" und „Eine Rechnung, Stück für Stück" sagten nichts, was der Zuhörer nicht ohnehin sieht. Ersetzt durch „Drei Dinge, die oft für eins gehalten werden" und „Die Antwort entsteht erst beim Schreiben" |

**Die Regel, die sich daraus ergibt:** Eine Unterzeile, die nur die Überschrift
umformuliert, ist keine Unterzeile, sondern Leerlauf. Sie kostet Platz und
Aufmerksamkeit und liefert nichts. Vor jeder `.sub` steht deshalb die Frage:
Versteht der Zuhörer ohne diese Zeile weniger? Das ist derselbe Maßstab, der
schon für Quellenzeilen gilt.

### Die Nachprüfung der Belege, und was sie gefunden hat

Sämtliche Adressen und Zitate der Folien 13 bis 16 sind einzeln aufgerufen und
Wort für Wort gegengelesen worden. **Das Ergebnis ist überwiegend gut und an
drei Stellen unangenehm.**

Gut: Die Leitquelle hält vollständig. Nature 653, 1047–1051 (2026) existiert,
ist regulär begutachtet, Band, Seiten, Autoren und alle drei Daten stimmen, und
**jedes einzelne Zitat daraus ist wörtlich korrekt**, auch die vier Zahlen aus
den Methods. Ebenso bestätigt: die Randnummern beim Europäischen
Datenschutzausschuss, die Seitenzahlen 20 und 29 im Bundestagspapier, die
30,84 Millionen Stunden in der Modellkarte samt Division, der 50-Prozent-Satz
bei Petrov, die Zerlegung beim Hamburgischen Datenschutzbeauftragten, die
Rollen-Untersuchung mit 162 Rollen und 2.410 Fragen, und sämtliche
BSI-Zitate im Wortlaut.

Unangenehm waren drei Befunde:

1. **Die Zahlen aus den Methods gehören zwei verschiedenen Modellen.** Jedes
   Paar dort ist „erst GPT-5-mini, dann o4-mini". Die Sprechnotiz stellte
   20,8 gegen 76,8 und behauptete dazu „dasselbe Programm" — das waren zwei
   Modelle unter derselben Bewertung. Die tragfähige Lesart ist **ein** Modell
   über **zwei** Bewertungen: GPT-5-mini, Fehler 20,8 → 76,7 %, Nichtantworten
   63,2 → **1,5 %**. Aus „63 auf 3" wird damit „63 auf 2". Die Folie selbst
   nennt keine dieser Zahlen, es traf nur die Notiz.
2. **Folie 16 behauptete, Einzelheiten gingen beim Zusammenfassen verloren.**
   Der angegebene Beleg sagt das Gegenteil („Your full chat history is
   preserved"), und die Zusammenfassung hängt zusätzlich an einer Einstellung.
   Die Zeile stützt sich jetzt auf die Fehlermeldung, die der Nutzer wirklich
   zu sehen bekommt.
3. **„Eine Rolle ändert den Ton, nicht die Richtigkeit"** hatte eine belegte
   und eine unbelegte Hälfte. Die Untersuchung misst ausschließlich
   Richtigkeit, zum Ton sagt sie nichts, und der danebengestellte Satz des
   Herstellers handelt von **Beispielen**, nicht von Rollen. Genau der
   Fehlertyp aus Regel 21. Die Zeile ist auf das Belegte zurückgezogen.

Dazu acht kleinere Korrekturen, alle in `quellenangabe.md` nachgeführt: zwei
falsche Fundstellen (Abschnitt 3.2 statt 3.3, Seite 30 statt 31), ein Zitat,
das der Anbieter inzwischen umformuliert hat, ein im Zitat getilgter
Strichpunkt (die Hausregel gegen den Strichpunkt gilt in wörtlichen Zitaten
**nicht**), eine als Lebenszyklus-Definition ausgegebene Zweckbeschreibung,
eine dem Datenschutzausschuss zugeschriebene Definition, die er selbst nur
zitiert, ein Zitat, dessen „This effect" etwas anderes meint als gedacht, und
eine Prozentspanne, deren Untergrenze im Volltext nicht auffindbar war und
durch einen belegten Wert ersetzt wurde.

**Was daraus fürs Weitere folgt:** Die Nachprüfung hat sich gelohnt und gehört
nach jedem Rechercheblock wiederholt. Drei der Befunde hätte kein Prüflauf
gefunden, und zwei davon wären erst im Saal aufgefallen.

### Zweite Überarbeitung von Folie 13, am selben Tag

Andrew hat Überschrift und Unterzeile beanstandet und zwei inhaltliche
Erweiterungen bestellt. Zwei Rechercheläufe parallel, einer zu den
Trainingsmodalitäten, einer zu dem, was ein KI-System der Eingabe beilegt.

| Punkt | Entscheidung |
|---|---|
| Die Unterzeile | „Drei Dinge, die oft für eins gehalten werden" ist **selbst eine Leerformel gewesen**, und zwar eine, die erst am Vormittag als Ersatz für eine andere entstanden war. Sie behauptet eine Verwechslung, die es nicht gibt, und zählt drei, während die Überschrift zwei aufmacht. Jetzt: **„Bedient wird nie das Modell selbst."** — der Satz, der im Vortrag noch dreimal gebraucht wird |
| Die Überschrift | **„Vom Training zum Einsatz."** Beide Wörter sind die amtlichen Namen der Phasen. „Vom Training zur Anwendung" war der erste Wunsch und ist an Regel 24 gescheitert, siehe `dev/nicht-erzaehlen.md` |
| **Ton und Video kommen doch auf die Folie** | Am Vormittag ausgeschlossen, am Nachmittag belegt. Grund ist eine Quellenart, die es vorher nicht gab: Die EU-Verordnung verpflichtet die Anbieter zu einer **öffentlichen Zusammenfassung der Trainingsinhalte**, OpenAI hat sie nach dem amtlichen Vordruck vorgelegt, mit angekreuzten Feldern und Mengenangaben. Zusammen mit der Gemini-Modellkarte sind es zwei Anbieter. Auf der Folie steht deshalb **„bei zwei der großen Anbieter"**, nicht „auch Ton und Video" |
| Karte 3, die dritte Karte | Statt eines einzelnen Beispiels nennt die Folie jetzt, **dass** etwas beigelegt wird und **dass niemand es sieht**. Die Aufzählung — Verhaltensregeln, heutiges Datum, Werkzeuge — steht in der Fußzeile |
| **Die Beleglücke, die dabei aufgefallen ist** | Verlangt war, nur zu nennen, was ChatGPT, Gemini, Claude Code und Codex **gemeinsam** haben. Streng genommen ist das ein einziger Punkt, gespeicherte Nutzerangaben, weil **Google über den vorangestellten Kontext nichts veröffentlicht**. Die Folie nennt darum, was bei mindestens zwei Anbietern dokumentiert ist und dem keiner widerspricht. Das Gedächtnis bleibt Folie 16 |
| Die Fußzeile wird zweizeilig | Und damit rückt ihre Oberkante von `top:868` auf `856`. Bei 868 endet die zweite Zeile bei 938, zwei Pixel vor der Grenze — und `layout-audit` hätte das **nicht gemeldet**, es prüft mit 4 px Toleranz. Derselbe Fall wie bei `.marks--tight` auf Folie 04 |

**Der Befund fürs Protokoll:** Eine Aussage, die heute an der Beleglage
scheitert, kann morgen belegt sein, weil eine **Pflichtveröffentlichung**
hinzukommt. `dev/nicht-erzaehlen.md` ist deshalb kein Friedhof, sondern eine
Liste zum Wiedervorlegen. Umgekehrt gilt es genauso: Die Einträge dort nennen
den Einwand, nicht nur das Ergebnis, und nur deshalb war diesmal in einer
Minute zu sehen, was sich geändert hatte und was nicht.

### Offen nach diesem Schritt

| Punkt | Was zum Schließen nötig ist |
|---|---|
| Abschnittsname 04 | **Erledigt.** „KI-Agenten", entschieden am 22.09.2026 |
| Folie 10, die Zeile „Aus Korrekturen lernen" | **Erledigt am 22.09.2026.** Die Zeile ist vom Dienst auf das Modell umgestellt: „Das Modell bleibt, wie es ist." Sprechnotiz und `referat.md` warnen jetzt ausdrücklich davor, „im nächsten Gespräch ist alles weg" zu sagen |

---

## Entscheidungen vom 23.09.2026 · Abschnitt 04

Drei Rechercheläufe parallel (Begriff und Anbieter, gemessene Stärken,
Schwächen), danach drei Gegenleseläufe nach Regel 25, je Folie einer.

| Frage | Entscheidung |
|---|---|
| Umfang | Trenner plus vier Inhaltsfolien: was anders ist, wer anbietet, was gemessen ist, wo es schiefgeht |
| Namen | **Produktnamen ja, Modellnamen nein.** Claude Code, Codex usw. sind KI-Systeme im Sinne von Regel 24 und halten länger als eine Modellversion. Jeder Name mit Hersteller und Monat der allgemeinen Verfügbarkeit |
| Hausfälle | Nicht in 04. Der Abschnitt stützt sich nur auf öffentliche Quellen, die Fälle aus dem 2nd Brain gehören nach 05 |
| Vorfälle | Nur in der Sprechnotiz, nicht auf der Folie. Replit als Antwort auf Nachfragen |
| Live-Demo | Offen, die Folien funktionieren mit und ohne |
| Folie 21, erste Karte | **Vorschlag, noch nicht abgenommen:** die Dreierprobe nach Willison statt einer Angriffsquote. Andrew entscheidet am Bild |

**Die Nachprüfung hat drei Aussagen aus dem Entwurf gekippt**, bevor sie auf
eine Folie kamen:

1. **„Selbst beim besten Schutz klappt jeder hundertste Angriff."** Das Zitat
   vom 24.11.2025 ist wörtlich richtig, die Zahl aber überholt. Seit August 2026
   meldet Anthropic auf einem härteren Test mit Schutz für die meisten Modelle
   null erfolgreiche Angriffe. Die Zeile wäre am Selbstversuch gescheitert.
2. **Airbnb als Agentenbeispiel.** Airbnb beschreibt eine feste Abfolge mit
   Sprachmodell („state machine"), keinen Agenten. Jetzt Beleg für die
   Abgrenzung auf Folie 18.
3. **„Ein falscher Schritt am Anfang."** Das „am Anfang" steht nicht in der
   Quelle.

**Und zwei Fehler auf fertigen Folien:**

- **Folie 11:** Die Bitkom-Zahlen 11/29/31 % beziehen sich auf die Firmen, die
  KI nutzen oder planen (95 %), nicht auf alle. Jetzt „jedes zehnte" und „mehr
  als die Hälfte", Rechenweg in `quellenangabe.md`.
- **Folie 10:** Die Fußnote versprach, Agenten hielten sich an ihre Notizen.
  Der Hersteller schreibt „context, not enforced configuration". Jetzt „lesen
  es beim nächsten Mal wieder".

Dazu ein Fehlschluss, der im Gespräch aufgefallen ist, nicht im Prüflauf:
Aus „die Codex-Doku beschreibt keine automatische Mitschrift" wurde „bei Codex
schreibt der Mensch die Datei". Falsch, Codex ist ein Agent mit
Schreibzugriff und ergänzt die AGENTS.md auf Aufforderung selbst. **Dass eine
Dokumentation etwas nicht beschreibt, belegt nicht das Gegenteil.**

### Offen

| Punkt | Was zum Schließen nötig ist |
|---|---|
| Folie 17 | Überarbeitung steht noch aus |

### Überarbeitung am selben Tag, nach Andrews Durchsicht

| Folie | Entscheidung |
|---|---|
| 17 | Wird später überarbeitet, in dieser Runde nicht angefasst |
| 18 | Unterzeile „Ein Agent arbeitet am Rechner, mit den Dateien darauf". Bewusst nicht „auf der eigenen Festplatte", weil ChatGPT agent und die Cloud-Fassungen auf einem Rechner beim Anbieter arbeiten. Karte 2 nennt jetzt suchen, anlegen, ändern, löschen, Programme starten und die Freigabe durch den Nutzer. Karte 3 sagt „in Dateien", CLAUDE.md oder AGENTS.md, dazu Notizen, Anleitungen und Skripte |
| 19 | **Ein Datumskriterium:** erster öffentlicher Start, auch als Vorschau. Jedes Datum im Rohtext der Primärquelle gelesen und in `quellenangabe.md` verlinkt. Microsoft 365 Copilot mit dem Agentenmodus in Word und Excel seit September 2025 neu, Cowork von April auf Januar 2026 korrigiert |
| 20 | **Keine Messwerte mehr**, drei Fälle mit Vorher und Nachher: Bun (ein Jahr in elf Tagen), Salesforce (231 Personentage in 13 Tagen), Doctolib (Stunden statt Wochen). Unterzeile „Mit einem Menschen, der steuert." Andrews eigener Fall bleibt für Abschnitt 05 |
| 18, zweite Runde | Unterzeile auf Andrews Wortlaut: „Ein Agent arbeitet mit Programmen und Dateien auf dem Rechner." |
| 21, zweite Runde | **Allgemein statt Einzelfall, nur heutige Agenten.** Versteckte Befehle, Handlungen, die keiner wollte, schwer nachzuvollziehen. Grundlage BSI-Verbraucherseite und Cowork-Sicherheitsseite. Der Operator-Test von 2025 und das Restaurant-Beispiel sind raus |
| 18, dritte Runde (28.09.2026) | **Die Fußzeile zur KI-Verordnung ist raus.** Stattdessen ein Sternchen an Karte 3 und die Fußnote „Aus Prompt Engineering wird Context Engineering …", Wortlaut von Andrew gewählt. Der Schlusssatz „nur so gut wie der Kontext" ist eine Zuspitzung und in `quellenangabe.md` als solche ausgewiesen. Die Fußnote kommt mit Karte 3, `data-fragments` deshalb 4, und sitzt zweizeilig auf `top:856` |
| 21, erste Runde | **Alltagsbilder statt Mechanismen, keine Vorfälle.** Versteckte Befehle (BSI), anders als gemeint (Operator-Test von OpenAI), mit den Rechten des Nutzers (OpenAI-Hilfe). Fußzeile mit dem BSI-Rat, einem Agenten nie Mail, Bankkonto und Dateien zugleich zu geben. Die Frage zur Dreierprobe ist damit erledigt |

**Was daraus fürs Weitere folgt:** Ein Datum ohne erklärtes Kriterium ist
ungenau, auch wenn es irgendwo belegt ist. Und ein Beleg, der gegen die
Erfahrung des Vortragenden steht, ist für diesen Vortrag untauglich, egal wie
sauber er gemessen ist.

## Entscheidungen vom 24.09.2026 · Abschnitt 05

Grundlage: neun Rechercheläufe, jede tragende Zahl danach selbst im Rohtext
gelesen. Andrews Auswahl aus der Ideensammlung:

| Punkt | Entscheidung |
|---|---|
| Kern | **Der Posteingang und Support und Wissen.** Dazu Alltag mit Excel und Word, weil die Mitarbeiter Microsoft 365 mit Firmenkonto haben |
| Ausblick | n8n und ein eigenes Modell im Haus als **Zukunftsmusik**, auf Folie 27 ausdrücklich als noch nicht entschieden |
| Die eigentliche Frage | Wie gewinnt man Mitarbeiter, die bisher allenfalls „mal ChatGPT fragen"? Beantwortet auf der früheren Folie 28, gestützt auf Bitkom 2026 und die dänische Studie in PNAS. Die Folie ist am 28.09.2026 entfallen, an ihrer Stelle steht die Abschlussfolie „Fragen?“ |
| Eigene Erfahrungen | **Nicht „Hausfälle" nennen.** Andrews Fälle sind vor allem Entwicklung und etwas Marketing, deshalb nur knapp. Ausnahme ist die **byzz app**, weil die Folgen in byzz und in der App spürbar sind. Sie bekommt Folie 26 |
| Spielregeln | Keine eigene Folie. Standen auf der früheren Folie 28, mit ihr am 28.09.2026 entfallen |
| Folie 23 | Überschrift „Fragen ist noch nicht Arbeiten", Beispiele aus Excel und Word, die im Saal nachmachbar sind, wenn die Lizenz es hergibt |
| Folie 25 | Assistent für Mitarbeiter, **nicht** Chatbot für Kunden. Die Studie im Quarterly Journal of Economics trägt die Fußzeile |
| Folie 27 | Kein Satz, der die offenen Modelle abwertet. „Die stärksten gibt es so nicht" hatte keine Quelle |

### Offen

| Punkt | Was zum Schließen nötig ist |
|---|---|
| Überarbeitung Abschnitt 05 | Von Andrew für den 25.09.2026 angekündigt, „einiges“ wird angepasst. Umfang noch offen |
| Folie 26, byzz app | Andrew bestätigt die Eckdaten aus seinen Tagesnotizen und ergänzt, was der Umbau ohne KI gekostet hätte. In der Sprechnotiz steht dafür ein Platzhalter |
| Copilot-Stufe | Im eigenen Word und Excel nachsehen, welches Etikett erscheint. „Copilot Chat (Basic)" hieße: kein Copilot in Word und Excel, Folie 23 wäre im Saal nicht nachmachbar |
| Priorisieren in Outlook | Laut Microsoft zunächst nur für „Tier 1 languages". Ob Deutsch dazu zählt, im eigenen Outlook nachsehen |
| Folie 28 | Entfallen am 28.09.2026, ersetzt durch die Abschlussfolie „Fragen?“ |
