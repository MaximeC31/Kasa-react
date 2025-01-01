import { getSingleLogementsById } from '../utils/api.js';

export const useLogementById = (id) => {
	return getSingleLogementsById(id);
};

export default useLogementById;
