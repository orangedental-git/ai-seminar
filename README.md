# KI bei orangedental

Fullscreen-Präsentation für ein internes Seminar, 15–20 Minuten, rund 50
Teilnehmende. HTML, läuft offline.

**Vorführen:** `index.html` doppelklicken. Bedienung steht in [`readme.txt`](readme.txt).

> **Stand: alle fünf Abschnitte stehen,** achtundzwanzig Folien. Von den
> Anfängen bis ChatGPT, Was ist KI heute, Wie KI funktioniert, KI-Agenten und
> KI bei orangedental sind gebaut und belegt. Auf Folie 26 (Was sich an der
> byzz app geändert hat) fehlt noch die Bestätigung der Eckdaten.

---

## Was das ist

Ein eigenständiges Präsentations-Deck, das per Doppelklick startet, ohne Server,
ohne Node, ohne Internet. Der Ordner lässt sich als Ganzes weitergeben oder auf
einen USB-Stick kopieren.

| | |
|---|---|
| Folien | siehe die erzeugte Gliederung weiter unten. Fünf Abschnitte vorgesehen, drei davon gebaut |
| Ziel | Chrome und Edge unter Windows |
| Bühne | Inhalt fix 1920 × 1080, Hintergrund füllt jedes Fensterformat |
| Besonderheiten | Referentenansicht mit Notizen, Folienübersicht, mehrstufige Folien |

Technik und Optik sind aus `D:\SourceAI\byzz-whats-new` portiert. Der Auftrag
und alle Festlegungen stehen in [`dev/BRIEFING.md`](dev/BRIEFING.md), die
Arbeitsregeln in [`CLAUDE.md`](CLAUDE.md).

Der gesprochene Vortrag steht in [`referat.md`](referat.md), ein Kapitel je
Folie. Jede Zahl im Deck ist in [`quellenangabe.md`](quellenangabe.md) mit
einer Adresse zum Nachlesen belegt.

---

## Aufbau

```
index.html            das Deck: Bühne, Symbole, alle Folien
deck.config.json      alle Projektzahlen (Raster, Schutzzonen, Bilddeckel)
readme.txt            Bedienung
referat.md            der gesprochene Vortrag, ein Kapitel je Folie
quellenangabe.md      jede Zahl mit Beleg und Adresse zum Nachlesen
README.md             diese Datei
CLAUDE.md             Arbeitsregeln

pruefen.bat          Doppelklick: Abnahme
pdf.bat               Doppelklick: PDF erzeugen (erst am Ende)
publish.bat           Doppelklick: Weitergabe-Ordner ohne dev\
.gitignore            was nicht ins Repository gehört

.claude/settings.json Projektrechte
.github/workflows/pages.yml

assets/
  css/fonts.css       Schriften, Base64 eingebettet
  css/deck.css        Design-System und Folien-Vorlagen
  js/deck.js          Zustand, Navigation, Skalierung, der DECK-Vertrag
  js/transitions.js   Bewegungslogik
  js/overview.js      Folienübersicht
  js/presenter.js     Referentenansicht, die Notizen stehen nur dort
  js/vendor/          GSAP 3.13
  img/                Bilder                                       [erzeugt]
  brand/              Logos

dev/                  alles, was nur beim Bauen gebraucht wird
  BRIEFING.md         Auftrag und Festlegungen
  nicht-erzaehlen.md  was recherchiert wurde und absichtlich draußen bleibt
  claude/             Nachschlagedateien zu CLAUDE.md, je Vorhaben eine
  platzhalter.png     Quellbild
  shots/              Prüfaufnahmen                                [erzeugt]

publish/              von publish.bat erzeugt, nicht im Repository [erzeugt]
ki-seminar.pdf        von pdf.bat erzeugt, nicht im Repository     [erst am Ende]
```

Zum Weitergeben genügen `index.html`, `readme.txt` und `assets/`, genau das
kopiert `publish.bat` nach `publish/`. `dev/` ist Arbeitsmaterial und bleibt
zurück.

---

## Die Werkzeuge liegen im Skill

Anders als beim Quellprojekt gibt es hier **kein** `dev/build/`. Prüfstand,
PDF-Ausgabe und Bildaufbereitung kommen aus dem Skill `create-slides` und finden
dieses Projekt über `deck.config.json`:

