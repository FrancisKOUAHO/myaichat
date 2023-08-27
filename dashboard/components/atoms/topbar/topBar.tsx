"use client";

import Image from "next/image";
import {AiOutlineGlobal, AiOutlineLogout, AiOutlineUser} from "react-icons/ai";
import Dropdown from "@/components/atoms/dropdown/dropdown";
import Link from "next/link";
import {useAuth} from "@/context/AuthContext";
import MyAiChat from "../../../public/MYAICHAT_white.png";
import {useLanguage} from "@/context/LanguageContext";

const TopBar = () => {
    const {email, handleLogout} = useAuth();

    const {language, setLanguage, translations} = useLanguage();

    const handleLanguageChange = (newLanguage: string) => {
        setLanguage(newLanguage);
    };

    return (
        <nav className="c-topbar">
            <div className="c-below-topbar"></div>
            <div className="c-above-topbar">
                <div className="c-above-topbar-left">
                    <Link href="/dashboard">
                        <Image src={MyAiChat} alt="LetsGo Logo" className="w-10 h-10"/>
                    </Link>
                </div>
                <div className="absolute right-20 text-white">
                    <div className="">
                        <Dropdown
                            list={[
                                {
                                    label: 'Francais',
                                    onclick: () => handleLanguageChange('fr'),
                            },
                                {
                                    label: 'Anglais',
                                    onclick: () => handleLanguageChange('en'),
                                },
                            ]}
                        >
                            <div className="flex gap-2 justify-center items-center">
                                <AiOutlineGlobal className="text-white w-100 h-100 text-2xl ml-2"/>
                                <span>{language.toUpperCase()}</span>
                            </div>
                        </Dropdown>
                    </div>
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
    );
};

export default TopBar;
