const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Путь к папке с изображениями
const imagesDir = path.join(__dirname, 'public', 'images');

// Функция для рекурсивного поиска всех изображений
function findImages(dir, extensions = ['.jpg', '.jpeg', '.png']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Пропускаем node_modules и другие служебные папки
      if (!file.startsWith('.') && file !== 'node_modules') {
        results = results.concat(findImages(filePath, extensions));
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Функция для конвертации изображения в WebP
async function convertToWebP(inputPath) {
  try {
    const ext = path.extname(inputPath).toLowerCase();
    const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    // Пропускаем, если WebP уже существует
    if (fs.existsSync(outputPath)) {
      console.log(`⏭️  Пропущено (WebP уже существует): ${path.relative(imagesDir, inputPath)}`);
      return;
    }
    
    // Конвертируем в WebP с оптимизацией
    await sharp(inputPath)
      .webp({ 
        quality: 85,
        effort: 6 
      })
      .toFile(outputPath);
    
    const inputSize = fs.statSync(inputPath).size;
    const outputSize = fs.statSync(outputPath).size;
    const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);
    
    console.log(`✅ Конвертировано: ${path.relative(imagesDir, inputPath)} → ${path.relative(imagesDir, outputPath)} (экономия: ${savings}%)`);
    
    return { inputPath, outputPath, savings };
  } catch (error) {
    console.error(`❌ Ошибка при конвертации ${inputPath}:`, error.message);
    return null;
  }
}

// Основная функция
async function main() {
  console.log('🔄 Начинаю конвертацию изображений в WebP...\n');
  
  const images = findImages(imagesDir);
  console.log(`📁 Найдено ${images.length} изображений для конвертации\n`);
  
  if (images.length === 0) {
    console.log('✅ Все изображения уже в формате WebP!');
    return;
  }
  
  const results = [];
  for (const image of images) {
    const result = await convertToWebP(image);
    if (result) {
      results.push(result);
    }
  }
  
  console.log(`\n✨ Конвертация завершена! Обработано: ${results.length} изображений`);
  
  // Обновляем пути в коде (опционально)
  console.log('\n📝 Не забудьте обновить пути в коде с .jpg/.png на .webp');
}

main().catch(console.error);

