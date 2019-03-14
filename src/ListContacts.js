//I created this file by right clicking src and pressing new file.
//I am following a video.
//This file is going to be responsible for listing all of the contacts.
import React, { Component } from 'react'

class ListContacts extends Component {
    //Render method describes the UI of our component
    render() {
        return (
            <ol className='contact-list'>
                {this.props.contacts.map((contact) => ( 
                    <li key={contact.id}> {/* Need to add key or else it will show error */}
                        {contact.name} {/* This displays all the names from the array in App.js */}
                    </li>
                ))}
            </ol>
        )
    }
}

//Whenever creating a component make sure to default the class
export default ListContacts