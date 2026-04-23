# React Learning Platform - Quick Start Script (PowerShell)

Write-Host ""
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║     🚀 React Visual Learning Platform - Quick Start         ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Check if node is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Found Node.js: $nodeVersion" -ForegroundColor Green
}
catch {
    Write-Host "❌ Node.js is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Node.js from: https://nodejs.org"
    Read-Host "Press Enter to exit"
    exit 1
}

# Check if npm is installed
try {
    $npmVersion = npm --version
    Write-Host "✅ Found npm: $npmVersion" -ForegroundColor Green
}
catch {
    Write-Host "❌ npm is not installed!" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    Write-Host "   This may take a few minutes on first run."
    Write-Host ""
    npm install
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
        Write-Host ""
        Write-Host "Try running manually:" -ForegroundColor Yellow
        Write-Host "   npm install"
        Read-Host "Press Enter to exit"
        exit 1
    }
    Write-Host ""
    Write-Host "✅ Dependencies installed successfully!" -ForegroundColor Green
    Write-Host ""
}
else {
    Write-Host "✅ Dependencies already installed" -ForegroundColor Green
    Write-Host ""
}

# Start development server
Write-Host "🚀 Starting development server..." -ForegroundColor Cyan
Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════════"
Write-Host ""

npm run dev

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "═══════════════════════════════════════════════════════════════"
    Write-Host ""
    Write-Host "⚠️  The development server encountered an error." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Try these solutions:" -ForegroundColor Yellow
    Write-Host "   1. Run this script as Administrator"
    Write-Host "   2. Close any other applications using port 5173"
    Write-Host "   3. Run manually: npm run dev"
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

Read-Host "Press Enter to exit"
