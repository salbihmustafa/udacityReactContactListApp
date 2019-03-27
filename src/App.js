import React, { Component } from 'react';
import ListContacts from './ListContacts' //Import our component from ListContacts.js
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'

class App extends Component {

  //Create State property and create contacts object. Copy the array inside the contacts object array
  state = 
  {
    contacts: [],
    screen: 'list'
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

  render() {
    return (
      <div>
        {/*
          This is how you do comments in JSX
          Anything in between this div will show on the browser.
          We are showing component ListContacts with contacts above. 
        */}
        {this.state.screen === 'list' && (
          <ListContacts 
            contacts={this.state.contacts} //This is where contact prop is passed.
            onDeleteContact={this.removeContact} //This is passing a function prop
            onNavigate={() => {
              this.setState(() => ({
                screen: 'create'
              }))
            }}
          />
        )}
        {this.state.screen === 'create' && (
          <CreateContact /> 
        )}
      </div>
    );
  }
}

export default App;
