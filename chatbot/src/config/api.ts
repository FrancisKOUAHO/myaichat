import axios from 'axios';

const api = axios.create({
	//baseURL: 'http://127.0.0.1/api/v1/',
	baseURL: 'https://api.myaichat.io/api/v1/',
});

export {
	api,
};