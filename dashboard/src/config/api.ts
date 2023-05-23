import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.letsgoeurope.fr/api/v1',
});

export {
	api,
};
