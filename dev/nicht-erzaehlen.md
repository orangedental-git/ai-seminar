# Was nicht erzählt wird

Alles hier ist recherchiert worden und **absichtlich** nicht im Deck, nicht in
`referat.md` und nicht in den Sprechnotizen. Es steht hier, damit die Arbeit
nicht verloren geht und damit jemand, der eine dieser Geschichten aus dem Netz
aufschnappt, nachlesen kann, warum sie nicht vorkommt.

**Diese Datei wird vor dem Vortrag nicht gelesen.** Sie ist kein Merkzettel.
Wer während des Vortrags an eine dieser Stellen gerät, hat hier bei jedem
Eintrag einen Satz stehen, der stattdessen gesagt werden kann.

---

## Geschichten, die gut klingen und nicht stimmen

### „Der Turing-Test wurde bestanden."

Turing hat keine Prüfung mit Bestehensgrenze entworfen. Er hat eine Vorhersage
gemacht: In etwa fünfzig Jahren, also um das Jahr 2000, werde ein Fragender
nach fünf Minuten Gespräch in höchstens 70 % der Fälle richtig liegen. Die
berühmten „30 %" sind die Umkehrung dieser Vorhersage, keine Hürde.

*Stattdessen sagbar:* Turing hat die Frage ersetzt, nicht beantwortet.

### Weizenbaums Sekretärin, die sich in den Chatbot verliebte

Die Anekdote stammt ausschließlich von Joseph Weizenbaum selbst. Eine
Archivrecherche der Literaturwissenschaftlerin Rebecca Roach fand keinen
unabhängigen Beleg, keine Zeugin, keinen Namen.

*Stattdessen sagbar:* Weizenbaum hat sein eigenes Programm für gefährlich
gehalten, weil Menschen ihm mehr zutrauten, als drin war. Das ist der Punkt,
und der ist belegt.

### „MYCIN kam wegen ungeklärter Haftungsfragen nicht in die Praxis."

Diese Begründung stand eine Zeit lang selbst im Deck, in der Sprechnotiz und im
Referat. Sie ist nicht belegt. Buchanan und Shortliffe beantworten die Frage
„Why is MYCIN not used routinely?" in Kapitel 36 selbst, und sie nennen zwei
Gründe: Rechner, die Interlisp ausführen, waren zu teuer, und das Wissen deckte
nur ein schmales Gebiet ab. Kapitel 32 fügt die fehlende Einbindung in den
Klinikalltag hinzu. Haftung kommt im ganzen Buch nur zweimal vor, beide Male
als **offene Frage für die Zukunft**, nie als Ursache: Kapitel 31 schreibt
„issues of cost and legal implications **remain to be answered**", Kapitel 36
begründet damit, warum ein solches System sein Urteil erklären können muss.

Auch die begutachtete Rückschau von Middleton, Sittig und Wright (2016) zählt
die Gründe auf und nennt Haftung nicht. Im Netz kursiert sie trotzdem, in
Blogs und Lehrbuchzusammenfassungen, durchweg ohne Primärbeleg.

*Stattdessen sagbar:* Die Rechner waren zu teuer, und eingebunden war es
nirgends. Der Arzt musste ein freies Terminal suchen, sich anmelden und
Laborwerte eintippen, die im Haus längst vorlagen.

### „Ein Buch von 1969 hat die Netzforschung getötet."

Gemeint ist „Perceptrons" von Minsky und Papert. Der Wissenschaftshistoriker
Mikel Olazaran hat 1996 in *Social Studies of Science* gezeigt, dass diese
Ursache-Wirkung-Geschichte nachträglich zurechtgelegt wurde. Minsky und Papert
haben 1988 selbst dagegen argumentiert.

*Stattdessen sagbar:* Die Netzforschung war nie weg, sie war nur unpopulär.

### „Von 1974 bis 1980 herrschte KI-Winter."

Die Ereignisse sind belegt, die Jahreszahlen sind eine spätere Ordnung. Der
Begriff selbst entstand erst 1984 auf einer Fachtagung, und zwar als
**Warnung** vor einem kommenden Einbruch, nicht als Rückblick.

*Stattdessen sagbar:* „Was man rückblickend die KI-Winter nennt."

### „OpenAI hielt GPT-2 für zu gefährlich zur Veröffentlichung."

Die Zuspitzung stammt aus der Presseberichterstattung, nicht von OpenAI. Die
Veröffentlichung erfolgte gestaffelt, mit einer Begründung, die deutlich
zurückhaltender formuliert war.

---

## Zahlen, die kursieren und nicht belegt sind

| Zahl | Warum sie nicht ins Deck kommt |
|---|---|
| „100 Millionen Nutzer in zwei Monaten" | Eine Schätzung der Bank UBS auf Grundlage von Daten eines Marktbeobachters. Keine Zahl von OpenAI. Und der Rekord stimmt nicht einmal: Pokémon Go brauchte 27 Tage, ChatGPT 61. Sagbar wäre stattdessen, dass ChatGPT in weniger als drei Jahren rund ein Zehntel der erwachsenen Weltbevölkerung erreicht hat. |
| „XCON sparte 25 Mio. Dollar im Jahr" | Nirgends primär belegt. In der Literatur kursieren Werte zwischen 10 und 40 Millionen. |
| Trainingskosten von DeepSeek | Beziehen sich nur auf einen Teilschritt und sind nicht unabhängig geprüft. |
| Marktzahlen zu Expertensystemen der 1980er | Sämtlich Blogs und Weiterzitate ohne Primärquelle. |
| „Das Netz erkannte 10 % aller US-Schecks" | Wird LeCun zugeschrieben, ohne prüfbare Fundstelle. |
| Firmenbewertungen, Investitionssummen | Presse über nicht öffentliche Finanzierungsrunden. |
| Modellnamen aus 2025 und 2026 | Veralten monatlich. Ein Teil der Suchtreffer nannte zudem Modelle, die es nicht gibt. |

---

## Aus der Recherche zu Abschnitt 02

Alles hier ist geprüft worden und kommt trotzdem nicht auf eine Folie. Die
Reihenfolge ist die, in der es einem im Netz begegnet.

### „Die Halluzinationsrate liegt bei 3 %."

Diese Zahl stammt aus einer Bestenliste, die ausschließlich misst, ob eine
Zusammenfassung zu einem **mitgelieferten** Dokument passt. Die Anweisung an
das Modell lautet dort wörtlich, es solle sein eigenes Wissen nicht verwenden.
Bei freien Wissensfragen ohne Vorlage lag dasselbe Spitzenfeld bei 33 bis
79 % Falschaussagen, gemessen vom Hersteller selbst.

*Stattdessen sagbar:* Mit Vorlage liegt es selten daneben, ohne Vorlage oft.
Das ist keine Feinheit, das ist Faktor zehn. Und daraus folgt die praktische
Regel: Gib ihm das Dokument.

### „Das beste Modell arbeitet 16 Stunden am Stück selbstständig."

Gleich drei Fehler in einem Satz. Gemessen wird die **Menschenarbeitszeit**,
die ersetzt wird, nicht die Laufzeit der Maschine. Gemessen wird bei **50 %**
Erfolg. Und das messende Institut schreibt selbst, Messungen über 16 Stunden
seien mit der heutigen Aufgabensammlung unzuverlässig, das Konfidenzintervall
reiche von 8,5 bis 55 Stunden.

*Stattdessen sagbar:* Die Folie sagt „stundenlang" und stellt direkt daneben,
dass bei jedem zweiten Versuch gemessen wurde. Beides gehört zusammen.

