'use client';

import { FC, useEffect, useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import ChatHeader from './ChatHeader';
import { setCookie } from 'nookies';
import { api } from "@/config/api";

const fetchChat = async (host: string) => {
	try {
		const response1 = await api.get(`${host}/stores`);
		if (response1.status === 200) {
			const data1 = response1.data;
			setCookie(null, 'data1', data1[0].content, {
				maxAge: 30 * 24 * 60 * 60,
				sameSite: 'none',
				secure: process.env.NODE_ENV === 'production'
			});

			const response2 = await api.get(`product/${host}`);
			if (response2.status === 200) {
				const data2 = response2.data;
				setCookie(null, 'data2', JSON.stringify(data2), {
					maxAge: 30 * 24 * 60 * 60,
					sameSite: 'none',
					secure: process.env.NODE_ENV === 'production'
				});
			}
		}
	} catch (error) {
		console.error('Error:', error);
		throw new Error('Internal Server Error');
	}
};

const Chat: FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const siteURL = document.referrer;
		if (!siteURL) {
			// Gérer le cas où document.referrer n'est pas défini
			return;
		}

		try {
			const hostname = new URL(siteURL).hostname;
			const domain = hostname.replace('www.', '').split('.')[0];

			setCookie(null, 'domain', domain, {
				maxAge: 30 * 24 * 60 * 60,
				sameSite: 'none',
				secure: process.env.NODE_ENV === 'production'
			});

			fetchChat(domain);
		} catch (error) {
			console.error('Error:', error);
			// Gérer l'erreur de construction de l'URL
		}
	}, []);


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
				<div className='fixed right-8 w-80 bottom-28 bg-white border border-gray-200 rounded-md overflow-hidden'>
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
