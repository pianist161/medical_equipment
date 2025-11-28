import Link from "next/link";

const ServiceCard3 = ({ service, idx, lastItem }) => {
	const {
		title,
		desc,
		id,
		totalProject,
		img2,
		svg,
		iconName,
	} = service || {};
	
	// Используем изображение только если оно есть в данных
	const backgroundImage = img2;

	return (
		<div className="service-item style-3 wow fadeInUp" data-wow-delay=".3s">
			<div className="service-content-wrap">
				<div className="service-title">
					<div className="service-icon">
						<i className={iconName ? iconName : "tji-service-1"}></i>
					</div>
					<h4 className="title">
						<Link href={`/services/${id}`}>{title}</Link>
					</h4>
				</div>
				<div className="service-content">
					<p className="desc">{desc}</p>
				</div>
			</div>
			{backgroundImage && (
				<div
					className="service-reveal-bg"
					style={{ backgroundImage: `url('${backgroundImage}')` }}
				></div>
			)}
		</div>
	);
};

export default ServiceCard3;
