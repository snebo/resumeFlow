type Degree = {
	degreeDetail: { instituteName: string; degreeYears: number; gpa?: string };
	index: number;
	setInfo: any;
};

export default function Degree({ degreeDetail, index, setInfo }: Degree) {
	const handleRemove = () => {
		setInfo((prevInfo) => {
			const updatedEducation = prevInfo.education.filter((_, i) => i !== index);
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
					className="border border-gray-200 rounded-md w-4/5 p-1 block mb-2 focus:shadow bg-white font-light text-gray-600"
					type="text"
					value={degreeDetail.instituteName}
					placeholder="Enter Institution Name"
					onChange={(event) =>
						setInfo((prevInfo) => {
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
				GPA:
				<input
					className="border border-gray-200 rounded-md w-[80px] p-1 block mb-2 focus:shadow bg-white font-light text-gray-600"
					type="text"
					value={degreeDetail.gpa || ''}
					placeholder="Enter GPA"
					onChange={(event) =>
						setInfo((prevInfo) => {
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
					className="border border-gray-200 rounded-md w-[80px] p-1 block mb-2 focus:shadow bg-white font-light text-gray-600"
					type="number"
					value={degreeDetail.degreeYears}
					placeholder="Enter Years"
					onChange={(event) =>
						setInfo((prevInfo) => {
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
