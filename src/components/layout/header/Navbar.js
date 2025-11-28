import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems();

	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					{navItems?.length
						? navItems?.map((item, idx) => {
								const navItem = makeActiveLink(item);
								return (
									<li
										key={idx}
										className={navItem?.isActive ? "current-menu-ancestor" : ""}
									>
										<Link href={navItem?.path ? navItem?.path : "#"}>
											{navItem?.name}
										</Link>
									</li>
								);
						  })
						: ""}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
