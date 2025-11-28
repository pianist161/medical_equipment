import { Mona_Sans } from "next/font/google";
// Критичные CSS - загружаются синхронно
import "./assets/css/bexon-icons.css";
// Используем только grid систему Bootstrap вместо полного фреймворка (экономия ~150-200 KB)
import "bootstrap/dist/css/bootstrap-grid.min.css";
// Swiper CSS для brands загружаем синхронно, чтобы слайдер работал сразу
import "swiper/css";
import "./assets/css/meanmenu.css";
import "./globals.css";

// Некритичные CSS будут загружаться динамически через компоненты:
// - swiper/css/autoplay, swiper/css/pagination → в компонентах со слайдерами (дополнительные модули)
// - animate.min.css → в ClientWrapper после первого рендера
// - glightbox.min.css → в PopupVideo
// - font-awesome-pro.min.css → загружается асинхронно
// - nice-select2.css → в компонентах с селектами
// - odometer-theme-default.css → в компонентах со счетчиками
// - react-range-slider-input/dist/style.css → в компонентах со слайдерами

const monaSans = Mona_Sans({
	variable: "--tj-ff-body",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	display: "swap",
});

export const metadata = {
	title: "Shenprom - Медицинское реабилитационное оборудование",
	description: "Shenprom - Производитель медицинского реабилитационного оборудования для клиник и больниц",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-scroll-behavior="smooth" dir="ltr">
			<body className={`${monaSans.variable}`}>{children}</body>
		</html>
	);
}
