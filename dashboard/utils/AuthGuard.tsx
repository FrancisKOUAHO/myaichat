import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

const AuthGuard: ({children}: { children: any }) => (null | JSX.Element) = ({children}) => {
	const {isAuthenticated} = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!isAuthenticated()) {
			router.push('/');
		}
	}, [isAuthenticated, router]);

	return (
		<>
			{children}
		</>
	);
};

export default AuthGuard;