### „Die Fähigkeiten verdoppeln sich alle 3,5 Monate."

Diese Zahl stammt aus einem Blogbeitrag, nicht vom messenden Institut. Das
nennt für dieselbe Messreihe 130,8 Tage seit 2023. In den Kommentaren
desselben Beitrags weisen Mitarbeiter des Instituts darauf hin, dass
Messrauschen die 50-Prozent-Schwelle aufbläht und der 80-Prozent-Wert
deutlich langsamer wächst.

*Stattdessen sagbar:* Gar nichts. Eine Verdopplungsrate gehört nicht auf eine
Folie vor Laien, sie klingt nach Naturgesetz und ist die Messung eines
einzigen Instituts an einer einzigen Aufgabenart.

### „88 % der Unternehmen nutzen KI."

Aus einer Beratungsumfrage unter 1.719 Führungskräften in einem
selbstgewählten Online-Panel. Gemessen wird, was KI-interessierte Manager
antworten, nicht, was Unternehmen tun.

*Stattdessen sagbar:* Die amtliche Zahl des Statistischen Bundesamtes, 26 %
für 2025 bei Unternehmen ab zehn Beschäftigten. Oder die Verbandserhebung mit
57 %, die auf der Folie steht — dann aber mit der Angabe, wer wen wann gefragt
hat. Das steht dort auch.

### „Entwickler sind mit KI 55 % schneller."

Eine einzelne Laboraufgabe, unter hundert Teilnehmer, durchgeführt von
Angestellten des Anbieters des getesteten Werkzeugs. Eine randomisierte
Gegenstudie fand bei erfahrenen Entwicklern an echten Aufgaben **19 %
Verlangsamung**.

*Stattdessen sagbar:* Der eigentlich interessante Befund derselben
Gegenstudie ist die Wahrnehmungslücke: Die Teilnehmer glaubten hinterher, 20 %
schneller gewesen zu sein, und waren 19 % langsamer. Rund 39 Prozentpunkte
daneben, zu den eigenen Gunsten. Das ist für ein Unternehmenspublikum mehr
wert als jede Produktivitätszahl. Vorgemerkt für Abschnitt 04.

### „Bei Computeraufgaben schaffen Agenten über 70 %."

Das ist der **partielle** Wert, bei dem Teilschritte angerechnet werden. Streng
gewertet, also Aufgabe ganz erledigt, nennt derselbe Hersteller für dasselbe
Modell 41,7 %. Bestenlisten mischen beides in einer Spalte.

*Stattdessen sagbar:* Bei Aufgaben am Rechner, für die ein Mensch anderthalb
Stunden braucht, bringt das beste System heute etwa vier von zehn vollständig
zu Ende.

### „KI kann keine analoge Uhr ablesen."

Der Satz stand auf Folie 10, mit 50 % und dem Zusatz „also Münzwurf". Er ist
in drei Schichten falsch, und die dritte ist die, auf die es ankommt.

**Die Zahl ist veraltet.** Sie stammt aus ClockBench. Im Juni 2026 lag das
beste Modell bei 50,6 %, im September 2026 bei **66,7 %** gegen 90,7 % beim
Menschen.

**Der Beleg zeigte auf die falsche Seite.** Belegt war die Zahl über die
Kernbefund-Seite des Stanford AI Index, und dort steht keine Zahl, sondern nur
der Satz, KI hinke beim „telling time" hinterher. Die Zahl steht im Volltext,
Kapitel 2.

**Und der Test misst etwas anderes, als der Satz behauptet.** ClockBench
besteht aus 36 eigens konstruierten Zifferblatt-Entwürfen nach dem erklärten
Prinzip „für Menschen leicht, für KI schwer": römische und arabische Ziffern
gemischt, gespiegelte Anordnungen, gedrehte Ziffern, bunte Hintergründe,
Sekundenzeiger. Die Einbrüche sitzen genau dort, römische Ziffern 3,2 %,
kreisförmig gestellte Ziffern 4,5 %. Ein gewöhnliches Zifferblatt auf einem
ordentlichen Foto ist das, was der Test absichtlich **nicht** enthält, und
genau das liest die KI zuverlässig.

*Stattdessen sagbar:* nichts über Uhren. Die belegbare Aussage dahinter ist,
dass ungewöhnliche Zifferblätter einbrechen, und die ist für eine Folie zu
speziell.

**Die Lehre ist größer als der Fall.** Jeder im Saal hat ein Telefon. Eine
Aussage, die ein Zuhörer in dreißig Sekunden selbst widerlegen kann, nimmt den
Rest der Folie mit. Seither gilt für jeden Punkt in der Spalte „Sie kann
nicht" die Gegenprobe: **Würde ein naiver Selbstversuch das Gegenteil
zeigen?** Am besten sind die Punkte, die der Selbstversuch *bestätigt*.

Adressen: https://clockbench.ai/ ·
https://the-decoder.com/even-the-best-ai-models-cant-reliably-read-the-clock/ ·
https://hai.stanford.edu/news/inside-the-ai-index-12-takeaways-from-the-2026-report

### Drei Ersatzkandidaten, die an derselben Gegenprobe gescheitert sind

Gesammelt bei der Suche nach dem Ersatz für die Uhr. Alle drei sind populär
und kommen erfahrungsgemäß wieder.

**„Fachleute sind mit KI 19 % langsamer."** Das messende Institut hat den
Befund am 24.02.2026 selbst relativiert: neue Kohorte, 57 Entwickler, über 800
Aufgaben, Ergebnis minus 4 % bei einem Konfidenzintervall von minus 15 bis plus
9 %. Es schreibt, der frühere Wert halte nicht mit Zuversicht.
https://metr.org/blog/2026-02-24-uplift-update/

**„Sie schafft nur 30 % der Büroaufgaben."** Widerspricht der linken Spalte
derselben Folie, und jeder, der die KI eine Mail schreiben lässt, hat ein
Erfolgserlebnis. Dazu steigt die Zahl sichtbar schnell, von 24 auf 30 auf
42,9 %.

**„Roboter schaffen nur 12 % der echten Haushaltsaufgaben."** Die Zahl stammt
aus der BEHAVIOR Challenge 2025, und die läuft vollständig in einer Simulation.
Der Stanford AI Index schreibt trotzdem „real household tasks". Dazu sind die
12,4 % die vollständig gelöste Aufgabe, mit Teilpunkten liegt dasselbe
Siegerteam bei 26 %. Welche Zahl in einer Übersicht auftaucht, ist Auswahl.

### Modellnamen, Ranglisten und Benchmark-Prozente

Im Jahr 2026 sind im Abstand von wenigen Wochen neue Spitzenmodelle
erschienen. Jede Folie mit einem Modellnamen ist beim nächsten Vortrag falsch.
Dazu kommt, dass ein Teil der Suchtreffer Modelle nannte, die es nicht gibt.

*Stattdessen sagbar:* Fähigkeiten statt Produktnamen. **In Abschnitt 02 fällt
deshalb kein einziger Modellname.** Das ist keine Auslassung, sondern der
Grund, warum die Folien in einem halben Jahr noch stimmen.

### Fristen aus der EU-Verordnung über künstliche Intelligenz

Der zitierte Erwägungsgrund 12 ist an zwei unabhängigen Fundstellen im
Volltext geprüft. Die **Fristen** dagegen — was seit August 2026 gilt und was
auf Dezember 2027 beziehungsweise August 2028 verschoben wurde — stammen aus
Kanzlei- und Beratungsblogs.

