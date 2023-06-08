'use client'

import { api } from "@/config/api";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import LoadingSpinner from "@/components/atoms/loadingspinner/loadingSpinner";
import { setCookie } from "nookies";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { AxiosResponse } from "axios";

const VerifyTokenPage = () => {
	const router: AppRouterInstance = useRouter();

	const token: any = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get('magic_link_token') : null;

	const verifyTokenMutation = (token: string) => {
		api.post(`/auth/magic-link/${token}`).then((res: AxiosResponse) => res).then((res: AxiosResponse) => {
			if (res.status === 200) {
				router.push('/dashboard');
			}
		});
	};

	useEffect((): void => {
		if (token) {
			verifyTokenMutation(token);
		} else {
			router.push('/');
		}
	}, [token, router]);

	return (
		<div className="flex min-h-full flex-col text-center justify-center  sm:px-6 lg:p-8 p-8 h-[100vh] bg-gradient-to-r from-indigo-600 to-indigo-200">
			<div className="m-auto justify-center">
				<LoadingSpinner
				/>
			</div>
		</div>
	);
};

export default VerifyTokenPage;
