import React, { FunctionComponent } from "react";
import LayoutCustomProps from "@/types/LayoutCustomProps";
import TopBar from "@/components/atoms/topbar/topBar";
import Sidebar from "@/components/atoms/sidebar/sidebar";
import '../styles/_main.scss'
import AuthGuard from "@/utils/AuthGuard";
import AuthContextProvider from "@/context/AuthContext";


const LayoutCustom: FunctionComponent<LayoutCustomProps> = ({children}) => {

	return (
		<AuthContextProvider>
			<AuthGuard>
				<TopBar/>
				<div className="flex overflow-hidden ml-64 mr-8">
					<Sidebar/>
					<main className="w-full">
						{children}
					</main>
				</div>
			</AuthGuard>
		</AuthContextProvider>
	)
}

export default LayoutCustom