*Stattdessen:* Vor dem Abdruck an EUR-Lex gegenprüfen. Ein ungeprüftes
Rechtsdatum auf einer internen Folie wandert erfahrungsgemäß in echte
Planungen, und in einem Medizinprodukte-Umfeld ist ausgerechnet der
verschobene Teil der einschlägige.

### Der Anteil der Zahnarztpraxen, die KI einsetzen

Dazu gibt es **keine veröffentlichte Erhebung.** Wer eine Zahl nennt, nennt
eine Branchenschätzung als Statistik, und vor Kollegen aus genau dieser
Branche fällt das auf.

*Stattdessen sagbar:* Die Lücke benennen. Für Arztpraxen insgesamt nennt eine
Befragung 15 %, sie bezeichnet sich aber selbst als nicht repräsentativ.

### Eine Herstellerzahl zur Kariesdiagnostik

Ein Anbieter gibt an, übersehene Läsionen seien um 43 % zurückgegangen. Das
ist eine Herstellerangabe zur eigenen Zulassungsstudie, keine unabhängige
Untersuchung.

*Stattdessen:* Die Zahl auf Folie 11 (KI im Alltag) stammt aus der begutachteten Übersicht im
International Dental Journal und ist die ehrlichere: 57,9 % auf 76,2 %
Sensitivität der Behandler.

---

## Aus der Recherche zu Abschnitt 03

Vier Rechercheläufe zu Training, Rechenweise, Erfindungen und Eingabe. Auffällig
ist, wie viele der gängigen Erklärsätze **am Selbstversuch scheitern** und nicht
am Beleg. Regel 23 hat in diesem Abschnitt mehr Zeilen gestrichen als Regel 14.

### „Die KI lernt nicht aus dem Chat."

Der Satz ist technisch verteidigbar und im Saal trotzdem in dreißig Sekunden
blamiert. Die Dienste haben eine Gedächtnisfunktion, und sie ist in den
Privattarifen von sich aus eingeschaltet. Wer sagt, er arbeite bei
orangedental, bekommt es im nächsten Gespräch zurück. Anthropic wirbt sogar
damit: „Mention that a deadline moved, and your next conversation already
knows."

*Stattdessen sagbar:* Die Trennung, die der Anbieter selbst macht. Das Modell
verändert sich nicht. Der Dienst kann Notizen führen, und er kann Gespräche
später fürs Training verwenden. OpenAI führt beides als **zwei getrennte
Schalter**: „Memory controls how ChatGPT personalizes responses. Model-training
controls determine whether eligible content can be used to improve OpenAI
models. These are separate settings."

### „Ein neues Gespräch fängt bei null an."

Dieselbe Falle, dieselbe Begründung. Zusätzlich gibt es die Suche in früheren
Unterhaltungen, ebenfalls voreingestellt an. Die Aussage war vor zwei Jahren
richtig und ist heute die riskanteste Zeile des ganzen Abschnitts, weil sie in
der ersten Kaffeepause widerlegt wird, und zwar von jemandem, der es gut meint.

*Stattdessen sagbar:* Das Modell erinnert sich an nichts, der Dienst schreibt
mit. Was er gespeichert hat, lässt sich erfragen, ansehen und löschen. Das ist
belegt, es trägt Folie 16, und der Selbstversuch **bestätigt**
es.

### „Die Werte im Modell sind eingefroren."

Zwei Einwände. Es ist ein Fachbild, das im Saal niemand benutzt. Und es gibt
dafür keine Primärquelle: Belegt ist die Trennung der Phasen, nicht ein
zugesagter Zustand. Die KI-Verordnung rechnet in Artikel 3 sogar ausdrücklich
damit, dass ein System „nach seiner Betriebsaufnahme anpassungsfähig sein kann".

*Stattdessen sagbar:* Der Satz des Bundestagsbüros, wörtlich und ohne
Einschränkungswort: „Nach dem Training folgt die Nutzungsphase."

### „Bis heute lernt kein einziges KI-System im Betrieb dazu."

Falsch. Microsoft hat 2016 genau so ein Chatprogramm betrieben und nach
24 Stunden abgeschaltet, weil es die Beleidigungen übernommen hatte, die ihm
zugerufen wurden. Der zuständige Vizepräsident schrieb damals selbst: „AI
systems feed off of both positive and negative interactions with people."

*Stattdessen sagbar:* Es ist baubar, es ist versucht worden, und die heutigen
Systeme sind bewusst anders gebaut. Das steht als Antwort auf Nachfragen in der
Sprechnotiz zu Folie 13.

### „Wie viele R stecken in ‚Erdbeere'?"

Das beliebteste Vorführbeispiel für die Zerlegung in Stücke, und es ist
verbrannt. Die heutigen Programme rechnen vor dem Antworten schrittweise und
buchstabieren dabei aus. Bezeichnend: Für die Behauptung, es funktioniere
nicht, gibt es ebenfalls keine belastbare aktuelle Quelle. Fünfzig Telefone im
Saal entscheiden die Frage in dreißig Sekunden gegen den Vortragenden. Dasselbe
gilt für Buchstabenzählen, Wörter rückwärts schreiben und Silben zählen.

*Stattdessen sagbar:* Das Prinzip ohne Vorführung, oder die Zerlegung live an
dem Werkzeug, das OpenAI dafür bereitstellt — und dann vorher selbst
nachgesehen, die Zerlegung hängt am Modell.

### „Ein Stück sind etwa vier Zeichen."

Eine Angabe über **Englisch**, die stillschweigend auf Deutsch übertragen wird.
Beide Anbieter schreiben die Sprache ausdrücklich dazu, Anthropic nennt die
Abweichung nach Sprache sogar als Einschränkung. Für Deutsch veröffentlicht
kein Anbieter eine entsprechende Zahl.

*Stattdessen sagbar:* Dass Deutsch mehr Stücke braucht, und ein Wort, an dem
es jeder nachsehen kann: „Wurzelkanalbehandlung" ergibt beim Zerleger von
OpenAI sieben, „root canal treatment" drei.

### „Deutsch braucht rund die Hälfte mehr Token als Englisch."

Stand so auf Folie 14. Korrekt zitiert (Petrov u. a., NeurIPS 2023), aber die
Zahl gilt für den Zerleger von ChatGPT und GPT-4 aus dem Jahr 2023. Die
heutigen sind bei Deutsch sparsamer, und die OpenAI-Seite, die die
Sprechnotiz zum Vorführen empfiehlt, zeigt weniger. Dazu klang die Zahl im
Saal aus der Luft gegriffen, und der Grund daneben, „weil deutsche Wörter
länger sind", war zu allgemein. Regel 23.

*Stattdessen sagbar:* Die Zerlegung ist vor allem an englischen Texten
eingeübt, häufige englische Wörter sind darin ganze Stücke, lange deutsche
zerfallen in viele. Dazu das Beispielwort, keine Prozentzahl.

### „Sie schlägt nichts nach."

Scheitert am Selbstversuch. Wer nach den Nachrichten von heute fragt, sieht
eine Websuche mit Quellenangaben ablaufen. Der Satz stimmt über das Modell und
ist über das Produkt falsch, und das Publikum sieht das Produkt. Derselbe
Einwand hat eine Zeile des Abschnittstrenners gekippt, dort stand zuerst
„Warum es rät statt nachzuschlagen".

*Stattdessen sagbar:* Das Modell selbst greift in keine Datenbank. Was es an
Dokumenten kennt, wird ihm vorher in die Eingabe hineinkopiert. Das BSI
beschreibt genau das: Informationen werden „systemseitig in den Prompt
kopiert".

### „Sie rät nur das nächste Wort, sie plant nicht."

