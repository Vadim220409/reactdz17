import './Filter.css';

export default function Filter({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search contacts"
    />
  );
}