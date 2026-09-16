@echo off
setlocal

rem  Erzeugt unter publish\ eine Fassung des Decks ohne dev\ und ohne
rem  Werkzeuge - zum Weitergeben als Ordner oder auf einem USB-Stick.
rem
rem  Das ist NICHT der Weg ins Netz. Veroeffentlicht wird direkt aus diesem
rem  Repository heraus ueber .github\workflows\pages.yml. Aus publish\ heraus
rem  zu pushen wuerde dev\ im Repository loeschen.
rem
rem  Kopiert wird nach der Positivliste "handover" aus deck.config.json:
rem  index.html, assets, readme.txt - dazu das PDF, falls es schon erzeugt ist.
rem
rem  robocopy /MIR laeuft bewusst nur auf assets\, nie auf publish\ selbst:
rem  sonst wuerde ein dort angelegtes .git mitgeloescht.

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
echo   %ANZAHL% Datei^(en^). Der Ordner laeuft per Doppelklick auf index.html.
goto :ende

:fehler_kopie
echo.
echo   Beim Kopieren ist etwas schiefgegangen. Ist publish\ in einem
echo   anderen Programm geoeffnet?
goto :ende

:fehlt_index
echo.
echo   index.html fehlt neben dieser Datei.
goto :ende

:fehlt_readme
echo.
echo   readme.txt fehlt. Sie ist die Bedienungsanleitung und gehoert mit
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
