/**
 * Скрипт для анализа использования Bootstrap классов в проекте
 * Помогает определить, какие компоненты Bootstrap реально используются
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const srcDir = path.join(__dirname, '../src');
const bootstrapClasses = {
	// Grid system
	container: false,
	'container-fluid': false,
	row: false,
	col: false,
	'col-': false,
	'col-sm-': false,
	'col-md-': false,
	'col-lg-': false,
	'col-xl-': false,
	'col-xxl-': false,
	
	// Utilities
	'g-': false,
	'gx-': false,
	'gy-': false,
	'gap-': false,
	
	// Components
	btn: false,
	'btn-': false,
	card: false,
	modal: false,
	dropdown: false,
	nav: false,
	navbar: false,
	badge: false,
	alert: false,
	'form-control': false,
	'input-group': false,
};

function searchInFiles(dir, filePattern, searchPattern) {
	const results = [];
	
	function walkDir(currentPath) {
		const files = fs.readdirSync(currentPath);
		
		for (const file of files) {
			const filePath = path.join(currentPath, file);
			const stat = fs.statSync(filePath);
			
			if (stat.isDirectory()) {
				walkDir(filePath);
			} else if (file.match(filePattern)) {
				const content = fs.readFileSync(filePath, 'utf8');
				if (content.match(searchPattern)) {
					results.push(filePath);
				}
			}
		}
	}
	
	walkDir(dir);
	return results;
}

console.log('🔍 Анализ использования Bootstrap классов...\n');

// Ищем использование Bootstrap классов
for (const [className, found] of Object.entries(bootstrapClasses)) {
	const pattern = new RegExp(`\\b${className.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g');
	const files = searchInFiles(srcDir, /\.(js|jsx|ts|tsx)$/, pattern);
	
	if (files.length > 0) {
		bootstrapClasses[className] = true;
		console.log(`✅ ${className}: используется в ${files.length} файлах`);
		if (files.length <= 5) {
			files.forEach(file => console.log(`   - ${path.relative(srcDir, file)}`));
		}
	}
}

console.log('\n📊 Итоги:');
const used = Object.entries(bootstrapClasses).filter(([_, found]) => found);
const unused = Object.entries(bootstrapClasses).filter(([_, found]) => !found);

console.log(`\n✅ Используется: ${used.length} классов`);
console.log(`❌ Не используется: ${unused.length} классов`);

if (unused.length > 0) {
	console.log('\nНеиспользуемые классы:');
	unused.forEach(([className]) => console.log(`  - ${className}`));
}

console.log('\n💡 Рекомендации:');
if (used.every(([className]) => className.startsWith('container') || className.startsWith('row') || className.startsWith('col') || className.startsWith('g'))) {
	console.log('✅ Используется только grid система Bootstrap');
	console.log('   → Можно использовать bootstrap-grid.min.css вместо полного bootstrap.min.css');
	console.log('   → Экономия: ~150-200 KB');
} else {
	console.log('⚠️  Используются дополнительные компоненты Bootstrap');
	console.log('   → Рекомендуется проверить возможность замены на кастомные компоненты');
}

