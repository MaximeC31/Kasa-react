const Banner = ({ title, imgBanner, alt, className }) => {
	return (
		<div className={className}>
			<img
				src={imgBanner}
				alt={alt}
			/>
			{title ? <h1>{title}</h1> : null}
		</div>
	);
};

export default Banner;
