# Prüfen nach einer Änderung, ausführlich

Die Befehle stehen in `CLAUDE.md` unter „Nach jeder Änderung". Hier stehen die
Gründe und die Fallen dazu. Lesen, bevor ein Prüflauf als bestanden gilt oder
ein Skript eine Textdatei verändert.

## Die Kodierungsprobe ist nicht überflüssig

`perl -pe` mit `\x{e4}` im Ersatztext schreibt ein einzelnes Latin-1-Byte statt
der zwei UTF-8-Bytes, und `-CSD` hilft nur halb: Es betrifft die Ströme, nicht
den Ausdruck, ein Suchmuster mit Umlaut greift dann stillschweigend gar nicht
mehr. **Kein Prüflauf meldet das**, und `file` behauptet weiterhin „UTF-8
text". Folgefalle: Steckt ein solches Byte erst in der Datei, bricht `sed` bei
`.*` an dieser Stelle ab und ersetzt die Zeile nur halb — Reparatur dann nur
mit `LC_ALL=C sed`. Für Text mit Umlauten deshalb `sed` nehmen oder gleich das
Edit-Werkzeug, `perl -pe` nur für reine ASCII-Muster.

## Ist eine Folie dazugekommen oder weggefallen

```bash
node "$SK/outline.mjs" --md README.md
```

Der Abschnitt „Die Folien" in `README.md` steht zwischen zwei Markern und wird
erzeugt, nicht gepflegt. Und danach **die Folienverweise in der Doku prüfen**:
Sie tragen Nummer und Titel zusammen („Folie 09 (Was unterscheidet KI von
normaler Software?)"), damit ein Verschieben sichtbar wird, statt sich zu
verstecken. Widerspricht ein Titel seiner Nummer, ist die Nummer alt. Das gilt
auch für die Dateien unter `dev/claude/`.

## Das PDF erst ganz zum Schluss

Das PDF wird erst erzeugt, wenn das Deck inhaltlich fertig ist. Nicht
zwischendurch, auch nicht „nur zur Kontrolle". Solange sich Folien ändern, ist
jedes erzeugte PDF sofort veraltet, und ein veraltetes PDF neben einem
aktuellen Deck ist schlimmer als gar keins. `pdf.bat` und
`node "$SK/deck-pdf.mjs"` laufen also erst am Ende.

## Rückgabewert und Folienzahl

**Rückgabewert 0 ist das Abnahmekriterium, nicht die Textausgabe.** Vorsicht bei
`| tail`, dann liest `$?` das letzte Pipeglied und meldet immer Erfolg.

**Die Zeile „Slides in deck" gegenlesen.** Kein Prüflauf meldet, dass Folien
*fehlen*: ein kürzeres Deck ist ein gültiges Deck, und alle Tests bleiben grün.
In diesem Projekt sind so schon einmal zwei Folien verschwunden, zurückgeholt
aus `git show HEAD:index.html`.

## Aufnahmen sind nicht immer frisch

**`acceptance.mjs` erzeugt keine Aufnahmen**, es startet die Layoutprüfung mit
`--no-images`. Wer danach ein Bild ansieht, begutachtet einen alten Stand.
Für frische Bilder `layout-audit.mjs` einzeln laufen lassen und **vor jeder
Sichtprüfung den Zeitstempel ansehen**:
`ls -l --time-style=+%H:%M:%S dev/shots`.

## Von Hand

Nicht automatisierbar und deshalb von Hand: den Kontaktbogen ansehen, das
Fenster auf andere Seitenverhältnisse ziehen, **einmal wirklich `index.html`
doppelklicken**. Niemals über einen Dev-Server abnehmen, denn über `http://`
funktioniert genau das, was unter `file://` scheitert.

Wer an Bewegung etwas ändert, klickt zusätzlich die Folien 06, 09 und 11 vor
und zurück, siehe `dev/claude/animationen.md`.

## Nach einem Port oder größeren Umbau

```bash
grep -rn "BYZZ" assets/            # muss leer sein
grep -rn 'type="module"' .         # muss leer sein
```
