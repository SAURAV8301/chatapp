import Link from "next/link";
import { useState } from "react";

const ExpandableTable = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleRow = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="p-3">
			<div className="overflow-x-auto">
				<table className="w-full table-auto border-collapse">
					<thead className="bg-gray-100">
						<tr>
							<th className="p-3 text-sm text-zinc-500 text-left">
								<div className="flex justify-center items-center gap-2">
									<input type="checkbox" />
									<p>Important Date Time</p>
								</div>
							</th>
							<th className="p-3 text-sm text-zinc-500 text-left">Work Item</th>
							<th className="p-3 text-sm text-zinc-500 text-left">
								Client Name
							</th>
							<th className="p-3 text-sm text-zinc-500 text-left">
								Sub-Client Name
							</th>
							<th className="p-3 text-sm text-zinc-500 text-left">File Type</th>
							<th className="p-3 text-sm text-zinc-500 text-left">Status</th>
							<th className="p-3 text-sm text-zinc-500 text-left">Priority</th>
							<th className="p-3 text-sm text-zinc-500 text-left">
								Patient Name
							</th>
							<th className="p-3 text-sm text-zinc-500 text-left">
								Report Type
							</th>
							<th className="p-3 text-sm text-zinc-500 text-left">
								Date of Service
							</th>
							<th className="p-3 text-sm text-zinc-500 text-left">
								Due Date Time
							</th>
							<th className="p-3 text-sm text-zinc-500 text-left">Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white p-3 rounded-lg shadow-md mt-2">
							<td className="p-3">
								<div className="flex items-center gap-2">
									<input type="checkbox" />
									<div className="flex flex-col justify-start">
										<p className="text-base">10-6-2022</p>
										<span className="text-xs text-zinc-500">01:00 AM</span>
									</div>
								</div>
							</td>
							<td className="p-3">
								<span className="text-base underline text-sky-600 font-semibold">
									W-001-001
								</span>
							</td>
							<td className="p-3 text-sm text-zinc-500">Dr.Joseph King</td>
							<td className="p-3 text-sm text-zinc-500">New York-Street 5</td>
							<td className="p-3">
								<div className="flex flex-col justify-start">
									<p className="text-base">PDF</p>
									<span className="text-xs text-zinc-500">560 pages</span>
								</div>
							</td>
							<td className="p-3">
								<div className="flex flex-col justify-start">
									<p className="text-base">Job Created</p>
									<span className="text-xs underline text-sky-600">
										JOB-01-001
									</span>
								</div>
							</td>
							<td className="p-3">
								<span className="text-sm rounded-2xl text-orange-500 bg-yellow-100 py-1 px-5">
									Start
								</span>
							</td>
							<td className="p-3 text-sm text-zinc-500">Robin</td>
							<td className="p-3 text-sm text-zinc-500">ROR</td>
							<td className="p-3 text-sm text-zinc-500">12-06-2022</td>
							<td className="p-3">
								<div className="flex flex-col justify-start">
									<p className="text-base">12-06-2022</p>
									<span className="text-xs text-zinc-500">01:00 AM</span>
								</div>
							</td>
							<td className="p-3 flex items-center gap-2">
								{/* Pencil icon */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="24"
									height="24"
								>
									<path d="M3 21v-3.8L14.1 6.1 17.9 10l-11.1 11.1H3zm0-1.5L1.5 23.5 4.5 21zm3.5-6.5L14.1 7.4l2.8 2.8-7.6 7.6H6.5v-2.8zm8.3-10.9l2.8 2.8L16.1 9 13.3 6.2z" />
								</svg>

								{/* Dropdown icon */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className={`h-5 w-5 text-gray-500 cursor-pointer ${isOpen ? "transform rotate-180" : ""}`}
									viewBox="0 0 20 20"
									fill="currentColor"
									onClick={toggleRow}
								>
									<path
										fillRule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</td>
						</tr>
						{isOpen && (
							<tr className="expanded-content bg-gray-50">
								<td colSpan={12} className="p-3">
									<div className="flex justify-start gap-2 mb-3 flex-wrap">
										<button
											className="px-3 py-1 text-sm bg-gray-200 rounded"
											type="button"
										>
											Documents
										</button>
										<button
											className="px-3 py-1 text-sm bg-yellow-400 rounded"
											type="button"
										>
											Patient History
										</button>
										<button
											className="px-3 py-1 text-sm bg-gray-200 rounded"
											type="button"
										>
											Comments
										</button>
										<button
											className="px-3 py-1 text-sm bg-gray-200 rounded"
											type="button"
										>
											Logs
										</button>
									</div>
									<div className="overflow-x-auto">
										<table className="w-full table-auto border-collapse bg-white rounded-lg">
											<thead>
												<tr className="bg-gray-100">
													<th className="p-2 text-sm text-zinc-500 text-left">
														No.
													</th>
													<th className="p-2 text-sm text-zinc-500 text-left">
														Job No.
													</th>
													<th className="p-2 text-sm text-zinc-500 text-left">
														Client Name
													</th>
													<th className="p-2 text-sm text-zinc-500 text-left">
														Sub-Client Name
													</th>
													<th className="p-2 text-sm text-zinc-500 text-left">
														Patient Name
													</th>
													<th className="p-2 text-sm text-zinc-500 text-left">
														Patient File Name
													</th>
													<th className="p-2 text-sm text-zinc-500 text-left">
														Last Date of Service
													</th>
													<th className="p-2 text-sm text-zinc-500 text-left">
														Last Delivery Date
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="p-2 text-sm text-zinc-500">1</td>
													<td className="p-2 text-sm text-sky-600">
														<Link href="#">JOB-01-001</Link>
													</td>
													<td className="p-2 text-sm text-zinc-500">
														Dr. Joseph King
													</td>
													<td className="p-2 text-sm text-zinc-500">
														Dr. Joseph King
													</td>
													<td className="p-2 text-sm text-zinc-500">Robin</td>
													<td className="p-2 text-sm text-sky-600">
														<Link href="#">Robin.pdf</Link>
													</td>
													<td className="p-2 text-sm text-zinc-500">
														12-06-2022
													</td>
													<td className="p-2 text-sm text-zinc-500">
														12-06-2022
													</td>
												</tr>
												{/* Additional rows go here if needed */}
											</tbody>
										</table>
									</div>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ExpandableTable;
