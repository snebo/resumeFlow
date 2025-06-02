'use client';
import '@/app/styles/builder.css';
import { useState } from 'react';
import Footer from '../components/footer';
import ResumeImage from '../components/resume';
import { defaultInfo } from '../data/data';
import InputInfo from './user.input';

export default function Page() {
	const [info, setInfo] = useState(defaultInfo);
	const [jobs, setJobs] = useState(0);

	const handleSetJobs = () => setJobs((prevJob) => jobs + 1);
	const handleSetDegree = () =>
		setInfo((prevInfo) => ({
			...prevInfo,
			education: [
				...prevInfo.education,
				{ instituteName: '', degreeYears: 0, gpa: '', course: '' },
			],
		}));
	const handleSetExperience = () =>
		setInfo((prevInfo) => ({
			...prevInfo,
			experience: [
				...prevInfo.experience,
				{
					jobTitle: '',
					jobDescription: '',
					to: new Date(),
					from: new Date(),
					companyName: '',
					location: '',
				},
			],
		}));

	return (
		<div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen flex flex-col">
			{/* Main Content */}
			<div className="flex-1 flex w-full items-start justify-between gap-6 p-3">
				<div className="w-1/2 mt-[4rem]">
					<h1 className="text-3xl shadow-amber-400 font-bold bg-gradient-to-r from-cyan-300 to-purple-700 bg-clip-text text-transparent pl-12 mt-5">
						Build your resume
					</h1>
					<InputInfo
						info={info}
						setInfo={setInfo}
						jobs={jobs}
						handleSetJobs={handleSetJobs}
						education={info.education}
						experience={info.experience}
						handleSetDegree={handleSetDegree}
						handleSetExperience={handleSetExperience}
					/>
				</div>
				<div className="w-1/2 flex items-center justify-center mt-[20vh]">
					<ResumeImage information={info} />
				</div>
			</div>

			{/* Footer */}
			<footer className="py-12 px-6 bg-black/40 border-t border-white/10 mt-auto">
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
		</div>
	);
}
