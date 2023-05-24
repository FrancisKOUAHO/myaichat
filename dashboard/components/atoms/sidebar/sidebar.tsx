import {FunctionComponent} from "react";
import {

  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineProfile,
  AiOutlineTag,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineIssuesClose
} from "react-icons/ai";
import Link from "next/link";
import SidebarProps from "@/types/SidebarProps";

const Sidebar: FunctionComponent<SidebarProps> = ({}) => {


  return (
    <>
      {
          <div className="c-sidebar">
            <p className="text-xs font-medium text-gray-400 pt-4 mb-2 pl-4">MAIN MENU</p>
            <Link href={'/dashboard'} className="hover:text-indigo-500">
              <AiOutlineHome/>
              Dashboard
            </Link>
            <Link href={'/dashboard/conversations'} className="hover:text-indigo-500">
              <AiOutlineProfile/>
              Conversations
            </Link>
            <Link href={'/dashboard/correction'} className="hover:text-indigo-500">
              <AiOutlineUser/>
              Correction
            </Link>
            <Link href={'/dashboard/analytics'} className="hover:text-indigo-500">
              <AiOutlineTag/>
              Analytics
            </Link>
            <Link href={'/dashboard/knowledge'} className="hover:text-indigo-500">
              <AiOutlineMessage/>
              Knowledge Base
            </Link>
            <p className="text-xs font-medium text-gray-400 pt-4 mb-2 mt-2 pl-4">PARAMÈTRES</p>
            <Link href={'/dashboard/offres'} className="hover:text-indigo-500">
              <AiOutlineMessage/>
              Offres
            </Link>
            <p className="text-xs font-medium text-gray-400 pt-4 mb-2 mt-2 pl-4">{"OBTENIR DE L'AIDE"}</p>
            <a href="mailto:support@zipchat.ai" target="_blank"
               className="mb-2 text-slate-500 text-xs font-medium group cursor-pointer flex items-center hover:text-indigo-500">
              <AiOutlineMail/>
              support@zipchat.ai
            </a>
            <div>
              <button>
                <div
                    className="mb-4 text-slate-500 text-xs font-medium group cursor-pointer flex items-center hover:text-indigo-500 pl-4">
                <AiOutlineIssuesClose className="w-[25px] h-[25px] mr-2.5"/>
                  Signaler un problème
                </div>
              </button>
            </div>
          </div>
      }
    </>
    )
}

export default Sidebar
