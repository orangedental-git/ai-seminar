# Quellen

Jede Jahreszahl, jede Prozentzahl und jeder Name, der im Deck vorkommt, steht
hier mit seinem Beleg und einer Adresse zum Nachlesen. Wer eine Aussage auf
einer Folie ändert, ändert diesen Eintrag mit.

**Zu den Links.** Jeder wurde vor der Aufnahme einmal abgerufen. Drei Adressen
antworten einem automatischen Abruf mit einer Sperrmeldung, im Browser
öffnen sie sich normal: die Verlagsseiten von Oxford und PNAS sowie
`openai.com`. Sie sind trotzdem hier aufgeführt, weil sie die dauerhaften
Adressen sind. Wo es eine frei zugängliche Zweitfassung gibt, steht sie
daneben.

**Zum Runden.** Auf den Folien stehen Prozentzahlen ohne Nachkommastellen.
Hier steht der exakte Wert. Das ist Absicht: Die Folie vereinfacht, der Beleg
bleibt nachprüfbar.

---

## Folie 03 · KI ist älter als die meisten denken

| Aussage auf der Folie | Beleg | Nachlesen |
|---|---|---|
| 1950, Turing macht aus der Streitfrage eine prüfbare | Turing, „Computing Machinery and Intelligence", *Mind* LIX (236), 433–460. Der Aufsatz führt das „imitation game" ein und erschien am 01.10.1950 | https://doi.org/10.1093/mind/LIX.236.433 |
| 1956, das Wort „KI" entsteht | Der Förderantrag für das Dartmouth-Treffen, datiert 31.08.1955, McCarthy, Minsky, Rochester und Shannon. Er enthält die erste belegte Verwendung von „artificial intelligence". Das Treffen selbst fand im Sommer 1956 statt | http://jmc.stanford.edu/articles/dartmouth/dartmouth.pdf |
| 1973, ein Gutachten streicht das Geld | Der Lighthill-Bericht für den britischen Science Research Council. Kernsatz: „In no part of the field have the discoveries made so far produced the major impact that was then promised" | http://www.chilton-computing.org.uk/inf/literature/reports/lighthill_report/p001.htm |
| Der Streit lief im Fernsehen | Die Debatte an der Royal Institution am 09.05.1973, Lighthill gegen Michie, McCarthy und Gregory. Die BBC sendete sie im Juni 1973 in der Reihe „Controversy" | dieselbe Adresse, Abschnitt zur Debatte |
| 1979, 65 % gegen höchstens 63 % | Yu et al., *JAMA* 242 (12) vom 21.09.1979. Acht Fachleute bewerteten verblindet zehn Fallbeurteilungen. Das Programm (MYCIN) kam auf **65 %** akzeptable Vorschläge, die menschlichen Fachärzte auf **42,5 bis 62,5 %** | https://pubmed.ncbi.nlm.nih.gov/480542/ |
| 1997, Schachweltmeister geschlagen, 200 Mio. Stellungen je Sekunde | Deep Blue gegen Garri Kasparow, 11.05.1997, Endstand 3,5:2,5. 32 Prozessoren, rund 200 Millionen Stellungen je Sekunde | https://www.ibm.com/history/deep-blue |
| 2009, 3,2 Mio. beschriftete Fotos | Deng et al., „ImageNet: A Large-Scale Hierarchical Image Database", CVPR 2009. Die Zahlen **3,2 Millionen Bilder** und **5247 Kategorien** stehen wörtlich im Abstract. Beschriftet wurde über eine Plattform für Kleinaufträge | https://www.image-net.org/static_files/papers/imagenet_cvpr09.pdf |
| 2012, von 26 auf 15 % Fehler | Krizhevsky, Sutskever und Hinton, NeurIPS 2012. Top-5-Fehlerrate **15,3 %** gegenüber **26,2 %** beim Zweitplatzierten | https://proceedings.neurips.cc/paper_files/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf |
| dieselben Zahlen, amtlich | Die offizielle Ergebnisliste des Wettbewerbs von 2012: SuperVision 0,15315, ISI 0,26172 | https://image-net.org/challenges/LSVRC/2012/results.html |
| Zwei Grafikkarten, fünf bis sechs Tage | Dasselbe Papier, Abschnitt 5: zwei NVIDIA GTX 580 mit je 3 GB, fünf bis sechs Tage Trainingszeit, 60 Millionen Parameter | dieselbe PDF-Adresse |

### Zwei Fallstricke bei den Zahlen von 2012

**15,3 % und 26,2 % sind Top-5-Fehlerraten des Wettbewerbs von 2012.** Die oft
daneben zitierten 37,5 % und 17,0 % gehören zum Datensatz von 2010. Wer das
mischt, erzählt Unsinn.

**Die HTML-Seite auf `papers.nips.cc` nennt abweichende Zahlen** (39,7 und
18,9 %) aus einer früheren Fassung. Maßgeblich ist das PDF.

Der Siegerbeitrag nutzte zusätzliche Trainingsdaten. Nur mit den
bereitgestellten Daten lag derselbe Ansatz bei **16,4 %**. Das steht als
Antwort auf Nachfragen in der Sprechnotiz.

---

## Folie 04 · KI wird erwachsen

