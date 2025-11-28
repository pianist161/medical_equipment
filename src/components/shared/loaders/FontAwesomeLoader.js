"use client";

import { useEffect } from "react";

/**
 * Компонент для асинхронной загрузки Font Awesome
 * Загружается после первого рендера, чтобы не блокировать критичный путь
 */
const FontAwesomeLoader = () => {
	useEffect(() => {
		// Динамически импортируем Font Awesome CSS после первого рендера
		import("@/app/assets/css/font-awesome-pro.min.css");
	}, []);

	return null;
};

export default FontAwesomeLoader;

