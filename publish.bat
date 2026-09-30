@echo off
chcp 65001 >nul
rem  Die Zeile darüber stellt die Konsole auf UTF-8 und ist bewusst die
rem  erste nach @echo off: cmd.exe liest die Datei mit der gerade gültigen
rem  Codepage, alles davor muss deshalb reines ASCII bleiben. Ab hier sind
rem  Umlaute erlaubt und werden korrekt angezeigt.
setlocal

rem  Erzeugt unter publish\ eine Fassung des Decks ohne dev\ und ohne
rem  Werkzeuge - zum Weitergeben als Ordner oder auf einem USB-Stick.
rem
rem  Das ist NICHT der Weg ins Netz. Veröffentlicht wird direkt aus diesem
rem  Repository heraus ueber .github\workflows\pages.yml. Aus publish\ heraus
rem  zu pushen würde dev\ im Repository löschen.
rem
rem  Kopiert wird nach der Positivliste "handover" aus deck.config.json:
rem  index.html, assets, readme.txt - dazu das PDF, falls es schon erzeugt ist.
rem
rem  robocopy /MIR läuft bewusst nur auf assets\, nie auf publish\ selbst:
rem  sonst würde ein dort angelegtes .git mitgelöscht.

set "SOURCE=%~dp0"
set "TARGET=%~dp0publish"

if not exist "%SOURCE%index.html" goto :missing_index
if not exist "%SOURCE%readme.txt" goto :missing_readme
if not exist "%SOURCE%assets"     goto :missing_assets

if not exist "%TARGET%" mkdir "%TARGET%"

robocopy "%SOURCE%assets" "%TARGET%\assets" /MIR /NFL /NDL /NJH /NJS /NP >nul
if errorlevel 8 goto :copy_failed

copy /Y "%SOURCE%index.html" "%TARGET%\index.html" >nul
if errorlevel 1 goto :copy_failed
copy /Y "%SOURCE%readme.txt" "%TARGET%\readme.txt" >nul
if errorlevel 1 goto :copy_failed

if exist "%SOURCE%ki-seminar.pdf" copy /Y "%SOURCE%ki-seminar.pdf" "%TARGET%\ki-seminar.pdf" >nul

for /f %%N in ('dir /s /b /a-d "%TARGET%" 2^>nul ^| find /c /v ""') do set "COUNT=%%N"

echo.
echo   Done:  %TARGET%
echo   %COUNT% file^(s^). The folder runs by double-clicking index.html.
goto :end

:copy_failed
echo.
echo   Something went wrong while copying. Is publish\ open in
echo   another program?
goto :end

:missing_index
echo.
echo   index.html is missing next to this file.
goto :end

:missing_readme
echo.
echo   readme.txt is missing. It is the operating manual and belongs
echo   in the handover folder.
goto :end

:missing_assets
echo.
echo   The assets\ directory is missing.
goto :end

:end
echo.
pause
endlocal