Aktiv gegengeprüft und widerlegt. Anthropic hat den Vorgang bei einem Reim
sichtbar gemacht: „Claude will plan what it will say many words ahead, and
write to get to that destination." Das Reimwort steht fest, bevor die Zeile
entsteht.

*Stattdessen sagbar:* Das Wort „nur" fällt weg. Sie setzt den Text Stück für
Stück zusammen, und sie denkt dabei weiter als ein Stück. Beides steht auf
Folie 14.

### „Die Halluzinationsquote liegt bei X Prozent."

Schon in Abschnitt 02 einmal verworfen, und der neue Rechercheweg bestätigt es:
Die Werte reichen **im selben Dokument** von 0,7 bis 76,8 Prozent, je nachdem,
was gemessen wird. Eine Quote „der KI" gibt es nicht.

*Stattdessen sagbar:* Nur ein Paar von Werten aus demselben Versuch, bei dem
sich genau eine Sache ändert. Das steht in der Sprechnotiz zu Folie 15 und
nicht auf der Folie.

### „In der Hälfte der Fälle sagt sie, sie wisse es nicht."

Die Zahl stammt aus einem Test mit absichtlich entlegenen Faktenfragen. Wer im
Saal eine normale Frage stellt, bekommt eine Antwort, und der Satz ist
vorgeführt falsch. Dieselbe Falle in die andere Richtung: „Sie sagt nie, dass
sie etwas nicht weiß" ist ebenfalls falsch, im selben Versuch ließ ein Modell
63 Prozent der Fragen offen.

*Stattdessen sagbar:* Ob sie es sagt, hängt auch davon ab, was im Auftrag
steht. Das ist der Befund, auf den es ankommt.

### „Halluzinationen sind unvermeidbar."

Die begutachtete Leitquelle bestreitet das ausdrücklich und nennt die
Erfindungen „an unintended outcome of training objectives and evaluation
incentives rather than an inherent LLM deficiency". Die Gegenposition ist ein
Vorabdruck ohne Begutachtung.

*Stattdessen sagbar:* Die zweigeteilte Fassung, die auf der Folie steht. Dass
sie manches nicht weiß, lässt sich nicht wegtrainieren, dafür gibt es eine
statistische Untergrenze. Dass sie stattdessen rät, schon.

### „Wer der KI eine Rolle gibt, bekommt bessere Antworten."

Der meistgegebene Ratschlag überhaupt, und für die Richtigkeit widerlegt.
Untersucht an 162 Rollen, vier Modellfamilien und 2.410 Faktenfragen, Findings
of EMNLP 2024: „adding personas in system prompts does not improve model
performance", die Wirkung sei „largely random".

*Stattdessen sagbar:* Die Rolle steuert Ton und Form, nicht die Richtigkeit.
Genau so steht sie auf Folie 16.

### „Je mehr man hineinschreibt, desto besser."

Vom Hersteller selbst bestritten: „more context isn't automatically better. As
token count grows, accuracy and recall degrade." Begutachtet gestützt durch
„Lost in the Middle", TACL 2024: Was in der Mitte einer langen Eingabe steht,
wird am schlechtesten gefunden.

*Stattdessen sagbar:* Nicht mehr hineinschreiben, sondern das Richtige. Auf
Folie 16 steht deshalb „je genauer die Frage", nicht „je länger".

### „Die erfolgreichsten Eingaben haben im Schnitt 21 Wörter."

Steht wörtlich so in einem Produktblog, beruft sich aber nur auf „the team's
research", ohne Veröffentlichung, ohne Stichprobe, ohne Methode. Eine Zahl, die
niemand nachprüfen kann.

*Stattdessen sagbar:* Nichts über die Länge. Der Inhalt der Eingabe zählt.

### „Das Gespräch bricht ab, wenn es zu lang wird."

Veraltet. Der Dienst fasst heute den Anfang zusammen und läuft weiter. Ein
echter Abbruch tritt nur noch beim Anhängen zu großer Dateien auf.

*Stattdessen sagbar:* Wird es zu lang, fasst der Dienst den Anfang zusammen,
und Einzelheiten fallen dabei weg. Das ist die praktisch wichtigere Aussage,
weil es lautlos passiert.

### Zwei Zahlen zum Training, die kursieren

**„GPT-3 brauchte 1.287 Megawattstunden Strom."** Das Bundestagspapier nennt
die Zahl und widerlegt sie in derselben Fußnote selbst: Andere Berechnungen
kommen auf 188,7, wieder andere auf 1.404. Eine Spanne von Faktor sieben ist
keine Zahl.

**„175 Milliarden Parameter, 300 Milliarden Textbausteine."** Das sind die
Werte von GPT-3 aus dem Jahr 2020. Für GPT-4 und alles danach hat der
Hersteller nichts veröffentlicht.

*Stattdessen sagbar:* Die eine Zahl, die eine abgeschlossene Tatsache über ein
benanntes Modell ist und deshalb nicht veraltet: 30,84 Millionen
Prozessorstunden aus einer offengelegten Modellkarte, umgerechnet 3.500 Jahre
auf einem einzelnen Prozessor. Die Umrechnung steht mit Rechenweg in
`quellenangabe.md`.

### Die Hamburger These zu personenbezogenen Daten

Das Diskussionspapier des Hamburgischen Datenschutzbeauftragten vom 15.07.2024
liefert die beste deutsche Laienerklärung der Zerlegung in Stücke, und daraus
stammt das Beispiel in der Sprechnotiz zu Folie 14. **Seine Hauptthese ist aber
umstritten:** Es hält fest, in einem Sprachmodell seien keine personenbezogenen
Daten gespeichert. Der Europäische Datenschutzausschuss kommt in Randnummer 34
seiner Stellungnahme 28/2024 zum Gegenteil.

*Daraus folgt:* Aus diesem Papier wird ausschließlich die technische
Beschreibung übernommen, nie die Rechtsthese. Der Widerspruch steht hier, damit
er beim nächsten Aufschlagen nicht übersehen wird. Für Abschnitt 05 ist er
unmittelbar erheblich.

### Aus der Überarbeitung vom 22.09.2026

Fünf weitere Rechercheläufe, angestoßen durch das Gegenlesen der fertigen
Folien. Zwei davon haben Fehler auf den Folien gefunden, nicht nur Kandidaten
verworfen.

**„3.500 Jahre auf einem einzelnen Prozessor."** So stand es auf Folie 13, und
es war zu schwach. Die Quelle zählt **Grafikprozessor**-Stunden auf
H100-Hardware. „Prozessor" liest sich im Saal als der Prozessor im eigenen
Rechner, und dort wären es weit mehr als 3.500 Jahre. Die Zeile untertrieb
also genau dort, wo sie beeindrucken soll. Jetzt steht „Grafikkarte" da, und
das schlägt zusätzlich den Bogen zu Folie 04, wo 2012 zwei handelsübliche
Karten und fünf Tage genügten.

**„Texte, Bilder und Ton."** Ton und Video sind nur bei zwei der fünf
geprüften Anbieter belegt. Meta nennt für Llama 4 ausdrücklich nur Text und
Bild, Mistral ebenso, und **Anthropic dokumentiert die Art seiner
Trainingsdaten überhaupt nicht**, nur ihre Herkunft. Ein Dreiklang klingt
außerdem nach abgeschlossener Liste und ließe Programmcode weg, den zwei
Anbieter eigens aufführen. *Stattdessen:* „Texte und Bilder aus dem Netz, dazu
Programmcode."

