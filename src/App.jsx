import { useState, useEffect } from 'react';
import initContacts from './assets/contacts.json';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contactValue')) ?? initContacts
  );
  useEffect(
    () => window.localStorage.setItem('contactValue', JSON.stringify(contacts)),
    [contacts]
  );

  const [search, setSearch] = useState('');

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [
        ...prevContacts,
        {
          id: nanoid(),
          name: newContact.username,
          number: newContact.number,
        },
      ];
    });
  };
  const onDelete = contactId =>
    setContacts(contacts.filter(item => item.id !== contactId));

  const searchBox = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={search} onFilter={setSearch} />
      <ContactList contacts={searchBox} onDelete={onDelete} />
    </>
  );
}

export default App;
