@echo off
setlocal

rem  Abnahme des Decks: Layout, Referentenansicht, Kaltstart.
rem
rem  Die Werkzeuge liegen NICHT in diesem Projekt, sondern im Skill
rem  create-slides. Deshalb wird hier zuerst geprueft, ob der Skill ueberhaupt
rem  eingerichtet ist - sonst bricht node mit einer Meldung ab, die niemand
rem  einordnen kann.
rem
rem  Basis ist %~dp0, das Verzeichnis DIESER Datei. Nie das Arbeitsverzeichnis:
rem  bei einem Doppelklick steht das woanders.

set "SKILL=%USERPROFILE%\.claude\skills\create-slides\scripts"

if not exist "%~dp0index.html"       goto :fehlt_index
if not exist "%~dp0deck.config.json" goto :fehlt_config
where node >nul 2>nul
if errorlevel 1                      goto :kein_node
if not exist "%SKILL%\abnahme.mjs"   goto :kein_skill
if not exist "%SKILL%\node_modules"  goto :keine_pakete

echo.
echo   Abnahme laeuft. Chrome oeffnet und schliesst sich dabei mehrfach.
echo.

node "%SKILL%\abnahme.mjs" --config "%~dp0deck.config.json" %*
if errorlevel 1 goto :befunde

echo.
echo   Alles bestanden.
echo.
echo   Von Hand fehlt noch - dafuer gibt es kein Werkzeug:
echo     - den Kontaktbogen ansehen  ^(dev\shots^)
echo     - das Fenster auf 16:10, 4:3 und Hochformat ziehen
echo     - einmal wirklich index.html doppelklicken
goto :ende

:befunde
echo.
echo   Es gibt Befunde. Sie stehen oben, mit Folie und Element.
echo   Rueckgabewert ungleich 0 - das ist das Abnahmekriterium, nicht der Text.
goto :ende

:fehlt_index
echo.
echo   index.html fehlt neben dieser Datei.
goto :ende

:fehlt_config
echo.
echo   deck.config.json fehlt neben dieser Datei.
echo   Ohne sie findet kein Werkzeug das Projekt.
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
