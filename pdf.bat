@echo off
chcp 65001 >nul
rem  Die Zeile darüber stellt die Konsole auf UTF-8 und ist bewusst die
rem  erste nach @echo off: cmd.exe liest die Datei mit der gerade gültigen
rem  Codepage, alles davor muss deshalb reines ASCII bleiben. Ab hier sind
rem  Umlaute erlaubt und werden korrekt angezeigt.
setlocal

rem  Erzeugt die statische Fassung des Decks als PDF.
rem
rem  Nicht direkt gedruckt, sondern erst fotografiert: Chrome lässt im
rem  Druckpfad backdrop-filter weg, rechnet Blur anders und stellt <video>
rem  überhaupt nicht dar. Jede Aufbaustufe wird eine eigene Seite.
rem
rem  Argumente werden durchgereicht:  --klein  halbe Auflösung, viel kleiner
rem                                   --out    anderer Zielpfad

set "SKILL=%USERPROFILE%\.claude\skills\create-slides\scripts"

if not exist "%~dp0index.html"       goto :fehlt_index
if not exist "%~dp0deck.config.json" goto :fehlt_config
where node >nul 2>nul
if errorlevel 1                      goto :kein_node
if not exist "%SKILL%\deck-pdf.mjs"  goto :kein_skill
if not exist "%SKILL%\node_modules"  goto :keine_pakete

echo.
echo   Das dauert einige Minuten. Chrome öffnet und schließt sich dabei.
echo.

node "%SKILL%\deck-pdf.mjs" --config "%~dp0deck.config.json" %*
if errorlevel 1 goto :fehler_lauf

if not "%~1"=="" goto :fertig_mit_argument
echo.
echo   Fertig:  %~dp0ki-seminar.pdf
goto :ende

:fertig_mit_argument
echo.
echo   Fertig. Der Zielpfad steht oben in der Zeile "PDF -^>".
goto :ende

:fehler_lauf
echo.
echo   Der Lauf ist fehlgeschlagen. Die Meldung steht oben.
goto :ende

:fehlt_index
echo.
echo   index.html fehlt neben dieser Datei.
goto :ende

:fehlt_config
echo.
echo   deck.config.json fehlt neben dieser Datei.
goto :ende

:kein_node
echo.
echo   node ist nicht im Suchpfad. Node.js installieren, dann neu versuchen.
goto :ende

:kein_skill
echo.
echo   Der Skill create-slides liegt nicht am erwarteten Ort:
echo     %SKILL%
goto :ende

:keine_pakete
echo.
echo   Der Skill create-slides ist nicht eingerichtet. Einmalig:
echo.
echo     cd /d "%SKILL%"
echo     npm install
goto :ende

:ende
echo.
pause
endlocal
