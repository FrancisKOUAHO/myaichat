"use client";

import Image from "next/image";
import { AiOutlineBell, AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import Dropdown from "@/components/atoms/dropdown/dropdown";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import MyAiChat from "../../../public/MYAICHAT_white.png";
import { api } from "@/config/api";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { destroyCookie } from "nookies";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";


const TopBar = () => {
	const {setUser, setUserId, isAuthenticated} = useAuth();
	const [email, setEmail] = useState<string>("");
	const router = useRouter();


	const {
		data,
		isLoading,
		isError,
	} = useQuery(
		['me'],
		() => api.get(`me`),
		{
			enabled: !!getCookie("access_token"),
		}
	);


	const getUser = (): void => {
		api
			.get("me")
			.then((res: AxiosResponse): void => {
				console.log("User: ", res.data)
				setUser(res.data);
				setEmail(res.data.email);
			})
			.catch((error) => {
				console.error("Error fetching user: ", error);
				logout();
			});
	};

	const logout = (): void => {
		api.post('/logout').then((res) => res).then((res) => {
			console.log(res)
			if (res.status === 200) {
				destroyCookie(undefined, 'access_token', {
					path: '/',
				})

				router.push('/');
			}
		});
	};

	useEffect((): void => {
		getUser();
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
