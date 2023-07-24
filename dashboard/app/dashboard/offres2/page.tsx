"use client"

import React, { useState } from "react";
import LayoutCustom from "@/layouts/layoutCustom";
import {Tab} from "@headlessui/react";
import {useAuth} from "@/context/AuthContext";
import {useMutation, useQuery} from "@tanstack/react-query";
import {api} from "@/config/api";

const Page = () => {
    const {isCurrentPlan, setIsCurrentPlan, paymentInfo} = useAuth();

    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabClick = (index: number) => setSelectedTab(index);

    const {data: plans} = useQuery(['plans'], () => api.get(`plans`));

    const handlePlanSubscribeAsync = useMutation(
        (planId: number) => api.post(`checkout/${planId}`),
        {
            onError: (error): void => {
                console.error(error);
            },
        }
    );

    const handlePlanSubscribe = async (planId: number) => {
        try {
            // Mettre le plan en chargement
            setIsLoading((prevLoading) => ({
                ...prevLoading,
                [planId]: true,
            }));

            const data: any = await handlePlanSubscribeAsync.mutateAsync(planId);

            // Redirection vers l'URL de paiement
            window.location.replace(data.data.url);
        } catch (error) {
            console.error(error);
        } finally {
            // Arrêter le chargement du plan
            setIsLoading((prevLoading) => ({
                ...prevLoading,
                [planId]: false,
            }));
        }
    };

    const [isLoading, setIsLoading] = useState<{ [key: number]: boolean }>({});

    const Starter = plans?.data.data.find((plan: any) => plan.id === 1);
    const Growth = plans?.data.data.find((plan: any) => plan.id === 2);
    const Pro = plans?.data.data.find((plan: any) => plan.id === 3);

    const StarterPlus = plans?.data.data.find((plan: any) => plan.id === 4);
    const GrowthPlus = plans?.data.data.find((plan: any) => plan.id === 5);
    const ProPlus = plans?.data.data.find((plan: any) => plan.id === 6);

    const tabClasses = (index: number) =>
        `w-[50%] p-1 rounded-lg focus:outline-none ${index === selectedTab ? 'bg-indigo-100 ' : 'bg-gray-50'}`

    return (
        <LayoutCustom>
            <div className="sm:p-8 w-full overflow-y-auto mt-[2%] p-4 rounded-lg bg-white">
                <span className="font-bold text-gray-900">{"Plans"}</span>
                <p className="text-xs font-normal text-gray-400 mt-2">{"Change your current worspace plans"}</p>
                <div className="mt-8">
                    <dl className="mt-5 grid grid-cols-1 md:grid-cols-2 divide-y divide-gray-200 overflow-hidden shadow md:divide-x md:divide-y-0">
                        <Tab.Group>
                            <div className="px-6 py-5 sm:p-8">
                                <Tab.List>
                                    <div className="w-[70%]">
                                        <Tab onClick={() => handleTabClick(0)} className={tabClasses(0)}>
                                            <dt className="text-xs font-medium text-gray-600 mt-1">Monthly</dt>
                                        </Tab>
                                        <Tab onClick={() => handleTabClick(1)} className={tabClasses(1)}>
                                            <dt className="text-xs font-medium text-gray-600 mt-1">Yearly</dt>
                                        </Tab>
                                    </div>
                                </Tab.List>
                            </div>
                            <Tab.Panels>
                                <Tab.Panel>
                                    <div className="grid grid-cols-1 md:grid-cols-3">
                                        <div className="px-6 py-5 sm:p-8">
                                            <div className="flex items-baseline gap-x-1">
                                                <dt className="text-lg font-semibold  text-gray-800">Starter</dt>
                                            </div>
                                            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                                                <div className="flex items-baseline text-2xl font-semibold text-gray-600">
                                                    €39
                                                </div>
                                            </dd>
                                            <dt className="text-xs font-normal text-gray-400 mt-1">Per user/per month</dt>
                                            <dt className="text-xs font-normal text-gray-400">Billed annually</dt>
                                            <button data-loading-text="En cours..." type="button" className=" w-full h-10 px-4 mt-3 rounded shadow-md focus:shadow-outline focus:outline-none bg-indigo-50 hover:bg-indigo-100">
                                                <span className=" text-sm font-medium text-indigo-500">{"Downgrade"}</span>
                                            </button>
                                            <div className="text-sm text-indigo-500 font-semibold mt-2 text-center">
                                                {"7 jours d'essai gratuit"}
                                            </div>
                                        </div>
                                        <div className="px-6 py-5 sm:p-8">
                                            <div className="flex items-baseline gap-x-1">
                                                <dt className="text-lg font-semibold  text-gray-800">Growth</dt>
                                            </div>
                                            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                                                <div className="flex items-baseline text-2xl font-semibold text-gray-600">
                                                    €79
                                                </div>
                                            </dd>
                                            <dt className="text-xs font-normal text-gray-400 mt-1">Per user/per month</dt>
                                            <dt className="text-xs font-normal text-gray-400">Billed annually</dt>
                                            <button data-loading-text="En cours..." type="button" className=" w-full h-10 px-4 mt-3 rounded shadow-md focus:shadow-outline focus:outline-none bg-gray-50 hover:bg-gray-100">
                                                <span className=" text-sm font-medium text-gray-500">{"Current Plan"}</span>
                                            </button>
                                            <div className="text-sm text-indigo-500 font-semibold mt-2 text-center">
                                                {"7 jours d'essai gratuit"}
                                            </div>
                                        </div>
                                        <div className="px-6 py-5 sm:p-8">
                                            <dt className="text-lg font-semibold  text-gray-800">Pro</dt>
                                            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                                                <div className="flex items-baseline text-2xl font-semibold text-gray-600 mb-2">
                                                    {"Let's Talk"}
                                                </div>
                                            </dd>
                                            <button data-loading-text="En cours..." type="button" className=" w-full h-10 px-4 mt-10 rounded shadow-md focus:shadow-outline focus:outline-none bg-black hover:bg-gray-700">
                                                <span className="text-sm font-medium text-white">{"Contact Sales"}</span>
                                            </button>
                                        </div>
                                    </div>
                                </Tab.Panel>
                                <Tab.Panel>
                                    <div className="grid grid-cols-1 md:grid-cols-3">
                                        <div className="px-6 py-5 sm:p-8">
                                            <div className="flex items-baseline gap-x-1">
                                                <dt className="text-lg font-semibold  text-gray-800">Starter</dt>
                                                <div className="bg-green-100 p-[0.2rem] ">
                                                    <span className="text-sm text-center font-medium tracking-tight text-green-600">20% off</span>
                                                </div>
                                            </div>
                                            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                                                <div className="flex items-baseline text-2xl font-semibold text-gray-600">
                                                    €29
                                                </div>
                                            </dd>
                                            <dt className="text-xs font-normal text-gray-400 mt-1">Per user/per month</dt>
                                            <dt className="text-xs font-normal text-gray-400">Billed annually</dt>
                                            <button data-loading-text="En cours..." type="button" className=" w-full h-10 px-4 mt-3 rounded shadow-md focus:shadow-outline focus:outline-none bg-indigo-50 hover:bg-indigo-100">
                                                <span className=" text-sm font-medium text-indigo-500">{"Downgrade"}</span>
                                            </button>
                                            <div className="text-sm text-indigo-500 font-semibold mt-2 text-center">
                                                {"7 jours d'essai gratuit"}
                                            </div>
                                        </div>
                                        <div className="px-6 py-5 sm:p-8">
                                            <div className="flex items-baseline gap-x-1">
                                                <dt className="text-lg font-semibold  text-gray-800">Growth</dt>
                                                <div className="bg-green-100 p-[0.2rem] ">
                                                    <span className="text-sm text-center font-medium tracking-tight text-green-600">20% off</span>
                                                </div>
                                            </div>
                                            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                                                <div className="flex items-baseline text-2xl font-semibold text-gray-600">
                                                    €59
                                                </div>
                                            </dd>
                                                <dt className="text-xs font-normal text-gray-400 mt-1">Per user/per month</dt>
                                                <dt className="text-xs font-normal text-gray-400">Billed annually</dt>
                                            <button data-loading-text="En cours..." type="button" className=" w-full h-10 px-4 mt-3 rounded shadow-md focus:shadow-outline focus:outline-none bg-gray-50 hover:bg-gray-100">
                                                <span className=" text-sm font-medium text-gray-500">{"Current Plan"}</span>
                                            </button>
                                            <div className="text-sm text-indigo-500 font-semibold mt-2 text-center">
                                                {"7 jours d'essai gratuit"}
                                            </div>
                                        </div>
                                        <div className="px-6 py-5 sm:p-8">
                                            <dt className="text-lg font-semibold  text-gray-800">Pro</dt>
                                            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                                                <div className="flex items-baseline text-2xl font-semibold text-gray-600 mb-2">
                                                    {"Let's Talk"}
                                                </div>
                                            </dd>
                                            <button data-loading-text="En cours..." type="button" className=" w-full h-10 px-4 mt-10 rounded shadow-md focus:shadow-outline focus:outline-none bg-black hover:bg-gray-700">
                                                <span className="text-sm font-medium text-white">{"Contact Sales"}</span>
                                            </button>
                                        </div>
                                    </div>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </dl>
                </div>
                <div className="mt-8">
                    <dl className="mt-5 grid grid-cols-1 md:grid-cols-2 divide-y divide-gray-200 overflow-hidden shadow md:divide-x md:divide-y-0">
                        <Tab.Group>
                            <div className="px-6 py-5 sm:p-8">
                                <Tab.List>
                                    <div className="w-[100%]">
                                        <Tab>
                                            <dt className="text-sm font-bold text-gray-600">Caractéristiques des offres</dt>
                                        </Tab>
                                    </div>
                                </Tab.List>
                            </div>
                            <Tab.Panels>
                                <Tab.Panel>
                                    <div className="grid grid-cols-1 md:grid-cols-3">
                                        <div className="px-6 py-5 sm:p-8 border border-gray-200">
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">500 réponses/mois</dt>
                                            </div>
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">1 000 pages web</dt>
                                            </div>

                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">2 Chatbots</dt>
                                            </div>
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">Support standard</dt>
                                            </div>

                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">{"Formation à l'IA"}</dt>
                                            </div>
                                        </div>
                                        <div className="px-6 py-5 sm:p-8 border border-gray-200">
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">1 500 réponses/mois</dt>
                                            </div>
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">5 000 pages web</dt>
                                            </div>

                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">5 Chatbots</dt>
                                            </div>
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">Membres illimités</dt>
                                            </div>

                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">Support prioritaire</dt>
                                            </div>

                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">{"Formation à l'IA"}</dt>
                                            </div>
                                        </div>
                                        <div className="px-6 py-5 sm:p-8 border border-gray-200">
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">3 000 réponses/mois</dt>
                                            </div>
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">15 000 pages web</dt>
                                            </div>

                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">10 Chatbots</dt>
                                            </div>
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">Membres illimités</dt>
                                            </div>

                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">Support prioritaire</dt>
                                            </div>

                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">{"Formation à l'IA"}</dt>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </dl>
                </div>



            </div>
        </LayoutCustom>
    )
}

export default Page
