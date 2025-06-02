import { ifError } from 'assert';
import { defaultInfo, Experience } from '../data/data';
import InputInfo from './user.input';

type JobDescriptionProps = {
	info: {
		companyName: string;
		from: Date;
		to: Date;
		jobTitle: string;
		location?: string;
		jobDescription: string;
	};
	index: number;
	setInfo: any;
};

export default function JobDescription({ index, info, setInfo }: JobDescriptionProps) {
	const handleRemove = () => {
		setInfo((prevInfo: { experience: JobDescriptionProps[] }) => {
			const updated = prevInfo.experience.filter((_: any, i: number) => i !== index);
			return { ...prevInfo, experience: updated };
		});
	};
	return (
		<>
			<hr />
			<div className="flex justify-between items-center mb-2">
				<h2 className="text-lg font-semibold">Job #{index + 1}</h2>
				<button
					type="button"
					onClick={handleRemove}
					className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors"
				>
					Remove
				</button>
			</div>
			<label className="w-full text-md font-semibold">
				Job Title:
				<input
					className="border border-gray-200 rounded-md w-4/5 p-1 block mb-2 focus:shadow bg-white font-light text-gray-600"
					type="text"
					value={info.jobTitle}
					placeholder="Software Engineer"
					onChange={(event) =>
						setInfo((prevInfo: { experience: any }) => {
							const updatedExperience = [...prevInfo.experience];
							updatedExperience[index] = {
								...updatedExperience[index],
								jobTitle: event.target.value,
							};
							return { ...prevInfo, experience: updatedExperience };
						})
					}
				/>
			</label>
			<label className="w-full text-md font-semibold">
				Company:
				<input
					className="border border-gray-200 rounded-md w-4/5 p-1 block mb-2 focus:shadow bg-white font-light text-gray-600"
					type="text"
					value={info.companyName}
					placeholder="Google"
					onChange={(event) =>
						setInfo((prevInfo: { experience: any }) => {
							const updatedExperience = [...prevInfo.experience];
							updatedExperience[index] = {
								...updatedExperience[index],
								companyName: event.target.value,
							};
							return { ...prevInfo, experience: updatedExperience };
						})
					}
				/>
			</label>
			<label className="w-full text-md font-semibold">
				Employment Dates:
				<div className="text-sm font-normal">
					{/* TODO: convert the dates to string */}
					<span>From: </span>
					<input
						className="border border-gray-200 rounded-md p-1 mb-2 focus:shadow bg-white font-light text-gray-600"
						type="date"
						value={info.from ? info.from.toISOString().split('T')[0] : ''}
						placeholder="2020"
						onChange={(event) =>
							setInfo((prevInfo: { experience: any }) => {
								const updatedExperience = [...prevInfo.experience];
								updatedExperience[index] = {
									...updatedExperience[index],
									from: new Date(event.target.value),
								};
								return { ...prevInfo, experience: updatedExperience };
							})
						}
					/>
					<span>To: </span>
					<input
						className="border border-gray-200 rounded-md p-1 mb-2 focus:shadow bg-white font-light text-gray-600"
						type="date"
						value={info.to ? info.to.toISOString().split('T')[0] : ''}
						placeholder="2020"
						onChange={(event) =>
							setInfo((prevInfo: { experience: any }) => {
								const updatedExperience = [...prevInfo.experience];
								updatedExperience[index] = {
									...updatedExperience[index],
									to: new Date(event.target.value),
								};
								return { ...prevInfo, experience: updatedExperience };
							})
						}
					/>
				</div>
			</label>
			<label className="w-full text-md font-semibold">
				Job Description:
				<textarea
					className="border border-gray-200 h-32 rounded-md w-4/5 p-1 block mb-2 focus:shadow bg-white font-light text-gray-600"
					value={info.jobDescription}
					placeholder="Responsible for writing code. And stuff."
					onChange={(event) =>
						setInfo((prevInfo: { experience: any }) => {
							const updatedExperience = [...prevInfo.experience];
							updatedExperience[index] = {
								...updatedExperience[index],
								jobDescription: event.target.value,
							};
							return { ...prevInfo, experience: updatedExperience };
						})
					}
				/>
			</label>
		</>
	);
}
