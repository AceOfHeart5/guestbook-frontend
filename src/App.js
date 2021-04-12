import { useState, useEffect } from 'react';
import MessageDisplay from './components/MessageDisplay';
import MessageAdd from './components/MessageAdd';
import './App.css';

const backendurl = 'https://guestbook-l5nnz.ondigitalocean.app/backend';

function App() {
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

	return (
		<div className="App">
			<h1>Guestbook</h1>
			<p>Leave a message!</p>
			<MessageAdd backendurl={backendurl} fetchMessages={fetchMessages}></MessageAdd>
			<MessageDisplay messages={messages}></MessageDisplay>
		</div>
	);
}

export default App;
