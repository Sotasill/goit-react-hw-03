import { useState, useEffect } from 'react';

import './App.css'
import initialContacts from './contactlist.json';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/Searchbox';

function App() {
  const [contacts, setContacts] = useState(() => {
    const storagedContacts = localStorage.getItem("contacts");

    if (storagedContacts !== null) {
      return JSON.parse(storagedContacts);
    }

    return initialContacts;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function addContact(newContact) {
    setContacts((prevState) => {
      return [...prevState, newContact];
    });
  }

  function deleteContact(contactId) {
    setContacts((prevState) => {
      return prevState.filter((contact) => contact.id !== contactId);
    });
  }

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <div >
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
