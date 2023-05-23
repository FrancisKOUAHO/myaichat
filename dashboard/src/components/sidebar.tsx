import DashboardIcon from "@mui/icons-material/Dashboard";
import PieChartIcon from "@mui/icons-material/PieChart";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MessageIcon from "@mui/icons-material/Message";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsIcon from "@mui/icons-material/Settings";
import React, { useState } from "react";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
	const [selectedItem, setSelectedItem] = useState<string>("dashboard");

	const handleItemClick = (itemName: string) => {
		setSelectedItem(itemName);
	};

	const isItemSelected = (itemName: string) => {
		return selectedItem === itemName
			? "bg-blue-500 text-white rounded-[10px]"
			: "text-[#808080]";
	};

	return (
		<div className="flex flex-col justify-between w-[200px] min-w-[200px]">
			<div style={{ justifyContent: "flex-start" }}>
				<div className="flex w-full items-center m-[20px]">
					<div>
						<DashboardIcon className="text-[30px] text-blue-500 mr-[5px]" />
					</div>
					<div className="text-[20px] text-black  italic font-medium flex-1 cursor-pointer">
						<span>CRYPTO</span>
					</div>
				</div>
				<div className="flex flex-col items-center items-center p-[20px]">
					<div
						className={`flex items-center w-full h-[45px] p-[10px] mb-[5px] ${isItemSelected(
							"dashboard"
						)}`}
						onClick={() => handleItemClick("dashboard")}
					>
						<div>
							<DashboardIcon className="text-[22px] mr-[10px]" />
						</div>
						<div
							className={`text-[14px]  flex-1 cursor-pointer ${isItemSelected(
								"dashboard"
							)}`}
						>
							<span>Dashboard</span>
						</div>
					</div>
					<div
						className={`flex items-center w-full h-[45px] p-[10px] mb-[5px] ${isItemSelected(
							"charts"
						)}`}
						onClick={() => handleItemClick("charts")}
					>
						<div>
							<PieChartIcon className="text-[22px] mr-[10px]" />
						</div>
						<div
							className={`text-[14px] flex-1 cursor-pointer ${isItemSelected(
								"charts"
							)}`}
						>
							<span>Charts</span>
						</div>
					</div>
					<div
						className={`flex items-center w-full h-[45px] p-[10px] mb-[5px] ${isItemSelected(
							"news"
						)}`}
						onClick={() => handleItemClick("news")}
					>
						<div>
							<NewspaperIcon className="text-[22px] mr-[10px]" />
						</div>
						<div
							className={`text-[14px] flex-1 cursor-pointer ${isItemSelected(
								"news"
							)}`}
						>
							<span>News</span>
						</div>
					</div>
					<div
						className={`flex items-center w-full h-[45px] p-[10px] mb-[5px] ${isItemSelected(
							"chats"
						)}`}
						onClick={() => handleItemClick("chats")}
					>
						<div>
							<MessageIcon className="text-[22px] mr-[10px]" />
						</div>
						<div
							className={`text-[14px] flex-1 cursor-pointer ${isItemSelected(
								"chats"
							)}`}
						>
							<span>Chats</span>
						</div>
					</div>
					<div
						className={`flex items-center w-full h-[45px] p-[10px] mb-[5px] ${isItemSelected(
							"transactions"
						)}`}
						onClick={() => handleItemClick("transactions")}
					>
						<div>
							<MessageIcon className="text-[22px] mr-[10px]" />
						</div>
						<div
							className={`text-[14px] flex-1 cursor-pointer ${isItemSelected(
								"transactions"
							)}`}
						>
							<span>Transactions</span>
						</div>
					</div>
					<div
						className={`flex items-center w-full h-[45px] p-[10px] mb-[5px] ${isItemSelected(
							"trends"
						)}`}
						onClick={() => handleItemClick("trends")}
					>
						<div>
							<TrendingUpIcon className="text-[22px] mr-[10px]" />
						</div>
						<div
							className={`text-[14px] flex-1 cursor-pointer ${isItemSelected(
								"trends"
							)}`}
						>
							<span>Trends</span>
						</div>
					</div>
				</div>
			</div>
			<div className="p-[20px]">
				<div className="flex h-[45px] p-[10px] items-center cursor-pointer">
          <span className="text-gray-800 font-medium">
            <SettingsIcon className="mr-[10px]" />
          </span>
					<div className=" text-[#808080]">Setting</div>
				</div>
				<div className="flex h-[45px] p-[10px] mb-[10px] items-center cursor-pointer">
          <span className="text-gray-800 font-medium">
            <ExitToAppIcon className="mr-[10px]" />
          </span>
					<div className="text-[#808080]">
						Logout
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
