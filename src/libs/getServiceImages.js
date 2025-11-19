/**
 * Генерирует пути к изображениям сервиса на основе его ID
 * Структура: /images/service/service-{id}/{imageNumber}.{ext}
 * 
 * @param {number} serviceId - ID сервиса
 * @param {number} imageNumber - Номер изображения (1, 2, 3, 4...)
 * @param {string} extension - Расширение файла (png, webp, jpg)
 * @returns {string} Путь к изображению
 */
export const getServiceImage = (serviceId, imageNumber = 1, extension = 'png') => {
	if (!serviceId) {
		return `/images/service/service-1.webp`; // fallback
	}
	
	// Поддержка текущей структуры для сервиса ID 1 (папка serivce-1 с файлами "1 (1).png")
	if (serviceId === 1) {
		return `/images/service/serivce-1/1 (${imageNumber}).${extension}`;
	}
	
	// Стандартная структура для остальных сервисов: service-{id}/{номер}.{ext}
	return `/images/service/service-${serviceId}/${imageNumber}.${extension}`;
};

/**
 * Получает массив путей к изображениям сервиса
 * 
 * @param {number} serviceId - ID сервиса
 * @param {number} count - Количество изображений (по умолчанию проверяет до 10)
 * @param {string} extension - Расширение файла
 * @returns {string[]} Массив путей к изображениям
 */
export const getServiceImages = (serviceId, count = 10, extension = 'png') => {
	if (!serviceId) {
		return [];
	}
	return Array.from({ length: count }, (_, i) => 
		getServiceImage(serviceId, i + 1, extension)
	);
};

/**
 * Получает все доступные изображения сервиса (начиная со 2-го, так как 1-е - это главное)
 * Проверяет наличие изображений до максимального количества
 * 
 * @param {number} serviceId - ID сервиса
 * @param {number} maxCount - Максимальное количество изображений для проверки
 * @param {string} extension - Расширение файла
 * @returns {Promise<string[]>} Promise с массивом путей к существующим изображениям
 */
export const getAvailableServiceImages = async (serviceId, maxCount = 10, extension = 'png') => {
	if (!serviceId) {
		return [];
	}
	
	const availableImages = [];
	
	// Проверяем изображения начиная со 2-го (первое - главное)
	for (let i = 2; i <= maxCount; i++) {
		const imagePath = getServiceImage(serviceId, i, extension);
		try {
			// Пытаемся загрузить изображение
			const response = await fetch(imagePath, { method: 'HEAD' });
			if (response.ok) {
				availableImages.push(imagePath);
			} else {
				// Если изображение не найдено, прекращаем проверку
				break;
			}
		} catch (error) {
			// Если ошибка, прекращаем проверку
			break;
		}
	}
	
	return availableImages;
};

/**
 * Получает основное изображение сервиса (с fallback)
 * 
 * @param {number} serviceId - ID сервиса
 * @param {string} fallback - Путь к изображению по умолчанию
 * @returns {string} Путь к изображению
 */
export const getServiceMainImage = (serviceId, fallback = '/images/service/service-details.webp') => {
	if (!serviceId) {
		return fallback;
	}
	// getServiceImage уже обрабатывает все случаи, включая сервис 1
	return getServiceImage(serviceId, 1, 'png');
};

export default getServiceImage;

