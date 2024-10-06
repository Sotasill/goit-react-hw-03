import css from './Contact.module.css'



function Contact({ id, name, number, onDelete }) {
  return (
    <li className={css.listitem} >
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button className={css.delBtn}
        onClick={() => {
          onDelete(id);
        }}
      >Delete</button>
    </li>
  );
}

export default Contact;
