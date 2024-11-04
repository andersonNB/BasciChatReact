import {FaReact} from "react-icons/fa6";
import "../style.css";
import {Dispatch, SetStateAction, useState} from "react";
import _ from "lodash";

export const UserLogin = ({
	setUser,
}: {
	setUser: Dispatch<SetStateAction<string>>;
}) => {
	const [username, setUsername] = useState("");

	const handleUser = () => {
		if (username.trim() === "") {
			return alert("Please enter a valid username");
		} else {
			localStorage.setItem("username", username);
			setUser(username);
			localStorage.setItem(
				"avatar",
				`https://picsum.photos/id/${_.random(1, 1000)}/200/300`
			);
		}
	};

	return (
		<div className="login_container" style={{backgroundColor: "seagreen"}}>
			<div className="login_title" style={{backgroundColor: "sandybrown"}}>
				<FaReact className="login_icon" />
				<h1>Chat App</h1>
			</div>
			<div className="login_form">
				<input
					type="text"
					placeholder="Enter a unique name"
					onChange={(e) => setUsername(e.target.value)}
					value={username}
				/>
				<button onClick={handleUser}>Login</button>
			</div>
		</div>
	);
};
