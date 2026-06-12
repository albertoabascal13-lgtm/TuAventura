@echo off
echo ========================================
echo   LEYENDAS - Adventure App Setup
echo ========================================
echo.
echo Instalando dependencias...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: npm install fallo. Asegurate de tener Node.js instalado.
    echo Descarga Node.js en: https://nodejs.org
    pause
    exit /b 1
)
echo.
echo Dependencias instaladas correctamente.
echo.
echo Iniciando servidor de desarrollo...
echo La app estara disponible en: http://localhost:5173
echo.
call npm run dev
pause
