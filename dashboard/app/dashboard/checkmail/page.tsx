'use client'


import {useState} from "react";
import Card from "@/components/atoms/card/card";

const Page = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="flex min-h-full flex-col justify-center  sm:px-6 lg:p-8 p-8 h-[100vh] bg-gradient-to-r from-indigo-600 to-indigo-200">
            <div className="m-auto justify-center">
                  <Card className="m-auto w-full justify-center">
                      <div className="m-auto">
                          <div className="m-auto text-center">
                              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-indigo-500 to-blue-500 group-hover:from-indigo-500 group-hover:to-indigo-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
                          <span
                              className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                              Succès
                          </span>
                              </button>
                          </div>
                          <div className=" w-full m-auto mb-4">
                              <p className="font-bold text-white text-xl">
                                  Consultez votre boîte aux lettres
                              </p>
                          </div>
                          <p className="text-white text-base mb-4">
                              {"Un lien de connexion a été envoyé à l'adresse électronique spécifiée."}
                          </p>
                          <p className="text-gray-600">{"Si vous ne l'avez pas reçu, vérifiez votre dossier de courrier indésirable."}</p>
                      </div>
                  </Card>
            </div>
        </div>
    );

}

export default Page