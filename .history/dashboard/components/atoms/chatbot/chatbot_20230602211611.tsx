"use client"


import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineFolderAdd, AiOutlinePlus } from "react-icons/ai";

import Modal from "@/components/atoms/modal/modal";
import Image from "next/image";
import Shopify from "@/public/shopify.png";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/config/api";

function getCookie(name: string | any[]) {
	const cookies = document.cookie.split(';');
	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i].trim();
		if (cookie.startsWith(name + '=')) {
			return cookie.substring(name.length + 1);
		}
	}
	return '';
}

const Chatbot = (Props: { setIsOpenMyChatBots: (arg0: boolean) => void; }) => {

	const [isOpen, setIsOpen] = useState(false);
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	const scrapeMutation = useMutation((data: any) =>
			api.post('products/scrape', data),
		{
			onSuccess: (data) => {
				console.log('data', data)
				Props.setIsOpenMyChatBots(false)
			},
			onError: (error): void => {
				console.log('error', error);
			},
		}
	);

	const shopMutation = useMutation((data: any) =>
			api.post('shopify/shopify-store', data),
		{
			onSuccess: (data) => {
				console.log('data', data)
				//Props.setIsOpenMyChatBots(false)
			},
			onError: (error): void => {
				console.log('error', error);
			},
		}
	);

	const handleSubmit = (event: any) => {
		event.preventDefault();
		const { url } = event.target.elements;
		const userId: any = +getCookie('userId');
		const requestData = {
			url: url.value,
			user_id: userId,
		};
		console.log('data', requestData);
		scrapeMutation.mutateAsync(requestData);
		handleSubmitShop(requestData);
	};

	const handleSubmitShop = (data: any) => {
		shopMutation.mutateAsync(data);
	};

	return (
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
				<div className=" max-w-xl px-20 py-8 m-20 overflow-hidden bg-white rounded-lg shadow-xl 2xl:max-w-2xl">
					<div className="flex justify-start space-x-4">
						<button onClick={closeModal}
										className="text-gray-600 focus:outline-none hover:text-gray-700">
							<AiOutlineCloseCircle/>
						</button>
					</div>
					<form className="mx-auto" onSubmit={handleSubmit}>
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
											<input placeholder="myshop" name="url"
														 className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
														 type="url"/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full mt-10 justify-end flex">
							<button
								type="submit"
								className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
								Connecter
							</button>
						</div>
					</form>
				</div>
			</Modal>
		</>
	)
}
export default Chatbot;

