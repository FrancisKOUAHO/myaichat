"use client"

import React, { useState } from "react";
import {
	AiOutlineCloseCircle,
	AiOutlineCloudServer,
	AiOutlineDelete,
	AiOutlineDown,
	AiOutlineEdit,
	AiOutlineEye,
	AiOutlineFolderAdd,
	AiOutlinePlus,
	AiOutlineRollback
} from "react-icons/ai";
import LayoutCustom from "@/layouts/layoutCustom";
import { Disclosure, Tab } from '@headlessui/react';
import Image from "next/image";
import Shopify from "../../public/shopify.png";

import Theme from "../../public/themes.jpg";
import Edit from "../../public/edit.jpg";
import Liquid from "../../public/liquid.jpg";
import Parametre from "../../public/parametre.jpg";
import Commande from "../../public/commande.jpg";
import PaiementPage from "../../public/paiementPage.jpg";
import Modal from "@/components/atoms/modal/modal";
import Card from "@/components/atoms/card/card";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/context/AuthContext";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import useWebSocket from 'react-use-websocket';



const Page = () => {
	const {user} = useAuth();
	const router: AppRouterInstance = useRouter();

	const [isOpen, setIsOpen] = useState(false);
	const [isOpenWidget, setIsOpenWidget] = useState(false);
	const [isOpenShopify, setIsOpenShopify] = useState(false);
	const [isCardVisible, setCardVisible] = useState(true);
	const [selectedTab, setSelectedTab] = useState(0);
	const [isOpenMyChatBots, setIsOpenMyChatBots] = useState(true);

	const handleTabClick = (index: number) => setSelectedTab(index);
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);
	const openModalWidget = () => setIsOpenWidget(true);
	const closeModalWidget = () => setIsOpenWidget(false);
	const openModalShopify = () => setIsOpenShopify(true);
	const closeModalShopify = () => setIsOpenShopify(false);

	const tabClasses = (index: number) =>
		`inline-block w-full p-4 rounded-tl-lg focus:outline-none ${index === selectedTab ? 'bg-indigo-100' : 'bg-gray-50'}`


	return (
		<LayoutCustom>
			<>
				{
					isOpenMyChatBots ? (
						<>
							<div className="w-full overflow-y-auto ">
								<div className="p-40 mx-auto">
									<div className="text-center">
										<AiOutlineFolderAdd className="mx-auto h-12 w-12 text-gray-400 "/>
										<h3 className="mt-2 text-sm font-semibold text-gray-900">
											{"Vous n'avez pas encore de ChatBot"}
										</h3>
										<p className="mt-1 text-sm text-gray-500">
											Commencez par créer votre premier ChatBot
										</p>
										<div className="mt-6">
											<div>
												<button onClick={openModal}
																className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-[0.775rem] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
													<AiOutlinePlus className="-ml-0.5 mr-1.5 h-5 w-5"/>
													Créer un nouveau chatbot
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<Modal isOpen={isOpen} closeModal={closeModal}>
								<div
									className=" max-w-xl px-20 py-8 m-20 overflow-hidden bg-white rounded-lg shadow-xl 2xl:max-w-2xl">
									<div className="flex justify-start space-x-4">
										<button onClick={closeModal}
														className="text-gray-600 focus:outline-none hover:text-gray-700">
											<AiOutlineCloseCircle/>
										</button>
									</div>
									<form className="mx-auto">
										<input type="hidden" name="authenticity_token"
													 value="Stu6q1xrADvdThGxkoNr3gPfkU8INBlg8uP0bVRqS5wD31CwZCWUIb-a2J1zxyinHPdr54TIm8NeVuf8sFlnBg"
													 autoComplete="off"/>
										<div>
											<div className="mx-auto flex h-12 w-12 items-center justify-center">
												<Image
													src={Shopify} width="100" height="100" alt={''}/>
											</div>
											<div className="mt-3 text-center sm:mt-5">
												<h3 className="text-base font-semibold leading-6 text-gray-900"
														id="modal-title">
													Connectons
													votre magasin !
												</h3>
												<div className="mt-2">
													<p className="text-sm text-gray-500">
														Nous parcourons les pages de votre site web et créons
														automatiquement un chatbot à partir de votre contenu.
														automatiquement un chatbot à partir de votre contenu.
													</p>
												</div>
											</div>
											<div className="w-full mt-4">
												<div className="sm:col-span-4">
													<div className="mt-2">
														<div
															className="mx-auto flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
															<input placeholder="myshop" name="shop"
																		 autoComplete="off"
																		 className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
																		 type="text"/>
															<span
																className="flex select-none items-center pr-3 text-gray-500 sm:text-sm">.myshopify.com</span>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="w-full mt-10 justify-end flex">
											<button name="button" onClick={() => setIsOpenMyChatBots(false)}
															className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
												Connecter
											</button>
										</div>
									</form>
								</div>
							</Modal></>
					) : (
						<>
							<div className="w-full overflow-y-auto">
								{isCardVisible ? (
									<Card>
										<div
											className="mt-[2%] w-full p-4 text-center bg-indigo-200  rounded-lg shadow sm:p-8">
											<div className="flex items-center justify-between border-b border-gray-200">
												<span className="font-bold text-gray-900">My Chatbots</span>
												<a href="#"
													 className="text-white bg-indigo-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
													Créer un
													nouveau chatbot
												</a>
											</div>
											<div className="mt-[2%] bg-white rounded-lg ">
												<div className="flex justify-between  gap-8 p-6 ">
													<div className="m-auto">
														<dt className="mb-2 font-bold text-[0.775rem]">MyShootBox</dt>
														<dd className="text-gray-500 text-[0.775rem]">myshootbox.com</dd>
													</div>
													<div className="m-auto">
														<dd className="text-gray-500  text-[0.775rem]">Pages : 9</dd>
													</div>
													<div className="m-auto">
														<button
															className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-[0.675rem] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
															<AiOutlineEye className="-ml-0.5 mr-1.5 h-5 w-5"/>
															Visualiser
														</button>
													</div>
													<div className="m-auto">
														<button id="installer-tab" onClick={() => setCardVisible(false)}
																		className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-[0.675rem] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
															<AiOutlineCloudServer className="-ml-0.5 mr-1.5 h-5 w-5"/>
															Installer
														</button>
													</div>
													<div className="m-auto">
														<button
															className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-[0.675rem] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
															<AiOutlineEdit className="-ml-0.5 mr-1.5 h-5 w-5"/>
															Personaliser
														</button>
													</div>
													<div className="m-auto">
														<dt className="mb-2  font-extrabold text-[0.775rem]">Active</dt>
														<label
															className="relative inline-flex items-center cursor-pointer">
															<input type="checkbox" value="" className="sr-only peer"/>
															<div
																className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
														</label>
													</div>
													<div className="m-auto">
														<AiOutlineDelete
															className="-ml-0.5 mr-1.5 h-5 w-5 text-red-400"/>
													</div>
												</div>
											</div>
										</div>
									</Card>
								) : (
									<div className=" p-4 bg-indigo-200 rounded-lg md:p-8" id="installer">
										<div className="w-full bg-white border border-gray-200 rounded-lg shadow">
											<Tab.Group>
												<div
													className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
													<Tab.List
														className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex">
														<Tab onClick={() => handleTabClick(0)}
																 className={tabClasses(0)}>Instructions
															pour le widget</Tab>
														<Tab onClick={() => handleTabClick(1)}
																 className={tabClasses(1)}>Suivi des
															instructions de vente <br/> (shopify uniquement)</Tab>
														<Tab
															className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none">
															<button id="retour-tab" onClick={() => setCardVisible(true)}
																			className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-[0.675rem] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
																<AiOutlineRollback className="-ml-0.5 mr-1.5 h-5 w-5"/>
																Retour
															</button>
														</Tab>
													</Tab.List>
													<Tab.Panels className="border-t border-gray-200 ">
														<Tab.Panel className="bg-white rounded-lg md:p-8">
															<button onClick={openModalWidget}
																			className="inline-flex items-center rounded-md mb-2 px-3 py-2 text-[0.675rem] font-semibold text-black shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
																<Image src={Shopify} width="15" height="15" alt={''}
																			 className="m-1"/>
																Instructions Shopify
															</button>
															<div className="mb-4 mt-4">
																<Disclosure>
																	{({open}) => (
																		<>
																			<Disclosure.Button
																				className="flex w-full justify-between rounded-lg bg-gray-50 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-indigo-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
																				<span>Copier le code suivant</span>
																				<AiOutlineDown
																					className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-indigo-600`}/>
																			</Disclosure.Button>
																			<Disclosure.Panel
																				className="px-4 pt-4 pb-2 text-sm text-gray-500">
																				<code>
																					{'<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>'}
																				</code>

																			</Disclosure.Panel>
																		</>
																	)}
																</Disclosure>
															</div>
															<div className="mb-4 mt-4">
																<Disclosure>
																	{({open}) => (
																		<>
																			<Disclosure.Button
																				className="flex w-full justify-between rounded-lg bg-gray-50 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-indigo-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
																				<span>Ajouter le code dans votre page</span>
																				<AiOutlineDown
																					className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-indigo-600`}/>
																			</Disclosure.Button>
																			<Disclosure.Panel
																				className="px-4 pt-4 pb-2 text-sm text-gray-500">
																				<pre>Collez le code MyAiChat ci-dessus dans votre page.</pre>
																				<pre
																					className="mb-4">{"Vous pouvez l'ajouter dans la section de l'en-tête / head  HTML."}</pre>
																				<code>
																					{"If the chatbot is not showing, try to reset your cache. You can also contact our support team."}
																				</code>
																			</Disclosure.Panel>
																		</>
																	)}
																</Disclosure>
															</div>
															<div className="mb-4 mt-4">
																<div
																	className="flex p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50"
																	role="alert">
																	<svg aria-hidden="true"
																			 className="flex-shrink-0 inline w-5 h-5 mr-3"
																			 fill="currentColor"
																			 viewBox="0 0 20 20"
																			 xmlns="http://www.w3.org/2000/svg">
																		<path fill-rule="evenodd"
																					d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
																					clip-rule="evenodd"></path>
																	</svg>
																	<span className="sr-only">Info</span>
																	<div>
																		<span className="font-medium">Attention !</span>
																		{"Si vous avez besoin d'aide, veuillez nous contacter à l'adresse suivante"}
																		<b className="font-medium">contact@myaichat.io</b>
																	</div>
																</div>
															</div>
														</Tab.Panel>
														<Tab.Panel className="bg-white rounded-lg md:p-8">
															<button onClick={openModalShopify}
																			className="inline-flex items-center rounded-md mb-2 px-3 py-2 text-[0.675rem] font-semibold text-black shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
																<Image src={Shopify} width="15" height="15" alt={''}
																			 className="m-1"/>
																Instructions Shopify
															</button>
															<div className="mb-4 mt-4">
																<Disclosure>
																	{({open}) => (
																		<>
																			<Disclosure.Button
																				className="flex w-full justify-between rounded-lg bg-gray-50 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-indigo-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
																				<span>Copier le code suivant</span>
																				<AiOutlineDown
																					className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-indigo-600`}/>
																			</Disclosure.Button>
																			<Disclosure.Panel
																				className="px-4 pt-4 pb-2 text-sm text-gray-500">
																				<code>
																					{' If kljlkjskskdskjdk' + '<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>'}
																				</code>

																			</Disclosure.Panel>
																		</>
																	)}
																</Disclosure>
															</div>
															<div className="mb-4 mt-4">
																<Disclosure>
																	{({open}) => (
																		<>
																			<Disclosure.Button
																				className="flex w-full justify-between rounded-lg bg-gray-50 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-indigo-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
																				<span>{"Allez dans les paramètres > Checkout Statut de la page de commande"}</span>
																				<AiOutlineDown
																					className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-indigo-600`}/>
																			</Disclosure.Button>
																			<Disclosure.Panel
																				className="px-4 pt-4 pb-2 text-sm text-gray-500">
																				<pre>{'Collez le code MyAiChat dans "Script supplémentaire".'}</pre>
																			</Disclosure.Panel>
																		</>
																	)}
																</Disclosure>
															</div>
															<div className="mb-4 mt-4">
																<div
																	className="flex p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50"
																	role="alert">
																	<svg aria-hidden="true"
																			 className="flex-shrink-0 inline w-5 h-5 mr-3"
																			 fill="currentColor"
																			 viewBox="0 0 20 20"
																			 xmlns="http://www.w3.org/2000/svg">
																		<path fill-rule="evenodd"
																					d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
																					clip-rule="evenodd"></path>
																	</svg>
																	<span className="sr-only">Info</span>
																	<div>
																		<span className="font-medium">Attention !</span>
																		{"Si vous avez besoin d'aide, veuillez nous contacter à l'adresse suivante"}
																		<b className="font-medium">contact@myaichat.io</b>
																	</div>
																</div>
															</div>
														</Tab.Panel>
														<Tab.Panel className="bg-white rounded-lg md:p-8">Content
															3</Tab.Panel>
													</Tab.Panels>
												</div>
											</Tab.Group>
										</div>
									</div>
								)}
							</div>
							<Modal isOpen={isOpenWidget} closeModal={closeModalWidget}>
								<div
									className=" max-w-xl px-8 py-8 m-20 overflow-hidden bg-white rounded-lg shadow-xl 2xl:max-w-2xl">
									<div onClick={closeModalWidget} className="flex justify-start space-x-4">
										<button className="text-gray-600 focus:outline-none hover:text-gray-700">
											<AiOutlineCloseCircle/>
										</button>
									</div>
									<div className="flex flex-wrap mt-4">
										<div className="w-full text-left px-4"><span
											className="text-[20px] text-center font-medium leading-6 text-gray-900">{"Ces instructions s'adressent uniquement aux utilisateurs de Shopify"}</span>
											<p className="mb-2 mt-6">
												1. Copiez le code suivant
											</p>
											<code>
												zazoazkazljzlajzlazjalzjal
											</code>

											<p className="mb-2 mt-6">
												{"2. Allez dans shopify > Theme."}
											</p>
											<Image className="m-auto pt-3 mb-8" src={Theme} alt={''} width={300}
														 height={250}/>
										</div>
										<div className="w-full text-left px-4">
											<p className="mb-2 mt-2">
												{"3. Cliquez sur \"Code\"."}
											</p>
											<Image className="m-auto pt-3 mb-8" src={Edit} alt={''} width={300}
														 height={250}/>
										</div>
										<div className="w-full text-left px-4">
											<p className="mb-2">
												{"4. Ouvrez le fichier 'theme.liquid'"}
											</p>
											<code className="mt-4">
												{"Collez le code entre les balises <head>MyAichat Script </head>"}
											</code>
											<Image className="m-auto pt-3" src={Liquid} alt={''} width={300}
														 height={250}/>
										</div>
									</div>
								</div>
							</Modal>
							<Modal isOpen={isOpenShopify} closeModal={closeModalShopify}>
								<div
									className=" max-w-xl px-8 py-8 m-20 overflow-hidden bg-white rounded-lg shadow-xl 2xl:max-w-2xl">
									<div onClick={closeModalWidget} className="flex justify-start space-x-4">
										<button className="text-gray-600 focus:outline-none hover:text-gray-700">
											<AiOutlineCloseCircle/>
										</button>
									</div>
									<div className="flex flex-wrap mt-4">
										<div className="w-full text-left px-4">
										<span className="text-[20px] text-center font-medium leading-6 text-gray-900">
                       {"Ces instructions s'adressent uniquement aux utilisateurs de Shopify"}
                    </span>
											<p className="mb-2 mt-6">
												1. Copiez le code suivant
											</p>
											<code>
												zazoazkazljzlajzlazjalzjal
											</code>

											<p className="mb-2 mt-6">
												{"2. Allez dans shopify > parametres."}
											</p>
											<Image className="m-auto pt-3 mb-8" src={Parametre} alt={''} width={300}
														 height={250}/>
										</div>
										<div className="w-full text-left px-4">
											<p className="mb-2 mt-2">
												{"3. Cliquez sur Page de paiement."}
											</p>
											<Image className="m-auto pt-3 mb-8" src={PaiementPage} alt={''} width={300}
														 height={250}/>
										</div>
										<div className="w-full text-left px-4">
											<p className="mb-2">
												{"4. Faites défiler la page jusqu'à ce que vous trouviez l'état de la page \"page de statut de commande\"."}
											</p>
											<code className="mt-4">
												{"Collez le code dans Scripts supplémentaires et clique sur sauvegarder"}
											</code>
											<Image className="m-auto pt-3" src={Commande} alt="" width={300}
														 height={250}/>
										</div>
									</div>
								</div>
							</Modal>
						</>
					)
				}
			</>
		</LayoutCustom>
	)
}

export default Page