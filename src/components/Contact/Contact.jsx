function Contact({ id, name, number, onDelete }) {
  return (
    <li>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button
        onClick={() => {
          onDelete(id);
        }}
      ></button>
    </li>
  );
}

export default Contact;
