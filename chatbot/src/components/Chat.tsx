'use client';

import { FC, useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import ChatHeader from './ChatHeader';

const Chat: FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button
				className="bg-black rounded-full p-3 absolute bottom-[30px] right-[30px]"
				onClick={() => setIsOpen(!isOpen)}
			>
				<img
					src="https://i.goopics.net/ux8qzl.png"
					alt="Open Chat"
					width={40}
					height={40}
				/>
			</button>

			{isOpen && (
				<div className='fixed right-8 w-80 bottom-28 bg-white border border-gray-200 rounded-md overflow-hidden ismobile'>
					<div className='w-full h-full flex flex-col'>
						<ChatHeader/>
						<div className='flex flex-col h-80'>
							<ChatMessages className='px-2 py-3 flex-1'/>
							<ChatInput className='px-4'/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Chat;
