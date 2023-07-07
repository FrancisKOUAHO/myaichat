import axios from 'axios';
import { CookieValueTypes, getCookie } from "cookies-next";

const DEV = 'http://127.0.0.1:8000/api/v1/';
const PROD = 'https://api.myaichat.io/api/v1/';

const createAxiosInstance = () => {
	const instance = axios.create({
		baseURL: process.env.NODE_ENV === 'production' ? PROD : DEV,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
			'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
		},
	});

	const token: CookieValueTypes = getCookie('access_token');
	if (token) {
		instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	}

	return instance;
};

const api = createAxiosInstance();
const apiLogin = createAxiosInstance();

export {
	api,
	apiLogin
};
