'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { api } from "@/config/api";

export const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({children}: { children: ReactNode }) => {
	const [user, setUser] = useState<any>(null);
	const [products, setProducts] = useState<any>(null);
	const [userId, setUserId] = useState<any>(null);
	const [email, setEmail] = useState<string>("");



	const isAuthenticated = (): boolean => {
		const token: string = parseCookies()["access_token"];
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

	useEffect((): void => {
		if (isAuthenticated()) {
			getUser();
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{
				setUser,
				isAuthenticated,
				setProducts,
				setUserId,
				products,
				userId,
				user,
				email,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
