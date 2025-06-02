import { info } from 'console';
import Image from 'next/image';
import Link from 'next/link';
import { Professions } from '../data/data';

export default function ResumeImage({ information }: any) {
	const descriptionFormatter = (description: string) => {
		return description.split('\n').map((line, index) => (
			<span key={index}>
				{line}
				<br />
			</span>
		));
	};
	return (
		<div className="border border-gray-300  bg-white shadow-2xl w-full px-6">
			<div className="flex flex-nowrap gap-2 px-6 pt-6 min-h-34 pb-3">
				<div className="basicInfo text-2xl w-1/2 flex flex-col justify-center uppercase">
					{information.firstName} <span className="block">{information.lastName}</span>
					<span className="font-light text-gray-400 text-[11px]">{information.jobTitle}</span>
				</div>
				<div className="border-l border-gray-300 pl-4 font-light text-[12px] flex flex-col items-start justify-center">
					<p>
						<Image
							alt="linkedin"
							src="/linkedin.png"
							width={15}
							height={15}
							className="rounded inline-block"
						/>{' '}
						<Link href={'https://linkedin.com/stefano-nebo'}>linkedin</Link>
					</p>
					<p>
						<Image
							alt="site"
							src="/linkedin.png"
							width={15}
							height={15}
							className="rounded inline-block"
						/>{' '}
						<Link href={'https://versel/stefano-nebo'}>website</Link>
					</p>
					<p>
						<Image
							alt="mail me"
							src="/mail.png"
							width={15}
							height={15}
							className="rounded inline-block"
						/>{' '}
						<Link href={'mailto:snebo54@hotmail.com'}>Snebo54@hotmail.com</Link>
					</p>
				</div>
			</div>

			<div className="flex flex-nowrap gap-2 px-6 py-5 min-h-34  border-t-2 border-gray-300">
				<div className="w-1/2 ">
					<h4 className="uppercase font-semibold text-gray-500 text-[14px]">Profile Summary</h4>
					<p className="text-gray-900 text-[12px] text-justify pr-2">{information.summary}</p>
				</div>
				<div className="w-1/2 pl-4 border-l border-gray-300">
					<h4 className="uppercase font-semibold text-gray-500 text-[14px]">Education</h4>
					{information.education.map((edu: any, index: number) => (
						<div className="flex flex-nowrap" key={index}>
							<div className="">&#9821;</div>
							<div key={index}>
								<h3 className=" text-[11px] font-semibold text-gray-600 capitalize">
									{edu.instituteName}
								</h3>
								<p className="text-gray-900 text-[11px]">
									{edu.degreeYears} years (
									<span className="font-semibold text-gray-700">{edu.course}</span>)
								</p>
								<p className="text-gray-700 font-semibold text-[11px]">{edu.gpa} GPA</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-nowrap gap-2 px-6 min-h-34 py-5 border-t-2 border-gray-300">
				<div className="w-1/2 pr-2">
					<h4 className="uppercase font-semibold text-gray-500 text-[14px]">
						Professional Experience
						{information.experience.map((exp: any, index: number) => (
							<div className="flex flex-nowrap items-start" key={index}>
								<div className="leading-none">&#9679;</div>
								<div className="flex flex-nowrap flex-col pl-1">
									<h5 className="font-semibold text-[12px] uppercase">{exp.jobTitle}</h5>
									<div className="flex flex-nowrap justify-between">
										<h6 className="font-light text-[12px] capitalize text-gray-500">
											{exp.companyName}
										</h6>
										<p className="font-light text-[12px] capitalize text-gray-500">
											{exp.from.toString().split(' ')[3]} - {exp.to.toString().split(' ')[3]}
										</p>
									</div>
									<p className="font-normal text-[12px] text-gray-600 sentene normal-case">
										{descriptionFormatter(exp.jobDescription)}
									</p>
								</div>
							</div>
						))}
					</h4>
				</div>
				<div className="w-1/2 border-l border-gray-300 pl-3 ">
					<h4 className="uppercase font-semibold text-gray-500 text-[14px]">skills</h4>
					<div className="flex flex-wrap gap-3">
						{Professions[information.skill as keyof typeof Professions]?.map(
							(skill: any, index: number) => (
								<div className=" border rounded text-[12px] shadow p-1" key={skill}>
									{skill}
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
