import axios from 'axios';
import {AxiosInstance} from "axios";

let api: AxiosInstance = axios.create({
	//baseURL: 'http://localhost:8000/api/v1/',
	baseURL: 'https://api-admin.myaichat.io/api/v1/',
});

api.defaults.headers.post['Content-Type'] = 'application/json';
api.defaults.headers.post['Accept'] = 'application/json';

export {
	api,
};