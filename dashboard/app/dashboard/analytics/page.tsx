"use client"

import React from "react";
import LayoutCustom from "@/layouts/layoutCustom";

const Page = () => {
    return (
        <LayoutCustom>
            <div className="p-20 mx-auto w-full overflow-y-auto">
                <h3 className="text-base font-semibold leading-6 text-gray-900">{"Votre résumé d'utilisation"}</h3>
                <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-4 md:divide-x md:divide-y-0">
                    <div className="px-6 py-5 sm:p-8">
                        <dt className="text-base font-normal text-gray-900">ChatBot</dt>
                        <dt className="text-xs font-normal text-gray-400 mt-1">Total ChatBots created</dt>
                        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                0
                                <span className="ml-2 text-sm font-medium text-gray-500">of  1 </span>
                            </div>
                        </dd>
                    </div>
                    <div className="px-6 py-5 sm:p-8">
                        <dt className="text-base font-normal text-gray-900">Total replies</dt>
                        <dt className="text-xs font-normal text-gray-400 mt-1">Total replies sent by your ChatBot(s)
                        </dt>
                        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                0
                                <span className="ml-2 text-sm font-medium text-gray-500">out of 30 (this month)</span>
                            </div>
                        </dd>
                    </div>
                    <div className="px-6 py-5 sm:p-8">
                        <dt className="text-base font-normal text-gray-900">Total pages</dt>
                        <dt className="text-xs font-normal text-gray-400 mt-1">Pages saved</dt>
                        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                0
                                <span className="ml-2 text-sm font-medium text-gray-500">out of 500</span>
                            </div>
                        </dd>
                    </div>
                    <div className="px-6 py-5 sm:p-8">
                        <dt className="text-base font-normal text-gray-900">Total conversations</dt>
                        <dt className="text-xs font-normal text-gray-400 mt-1">From all ChatBots</dt>
                        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                0
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
                        <dt className="text-base font-normal text-gray-900">Total Sales</dt>
                        <dt className="text-xs font-normal text-gray-400 mt-1">Total sales from conversations</dt>
                        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                0 <span className="ml-2 text-sm font-medium text-gray-500"></span>
                            </div>
                        </dd>
                    </div>
                    <div className="px-6 py-5 sm:p-8">
                        <dt className="text-base font-normal text-gray-900">Conversation Rate</dt>
                        <dt className="text-xs font-normal text-gray-400 mt-1">Conversations converted into sales</dt>
                        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                0
                            </div>
                        </dd>
                    </div>
                    <div className="px-6 py-5 sm:p-8">
                        <dt className="text-base font-normal text-gray-900">Total orders</dt>
                        <dt className="text-xs font-normal text-gray-400 mt-1">From all your conversations</dt>
                        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                0
                            </div>
                        </dd>
                    </div>
                    <div className="px-6 py-5 sm:p-8">
                        <dt className="text-base font-normal text-gray-900">AOV</dt>
                        <dt className="text-xs font-normal text-gray-400 mt-1">Average order value</dt>
                        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                                0
                            </div>
                        </dd>
                    </div>
                </dl>
            </div>
        </LayoutCustom>
    )
}

export default Page
