import '@/app/styles/navbar.styles.css';
import Link from 'next/link';
import Button from './button';

export default function Navabar() {
	const navLinkClass =
		'block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700';

	return (
		<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
				<Link
					href="/"
					className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
				>
					TailorIT
				</Link>
				<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
					<Button
						text="Create Resume"
						color="blue"
						redirect="/build"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-md px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					/>
				</div>
				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="navbar-sticky"
				>
					<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<Link
								href="/"
								className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
								aria-current="page"
							>
								Home
							</Link>
						</li>
						<li>
							<Link href="/about" className={navLinkClass}>
								About
							</Link>
						</li>
						<li>
							<Link href="#" className={navLinkClass}>
								Find Me
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
