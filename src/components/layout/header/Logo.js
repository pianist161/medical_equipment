"use client";

import Image from "next/image";
import Link from "next/link";
const Logo = ({ headerType, isStickyHeader }) => {
	return (
		<div className="site_logo">
			<Link className="logo" href="/">
				<Image
					src="/images/logos/logo-shenprom.webp"
					alt="Shenprom Logo"
					width={136}
					height={109}
					priority
					sizes="(max-width: 768px) 120px, 136px"
					style={{ height: "auto", width: "auto" }}
				/>
			</Link>
		</div>
	);
};

export default Logo;
