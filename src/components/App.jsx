import { Component } from "react"
import { ContactList } from "./ContactList/ContactList";
import { Form } from "./Form/Form";
import { Filter } from "./Filter/Filter";
import { nanoid } from 'nanoid'


export class App extends Component {
  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  filter: ''
  }

  changeFilter = (e) => {
    const { value } = e.currentTarget;
    this.setState({filter: value})
  }

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact => {
     return contact.name.toLowerCase().includes(normalizedFilter)
    })
  }

  handleSubmit = (name, number) => {
    const isExist = this.state.contacts.find(contact => { return contact.name === name })
      if (isExist) {
        return alert(`${name} is already in contacts.`)
    }
    this.setState(prevState => ({
        contacts: [...prevState.contacts, { name, id: nanoid(), number }]
      }))
      this.setState({ name: '', number: '' })
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {
    const filteredContacts = this.getFilteredContacts();
  return <div>
  <h1>Phonebook</h1>
    <Form onSubmit={this.handleSubmit} />
  <h2>Contacts</h2>
    <Filter value={this.state.filter} onChange={this.changeFilter} />
    <ContactList contacts={filteredContacts} onDelete={this.deleteContact} />
</div>
  } 
};
