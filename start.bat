@echo off
REM React Learning Platform - Quick Start Script

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║     🚀 React Visual Learning Platform - Quick Start         ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

REM Check if node is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed!
    echo.
    echo Please install Node.js from: https://nodejs.org
    pause
    exit /b 1
)

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm is not installed!
    echo.
    echo Please install npm from: https://nodejs.org
    pause
    exit /b 1
)

REM Display Node and npm versions
echo ✅ Found Node.js and npm
echo.
for /f "tokens=*" %%A in ('node --version') do echo   Node version: %%A
for /f "tokens=*" %%A in ('npm --version') do echo   npm version: %%A
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo 📦 Installing dependencies...
    echo   This may take a few minutes on first run.
    echo.
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo.
        echo ❌ Failed to install dependencies
        echo.
        echo Try running manually:
        echo   npm install
        pause
        exit /b 1
    )
    echo.
    echo ✅ Dependencies installed successfully!
    echo.
) else (
    echo ✅ Dependencies already installed
    echo.
)

REM Start development server
echo 🚀 Starting development server...
echo.
echo ═══════════════════════════════════════════════════════════════
echo.
call npm run dev

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ═══════════════════════════════════════════════════════════════
    echo.
    echo ⚠️  The development server encountered an error.
    echo.
    echo Try these solutions:
    echo   1. Run this script as Administrator
    echo   2. Close any other applications using port 5173
    echo   3. Run manually: npm run dev
    echo.
    pause
    exit /b 1
)

pause
