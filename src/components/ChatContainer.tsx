import {FaYoutube} from "react-icons/fa6";
import {ChatLists} from "./ChatLists";
import {InputText} from "./InputText";
import {useState} from "react";
import {UserLogin} from "./UserLogin";

export const ChatContainer = () => {
	const [user, setUser] = useState(localStorage.getItem("username") || "");

	return (
		<div className="App">
			{user !== "" ? (
				<>
					<div>
						<div>
							<div className="chats_header">
								<h4>Username: your_username</h4>
								<p>
									<FaYoutube className="chats_icon" /> Code With your_username
								</p>
								<p className="chats_logout">
									<strong>Logout</strong>
								</p>
							</div>
							<ChatLists />
							<InputText />
						</div>
					</div>
				</>
			) : (
				<UserLogin setUser={setUser} />
			)}
		</div>
	);
};
