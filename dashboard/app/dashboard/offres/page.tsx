"use client"

import React, { useEffect, useState } from "react";
import LayoutCustom from "@/layouts/layoutCustom";
import { Tab } from '@headlessui/react';
import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "@/config/api";

const Page = () => {
	const [selectedTab, setSelectedTab] = useState(0);
	const [isCurrentPlan, setIsCurrentPlan] = useState(false);


	const handleTabClick = (index: number) => setSelectedTab(index);

	const {
		data: plans,
	} = useQuery(
		['plans'],
		() => api.get(`plans`),
	);

	const Starter = plans && plans.data.data.find((plan: any) => plan.id === 1);
	const Growth = plans && plans.data.data.find((plan: any) => plan.id === 2);
	const Pro = plans && plans.data.data.find((plan: any) => plan.id === 3);


	const handlePlanMutation = useMutation(
		(planId: number) => api.post(`checkout/${planId}`),
		{
			onSuccess: (data) => {
				window.location.replace(data.data.url);
			},
			onError: (error): void => {
				console.log("error", error);
			},
		}
	);

	const check_payment = () => {
		api.get(`check-payment`)
			.then((res) => {
				if (res.data.payment_status === "paid") {
					setIsCurrentPlan(true);
				} else {
					setIsCurrentPlan(false);
				}
			})
			.catch((err) => {
				console.log("err", err);
			})
	}

	useEffect(() => {
		check_payment();
	}, [isCurrentPlan]);

	const tabClasses = (index: number) =>
		`inline-block w-full p-4 rounded-tl-lg focus:outline-none ${index === selectedTab ? 'bg-indigo-100' : 'bg-gray-50'}`

	return (
		<LayoutCustom>
			{isCurrentPlan && isCurrentPlan ? (
				<div className="p-20 mx-auto w-full overflow-y-auto">
					<h3 className="text-base font-semibold leading-6 text-gray-900">{"Abonnement et facturation"}</h3>
					<dl
						className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
						<div className="px-6 py-5 sm:p-8">
							<dt className="text-xs font-normal text-gray-400">{"Abonnement"}</dt>
							<dt className="text-xl font-semibold text-gray-900">Starter Business</dt>
							<dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
							</dd>
						</div>
						<div className="px-6 py-5 sm:p-8">
							<dt className="text-xs font-normal text-gray-400">{"Payement"}</dt>
							<div className="flex items-center">
								<dt className="text-xl font-semibold text-gray-900">€39</dt>
								<dt className="text-xs font-normal text-gray-400 mt-1 ml-1">/mois</dt>
							</div>
						</div>
						<div className="px-6 py-5 sm:p-8 flex items-center justify-center gap-2">
							<button className="text-xs font-normal text-gray-400">{"Annuler l'abonnement"}</button>
							<button onClick={() => setIsCurrentPlan(true)} className="text-xs font-normal text-indigo-600">Upgrade
							</button>
						</div>
					</dl>
				</div>
			) : (
				<Tab.Group>
					<Tab.List
						className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex">
						<Tab onClick={() => handleTabClick(0)}
								 className={tabClasses(0)}>
							Mois
						</Tab>
						<Tab onClick={() => handleTabClick(1)}
								 className={tabClasses(1)}>
							Années
						</Tab>
					</Tab.List>
					<Tab.Panels className="border-t border-gray-200 ">
						<Tab.Panel className="bg-white rounded-lg md:p-2">
							<div className="pb-10 w-full overflow-y-auto">
								<div className="mx-auto max-w-7xl px-6 lg:px-8">
									<div
										className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">

										<div
											className="bg-white max-w-[268px] rounded-3xl p-8 ring-1 ring-gray-200 hover:ring-indigo-600 hover:ring-2">
											<div className="flex items-center justify-between gap-x-4">
												<h3 id="tier-startup"
														className="text-lg font-semibold leading-8 text-indigo-600">{Starter && Starter.name}</h3>
											</div>
											<p className="mt-6 flex items-baseline gap-x-1">
												<span
													className="text-4xl font-bold tracking-tight text-gray-900">€{Starter && Starter.price}</span>
												<span className="text-sm font-semibold leading-6 text-gray-600">/mois</span>
											</p>
											<button
												onClick={() => handlePlanMutation.mutate(Starter && Starter.id)}
												type="button"
												className="inline-flex items-center justify-center w-full h-12 px-4 mt-6 font-medium tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none text-white bg-black hover:bg-gray-800"
											>
												<span>{"S'abonner"}</span>
											</button>
											<div className="text-sm text-indigo-500 font-medium mt-1 text-center">
												{"7 jours d'essai gratuit"}
											</div>
											<ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													500 réponses/mois
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													1 000 pages web
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													2 Chatbots
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													Support standard
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													{"Formation à l'IA"}
												</li>
											</ul>
										</div>
										<div className="max-w-[268px] bg-[#7a5eea] rounded-3xl p-8 ring-indigo-500 ring-2">
											<div className="flex items-center justify-between gap-x-4">
												<h3 id="tier-startup"
														className="text-lg font-semibold leading-8 text-white">{Growth && Growth.name}</h3>
												<p
													className="rounded-full bg-indigo-100/10 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
													Populaire
												</p>
											</div>
											<p className="mt-6 flex items-baseline gap-x-1">
												<span className="text-4xl font-bold tracking-tight text-white">€{Growth && Growth.price}</span>
												<span className="text-sm font-semibold leading-6 text-white">/mois</span>
											</p>
											<button data-loading-text="En cours..."
															type="button"
															onClick={() => handlePlanMutation.mutate(Growth && Growth.id)}
															className="mb-1 inline-flex items-center justify-center w-full h-12 px-4 mt-6 font-medium tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none text-white bg-black hover:bg-gray-800"
											>
												<span>{"S'abonner"}</span>
											</button>
											<div className="text-sm text-white font-medium mt-1 text-center">
												{"7 jours d'essai gratuit"}
											</div>
											<ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-white">
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-white" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													1 500 réponses/mois
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-white" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													5 000 pages web
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-white" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													5 Chatbots
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-white" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													Membres illimités
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-white" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													Support prioritaire
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-white" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													{"Formation à l'IA"}
												</li>
											</ul>
										</div>
										<div
											className="max-w-[268px] rounded-3xl p-8 ring-gray-200 bg-white ring-1 hover:ring-indigo-600 hover:ring-2">
											<div className="flex items-center justify-between gap-x-4">
												<h3 id="tier-startup"
														className="text-lg font-semibold leading-8 text-indigo-600">{Pro && Pro.name}</h3>
											</div>
											<p className="mt-6 flex items-baseline gap-x-1">
												<span className="text-4xl font-bold tracking-tight text-gray-900">€{Pro && Pro.price}</span>
												<span className="text-sm font-semibold leading-6 text-gray-600">/mois</span>
											</p>
											<button data-loading-text="En cours..."
															type="button"
															onClick={() => handlePlanMutation.mutate(Pro && Pro.id)}
															className="mb-1 inline-flex items-center justify-center w-full h-12 px-4 mt-6 font-medium tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none text-white bg-black hover:bg-gray-800"
											>
												<span>{"S'abonner"}</span>
											</button>
											<div className="text-sm text-indigo-500 font-medium mt-1 text-center">
												{"7 jours d'essai gratuit"}
											</div>
											<ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													3 000 réponses/mois
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													15 000 pages web
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													10 Chatbots
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													Membres illimités
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													Support prioritaire
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													{"Formation à l'IA"}
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</Tab.Panel>
						<Tab.Panel className="bg-white rounded-lg md:p-2">
							<div className="pb-6 w-full overflow-y-auto">
								<div className="mx-auto max-w-7xl px-4 lg:px-8">
									<div
										className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
										<div
											className=" bg-white max-w-[268px] rounded-3xl p-8 ring-1 ring-gray-200 hover:ring-indigo-600 hover:ring-2">
											<div className="flex items-center justify-between gap-x-4">
												<h3 id="tier-startup"
														className="text-lg font-semibold leading-8 text-indigo-600">Starter</h3>
											</div>
											<p className="mt-6 flex items-baseline gap-x-1">
												<span className="text-4xl font-bold tracking-tight text-gray-900">€29</span>
												<span className="text-sm font-semibold leading-6 text-gray-600">/mois</span>
											</p>
											<p className="flex items-baseline gap-x-1">
												<span className="text-xs font-semibold leading-6 text-gray-600">total : €348</span>
											</p>
											<button data-controller="loading-button"
															className="inline-flex items-center justify-center w-full h-12 px-4 mt-6 font-medium tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none text-white bg-black hover:bg-gray-800"
															type="submit">
												<span>{"S'abonner"}</span>
											</button>
											<div className="text-sm text-indigo-500 font-medium mt-1 text-center">
												{"7 jours d'essai gratuit"}
											</div>
											<ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													500 réponses/mois
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													1 000 pages web
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													2 Chatbots
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													Support standard
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													{"Formation à l'IA"}
												</li>
											</ul>
										</div>
										<div className="max-w-[268px] bg-[#7a5eea] rounded-3xl p-8 ring-indigo-500 ring-2">
											<div className="flex items-center justify-between gap-x-4">
												<h3 id="tier-startup"
														className="text-lg font-semibold leading-8 text-white"> Growth </h3>
												<p
													className="rounded-full bg-indigo-100/10 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
													Populaire
												</p>
											</div>
											<p className="mt-6 flex items-baseline gap-x-1">
												<span className="text-4xl font-bold tracking-tight text-white">€59</span>
												<span className="text-sm font-semibold leading-6 text-white">/mois</span>
											</p>
											<p className="flex items-baseline gap-x-1">
												<span className="text-xs font-semibold leading-6 text-white">total : €708</span>
											</p>
											<button data-controller="loading-button"
															className="mb-1 inline-flex items-center justify-center w-full h-12 px-4 mt-6 font-medium tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none text-white bg-black hover:bg-gray-800"
															type="submit">
												<span>{"S'abonner"}</span>
											</button>
											<div className="text-sm text-white font-medium mt-1 text-center">
												{"7 jours d'essai gratuit"}
											</div>
											<ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-white">
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-white" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													1 500 réponses/mois
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-white" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													5 000 pages web
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-white" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													5 Chatbots
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-white" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													Membres illimités
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-white" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													Support prioritaire
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-white" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													{"Formation à l'IA"}
												</li>
											</ul>
										</div>
										<div
											className="max-w-[268px] rounded-3xl p-8 ring-gray-200 bg-white ring-1 hover:ring-indigo-600 hover:ring-2">
											<div className="flex items-center justify-between gap-x-4">
												<h3 id="tier-startup"
														className="text-lg font-semibold leading-8 text-indigo-600">Pro</h3>
											</div>
											<p className="mt-6 flex items-baseline gap-x-1">
												<span className="text-4xl font-bold tracking-tight text-gray-900">€69</span>
												<span className="text-sm font-semibold leading-6 text-gray-600">/mois</span>
											</p>
											<p className="flex items-baseline gap-x-1">
												<span className="text-xs font-semibold leading-6 text-gray-600">total : €828</span>
											</p>
											<button data-controller="loading-button"
															className="mb-1 inline-flex items-center justify-center w-full h-12 px-4 mt-6 font-medium tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none text-white bg-black hover:bg-gray-800"
															type="submit">
												<span>{"S'abonner"}</span>
											</button>
											<div className="text-sm text-indigo-500 font-medium mt-1 text-center">
												{"7 jours d'essai gratuit"}
											</div>
											<ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													3 000 réponses/mois
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													15 000 pages web
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													10 Chatbots
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													Membres illimités
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													Support prioritaire
												</li>
												<li className="flex gap-x-3">
													<svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
															 fill="currentColor" aria-hidden="true">
														<path fillRule="evenodd"
																	d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
																	clipRule="evenodd"></path>
													</svg>
													{"Formation à l'IA"}
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</Tab.Panel>
					</Tab.Panels>
				</Tab.Group>
			)}
		</LayoutCustom>
	)
}

export default Page
