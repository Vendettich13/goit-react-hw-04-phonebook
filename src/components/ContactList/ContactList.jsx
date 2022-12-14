import { ContactItem } from "components/ContactItem/ContactItem"
import css from "../ContactList/ContactList.module.css"

export const ContactList = ({contacts, onDelete}) => {
    return <ul className={css.list}>
        {contacts.map(contact => {
            return <li key={contact.id}><ContactItem contact={contact} onDelete={onDelete} /></li>
        })}
        
    </ul>
}