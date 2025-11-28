"use client";
import Image from "next/image";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";
import Link from "next/link";

const Contact2 = () => {
	const handleSelect = option => {};
	return (
		<section className="tj-contact-section section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="global-map wow fadeInUp" data-wow-delay=".3s">
							<div className="global-map-img">
								<Image
									src="/images/bg/map.svg"
									alt="Карта"
									width={600}
									height={400}
									style={{ width: "100%", height: "auto" }}
								/>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div
							className="contact-form style-2 wow fadeInUp"
							data-wow-delay=".4s"
						>
							<div className="sec-heading">
								<span className="sub-title text-white">
									<i className="tji-box"></i>Свяжитесь с нами
								</span>
								<h2 className="sec-title title-anim">
									Отправьте нам <span>сообщение</span>
								</h2>
							</div>
							<form id="contact-form-2">
								<div className="row wow fadeInUp" data-wow-delay=".5s">
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="text"
												name="cfName2"
												placeholder="Имя *"
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="email"
												name="cfEmail2"
												placeholder="E-mail *"
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="tel"
												name="cfPhone2"
												placeholder="Телефон *"
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<div className="tj-nice-select-box">
												<div className="tj-select">
													<ReactNiceSelect
														selectedIndex={0}
														options={[
															{ value: "0", optionName: "Выберите услугу" },
															{ value: "1", optionName: "Консультация по оборудованию" },
															{ value: "2", optionName: "Коммерческое предложение" },
															{
																value: "3",
																optionName: "Техническая поддержка",
															},
															{
																value: "4",
																optionName: "Обучение персонала",
															},
															{
																value: "5",
																optionName: "Сервисное обслуживание",
															},
															{
																value: "6",
																optionName: "Другое",
															},
														]}
														getSelectedOption={handleSelect}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="form-input message-input">
											<textarea
												name="cfMessage2"
												id="message"
												placeholder="Сообщение *"
											></textarea>
										</div>
									</div>
									<div className="submit-btn">
										<ButtonPrimary text={"Отправить сообщение"} type={"submit"} />
									</div>
								</div>
							</form>
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
		</section>
	);
};

export default Contact2;
