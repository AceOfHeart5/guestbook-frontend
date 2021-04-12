export default function MessageDisplay({ messages }) {
    const displayMessages = () => {
        if (messages === null) return null;
        const result = [];
        messages.forEach(msg => {
			result.unshift(<li className='message' key={msg.id}>{msg.entry}</li>);
		});
        return <ul>{result}</ul>;
    }

    return (
        displayMessages()
    );
}