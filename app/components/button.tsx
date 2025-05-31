import Link from 'next/link';

type buttonType = {
	text: string;
	color: string;
	redirect: string;
	className: string;
};
export default function Button({ text, color, redirect, className }: buttonType) {
	return (
		<Link href={redirect}>
			<button
				className={className}
				style={{ backgroundColor: color, border: color, borderRadius: '12px' }}
			>
				{text}
			</button>
		</Link>
	);
}
