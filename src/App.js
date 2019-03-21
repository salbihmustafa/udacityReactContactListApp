import React, { Component } from 'react';
import ListContacts from './ListContacts' //Import our component from ListContacts.js

class App extends Component {

  //Create State property and create contacts object. Copy the array inside the contacts object array
  state = 
  {
    contacts: 
    [
        {
          "id": "karen",
          "name": "Karen Isgrigg",
          "handle": "@karen_isgrigg",
          "avatarURL": "http://localhost:5001/karen.jpg"
        },
        {
          "id": "richard",
          "name": "Richard Kalehoff",
          "handle": "@richardkalehoff",
          "avatarURL": "http://localhost:5001/richard.jpg"
        },
        {
          "id": "tyler",
          "name": "Tyler McGinnis",
          "handle": "@tylermcginnis",
          "avatarURL": "http://localhost:5001/tyler.jpg"
        }
    ]
  }

  //removeContact (passed item is previous state item)
  removeContact = (contact) => {
    //If you need to update previous state always use Functional setState
    this.setState((currentState) => ({ 
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id //the id not equal to id passed in removeContact (contact)
      })
    }))
  }

  render() {
    return (
      <div>
        {/*
          This is how you do comments in JSX
          Anything in between this div will show on the browser.
          We are showing component ListContacts with contacts above. 
        */}
        <ListContacts 
          contacts={this.state.contacts} //This is where contact prop is passed.
          onDeleteContact={this.removeContact} //This is passing a function prop
        /> 
      </div>
    );
  }
}

export default App;
