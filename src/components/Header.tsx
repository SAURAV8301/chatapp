// components/Header.js
import Image from "next/image";
import { type SetStateAction, useState } from "react";

const Header = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchChange = (e: {
		target: { value: SetStateAction<string> };
	}) => {
		setSearchQuery(e.target.value);
	};

	return (
		<header className="flex flex-col md:flex-row justify-between items-center mb-6 border-b pb-2">
			<div />
			<div className="relative mb-4 md:mb-0">
				<input
					type="text"
					className="border rounded-lg p-2 w-full md:w-auto"
					placeholder="Search here"
					value={searchQuery}
					onChange={handleSearchChange}
				/>
				<div className="absolute right-2 top-2 text-gray-400">🔍</div>
			</div>
			<div className="flex items-center">
				<div className="mr-4">🔔</div>
				<div className="flex items-center gap-2 cursor-pointer">
					<Image
						src="https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109"
						alt="Arvind"
						width={40}
						height={40}
						className="w-12 h-12 rounded-full"
					/>
					<div className="flex gap-2 justify-center items-center">
						<div className="flex flex-col">
							<div className="mr-2 font-semibold">Arvind</div>
							<p className="text-sm text-zinc-500">Sorter</p>
						</div>
						{/* Dropdown icon */}
						{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-gray-500 cursor-pointer"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
