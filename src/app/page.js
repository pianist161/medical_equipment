import dynamic from "next/dynamic";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Hero from "@/components/sections/hero/Hero";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

// Lazy load components below the fold
const Features = dynamic(() => import("@/components/sections/features/Features"), {
	loading: () => <div style={{ minHeight: "200px" }} />,
});
const Brands1 = dynamic(() => import("@/components/sections/brands/Brands1"), {
	loading: () => <div style={{ minHeight: "200px" }} />,
});
const About1 = dynamic(() => import("@/components/sections/about/About1"), {
	loading: () => <div style={{ minHeight: "200px" }} />,
});
const Services1 = dynamic(() => import("@/components/sections/services/Services1"), {
	loading: () => <div style={{ minHeight: "200px" }} />,
});
const Contact2 = dynamic(() => import("@/components/sections/contacts/Contact2"), {
	loading: () => <div style={{ minHeight: "200px" }} />,
});
const Cta = dynamic(() => import("@/components/sections/cta/Cta"), {
	loading: () => <div style={{ minHeight: "200px" }} />,
});

export default function Home() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<Hero />
						<Features />
						<Brands1 />
						<About1 />
						<Services1 />
						<Contact2 />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
