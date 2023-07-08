import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

const AuthGuard: ({children}: { children: any }) => (null | JSX.Element) = ({children}) => {
	const {isAuthenticated} = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!isAuthenticated()) {
			// Rediriger l'utilisateur vers la page de connexion
			router.push('/');
		}
	}, []);

	// Laisser le composant de la page être rendu normalement
	return (
		<>
			{children}
		</>
	);
};

export default AuthGuard;
