import {FunctionComponent} from "react";
import LayoutCustomProps from "@/types/LayoutCustomProps";
import TopBar from "@/components/atoms/topbar/topBar";
import Sidebar from "@/components/atoms/sidebar/sidebar";
import '../styles/_main.scss'

const LayoutCustom: FunctionComponent<LayoutCustomProps> = ({children}) => {

    return (
        <>
            <TopBar/>
            <div className="flex overflow-hidden ml-64 mr-8">
                <Sidebar/>
                <main className="w-full">
                    {children}
                </main>
            </div>
        </>
    )
}

export default LayoutCustom
