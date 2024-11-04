export const ChatLists = () => {
	function SenderChat() {
		return (
			<div className="chat_sender">
				<img src="https://picsum.photos/seed/picsum/200/300" alt="" />
				<p>
					<strong>your_username</strong>
					message
				</p>
			</div>
		);
	}

	function ReceiverChat() {
		return (
			<div className="chat_receiver">
				<img src="https://picsum.photos/seed/picsum/200/300" alt="" />
				<p>
					<strong>me_username</strong>
					message
				</p>
			</div>
		);
	}

	return (
		<div>
			<SenderChat />
			<ReceiverChat />
		</div>
	);
};
