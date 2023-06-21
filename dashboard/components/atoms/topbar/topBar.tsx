"use client";

import Image from "next/image";
import { AiOutlineBell, AiOutlineUser,AiOutlineLogout } from "react-icons/ai";
import Input from "@/components/atoms/input/input";
import Dropdown from "@/components/atoms/dropdown/dropdown";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import MyAiChat from "../../../public/MYAICHAT_white.png";
import { api } from "@/config/api";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { setCookie } from "nookies";
import { getCookie } from "cookies-next";

const TopBar = () => {
	const {logout, setUser, setUserId, isAuthenticated} = useAuth();
	const [email, setEmail] = useState<string>("");

	const getUser = (): void => {
		api
			.get("user", {
				headers: {
					'Authorization': `Bearer ${getCookie('auth_token')}`,
					"Content-Type": "application/json",
				},
			})
			.then((res: AxiosResponse): void => {
				setUser(res.data);
				setCookie(undefined, 'userId', res.data.id, {
					maxAge: 30 * 24 * 60 * 60,
					path: '/',
				})
				setUserId(res.data.id);
				setEmail(res.data.email);
			})
			.catch((error) => {
				console.error("Error fetching user: ", error);
				logout();
			});
	};

	const authToken = getCookie('auth_token');

	useEffect((): void => {
		if (isAuthenticated()) {
			getUser()
		}
	}, []);

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
	{/*				<Input
						className="c-input c-input-rounded"
						type={"text"}
						placeholder={"Rechercher..."}
					/>*/}
					<div className="c-notification">
						<AiOutlineBell/>
					</div>
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
									onclick: () => logout(),
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
