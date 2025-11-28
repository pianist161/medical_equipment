import { Mona_Sans } from "next/font/google";
// Critical CSS - loaded immediately
import "./assets/css/bootstrap.min.css";
import "./assets/css/shenprom-icons.css";
import "./globals.css";
// Non-critical CSS - can be loaded asynchronously
import "react-range-slider-input/dist/style.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./assets/css/animate.min.css";
import "./assets/css/font-awesome-pro.min.css";
import "./assets/css/glightbox.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select2.css";
import "./assets/css/odometer-theme-default.css";

const monaSans = Mona_Sans({
	variable: "--tj-ff-body",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	preload: true,
});

export const metadata = {
	title: "Shenprom - Медицинское реабилитационное оборудование",
	description: "Shenprom - Производитель медицинского реабилитационного оборудования",
	icons: {
		icon: "/images/logos/logo 2.png",
		shortcut: "/images/logos/logo 2.png",
		apple: "/images/logos/logo 2.png",
	},
	other: {
		"dns-prefetch": "https://fonts.googleapis.com",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-scroll-behavior="smooth" dir="ltr">
			<body className={`${monaSans.variable}`}>{children}</body>
		</html>
	);
}
