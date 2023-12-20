import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from 'lottie-react';
import img  from './error.json'

const ErrorPage = () => {
	const {error, status } = useRouteError();
	console.log(error);
	return (
		<section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
			<div className="flex flex-col items-center justify-center px-5 mx-auto my-8 py-20 lg:py-0">
			

				<Lottie className="h-60 text-primary" color='primary' animationData={img} loop={true} />

				<div className="max-w-md text-center">
					<h2 className="mb-8 font-extrabold text-5xl lg:text-9xl text-orange-300">
						<span className="sr-only">Error</span> {status || 404}
					</h2>
					<p className="text-2xl font-semibold md:text-3xl mb-8 text-gray-500">
						{error?.message}
					</p>
					<Link
						to="/"
						className="px-8 py-3 font-semibold rounded bg-primary text-white"
					>
						Back to Home
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;
