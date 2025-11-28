Write-Host "=== Проверка окружения ===" -ForegroundColor Cyan
Write-Host ""

# Проверка Node.js
Write-Host "1. Проверка Node.js:" -ForegroundColor Yellow
try {
    $nodeVersion = node -v
    Write-Host "   Node.js установлен: $nodeVersion" -ForegroundColor Green
    $majorVersion = [int]($nodeVersion -replace 'v(\d+)\..*', '$1')
    if ($majorVersion -lt 18) {
        Write-Host "   ВНИМАНИЕ: Next.js 15 требует Node.js 18.17 или выше!" -ForegroundColor Red
    }
} catch {
    Write-Host "   Node.js НЕ установлен!" -ForegroundColor Red
}

Write-Host ""

# Проверка npm
Write-Host "2. Проверка npm:" -ForegroundColor Yellow
try {
    $npmVersion = npm -v
    Write-Host "   npm установлен: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "   npm НЕ установлен!" -ForegroundColor Red
}

Write-Host ""

# Проверка node_modules
Write-Host "3. Проверка зависимостей:" -ForegroundColor Yellow
if (Test-Path "node_modules") {
    $nextExists = Test-Path "node_modules\next"
    if ($nextExists) {
        Write-Host "   node_modules существует" -ForegroundColor Green
    } else {
        Write-Host "   node_modules существует, но Next.js не найден!" -ForegroundColor Red
        Write-Host "   Запустите: npm install" -ForegroundColor Yellow
    }
} else {
    Write-Host "   node_modules НЕ найден!" -ForegroundColor Red
    Write-Host "   Запустите: npm install" -ForegroundColor Yellow
}

Write-Host ""

# Проверка порта 3000
Write-Host "4. Проверка порта 3000:" -ForegroundColor Yellow
$port3000 = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($port3000) {
    Write-Host "   Порт 3000 ЗАНЯТ!" -ForegroundColor Red
    Write-Host "   Закройте процесс, использующий порт 3000" -ForegroundColor Yellow
} else {
    Write-Host "   Порт 3000 свободен" -ForegroundColor Green
}

Write-Host ""
Write-Host "=== Попытка запуска сервера ===" -ForegroundColor Cyan
Write-Host ""

