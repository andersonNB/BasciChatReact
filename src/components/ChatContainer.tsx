import {FaYoutube} from "react-icons/fa6";
import {ChatLists} from "./ChatLists";
import {InputText} from "./InputText";
import {useEffect, useState} from "react";
import {UserLogin} from "./UserLogin";
import socketIOClient from "socket.io-client";
import {Chat} from "../interface/chatInterface";

export const ChatContainer = () => {
	const [user, setUser] = useState(localStorage.getItem("username") || "");
	const socketio = socketIOClient("http://localhost:3001");
	const [chats, setChats] = useState<Chat[]>([]);

	useEffect(() => {
		socketio.on("chat", (renderChats) => {
			setChats(renderChats);
		});
	}, [socketio]);

	const logout = () => {
		localStorage.clear();
		window.location.reload();
	};

	const sendToSocket = (chat: Chat[]) => {
		socketio.emit("chat", chat);
	};

	const addMessage = (chat: Chat) => {
		const newChat = {
			...chat,
			user,
			avatar: localStorage.getItem("avatar") ?? "",
		};

		setChats([...chats, newChat]);
		sendToSocket([...chats, newChat]);
	};

	return (
		<div className="App">
			{user !== "" ? (
				<>
					<div>
						<div>
							<div className="chats_header">
								<h4>Username: {user}</h4>
								<p>
									<FaYoutube className="chats_icon" /> Code With {user}
								</p>
								<p className="chats_logout">
									<strong onClick={logout}>Logout</strong>
								</p>
							</div>
							<ChatLists chats={chats} />
							<InputText addMessage={addMessage} />
						</div>
					</div>
				</>
			) : (
				<UserLogin setUser={setUser} />
			)}
		</div>
	);
};
