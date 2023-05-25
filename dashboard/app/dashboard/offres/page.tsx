"use client"

import React from "react";
import {AiOutlinePlus,AiOutlineFolderAdd} from "react-icons/ai";
import LayoutCustom from "@/layouts/layoutCustom";

const Page = () => {
    return (
        <LayoutCustom>
            <div className="pb-20 w-full overflow-y-auto ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="mt-4 text-[2.3rem] font-bold tracking-tight text-gray-900 sm:text-[2.3rem]">
                            Sélectionner une offre
                        </p>
                    </div>
                    <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
                        <div className=" bg-white max-w-[268px] rounded-3xl p-8 ring-1 ring-gray-200 hover:ring-indigo-600 hover:ring-2">
                            <div className="flex items-center justify-between gap-x-4">
                                <h3 id="tier-startup"
                                    className="text-lg font-semibold leading-8 text-indigo-600">Starter</h3>
                            </div>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-gray-900">€39</span>
                                <span className="text-sm font-semibold leading-6 text-gray-600">/mois</span>
                            </p>
                            <form data-turbo="false" className="button_to" method="post"
                                  action="/create_checkout?plan_id=starter">
                                <button data-controller="loading-button" data-loading-button-target="submit"
                                        data-loading-button-color="white"
                                        className="inline-flex items-center justify-center w-full h-12 px-4 mt-6 font-medium tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none text-white bg-black hover:bg-gray-800"
                                        type="submit">
                                    <span>{"S'abonner"}</span>
                                </button>
                                </form>
                            <div className="text-sm text-indigo-500 font-medium mt-1 text-center">
                                {"Commencer 7 jours d'essai gratuit"}
                            </div>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                <li className="flex gap-x-3">
                                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    500 réponses/mois
                                </li>
                                <li className="flex gap-x-3">
                                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    1 000 pages web
                                </li>
                                <li className="flex gap-x-3">
                                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    2 Chatbots
                                </li>
                                <li className="flex gap-x-3">
                                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    Support standard
                                </li>
                                <li className="flex gap-x-3">
                                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    {"Formation à l'IA"}
                                </li>
                            </ul>
                        </div>
                        <div className="max-w-[268px] bg-[#7a5eea] rounded-3xl p-8 ring-indigo-500 ring-2">
                            <div className="flex items-center justify-between gap-x-4">
                                <h3 id="tier-startup"
                                    className="text-lg font-semibold leading-8 text-white"> Growth </h3>
                                <p className="rounded-full bg-indigo-100/10 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                                    Populaire
                                </p>
                            </div>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-white">€79</span>
                                <span className="text-sm font-semibold leading-6 text-white">/mois</span>
                            </p>
                            <form data-turbo="false" className="button_to" method="post"
                                  action="/create_checkout?plan_id=growth">
                                <button data-controller="loading-button" data-loading-button-target="submit"
                                        data-loading-button-color="white"
                                        className="mb-1 inline-flex items-center justify-center w-full h-12 px-4 mt-6 font-medium tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none text-white bg-black hover:bg-gray-800"
                                        type="submit">
                                    <span>{"S'abonner"}</span>
                                </button>
                            </form>
                            <div className="text-sm text-white font-medium mt-1 text-center">
                                {"Commencer 7 jours d'essai gratuit"}
                            </div>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-white">
                                <li className="flex gap-x-3">
                                    <svg className="h-6 w-5 flex-none text-white" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    1 500 réponses/mois
                                </li>
                                <li className="flex gap-x-3">
                                    <svg className="h-6 w-5 flex-none text-white" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    5 000 pages web
                                </li>
                                <li className="flex gap-x-3">
                                    <svg className="h-6 w-5 flex-none text-white" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    5 Chatbots
                                </li>
                                <li className="flex gap-x-3">
                                    <svg className="h-6 w-5 flex-none text-white" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    Membres illimités
                                </li>
                                <li className="flex gap-x-3">
                                    <svg className="h-6 w-5 flex-none text-white" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    Support prioritaire
                                </li>
                                <li className="flex gap-x-3">
                                    <svg className="h-6 w-5 flex-none text-white" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    {"Formation à l'IA"}
                                </li>
                            </ul>
                        </div>
                        <div className="max-w-[268px] rounded-3xl p-8 ring-gray-200 bg-white ring-1 hover:ring-indigo-600 hover:ring-2">
                            <div className="flex items-center justify-between gap-x-4">
                                <h3 id="tier-startup"
                                    className="text-lg font-semibold leading-8 text-indigo-600">Pro</h3>
                            </div>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-gray-900">€99</span>
                                <span className="text-sm font-semibold leading-6 text-gray-600">/mois</span>
                            </p>
                            <form data-turbo="false" className="button_to" method="post"
                                  action="/create_checkout?plan_id=pro">
                                <button data-controller="loading-button" data-loading-button-target="submit"
                                        data-loading-button-color="white"
                                        className="mb-1 inline-flex items-center justify-center w-full h-12 px-4 mt-6 font-medium tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none text-white bg-black hover:bg-gray-800"
                                        type="submit">
                                    <span>{"S'abonner"}</span>
                                </button>
                            </form>
                            <div className="text-sm text-indigo-500 font-medium mt-1 text-center">
                                {"Commencer 7 jours d'essai gratuit"}
                            </div>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                <li className="flex gap-x-3">
                                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    3 000 réponses/mois
                                </li>
                                <li className="flex gap-x-3">
                                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    15 000 pages web
                                </li>
                                <li className="flex gap-x-3">
                                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    10 Chatbots
                                </li>
                                <li className="flex gap-x-3">
                                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    Membres illimités
                                </li>
                                <li className="flex gap-x-3">
                                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    Support prioritaire
                                </li>
                                <li className="flex gap-x-3">
                                    <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    {"Formation à l'IA"}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutCustom>
    )
}

export default Page
