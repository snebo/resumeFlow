'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ButtonProps {
	text: string;
	color?: string;
	redirect: string;
	className?: string;
}

// Simple Button component (replace with your existing Button import)
const Button: React.FC<ButtonProps> = ({ text, redirect, className }) => (
	<Link
		href={redirect}
		className={`bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-full hover:from-cyan-400 hover:to-purple-500 transition-all transform hover:scale-105 text-white font-semibold ${className}`}
	>
		{text}
	</Link>
);

export default function Navbar() {
	const pathName = usePathname();
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Function to check if a link is active
	const isActiveLink = (href: string) => {
		if (href === '/') {
			return pathName === '/';
		}
		return pathName.startsWith(href);
	};

	// Base nav link class with glassmorphism theme
	const getNavLinkClass = (href: string) => {
		const baseClass =
			'relative px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 font-medium';

		if (isActiveLink(href)) {
			return `${baseClass} text-cyan-400 bg-white/10 backdrop-blur-sm border border-cyan-400/30 shadow-lg`;
		}

		return `${baseClass} text-gray-300 hover:text-cyan-400 hover:bg-white/5 backdrop-blur-sm border border-transparent hover:border-white/20`;
	};

	// Handle link clicks with transition
	const handleLinkClick = () => {
		setIsTransitioning(true);
		setIsMobileMenuOpen(false); // Close mobile menu on link click
		setTimeout(() => setIsTransitioning(false), 300);
	};

	// Navigation items array
	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: 'https://github.com/snebo', label: 'Find Me' },
	];

	return (
		<nav
			className={`fixed w-full z-50 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ${
				isScrolled ? 'bg-black/40 shadow-2xl' : 'bg-black/20'
			} ${isTransitioning ? 'opacity-95' : 'opacity-100'}`}
		>
			<div className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link href="/" onClick={handleLinkClick} className="flex items-center space-x-2 group">
						<div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
							<span className="text-white font-bold text-lg">R</span>
						</div>
						<span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
							ResumeFlow
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={handleLinkClick}
								className={getNavLinkClass(item.href)}
								aria-current={isActiveLink(item.href) ? 'page' : undefined}
							>
								{item.label}
								{/* Active indicator */}
								{isActiveLink(item.href) && (
									<span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></span>
								)}
							</Link>
						))}
					</div>

					{/* CTA Button & Mobile Menu Toggle */}
					<div className="flex items-center space-x-4">
						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
							aria-label="Toggle mobile menu"
						>
							<div className="w-6 h-6 flex flex-col justify-center items-center">
								<span
									className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
										isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
									}`}
								></span>
								<span
									className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
										isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
									}`}
								></span>
								<span
									className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
										isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
									}`}
								></span>
							</div>
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<div
					className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
						isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
					}`}
				>
					<div className="bg-black/30 backdrop-blur-lg rounded-2xl border border-white/10 p-4 space-y-2">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={handleLinkClick}
								className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
									isActiveLink(item.href)
										? 'text-cyan-400 bg-white/10 border border-cyan-400/30'
										: 'text-gray-300 hover:text-cyan-400 hover:bg-white/5 border border-transparent hover:border-white/20'
								}`}
							>
								{item.label}
							</Link>
						))}

						{/* Mobile CTA Button */}
						{pathName !== '/builder' && (
							<div className="pt-4 border-t border-white/10">
								<Button
									text="Create Resume"
									redirect="/builder"
									className="w-full justify-center"
								/>
							</div>
						)}
					</div>
				</div>
			</div>

			<style jsx>{`
				/* Custom scrollbar for mobile menu if needed */
				.mobile-menu::-webkit-scrollbar {
					width: 4px;
				}
				.mobile-menu::-webkit-scrollbar-track {
					background: rgba(255, 255, 255, 0.1);
					border-radius: 2px;
				}
				.mobile-menu::-webkit-scrollbar-thumb {
					background: rgba(99, 102, 241, 0.5);
					border-radius: 2px;
				}
				.mobile-menu::-webkit-scrollbar-thumb:hover {
					background: rgba(99, 102, 241, 0.7);
				}
			`}</style>
		</nav>
	);
}
