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
			<div className="h-screen w-screen flex justify-center content-center flex-wrap"
				 style={{
					 background: `linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C`,
				 }}
			>
				<p className="font-sans text-white error-text text-6xl">404</p>
			</div>
		</>
	);
}

export default NotFound
