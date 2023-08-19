'use client';

import {useRouter} from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { api } from "@/config/api";
import { toast } from "react-toastify";
import { getCookie } from "cookies-next";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context";

const AuthGuard = ({ children }: { children: React.ReactNode }) => { // Mise à jour de la signature
	const { isAuthenticated } = useAuth();
	const router: AppRouterInstance = useRouter();


	const checkPayment = () => {
		api.get(`check-payment`, {
			headers: {
				'Authorization': `Bearer ${getCookie('access_token')}`
			}
		})
			.then((paymentRes) => {
				if (paymentRes.data.order.status === "unpaid") {
					router.push('/dashboard/subscription');
				}
			})
			.catch((paymentError) => {
				if (paymentError.response && paymentError.response.status === 404) {
					router.push('/dashboard/subscription');
				}
			});
	}

	useEffect(() => {
		if (!isAuthenticated()) {
			router.push('/');
		} else {
			checkPayment();
		}
	}, [isAuthenticated, router]);

	return (
		<>
			{children}
		</>
	);
};

export default AuthGuard;
