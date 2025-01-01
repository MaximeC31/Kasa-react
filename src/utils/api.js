import api from '../data/data.json';

const logements = api.map(({ id, title, cover }) => ({
	id,
	title,
	cover,
}));

const getSingleLogementsById = (id) => {
	return api.find((data) => data.id === id);
};

export { logements, getSingleLogementsById };
