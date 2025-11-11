import Banner from '../components/Banner.jsx';
import AccomodationCard from '../components/AccomodationCard.jsx';

import imgBanner from '../assets/beach-and-rocks.svg';
import { logements } from '../utils/api.js';

const TITLE = 'Chez vous, et partout ailleurs';

const Home = () => {
	return (
		<>
			<section className='banner'>
				<Banner
					title={TITLE}
					imgBanner={imgBanner}
					alt='Plage avec falaise'
					className='banner__container'
				/>
			</section>
			<section className='logements-gallery'>
				<div className='logements-gallery__container'>
					{logements.map((data, index) => (
						<AccomodationCard
							key={index}
							{...data}
							className='logements-gallery__container__single-logement'
						/>
					))}
				</div>
			</section>
		</>
	);
};

export default Home;
