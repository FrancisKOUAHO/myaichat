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
import {useState} from "react";

const TopBar = () => {
	const {email} = useAuth();
	const router = useRouter();

	const handleLogout = () => {
		console.log('logout')
		api.post('logout').then((res) => {
			destroyCookie(undefined, 'access_token', {
				path: '/',
			})

			destroyCookie(undefined, 'userId', {
				path: '/',
			})
			router.push('/');
		}).catch((err) => {
			console.log('err', err);
		});
	}

	// State to control whether to show trial message
	const [showTrialMessage, setShowTrialMessage] = useState(true);


	return (
		<>
		{showTrialMessage && (
			<div className="c-trial-message">
				{"Bienvenue ! Profitez de votre essai gratuit de 7 jours."}
			</div>
		)}
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
									label: `${email && email}`,
									icon: (
										<AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>
									),
								},
								{
									label: "Déconnexion",
									icon: (
										<AiOutlineLogout className="text-white/70 w-100 h-100 text-2xl"/>
									),
									onclick: () => handleLogout(),
								},
							]}
						>
							<AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>
						</Dropdown>
					</div>
				</div>
			</div>
		</nav>
		</>
	);
};

export default TopBar;
