import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const AuthGuard: ({children}: { children: any }) => (null | JSX.Element) = ({children}) => {
	const {isAuthenticated} = useAuth();
	const router = useRouter();

	if (!isAuthenticated()) {
		// Rediriger l'utilisateur vers la page de connexion
		router.push('/');
		return null;
	}

	// Laisser le composant de la page être rendu normalement
	return (
		<>
			{children}
		</>
	);
};

export default AuthGuard;
