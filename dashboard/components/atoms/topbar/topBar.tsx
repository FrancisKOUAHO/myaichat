import Image from "next/image";
import {AiOutlineUser, AiOutlineBell} from "react-icons/ai";
import Input from "@/components/atoms/input/input";
import Dropdown from "@/components/atoms/dropdown/dropdown";
import Link from "next/link";
import {useAuth} from "@/context/AuthContext";

const TopBar = () => {
  const { logout } = useAuth()

  return (
    <nav className="c-topbar">
      <div className="c-below-topbar">
      </div>
      <div className="c-above-topbar">
        <div className="c-above-topbar-left">
          <Link href={'/admin/dashboard'}>
            <Image src="/LetsGo_white.png" alt="LetsGo Logo" width="35" height="100"/>
            <span>Let&apos;s Go</span>
          </Link>
        </div>
        <div className="c-above-topbar-right">
          <Input className="c-input c-input-rounded" type={'text'} placeholder={'Rechercher...'}/>
          <div className="c-notification">
            <AiOutlineBell />
          </div>
          <div className="c-profile-avatar">
            <Dropdown list={[
                {
                  label: 'Francis KOUAHO',
                  link: '/booking',
                  icon: <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>
                },
                {
                  label: 'Profil',
                  link: '/customer-history',
                  icon: <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>
                },
                {
                  label: 'Aide',
                  link: '/account/profile',
                  icon: <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>,
                },
                {
                  label: 'Déconnexion',
                  icon: <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>,
                  onclick: () => logout()
                },
              ]}>
                <AiOutlineUser className="text-white/70 w-100 h-100 text-2xl"/>
              </Dropdown>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default TopBar
