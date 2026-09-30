@echo off
chcp 65001 >nul
rem  Die Zeile darüber stellt die Konsole auf UTF-8 und ist bewusst die
rem  erste nach @echo off: cmd.exe liest die Datei mit der gerade gültigen
rem  Codepage, alles davor muss deshalb reines ASCII bleiben. Ab hier sind
rem  Umlaute erlaubt und werden korrekt angezeigt.
setlocal

rem  Abnahme des Decks: Layout, Referentenansicht, Kaltstart.
rem
rem  Die Werkzeuge liegen NICHT in diesem Projekt, sondern im Skill
rem  create-slides. Deshalb wird hier zuerst geprüft, ob der Skill überhaupt
rem  eingerichtet ist - sonst bricht node mit einer Meldung ab, die niemand
rem  einordnen kann.
rem
rem  Basis ist %~dp0, das Verzeichnis DIESER Datei. Nie das Arbeitsverzeichnis:
rem  bei einem Doppelklick steht das woanders.

set "SKILL=%USERPROFILE%\.claude\skills\create-slides\scripts"

if not exist "%~dp0index.html"         goto :missing_index
if not exist "%~dp0deck.config.json"   goto :missing_config
where node >nul 2>nul
if errorlevel 1                        goto :no_node
if not exist "%SKILL%\acceptance.mjs"  goto :no_skill
if not exist "%SKILL%\node_modules"    goto :no_packages

echo.
echo   Acceptance run in progress. Chrome opens and closes several times.
echo.

node "%SKILL%\acceptance.mjs" --config "%~dp0deck.config.json" %*
if errorlevel 1 goto :findings

echo.
echo   Everything passed.
echo.
echo   Still to do by hand - there is no tool for this:
echo     - look at the contact sheet  ^(dev\shots^)
echo     - resize the window to 16:10, 4:3 and portrait
echo     - actually double-click index.html once
goto :end

:findings
echo.
echo   There are findings. They are listed above, with slide and element.
echo   Exit code not 0 - that is the acceptance criterion, not the text.
goto :end

:missing_index
echo.
echo   index.html is missing next to this file.
goto :end

:missing_config
echo.
echo   deck.config.json is missing next to this file.
echo   Without it no tool can find the project.
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
