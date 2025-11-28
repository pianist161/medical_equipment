import Image from "next/image";
import ServicesSlider1 from "@/components/shared/services/ServicesSlider1";

const Services1 = () => {
	return (
		<section className="tj-service-section overflow-hidden section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span
								className="sub-title text-white wow fadeInUp"
								data-wow-delay=".3s"
							>
								<i className="tji-box"></i>Наше оборудование
							</span>
							<h2 className="sec-title text-white title-anim">
								Реабилитационное оборудование для <span>медицинских учреждений</span>
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid p-0">
				<div className="row">
					<div className="col-12">
						<div className="service-wrapper wow fadeInUp" data-wow-delay=".4s">
							<ServicesSlider1 />
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

export default Services1;
