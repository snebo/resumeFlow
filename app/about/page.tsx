'use client';
import Link from 'next/link';
import Footer from '../components/footer';

export default function AboutPage() {
	return (
		<div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen">
			{/* Hero Section */}
			<section className="pt-32 pb-20 px-6">
				<div className="container mx-auto text-center">
					<div className="animate-fade-in-up">
						<div className="flex items-center justify-center space-x-3 mb-8">
							<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center">
								<span className="text-white font-bold text-2xl">R</span>
							</div>
							<h1 className="text-5xl md:text-7xl font-bold">
								<span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
									ResumeFast
								</span>
							</h1>
						</div>
						<p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
							Revolutionizing how professionals create stunning resumes through intelligent design
							and seamless user experience.
						</p>
					</div>
				</div>
			</section>

			{/* Mission Section */}
			<section className="py-20 px-6 bg-black/20">
				<div className="container mx-auto">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold mb-8">
								Our{' '}
								<span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
									Mission
								</span>
							</h2>
						</div>

						<div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl">
							<div className="text-center">
								<div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
									<span className="text-3xl">🎯</span>
								</div>
								<p className="text-lg md:text-xl text-gray-200 leading-relaxed">
									We believe that everyone deserves a professional, polished resume that showcases
									their unique talents and experiences. Our mission is to eliminate the frustration
									of resume formatting and design, allowing job seekers to focus on what truly
									matters – telling their story and landing their dream job.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Story Section */}
			<section className="py-20 px-6">
				<div className="container mx-auto">
					<div className="max-w-5xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-4xl md:text-5xl font-bold mb-6">The Story Behind ResumeFast</h2>
							<p className="text-xl text-gray-300">Born from frustration, built with passion</p>
						</div>

						<div className="grid md:grid-cols-2 gap-12 items-center">
							<div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-white/10">
								<div className="flex items-center space-x-3 mb-6">
									<div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-500 rounded-xl flex items-center justify-center">
										<span className="text-xl">😤</span>
									</div>
									<h3 className="text-xl font-bold">The Problem</h3>
								</div>
								<p className="text-gray-300 leading-relaxed">
									Hours spent wrestling with Word templates. Broken formatting after every edit.
									Beautiful designs that look terrible when exported. We&apos;ve all been there –
									the endless cycle of resume frustration that steals time from what really matters:
									job searching.
								</p>
							</div>

							<div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-white/10">
								<div className="flex items-center space-x-3 mb-6">
									<div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
										<span className="text-xl">💡</span>
									</div>
									<h3 className="text-xl font-bold">The Solution</h3>
								</div>
								<p className="text-gray-300 leading-relaxed">
									What if creating a resume could be as simple as filling out a form? What if you
									could see your changes instantly, without any formatting headaches? ResumeFast was
									born from this vision – a tool that just works, beautifully and effortlessly.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="py-20 px-6 bg-black/20">
				<div className="container mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							What We{' '}
							<span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
								Stand For
							</span>
						</h2>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all group">
							<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<span className="text-2xl">🚀</span>
							</div>
							<h3 className="text-xl font-bold mb-4">Simplicity First</h3>
							<p className="text-gray-300">
								Complex problems deserve simple solutions. We believe powerful tools should be
								intuitive, not intimidating. Every feature is designed with ease-of-use as the top
								priority.
							</p>
						</div>

						<div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all group">
							<div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<span className="text-2xl">✨</span>
							</div>
							<h3 className="text-xl font-bold mb-4">Beautiful by Default</h3>
							<p className="text-gray-300">
								Everyone deserves a resume that looks professionally designed. We&apos;ve done the
								hard work of creating stunning templates so you can focus on your content, not your
								design skills.
							</p>
						</div>

						<div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-white/10 hover:border-green-400/50 transition-all group">
							<div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<span className="text-2xl">🤝</span>
							</div>
							<h3 className="text-xl font-bold mb-4">Accessible to All</h3>
							<p className="text-gray-300">
								Professional resume tools shouldn&apos;t be a luxury. We&apos;re committed to
								keeping ResumeFast accessible and affordable, because everyone deserves a shot at
								their dream job.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Future Vision */}
			<section className="py-20 px-6">
				<div className="container mx-auto">
					<div className="max-w-4xl mx-auto text-center">
						<div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 p-12 rounded-3xl border border-purple-400/20">
							<div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-cyan-500 px-4 py-2 rounded-full text-sm font-semibold mb-8">
								<span>🔮</span>
								<span>Looking Ahead</span>
							</div>

							<h2 className="text-4xl font-bold mb-8">
								The Future of{' '}
								<span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
									Resume Building
								</span>
							</h2>

							<p className="text-lg text-gray-300 leading-relaxed mb-8">
								We&apos;re just getting started. Our roadmap includes AI-powered content
								optimization, industry-specific templates, real-time collaboration features, and
								intelligent job matching. ResumeFast isn&apos;t just a resume builder – it&apos;s
								your career advancement partner.
							</p>

							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link
									href="/"
									className="border-2 border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
								>
									Back to Home
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Team/Contact Section */}
			<section className="py-20 px-6 bg-black/20">
				<div className="container mx-auto">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-4xl font-bold mb-8">
							Built with{' '}
							<span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
								❤️
							</span>{' '}
							by Snebo
						</h2>
						<p className="text-lg text-gray-300 mb-8">
							ResumeFast is crafted by a developers who understand the job search struggle
							firsthand. I&apos;ve been where you are, and I&apos;m here to make the journey
							smoother for everyone who comes after.
						</p>

						<div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-white/10">
							<div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
								<div className="flex items-center space-x-3">
									<div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
										<span className="text-xl">💻</span>
									</div>
									<div className="text-left">
										<div className="font-semibold">Open Source</div>
										<div className="text-sm text-gray-400">Check our code on GitHub</div>
									</div>
								</div>

								<div className="flex items-center space-x-3">
									<div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
										<span className="text-xl">🌟</span>
									</div>
									<div className="text-left">
										<div className="font-semibold">Community Driven</div>
										<div className="text-sm text-gray-400">Your feedback shapes our future</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />

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
