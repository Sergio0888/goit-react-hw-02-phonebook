import styles from './app.module.css'
import { Component } from 'react';
import ContactList from './ElementContact/ElementContact';
import Filter from './SearchContact/SearchContact';
import ContactForm from './FormContact/FormContact';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  addContact = (props) => {
    const { name, number } = props;
    const searchName = this.state.contacts.map(({name}) => name);
    
        if (searchName.includes(name)) {
          return alert(`${name} is already in contacts`);
        }
        
        const id = nanoid();
        const newContact = {name, number, id};
    
       return this.setState({
          name: name,
          number: number,
          contacts: [...this.state.contacts, newContact]
        })
  }

  removeContact = (id) => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(item => item.id !== id)
      }
    })
  };

  filterContacts = (value) => {
    this.setState({
      filter: value
    })
  };

  handleChange = ({target}) => {
    const {value} = target;
    this.filterContacts(value);
  };


  getSearchContacts() {
    const {contacts, filter} = this.state;
    if (filter === '') {
      return contacts
    }
    const filterValue = filter.toLowerCase();
    const filtredContacts = contacts.filter(({name}) => {
      const nameValue = name.toLowerCase();
     return nameValue.includes(filterValue);
    });
    return filtredContacts;
  };

  render() {

    const contactsArr = this.getSearchContacts();

    return (
      <div className={styles.box}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter searchInput={this.handleChange} />
        <ContactList  contacts={contactsArr} removeContact={this.removeContact}/>
      </div>

    )
  }};

export default App;