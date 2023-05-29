'use client'

import { api } from "@/config/api";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/context/AuthContext";
import LoadingSpinner from "@/components/atoms/loadingspinner/loadingSpinner";

const VerifyTokenPage = () => {
	const router = useRouter();
	const { setUser } = useAuth();
	const queryClient = useQueryClient();

	const token = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get('magic_link_token') : null;

	const verifyTokenMutation = useMutation(
		() => api.post(`/auth/magic-link/${token}`).then((res) => res.data.user),
		{
			onSuccess: (user) => {
				setUser(user);
				localStorage.setItem('user', JSON.stringify(user));
				router.push('/dashboard');
			},
		}
	);

	useEffect(() => {
		if (token) {
			verifyTokenMutation.mutate();
		} else {
			// Rediriger vers la page de login si aucun jeton n'est présent
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
