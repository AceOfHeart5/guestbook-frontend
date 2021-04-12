export default function MessageDisplay({ messages }) {
    const displayMessages = () => {
        if (messages === null) return null;
        const result = [];
        messages.forEach(msg => {
			result.unshift(<div className='message' key={msg.id}>{msg.entry}</div>);
		});
        return <div>{result}</div>;
    }

    return (
        displayMessages()
    );
}
