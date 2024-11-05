import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice'; 
import { selectNameFilter } from '../../redux/filtersSlice'; 

function ContactList() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter); 

   
    const filteredContacts = contacts.filter(contact => 
        typeof contact.name === 'string' && 
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={css.listWrapper}>
            {filteredContacts.length !== 0 ? (
                filteredContacts.map(contact => (
                    <li key={contact.id}>
                        <Contact contact={contact} />
                    </li>
                ))
            ) : (
                <li>No contacts found.</li>
            )}
        </ul>
    );
}

export default ContactList;