```bash
SK=~/.claude/skills/create-slides/scripts

node "$SK/layout-audit.mjs"            # Folien fotografieren und Layout prüfen
node "$SK/abnahme.mjs"                 # Layout + Referent + Kaltstart
node "$SK/kontaktbogen.mjs" dev/shots  # ein Blatt zum Draufschauen
node "$SK/deck-pdf.mjs"                # ki-seminar.pdf, erst ganz am Ende
node "$SK/gliederung.mjs" --md README.md  # Folientabelle unten erzeugen
node "$SK/achsen-rechnen.mjs" achse.json  # maßstäbliche Zeitachse rechnen
node "$SK/bilder-aufbereiten.mjs" <bild> --out assets/img --breite <px> --weich
```

**Das PDF entsteht erst zum Schluss**, wenn das Deck inhaltlich fertig ist. Solange sich
Folien ändern, ist jedes erzeugte PDF sofort veraltet, und ein veraltetes PDF neben einem
aktuellen Deck ist schlimmer als gar keins.

Einmalig muss der Skill eingerichtet sein (`cd ~/.claude/skills/create-slides/scripts && npm install`).
Die `.bat`-Dateien im Projektstamm prüfen das vorab und sagen es im Klartext.

**Rückgabewert 0 ist das Abnahmekriterium**, nicht die Textausgabe. Nicht mit
`| tail` kombinieren, dann liest `$?` das letzte Pipeglied.

Das kostet ein Stück Autarkie: auf einer frischen Maschine braucht dieses
Projekt den Skill. Dafür gibt es kein zweites, langsam abdriftendes Werkzeugset
und kein `node_modules/` im Repository.

---

## Die Folien

Der folgende Abschnitt ist **erzeugt und wird nicht von Hand gepflegt**. Eine
handgeschriebene Foliengliederung weicht ab der zweiten Änderung ab, und dann
ist sie schlimmer als keine, weil man sich darauf verlässt. Nach jeder
Folienänderung neu erzeugen:

```bash
node ~/.claude/skills/create-slides/scripts/gliederung.mjs --md README.md
```

<!-- GLIEDERUNG:START -->

| Nr | Titel                                       | Abschnitt | Stufen | Material    | Notiz |
|---|---------------------------------------------|-----------|---|-------------|---|
|  1 | KI bei orangedental                         | —         | — | —           | 438 Z. |
|  2 | Von den Anfängen bis ChatGPT                | 1         | — | —           | 437 Z. |
|  3 | KI ist älter als die meisten denken         | 1         | 8 | —           | 4214 Z. |
|  4 | Vom Rechnen zum Lernen                      | 1         | 6 | —           | 3176 Z. |
|  5 | KI wird erwachsen                           | 1         | 5 | —           | 2959 Z. |
|  6 | KI für alle - ChatGPT                       | 1         | 4 | chatgpt.svg | 2185 Z. |
|  7 | Was ist KI heute?                           | 2         | — | —           | 672 Z. |
|  8 | KI ist nicht eine Sache                     | 2         | 5 | —           | 1609 Z. |
|  9 | Was unterscheidet KI von normaler Software? | 2         | 4 | —           | 1704 Z. |
| 10 | Was sie kann und was nicht                  | 2         | 4 | —           | 3746 Z. |
| 11 | KI im Alltag                                | 2         | 6 | —           | 2266 Z. |
| 12 | Wie KI funktioniert                         | 3         | — | —           | 507 Z. |
| 13 | Vom Training zum Einsatz                    | 3         | 5 | —           | 3223 Z. |
| 14 | Sie schätzt das nächste Stück               | 3         | 4 | —           | 3298 Z. |
| 15 | Warum sie erfindet                          | 3         | 5 | —           | 2255 Z. |
| 16 | Was sie braucht und was sie behält          | 3         | 3 | —           | 2351 Z. |
| 17 | KI-Agenten                                  | 4         | — | —           | 630 Z. |
| 18 | Was ein Agent anders macht                  | 4         | 5 | —           | 1891 Z. |
| 19 | Wer das heute anbietet                      | 4         | 4 | —           | 1548 Z. |
| 20 | Was Agenten schaffen                        | 4         | 4 | —           | 1808 Z. |
| 21 | Wo Agenten versagen                         | 4         | 5 | —           | 2112 Z. |
| 22 | KI bei orangedental                         | 5         | — | —           | 417 Z. |
| 23 | Fragen ist noch nicht Arbeiten              | 5         | 4 | —           | 1151 Z. |
| 24 | Der Posteingang                             | 5         | 5 | —           | 1307 Z. |
| 25 | Support und Wissen                          | 5         | 5 | —           | 1631 Z. |
| 26 | Was sich an der byzz app geändert hat       | 5         | 5 | —           | 947 Z. |
| 27 | Was als Nächstes kommen könnte              | 5         | 3 | —           | 875 Z. |
| 28 | Wie der Einstieg gelingen kann              | 5         | 3 | —           | 1770 Z. |

