'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "@/config/api";
import { CookieValueTypes, getCookie } from "cookies-next";

export const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({children}: { children: ReactNode }) => {
	const [user, setUser] = useState<any>(null);
	const [products, setProducts] = useState<any>(null);
	const [userId, setUserId] = useState<any>(null);
	const [email, setEmail] = useState<string>("");
	const [isCurrentPlan, setIsCurrentPlan] = useState(false);
	const [paymentInfo, setPaymentInfo] = useState(false);

	const isAuthenticated = (): boolean => {
		const token: CookieValueTypes = getCookie("access_token");
		return !!token;
	};

	const getUser = (): void => {
		api
			.get("me")
			.then((res: any): void => {
				setEmail(res.data.email);
			})
			.catch((error: any) => {
				console.error("Error fetching user: ", error);
			});
	};

	const check_payment = () => {
		api.get(`check-payment`)
			.then((res) => {
				setPaymentInfo(res.data.payment_status);
				if (res.data.payment_status.st_payment_status === "paid") {
					setIsCurrentPlan(true);
				} else {
					setIsCurrentPlan(false);
				}
			})
			.catch((err) => {
				console.log("err", err);
			})
	}

	useEffect((): void => {
		if (isAuthenticated()) {
			getUser();
			check_payment();
		}
	}, [isCurrentPlan]);

	return (
		<AuthContext.Provider
			value={{
				setUser,
				isAuthenticated,
				setProducts,
				setUserId,
				setIsCurrentPlan,
				check_payment,
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
