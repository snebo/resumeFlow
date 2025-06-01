'use client';
import '@/app/styles/navbar.styles.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Button from './button';

export default function Navbar() {
	const pathName = usePathname();
	const [isTransitioning, setIsTransitioning] = useState(false);
	console.log('pathName: ', pathName);

	// Function to check if a link is active
	const isActiveLink = (href: string) => {
		if (href === '/') {
			return pathName === '/';
		}
		return pathName.startsWith(href);
	};

	// Base nav link class
	const getNavLinkClass = (href: string) => {
		const baseClass =
			'block py-2 px-3 rounded-sm transition-all duration-300 ease-in-out transform hover:scale-105';

		if (isActiveLink(href)) {
			return `${baseClass} text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500 shadow-lg`;
		}

		return `${baseClass} text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`;
	};

	// Handle link clicks with transition
	const handleLinkClick = () => {
		setIsTransitioning(true);
		// Reset transition state after animation
		setTimeout(() => setIsTransitioning(false), 300);
	};

	// Navigation items array for easier management
	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Find Me' }, // Changed from # to /contact for better routing
	];

	return (
		<nav
			className={`bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow transition-all duration-300 ${
				isTransitioning ? 'opacity-95' : 'opacity-100'
			}`}
		>
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
				<Link
					href="/"
					onClick={handleLinkClick}
					className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hover:text-blue-700 transition-colors duration-300"
				>
					TailorIT
				</Link>

				{pathName !== '/builder' && (
					<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
						<Button
							text="Create Resume"
							color="blue"
							redirect="/builder"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-md px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
						/>
					</div>
				)}

				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="navbar-sticky"
				>
					<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						{navItems.map((item) => (
							<li key={item.href} className="relative">
								<Link
									href={item.href}
									onClick={handleLinkClick}
									className={getNavLinkClass(item.href)}
									aria-current={isActiveLink(item.href) ? 'page' : undefined}
								>
									{item.label}
									{/* Active indicator line */}
									{isActiveLink(item.href) && (
										<span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-blue-700 rounded-full transition-all duration-300 md:block hidden"></span>
									)}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