Folien: **28** · mehrstufig: **22** · mit Material: **1** · mit Sprechnotiz: **28**

Automatisch erzeugt aus der Zieldatei von `gliederung.mjs`. Nicht von Hand ändern.

<!-- GLIEDERUNG:END -->

---

## Folien ändern

**Folientexte stehen direkt in `index.html`**, jede Folie in einer eigenen
`<section class="slide">`, die Sprechnotizen darin in `<template class="notes">`.
Für eine Textkorrektur braucht es kein Werkzeug.

`index.html` ist dabei die einzige Quelle, es gibt keine Teildateien und keinen
Montageschritt, der Handarbeit überschreiben könnte.

Folien-Attribute:

| Attribut | Wirkung |
|---|---|
| `data-title` | Titel in Übersicht und Referentenansicht |
| `data-section="1..5"` | erzeugt die Kopfzeile aus `SECTIONS` in `deck.js` |
| `data-bare` | unterdrückt Kopfzeile **und** Zähler (Titel, Trenner) |
| `data-divider` | Abschnittstrenner: Aurora breiter, Lichtzeichen kräftiger |
| `data-fragments="4"` | mehrstufige Folie, **Anzahl der Zustände** |
| `data-anim` | Gruppe für den gestaffelten Eintritt, 3–6 pro Folie |
| `data-frag="1"` | Element erscheint ab Zustand 1 |
| `<template class="notes">` | Sprechnotizen, nur im Referentenfenster |

Die harten Regeln stehen in [`CLAUDE.md`](CLAUDE.md). Die wichtigste für den
Alltag: `data-fragments` zählt **Zustände**, nicht Einblendungen. Drei Punkte
ergeben `data-fragments="4"`, weil Zustand 0 die Folie ohne jeden Punkt ist.

---

## Veröffentlichen

`.github/workflows/pages.yml` läuft bei jedem Push nach `main` und stellt das
Repository online. Mehr als committen und pushen ist es nicht.

**Einmalig einzurichten:** `Settings → Pages → Source` auf **„GitHub Actions"**.
Steht dort „Deploy from a branch", wird der Workflow kommentarlos ignoriert und
GitHub lässt seinen eingebauten Jekyll-Lauf weiterlaufen.

**Der Workflow packt mit `path: .` das gesamte Repository**, auch `dev/` und
die Markdown-Dateien. Wer etwas ablegt, das nicht nach außen soll, nimmt es in
die `.gitignore` auf oder stellt das Repository privat. Das ist vor dem ersten
Push zu entscheiden, nicht danach.

Online geht es aus diesem Repository heraus, **nie aus `publish/`**, ein Push
von dort würde `dev/` im Repository löschen.

**Groß- und Kleinschreibung:** Windows unterscheidet sie nicht, GitHub Pages
schon. Nach neuen Bildern einmal abgleichen.

---

## Abnahme

Die maßgebliche Abnahme ist der **Doppelklick auf `index.html`**. Niemals über
einen Dev-Server prüfen: über `http://` funktioniert genau das, was unter
`file://` scheitert, und der Fehler fällt erst im Seminar auf.

Von Hand, dafür gibt es kein Werkzeug:

- den Kontaktbogen ansehen. Ob eine Folie gut ist, sieht man nur
- das Fenster auf 16:10, 4:3 und Hochformat ziehen: deckt der Hintergrund
  restlos, passt der Rahmen vollständig hinein?
- `P` drücken und prüfen, dass die Notizen im Hauptfenster **nirgends** stehen
- eine mehrstufige Folie vorwärts und rückwärts durchklicken
