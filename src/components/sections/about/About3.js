import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
const About3 = ({ type }) => {
	return (
		<section className="tj-about-section-2 section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6 order-lg-1 order-2">
						<div
							className="about-img-area style-2 wow fadeInLeft"
							data-wow-delay=".3s"
						>
							<div className="about-img overflow-hidden">
								<Image
									data-speed=".8"
									src="/images/about/about-5.jpg"
									alt=""
									width={591}
									height={639}
								/>
							</div>
							{/* <div className={`box-area ${type === 2 ? "style-2" : ""}`}>
								<div className="progress-box wow fadeInUp" data-wow-delay=".3s">
									<h4 className="title">Производственные показатели</h4>
									<ul className="tj-progress-list">
										<li>
											<h6 className="tj-progress-title">500 000+</h6>
											<div className="tj-progress">
												<span className="tj-progress-percent">годовая производственная мощность</span>
												<div
													className="tj-progress-bar"
													data-percent="100"
												></div>
											</div>
										</li>
										<li>
											<h6 className="tj-progress-title">15+</h6>
											<div className="tj-progress">
												<span className="tj-progress-percent">зарегистрированных медицинских изделий</span>
												<div
													className="tj-progress-bar"
													data-percent="100"
												></div>
											</div>
										</li>
										<li>
											<h6 className="tj-progress-title">18+</h6>
											<div className="tj-progress">
												<span className="tj-progress-percent">патентов и разработок</span>
												<div
													className="tj-progress-bar"
													data-percent="100"
												></div>
											</div>
										</li>
										<li>
											<h6 className="tj-progress-title">42 му</h6>
											<div className="tj-progress">
												<span className="tj-progress-percent">площадь производственного комплекса</span>
												<div
													className="tj-progress-bar"
													data-percent="100"
												></div>
											</div>
										</li>
									</ul>
								</div>
							</div> */}
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 order-lg-2 order-1">
						<div className="about-content-area">
							<div className={`sec-heading ${type === 2 ? "" : "style-3"}`}>
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Производитель медицинского реабилитационного оборудования
								</span>
								<h2 className="sec-title title-anim">
									{type === 2 ? (
										<>
												Разрабатываем и производим медицинское оборудование для <span>эффективной реабилитации пациентов</span>
										</>
									) : (
										"Разрабатываем и производим медицинское реабилитационное оборудование для неврологии, кардиологии, гастроэнтерологии и послеродового восстановления. Предоставляем медицинским учреждениям надёжное оборудование для эффективной реабилитации пациентов."
									)}
								</h2>
							</div>
						</div>
						<div className="about-bottom-area">
							<div
								className="mission-vision-box wow fadeInLeft"
								data-wow-delay=".5s"
							>
								<h4 className="title">Наша миссия</h4>
								<p className="desc">
									Сотрудничаем с больницами, клиниками и реабилитационными центрами, обеспечивая обучение персонала, методические материалы и сервисное сопровождение оборудования.
								</p>
								<ul className="list-items">
									<li>
										<i className="tji-list"></i>Инновации и качество
									</li>
									<li>
										<i className="tji-list"></i>Поддержка партнёров
									</li>
									<li>
										<i className="tji-list"></i>Эффективная реабилитация
									</li>
								</ul>
							</div>
							<div
								className="mission-vision-box wow fadeInRight"
								data-wow-delay=".5s"
							>
								<h4 className="title">Наше видение</h4>
								<p className="desc">
									Стать лидером в производстве медицинского реабилитационного оборудования, обеспечивая высокое качество лечения и эффективное восстановление пациентов.
								</p>
								<ul className="list-items">
									<li>
										<i className="tji-list"></i>Лидерство в отрасли
									</li>
									<li>
										<i className="tji-list"></i>Трансформация медицины
									</li>
									<li>
										<i className="tji-list"></i>Устойчивое развитие
									</li>
								</ul>
							</div>
						</div>
						<div className="about-btn-area wow fadeInUp" data-wow-delay=".5s">
							<ButtonPrimary text={"Узнать больше"} url={"/about"} />
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default About3;
