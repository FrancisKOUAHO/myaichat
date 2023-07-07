import axios from 'axios';
import { CookieValueTypes, getCookie } from "cookies-next";

let api = axios.create({
	baseURL: 'http://127.0.0.1:8000/api/v1/',
	//baseURL: 'https://api.myaichat.io/api/v1/',

	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		'Authorization': 'Bearer ' + getCookie('access_token') as CookieValueTypes,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
	}
});

export {
	api,
};
