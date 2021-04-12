import { useState } from 'react';

export default function MessageAdd({ backendurl, fetchMessages }) {
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
        setNewMessage('');
		fetch(backendurl + '/addmessage', options)
			.then(res => res.json())
			.then(res => console.log(res))
            .then(() => fetchMessages())
			.catch(err => console.log(err));
    }

    return (
        <form onSubmit={addMessage} action="">
            <textarea
                className="newMessageArea"
                placeholder='Type your message here...'
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                rows="5"
            >
            </textarea>
            <button type='submit'>Add Message</button>
        </form>
    );
}
