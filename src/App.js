import React, { Component } from 'react';
import ListContacts from './ListContacts' //Import our component from ListContacts.js

//I copied this array of contacts from Udacity page.
const contacts = [
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
 ];

class App extends Component {
  render() {
    return (
      <div>
        {/*
          This is how you do comments in JSX
          Anything in between this div will show on the browser.
          We are showing component ListContacts with contacts above. 
        */}
        <ListContacts contacts={contacts} /> {/* the contacts inside the bracket is the prop */}
      </div>
    );
  }
}

export default App;
