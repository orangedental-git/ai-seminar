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

set "QUELLE=%~dp0"
set "ZIEL=%~dp0publish"

if not exist "%QUELLE%index.html" goto :fehlt_index
if not exist "%QUELLE%readme.txt" goto :fehlt_readme
if not exist "%QUELLE%assets"     goto :fehlt_assets

if not exist "%ZIEL%" mkdir "%ZIEL%"

robocopy "%QUELLE%assets" "%ZIEL%\assets" /MIR /NFL /NDL /NJH /NJS /NP >nul
if errorlevel 8 goto :fehler_kopie

copy /Y "%QUELLE%index.html" "%ZIEL%\index.html" >nul
if errorlevel 1 goto :fehler_kopie
copy /Y "%QUELLE%readme.txt" "%ZIEL%\readme.txt" >nul
if errorlevel 1 goto :fehler_kopie

if exist "%QUELLE%ki-seminar.pdf" copy /Y "%QUELLE%ki-seminar.pdf" "%ZIEL%\ki-seminar.pdf" >nul

for /f %%N in ('dir /s /b /a-d "%ZIEL%" 2^>nul ^| find /c /v ""') do set "ANZAHL=%%N"

echo.
echo   Fertig:  %ZIEL%
echo   %ANZAHL% Datei^(en^). Der Ordner läuft per Doppelklick auf index.html.
goto :ende

:fehler_kopie
echo.
echo   Beim Kopieren ist etwas schiefgegangen. Ist publish\ in einem
echo   anderen Programm geöffnet?
goto :ende

:fehlt_index
echo.
echo   index.html fehlt neben dieser Datei.
goto :ende

:fehlt_readme
echo.
echo   readme.txt fehlt. Sie ist die Bedienungsanleitung und gehört mit
echo   in den Weitergabeordner.
goto :ende

:fehlt_assets
echo.
echo   Das Verzeichnis assets\ fehlt.
goto :ende

:ende
echo.
pause
endlocal
