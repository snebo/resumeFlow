'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function LandingPage() {
	return (
		<div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen">
			{/* Hero Section */}
			<section className="pt-32 pb-20 px-6">
				<div className="container mx-auto text-center">
					<div className="animate-fade-in-up">
						<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
							Build Your{' '}
							<span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
								Perfect Resume
							</span>{' '}
							in Minutes
						</h1>
						<p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
							Fill out a simple form and watch your professional resume come to life in real-time.
							No more formatting headaches.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
							<Link
								href={'/builder'}
								className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all transform hover:scale-105 shadow-2xl"
							>
								Start Building
							</Link>
							<Link
								href={'https:www.github.com/snebo'}
								className="border-2 border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
							>
								Check The Repo
							</Link>
						</div>
					</div>

					{/* Hero Demo */}
					<div className="relative max-w-5xl mx-auto">
						<div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl">
							<div className="grid md:grid-cols-2 gap-8 items-center">
								{/* Form Side */}
								<div className="bg-slate-800/50 p-6 rounded-2xl border border-white/10">
									<h3 className="text-lg font-semibold mb-4 text-cyan-400">Simple Form</h3>
									<div className="space-y-3">
										<div className="flex items-center space-x-3">
											<div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
											<span className="text-sm">Personal Information</span>
										</div>
										<div className="flex items-center space-x-3">
											<div
												className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
												style={{ animationDelay: '0.5s' }}
											></div>
											<span className="text-sm">Work Experience</span>
										</div>
										<div className="flex items-center space-x-3">
											<div
												className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"
												style={{ animationDelay: '1s' }}
											></div>
											<span className="text-sm">Skills & Education</span>
										</div>
									</div>
								</div>

								{/* Resume Preview */}
								<div className="bg-white text-black p-6 rounded-2xl shadow-2xl">
									<div className="border-b-2 border-gray-200 pb-3 mb-3">
										<h4 className="font-bold text-lg">John Smith</h4>
										<p className="text-sm text-gray-600">Software Developer</p>
									</div>
									<div className="space-y-2 text-xs">
										<div className="h-2 bg-gray-200 rounded animate-pulse"></div>
										<div className="h-2 bg-gray-200 rounded animate-pulse w-3/4"></div>
										<div className="h-2 bg-gray-200 rounded animate-pulse w-1/2"></div>
									</div>
								</div>
							</div>
							<div className="mt-6 text-center">
								<div className="inline-flex items-center space-x-2 text-cyan-400">
									<span className="animate-bounce">⚡</span>
									<span className="text-sm font-medium">Updates in real-time as you type</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="py-20 px-6 bg-black/20">
				<div className="container mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							Why Choose{' '}
							<span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
								ResumeFlow
							</span>
						</h2>
						<p className="text-xl text-gray-300 max-w-2xl mx-auto">
							Experience the future of resume building with our intelligent platform
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 mb-16">
						{/* Real-time Updates */}
						<div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all group">
							<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<span className="text-2xl">⚡</span>
							</div>
							<h3 className="text-xl font-bold mb-4">Real-Time Preview</h3>
							<p className="text-gray-300">
								Watch your resume update instantly as you type. No refresh needed, no waiting
								around.
							</p>
						</div>

						{/* Professional Templates */}
						<div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all group">
							<div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<span className="text-2xl">🎨</span>
							</div>
							<h3 className="text-xl font-bold mb-4">Beautiful Templates</h3>
							<p className="text-gray-300">
								Choose from professionally designed templates that make you stand out from the
								crowd.
							</p>
						</div>

						{/* Simple Process */}
						<div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-white/10 hover:border-green-400/50 transition-all group">
							<div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<span className="text-2xl">🚀</span>
							</div>
							<h3 className="text-xl font-bold mb-4">Super Simple</h3>
							<p className="text-gray-300">
								Just fill out our intuitive form. No complex formatting or design skills required.
							</p>
						</div>
					</div>

					{/* Coming Soon Features */}
					<div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 p-8 rounded-3xl border border-purple-400/20">
						<div className="text-center mb-8">
							<div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-cyan-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
								<span>🤖</span>
								<span>AI-Powered Features Coming Soon</span>
							</div>
							<h3 className="text-3xl font-bold mb-4">The Future is Almost Here</h3>
						</div>

						<div className="grid md:grid-cols-2 gap-8">
							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
									<span className="text-xl">✨</span>
								</div>
								<div>
									<h4 className="text-lg font-semibold mb-2">Smart Content Enhancement</h4>
									<p className="text-gray-300">
										AI will help reword and optimize your content to make maximum impact with
										recruiters.
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
									<span className="text-xl">🎯</span>
								</div>
								<div>
									<h4 className="text-lg font-semibold mb-2">Job-Specific Optimization</h4>
									<p className="text-gray-300">
										Paste any job description and watch AI tailor your entire resume for maximum
										match potential.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section id="how-it-works" className="py-20 px-6">
				<div className="container mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
						<p className="text-xl text-gray-300">Get your professional resume in 3 simple steps</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								step: 1,
								title: 'Fill the Form',
								description:
									'Enter your personal information, work experience, and skills in our simple form interface.',
							},
							{
								step: 2,
								title: 'Watch It Build',
								description:
									'See your resume come to life in real-time as you type. Make adjustments on the fly.',
							},
							{
								step: 3,
								title: 'Download & Apply',
								description:
									'Export your polished resume as PDF and start applying to your dream jobs immediately.',
							},
						].map((item) => (
							<div key={item.step} className="text-center">
								<div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
									{item.step}
								</div>
								<h3 className="text-xl font-bold mb-4">{item.title}</h3>
								<p className="text-gray-300">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-6 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Ready to Build Your Perfect Resume?
					</h2>
					<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
						Join thousands of job seekers who've already created stunning resumes with ResumeFlow
					</p>
					<Link
						href={'/builder'}
						className="bg-gradient-to-r from-cyan-500 to-purple-600 px-12 py-4 rounded-full text-xl font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all transform hover:scale-105 shadow-2xl"
					>
						Start Building Now - It's Free
					</Link>
					<p className="text-sm text-gray-400 mt-4">
						No credit card required • Takes less than 5 minutes
					</p>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-12 px-6 bg-black/40 border-t border-white/10">
				<div className="container mx-auto">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex items-center space-x-2 mb-4 md:mb-0">
							<div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-lg">R</span>
							</div>
							<span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
								ResumeFlow
							</span>
						</div>
						<div className="text-gray-400 text-sm">© 2025 ResumeFlow. All rights reserved.</div>
					</div>
				</div>
			</footer>

			<style jsx>{`
				@keyframes fade-in-up {
					0% {
						opacity: 0;
						transform: translateY(30px);
					}
					100% {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fade-in-up {
					animation: fade-in-up 0.6s ease-out;
				}
			`}</style>
		</div>
	);
}
