import { useState, FormEvent } from "react";
import { router } from "next/client";
import showErrorAlert from "@/components/utility/showErrorAlert";

export default function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleLoginClick = () => {
		router.push("/");
	};

	const handleFormSubmit = async (e: FormEvent) => {
		e.preventDefault();
		if (!email && !password && !name) {
			showErrorAlert("Email, Password, and name is required.");
			return;
		} else if (!email && !password) {
			showErrorAlert("Email and Password is required.");
			return;
		} else if (!email && !name) {
			showErrorAlert("Email and name is required.");
			return;
		} else if (!email) {
			showErrorAlert("Email is required.");
			return;
		} else if (!name) {
			showErrorAlert("Name is required.");
			return;
		} else if (!password) {
			showErrorAlert("Password is required.");
			return;
		} else if (password.length < 8) {
			showErrorAlert("Password should be at least 8 characters long.");
			return;
		}

		handleLoginClick();
	};

	return (
		<div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:p-8 p-8">
			<div className="grid w-full">
				<div className="sm:mx-auto sm:w-full p-8 sm:max-w-md">
					<img src='/logo.png' className='mx-auto h-12 w-auto' alt="logo"/>
					<h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">{"S'inscrire"}</h1>
					<p className="mt-2 text-center text-sm text-gray-600">
						Commencez votre essai gratuit de 7 jours.
					</p>
					<div className="bg-white py-10 px-4 shadow sm:rounded-lg sm:px-10">
						<div className="mb-6 flex flex-col justify-center items-center border-gray-200 border-offset-2 pt-4">
							<button id="google-connect" className=" text-black inline-flex items-center bg-white text-sm font-normal border border-gray-300 rounded-sm px-4 py-2">
								<img className="h-4 w-4 mr-3" src="/googleLogo.png"/>
								Connexion avec Google
							</button>
						</div>
						<form onSubmit={handleFormSubmit} className="mb-5">
							{/*<div className="pb-5">
              <label className="pb-[6px] text-black" htmlFor="name">
                Name*
              </label>
              <input
                type="name"
                className="bg-white text-black text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="name"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>*/}
							<div className="pb-5">
								<label className="block text-sm font-medium text-gray-700 text-gray-400 mb-1" htmlFor="email">
									Email*
								</label>
								<input
									type="email"
									className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
									id="email"
									placeholder="Enter your email"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
								/>
							</div>
							{/*            <div className="pb-5">
              <label className="pb-[6px] text-black" htmlFor="password">
                Password*
              </label>
              <input
                type="password"
                className="bg-white text-black text-xl border border-slate-300 rounded-md bg-black p-2 pl-5 w-full"
                id="password"
                placeholder="Create a password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <p className="text-left pt-[12px] text-[#475467]">
                Must be at least 8 characters.
              </p>
            </div>*/}

							<div>
								<button
									type="submit"
									disabled={isLoading}
									className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-3"
									style={{ backgroundColor: "#7F56D9" }}
								>
									{isLoading ? "Loading..." : "Commencer"}
								</button>
							</div>
							<div className="text-xs text-gray-400 mt-1 text-center">
								<span>Vous avez déjà un compte ?&nbsp;</span>
								<span
									className="cursor-pointer"
									onClick={handleLoginClick}
									style={{ color: "#7F56D9" }}
								>
                Se connecter
              </span>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
