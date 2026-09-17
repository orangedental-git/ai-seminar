# KI bei orangedental

Fullscreen-Präsentation für ein internes Seminar, 15–20 Minuten, rund 50
Teilnehmende. HTML, läuft offline.

**Vorführen:** `index.html` doppelklicken. Bedienung steht in [`readme.txt`](readme.txt).

> **Stand: Abschnitt 01 steht.** Der geschichtliche Rückblick ist gebaut und
> belegt, fünf inhaltliche Folien. Die Abschnitte 02 und 03 kommen noch.

---

## Was das ist

Ein eigenständiges Präsentations-Deck, das per Doppelklick startet, ohne Server,
ohne Node, ohne Internet. Der Ordner lässt sich als Ganzes weitergeben oder auf
einen USB-Stick kopieren.

| | |
|---|---|
| Folien | 5 inhaltliche, 3 Referenzfolien als Muster; drei Abschnitte vorgesehen |
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
node "$SK/gliederung.mjs"              # Folientabelle für die Doku
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
| `data-section="1..3"` | erzeugt die Kopfzeile aus `SECTIONS` in `deck.js` |
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
