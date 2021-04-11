import { useState, useEffect } from 'react';
import './App.css';

const backendurl = 'https://guestbook-l5nnz.ondigitalocean.app/backend';

function App() {
	const [messages, setMessages] = useState(null);
	const [newMessage, setNewMessage] = useState('');

	const getMessages = () => {
		fetch(backendurl + '/getmessages')
			.then(res => res.json())
			.then(res => setMessages(res))
			.then(() => setNewMessage(''))
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
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			},
			body: new URLSearchParams({ 'entry': newMessage })
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
