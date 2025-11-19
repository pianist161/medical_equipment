"use client";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";

const ServicesDetailsPrimary = ({ option }) => {
	const {
		currentItem,
		items,
		currentId,
		isPrevItem,
		isNextItem,
		prevId,
		nextId,
	} = option || {};
	const { title, titleLarge, id, iconName, img, desc1, desc2, desc3, indications, departments, process } = currentItem || {};
	const sidebarItems = items?.slice(0, 6);
	
	// Используем изображения только если они есть в данных
	const mainImage = img;
	const { img2, img3, img4 } = currentItem || {};
	const image2 = img2;
	const image3 = img3;
	const image4 = img4;
	
	return (
		<section className="tj-service-area section-gap">
			<div className="container">
				<div className="row row-gap-5">
					<div className="col-lg-8">
						<div className="post-details-wrapper">
							{mainImage && (
								<div className="blog-images wow fadeInUp" data-wow-delay=".1s">
									<Image
										src={mainImage}
										alt={title || "Изображение оборудования"}
										width={870}
										height={450}
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 870px"
										style={{
											width: "100%",
											height: "auto"
										}}
									/>
								</div>
							)}
							<h2 className="title title-anim">
								{titleLarge || title || "Медицинское реабилитационное оборудование"}
							</h2>
							<div className="blog-text">
								{desc1 && (
									<p className="wow fadeInUp" data-wow-delay=".3s">
										{desc1}
									</p>
								)}
								{desc2 && (
									<p className="wow fadeInUp" data-wow-delay=".3s">
										{desc2}
									</p>
								)}
								{desc3 && (
									<p className="wow fadeInUp" data-wow-delay=".3s">
										{desc3}
									</p>
								)}
								{indications && indications.length > 0 && (
									<>
										<h3 className="wow fadeInUp" data-wow-delay=".3s">
											Показания
										</h3>
										<ul className="wow fadeInUp" data-wow-delay=".3s">
											{indications.map((indication, idx) => (
												<li key={idx}>
													<span>
														<i className="tji-check"></i>
													</span>
													{indication}
												</li>
											))}
										</ul>
									</>
								)}
								{departments && departments.length > 0 && (
									<>
										<h3 className="wow fadeInUp" data-wow-delay=".3s">
											Отделения и учреждения
										</h3>
										<ul className="wow fadeInUp" data-wow-delay=".3s">
											{departments.map((dept, idx) => (
												<li key={idx}>
													<span>
														<i className="tji-check"></i>
													</span>
													{dept}
												</li>
											))}
										</ul>
									</>
								)}
								{(image2 || image3 || image4) && (
									<div className="images-wrap">
										<div className="row">
											{image2 && (
												<div className="col-sm-6">
													<div
														className="image-box wow fadeInUp"
														data-wow-delay=".3s"
													>
														<Image
															src={image2}
															alt={title || "Изображение оборудования"}
															width={420}
															height={420}
															sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
															style={{
																width: "100%",
																height: "auto"
															}}
														/>
													</div>
												</div>
											)}
											{image3 && (
												<div className="col-sm-6">
													<div
														className="image-box wow fadeInUp"
														data-wow-delay=".5s"
													>
														<Image
															src={image3}
															alt={title || "Изображение оборудования"}
															width={420}
															height={420}
															sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
															style={{
																width: "100%",
																height: "auto"
															}}
														/>
													</div>
												</div>
											)}
											{image4 && (
												<div className="col-sm-6">
													<div
														className="image-box wow fadeInUp"
														data-wow-delay=".7s"
													>
														<Image
															src={image4}
															alt={title || "Изображение оборудования"}
															width={420}
															height={420}
															sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
															style={{
																width: "100%",
																height: "auto"
															}}
														/>
													</div>
												</div>
											)}
										</div>
									</div>
								)}
								{process && process.desc && (
									<>
										<h3 className="wow fadeInUp" data-wow-delay=".3s">
											Ключевые особенности и преимущества
										</h3>
										<p className="wow fadeInUp" data-wow-delay=".3s">
											{process.desc}
										</p>
									</>
								)}
								{process && process.processItems && process.processItems.length > 0 && (
									<div className="details-content-box">
										{process.processItems.slice(0, 3).map((item, idx) => (
											<div
												key={idx}
												className="service-details-item wow fadeInUp"
												data-wow-delay={`.${(idx + 1) * 2}s`}
											>
												<span className="number">0{idx + 1}.</span>
												<h6 className="title">
													{item ? (
														<>
															{item.split(' ').slice(0, 2).join(' ')} <br />
															{item.split(' ').slice(2).join(' ')}
														</>
													) : (
														'Особенность оборудования'
													)}
												</h6>
												<div className="desc">
													<p>
														{item}
													</p>
												</div>
											</div>
										))}
									</div>
								)}
								<h3 className="wow fadeInUp" data-wow-delay=".3s">
									Часто задаваемые вопросы
								</h3>
								<BootstrapWrapper>
									<div className="accordion tj-faq style-2" id="faqOne">
										<div
											className="accordion-item active wow fadeInUp"
											data-wow-delay=".3s"
										>
											<button
												className=" faq-title"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#faq-1"
												aria-expanded="true"
											>
												Какие показания для применения данного оборудования?
											</button>
											<div
												id="faq-1"
												className="collapse show"
												data-bs-parent="#faqOne"
											>
												<div className="accordion-body faq-text">
													<p>
														{indications && indications.length > 0 ? (
															<>Оборудование применяется при следующих показаниях: {indications.slice(0, 3).join(', ')} и других заболеваниях, указанных в инструкции. Подробный список показаний представлен выше на странице.</>
														) : (
															<>Оборудование применяется для лечения и реабилитации пациентов в соответствии с медицинскими показаниями. Подробную информацию о показаниях можно получить, связавшись с нами.</>
														)}
													</p>
												</div>
											</div>
										</div>
										<div
											className="accordion-item wow fadeInUp"
											data-wow-delay=".3s"
										>
											<button
												className="faq-title collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#faq-2"
												aria-expanded="false"
											>
												В каких отделениях используется это оборудование?
											</button>
											<div
												id="faq-2"
												className="collapse"
												data-bs-parent="#faqOne"
											>
												<div className="accordion-body faq-text">
													<p>
														{departments && departments.length > 0 ? (
															<>Оборудование применяется в следующих отделениях и учреждениях: {departments.slice(0, 5).join(', ')} и других медицинских учреждениях. Полный список отделений представлен выше на странице.</>
														) : (
															<>Оборудование может использоваться в различных медицинских отделениях в зависимости от типа устройства. Подробную информацию можно получить, связавшись с нами.</>
														)}
													</p>
												</div>
											</div>
										</div>
										<div
											className="accordion-item wow fadeInUp"
											data-wow-delay=".3s"
										>
											<button
												className="faq-title collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#faq-3"
												aria-expanded="false"
											>
												Есть ли у оборудования сертификация и регистрация?
											</button>
											<div
												id="faq-3"
												className="collapse"
												data-bs-parent="#faqOne"
											>
												<div className="accordion-body faq-text">
													<p>
														Да, все наше медицинское оборудование имеет необходимые сертификаты и регистрации, подтверждающие безопасность и эффективность. Оборудование соответствует требованиям медицинских стандартов и может использоваться в медицинских учреждениях.
													</p>
												</div>
											</div>
										</div>
										<div
											className="accordion-item wow fadeInUp"
											data-wow-delay=".3s"
										>
											<button
												className="faq-title collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#faq-4"
												aria-expanded="false"
											>
												Предоставляется ли обучение персонала и техническая поддержка?
											</button>
											<div
												id="faq-4"
												className="collapse"
												data-bs-parent="#faqOne"
											>
												<div className="accordion-body faq-text">
													<p>
														Да, мы предоставляем полное обучение персонала работе с оборудованием, методические материалы и сервисное сопровождение. Наша команда обеспечивает техническую поддержку и консультации по использованию оборудования.
													</p>
												</div>
											</div>
										</div>
										<div
											className="accordion-item wow fadeInUp"
											data-wow-delay=".3s"
										>
											<button
												className="faq-title collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#faq-5"
												aria-expanded="false"
											>
												Как получить коммерческое предложение и каталог?
											</button>
											<div
												id="faq-5"
												className="collapse"
												data-bs-parent="#faqOne"
											>
												<div className="accordion-body faq-text">
													<p>
														Для получения коммерческого предложения и каталога оборудования заполните форму обратной связи на странице "Контакты" или свяжитесь с нами по электронной почте или телефону. Мы подготовим индивидуальное коммерческое предложение с учетом ваших потребностей.
													</p>
												</div>
											</div>
										</div>
										<div
											className="accordion-item wow fadeInUp"
											data-wow-delay=".3s"
										>
											<button
												className="faq-title collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#faq-6"
												aria-expanded="false"
											>
												Как связаться с нами для получения дополнительной информации?
											</button>
											<div
												id="faq-6"
												className="collapse"
												data-bs-parent="#faqOne"
											>
												<div className="accordion-body faq-text">
													<p>
														Вы можете связаться с нами через форму обратной связи на сайте, отправить запрос на электронную почту или позвонить по телефону. Наша команда ответит на все ваши вопросы и предоставит подробную информацию об оборудовании, условиях поставки и сервисном сопровождении.
													</p>
												</div>
											</div>
										</div>
									</div>
								</BootstrapWrapper>
							</div>
							<div
								className="tj-post__navigation mb-0 wow fadeInUp"
								data-wow-delay="0.3s"
							>
								{/* <!-- previous post --> */}
								<div
									className="tj-nav__post previous"
									style={{ visibility: isPrevItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav prev_post">
										<Link href={isPrevItem ? `/services/${prevId}` : "#"}>
											<span>
												<i className="tji-arrow-left"></i>
											</span>
											Предыдущее
										</Link>
									</div>
								</div>
								<Link href={"/services"} className="tj-nav-post__grid">
									<i className="tji-window"></i>
								</Link>
								{/* <!-- next post --> */}
								<div
									className="tj-nav__post next"
									style={{ visibility: isNextItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav next_post">
										<Link href={isNextItem ? `/services/${nextId}` : "#"}>
											Следующее
											<span>
												<i className="tji-arrow-right"></i>
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<aside className="tj-main-sidebar">
							{/* <!-- Service List --> */}
							<div
								className="tj-sidebar-widget service-categories wow fadeInUp"
								data-wow-delay=".1s"
							>
								<h4 className="widget-title">Другое оборудование</h4>
								<ul>
									{sidebarItems?.length
										? sidebarItems?.map(({ shortTitle, id }, idx) => (
												<li key={idx}>
													<Link
														className={`${currentId === id ? "active" : ""}`}
														href={`/services/${id}`}
													>
														{shortTitle}
														<span className="icon">
															<i className="tji-arrow-right"></i>
														</span>
													</Link>
												</li>
										  ))
										: ""}
								</ul>
							</div>

							{/* <!-- cta --> */}
							<div
								className="tj-sidebar-widget widget-feature-item wow fadeInUp"
								data-wow-delay=".3s"
							>
								<CtaSidebar />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesDetailsPrimary;
