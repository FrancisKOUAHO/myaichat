import axios from 'axios';
import {AxiosInstance} from "axios";

let api: AxiosInstance = axios.create({
	//baseURL: 'http://localhost:8080/api/',
	baseURL: 'https://api-admin.myaichat.io/api/',
});

api.defaults.headers.post['Content-Type'] = 'application/json';
api.defaults.headers.post['Accept'] = 'application/json';

export {
	api,
};