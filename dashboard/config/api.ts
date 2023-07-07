import axios from 'axios';
import { CookieValueTypes, getCookie } from "cookies-next";

let api = axios.create({
	//baseURL: 'http://127.0.0.1:8000/api/v1/',
	baseURL: 'https://api.myaichat.io/api/v1/',
});

const token: CookieValueTypes = getCookie('access_token');

if (token) {
	api.defaults.headers.common = {Authorization: `Bearer ${token}`};
	api.defaults.headers.post['Content-Type'] = 'application/json';
	api.defaults.headers.post['Accept'] = 'application/json';
	api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
}

export {
	api,
};
