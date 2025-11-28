module.exports = {
	plugins: {
		'@fullhuman/postcss-purgecss': process.env.NODE_ENV === 'production' ? {
			content: [
				'./src/**/*.{js,jsx,ts,tsx}',
				'./src/**/*.html',
				'./public/**/*.html',
			],
			defaultExtractor: content => {
				// Извлекаем классы из JSX/TSX
				const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
				const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
				return broadMatches.concat(innerMatches);
			},
			safelist: {
				// Сохраняем классы, которые могут быть добавлены динамически
				standard: [
					/^(swiper|swiper-)/,
					/^(odometer|odometer-)/,
					/^(glightbox|glightbox-)/,
					/^(wow|animate)/,
					/^(nice-select|nice-)/,
					/^(tj-|h[0-9]-)/,
					/^(fa|fas|far|fal|fad|fab)/,
					/^(slick-)/,
					/^(modal|fade|show|active|open)/,
					/^(collapsed|collapse)/,
					// Bootstrap grid классы
					/^(container|container-)/,
					/^(row|row-)/,
					/^(col|col-)/,
					/^(g-|gx-|gy-)/,
					/^(gap-|row-gap-|col-gap-)/,
				],
				deep: [
					/^swiper/,
					/^odometer/,
					/^glightbox/,
					/^wow/,
					/^nice-select/,
					/^tj-/,
					/^h[0-9]-/,
					/^container/,
					/^row/,
					/^col/,
				],
				greedy: [
					/^swiper/,
					/^odometer/,
					/^glightbox/,
					/^wow/,
					/^nice-select/,
					/^tj-/,
					/^h[0-9]-/,
					/^container/,
					/^row/,
					/^col/,
				],
			},
			// Исключаем файлы, которые не нужно обрабатывать
			rejected: true,
			printRejected: false,
		} : false,
	},
};

