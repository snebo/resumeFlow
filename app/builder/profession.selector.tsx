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
					className="rounded-md w-4/5 p-1 block mb-2 focus:shadow font-light text-gray-100  bg-white/10 border border-cyan-400/3"
					id="profession-select"
					value={info.skill}
					onChange={(event) =>
						setInfo((prevInfo: { skill: [] }) => {
							return { ...prevInfo, skill: event.target.value };
						})
					}
				>
					<option value="">--Select a Profession--</option>
					{Object.keys(Professions).map((profession) => (
						<option key={profession} value={profession} className="text-black">
							{profession}
						</option>
					))}
				</select>
			</label>
		</div>
	);
}
