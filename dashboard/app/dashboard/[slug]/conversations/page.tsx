"use client"

import React from "react";
import {AiOutlineFolderAdd, AiOutlinePlus} from "react-icons/ai";
import LayoutCustom from "@/layouts/layoutCustom";

const Page = () => {
    return (
        <LayoutCustom>
            <div className="w-full overflow-y-auto">
                <h2>{"Conversations"}</h2>
                <div className="p-40 mx-auto">
                    <div className="text-center">
                        <AiOutlineFolderAdd className="mx-auto h-12 w-12 text-gray-400 "/>
                        <h3 className="mt-2 text-sm font-semibold text-gray-900">{"Vous n'avez pas encore de ChatBot"}</h3>
                        <p className="mt-1 text-sm text-gray-500">Commencez par créer votre premier ChatBot</p>
                        <div className="mt-6">
                            <div>
                                <button
                                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    <AiOutlinePlus className="-ml-0.5 mr-1.5 h-5 w-5"/>
                                    Installer le ChatBot
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutCustom>
    )
}

export default Page
