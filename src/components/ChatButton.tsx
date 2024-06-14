import { useState } from "react";
import type { User } from "./types";
import ChatBox from "./ChatBox";

interface ChatButtonProps {
	users: User[]; // Array of users
}

const ChatButton: React.FC<ChatButtonProps> = ({ users }) => {
	const [isChatOpen, setIsChatOpen] = useState(false);

	const toggleChat = () => {
		setIsChatOpen(!isChatOpen);
	};

	return (
		<div className="fixed bottom-4 right-4">
			{/* Chat button */}
			{!isChatOpen && (
				<button
					type="button"
					className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg focus:outline-none"
					onClick={toggleChat}
				>
					{/* Chat icon */}
					{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="24"
						height="24"
					>
						<path d="M21 6h-2V5c0-1.65-1.35-3-3-3H8C6.35 2 5 3.35 5 5v1H3c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 0H9V5c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v1zm4 12H9.83L9 18.83V17H3V8h18v10z" />
					</svg>
				</button>
			)}

			{/* Chat box */}
			{isChatOpen && <ChatBox users={users} onClose={toggleChat} />}
		</div>
	);
};

export default ChatButton;
