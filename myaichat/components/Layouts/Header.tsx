import {Menu, Transition} from '@headlessui/react'

import {Fragment, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {IRootState} from "../../store";
import {useLanguage} from "../../context/LanguageContext";

const Header = (props: any) => {
    const router = useRouter();
    const {language, setLanguage, translations} = useLanguage();

    const handleLanguageChange = (newLanguage: string) => {
        setLanguage(newLanguage);
    };

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();

    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        if (window.innerWidth < 1024) {
            setShowMenu(!showMenu);
        } else {
            setShowMenu(false);
        }
    };

    const [showSearch, setShowSearch] = useState(false);
    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    return (
        <header className={`top-0 z-50 bg-black/10 duration-300 ${props.className}`}>
            <div className="container">
                <div className="flex items-center justify-between py-5 lg:py-0">
                    <Link href="/" className="flex gap-2 items-center justify-center">
                        <img src="/assets/images/myaichat.png" alt="myaichat" className="h-10 w-10"/>
                        <span className="ml-4 text-xl font-bold"
                              style={{color: 'white'}}>{translations.home.title}</span>
                    </Link>
                    <div className="flex items-center">
                        <div onClick={() => toggleMenu()}
                             className={`overlay fixed inset-0 z-[51] bg-black/60 lg:hidden ${showMenu ? '' : 'hidden'}`}></div>
                        <div className={`menus ${showMenu ? 'overflow-y-auto ltr:!right-0 rtl:!left-0' : ''}`}>
                            <div className="border-b border-gray/10 ltr:text-right rtl:text-left lg:hidden">
                                <button onClick={() => toggleMenu()} type="button" className="p-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6 text-black dark:text-white"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                            <ul onClick={() => toggleMenu()}>
                                <li>
                                    <Link href="/" className={router.pathname === '/' ? 'active' : ''}>
                                        {translations.links.home}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://app.myaichat.io/">
                                        {translations.links.login}
                                    </Link>
                                </li>
                                <li>
                                    <div>
                                        <Menu as="div" className="relative inline-block text-left">
                                            <div>
                                                <Menu.Button
                                                    className=" flex justify-center items-center gap-2 bg-transparent px-4 py-2 text-sm font-medium text-white">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                         className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
                                                    </svg>
                                                    <p>{language.toUpperCase()}</p>
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items
                                                    className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-transparent border border-white shadow-lg">
                                                    <div className="px-1 py-1 ">

                                                        <Menu.Item>
                                                            <button
                                                                className="flex gap-2 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-[#B476E5] w-full hover:text-white"
                                                                onClick={() => handleLanguageChange('fr')}>
                                                                {translations.langs.fr}
                                                            </button>
                                                        </Menu.Item>

                                                        <Menu.Item>
                                                            <button
                                                                className="flex gap-2 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-[#B476E5] w-full hover:text-white"
                                                                onClick={() => handleLanguageChange('en')}>
                                                                {translations.langs.en}
                                                            </button>
                                                        </Menu.Item>

                                                        <Menu.Item>
                                                            <button
                                                                className="flex gap-2 bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-[#B476E5] w-full hover:text-white"
                                                                onClick={() => handleLanguageChange('es')}>
                                                                {translations.langs.es}
                                                            </button>
                                                        </Menu.Item>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7F1AE6] lg:hidden"
                            onClick={() => toggleMenu()}
                        >
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="text-white">
                                <path
                                    d="M2 15H11C11.552 15 12 15.447 12 16C12 16.553 11.552 17 11 17H2C1.448 17 1 16.553 1 16C1 15.447 1.448 15 2 15Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M2 8H20C20.552 8 21 8.447 21 9C21 9.553 20.552 10 20 10H2C1.448 10 1 9.553 1 9C1 8.447 1.448 8 2 8Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M21 2C21 1.447 20.552 1 20 1H7C6.448 1 6 1.447 6 2C6 2.553 6.448 3 7 3H20C20.552 3 21 2.553 21 2Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
