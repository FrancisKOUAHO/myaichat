'use client';

import {FC, useEffect, useState} from 'react';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import ChatHeader from './ChatHeader';

const Chat: FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleChatbot = () => {
		setIsOpen(!isOpen);
		const iframe: any = document.querySelector('iframe');

		if (isOpen) {
			iframe.style.pointerEvents = 'none';
		} else {
			iframe.style.pointerEvents = 'all';
		}
	};

	return (
		<div>
			<button
				className="ui-button"
				onClick={() => toggleChatbot()}
			>
				<img
					src="https://i.goopics.net/ux8qzl.png"
					alt="Open Chat"
					width={24}
					height={24}
					style={{marginLeft: 'auto', marginRight: 'auto'}}
				/>
			</button>

			{isOpen && (
                <div className="container-chat">
					<div className='w-full h-full flex flex-col'>
						<ChatHeader/>
						<div className='flex flex-col wrapper-chat'>
							<ChatMessages className='px-2 py-3'/>
							<ChatInput className='px-4'/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Chat;
