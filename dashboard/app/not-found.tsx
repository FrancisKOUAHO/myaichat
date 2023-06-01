'use client';

import { useEffect } from "react";

const NotFound = () => {
	useEffect(() => {
		setTimeout(() => {
			window.location.href = "/";
		}, 1000);

	}, []);

	return (
		<>
			<div className="h-screen w-screen bg-gradient-to-r from-indigo-600 to-indigo-200 flex justify-center content-center flex-wrap">
				<p className="font-sans text-white error-text text-6xl">404</p>
			</div>
		</>
	);
}

export default NotFound
