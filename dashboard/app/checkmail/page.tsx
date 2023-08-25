'use client'


import {useState} from "react";
import Card from "@/components/atoms/card/card";

const Page = () => {
    return (
        <div className="flex min-h-full flex-col text-center justify-center sm:px-6 lg:p-8 p-8 h-[100vh]"
             style={{
                 background: `linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C`,
             }}
        >
            <div className="m-auto justify-center">
                <Card className="m-auto w-full justify-center">
                    <div className="m-auto">
                        <div className="m-auto">
                            <button
                                className="p-4 mb-8 text-sm font-medium rounded-lg bg-green-500 text-white">
                                Succès
                            </button>
                        </div>
                        <div className=" w-full m-auto mb-4">
                            <p className="font-bold text-white text-xl">
                                Consultez votre boîte aux lettres
                            </p>
                        </div>
                        <p className="text-white text-base mb-4">
                            Un lien de connexion a été envoyé à l'adresse électronique spécifiée.
                        </p>
                        <p
                            className="text-white">Si vous ne l'avez pas reçu, vérifiez votre dossier de courrier
                            indésirable.</p>
                    </div>
                </Card>
            </div>
        </div>
    );

}

export default Page