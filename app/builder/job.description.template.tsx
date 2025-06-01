import { defaultInfo } from '../data/data';

type JobDescriptionProps = {
	index: number;
	info: typeof defaultInfo;
	setInfo: React.Dispatch<React.SetStateAction<typeof defaultInfo>>;
};

export default function JobDescription({ index, info, setInfo }: JobDescriptionProps) {
	const job = info.experience[index] || ['', '', '', ''];
	return (
		<>
			<hr />
			<label className="w-full text-md font-semibold">
				Job Title:
				<input
					className="border border-gray-200 rounded-md w-4/5 p-1 block mb-2 focus:shadow bg-white font-light text-gray-600"
					type="text"
					value={job[0]}
					placeholder="Software Engineer"
					onChange={(event) =>
						setInfo((prevInfo) => {
							const updated = [...prevInfo.experience];
							updated[index] = [event.target.value, job[1], job[2], job[3]];
							return { ...prevInfo, experience: updated };
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
						value={job[1]}
						placeholder="2020-01-01"
						onChange={(event) =>
							setInfo((prevInfo) => {
								const updated = [...prevInfo.experience];
								updated[index] = [job[0], event.target.value, job[2], job[3]];
								return { ...prevInfo, experience: updated };
							})
						}
					/>
					<span>To: </span>
					<input
						className="border border-gray-200 rounded-md p-1 mb-2 focus:shadow bg-white font-light text-gray-600"
						type="date"
						value={job[1]}
						placeholder="2020-01-01"
						onChange={(event) =>
							setInfo((prevInfo) => {
								const updated = [...prevInfo.experience];
								updated[index] = [job[0], job[1], event.target.value, job[3]];
								return { ...prevInfo, experience: updated };
							})
						}
					/>
				</div>
			</label>
			<label className="w-full text-md font-semibold">
				Job Description:
				<textarea
					className="border border-gray-200 h-32 rounded-md w-4/5 p-1 block mb-2 focus:shadow bg-white font-light text-gray-600"
					value={job[2]}
					placeholder="Responsible for writing code. And stuff."
					onChange={(event) =>
						setInfo((prevInfo) => {
							const updated = [...prevInfo.experience];
							updated[index] = [job[0], job[1], job[2], event.target.value];
							return { ...prevInfo, experience: updated };
						})
					}
				/>
			</label>
		</>
	);
}
