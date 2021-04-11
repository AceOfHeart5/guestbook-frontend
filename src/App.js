import { useState, useEffect } from 'react';
import './App.css';

const backendurl = 'https://guestbook-backend-a2tlv.ondigitalocean.app/backend';

function App() {

	const [messages, setMessages] = useState(null);
	const [newMessage, setNewMessage] = useState('');

	const getMessages = () => {
		fetch(backendurl + '/getmessages')
			.then(res => res.json())
			.then(res => setMessages(res))
			.catch(err => console.log(err));
	}

	useEffect(() => {
		getMessages();
	}, []);

	const renderMessages = () => {
		if (messages === null) {
			return (
				<div>Fetching Messages...</div>
			);
		}
		const result = [];
		messages.forEach(msg => {
			result.push(<li key={msg.id}>{msg.entry}</li>);
		});
		return (<ul>{result}</ul>);
	}

	const addMessage = (e) => {
		e.preventDefault();
		if (newMessage.length <= 0) return;
		const entry = {
			entry: newMessage
		}
		const options = {
			method: 'POST',
			body: JSON.stringify(entry)
		}
		console.log(options);
		fetch(backendurl + '/addmessage', options)
			.then(res => res.json())
			.then(res => console.log(res))
			.then(() => getMessages())
			.catch(err => console.log(err));
	}

	return (
		<div className="App">
			{renderMessages()}
			<form onSubmit={addMessage} action="">
				<input 
					type="text" 
					placeholder='Type a message...' 
					value={newMessage}
					onChange={e => setNewMessage(e.target.value)}
				/>
				<button>Add Message</button>
			</form>
		</div>
	);
}

export default App;
