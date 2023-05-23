'use client'

import { useState } from "react";
import showErrorAlert from "@/components/utility/showErrorAlert";
import { router } from "next/client";

const  Home = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignupClick = () => {
    router.push("/signup");
  };

  const handleLoginClick = async () => {
    await router.push("/dashboard");
    window.location.reload();
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    if (!email && !password) {
      showErrorAlert("Email and Password is required.");
      return;
    } else if (!email) {
      showErrorAlert("Email is required.");
      return;
    } else if (!password) {
      showErrorAlert("Password is required.");
      return;
    }

    handleLoginClick();
  };


  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:p-8 p-8">
      <div className="grid w-full ">
        <div className="sm:mx-auto sm:w-full p-8 sm:max-w-md">
          <img src='/logo.png' className='mx-auto h-12 w-auto' alt="logo"/>
          <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Se connecter</h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Bienvenue à nouveau ! Veuillez saisir vos coordonnées.
          </p>
          <div className='bg-white py-10 px-4 shadow sm:rounded-lg sm:px-10'>
            <div className="mb-6 flex flex-col justify-center items-center border-gray-200 border-offset-2 pt-4">
              <button id="google-connect" className=" text-black inline-flex items-center bg-white text-sm font-normal border border-gray-300 rounded-sm px-4 py-2">
                <img className="h-4 w-4 mr-3" src="/googleLogo.png" alt="googleLogo"/>
                Connexion avec Google
              </button>
            </div>
            <form onSubmit={handleFormSubmit} className="mb-5">
              <div className="pb-5">
                <label className="block text-sm font-medium text-gray-700 text-gray-400 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="pb-5">
                <label className="block text-sm font-medium text-gray-700 text-gray-400 mb-1" htmlFor="password">
                  Mot de passe
                </label>
                <input
                  type="password"
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              {/*   <div className="pb-5">
                <input
                    type="checkbox"
                    id="rememberFor"
                    name="rememberFor"
                    checked={remember}
                    onChange={(event) => setRemember(event.target.checked)}
                    className="w-[16px] h-[16px]"
                />
                <label htmlFor="rememberFor" className="pl-[10px]">
                  Remember for 30 days
                </label>
              </div>*/}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-3"
                  style={{ backgroundColor: "#7F56D9" }}
                >
                  {isLoading ? "Loading..." : "Se connecter"}
                </button>
              </div>
              <div className="text-xs text-gray-400 mt-1 text-center">
                <span>{"Vous n'avez pas encore de compte ?"}&nbsp;</span>
                <span
                  className="cursor-pointer"
                  onClick={handleSignupClick}
                  style={{ color: "#7F56D9" }}
                >
                {"S'inscrire"}
              </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
