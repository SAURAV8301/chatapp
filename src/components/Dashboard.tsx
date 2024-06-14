"use client";
import DashboardCards from "@/components/DashboardCard";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import WorkItems from "@/components/WorkItems";
import ChatButton from "./ChatButton";

const users = [
	{
		id: 1,
		name: "Alice Smith",
		avatar:
			"https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
		messageCount: 2,
	},
	{
		id: 2,
		name: "Bob Johnson",
		avatar:
			"https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
		messageCount: 1,
	},
	{
		id: 3,
		name: "Eve Brown",
		avatar:
			"https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
	},
	{
		id: 4,
		name: "John Doe",
		avatar:
			"https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
	},
	{
		id: 5,
		name: "Emily Davis",
		avatar:
			"https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
	},
	{
		id: 6,
		name: "Michael Wilson",
		avatar:
			"https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
	},
	{
		id: 7,
		name: "Sophia Miller",
		avatar:
			"https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
	},
	{
		id: 8,
		name: "David Anderson",
		avatar:
			"https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
	},
	{
		id: 9,
		name: "Olivia Garcia",
		avatar:
			"https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
	},
	{
		id: 10,
		name: "James Martinez",
		avatar:
			"https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
	},
	{
		id: 11,
		name: "Isabella Robinson",
		avatar:
			"https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
	},
	{
		id: 12,
		name: "William Clark",
		avatar:
			"https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
	},
	{
		id: 13,
		name: "Charlotte Hernandez",
		avatar:
			"https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
	},
	{
		id: 14,
		name: "Daniel Young",
		avatar:
			"https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
	},
	{
		id: 15,
		name: "Amelia Lewis",
		avatar:
			"https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109",
	},
];

const Dashboard = () => {
	return (
		<div className="flex h-screen bg-gray-100">
			<Sidebar />
			<main className="flex-1 p-6 overflow-y-auto md:ml-0">
				<Header />
				<div className="m-4">
					<h1 className="text-2xl font-semibold">Hello Arvind</h1>
					<p className="text-gray-600">Today is Thursday, 21 July 2022</p>
				</div>
				<DashboardCards />
				<div className="flex justify-between items-center">
					<div className="bg-white px-3 rounded-md cursor-pointer shadow-md">
						<p className="font-bold text-2xl text-gray-400">˂</p>
					</div>
					<div className="bg-white px-3 rounded-md shadow-md">
						<p className="font-bold text-2xl text-gray-400 cursor-pointer ">
							˃
						</p>
					</div>
				</div>
				<WorkItems />
				<ChatButton users={users} />
			</main>
		</div>
	);
};

export default Dashboard;
