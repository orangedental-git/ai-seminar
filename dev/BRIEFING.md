# Briefing — KI-Seminar bei orangedental

Ergebnis von Phase 0 des Skills `create-slides`. Diese Datei ist später die
Antwort auf „warum ist das so?".

> **Hinweis zur Öffentlichkeit:** Der Pages-Workflow stellt das **gesamte**
> Repository online, auch dieses Verzeichnis. Hier gehört deshalb nichts hinein,
> was nicht öffentlich stehen darf — keine Kundendaten, keine unveröffentlichten
> Produktpläne, keine internen Personendaten. Wer das nicht will, macht das
> Repository privat, bevor er zum ersten Mal pusht.

## Anlass und Ziel

**Interne Schulung, ein Vortragender führt.** Andrew hält vor rund 50
Mitarbeitenden ein Seminar über KI. Daraus folgt für den Bau:

- **Sprechnotizen ja.** Die Folien tragen nicht allein — Andrew erzählt dazu.
  Jede Folie bekommt ein `<template class="notes">`.
- **Wenig Text, große Bilder.** Aber mehr Text als in einem Vertriebsdeck: die
  Folien werden hinterher als PDF weitergereicht.
- **Kein Selbstläufer.** Wer nur das PDF liest, bekommt nicht alles — das ist
  bewusst so und der Grund, warum die Notizen nicht sichtbar auf die Folie
  wandern.

## Publikum

Rund 50 Personen, quer durch die Firma: Vertrieb, Support, Verwaltung, Technik.
**Gemischt, eher Laien** — die Mehrheit ohne IT-Hintergrund.

Daraus folgt: Bilder und Analogien vor Fachbegriffen. Jeder Begriff, der fällt
(Modell, Training, Token, Halluzination), braucht eine konkrete Erklärung oder
fliegt raus. Das ist auch die schärfste Leitplanke aus Andrews Schreibstil:
**keine Buzzwords ohne Substanz.**

## Tonfall

**Intern, also duzen.** Locker, gerne humorvoll, aber kein Fülltext und keine
verschachtelten Sätze. Kurze Hauptsätze auf den Folien.

**„orangedental" wird immer kleingeschrieben**, auch am Satzanfang und auch in
Überschriften.

## Umfang

15–20 Minuten, **nach oben offen**. Angepeilt sind 20–25 Folien, also rund 45
Sekunden je Folie — ruhiger Takt mit Raum für Erklärungen.

Gliederung in drei Abschnitten (`SECTIONS` in `assets/js/deck.js`):

| | Abschnitt | Inhalt |
|---|---|---|
| 01 | Was ist KI heute | inklusive kurzem geschichtlichem Abriss |
| 02 | Wie KI funktioniert | |
| 03 | KI bei orangedental | Einsatzmöglichkeiten im Haus |

## Marke

| | |
|---|---|
| Logo | `assets/brand/logo_od_premium_big.png`, unten links, 52 px hoch. Schutzzone x 100–372 / y 948–1034 |
| Wortmarke | „KI-Seminar" unten rechts, gemessen x 1667–1808 / y 986–1016 |
| Lichtzeichen | `#od-blob` aus `logo_od_symbol.svg` — das Hauszeichen, nicht das Produktzeichen |
| Schriften | Familjen Grotesk 500/600 · Inter 400/500/600 · IBM Plex Mono 500 |
| Bezug | aus dem byzz-Deck übernommen, Base64 in `assets/css/fonts.css` |
| Lizenz | alle drei SIL OFL — Weitergabe und Veröffentlichung unbedenklich |
| Farben | `--orange #F68B1A` (Fläche), `--orange-deep #C2620A` (Text, 4,6:1), `--slate #363E4B` als kühler Gegenpol, `--paper #FBF8F4` als Grund |

### Offener Punkt: welcher Orangewert gilt

Das Deck verwendet `#F68B1A`. Dieser Wert ist aus `logo_od_premium_big.png`
gepickt — also aus genau der Datei, die unten links auf jeder Folie steht.

Die Branding-Notiz im 2nd Brain (`00 Kontext/Branding.md`) nennt dagegen
`rgb(240, 131, 25)` = `#F08319`. Der Unterschied ist an der Wahrnehmungsschwelle
und auf einem Beamer nicht zu sehen — **neben dem Logo-PNG wäre eine Abweichung
dagegen als Kante sichtbar.**

> **Entscheidung für Andrew:** Solange das ausgelieferte Logo-PNG `#F68B1A`
> trägt, bleibt das Deck dabei. Kommt eine verbindliche Freigabe auf `#F08319`,
> wird **zusätzlich** das Logo neu gezogen — sonst nicht.

Wenn gewechselt wird, ist es kein Ein-Zeilen-Eingriff: der Rohwert
`246, 139, 26` steht außerhalb des Tokens noch in `.bloom--warm`,
`.chip--link:hover`, `.step.is-on` und dreimal im Popup-CSS von
`assets/js/presenter.js` — das Popup sieht die CSS-Variablen des Openers nicht.

## Ausgabe

Dreifach:

1. **Offline per Doppelklick** auf `index.html` — das ist die maßgebliche
   Fassung und der Weg, über den abgenommen wird.
2. **GitHub Pages** über `.github/workflows/pages.yml`.
3. **PDF** über `pdf.bat` — jede Aufbaustufe wird eine eigene Seite.

## Material

Für Abschnitt 3 trägt Andrews 2nd Brain (`C:\Users\andrewkerkel\2nd-brain`)
belegte Fälle aus dem Haus: der ChecksumHelper als Pre-Build-Event, generierte
technische Dokumentation, Flyer und Präsentationen, ein Security-Review, das
n8n-Vorhaben, LLM-Hardware wegen Datenschutz — und ein ehrlicher Fehlschlag als
Gegengewicht.

**Abschnitt 1 und 2 stehen dort nicht** und müssen vollständig neu erarbeitet
werden.

## Festlegungen

- **`index.html` ist die einzige Quelle der Folien.** Kein Montageschritt,
  `assemble.order` bleibt leer. Ein Erzeugnis und seine Quelle dürfen nicht
  beide von Hand bearbeitbar aussehen.
- **Nichts erfinden.** Keine Zahl, kein Datum, kein Funktionsumfang ohne Beleg.
  Bei einem KI-Vortrag ist das besonders heikel: die Zahlen ändern sich monatlich.
- **Werkzeuge bleiben im Skill.** Kein `node_modules` im Projekt.
- Die fünf Referenzfolien tragen Platzhaltertext. Sie sind das **Muster** für
  alles Weitere, nicht der Anfang des Inhalts.

## Offen

| Punkt | Was zum Schließen nötig ist |
|---|---|
| Orangewert `#F68B1A` vs. `#F08319` | Entscheidung Andrew, siehe oben |
| Live-Demos | Ob und wo aus dem Deck herausgesprungen wird |
| Vortragsdatum | Für die Schlussfolie |
| Repository privat oder öffentlich | Vor dem ersten Push, siehe Kopf dieser Datei |
| Inhalte Abschnitt 1 und 2 | Eigene Recherche, nächster Arbeitsschritt |
