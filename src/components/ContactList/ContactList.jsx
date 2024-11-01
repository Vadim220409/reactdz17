import ContactItem from './ContactItem';
import './ContactList.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} onDelete={onDeleteContact} />
      ))}
    </ul>
  );
}