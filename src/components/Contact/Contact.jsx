import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

import css from './Contact.module.css'
function Contact({contact}) {
  const dispatch = useDispatch();

  const handleDeleteClick = () => 
    dispatch(deleteContact(contact.id));

    return(
    <div className={css.wrapper}>
        <div className={css.item}>
            <p>{contact.name}
            </p>
            <p>{contact.number}
            </p>

        </div>
        <button className={css.dBtn} onClick={handleDeleteClick}>Delete</button>
    </div>
)}

export default Contact