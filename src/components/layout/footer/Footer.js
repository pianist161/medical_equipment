import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="tj-footer-section footer-1 section-gap-x">
			<div className="footer-main-area">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
								<div className="footer-logo">
									<Link href="/">
										<Image
											src="/images/logos/logo-shenprom.webp"
											alt="Shenprom Logo"
											width={136}
											height={109}
											sizes="(max-width: 768px) 120px, 136px"
											style={{ height: "auto", width: "auto" }}
										/>
									</Link>
								</div>
								<div className="footer-text">
									<p>
										Производитель медицинского реабилитационного оборудования для клиник, больниц и реабилитационных центров.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".3s"
							>
								<h5 className="title">Навигация</h5>
								<ul>
									<li>
										<Link href="/">Главная</Link>
									</li>
									<li>
										<Link href="/services">Оборудование</Link>
									</li>
									<li>
										<Link href="/about">О компании</Link>
									</li>
									<li>
										<Link href="/contact">Контакты</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-subscribe wow fadeInUp"
								data-wow-delay=".5s"
							>
								<h5 className="title">Контакты</h5>
								<div className="footer-contact">
									<ul>
										<li>
											<Link href="mailto:info@medical-equipment.ru">
												<span className="icon">
													<i className="tji-envelop-2"></i>
												</span>
												<span className="text">info@medical-equipment.ru</span>
											</Link>
										</li>
										<li>
											<Link href="tel:+79991234567">
												<span className="icon">
													<i className="tji-phone-2"></i>
												</span>
												<span className="text">+7 (999) 123-45-67</span>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tj-copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="copyright-text">
									<p>
										&copy; 2025. Все права защищены.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<Image
					src="/images/shape/pattern-2.svg"
					alt=""
					width={200}
					height={200}
					style={{ width: "100%", height: "auto" }}
				/>
			</div>
			<div className="bg-shape-2">
				<Image
					src="/images/shape/pattern-3.svg"
					alt=""
					width={200}
					height={200}
					style={{ width: "100%", height: "auto" }}
				/>
			</div>
		</footer>
	);
};

export default Footer;
