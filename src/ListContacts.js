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
                    <li key={contact.id} className='contact-list-item'> {/* Need to add key or else it will show error */}
                        <div 
                            className='contact-avatar'
                            style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}
                        ></div>
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button className='contact-remove'>
                            remove
                        </button>
                    </li>
                ))}
            </ol>
        )
    }
}

//Whenever creating a component make sure to default the class
export default ListContacts