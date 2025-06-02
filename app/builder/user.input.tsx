import AddDetailButton from './add.detail.button';
import Degree from './degree.description';
import JobDescription from './job.description.template';
import ProfessionalSelector from './profession.selector';

export default function InputInfo({
	info,
	setInfo,
	jobs,
	education,
	experience,
	handleSetDegree,
	handleSetExperience,
}: any) {
	return (
		<div className=" flex flex-wrap gap-2 flex-col w-full py-6 px-12">
			<label className="w-full text-md font-semibold">
				First Name
				<input
					className="border border-gray-200 rounded-md w-4/5 p-1 block mb-2 focus:shadow bg-white font-light text-gray-600 "
					type="text"
					value={info.firstName}
					placeholder="John"
					onChange={(event) =>
						setInfo((prevInfo: any) => ({ ...prevInfo, firstName: event.target.value }))
					}
				/>
			</label>
			<label className="w-full text-md font-semibold">
				Last Name
				<input
					className="border border-gray-200 rounded-md w-4/5 p-1 block mb-2 focus:shadow bg-white font-light text-gray-600"
					type="text"
					value={info.lastName}
					placeholder="Doe"
					onChange={(event) =>
						setInfo((prevInfo: any) => ({ ...prevInfo, lastName: event.target.value }))
					}
				/>
			</label>
			<label className="w-full text-md font-semibold">
				Job Title
				<input
					className="border border-gray-200 rounded-md w-4/5 p-1 block mb-2 focus:shadow bg-white font-light text-gray-600"
					type="text"
					value={info.jobTitle}
					placeholder="Position currently held or applying for"
					onChange={(event) =>
						setInfo((prevInfo: any) => ({ ...prevInfo, jobTitle: event.target.value }))
					}
				/>
			</label>
			<label className="w-full text-md font-semibold">
				Summary
				<textarea
					className="border border-gray-200 rounded-md w-4/5 h-25 p-1 block mb-2 focus:shadow bg-white font-light text-gray-600"
					value={info.summary}
					placeholder="Software Engineer"
					onChange={(event) =>
						setInfo((prevInfo: any) => ({ ...prevInfo, summary: event.target.value }))
					}
				/>
			</label>
			<ProfessionalSelector info={info} setInfo={setInfo} />
			{education.map((degree: any, i: number) => (
				<Degree degreeDetail={degree} key={i} index={i} setInfo={setInfo} />
			))}
			<AddDetailButton text="Add Education" setter={handleSetDegree} />

			{/* {Array.from({ length: jobs }).map((_, i) => (
				<JobDescription key={i} index={i} info={info} setInfo={setInfo} />
			))} */}
			{experience.map((position: any, i: number) => (
				<JobDescription index={i} info={position} setInfo={setInfo} key={i} />
			))}
			<AddDetailButton text="Add Job" setter={handleSetExperience} />
		</div>
	);
}
