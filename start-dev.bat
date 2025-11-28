@echo off
echo ========================================
echo Проверка окружения для Next.js
echo ========================================
echo.

echo Проверка Node.js:
node -v
if errorlevel 1 (
    echo ОШИБКА: Node.js не установлен!
    echo Установите Node.js с https://nodejs.org/
    pause
    exit /b 1
)
echo.

echo Проверка npm:
npm -v
if errorlevel 1 (
    echo ОШИБКА: npm не установлен!
    pause
    exit /b 1
)
echo.

echo Проверка зависимостей:
if not exist "node_modules" (
    echo node_modules не найден. Устанавливаю зависимости...
    npm install
    if errorlevel 1 (
        echo ОШИБКА: Не удалось установить зависимости!
        pause
        exit /b 1
    )
)
echo.

echo Проверка порта 3000:
netstat -ano | findstr :3000 >nul
if errorlevel 0 (
    echo ВНИМАНИЕ: Порт 3000 занят!
    echo Закройте процесс, использующий порт 3000
    echo.
) else (
    echo Порт 3000 свободен
    echo.
)

echo ========================================
echo Запуск сервера разработки...
echo ========================================
echo.
npm run dev