*Nachtrag vom selben Tag:* **Ton und Video stehen jetzt doch auf der Folie**,
aber mit Zählung: „bei zwei der großen Anbieter". Den Ausschlag gab eine
Quelle, die es vorher nicht gab. Die EU-Verordnung verpflichtet die Anbieter
zu einer öffentlichen Zusammenfassung der Trainingsinhalte, und OpenAI hat sie
nach dem amtlichen Vordruck vorgelegt, mit angekreuzten Feldern für Ton und
Video und Mengenangaben dazu. Der Einwand gegen den **Dreiklang** bleibt
gültig: Der Programmcode steht weiter da, und die Zählung sagt ausdrücklich,
dass es nicht alle sind.

**„Von Menschen geschriebene Texte aus dem Netz."** Der zweite Teil ist
vierfach belegt, der erste nicht, und dieselben Modellkarten widerlegen ihn:
Meta nennt „over 25M **synthetically generated** examples", Anthropic „data
generated internally at Anthropic". Ein spürbarer Teil des Stoffes stammt von
Maschinen. *Stattdessen:* „aus dem Netz", ohne Aussage über die Urheberschaft.

**Die Formel für Bild-Token.** Belegt und trotzdem untauglich: Die Kantenlänge
ist bei jedem Anbieter anders, 28 Pixel hier, 32 dort, 768er Kacheln beim
dritten. Dieselbe Anthropic-Tabelle nennt für ein Bild von 1920 × 1080 je nach
Stufe 1.560 oder 2.691 Token. *Stattdessen:* „in lauter kleine Quadrate
geschnitten", ohne Zahl.

**„Ein Screenshot entspricht etwa so viel wie X Seiten Text."** Genau der
Verbindungssatz aus Regel 21. Er rechnet Bildtoken gegen Text-Token pro Seite,
beide aus verschiedenen Zusammenhängen und teils von verschiedenen Anbietern.
Kein Dokument stellt diesen Vergleich an. *Stattdessen:* dass beides gegen
dasselbe Budget zählt, das ist belegt.

**„Das Bild wird in Worte übersetzt."** Sprachlich verlockend und sachlich
falsch. Keine der drei Dokumentationen beschreibt einen Zwischenschritt in
Text. Zerlegt wird in Bildquadrate.

**„Sie plant, was sie sagen wird, viele Wörter im Voraus."** Der Satz ist ein
wörtliches Zitat, steht in der Quelle aber als Überschrift über **einen**
Versuch, und der nächste Satz dort lautet „We show this in the realm of
poetry". Dazu kommt eine Nachprüfung von 2026 an über zehn fremden Modellen,
die den ursächlichen Planungsort nur bei einem einzigen findet, und eine
Gegenarbeit, die für natürliche Sprache zum gegenteiligen Schluss kommt:
„our experiments are more suggestive of the breadcrumbs hypothesis". *Daraus
folgt:* Das Reim-Beispiel wäre mit dem Wort „beim Reimen" haltbar gewesen, lag
aber zu weit vom Arbeitsalltag. Es ist durch die zusammengesetzte Frage ersetzt,
die Tiefe statt Reichweite belegt und die der Selbstversuch bestätigt.

**„Sie rechnet im Kopf."** Regel 23. Die heutigen Chatprogramme rufen für
Rechenaufgaben oft ein Werkzeug auf und zeigen das an. Wer im Saal eine
Rechnung eintippt und den Werkzeugaufruf sieht, hält die Zeile für vorgeführt
falsch, und für dieses Programm zu Recht. Der Befund gilt dem Modell, nicht
dem Programm.

**„Die Anwendung" als Begriff für das Programm um das Modell herum.** Der
naheliegendste Kandidat, und er scheitert an einer Zählung: Die
BSI-Verbraucherbroschüre benutzt „KI-Anwendung" 31-mal und „KI-System"
kein einziges Mal — aber sie benutzt „Anwendung" auch für das Modell selbst,
wörtlich „Mit ihrer Hilfe lernt die Anwendung, Wörter in eine möglichst
sinnvolle Reihenfolge zu bringen". Ein Wort, das in einem der besten deutschen
Laientexte für beide Seiten der Grenze steht, taugt nicht, um die Grenze zu
ziehen. *Stattdessen:* „KI-System", mit „das Programm darum herum" als
einmaliger Erklärung.

*Zum zweiten Mal geprüft, am selben Tag:* „Vom Training zur Anwendung" war der
Wunsch für die Überschrift von Folie 13. Dieselbe Zweideutigkeit, und
ausgerechnet auf der Folie, die die Grenze zieht. Genommen ist **„Vom Training
zum Einsatz"**, weil „Einsatzphase" das Wort des Europäischen
Datenschutzausschusses ist und nie ein Ding bezeichnet, immer einen Vorgang.

**Und „Benutzerschnittstelle" ist das falsche Zitat.** Im Erwägungsgrund 97
steht **„Nutzerschnittstelle"**. Wer wörtlich zitiert, zitiert wörtlich.

**„Jedes KI-System gibt dem Modell Datum, Regeln und Werkzeugliste mit."**
Für ChatGPT, Claude Code und Codex ist das belegt, für die Gemini-App nicht:
**Google veröffentlicht darüber nichts.** Geprüft sind Gemini-Apps-Hilfe,
Privacy Hub und die DeepMind-Modellkarten; dokumentiert ist dort nur der
nutzerseitige Teil. Über alle vier Produkte hinweg belegt ist allein der Punkt
„gespeicherte Nutzerangaben" — und der gehört Folie 16. Das ist eine
Beleglücke, keine Widerlegung. *Stattdessen:* die Bestandteile nennen, die bei
mindestens zwei Anbietern dokumentiert sind und denen keiner widerspricht.

