'use client'

import { apiLogin } from "@/config/api";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/atoms/loadingspinner/loadingSpinner";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { AxiosResponse } from "axios";
import { setCookie } from "nookies";

const VerifyTokenPage = () => {
	const router: AppRouterInstance = useRouter();

	const magic_link_token: any =
		typeof window !== "undefined"
			? new URLSearchParams(window.location.search).get("magic_link_token")
			: null;

	const verifyTokenMutation = async (token: string) => {
		try {
			const res: AxiosResponse = await apiLogin.post(`auth/login/${token}`);

			if (res.status === 200) {
				setCookie(undefined, "access_token", res.data.access_token, {
					maxAge: 30 * 24 * 60 * 60,
					path: "/",
				});

				setCookie(undefined, "userId", res.data.user.id, {
					maxAge: 30 * 24 * 60 * 60,
					path: "/",
				});

				router.push("/dashboard");
			} else {
				router.push("/");
			}
		} catch (error) {
			console.error("Error verifying token: ", error);
			router.push("/");
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			if (magic_link_token) {
				await verifyTokenMutation(magic_link_token);
			} else {
				router.push("/");
			}
		};

		fetchData();
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