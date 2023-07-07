'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { api } from "@/config/api";
import { CookieValueTypes, getCookie } from "cookies-next";
import { parseCookies } from "nookies";

export const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({children}: { children: ReactNode }) => {
	const [user, setUser] = useState<any>(null);
	const [products, setProducts] = useState<any>(null);
	const [userId, setUserId] = useState<any>(null);
	const [email, setEmail] = useState<string>("");
	const [isCurrentPlan, setIsCurrentPlan] = useState(false);
	const [paymentInfo, setPaymentInfo] = useState(false);
	const [cookieLoaded, setCookieLoaded] = useState(false);

	const isAuthenticated = (): boolean => {
		const token: CookieValueTypes = getCookie("access_token");
		return !!token;
	};

	const getUser = async (): Promise<void> => {
		try {
			const response = await api.get("me");
			setUser(response.data);
			setEmail(response.data.email);
		} catch (error) {
			console.error("Error fetching user: ", error);
		}
	};

	const check_payment = async () => {
		try {
			const response = await api.get(`check-payment`);
			setPaymentInfo(response.data.payment_status);
			if (response.data.payment_status.st_payment_status === "paid") {
				setIsCurrentPlan(true);
			} else {
				setIsCurrentPlan(false);
			}
		} catch (error) {
			console.log("Error fetching payment info: ", error);
		}
	};

	useEffect(() => {
		const loadCookie = async () => {
			const cookies = parseCookies();
			const token: CookieValueTypes = cookies["access_token"];
			setCookieLoaded(true);
		};

		loadCookie();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			if (cookieLoaded && isAuthenticated()) {
				await getUser();
				await check_payment();
			}
		};

		const token: CookieValueTypes = getCookie("access_token");
		if (token) {
			api.defaults.headers.common = {Authorization: `Bearer ${token}`};
			fetchData();
		}
	}, [cookieLoaded]);

	return (
		<AuthContext.Provider
			value={{
				setUser,
				isAuthenticated,
				setProducts,
				setUserId,
				setIsCurrentPlan,
				check_payment,
				getUser,
				products,
				userId,
				user,
				email,
				isCurrentPlan,
				paymentInfo,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
