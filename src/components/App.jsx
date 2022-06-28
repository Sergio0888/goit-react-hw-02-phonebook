import styles from './app.module.css'
import { Component } from 'react';
import ElementContact from './ElementContact/ElementContact';
import SearchContact from './SearchContact/SearchContact';
import FormContact from './FormContact/FormContact'

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  addContact = ({name, number, id}) => {
    const searchName = this.state.contacts.map(({name}) => name);
    
        if (searchName.includes(name)) {
          return alert(`${name} is already in contacts`);
        }
    
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


  getSearchContacts() {
    const {contacts, filter} = this.state;
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
        <FormContact onSubmit={this.addContact} />
        <h2 className={styles.title}>Contacts</h2>
        <SearchContact searchInput={this.filterContacts} />
        <ElementContact  contacts={contactsArr} removeContact={this.removeContact}/>
      </div>

    )
  }};

export default App;