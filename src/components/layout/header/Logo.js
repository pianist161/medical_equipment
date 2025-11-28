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
					width={544}
					height={152}
					priority
					style={{ height: "auto", width: "auto" }}
					unoptimized={false}
				/>
			</Link>
		</div>
	);
};

export default Logo;
