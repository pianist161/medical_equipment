"use client";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";

const Contact3 = () => {
	const handleSelect = option => {};
	return (
		<section className="tj-contact-section-2 section-bottom-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="contact-form wow fadeInUp" data-wow-delay=".1s">
							<h3 className="title">
								Свяжитесь с нами для получения каталога и коммерческого предложения
							</h3>
							<form id="contact-form">
								<div className="row">
									<div className="col-sm-6">
										<div className="form-input">
											<input type="text" name="cfName" />
											<label className="cf-label">
												Имя <span>*</span>
											</label>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input type="email" name="cfEmail" />
											<label className="cf-label">
												E-mail <span>*</span>
											</label>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input type="tel" name="cfPhone" />
											<label className="cf-label">
												Телефон (необязательно)
											</label>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<div className="tj-nice-select-box">
												<div className="tj-select">
													<ReactNiceSelect
														selectedIndex={0}
														options={[
															{ value: "0", optionName: "Выберите оборудование" },
															{ value: "1", optionName: "Транскраниальный магнитный стимулятор" },
															{ value: "2", optionName: "Аппарат для лечения мозговых сосудов" },
															{
																value: "3",
																optionName: "Ультразвуковой низкочастотный электроаппарат",
															},
															{
																value: "4",
																optionName: "Аппарат для лечения артериальной гипертензии",
															},
															{
																value: "5",
																optionName: "Музыкальный гастроинтестинальный терапевтический аппарат",
															},
															{
																value: "6",
																optionName: "Система послеродовой реабилитации тазового дна",
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
											<textarea name="cfMessage" id="message"></textarea>
											<label className="cf-label">
												Сообщение <span>*</span>
											</label>
										</div>
									</div>
									<div className="submit-btn">
										<button className="tj-primary-btn" type="submit">
											<span className="btn-text">
												<span>Отправить сообщение</span>
											</span>
											<span className="btn-icon">
												<i className="tji-arrow-right-long"></i>
											</span>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="map-area wow fadeInUp" data-wow-delay=".3s">
						<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d287191.07665534207!2d37.5555002!3d55.7814244!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoscow%2C%20Russia!5e0!3m2!1sen!2sus!4v1763529916030!5m2!1sen!2sus" ></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact3;
