'use client'


import Card from "@/components/atoms/card/card";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { useRouter } from "next/navigation";

const Page = () => {
	const router: AppRouterInstance = useRouter();

	setTimeout(() => {
		router.push('/dashboard');
	}, 2000);

	return (
		<div
			className="flex min-h-full flex-col text-center justify-center  sm:px-6 lg:p-8 p-8 h-[100vh] bg-gradient-to-r from-indigo-600 to-indigo-200">
			<div className="m-auto justify-center">
				<Card className="m-auto w-full justify-center">
					<div className="m-auto">
						<div className="m-auto">
							<button
								className="p-2 mb-8 text-sm font-medium rounded-lg bg-green-500 text-white">
								<AiOutlineCheckCircle className="w-6 h-6"/>
							</button>
						</div>
						<div className=" w-full m-auto mb-4">
							<p className="font-bold text-white text-xl">
								Succès du paiement !
							</p>
						</div>
						<p className="text-white text-base mb-4">
							{"Votre payment a été effectué avec succès."}
						</p>
					</div>
				</Card>
			</div>
		</div>
	);

}

export default Page