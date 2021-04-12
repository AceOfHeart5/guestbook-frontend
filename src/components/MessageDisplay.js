import { useState, useEffect } from 'react';

export default function MessageDisplay({ backendurl }) {
    const [messages, setMessages] = useState(null);

    const fetchMessages = () => {
        fetch(backendurl + '/getmessages')
            .then(res => res.json())
            .then(res => setMessages(res))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchMessages();
    }, []);

    const displayMessages = () => {
        if (messages === null) return null;
        const result = [];
        messages.forEach(msg => {
			result.unshift(<li key={msg.id}>{msg.entry}</li>);
		});
        return <ul>{result}</ul>;
    }

    return (
        displayMessages()
    );
}