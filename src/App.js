import React, { Component } from 'react';
import ListContacts from './ListContacts' //Import our component from ListContacts.js
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'

class App extends Component {

  //Create State property and create contacts object. Copy the array inside the contacts object array
  state = 
  {
    contacts: []
  }

  //Lifecycle which is an AJAX call
  componentDidMount() {
    ContactsAPI.getAll() //.getAll() is from ContactsAPI.js
      .then((contacts) => { //for all the contacts set contacts state
        this.setState(() => ({
          contacts
        }))
      })
  }

  //removeContact (passed item is previous state item)
  removeContact = (contact) => {
    //If you need to update previous state always use Functional setState
    this.setState((currentState) => ({ 
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id //the id not equal to id passed in removeContact (contact)
      })
    }))

    ContactsAPI.remove(contact) //Removes from backend. Always match from above (contact)
  }

  createContact = (contact) => {
    ContactsAPI.create(contact)
      .then((contact) => {
        this.setState((currentState) => ({
          contacts: currentState.contacts.concat([contact])
        }))
      })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListContacts 
            contacts={this.state.contacts} //This is where contact prop is passed.
            onDeleteContact={this.removeContact} //This is passing a function prop
          />
        )} />
        <Route path='/create' render={({ history }) => (
          <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push('/')
            }}
          />
        )} />
      </div>
    );
  }
}

export default App;
