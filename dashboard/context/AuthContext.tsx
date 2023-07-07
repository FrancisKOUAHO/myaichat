import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "@/config/api";
import { CookieValueTypes, getCookie, getCookies } from "cookies-next";
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
	const [cookieLoaded, setCookieLoaded] = useState(false); // Nouvel état pour suivre le chargement du cookie

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

	console.log("paymentInfo", email)

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
		const fetchData = async () => {
			if (isAuthenticated()) {
				console.log("isAuthenticated");
				await getUser();
				await check_payment();
			}
		};

		// Charger le cookie avant d'appeler les fonctions getUser et check_payment
		const loadCookie = async () => {
			const cookies = parseCookies();
			const token: CookieValueTypes = cookies["access_token"];
			console.log("Cookie loaded", token);
			setCookieLoaded(true);
		};

		loadCookie(); // Charger le cookie

		// Appeler fetchData uniquement lorsque le cookie a été chargé
		if (cookieLoaded) {
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
				paymentInfo
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
