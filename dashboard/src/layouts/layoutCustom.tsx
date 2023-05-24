'use client'

import { FunctionComponent, useState } from "react";
import LayoutCustomProps from "@/types/LayoutCustomProps";
import Sidebar from "@/components/sidebar";
import PersonCircleIcon from "@/components/svg-icons/person-icon";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";

const LayoutCustom : FunctionComponent<LayoutCustomProps> = ({children}) => {

	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};


	return (
		<div className="min-h-screen flex" style={{
			backgroundColor: "#e9f5f9",
		}}>
			<Sidebar/>
			<div className="w-full">
				<header className="flex items-center justify-between p-4">
					<div className="flex-shrink-0 text-black text-[24px]">Dashboard</div>
					<div className="flex items-center">
						<div className="relative mr-[10px]">
							<input
								type="text"
								placeholder="Search"
								className="py-2 pl-10 pr-4 block w-[100%] h-[40px] border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							/>
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<SearchIcon />
							</div>
						</div>
						<div className="flex text-black items-center mr-[10px]">
							<NotificationsNoneIcon />
						</div>
						<div className="flex items-center mr-[10px]">
							<div className="flex-shrink-0">
								<div className="rounded-full overflow-hidden">
									<PersonCircleIcon/>
								</div>
							</div>
						</div>
						<div className="relative inline-block">
							<button
								type="button"
								onClick={toggleDropdown}
								className="inline-flex items-center px-4 py-2 text-sm font-medium text-black border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							>
								Dropdown
								<svg
									className={`w-4 h-4 ml-2 ${
										isOpen ? "transform rotate-180" : ""
									}`}
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M6 8.586L10 12.586L14 8.586L15.414 10L10 15.414L4.586 10L6 8.586Z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
							{isOpen && (
								<div className="absolute right-0 mt-2 py-2 bg-white border rounded-md shadow-lg">
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
									>
										Option 1
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
									>
										Option 2
									</a>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
									>
										Option 3
									</a>
								</div>
							)}
						</div>
					</div>
				</header>
			</div>
		</div>
	)
}

export default LayoutCustom
