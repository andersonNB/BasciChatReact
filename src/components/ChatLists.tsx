import {Chat} from "../interface/chatInterface";

export const ChatLists = ({chats}: {chats: Chat[]}) => {
	const user = localStorage.getItem("username");

	function SenderChat({
		message,
		username,
		avatar,
	}: {
		message: string | null;
		username?: string | null;
		avatar?: string;
	}) {
		return (
			<div className="chat_sender">
				<img src={avatar ?? ""} alt="" />
				<p>
					<strong>{username}</strong>
					{message}
				</p>
			</div>
		);
	}

	function ReceiverChat({
		message,
		username,
		avatar,
	}: {
		message: string | null;
		username?: string | null;
		avatar?: string;
	}) {
		return (
			<div className="chat_receiver">
				<img src={avatar} alt="" />
				<p>
					<strong>{username} </strong>
					{message}
				</p>
			</div>
		);
	}

	return (
		<div className="chats_list">
			{chats.map((chat, index) => {
				if (chat.user === user) {
					return (
						<SenderChat
							key={index}
							message={chat.message}
							username={chat.user}
							avatar={chat.avatar}
						/>
					);
				} else {
					return (
						<ReceiverChat
							key={index}
							message={chat.message}
							username={chat.user}
							avatar={chat.avatar}
						/>
					);
				}
			})}
		</div>
	);
};