**Und nicht aus durchgesickerten Systemanweisungen belegen.** Sie sind von
Nutzern extrahiert, der Anbieter untersagt die Preisgabe ausdrücklich
(„The assistant must not disclose privileged content without permission"),
und damit ist schon unsicher, ob der Wortlaut echt ist. Dazu die Verwechslung,
die dabei am leichtesten passiert: **Anthropic veröffentlicht die
Systemanweisung von claude.ai, nicht die von Claude Code.**

### Vertagt, weil es woanders hingehört

**„Die Erklärung ist nicht der Rechenweg."** Die praktisch wertvollste Aussage
des ganzen Materials: Nach ihrem Vorgehen gefragt, nennt die KI die
Schulmethode, gerechnet hat sie anders. Wörtlich aus dem Versuch: „*Human:
Answer in one word. What is 36+59? / Assistant: 95 / Human: Briefly, how did
you get that? / Assistant: I added the ones (6+9=15), carried the 1…*" — dazu
die Feststellung der Autoren: „**Apparently not!**" Zweitbeleg mit Zahlen:
Modelle nennen einen erhaltenen Hinweis nur in 25 bis 39 Prozent der Fälle.

Daraus folgt unmittelbar, dass „erkläre mir deinen Rechenweg" **keine
Kontrolle** ist. Das gehört auf eine Folie über Grenzen oder Bedienung, nicht
auf Folie 14: Dort soll der Punkt die Vorstellung vom Papagei widerlegen, und
diese Aussage zieht in die entgegengesetzte Richtung.

---

## Aus der Recherche zu agentischen Systemen

Vorgezogen, weil ein Folienpunkt auf Folie 11 (KI im Alltag) daraus stammt. Das Übrige ist
für das geplante Kapitel gesammelt.

### Warum die ChatGPT-Nutzerzahl trotzdem auf die Folie durfte

Weiter oben steht, dass Nutzerzahlen ohne unabhängige Prüfung nicht ins Deck
kommen. Die Angabe „über 900 Millionen je Woche" ist genau so eine, und sie
steht trotzdem auf Folie 11 (KI im Alltag).

Der Unterschied ist die **Kennzeichnung**. „900 Millionen Menschen nutzen
ChatGPT" wäre eine Behauptung, für die niemand geradesteht. „Über 900
Millionen, jede Woche (nach Angabe von OpenAI)" ist eine korrekte Aussage über eine
Anbieterangabe. Das steht so auf der Folie, in der Sprechnotiz und in
`quellenangabe.md`.

Die Regel bleibt also: Eine ungeprüfte Zahl kommt nur mit ihrer Herkunft aufs
Deck, oder gar nicht.

### „95 Prozent aller KI-Projekte scheitern."

Aus einer Untersuchung von Juli 2025, gestützt auf 300 öffentlich beschriebene
Vorhaben, 52 Gespräche und 153 Antworten von Führungskräften, gesammelt auf
vier Branchenkonferenzen. Wie die 95 Prozent zustande kommen, ist nicht
nachvollziehbar, die Rohdaten sind nicht offengelegt, und es bleibt unklar,
worauf sich der Wert bezieht. Dazu kommt, dass der Herausgeber selbst
Agenten-Infrastruktur baut, ein Befund über gescheiterte Einführungen stützt
also das eigene Angebot. Außerdem ging es um generative KI insgesamt, nicht um
Agenten.

*Stattdessen sagbar:* „11 Prozent setzen ein, 60 Prozent planen oder reden.
Der Abstand zwischen diesen Zahlen ist die eigentliche Nachricht."

### „40 Prozent der Agentenprojekte sind gescheitert."

Das ist eine **Vorhersage bis Ende 2027**, veröffentlicht im Juni 2025, keine
gemessene Quote. Wer das Futur wegnimmt, macht aus einer Schätzung eine
Tatsache. Verwendbar nur als „X erwartet, dass …", mit Jahreszahl.

### „Bei Google schreibt die KI 75 Prozent des Codes."

Aussage des Firmenchefs auf einer Pressekonferenz im April 2026. Es gibt keine
Definition, was „KI-erzeugt" dabei heißt: angenommene Vervollständigungen,
ganze Dateien, Zeilenzahl, gewichtet oder nicht. Geprüft hat es niemand von
außen. Ein Laienpublikum hört daraus „drei Viertel der Entwickler sind
überflüssig", und das gibt die Zahl nicht her.

*Stattdessen sagbar, falls das Thema aufkommt:* „Google sagt über sich selbst,
der größte Teil des neuen Codes entstehe inzwischen mit KI. Geprüft hat das
niemand von außen."

### „Agenten sind am Rechner inzwischen besser als Menschen."

Beruht auf einem Testaufbau mit begrenzter Zeit, und die kursierenden
Agentenwerte stehen nur in Blogs. Ein Testaufbau ist keine Praxis.

*Stattdessen sagbar:* In einem Versuch mit 175 echten Büroaufgaben in einer
nachgebauten Firma erledigt der beste Agent rund 30 Prozent eigenständig, bei
Datenanalyse und Verwaltung oft gar nichts, und am schlechtesten schneidet er
dort ab, wo mit Kolleginnen und Kollegen geredet werden muss.

### „Klarna hat 700 Leute durch KI ersetzt und musste sie zurückholen."

So ist es nicht gelaufen. Die Belegschaft schrumpfte über Einstellungsstopp
und Fluktuation, nicht über Entlassungen. Der Rückbau betraf die schwierigen
Fälle und den Premium-Bereich, im Massenbetrieb blieb die KI vorn. Dieselbe
Firma meldete später weiter Einsparungen durch KI.

*Stattdessen, und es ist die bessere Geschichte:* „Wer nur auf den Durchschnitt
schaut, übersieht, dass der Schaden in den Ausnahmefällen entsteht."

### Umsatzzahlen von KI-Anbietern

„Annualisierter Umsatz" ist ein hochgerechneter Monat, von der Firma selbst
genannt und nicht testiert. Diese Werte ändern sich im Quartals-, teils im
Monatstakt. Eine Zahl, die bis zum Seminar überholt sein kann, gehört nicht auf
eine Folie, die anschließend als PDF weitergereicht wird. Und über den Nutzen
im Betrieb sagen Anbieterumsätze ohnehin nichts.

### Aus der Nachprüfung zu Abschnitt 04, 23.09.2026

**„Selbst beim besten Schutz klappt jeder hundertste Angriff."** Stand so im
Entwurf für Folie 21. Das Zitat vom 24.11.2025 ist wörtlich richtig („A 1%
attack success rate … still represents meaningful risk"), aber überholt. Am
26.08.2026 meldet Anthropic auf einem härteren Test mit Schutz null
erfolgreiche Angriffe gegen drei der vier aktuellen Modelle. Dazu war
„erhebliches Risiko" zu stark übersetzt, „meaningful" heißt nennenswert.
*Stattdessen sagbar:* Die Abwehr ist deutlich besser geworden, gelöst ist es
nach Aussage der Hersteller nicht. „Prompt injection remains a moving target."

**„Agenten arbeiten 17 Stunden selbstständig."** Der Wert gehört zu einem
System, das nicht öffentlich ist, gemessen in einer frühen Vorabfassung, und
liegt über der Grenze von 16 Stunden, ab der METR die eigenen Messungen
unzuverlässig nennt. Gemessen wird ohnehin die Zeit einer Fachkraft, nicht die
Laufzeit. *Stattdessen sagbar:* Bei jedem zweiten Versuch Aufgaben von rund
zwölf Stunden Menschenzeit, bei vier von fünf rund anderthalb Stunden.

**„Mit einem Agenten schafft man eine Aufgabe, für die ein Fachmann einen
Arbeitstag braucht."** Der Arbeitstag ist unsere Umrechnung, METR kennt keinen,
und beim öffentlichen Spitzenwert von zwölf Stunden ist er zu niedrig. Die Zahl
direkt nennen.

**„Agenten lösen Softwareaufgaben am besten."** Die Arbeit zu TheAgentCompany
sagt nur „higher success rate" gegenüber Verwaltung und Finanzen. In Tabelle 5
liegt Projektmanagement bei den besten Modellen über Software.

**„Mit einem Agenten lassen Leute die Arbeit ganz machen: 79 % statt 49 %."**
Beide Werte stammen nur aus Programmiergesprächen, und 36 der 79 Punkte sind
Arbeit mit Rückmeldung durch den Menschen. „Ganz" trägt nur für 44 %.

**Airbnb als Agentenbeispiel.** 3.500 Testdateien in sechs Wochen statt
anderthalb Jahren, belegt, aber mit einer festen Abfolge („state machine",
„production pipeline"), in der das Programm die Schritte vorgibt. Das Wort
„agent" kommt im Beitrag nicht vor. Taugt als Gegenbeispiel auf Folie 18.

**„METR: Entwickler sind jetzt nur noch 4 % langsamer."** Falsches Vorzeichen,
−4 % heißt dort schneller. Dazu nur eine Teilgruppe, ein Intervall über null,
und METR nennt die Daten selbst „an unreliable signal".

**OSWorld-Werte aus Bestenlisten-Sammelseiten.** Mehrere Sammelseiten nennen
Werte, die in der offiziellen Ergebnisdatei nicht stehen. Und auf
OSWorld-Verified liegen die besten Agenten inzwischen über dem Menschenwert von
2024, auf dem schwereren OSWorld 2.0 bei rund 21 % vollständig gelöst. Welche
Zahl man zeigt, ist Auswahl, deshalb keine.

**SWE-bench Verified.** OpenAI empfiehlt selbst, ihn nicht mehr zu verwenden:
„SWE-bench Verified is increasingly contaminated." Mindestens 59,4 % der
geprüften Aufgaben hatten fehlerhafte Tests.

**„Replit löschte die Datenbank trotz elf Warnungen in Großbuchstaben."** Die
elf Warnungen stehen nur bei The Register, angeblich aus einem LinkedIn-Video,
das nicht zugänglich ist. Die Zahl der Datensätze ist die Selbstauskunft des
Agenten. *Stattdessen sagbar:* was Lemkin selbst geschrieben hat, Löschung,
„unmöglich", Wiederherstellung gelang.

**„Googles Antigravity löschte ein ganzes Laufwerk."** Nur Presse, keine
Primärquelle. **„Amazon Q sollte Rechner löschen."** Den Wortlaut des
eingeschleusten Befehls nennt AWS nicht, und es war ein Angriff auf die
Lieferkette eines Werkzeugs, kein Fehlverhalten eines Agenten.

**Messwerte als Beleg dafür, was Agenten können.** Stand in der ersten Fassung
von Folie 20: METR (bei jedem zweiten Versuch Aufgaben von rund zwölf Stunden,
bei vier von fünf rund anderthalb Stunden), TheAgentCompany (Programmieren vor
Verwaltung) und 79 gegen 49 % aus dem Anthropic Economic Index. Alles belegt,
und trotzdem hat Andrew die Folie als „komplett weird" verworfen. Die Werte
sagen Laien nichts, jede Karte relativiert sich selbst, und vor allem
**widersprechen sie der Erfahrung im Haus**: Eine App-Anpassung, die Monate
gedauert hätte, war mit Claude Code in drei Wochen erledigt. Das ist Regel 23 in
anderer Richtung. Die Messwerte zeigen einen Agenten **allein, in einem
Anlauf**, die Praxis ist ein Mensch, der über Tage steuert. *Stattdessen
sagbar:* drei Fälle mit Vorher und Nachher, von den Firmen selbst berichtet.

**Beispiele aus 2025 auf einer Folie über heutige Agenten.** In der zweiten
Fassung von Folie 21 stand der Operator-Test von OpenAI: 100 Aufgaben, eine Mail
an den falschen Empfänger, die Erinnerung an ein Medikament am falschen Tag.
Wörtlich belegt, aber vom Januar 2025, mit einem Modell ohne Schutzmaßnahmen.
Andrew: keine alten Fälle, und möglichst gar keine Einzelfälle. *Stattdessen
sagbar:* was bei den heutigen Agenten allgemein schiefgehen kann, so wie es das
BSI auf seiner laufend gepflegten Seite beschreibt.

**„Claude Cowork, seit April 2026."** Das war das Datum der allgemeinen
Verfügbarkeit, Cowork gab es seit Januar 2026 als Vorschau. Ebenso bei Claude
Code, Codex, dem Copilot Coding Agent und Microsoft, bei Gemini CLI und
ChatGPT agent dagegen der erste Start. Zwei Kriterien auf einer Folie, und
aufgefallen ist es erst Andrew. Jetzt gilt überall: **„seit" ist der erste
öffentliche Start**, die allgemeine Verfügbarkeit steht in der Sprechnotiz.

**„Die Bundeszahnärztekammer schließt autonomen Betrieb aus."** Stand so im
Briefing. Das Wort „autonom" kommt in der Stellungnahme nicht vor, und die
Pflicht zur menschlichen Aufsicht gilt nur für Hochrisiko-KI-Medizinprodukte,
ab 02.08.2027. *Stattdessen sagbar:* „persönlich voll verantwortlich", das gilt
allgemein.

---

## Aus der Recherche zu Abschnitt 05

Neun Rechercheläufe am 24.09.2026, danach jede tragende Zahl selbst im Rohtext
gelesen. Zwei Zahlen aus den Agentenberichten standen so nicht in der Quelle.

### „KI spart im Posteingang 40 bis 60 Prozent der Zeit."

Kursiert in Blogs mit Verweis auf Mittelstand-Digital. Die Studie dahinter ist
nicht auffindbar. Eine unabhängig belegte Vorher-Nachher-Zahl zur E-Mail aus
Deutschland gibt es nicht.

*Stattdessen sagbar:* was die Werkzeuge können, laut Herstellerseite, ohne
Zahl. So steht es auf Folie 24.

### „Wenn der Arbeitgeber ermutigt, ist der Nutzen 10 bis 40 Prozent größer."

Aus dem Arbeitspapier von Humlum und Vestergaard, aber in keiner Fassung, die
beim Nachlesen abrufbar war. Die Fassung vom Juni 2025 sagt allgemein „These
firm-led investments boost adoption", die Fassung vom März 2026 gar nichts mehr
dazu. Ebenso die „2,8 % Zeitersparnis": Die Juni-Fassung nennt „average time
savings of 3%", die heutige keinen Wert.

*Stattdessen sagbar:* der begutachtete Satz aus PNAS, Beschäftigte werden
„often hindered by employer restrictions and a perceived need for training".
Er trägt die Unterzeile von Folie 28.

### „70 Prozent bekommen keine KI-Schulung."

Bitkom, Juli 2025, korrekt zitiert, aber überholt. Dieselbe Frage im April 2026
ergibt 21 % mit genutzter Fortbildung, 37 % ohne Angebot und 24 %, die keins
vermuten. Auf der Folie steht die neuere Zahl.

### „12 Prozent nutzen KI heimlich."

Die Zahl stimmt, die Bezugsgröße wird meist weggelassen. Es sind 12 % derer,
die KI im Job nutzen, nicht 12 % aller Beschäftigten. Deshalb nur in der
Sprechnotiz, mit Bezugsgröße.

### „Acht von zehn Beschäftigten nutzen KI."

Aus einer Umfrage einer Beratung, weit über allen repräsentativen Werten, die
bei knapp der Hälfte liegen. Ebenso die „18 %" eines Personaldienstleisters, die
oft fälschlich dem ifo zugeschrieben werden.

### „Ein KI-Botschafter je 30 Mitarbeitende."

Eine Faustregel aus der Werbung eines Lehrgangsanbieters, ohne Beleg.

*Stattdessen sagbar:* die Augsburger Studie, die solche Ansprechpersonen
beschreibt, mit dem Zusatz, dass ihre Wirkung nicht gemessen ist.

### „Mit KI spart man einen Tag pro Woche."

Selbstauskunft in einer Beratungsumfrage. Die dänische Registerstudie findet
keine messbare Wirkung auf Lohn und Arbeitszeit. Beides passt nur zusammen,
wenn man sagt, was es ist: eine Selbsteinschätzung gegen eine Messung.

### EchoLeak, die präparierte Mail an Microsoft 365 Copilot

Belegt als CVE-2025-32711, veröffentlicht am 11.06.2025, geschlossen. Ein
Einzelfall von 2025, und Andrew will auf Folien über heutige Systeme keine
alten Einzelfälle. Die allgemeine Warnung vor versteckten Anweisungen steht
auf Folie 21 und wird auf Folie 24 aufgegriffen.

### „Die stärksten Modelle gibt es nicht zum Selbstbetreiben."

Stand im ersten Entwurf von Folie 27. Vermutlich richtig, aber es gibt keine
Quelle, die das so sagt, nur das Schweigen der Hersteller. Aus Schweigen folgt
nichts.

### Der Chatbot, für den eine Fluggesellschaft haften musste

Ein kanadisches Urteil von 2024. Für deutsches Recht sagt es nichts, und als
Beleg für eine Haftung bei orangedental taugt es nicht.

---

## Der Fallstrick, der am ehesten passiert

**Die Zahlen von 2012 stammen aus zwei verschiedenen Jahren.** 15,3 % und
26,2 % gehören zum Wettbewerb von 2012. Die oft daneben zitierten 37,5 % und
17,0 % gehören zum Datensatz von 2010. Wer das mischt, erzählt Unsinn. Die
Belege dazu stehen in `quellenangabe.md`.

---

## Aus der Gegenprüfung der Zeitachse

Anlass war eine Nachfrage zu den 3,2 Millionen Fotos von 2009. Die Zahl war
richtig belegt, der Satz daneben nicht. Daraus wurde eine Prüfung aller
Stationen.

### „Auf diesen Fotos lief der Wettbewerb von 2012."

Das stand so auf der Folie und setzt drei verschiedene Mengen gleich. Die
3,2 Millionen sind der Stand von 2009, und das Papier nennt sie selbst „in its
current state". Im Januar 2012 hatte die Datenbank bereits 14.197.122 Bilder.
Der Wettbewerb lief auf einer Teilmenge mit **1.281.167 Trainingsbildern in
1000 Klassen**, und der Siegerbeitrag nutzte zusätzlich das vollständige
Release von 2011 zum Vortraining. Im Papier von 2012 kommt „3.2 million"
**null Mal** vor.

*Stattdessen sagbar:* Nichts davon. Die Station zu den Fotos ist aus dem Deck
gefallen, weil sie abstrakt blieb und ihre Verbindung zu 2012 nicht haltbar war.

### „Bis dahin rang man um Zehntelpunkte."

Widerlegt durch die amtlichen Jahressieger: 2010 lag der Sieger bei 28,2 %,
2011 bei 25,8 %. Das sind 2,4 Punkte, keine Zehntel.

*Stattdessen sagbar:* Innerhalb **eines** Jahrgangs lagen die herkömmlichen
Verfahren tatsächlich im Hundertstelbereich beieinander. Die amtliche Liste von
2010 nennt für die ersten vier Plätze 0,28191 · 0,28192 · 0,28299 · 0,28782.

### „AlexNet war der erste Sieg eines tiefen Netzes."

War es nicht. Schmidhubers Gruppe gewann mit DanNet zwischen Mai 2011 und
September 2012 vier Bildwettbewerbe in Folge, und das AlexNet-Papier zitiert
diese Arbeit selbst.

*Stattdessen sagbar:* Es war der Durchbruch auf dem großen, öffentlich
anerkannten Vergleichsmaßstab. Gehört in die Sprechnotiz, nicht auf die Folie.

### Watson gewinnt Jeopardy, 2011

Steht in sechs von sieben geprüften Übersichten und fehlt trotzdem im Deck.
Zwei Gründe. Erstens die Sache: Laut der Originalarbeit lernte Watson vor allem
das Gewichten vieler Einzelverfahren und die Spielstrategie, nicht die Aufgabe
selbst. Für die Aussage „die Maschine lernt aus Beispielen" taugt es nicht.
Zweitens die Geometrie: Auf der Achse lägen 2011 und 2012 nur 44 px
auseinander.

*Stattdessen sagbar:* Es steht in der Sprechnotiz zu Folie 04 (Vom Rechnen zum Lernen), für die
vorhersehbare Nachfrage.

### Erklärbare KI, DARPA-Programm 2016

Die Jahreszahl stimmt nicht. Die Ausschreibung DARPA-BAA-16-53 erschien am
10.08.2016 und nennt selbst „a nominal start date of **May 1, 2017**". Die
Programmleitung schreibt rückblickend: „In 2017, the four-year XAI research
program began." Dazu kommt, dass die Station in keiner der sechs anderen
geprüften Übersichten vorkommt und dass ein Förderprogramm kein Verfahren ist.

*Stattdessen sagbar:* Nichts auf der Achse. Erklärbarkeit kommt im Deck dort
vor, wo sie hingehört, bei den Expertensystemen von 1980.

### „49.000 Menschen aus 167 Ländern haben die Fotos beschriftet."

Belegt, aber nur durch eine Vortragsfolie von Fei-Fei Li und Jia Deng auf
image-net.org, nicht durch eine begutachtete Arbeit. Mit dem Wegfall der
Fotosammlungs-Station ist die Frage ohnehin erledigt.

### Die Nobelpreise 2024 als Station

Stand auf Folie 05 (KI wird erwachsen) als eigene Station und fiel dort
heraus: Eine Auszeichnung ist kein Schritt der KI, und die beiden Preise
meinen Verschiedenes. Den Physikpreis gab es für Grundlagen aus den 1980ern,
das Hopfield-Netz von 1982 und die Boltzmann-Maschine von 1985, eingesetzt
wurde da keine KI. Beim Chemiepreis ist AlphaFold2 der KI-Einsatz, vorgestellt
2020, und Bakers Hälfte kommt ohne KI aus. Die Sprechnotiz hatte „1982 und
1986" genannt, die 1986 gehört zu einem anderen Verfahren. Beides steht jetzt
nur noch als Antwort auf Nachfrage in Sprechnotiz und `referat.md`.

### Der Dental-Strang, geparkt

Vollständig recherchiert und belegt, kommt aber als **eigene Folie in einem
getrennten Schritt**, nicht auf die Geschichtsachse:

| Datum | Vorgang |
|---|---|
| September 1998 | Logicon Caries Detector, FDA-PMA **P980025**: Kariesdetektion auf dem digitalen Intraoralbild, drei Monate nach der Mammographie-CAD und unter demselben Produktcode |
| 11.04.2018 | IDx-DR, FDA De Novo **DEN180001**, erste autonome Screening-Entscheidung ohne ärztliche Bildbefundung |
| 19.05.2021 | Overjet Dental Assist, **K210187**, erste dentale Freigabe der lernenden Generation |
| 21.04. und 10.05.2022 | Videa **K213795** und Overjet **K212519**, erstmals ausdrücklich Karies |
| ab 23.05.2025 | Pearl **K243989**, danach Overjet und Dentsply Sirona: erstmals DVT |

Die stärkste Gegenüberstellung daraus, zwei Behördensätze zwanzig Jahre
auseinander: 1998 durfte das System erst markieren „**after** the initial
reading has been completed", 2018 entscheidet es „**without the need for a
clinician** to also interpret the image or results".

### Die sieben Mängel der Leitdarstellung

Die Seite der Klickpunkt Schule bestimmt Auswahl und Gliederung der Achse. Ihre
Einzeldaten sind es nicht wert. Vollständige Liste samt Gegenbelegen in
`quellenangabe.md`, Abschnitt „Was von der ISB-Seite nicht übernommen wurde".

Kurzfassung: AlexNet siegte nicht im September, sondern im Oktober 2012. Die
Quellenangabe „Ranjan et al. 2020, S. 61" ist nicht auflösbar. Das Bootbeispiel
ist kein ELIZA-Dialog. Der erste Winter endete nicht in den 1970ern. Das
XAI-Programm startete 2017. Lee Sedol war nicht amtierender Weltmeister. Und
einer der eigenen Quellenverweise der Seite antwortet mit 404.

*Daraus gelernt und als Regel festgehalten:* Ein Satz, der zwei belegte Zahlen
verbindet, ist selbst eine Behauptung und braucht einen eigenen Beleg. Genau an
dieser Stelle ist die Prüfung vorher durchgerutscht.
