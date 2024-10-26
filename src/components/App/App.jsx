import css from './App.module.css';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

import contactsData from '../../contacts.json';
import { useEffect, useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts) ?? contactsData;

    return parsedContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', savedContacts);
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevState => {
      return [...prevState, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== contactId);
    });
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
