'use client'

import { api } from "@/config/api";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/context/AuthContext";

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
		<div>
			<h2>Verification en cours...</h2>
		</div>
	);
};

export default VerifyTokenPage;
