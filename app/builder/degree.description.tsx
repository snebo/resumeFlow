type Degree = {
	degreeDetail: { instituteName: string; degreeYears: number; gpa?: string; course: string };
	index: number;
	setInfo: any;
};

export default function Degree({ degreeDetail, index, setInfo }: Degree) {
	const handleRemove = () => {
		setInfo((prevInfo: { education: any[] }) => {
			const updatedEducation = prevInfo.education.filter((_: any, i: number) => i !== index);
			return { ...prevInfo, education: updatedEducation };
		});
	};

	return (
		<>
			<hr />
			<div className="flex justify-between items-center mb-2">
				<h3 className="text-lg font-semibold">Education #{index + 1}</h3>
				<button
					type="button"
					onClick={handleRemove}
					className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors"
				>
					Remove
				</button>
			</div>

			<label className="w-full text-md font-semibold">
				Institution:
				<input
					className="rounded-md w-4/5 p-1 block mb-2 focus:shadow font-light text-gray-100  bg-white/10 border border-cyan-400/3"
					type="text"
					value={degreeDetail.instituteName}
					placeholder="Enter Institution Name"
					onChange={(event) =>
						setInfo((prevInfo: { education: any }) => {
							const updatedEducation = [...prevInfo.education];
							updatedEducation[index] = {
								...updatedEducation[index],
								instituteName: event.target.value,
							};
							return { ...prevInfo, education: updatedEducation };
						})
					}
				/>
			</label>
			<label className="w-full text-md font-semibold">
				Course:
				<input
					className="rounded-md w-4/5 p-1 block mb-2 focus:shadow font-light text-gray-100  bg-white/10 border border-cyan-400/3"
					type="text"
					value={degreeDetail.course}
					placeholder="Enter Institution Name"
					onChange={(event) =>
						setInfo((prevInfo: { education: any }) => {
							const updatedEducation = [...prevInfo.education];
							updatedEducation[index] = {
								...updatedEducation[index],
								course: event.target.value,
							};
							return { ...prevInfo, education: updatedEducation };
						})
					}
				/>
			</label>
			<label className="w-full text-md font-semibold">
				GPA:
				<input
					className="rounded-md w-4/5 p-1 block mb-2 focus:shadow font-light text-gray-100  bg-white/10 border border-cyan-400/3"
					type="text"
					value={degreeDetail.gpa || ''}
					placeholder="Enter GPA"
					onChange={(event) =>
						setInfo((prevInfo: { education: any }) => {
							const updatedEducation = [...prevInfo.education];
							updatedEducation[index] = {
								...updatedEducation[index],
								gpa: event.target.value,
							};
							return { ...prevInfo, education: updatedEducation };
						})
					}
				/>
			</label>
			<label className="w-full text-md font-semibold">
				Years of Degree:
				<input
					className="rounded-md w-4/5 p-1 block mb-2 focus:shadow font-light text-gray-100  bg-white/10 border border-cyan-400/3"
					type="number"
					value={degreeDetail.degreeYears}
					placeholder="Enter Years"
					onChange={(event) =>
						setInfo((prevInfo: { education: any }) => {
							const updatedEducation = [...prevInfo.education];
							updatedEducation[index] = {
								...updatedEducation[index],
								degreeYears: Number(event.target.value),
							};
							return { ...prevInfo, education: updatedEducation };
						})
					}
				/>
			</label>
		</>
	);
}
