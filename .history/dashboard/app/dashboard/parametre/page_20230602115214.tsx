"use client"

import React, { Fragment, useEffect, useState } from "react";
import LayoutCustom from "@/layouts/layoutCustom";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { Dialog, Transition } from '@headlessui/react';
import { useAuth } from "@/context/AuthContext";

const Page = () => {
	const { user } = useAuth();

	const [isOpenVisualiser, setIsOpenVisualiser] = useState(false);
	const [isOpenModifier, setIsOpenModifier] = useState(false);
	const [posts, setPosts] = useState<any>(null);

	const openModalVisualiser = () => setIsOpenVisualiser(true);
	const closeModalVisualiser = () => setIsOpenVisualiser(false);
	const openModalModifier = () => setIsOpenModifier(true);
	const closeModalModifier = () => setIsOpenModifier(false);

	return (
		<LayoutCustom>
			<div className="w-full overflow-y-auto">
				<div className="mt-[2%] w-full p-4 text-center bg-indigo-200  rounded-lg shadow sm:p-8">
					<div className="flex items-center justify-between border-b border-gray-200">
						<span className="font-bold text-gray-900">Parametres de mes boutiques</span>
					</div>
					<div className="flex justify-between gap-8 p-6">
						<table className="table w-full text-gray-400 border-separate space-y-6 text-sm">
							<thead className="text-white mt-[2%] bg-indigo-200 rounded-lg">
							<tr className="bg-indigo-600">
								<th className="p-3">Boutique</th>
								<th className="p-3">Contenu</th>
								<th className="p-3">Action</th>
							</tr>
							</thead>
							<tbody className="mt-[2%] bg-white">
							{
								posts && Array(posts.data).map((post: any) => {
									return (
										<>
											<tr className="bg-white">
												<td className="p-3">
													<div className="m-auto">
														<dd className="text-gray-500 text-[0.775rem]">myshootbox.com</dd>
													</div>
												</td>
												<td className="flex items-center justify-center p-3">
													<p
														className="text-gray-500 text-[0.775rem] overflow-hidden overflow-ellipsis whitespace-nowrap w-44 text-center">
														{post.content}
													</p>
												</td>
												<td className="p-3 ">
													<button onClick={openModalVisualiser}
																	className="mx-2 inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-[0.675rem] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
														<AiOutlineEye className="-ml-0.5 mr-1.5 h-5 w-5"/>
														Visualiser
													</button>
													<Transition appear show={isOpenVisualiser} as={Fragment}>
														<Dialog as="div" className="relative z-10" onClose={closeModalVisualiser}>
															<Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0"
																								enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100"
																								leaveTo="opacity-0">
																<div className="fixed inset-0 bg-black bg-opacity-25"/>
															</Transition.Child>
															<div className="fixed inset-0 overflow-y-auto">
																<div className="flex min-h-full items-center justify-center p-4 text-center">
																	<Transition.Child as={Fragment} enter="ease-out duration-300"
																										enterFrom="opacity-0 scale-95"
																										enterTo="opacity-100 scale-100" leave="ease-in duration-200"
																										leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
																		<Dialog.Panel
																			className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
																			<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
																				Contenu
																			</Dialog.Title>
																			<div className="mt-2 overflow-auto max-h-[50vh]">
																				<p className="text-sm text-gray-500"> {post.content} </p>
																			</div>
																			<div className="mt-4">
																				<button type="button"
																								className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
																								onClick={closeModalVisualiser}>
																					Fermer
																				</button>
																			</div>
																		</Dialog.Panel>
																	</Transition.Child>
																</div>
															</div>
														</Dialog>
													</Transition>
													<button onClick={openModalModifier}
																	className="mx-2 inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-[0.675rem] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
														<AiOutlineEdit className="-ml-0.5 mr-1.5 h-5 w-5"/>
														Modifier
													</button>
													<Transition appear show={isOpenModifier} as={Fragment}>
														<Dialog as="div" className="relative z-10" onClose={closeModalModifier}>
															<Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0"
																								enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100"
																								leaveTo="opacity-0">
																<div className="fixed inset-0 bg-black bg-opacity-25"/>
															</Transition.Child>
															<div className="fixed inset-0 overflow-y-auto">
																<form
																			className="flex min-h-full items-center justify-center p-4 text-center">
																	<Transition.Child as={Fragment} enter="ease-out duration-300"
																										enterFrom="opacity-0 scale-95"
																										enterTo="opacity-100 scale-100" leave="ease-in duration-200"
																										leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
																		<Dialog.Panel
																			className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
																			<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
																				Contenu
																			</Dialog.Title>
																			<div className="mt-2 overflow-auto max-h-[50vh]">
																<textarea className="text-sm text-black w-full border-2 border-black"
																					placeholder="Décrivez votre boutique pour le bot afin qu'il puisse comprendre et communiquer efficacemente. re emplacement, vos horaires d'ouverture, vos politiques de livraison, et tout autre aspect de votre entreprise que vous jugez important. Plus le bot comprendra votre entreprise, plus il sera capable de fournir des informations précises et utiles à vos clients."
																					rows={8}
																					name="content"></textarea>
																			</div>
																			<div className="mt-4 justify-between">
																				<button type="button"
																								className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
																								onClick={closeModalVisualiser}>
																					Fermer
																				</button>
																				<button
																					type="submit"
																					className="mx-2 inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
																				>
																					Enregistrer
																				</button>
																			</div>
																		</Dialog.Panel>
																	</Transition.Child>
																</form>
															</div>
														</Dialog>
													</Transition>
													<button
														className=" ml-2 inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-[0.675rem] font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
														<AiOutlineDelete
															className="-ml-0.5 mr-1.5 h-5 w-5 "/>
														Supprimer
													</button>
												</td>
											</tr>
										</>
									)
								})
							}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</LayoutCustom>
	)
}

export default Page