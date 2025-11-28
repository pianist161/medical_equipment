import Image from "next/image";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Cta = () => {
	return (
		<section className="tj-cta-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="cta-area">
							<div className="cta-content">
								<h2 className="title title-anim">
									Готовы начать сотрудничество?
								</h2>
								<div className="cta-btn wow fadeInUp" data-wow-delay=".6s">
									<ButtonPrimary
										text={"Связаться с нами"}
										url={"/contact"}
										className={"btn-dark"}
									/>
								</div>
							</div>
							<div className="cta-img">
								<Image
									src="/images/cta/cta-bg.webp"
									alt=""
									width={388}
									height={259}
									sizes="(max-width: 768px) 100vw, 50vw"
									style={{ width: "100%", height: "100%", objectFit: "cover" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta;
