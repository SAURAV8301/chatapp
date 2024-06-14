// components/Sidebar.js
import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<button
				onClick={toggleSidebar}
				type="button"
				className="md:hidden block p-4 focus:outline-none"
			>
				☰
			</button>
			<aside
				className={`bg-white fixed md:relative top-0 left-0 h-full z-50 md:z-auto transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out w-64 p-6`}
			>
				<div className="flex justify-between items-center">
					<div className="text-xl font-semibold">ALTOS</div>
					<button
						onClick={toggleSidebar}
						type="button"
						className="md:hidden block p-2 focus:outline-none"
					>
						×
					</button>
				</div>
				<nav className="mt-6">
					<ul>
						<li className="mt-2">
							<Link href="#" className="block p-2 text-blue-600 font-medium">
								Workitem
							</Link>
						</li>
						<li className="mt-2">
							<Link href="#" className="block p-2 text-gray-700">
								Jobs
							</Link>
						</li>
						<li className="mt-2">
							<Link href="#" className="block p-2 text-gray-700">
								Report
							</Link>
						</li>
						<li className="mt-2">
							<Link href="#" className="block p-2 text-gray-700">
								Menu 4
							</Link>
						</li>
						<li className="mt-2">
							<Link href="#" className="block p-2 text-gray-700">
								Settings
							</Link>
						</li>
					</ul>
				</nav>
			</aside>
		</div>
	);
};

export default Sidebar;
