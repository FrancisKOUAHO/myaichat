'use client'


import { useState } from "react";
import Card from "@/components/atoms/card/card";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Page = () => {
    return (
        <div className="flex min-h-full flex-col text-center justify-center  sm:px-6 lg:p-8 p-8 h-[100vh] bg-gradient-to-r from-indigo-600 to-indigo-200">
            <div className="m-auto justify-center">
                <Card className="m-auto w-full justify-center">
                    <div className="m-auto">
                        <div className="m-auto">
                            <button
                                className="p-2 mb-8 text-sm font-medium rounded-lg bg-red-500 text-white">
                                <AiOutlineCloseCircle className="w-6 h-6"/>
                            </button>
                        </div>
                        <div className=" w-full m-auto mb-4">
                            <p className="font-bold text-white text-xl">
                                Echec du paiement !
                            </p>
                        </div>
                        <p className="text-white text-base mb-4">
                            {"Votre payment n'a pas pu être effectué."}
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );

}

export default Page