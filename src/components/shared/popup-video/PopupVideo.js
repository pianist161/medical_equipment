"use client";

import { useEffect } from "react";

const PopupVideo = ({ children }) => {
	useEffect(() => {
		// Динамически загружаем glightbox CSS и JS только когда компонент используется
		const loadGlightbox = async () => {
			// Динамически импортируем CSS
			await import("@/app/assets/css/glightbox.min.css");
			
			// Загружаем JS
			const { default: GLightbox } = await import("glightbox");
			const lightbox = GLightbox({
				selector: ".glightbox",
			});
		};
		
		loadGlightbox();
	}, []);
	return children;
};

export default PopupVideo;
