"use client";

import { useEffect } from "react";

/**
 * Компонент для загрузки shop.css только на страницах магазина
 */
const ShopCSS = () => {
	useEffect(() => {
		// Динамически импортируем shop.css только на страницах магазина
		import("@/app/assets/css/shop.css");
	}, []);

	return null;
};

export default ShopCSS;

