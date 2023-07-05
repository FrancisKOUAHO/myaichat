import axios from 'axios';
import { getCookie } from "cookies-next";


const token = getCookie('access_token');

axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

const api = axios.create({
	baseURL: 'http://127.0.0.1:8000/api/v1/',
	//baseURL: 'https://api.myaichat.io/api/v1/',
});

const NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = 'pk_test_51NC5X9FdQvV9SdYXnSuewdg5jkPrrmAPURxmLLcVG0PB78EuVSGKSYUgvdiOYSgOBzMzy4bPO3DfsAef6iwh4FFw003cptYJiz';
const STRIPE_SECRET_KEY = 'sk_test_51NC5X9FdQvV9SdYXivNsOROcbKq9sm11mwKRVsF29ar6JYLOJFHzlmObUEEPbHhrUdZnMN0S06F3ov6HcaETrFag00I6f776fM';

export {
	api,
	NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
	STRIPE_SECRET_KEY
};
