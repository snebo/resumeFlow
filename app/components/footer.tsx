export default function Footer() {
	return (
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
	);
}
