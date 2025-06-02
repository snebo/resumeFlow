import { Professions } from '../data/data';

type professionalProps = {
	setInfo: any;
	info: any;
};

export default function ProfessionalSelector({ setInfo, info }: professionalProps) {
	return (
		<div>
			<label className="w-full text-md font-semibold">
				Select a Profession:
				<select
					className="border border-gray-200 rounded-md w-4/5 p-1 block mb-2 focus:shadow bg-white font-light text-gray-600"
					id="profession-select"
					value={info.skill}
					onChange={(event) =>
						setInfo((prevInfo: { skill: [] }) => {
							return { ...prevInfo, skill: event.target.value };
						})
					}
				>
					<option value="">--Please choose an option--</option>
					{Object.keys(Professions).map((profession) => (
						<option key={profession} value={profession}>
							{profession}
						</option>
					))}
				</select>
			</label>
		</div>
	);
}
