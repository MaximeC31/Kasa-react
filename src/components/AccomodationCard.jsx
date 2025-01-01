import { Link } from 'react-router';

const AccomodationCard = ({ id, title, cover, className }) => {
	return (
		<article className={className}>
			<Link to={`/fiche-logement/${id}`}>
				<h2>{title}</h2>
				<img
					src={cover}
					alt={title}
					loading='lazy'
				/>
			</Link>
		</article>
	);
};

export default AccomodationCard;
