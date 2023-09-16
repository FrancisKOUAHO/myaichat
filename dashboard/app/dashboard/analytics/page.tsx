"use client"

import React, { useEffect, useState } from 'react'
import LayoutCustom from "@/layouts/layoutCustom";
import { useQuery } from '@tanstack/react-query'
import { api } from '@/config/api'
import { AxiosResponse } from 'axios'
import { parseCookies } from 'nookies'
import { getCookie } from 'cookies-next'

const fetchShopifyStore = async (userId: any) => {
    const response: AxiosResponse = await api.get(`stores/user/${userId}/stores`);
    return response;
};

const Page = () => {
    const [user, setUser] = useState<any>(null);

    const getUser = async (): Promise<void> => {
        try {
            const response = await api.get("me");
            setUser(response.data);
        } catch (error) {
            console.error("Error fetching user: ", error);
        }
    };

    const { data: chatbotNumber } = useQuery({
        queryKey: ["number-chatbot"],
        queryFn: () => api.get(`stores/get-chatbot-number/${user?.id}`),
        enabled: !!user,
    });

    const {data: shopifyStore, isLoading} = useQuery({
        queryKey: ["shopifyStore"],
        queryFn: () => fetchShopifyStore(parseCookies()['userId']),
        enabled: Boolean(getCookie("access_token")),
    });

    const {data: shopifyStoreName, isLoading: isLoadingShopifyStoreId} = useQuery({
        queryKey: ["shopifyStoreId"],
        queryFn: () => api.get(`messages/${shopifyStore?.data[0].url}/message-count`),
        enabled: !!["shopifyStore"],
    });

    useEffect(() => {
        getUser();
    }, []);

    return (
        <LayoutCustom>
            <div className="p-20 mx-auto w-full overflow-y-auto">
                <h3 className="text-base font-semibold leading-6 text-gray-900">{"Votre résumé d'utilisation"}</h3>
                <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-4 md:divide-x md:divide-y-0">
                    <div className="px-6 py-5 sm:p-8">
                        <dt className="text-base font-normal text-gray-900">ChatBot</dt>
                        <dt className="text-xs font-normal text-gray-400 mt-1">Nombre total de ChatBots créés</dt>
                        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                            {chatbotNumber && (
                              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                  {chatbotNumber.data.chatbotNumber}
                                  <span className="ml-2 text-sm font-medium text-gray-500">of  1 </span>
                              </div>
                            )}
                        </dd>
                    </div>
                    <div className="px-6 py-5 sm:p-8">
                        <dt className="text-base font-normal text-gray-900">Total des réponses</dt>
                        <dt className="text-xs font-normal text-gray-400 mt-1">Total des réponses envoyées par votre (vos) ChatBot(s)
                        </dt>
                        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                { shopifyStoreName && shopifyStoreName.data.message_count}
                                <span className="ml-2 text-sm font-medium text-gray-500">sur { shopifyStoreName && shopifyStoreName.data.allowed_responses} (ce mois-ci)</span>
                            </div>
                        </dd>
                    </div>
                    <div className="px-6 py-5 sm:p-8">
                        <dt className="text-base font-normal text-gray-900">Total de pages</dt>
                        <dt className="text-xs font-normal text-gray-400 mt-1">Pages sauvegardées</dt>
                        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                <p>fonctionnalité à venir</p>
                               {/* 0
                                <span className="ml-2 text-sm font-medium text-gray-500">sur 500</span>*/}
                            </div>
                        </dd>
                    </div>
                    <div className="px-6 py-5 sm:p-8">
                        <dt className="text-base font-normal text-gray-900">Total des conversations</dt>
                        <dt className="text-xs font-normal text-gray-400 mt-1">De tous les ChatBots</dt>
                        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                <p>fonctionnalité à venir</p>
                                {/*0*/}
                            </div>
                        </dd>
                    </div>
                </dl>
                <div className="relative mt-10 flex items-center justify-between">
                    <div className="flex">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">Analyse des ventes (pour Shopify uniquement)
                        </h3>
                    </div>
                </div>
                <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-4 md:divide-x md:divide-y-0">
                    <div className="px-6 py-5 sm:p-8">
                        <dt className="text-base font-normal text-gray-900">Ventes totales</dt>
                        <dt className="text-xs font-normal text-gray-400 mt-1">{"Chiffre d'affaires total des conversations"}</dt>
                        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                <p>fonctionnalité à venir</p>
                               {/* 0 <span className="ml-2 text-sm font-medium text-gray-500"></span>*/}
                            </div>
                        </dd>
                    </div>
                    <div className="px-6 py-5 sm:p-8">
                        <dt className="text-base font-normal text-gray-900">Taux de conversation</dt>
                        <dt className="text-xs font-normal text-gray-400 mt-1">Conversations converties en ventes</dt>
                        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                <p>fonctionnalité à venir</p>
                               {/* 0*/}
                            </div>
                        </dd>
                    </div>
                    <div className="px-6 py-5 sm:p-8">
                        <dt className="text-base font-normal text-gray-900">Total des commandes</dt>
                        <dt className="text-xs font-normal text-gray-400 mt-1">De toutes vos conversations</dt>
                        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                <p>fonctionnalité à venir</p>
                               {/* 0*/}
                            </div>
                        </dd>
                    </div>
                    <div className="px-6 py-5 sm:p-8">
                        <dt className="text-base font-normal text-gray-900">VMC</dt>
                        <dt className="text-xs font-normal text-gray-400 mt-1">Valeur moyenne des commandes</dt>
                        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                <p>fonctionnalité à venir</p>
                                {/*0*/}
                            </div>
                        </dd>
                    </div>
                </dl>
            </div>
        </LayoutCustom>
    )
}

export default Page
