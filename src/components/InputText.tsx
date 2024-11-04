import {useState} from "react";

type Chat = {message: string};

export const InputText = ({addMessage}: {addMessage: (chat: Chat) => void}) => {
	const [message, setMessage] = useState<string>("");

	const sendMessage = () => {
		addMessage({message});
		setMessage("");
	};

	return (
		<div className="inputtext_container">
			<textarea
				name="message"
				id="message"
				rows={6}
				placeholder="Input message..."
				onChange={(e) => setMessage(e.target.value)}
				value={message}
			></textarea>
			<button onClick={sendMessage}>Send</button>
		</div>
	);
};
