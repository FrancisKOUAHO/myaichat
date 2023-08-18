'use client'

import {Tab} from "@headlessui/react";
import React, { useState } from "react";


const Page = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabClick = (index: number) => setSelectedTab(index);

    const tabClasses = (index: number) =>
    `w-[50%] p-1 rounded-lg focus:outline-none ${index === selectedTab ? 'bg-indigo-100' : 'bg-gray-50'}`


    return(
        <>
        <div className="bg-white h-screen">
            <div className="p-8">
                <span className="font-bold text-gray-900 text-xl">{"Préparation au démarrage"}</span>
                 <p className="text-sm font-normal text-gray-400 mt-2">{"Sélectionnez votre plan avant d'accéder au tableau de bord."}</p>    
            </div>
            <div className="flex h-100 flex-col justify-center py-12 sm:px-6 lg:p-8 p-8 bg-white ">
                <div>
                    <dl className="grid grid-cols-1 md:grid-cols-2 divide-y divide-gray-200 overflow-hidden shadow md:divide-x md:divide-y-0">
                        <Tab.Group>
                            <div>
                                <Tab.List>
                                    <div className="w-[70%]">
                                        <Tab  onClick={() => handleTabClick(0)} className={tabClasses(0)}>
                                            <dt className="text-xs font-medium text-gray-600 mt-1">Mensuellement</dt>
                                        </Tab>
                                        <Tab onClick={() => handleTabClick(1)} className={tabClasses(1)}>
                                            <dt className="text-xs font-medium text-gray-600 mt-1">Annuellement</dt>
                                        </Tab>
                                    </div>
                                </Tab.List>
                            </div>
                            <Tab.Panels>
                                <Tab.Panel>
                                    <div className="grid grid-cols-1 md:grid-cols-4">
                                        <div className="px-6 py-5 sm:p-8">
                                            <div className="flex items-baseline gap-x-1">
                                                <dt className="text-lg font-semibold  text-gray-800">Lite</dt>
                                            </div>
                                            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                                                <div className="flex items-baseline text-2xl font-semibold text-gray-600">
                                                    €15
                                                </div>
                                            </dd>
                                            <dt className="text-xs font-normal text-gray-400 mt-1">Par utilisateur/mois</dt>
                                            <button data-loading-text="En cours..." type="button" className=" w-full h-10 px-4 mt-3 rounded shadow-md focus:shadow-outline focus:outline-none bg-indigo-50 hover:bg-indigo-100">
                                                <span className=" text-sm font-medium text-indigo-500">{"S'abonner"}</span>
                                            </button>
                                            <div className="text-sm text-indigo-500 font-semibold mt-2 text-center">
                                                {"15 jours d'essai gratuit"}
                                            </div>
                                        </div>
                                        <div className="px-6 py-5 sm:p-8">
                                            <div className="flex items-baseline gap-x-1">
                                                <dt className="text-lg font-semibold  text-gray-800">Starter</dt>
                                            </div>
                                            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                                                <div className="flex items-baseline text-2xl font-semibold text-gray-600">
                                                    €39
                                                </div>
                                            </dd>
                                            <dt className="text-xs font-normal text-gray-400 mt-1">Par utilisateur/mois</dt>
                                            <button data-loading-text="En cours..." type="button" className=" w-full h-10 px-4 mt-3 rounded shadow-md focus:shadow-outline focus:outline-none bg-indigo-50 hover:bg-indigo-100">
                                                <span className=" text-sm font-medium text-indigo-500">{"S'abonner"}</span>
                                            </button>
                                            <div className="text-sm text-indigo-500 font-semibold mt-2 text-center">
                                                {"15 jours d'essai gratuit"}
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
                                            <dt className="text-xs font-normal text-gray-400 mt-1">Par utilisateur/mois</dt>
                                            {/* <button data-loading-text="En cours..." type="button" className=" w-full h-10 px-4 mt-3 rounded shadow-md focus:shadow-outline focus:outline-none bg-gray-50 hover:bg-gray-100">
                                                <span className=" text-sm font-medium text-gray-500">{"S'abonner"}</span>
                                            </button> */}
                                            <button data-loading-text="En cours..." type="button" className=" w-full h-10 px-4 mt-3 rounded shadow-md focus:shadow-outline focus:outline-none bg-indigo-50 hover:bg-indigo-100">
                                                <span className=" text-sm font-medium text-indigo-500">{"S'abonner"}</span>
                                            </button>
                                            <div className="text-sm text-indigo-500 font-semibold mt-2 text-center">
                                                {"15 jours d'essai gratuit"}
                                            </div>
                                        </div>
                                        <div className="px-6 py-5 sm:p-8">
                                            <dt className="text-lg font-semibold  text-gray-800">Pro</dt>
                                            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                                                <div className="flex items-baseline text-2xl font-semibold text-gray-600">
                                                    €99
                                                </div>
                                            </dd>
                                            <dt className="text-xs font-normal text-gray-400 mt-1">Par utilisateur/mois</dt>
                                            {/* <button data-loading-text="En cours..." type="button" className=" w-full h-10 px-4 mt-3 rounded shadow-md focus:shadow-outline focus:outline-none bg-black hover:bg-gray-700">
                                                <span className="text-sm font-medium text-white">{"S'abonner"}</span>
                                            </button> */}
                                            <button data-loading-text="En cours..." type="button" className=" w-full h-10 px-4 mt-3 rounded shadow-md focus:shadow-outline focus:outline-none bg-indigo-50 hover:bg-indigo-100">
                                                <span className=" text-sm font-medium text-indigo-500">{"S'abonner"}</span>
                                            </button>                                            
                                            <div className="text-sm text-indigo-500 font-semibold mt-2 text-center">
                                                {"15 jours d'essai gratuit"}
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Panel>
                                <Tab.Panel>
                                    <div className="grid grid-cols-1 md:grid-cols-4">
                                        <div className="px-6 py-5 sm:p-8">
                                            <div className="flex items-baseline gap-x-1">
                                                <dt className="text-lg font-semibold  text-gray-800">Lite</dt>
                                                <div className="bg-green-100 p-[0.2rem] ">
                                                    <span className="text-sm text-center font-medium tracking-tight text-green-600">25% off</span>
                                                </div>
                                            </div>
                                            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                                                <div className="flex items-baseline text-2xl font-semibold text-gray-600">
                                                    €11
                                                </div>
                                            </dd>
                                            <dt className="text-xs font-normal text-gray-400 mt-1">Par utilisateur/mois</dt>
                                            <dt className="text-xs font-normal text-gray-400">Facture annuelle €132.00</dt>
                                            <button data-loading-text="En cours..." type="button" className=" w-full h-10 px-4 mt-3 rounded shadow-md focus:shadow-outline focus:outline-none bg-indigo-50 hover:bg-indigo-100">
                                                <span className=" text-sm font-medium text-indigo-500">{"S'abonner"}</span>
                                            </button>
                                            <div className="text-sm text-indigo-500 font-semibold mt-2 text-center">
                                                {"15 jours d'essai gratuit"}
                                            </div>
                                        </div>
                                        <div className="px-6 py-5 sm:p-8">
                                            <div className="flex items-baseline gap-x-1">
                                                <dt className="text-lg font-semibold  text-gray-800">Starter</dt>
                                                <div className="bg-green-100 p-[0.2rem] ">
                                                    <span className="text-sm text-center font-medium tracking-tight text-green-600">25% off</span>
                                                </div>
                                            </div>
                                            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                                                <div className="flex items-baseline text-2xl font-semibold text-gray-600">
                                                    €29
                                                </div>
                                            </dd>
                                            <dt className="text-xs font-normal text-gray-400 mt-1">Par utilisateur/mois</dt>
                                            <dt className="text-xs font-normal text-gray-400">Facture annuelle €348.00</dt>
                                            <button data-loading-text="En cours..." type="button" className=" w-full h-10 px-4 mt-3 rounded shadow-md focus:shadow-outline focus:outline-none bg-indigo-50 hover:bg-indigo-100">
                                                <span className=" text-sm font-medium text-indigo-500">{"S'abonner"}</span>
                                            </button>
                                            <div className="text-sm text-indigo-500 font-semibold mt-2 text-center">
                                                {"15 jours d'essai gratuit"}
                                            </div>
                                        </div>
                                        <div className="px-6 py-5 sm:p-8">
                                            <div className="flex items-baseline gap-x-1">
                                                <dt className="text-lg font-semibold  text-gray-800">Growth</dt>
                                                <div className="bg-green-100 p-[0.2rem] ">
                                                    <span className="text-sm text-center font-medium tracking-tight text-green-600">25% off</span>
                                                </div>
                                            </div>
                                            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                                                <div className="flex items-baseline text-2xl font-semibold text-gray-600">
                                                    €59
                                                </div>
                                            </dd>
                                                <dt className="text-xs font-normal text-gray-400 mt-1">Par utilisateur/mois</dt>
                                                <dt className="text-xs font-normal text-gray-400">Facture annuelle €708.00</dt>
                                            {/* <button data-loading-text="En cours..." type="button" className=" w-full h-10 px-4 mt-3 rounded shadow-md focus:shadow-outline focus:outline-none bg-gray-50 hover:bg-gray-100">
                                                <span className=" text-sm font-medium text-gray-500">{"S'abonner"}</span>
                                            </button> */}
                                            <button data-loading-text="En cours..." type="button" className=" w-full h-10 px-4 mt-3 rounded shadow-md focus:shadow-outline focus:outline-none bg-indigo-50 hover:bg-indigo-100">
                                                <span className=" text-sm font-medium text-indigo-500">{"S'abonner"}</span>
                                            </button>                                            
                                            <div className="text-sm text-indigo-500 font-semibold mt-2 text-center">
                                                {"15 jours d'essai gratuit"}
                                            </div>
                                        </div>
                                        <div className="px-6 py-5 sm:p-8">
                                            <div className="flex items-baseline gap-x-1">
                                                <dt className="text-lg font-semibold  text-gray-800">Pro</dt>
                                                <div className="bg-green-100 p-[0.2rem] ">
                                                    <span className="text-sm text-center font-medium tracking-tight text-green-600">30% off</span>
                                                </div>
                                            </div>
                                            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                                                <div className="flex items-baseline text-2xl font-semibold text-gray-600">
                                                    €69
                                                </div>
                                            </dd>
                                                <dt className="text-xs font-normal text-gray-400 mt-1">Par utilisateur/mois</dt>
                                                <dt className="text-xs font-normal text-gray-400">Facture annuelle €828.00 </dt>
                                                {/* <button data-loading-text="En cours..." type="button" className=" w-full h-10 px-4 mt-3 rounded shadow-md focus:shadow-outline focus:outline-none bg-black hover:bg-gray-700">
                                                    <span className="text-sm font-medium text-white">{"S'abonner"}</span>
                                                </button> */}
                                                <button data-loading-text="En cours..." type="button" className=" w-full h-10 px-4 mt-3 rounded shadow-md focus:shadow-outline focus:outline-none bg-indigo-50 hover:bg-indigo-100">
                                                    <span className=" text-sm font-medium text-indigo-500">{"S'abonner"}</span>
                                                </button>
                                            <div className="text-sm text-indigo-500 font-semibold mt-2 text-center">
                                                {"15 jours d'essai gratuit"}
                                            </div>
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
                                    <div className="grid grid-cols-1 md:grid-cols-4">
                                        <div className="px-6 py-5 sm:p-8 border border-gray-200">
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">150 réponses/mois</dt>
                                            </div>
                                            {/* <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">500 pages web</dt>
                                            </div>  */}
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">1 Chatbot</dt>
                                            </div>
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">1 Membre</dt>
                                            </div>
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">Support Standard</dt>
                                            </div>
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">{"Formation à l'IA"}</dt>
                                            </div>
                                        </div>

                                        <div className="px-6 py-5 sm:p-8 border border-gray-200">
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">500 réponses/mois</dt>
                                            </div>
                                            {/* <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">1 000 pages web</dt>
                                            </div> */}
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">2 Chatbots</dt>
                                            </div>
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">1 Membre</dt>
                                            </div>
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">Support Standard</dt>
                                            </div>

                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">{"Formation à l'IA"}</dt>
                                            </div>
                                        </div>

                                        <div className="px-6 py-5 sm:p-8 border border-gray-200">
                                            <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">1 500 réponses/mois</dt>
                                            </div>
                                            {/* <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">5 000 pages web</dt>
                                            </div> */}

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
                                            {/* <div className="flex items-center gap-x-1 mb-4">
                                                <dt className="text-xs font-medium text-gray-500">15 000 pages web</dt>
                                            </div> */}

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
        </div>
        </>
      
    )

}

export default Page
