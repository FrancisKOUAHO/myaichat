'use client'

import React from "react";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/config/api";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

const Home = () => {
	const router: AppRouterInstance = useRouter();

	const loginMutation = useMutation((email: void) =>
			api.post('auth/magic-link', {email}),
		{
			onSuccess: (data) => {
				localStorage.setItem('auth_token', data.data.auth_token)
				router.push('/checkmail')
			},
			onError: (error): void => {
				console.log('error', error);
			},
		}
	);

	const handleSubmit = (event: any): void => {
		event.preventDefault();
		const { email } = event.target.elements;
		loginMutation.mutate(email.value);
	};

	return (
		<div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:p-8 p-8">
			<div className="grid w-full ">
				<div className="sm:mx-auto sm:w-full p-8 sm:max-w-md">
					<img src='/logo.png' className='mx-auto h-12 w-auto' alt='logo'/>
					<h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Se connecter</h1>
					<p className="mt-5 mb-5 text-center text-sm text-gray-600">
						Bienvenue à nouveau ! Veuillez saisir vos coordonnées.
					</p>
					<div className='bg-white py-10 px-4 shadow sm:rounded-lg sm:px-10'>
						<div className="mb-6 flex flex-col justify-center items-center border-gray-200 border-offset-2 pt-4">
							<button id="google-connect"
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
								/>
							</div>
							<div>
								<button
									type="submit"
									className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-3"
									style={{backgroundColor: "#7F56D9"}}
								>
									{loginMutation.isLoading ? "Loading..." : "Se connecter"}
								</button>
							</div>
							<div className="text-xs text-gray-400 mt-1 text-center mt-5">
								<span>{"Vous n'avez pas encore de compte ?"}&nbsp;</span>
								<span
									className="cursor-pointer"
									style={{color: "#7F56D9"}}
								>
                {"S'inscrire"}
              </span>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}


export default Home;