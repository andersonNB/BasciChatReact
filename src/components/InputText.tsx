export const InputText = () => {
	return (
		<div className="inputtext_container">
			<textarea
				name="message"
				id="message"
				rows={6}
				placeholder="Input message..."
			></textarea>
			<button>Send</button>
		</div>
	);
};
