type buttonType = {
	text: string;
	setter: () => void;
};

export default function AddDetailButton({ text, setter }: buttonType) {
	return (
		<div className="flex flex-wrap gap-2 items-center ">
			<div
				className="flex flex-wrap items-center justify-center w-8 h-8 border border-gray-700 bg-gray-600 hover:bg-gray-700 rounded hover:ring-2 ring-gray-900"
				onClick={setter}
			>
				<div className="text-white text-2xl">+</div>
			</div>
			<p>{text}</p>
		</div>
	);
}
