import './ContactList.css';

export default function ContactItem({ id, name, number, onDelete }) {
  return (
    <li>
      <p>{name}: {number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}