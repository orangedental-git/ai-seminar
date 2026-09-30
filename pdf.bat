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
rem  überhaupt nicht dar. Jede Folie wird eine Seite, im Stand nach dem
rem  letzten Klick.
rem
rem  Argumente werden durchgereicht:  --small      halbe Auflösung, viel kleiner
rem                                   --all-steps  eine Seite je Aufbaustufe
rem                                   --out        anderer Zielpfad

set "SKILL=%USERPROFILE%\.claude\skills\create-slides\scripts"

if not exist "%~dp0index.html"       goto :missing_index
if not exist "%~dp0deck.config.json" goto :missing_config
where node >nul 2>nul
if errorlevel 1                      goto :no_node
if not exist "%SKILL%\deck-pdf.mjs"  goto :no_skill
if not exist "%SKILL%\node_modules"  goto :no_packages

echo.
echo   This takes a few minutes. Chrome opens and closes along the way.
echo.

node "%SKILL%\deck-pdf.mjs" --config "%~dp0deck.config.json" %*
if errorlevel 1 goto :run_failed

if not "%~1"=="" goto :done_with_args
echo.
echo   Done:  %~dp0ki-seminar.pdf
goto :end

:done_with_args
echo.
echo   Done. The target path is shown above in the line "PDF ->".
goto :end

:run_failed
echo.
echo   The run failed. The message is shown above.
goto :end

:missing_index
echo.
echo   index.html is missing next to this file.
goto :end

:missing_config
echo.
echo   deck.config.json is missing next to this file.
goto :end

:no_node
echo.
echo   node is not on the PATH. Install Node.js, then try again.
goto :end

:no_skill
echo.
echo   The create-slides skill is not in the expected location:
echo     %SKILL%
goto :end

:no_packages
echo.
echo   The create-slides skill is not set up. Run once:
echo.
echo     cd /d "%SKILL%"
echo     npm install
goto :end

:end
echo.
pause
endlocal
