import MessageDisplay from './components/MessageDisplay';
import MessageAdd from './components/MessageAdd';
import './App.css';

const backendurl = 'https://guestbook-l5nnz.ondigitalocean.app/backend';

function App() {
	return (
		<div className="App">
			<MessageAdd backendurl={backendurl}></MessageAdd>
			<MessageDisplay backendurl={backendurl}></MessageDisplay>
		</div>
	);
}

export default App;
