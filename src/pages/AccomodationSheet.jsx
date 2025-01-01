import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useLogementById } from '../hooks/useLogementById.jsx';
import { LOGEMENT_PATH } from '../App.jsx';
import { Collapse } from '../components/Collapse.jsx';

const Carrousel = ({ pictures }) => {
	const [position, setPosition] = useState(0);

	const handleCarrouselState = (direction) => {
		setPosition((position) => {
			if (direction === 'prev') {
				return position === 0 ? pictures.length - 1 : position - 1;
			}
			if (direction === 'next') {
				return position === pictures.length - 1 ? 0 : position + 1;
			}
		});
	};

	return (
		<div className='accomodation-sheet__swap-image'>
			<img
				src={pictures[position]}
				alt={`Image du logement`}
			/>
			<i
				className='fa-solid fa-chevron-left'
				onClick={() => handleCarrouselState('prev')}
			></i>
			<i
				className='fa-solid fa-chevron-right'
				onClick={() => handleCarrouselState('next')}
			></i>
		</div>
	);
};

const Stars = ({ rating }) => {
	return (
		<>
			{Array.from({ length: Number(rating) })}
			{Array.from({ length: Number(rating) }).map((_, index) => (
				<i
					key={`full-${index}`}
					className='fa-solid fa-star main-color'
				></i>
			))}
			{Array.from({ length: 5 - Number(rating) }).map((_, index) => (
				<i
					key={`empty-${index}`}
					className='fa-solid fa-star grey'
				></i>
			))}
		</>
	);
};

const OwnerInfo = ({ logementData }) => {
	return (
		<div className='accomodation-sheet__infos'>
			<div className='accomodation-sheet__infos__semantic'>
				<h1>{logementData.title}</h1>
				<p>{logementData.location}</p>
				<div className='accomodation-sheet__infos__semantic__tags'>
					{logementData.tags.map((tag, index) => (
						<p key={index}>{tag}</p>
					))}
				</div>
			</div>

			<div className='accomodation-sheet__infos__owner'>
				<div className='accomodation-sheet__infos__owner__identity'>
					<p>{logementData.host.name}</p>
					<img
						src={logementData.host.picture}
						alt='Host'
					/>
				</div>
				<div className='accomodation-sheet__infos__owner__stars'>
					<Stars rating={logementData.rating} />
				</div>
			</div>
		</div>
	);
};

const AccomodationSheet = () => {
	const { id } = useParams();
	const logementData = useLogementById(id);
	const navigate = useNavigate();

	useEffect(() => {
		if (!logementData || !id) navigate(`/${LOGEMENT_PATH}`);
	}, [logementData, id, navigate]);

	if (logementData) {
		return (
			<section className='accomodation-sheet'>
				<Carrousel pictures={logementData.pictures} />
				<OwnerInfo logementData={logementData} />
				<div className='accomodation-sheet__amenities'>
					<Collapse
						className='accomodation-sheet__amenities__subcontainer'
						title='Description'
						description={logementData.description}
						width='50%'
					/>
					<Collapse
						className='accomodation-sheet__amenities__subcontainer'
						title='Équipements'
						description={logementData.equipments}
						width='50%'
					/>
				</div>
			</section>
		);
	}
};

export default AccomodationSheet;
