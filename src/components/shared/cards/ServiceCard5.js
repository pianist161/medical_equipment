import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const ServiceCard5 = ({ service, idx, lastItemIdx }) => {
	const {
		title,
		desc,
		id,
		totalProject,
		img3,
		svg,
		iconName,
	} = service || {};
	
	// Используем изображение только если оно есть в данных
	const imageSrc = img3;

	return (
		<div
			className={`service-item style-5 ${
				idx !== lastItemIdx ? "service-stack" : ""
			}`}
		>
			<div className="service-content-area">
				<div className="service-icon">
					<i className={iconName ? iconName : "tji-service-1"}></i>
				</div>
				<div className="service-content">
					<span className="no">{modifyNumber(idx + 1)}.</span>
					<h3 className="title">
						<Link href={`/services/${id}`}>{title}</Link>
					</h3>
					<p className="desc">{desc}</p>
					<ButtonPrimary text={"Learn More"} url={`/services/${id}`} />
				</div>
			</div>
			{imageSrc && (
				<div className="service-img">
					<img src={imageSrc} alt={title || ""} />
				</div>
			)}
		</div>
	);
};

export default ServiceCard5;
