import Banner from '../components/Banner.jsx';
import { Collapse } from '../components/Collapse.jsx';

import imgBanner from '../assets/mountain-grass.svg';

const ALT_IMG = 'Prarie et montagnes';

const APropos = () => {
	const className = 'about-section__collapse__subcontainer';

	return (
		<section className='about-section'>
			<Banner
				imgBanner={imgBanner}
				alt={ALT_IMG}
				className='banner__container'
			/>
			<div className='about-section__collapse'>
				<Collapse
					className={className}
					title='Fiabilité'
					description='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
					width='100%'
				/>
				<Collapse
					className={className}
					title='Respect'
					description='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
					width='100%'
				/>
				<Collapse
					className={className}
					title='Service'
					description='La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.'
					width='100%'
				/>
				<Collapse
					className={className}
					title='Sécurité'
					description='La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
					width='100%'
				/>
			</div>
		</section>
	);
};

export default APropos;
