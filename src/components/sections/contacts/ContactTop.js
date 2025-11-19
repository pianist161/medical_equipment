import Link from "next/link";

const ContactTop = () => {
	return (
		<div className="tj-contact-area section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".1s">
								<i className="tji-box"></i>Контактная информация
							</span>
							<h2 className="sec-title title-anim">
								Свяжитесь с нами для получения <span>каталога и коммерческого предложения</span>
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".3s"
						>
							<div className="contact-icon">
								<i className="tji-location-3"></i>
							</div>
							<h3 className="contact-title">Адрес</h3>
							<p>Адрес уточняется</p>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".5s"
						>
							<div className="contact-icon">
								<i className="tji-envelop"></i>
							</div>
							<h3 className="contact-title">E-mail</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:info@medical-equipment.ru">info@medical-equipment.ru</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".7s"
						>
							<div className="contact-icon">
								<i className="tji-phone"></i>
							</div>
							<h3 className="contact-title">Телефон</h3>
							<ul className="contact-list">
								<li>
									<Link href="tel:+79991234567">+7 (999) 123-45-67</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".9s"
						>
							<div className="contact-icon">
								<i className="tji-chat"></i>
							</div>
							<h3 className="contact-title">Обратная связь</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:info@medical-equipment.ru">
										info@medical-equipment.ru
									</Link>
								</li>
								<li className="active">
									<Link href="/contact">Нужна помощь?</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactTop;
