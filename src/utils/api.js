import api from '../data/data.json';

export const logements = api.map(({ id, title, cover }) => ({
	id,
	title,
	cover,
}));

export const getSingleLogementsById = (id) => {
	return api.find((data) => data.id === id);
};
