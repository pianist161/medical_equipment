"use client";
import { useEffect } from "react";
import { useGSAP } from "@/libs/gsap.config";
import smoothScrollToTop from "@/libs/smoothScrollToTop";
import tjMagicCursorAnimation from "@/libs/tjMagicCursorAnimation";

// Lazy load animation modules
const loadAnimations = async () => {
	const [
		tjRightSwipeAnimation,
		tjLeftSwipeAnimation,
		titleAnim,
		titleAnim2,
		titleAnim3,
		textReavealAnim,
		tjImageParallex,
		initSmoothScroller,
		sidebarSticky,
		arrangeAnim,
		arrangeAnim2,
		animateInvertText,
		fadeInRightOnScrollAnim,
		onePageNavAnim,
		progressBar,
		tjStackAnimation,
		tjScrollSlider,
	] = await Promise.all([
		import("@/libs/tjRightSwipeAnimation").then(m => m.default),
		import("@/libs/tjLeftSwipeAnimation").then(m => m.default),
		import("@/libs/titleAnim").then(m => m.default),
		import("@/libs/titleAnim2").then(m => m.default),
		import("@/libs/titleAnim3").then(m => m.default),
		import("@/libs/textReavealAnim").then(m => m.default),
		import("@/libs/tjImageParallex").then(m => m.default),
		import("@/libs/initSmoothScroller").then(m => m.default),
		import("@/libs/sidebarSticky").then(m => m.default),
		import("@/libs/arrangeAnim").then(m => m.default),
		import("@/libs/arrangeAnim2").then(m => m.default),
		import("@/libs/animateInvertText").then(m => m.default),
		import("@/libs/fadeInRightOnScrollAnim").then(m => m.default),
		import("@/libs/onePageNavAnim").then(m => m.default),
		import("@/libs/progressBar").then(m => m.default),
		import("@/libs/tjStackAnimation").then(m => m.default),
		import("@/libs/tjScrollSlider").then(m => m.default),
	]);
	
	return {
		tjRightSwipeAnimation,
		tjLeftSwipeAnimation,
		titleAnim,
		titleAnim2,
		titleAnim3,
		textReavealAnim,
		tjImageParallex,
		initSmoothScroller,
		sidebarSticky,
		arrangeAnim,
		arrangeAnim2,
		animateInvertText,
		fadeInRightOnScrollAnim,
		onePageNavAnim,
		progressBar,
		tjStackAnimation,
		tjScrollSlider,
	};
};

const ClientWrapper = () => {
	useEffect(() => {
		// Load WOW.js asynchronously
		import("wow.js").then(({ default: WOW }) => {
			new WOW().init();
		});
		
		smoothScrollToTop();
		const cleanup = tjMagicCursorAnimation();
		return () => {
			if (cleanup) cleanup();
		};
	}, []);
	
	useGSAP(async (context, contextSafe) => {
		// Lazy load animations to reduce initial bundle
		const animations = await loadAnimations();
		
		animations.tjRightSwipeAnimation();
		animations.tjLeftSwipeAnimation();
		animations.titleAnim();
		animations.titleAnim2();
		animations.titleAnim3();
		animations.textReavealAnim();
		animations.tjImageParallex();
		animations.initSmoothScroller();
		animations.sidebarSticky();
		animations.arrangeAnim();
		animations.arrangeAnim2();
		animations.animateInvertText();
		animations.fadeInRightOnScrollAnim();
		animations.onePageNavAnim(contextSafe);
		animations.progressBar();
		animations.tjStackAnimation();
		animations.tjScrollSlider();
	});
	
	return null;
};

export default ClientWrapper;
