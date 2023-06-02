'use client';

import Image from "next/image";
import {AiOutlineBell, AiOutlineUser} from "react-icons/ai";
import Input from "@/components/atoms/input/input";
import Dropdown from "@/components/atoms/dropdown/dropdown";
import Link from "next/link";
import {useAuth} from "@/context/AuthContext";
import MyAiChat from "../../../public/MYAICHAT_white.png"
import { api } from "@/config/api";
import { parseCookies } from "nookies";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

const TopBar = () => {
    const { logout, setUser, isAuthenticated } = useAuth()

    const getUser = (): void => {
        api.get('user', {
            headers: {
                'Authorization': `Bearer ${parseCookies()['auth_token']}`,
                'Content-Type': 'application/json'
            }
        }).then((res: AxiosResponse): void => {
            console.log("User: ", res.data);
            setUser(res.data);
        }).catch(error => {
            console.error("Error fetching user: ", error);
            logout();
        });
    }

    const authToken = parseCookies()['auth_token'];

    useEffect((): void => {
        if (isAuthenticated()) {
            getUser()
        }
    }, [authToken]);

    return (
        <nav className="c-topbar">
            <div className="c-below-topbar">
            </div>
            <div className="c-above-topbar">
                <div className="c-above-topbar-left">
                    <Link href={'/admin/dashboard'}>
                        <Image src={MyAiChat} alt="LetsGo Logo" width="120" height="120"/>
                    </Link>
                </div>
                <div className="c-above-topbar-right">
                    <Input className="c-input c-input-rounded" type={'text'} placeholder={'Rechercher...'}/>
                    <div className="c-notification">
                        <AiOutlineBell/>
                    </div>
                    <div className="c-profile-avatar">
                        <Dropdown list={[
                            {
                                label: ``,
                                link: '/booking',
                                icon: <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>
                            },
                            {
                                label: 'Profil',
                                link: '/customer-history',
                                icon: <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>
                            },
                            {
                                label: 'Aide',
                                link: '/account/profile',
                                icon: <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>,
                            },
                            {
                                label: 'Déconnexion',
                                icon: <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>,
                                onclick: () => logout()
                            },
                        ]}>
                            <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default TopBar