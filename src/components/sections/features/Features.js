import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features = ({ type }) => {
	const features = [
		{
			title: "Производственные мощности",
			desc: "Собственный индустриальный парк и серийное производство обеспечивают стабильные поставки.",
			icon: "tji-innovative",
		},
		{
			title: "Ориентация на клинические задачи",
			desc: "Разработка совместно с практикующими врачами для решения реальных клинических задач.",
			icon: "tji-award",
		},
		{
			title: "Сертифицированные изделия",
			desc: "Все изделия имеют регистрации, сертификаты и патенты, подтверждающие безопасность и эффективность.",
			icon: "tji-support",
		},
		{
			title: "Поддержка партнёров",
			desc: "Обучение персонала, методические материалы и сервисное сопровождение оборудования.",
			icon: "tji-excellence",
		},
	];

	return (
		<section id="choose" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						{type == 2 ? (
							<div className="sec-heading-wrap">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Наши преимущества
								</span>
								<div className="heading-wrap-content">
									<div className="sec-heading">
										<h2 className="sec-title title-anim">
											Почему выбирают <span>наше оборудование</span>
										</h2>
									</div>
									<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
										<ButtonPrimary text="Связаться с нами" url="/contact" />
									</div>
								</div>
							</div>
						) : (
							<div className="sec-heading text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Наши преимущества
								</span>
								<h2 className="sec-title title-anim">
									Почему выбирают <span>наше оборудование</span>
								</h2>
							</div>
						)}
					</div>
				</div>
				<div className="row row-gap-4 rightSwipeWrap">
					{features.map((feature, idx) => (
						<div key={idx} className="col-lg-3 col-md-6">
							<FeatureCard feature={feature} idx={idx} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Features;
