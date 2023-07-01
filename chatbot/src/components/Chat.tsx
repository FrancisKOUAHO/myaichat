'use client';

import { FC, useEffect, useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import ChatHeader from './ChatHeader';
import { setCookie } from 'nookies'; // Utilise nookies pour les cookies

const fetchChat = async (host: string) => {
	let data1 = null;
	let data2 = null;

	try {
		const response1 = await fetch(`https://api.myaichat.io/api/stores/${host}/stores`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response1.ok) {
			data1 = await response1.json();
			setCookie(null, 'data1', data1[0].content, {
				maxAge: 30 * 24 * 60 * 60,
			});

			const response2 = await fetch(`https://api.myaichat.io/api/products/${host}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response2.ok) {
				data2 = await response2.json();
				setCookie(null, 'data2', JSON.stringify(data2), {
					maxAge: 30 * 24 * 60 * 60,
				});
			}
		}

		return {
			data1,
			data2,
		};
	} catch (error) {
		console.error('Error:', error);
		throw new Error('Internal Server Error');
	}
};

const Chat: FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const siteURL = document.referrer;
		const hostname = new URL(siteURL).hostname;
		const domain = hostname.replace('www.', '').split('.')[0];

		console.log("Francis !", domain)
		console.log("Zola !", domain)

		setCookie(null, 'domain', domain, {
			maxAge: 30 * 24 * 60 * 60,
		});

		fetchChat(domain);
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
