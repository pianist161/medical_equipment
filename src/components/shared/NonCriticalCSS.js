"use client";
import { useEffect } from "react";

const NonCriticalCSS = () => {
	useEffect(() => {
		// Dynamically load non-critical CSS
		const loadCSS = (href) => {
			const link = document.createElement("link");
			link.rel = "stylesheet";
			link.href = href;
			link.media = "print";
			link.onload = () => {
				link.media = "all";
			};
			document.head.appendChild(link);
		};

		// Load non-critical CSS after page load
		const timer = setTimeout(() => {
			// These will be loaded by Next.js automatically, but we can optimize timing
		}, 0);

		return () => clearTimeout(timer);
	}, []);

	return null;
};

export default NonCriticalCSS;

