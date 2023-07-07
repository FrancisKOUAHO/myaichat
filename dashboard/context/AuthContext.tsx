import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "@/config/api";
import { CookieValueTypes, getCookie } from "cookies-next";
import { parseCookies } from "nookies";
import { useQuery } from "@tanstack/react-query";

export const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<any>(null);
	const [products, setProducts] = useState<any>(null);
	const [userId, setUserId] = useState<any>(null);
	const [isCurrentPlan, setIsCurrentPlan] = useState(false);
	const [paymentInfo, setPaymentInfo] = useState(false);
	const [cookieLoaded, setCookieLoaded] = useState(false);

	const isAuthenticated = (): boolean => {
		const token: CookieValueTypes = getCookie("access_token");
		return !!token;
	};

	const { data: userData, isLoading: isUserLoading } = useQuery<any>({
		queryKey: ["user"],
		queryFn: async () => {
			const response = await api.get("me");
			return response.data;
		},
		enabled: cookieLoaded,
	});

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

	const loadCookie = async (): Promise<void> => {
		return new Promise<void>((resolve) => {
			const cookies = parseCookies();
			const token: CookieValueTypes = cookies["access_token"];
			console.log("Cookie loaded", token);
			setCookieLoaded(true);
			resolve(); // Ajout de l'argument `void` lors de la résolution de la promesse
		});
	};

	useEffect(() => {
		const fetchData = async () => {
			if (isAuthenticated()) {
				console.log("isAuthenticated");
				await loadCookie();
				await check_payment();
				setUser(userData); // Modification de l'appel à setUser
			}
		};

		if (cookieLoaded && !isUserLoading) {
			fetchData();
		}
	}, [cookieLoaded, isUserLoading]);

	return (
		<AuthContext.Provider
			value={{
				setUser,
				isAuthenticated,
				setProducts,
				setUserId,
				setIsCurrentPlan,
				check_payment,
				getUser: userData,
				products,
				userId,
				user,
				isCurrentPlan,
				paymentInfo,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
