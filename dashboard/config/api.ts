import axios from 'axios';

let api = axios.create({
	//baseURL: 'http://127.0.0.1:8000/api/v1/',
	baseURL: 'https://api.myaichat.io/api/v1/',
});

api.defaults.headers.post['Content-Type'] = 'application/json';

export {
	api,
};
