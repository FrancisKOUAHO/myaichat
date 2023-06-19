"use client";

import { FunctionComponent } from "react";
import {
  AiOutlineComment,
  AiOutlineCreditCard,
  AiOutlineFileSearch,
  AiOutlineFileSync,
  AiOutlineHome,
  AiOutlineIssuesClose,
  AiOutlineMail,
  AiOutlineShop,
  AiOutlineSetting,
} from "react-icons/ai";
import Link from "next/link";
import SidebarProps from "@/types/SidebarProps";

const Sidebar: FunctionComponent<SidebarProps> = ({}) => {
  return (
    <>
      {
        <div className="c-sidebar">
          <p className="text-xs font-medium text-gray-400 pt-4 mb-2 pl-4">
            Dashboard
          </p>
          <Link href="/dashboard" className="hover:text-[#7a5eea]">
            <AiOutlineHome />
            Dashboard
          </Link>
         {/* <Link
            href="/dashboard/conversations"
            className="hover:text-[#7a5eea]"
          >
            <AiOutlineComment />
            Conversations
          </Link>
          <Link href="/dashboard/correction" className="hover:text-[#7a5eea]">
            <AiOutlineFileSearch />
            Correction
          </Link>*/}
          <Link href="/dashboard/analytics" className="hover:text-[#7a5eea]">
            <AiOutlineFileSync />
            Statistiques
          </Link>
          <Link href="/dashboard/knowledge" className="hover:text-[#7a5eea]">
            <AiOutlineShop />
            Base de connaissances          </Link>
          <Link href="/dashboard/parametre" className="hover:text-[#7a5eea]">
            <AiOutlineSetting />
            Parametre
          </Link>
          <p className="text-xs font-medium text-gray-400 pt-4 mb-2 mt-2 pl-4">
            PARAMÈTRES
          </p>
          <Link href="/dashboard/offres" className="hover:text-[#7a5eea]">
            <AiOutlineCreditCard />
            Offres
          </Link>
          <p className="text-xs font-medium text-gray-400 pt-4 mb-2 mt-2 pl-4">
            {"OBTENIR DE L'AIDE"}
          </p>
          <a
            href="mailto:support@myaichat.io"
            target="_blank"
            className="mb-2 text-slate-500 text-xs group cursor-pointer flex items-center hover:text-[#7a5eea]"
          >
            <AiOutlineMail />
            contact@myaichat.io
          </a>

          <a>
            <div className="mb-2 text-xs group cursor-pointer flex items-center hover:text-[#7a5eea]">
              <AiOutlineIssuesClose />
              Signaler un problème
            </div>
          </a>
        </div>
      }
    </>
  );
};

export default Sidebar;
