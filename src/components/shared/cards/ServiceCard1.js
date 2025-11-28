import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const ServiceCard1 = ({ service, idx, lastItem }) => {
	const { title, desc, id, totalProject, img, svg, iconName } = service || {};
	
	// Используем изображение только если оно есть в данных
	const imageSrc = img;

	return (
		<div className="service-item style-1">
			{imageSrc && (
				<div className="service-img">
					<Image
						src={imageSrc}
						alt={title || "Изображение оборудования"}
						width={870}
						height={450}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover"
						}}
					/>
				</div>
			)}
			<div className="service-icon">
				<i className={iconName ? iconName : "tji-service-1"}></i>
			</div>
			<div className="service-content">
				<h4 className="title">
					<Link href={`/services/${id}`}>{title}</Link>
				</h4>
				<p className="desc">
					{desc || "Описание оборудования будет уточнено."}
				</p>
				<ButtonPrimary
					text={"Подробнее"}
					url={`/services/${id}`}
					isTextBtn={true}
				/>
			</div>
		</div>
	);
};

export default ServiceCard1;
