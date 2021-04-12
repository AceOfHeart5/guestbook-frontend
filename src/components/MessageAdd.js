import { useState } from 'react';

export default function MessageAdd({ backendurl }) {
    const [newMessage, setNewMessage] = useState('');

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
            .then(() => setNewMessage(''))
			.catch(err => console.log(err));
    }

    return (
        <form onSubmit={addMessage} action="">
            <input 
                type="text" 
                placeholder='Type a message...' 
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
            />
            <button type='submit'>Add Message</button>
        </form>
    );
}