| Aussage auf der Folie | Beleg | Nachlesen |
|---|---|---|
| 2017, acht Forscher, fünfzehn Seiten | Vaswani et al., „Attention Is All You Need", eingereicht am 12.06.2017. Acht Autoren. Den Umfang gibt die Abstract-Seite selbst an, wörtlich: **„15 pages, 5 figures"** | https://arxiv.org/abs/1706.03762 |
| 2020, GPT-3, 175 Milliarden Werte | Brown et al., „Language Models are Few-Shot Learners", 28.05.2020. Die Zahl **175 Milliarden Parameter** steht im Abstract | https://arxiv.org/abs/2005.14165 |
| 30.11.2022, ChatGPT | Die Ankündigung von OpenAI selbst, datiert auf den 30.11.2022 | https://openai.com/index/chatgpt/ |
| 2024, Nobelpreis Physik an Hopfield und Hinton | Verliehen am 08.10.2024 „for foundational discoveries and inventions that enable machine learning with artificial neural networks" | https://www.nobelprize.org/prizes/physics/2024/press-release/ |
| 2024, Nobelpreis Chemie an Hassabis, Jumper und Baker | Verliehen am 09.10.2024. Eine Hälfte an David Baker für den Entwurf neuer Eiweiße, die andere gemeinsam an Demis Hassabis und John Jumper für die Vorhersage von Proteinstrukturen | https://www.nobelprize.org/prizes/chemistry/2024/press-release/ |
| die Arbeiten von 1982 und 1986, auf die sich der Physikpreis bezieht | Hopfield, *PNAS* 79 (8), 2554–2558 · Rumelhart, Hinton und Williams, *Nature* 323, 533–536 | https://pmc.ncbi.nlm.nih.gov/articles/PMC346238/ · https://doi.org/10.1038/323533a0 |

---

## Folie 05 · Wie kam es zu ChatGPT?

Alle vier Angaben der dritten Karte stehen wörtlich in der Ankündigung von
OpenAI selbst.

| Aussage auf der Folie | Wörtlich in der Quelle | Nachlesen |
|---|---|---|
| 30.11.2022 | „November 30, 2022" | https://openai.com/index/chatgpt/ |
| kostenlos | „free. Try it now at …" | dieselbe Adresse |
| das Modell dahinter heißt GPT-3.5 | „fine-tuned from a model in the GPT-3.5 series, which finished training in early 2022" | dieselbe Adresse |
| es befolgt Anweisungen | „We trained this model using Reinforcement Learning from Human Feedback (RLHF), using the same methods as InstructGPT" | dieselbe Adresse |
| das Verfahren dahinter | Ouyang et al., „Training language models to follow instructions with human feedback", 04.03.2022. Erst überwachtes Lernen an vorgemachten Antworten, dann Lernen aus einer Rangfolge, die Menschen erstellt haben | https://arxiv.org/abs/2203.02155 |
| für Nachfragen: hundertfach kleiner, trotzdem bevorzugt | Dasselbe Papier, Abstract: die Ausgaben des Modells mit 1,3 Milliarden Parametern werden „preferred to outputs from the 175B GPT-3" | dieselbe Adresse |

Die Angaben zu 2017 und 2020 stehen oben bei Folie 04.

**Zum Abruf von `openai.com`:** Die Adresse weist einen automatischen Abruf
mit einer Sperrmeldung ab, liefert aber normal, sobald eine Browser-Kennung
mitgeschickt wird. Der Link ist also nicht tot, und die Zitate oben sind so
geprüft worden.

**Nicht auf der Folie: „weltweit".** ChatGPT war beim Start in mehreren
Ländern nicht erreichbar, und OpenAI sagt dazu nichts. Die Folie sagt deshalb
„öffentlich und kostenlos".

---

## Wo der Beleg schwächer ist

Zwei Stellen im Deck ruhen nicht auf einer Primärquelle. Das ist vertretbar,
muss aber hier stehen, sonst wirkt die Datei genauer, als sie ist.

**Die Jahreszahl 1987 für den zweiten Einbruch.** Dass der Markt für
KI-Spezialrechner zusammenbrach, weil normale Arbeitsplatzrechner schnell
genug und viel billiger wurden, ist unstrittig und in jeder Darstellung der
Fachgeschichte zu finden. Die Datierung auf genau 1987 stammt aus der
Sekundärliteratur, etwa aus Russell und Norvig, *Artificial Intelligence: A
Modern Approach*, Kapitel zur Geschichte des Fachs, und aus Roland und
Shiman, *Strategic Computing*, MIT Press 2002. Eine Primärquelle mit dieser
Jahreszahl gibt es nicht, weil ein Markteinbruch kein Ereignis mit Datum ist.
Auf einer maßstäblichen Achse muss trotzdem ein Jahr stehen, und 1987 ist die
gängige Datierung.

**Das genaue Datum des Dartmouth-Treffens.** Belegt ist der Antrag vom
31.08.1955 und der Sommer 1956. Die oft genannte Spanne 18.06. bis 17.08.1956
steht nur in Sekundärquellen. Deshalb steht auf der Folie nur das Jahr und
kein Datum.

---

## Was recherchiert wurde und bewusst nicht im Deck steht

Steht in `dev/nicht-erzaehlen.md`: die Legenden, die gut klingen und nicht
stimmen, und die Zahlen, die kursieren, ohne belegt zu sein.
