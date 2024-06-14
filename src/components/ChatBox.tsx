import { useState } from "react";
import Image from "next/image";
import type { User } from "./types";

interface ChatBoxProps {
	users: User[]; // Array of users
	onClose: () => void; // Function to close the chat box
}

const ChatBox: React.FC<ChatBoxProps> = ({ users, onClose }) => {
	const [messages, setMessages] = useState<{ user: string; text: string }[]>([
		{ user: "Alice Smith", text: "Hi Bob, how are you?" },
		{ user: "Bob Johnson", text: "Hi Alice, I'm good! How about you?" },
		{ user: "Alice Smith", text: "I'm doing well, thanks for asking!" },
	]);
	const [inputValue, setInputValue] = useState("");

	const handleSendMessage = () => {
		if (inputValue.trim()) {
			setMessages([...messages, { user: "You", text: inputValue }]);
			setInputValue("");
		}
	};

	return (
		<div>
			<div className="fixed bottom-4 right-[26rem] shadow-lg rounded-lg w-96">
				<div>
					<div className="flex flex-col gap-4">
						<div className="flex justify-between bg-sky-200 p-3 rounded-sm">
							<div className="flex items-center space-x-2">
								<Image
									src="https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109"
									width={32}
									height={32}
									alt="user"
									className="w-8 h-8 rounded-full"
								/>
								<h2 className="text-lg font-semibold">Alice Smith</h2>
							</div>
							<div className="flex gap-2 justify-center items-center">
								<button
									className="text-gray-500 hover:text-gray-700"
									onClick={onClose}
									type="button"
								>
									{/* Close icon */}
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M13.414 12l3.293 3.293a1 1 0 01-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 01-1.414-1.414L10.586 12 7.293 8.707a1 1 0 111.414-1.414L12 10.586l3.293-3.293a1 1 0 111.414 1.414L13.414 12z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
								<button
									className="text-gray-500 hover:text-gray-700"
									type="button"
								>
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="17"
										height="17"
									>
										<circle cx="12" cy="5" r="2" />
										<circle cx="12" cy="12" r="2" />
										<circle cx="12" cy="19" r="2" />
									</svg>
								</button>
							</div>
						</div>
						<div className="bg-white rounded-sm p-4">
							<div className="flex flex-col space-y-2">
								{messages.map((message, index) => {
									const isOutgoing = message.user === "You";
									const user = users.find((u) => u.name === message.user);
									const userAvatar =
										user?.avatar || "https://via.placeholder.com/32";

									return (
										<div
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											key={index}
											className={`flex ${isOutgoing ? "justify-end" : "justify-start"}`}
										>
											{!isOutgoing && (
												<div className="flex items-start mr-2">
													<Image
														src={userAvatar}
														alt={message.user}
														className="w-8 h-8 rounded-full"
														width={32}
														height={32}
													/>
												</div>
											)}
											<div
												className={`p-2 rounded-md ${
													isOutgoing ? "bg-blue-500 text-white" : "bg-gray-200"
												}`}
											>
												<span className="font-semibold">{message.user}:</span>
												<span className="ml-2">{message.text}</span>
											</div>
											{isOutgoing && (
												<div className="flex items-start ml-2">
													<Image
														src="https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109"
														alt="You"
														className="w-8 h-8 rounded-full"
														width={32}
														height={32}
													/>
												</div>
											)}
										</div>
									);
								})}
							</div>
						</div>
						<div className="flex items-center p-2 border-t border-gray-200">
							<input
								type="text"
								className="flex-1 p-2 border rounded-md"
								placeholder="Type a message..."
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
								onKeyPress={(e) => {
									if (e.key === "Enter") handleSendMessage();
								}}
							/>
							<button
								type="button"
								onClick={handleSendMessage}
								className="bg-blue-500 text-white p-2 ml-2 rounded-md"
							>
								Send
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg w-96">
				<div className="p-4 border-b border-gray-200">
					<div className="flex flex-col gap-4">
						<div className="flex justify-between">
							<h2 className="text-lg font-semibold">Chat</h2>
							<button
								className="text-gray-500 hover:text-gray-700"
								onClick={onClose}
								type="button"
							>
								{/* Close icon */}
								{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M13.414 12l3.293 3.293a1 1 0 01-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 01-1.414-1.414L10.586 12 7.293 8.707a1 1 0 111.414-1.414L12 10.586l3.293-3.293a1 1 0 111.414 1.414L13.414 12z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						</div>
						<input
							type="text"
							placeholder="search here"
							className="border-zinc-600 border p-1 rounded-md"
						/>
					</div>
				</div>
				<div className="p-4">
					{/* User list */}
					<div className="space-y-2">
						{users.map((user) => (
							<div
								key={user.id}
								className="flex items-center space-x-2 justify-between"
							>
								<div className="flex items-center space-x-2">
									<Image
										src={user.avatar}
										alt={user.name}
										className="w-8 h-8 rounded-full"
										width={32}
										height={32}
									/>
									{user.messageCount && user?.messageCount > 0 ? (
										<p className="text-sm font-bold">{user.name}</p>
									) : (
										<p className="text-sm">{user.name}</p>
									)}
								</div>
								<p className="bg-teal-500 px-2 rounded-full text-white">
									{user.messageCount}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatBox;
