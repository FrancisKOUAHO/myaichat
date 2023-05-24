import {FunctionComponent} from "react";
import {

  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineProfile,
  AiOutlineTag,
  AiOutlineUser
} from "react-icons/ai";
import Link from "next/link";
import SidebarProps from "@/types/SidebarProps";

const Sidebar: FunctionComponent<SidebarProps> = ({}) => {


  return (
    <>
      {
          <div className="c-sidebar">
            <Link href={'/dashboard'}>
              <AiOutlineHome/>
              Dashboard
            </Link>
            <Link href={'/dashboard/conversations'}>
              <AiOutlineProfile/>
              Conversations
            </Link>
            <Link href={'/dashboard/correction'}>
              <AiOutlineUser/>
              Correction
            </Link>
            <Link href={'/dashboard/analytics'}>
              <AiOutlineTag/>
              Analytics
            </Link>
            <Link href={'/dashboard/knowledge'}>
              <AiOutlineMessage/>
              Knowledge Base
            </Link>
          </div>
      }
    </>
    )
}

export default Sidebar
