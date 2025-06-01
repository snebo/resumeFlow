import { info } from 'console';
import Image from 'next/image';
import Link from 'next/link';

export default function ResumeImage({ information }: any) {
	return (
		<div className="border border-gray-300  bg-white shadow-2xl w-full px-6">
			<div className="flex flex-nowrap gap-2 px-6 pt-6 min-h-34s pb-3">
				<div className="basicInfo border-r-gray-500 text-2xl w-1/2 flex flex-col items-start justify-center uppercase">
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
			<hr className="border border-gray-300" />
			<div className="flex flex-nowrap gap-2 px-6 pt-3 min-h-34 pb-3">
				<div className="w-1/2 border-r border-gray-300">
					<h4 className="uppercase font-semibold text-gray-500 text-[14px]">Profile Summary</h4>
					<p className="text-gray-900 text-[12px]">{information.summary}</p>
				</div>
				<div className="w-1/2 pl-4">
					<h4 className="uppercase font-semibold text-gray-500 text-[14px]">Education</h4>
				</div>
			</div>
		</div>
	);
}
// return (
// 	<div className="flex flex-col gap-4 border rounded p-6 w-1/2">
// 		<h1 className="text-2xl font-semibold">
// 			{information.firstName} {information.lastName}
// 		</h1>
// 		<p className="text-sm">{information.summary}</p>
// 		<div className="grid grid-cols-2 gap-4">
// 			<div>
// 				<h2 className="text-lg font-semibold">Experience</h2>
// 				<ul className="list-disc">
// 					{information.experience.map((exp: string, index: number) => (
// 						<li key={index}>
// 							<h3 className="text-base font-semibold">{exp[0]}</h3>
// 							<p className="text-sm">{exp[1]}</p>
// 							<p className="text-sm">{exp[2]}</p>
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 			<div>
// 				<h2 className="text-lg font-semibold">Skills</h2>
// 				<ul className="list-disc">
// 					{information.skills.map((skill: string, index: number) => (
// 						<li key={index}>{skill}</li>
// 					))}
// 				</ul>
// 			</div>
// 		</div>
// 	</div>
// );
