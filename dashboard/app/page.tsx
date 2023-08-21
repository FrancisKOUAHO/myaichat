'use client'

import React from "react";
import {api} from "@/config/api";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context";
import {AxiosResponse} from "axios";

const Home = () => {
    const router: AppRouterInstance = useRouter();

    const [isLoaded, setIsLoaded] = React.useState(false);

    const loginMutation = (email: void) => {
        setIsLoaded(true);

        api.post('auth/request-login-link', {email}).then((res: AxiosResponse) => res).then((res: AxiosResponse) => {
            if (res.status === 200) {
                setIsLoaded(false);
                router.push('/checkmail')
            } else {
                router.push('/');
            }
        });
    }

    const handleGoogleConnect = (): void => {
        // Fait une demande au backend pour obtenir l'URL de redirection Google
        api.get('auth/google/redirect')
            .then((response: AxiosResponse) => {
                // Récupère l'URL de redirection depuis la réponse
                const redirectUrl = response.request.responseURL;

                // Affiche l'URL de redirection dans la console
                console.log("Redirect URL:", redirectUrl);

                // Redirige vers l'URL de redirection de Google
                window.location.href = redirectUrl;
            })
            .catch((error: any) => {
                console.error("Error:", error);
                // Gère l'erreur ici, par exemple, affiche un message d'erreur à l'utilisateur
            });
    };

    const handleSubmit = (event: any): void => {
        event.preventDefault();
        const {email} = event.target.elements;
        loginMutation(email.value);
    };

    return (
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:p-8 p-8">
            <div className="grid w-full ">
                <div className="sm:mx-auto sm:w-full p-8 sm:max-w-md">
                    <img src='/logo.png' className='mx-auto h-12 w-auto' alt='logo'/>
                    <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Se connecter</h1>
                    <p className="mt-5 text-center text-sm text-gray-600">
                        Bienvenue !
                    </p>
                    <p className="mb-5 text-center text-[13px] text-gray-600">
                        {"Veuillez saisir votre adresse e-mail et un compte sera créé pour vous."}
                    </p>
                    <div className='bg-white py-10 px-4 shadow sm:rounded-lg sm:px-10'>
                        <div
                            className="mb-6 flex flex-col justify-center items-center border-gray-200 border-offset-2 pt-4">
                            <button onClick={handleGoogleConnect}
                                    className=" text-black inline-flex items-center bg-white text-sm font-normal border border-gray-300 rounded-sm px-4 py-2"
                                    style={{border: '1px solid #000000', padding: '10px', marginBottom: '10px'}}>
                                <img className="h-4 w-4 mr-3" src="/googleLogo.png" alt="googleLogo"/>
                                Connexion avec Google
                            </button>
                        </div>
                        <form className="mb-5" onSubmit={handleSubmit}>
                            <div className="pb-5">
                                <label className="block text-sm font-medium  mb-1" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-3"
                                    style={{backgroundColor: "#7F56D9"}}
                                >
                                    {isLoaded ? "Loading..." : "Se connecter"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home;