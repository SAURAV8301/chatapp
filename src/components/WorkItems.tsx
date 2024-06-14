import ExpandableTable from "./ExpandableTable";

// components/WorkItems.js
const WorkItems = () => {
	return (
		<div className="my-6">
			<div className="flex justify-between items-center">
				<h4 className="font-semibold">Work items</h4>
				<div className="flex justify-center items-center gap-2">
					<button
						type="button"
						className="px-2 py-1.5 bg-zinc-500 text-white text-sm font-bold rounded-md flex justify-center items-center gap-2"
					>
						Export
					</button>
					<button
						type="button"
						className="px-2 py-1.5 bg-blue-500 text-white text-sm font-bold rounded-md flex justify-center items-center gap-2"
					>
						Create New
					</button>
				</div>
			</div>
			<div className="flex my-2 justify-between gap-3">
				<input
					type="text"
					className="border border-zinc-300 rounded-md p-1.5 w-full"
					placeholder="Work Item"
				/>
				<input
					type="text"
					className="border border-zinc-300 rounded-md p-1.5 w-full"
					placeholder="Client Name"
				/>
				<input
					type="text"
					className="border border-zinc-300 rounded-md p-1.5 w-full"
					placeholder="Sub Client"
				/>
				<input
					type="text"
					className="border border-zinc-300 rounded-md p-1.5 w-full"
					placeholder="Patient Name"
				/>
				<input
					type="text"
					className="border border-zinc-300 rounded-md p-1.5 w-full"
					placeholder="File Type"
				/>
				<input
					type="text"
					className="border border-zinc-300 rounded-md p-1.5 w-full"
					placeholder="Priority"
				/>
				<div className="flex justify-center items-center gap-3">
					<div className="bg-white px-3 rounded-md cursor-pointer flex items-center justify-center">
						<p className="font-bold text-2xl text-gray-400">㆔</p>
					</div>

					<div className="bg-white px-3 rounded-md cursor-pointer flex items-center justify-center">
						<p className="font-bold text-2xl text-gray-400">🔍</p>
					</div>
				</div>
			</div>
			<ExpandableTable />
			<div className="flex justify-between items-center p-3">
				<div className="flex justify-center items-center gap-2">
					<button
						type="button"
						className="px-2 py-1.5 bg-zinc-500 text-white text-sm font-bold rounded-md flex justify-center items-center gap-2"
					>
						Split
					</button>
					<button
						type="button"
						className="px-2 py-1.5 bg-zinc-500 text-white text-sm font-bold rounded-md flex justify-center items-center gap-2"
					>
						Merge
					</button>
					<button
						type="button"
						className="px-2 py-1.5 bg-blue-500 text-white text-sm font-bold rounded-md flex justify-center items-center gap-2"
					>
						Create Job
					</button>
				</div>
				<div className="flex justify-between gap-2 items-center">
					<div className="bg-white px-3 rounded-md cursor-pointer shadow-md">
						<p className="font-bold text-2xl text-gray-400">˂</p>
					</div>

					<div className="bg-blue-500 px-2 rounded-md border-gray-400 border cursor-pointer">
						<p className="text-white">1</p>
					</div>
					<div className="bg-white px-2 rounded-md border-gray-400 border cursor-pointer">
						<p className="">2</p>
					</div>
					<div className="bg-white px-2 rounded-md border-gray-400 border cursor-pointer">
						<p className="">3</p>
					</div>
					<span>....</span>
					<div className="bg-white px-3 rounded-md shadow-md">
						<p className="font-bold text-2xl text-gray-400 cursor-pointer">˃</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkItems;
