"use client";

import Image from "next/image";
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import Dropdown from "@/components/atoms/dropdown/dropdown";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import MyAiChat from "../../../public/MYAICHAT_white.png";
import { api } from "@/config/api";
import { destroyCookie } from "nookies";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

const TopBar = () => {
	const {email} = useAuth();
	const router = useRouter();

	const logout = useMutation(() =>
			api.post('/logout'),
		{
			onSuccess: (data) => {
				destroyCookie(undefined, 'access_token', {
					path: '/',
				})

				destroyCookie(undefined, 'userId', {
					path: '/',
				})
				router.push('/');
			},
			onError: (error): void => {
				console.log('error', error);
			},
		}
	);

	return (
		<nav className="c-topbar">
			<div className="c-below-topbar"></div>
			<div className="c-above-topbar">
				<div className="c-above-topbar-left">
					<Link href="/dashboard">
						<Image src={MyAiChat} alt="LetsGo Logo" width="120" height="120"/>
					</Link>
				</div>
				<div className="c-above-topbar-right">
					<div className="c-profile-avatar">
						<Dropdown
							list={[
								{
									label: `${email}`,
									icon: (
										<AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>
									),
								},
								{
									label: "Déconnexion",
									icon: (
										<AiOutlineLogout className="text-white/70 w-100 h-100 text-2xl"/>
									),
									onclick: () => logout.mutate(),
								},
							]}
						>
							<AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>
						</Dropdown>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default TopBar;
