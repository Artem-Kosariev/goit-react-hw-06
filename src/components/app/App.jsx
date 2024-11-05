import './App.css';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

function App() {
	return (
		<>
			<h1>Phone book</h1>
			<ContactForm />
			<SearchBox />
			<ContactList />
		</>
	);
}

export default App;