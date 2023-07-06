'use client'

import { api } from "@/config/api";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/atoms/loadingspinner/loadingSpinner";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { AxiosResponse } from "axios";
import { setCookie } from "nookies";


const VerifyTokenPage = () => {
	const router: AppRouterInstance = useRouter();

	const magic_link_token: any = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get('magic_link_token') : null;

	const verifyTokenMutation = (token: string) => {
		api.post(`auth/login/${token}`).then((res: AxiosResponse) => res).then((res: AxiosResponse) => {
			if (res.status === 200) {
				setCookie(undefined, 'access_token', res.data.access_token, {
					maxAge: 30 * 24 * 60 * 60,
					path: '/',
				})

				setCookie(undefined, 'userId', res.data.user.id, {
					maxAge: 30 * 24 * 60 * 60,
					path: '/',
				})
				router.push('/dashboard');
			} else {
				router.push('/');
			}
		});
	};

	useEffect((): void => {
		verifyTokenMutation(magic_link_token);
	}, [magic_link_token]);

	return (
		<div
			className="flex min-h-full flex-col text-center justify-center  sm:px-6 lg:p-8 p-8 h-[100vh] bg-gradient-to-r from-indigo-600 to-indigo-200">
			<div className="m-auto justify-center">
				<LoadingSpinner
				/>
			</div>
		</div>
	);
};

export default VerifyTokenPage;