'use client';

import Image from "next/image";
import {AiOutlineBell, AiOutlineUser} from "react-icons/ai";
import Input from "@/components/atoms/input/input";
import Dropdown from "@/components/atoms/dropdown/dropdown";
import Link from "next/link";
import {useAuth} from "@/context/AuthContext";
import MyAiChat from "../../../public/MYAICHAT_white.png"
import { serialize } from "cookie";

const TopBar = () => {
    const { logout, user } = useAuth()

    const userId = user.id;

    const setCookie = (name: string, value: string) => {
        // Définir le cookie avec l'ID de l'utilisateur
        document.cookie = serialize(name, value, {
            path: "/", // Spécifiez le chemin approprié pour votre application
            maxAge: 60 * 60 * 24 * 7, // Durée de vie du cookie (7 jours dans cet exemple)
        });
    };

    setCookie("userId", userId);
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
                                label: `${ user.email }`,
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
