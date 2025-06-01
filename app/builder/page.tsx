'use client';
import '@/app/styles/builder.css';
import { useState } from 'react';
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
			education: [...prevInfo.education, { instituteName: '', degreeYears: 0, gpa: '' }],
		}));

	return (
		<>
			<div className="flex w-full items-center justify-between gap-3 p-3 h-[calc(100vh-4rem)]">
				<div className="w-1/2">
					<h1 className="text-2xl pt-5 px-3 font-bold capitalize">Build your resume</h1>
					<InputInfo
						info={info}
						setInfo={setInfo}
						jobs={jobs}
						handleSetJobs={handleSetJobs}
						education={info.education}
						handleSetDegree={handleSetDegree}
					/>
				</div>
				<div className="w-1/2 flex items-center justify-center">
					<ResumeImage information={info} />
				</div>
			</div>
		</>
	);
}
