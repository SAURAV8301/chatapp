import Link from "next/link";

// components/DashboardCards.js
const DashboardCards = () => {
	return (
		<div className="flex flex-col md:flex-row gap-4 mb-4">
			<div className="bg-sky-200 p-3 rounded-lg flex flex-col gap-3 shadow-xl w-full md:w-80">
				<p className="font-semibold">Total</p>
				<div className="flex justify-between items-center border-dotted border-gray-500 border-b-2">
					<p className="text-sm text-zinc-700">Files Received</p>
					<p className="text-xl font-bold text-sky-600">200</p>
				</div>
				<div className="flex justify-between items-center border-dotted border-gray-500 border-b-2">
					<p className="text-sm text-zinc-700">Pending Files</p>
					<p className="text-xl font-bold text-orange-400">150</p>
				</div>
				<div className="flex justify-between items-center border-dotted border-gray-500 border-b-2">
					<p className="text-sm text-zinc-700">Error Files</p>
					<p className="text-xl font-bold text-red-700">50</p>
				</div>
				<Link href="#" className="text-blue-600 underline">
					View
				</Link>
			</div>
			<div className="flex flex-col gap-3 w-full">
				<div className="flex flex-col md:flex-row justify-between gap-3 shadow-lg rounded-lg bg-orange-100 p-2">
					<div className="flex flex-col gap-2 p-3 w-full md:w-1/2">
						<div className="flex flex-row justify-between items-center">
							<p className="font-semibold">RoR</p>
							<Link href="#" className="text-blue-600 underline">
								View
							</Link>
						</div>
						<div className="flex flex-row justify-between gap-3 md:gap-12 items-center">
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">New</p>
								<p className="text-lg font-bold text-sky-600">10</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">WIP</p>
								<p className="text-lg font-bold text-orange-400">50</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">Hold</p>
								<p className="text-lg font-bold text-red-700">20</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">Completed</p>
								<p className="text-lg font-bold text-green-600">20</p>
							</div>
						</div>
					</div>
					<div
						className="flex flex-col gap-2 rounded-lg p-3 w-full md:w-1/2"
						style={{ backgroundColor: "#fefaf6" }}
					>
						<div className="flex flex-row justify-between items-center">
							<p className="font-semibold">RoR</p>
							<Link href="#" className="text-blue-600 underline">
								View
							</Link>
						</div>
						<div className="flex flex-row justify-between gap-3 md:gap-12 items-center">
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">New</p>
								<p className="text-lg font-bold text-sky-600">10</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">WIP</p>
								<p className="text-lg font-bold text-orange-400">50</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">Hold</p>
								<p className="text-lg font-bold text-red-700">20</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">Completed</p>
								<p className="text-lg font-bold text-green-600">20</p>
							</div>
						</div>
					</div>
					<div
						className="flex flex-col gap-2 rounded-lg p-3 w-full md:w-1/2"
						style={{ backgroundColor: "#fefaf6" }}
					>
						<div className="flex flex-row justify-between items-center">
							<p className="font-semibold">RoR</p>
							<Link href="#" className="text-blue-600 underline">
								View
							</Link>
						</div>
						<div className="flex flex-row justify-between gap-3 md:gap-12 items-center">
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">New</p>
								<p className="text-lg font-bold text-sky-600">10</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">WIP</p>
								<p className="text-lg font-bold text-orange-400">50</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">Hold</p>
								<p className="text-lg font-bold text-red-700">20</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">Completed</p>
								<p className="text-lg font-bold text-green-600">20</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-between gap-3 rounded-lg shadow-lg bg-green-100 p-2">
					<div className="flex flex-col gap-2 p-3 w-full md:w-1/2">
						<div className="flex flex-row justify-between items-center">
							<p className="font-semibold">RoR</p>
							<Link href="#" className="text-blue-600 underline">
								View
							</Link>
						</div>
						<div className="flex flex-row justify-between gap-3 md:gap-12 items-center">
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">New</p>
								<p className="text-lg font-bold text-sky-600">10</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">WIP</p>
								<p className="text-lg font-bold text-orange-400">50</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">Hold</p>
								<p className="text-lg font-bold text-red-700">20</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">Completed</p>
								<p className="text-lg font-bold text-green-600">20</p>
							</div>
						</div>
					</div>
					<div
						className="flex flex-col gap-2 rounded-lg p-3 w-full md:w-1/2"
						style={{ backgroundColor: "#f1faf4" }}
					>
						<div className="flex flex-row justify-between items-center">
							<p className="font-semibold">RoR</p>
							<Link href="#" className="text-blue-600 underline">
								View
							</Link>
						</div>
						<div className="flex flex-row justify-between gap-3 md:gap-12 items-center">
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">New</p>
								<p className="text-lg font-bold text-sky-600">10</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">WIP</p>
								<p className="text-lg font-bold text-orange-400">50</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">Hold</p>
								<p className="text-lg font-bold text-red-700">20</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">Completed</p>
								<p className="text-lg font-bold text-green-600">20</p>
							</div>
						</div>
					</div>
					<div
						className="flex flex-col gap-2 rounded-lg p-3 w-full md:w-1/2"
						style={{ backgroundColor: "#f1faf4" }}
					>
						<div className="flex flex-row justify-between items-center">
							<p className="font-semibold">RoR</p>
							<Link href="#" className="text-blue-600 underline">
								View
							</Link>
						</div>
						<div className="flex flex-row justify-between gap-3 md:gap-12 items-center">
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">New</p>
								<p className="text-lg font-bold text-sky-600">10</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">WIP</p>
								<p className="text-lg font-bold text-orange-400">50</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">Hold</p>
								<p className="text-lg font-bold text-red-700">20</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="text-sm text-zinc-500">Completed</p>
								<p className="text-lg font-bold text-green-600">20</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardCards;
