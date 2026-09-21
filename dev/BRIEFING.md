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
Mitarbeitenden ein Seminar über KI. Daraus folgt für den Bau:

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
Sekunden je Folie, ruhiger Takt mit Raum für Erklärungen.

Gliederung in vier Abschnitten (`SECTIONS` in `assets/js/deck.js`):

| | Abschnitt | Inhalt |
|---|---|---|
| 01 | Von den Anfängen bis ChatGPT | der geschichtliche Rückblick, 1950 bis 2025 |
| 02 | Was ist KI heute? | Begriffsstaffelung, der Bruch Regeln gegen Lernen, Können und Grenzen, Verbreitung |
| 03 | Wie KI funktioniert | |
| 04 | KI bei orangedental | Einsatzmöglichkeiten im Haus |

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

Für Abschnitt 04 trägt Andrews 2nd Brain (`C:\Users\andrewkerkel\2nd-brain`)
belegte Fälle aus dem Haus: der ChecksumHelper als Pre-Build-Event, generierte
technische Dokumentation, Flyer und Präsentationen, ein Security-Review, das
n8n-Vorhaben, LLM-Hardware wegen Datenschutz. Dazu ein ehrlicher Fehlschlag als
Gegengewicht.

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
  2017. 1997 bleibt neutral, das war das alte Prinzip in schnell, und 2024
  ebenfalls, eine Auszeichnung ist kein Verfahren.

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
- **Der EU AI Act ist recherchiert, aber bewusst nicht im Abriss.** Er gehört
  nach Abschnitt 04, weil er die Zuhörer selbst betrifft: seit dem 02.02.2025
  gilt die Pflicht zur KI-Kompetenz der Beschäftigten, also genau so eine
  Veranstaltung wie diese. Vor dem Abdruck von Terminen auf einer Folie die
  Fassung auf EUR-Lex gegenprüfen, die Termine sind 2026 verschoben worden.

## Offen

| Punkt | Was zum Schließen nötig ist |
|---|---|
| Orangewert `#F68B1A` vs. `#F08319` | Entscheidung Andrew, siehe oben |
| Live-Demos | Ob und wo aus dem Deck herausgesprungen wird |
| Vortragsdatum | Für die Schlussfolie |
| Repository privat oder öffentlich | Vor dem ersten Push, siehe Kopf dieser Datei |
| Datenschutz-Folie | Entschieden: gehört nach Abschnitt 04, nicht in 02. Stoff ist recherchiert und belegt, siehe `referat.md` am Ende. Die OpenAI-Voreinstellung vorher **von Hand im eigenen Konto nachsehen**, sie war an der Quelle nicht abrufbar |
| Abschnitt 03, wie KI funktioniert | Eigene Recherche, nächster Arbeitsschritt |
| Abschnitt 04, KI bei orangedental | Material liegt im 2nd Brain, dazu der EU AI Act als eigene Folie |
| **Kapitel zu agentischen Systemen** | Ausdrücklich gewünscht, mehr als ein Folienpunkt. Material siehe unten |
| EU AI Act, Fristen | Vor dem Abdruck an EUR-Lex gegenprüfen. Die recherchierten Termine stammen aus Kanzleiblogs, und für ein Medizinprodukte-Umfeld ist der verschobene Teil der einschlägige |

## Material für das Kapitel zu agentischen Systemen

Recherchiert am 18.09.2026, vorgezogen weil ein Folienpunkt auf Folie 11 (KI im Alltag) schon
daraus stammt. Was nicht verwendet wird, steht mit Einwand in
`dev/nicht-erzaehlen.md`.

**Die Zahl, die schon im Deck steht.** Bitkom, 14.09.2026, dieselbe Erhebung
wie die 57 %: **11 % der Unternehmen setzen KI-Agenten ein, 29 % planen es,
31 % diskutieren.** 603 Unternehmen ab 20 Beschäftigten, repräsentativ. Das ist
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

**Der Satz, der für dieses Haus am schwersten wiegt.** Die
Bundeszahnärztekammer hat im Oktober 2025 Stellung bezogen: volle persönliche
Verantwortung der Behandelnden, Hochrisiko-KI nur unter menschlicher Aufsicht,
**autonomer Betrieb ausdrücklich ausgeschlossen.** Das ist die Grenze, die der
Berufsstand selbst zieht, und sie ist wichtiger als jede Prozentzahl.
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
| McCulloch und Pitts 1943 | Nur Detailband unter der Perzeptron-Station |
| XAI 2016 | Draußen |
| 2009, die Fotosammlung | Draußen |
| Achsenskript | `achsen-rechnen.mjs`, dauerhaft im Skill |

**Offen und ausdrücklich vertagt: der Dental-Strang.** Vollständig recherchiert,
Belege in `dev/nicht-erzaehlen.md` unter „Der Dental-Strang, geparkt". Er kommt
als **eigene Folie in einem getrennten Schritt**, nicht auf die Geschichtsachse.
Kern ist die Gegenüberstellung zweier Behördensätze, zwanzig Jahre auseinander:
1998 durfte das System erst nach der ärztlichen Erstbefundung markieren, 2018
entscheidet es ohne Bildbefundung durch einen Spezialisten.
