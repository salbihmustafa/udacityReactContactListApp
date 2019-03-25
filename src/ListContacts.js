//I created this file by right clicking src and pressing new file.
//I am following a video.
//This file is going to be responsible for listing all of the contacts.
import React, { Component} from 'react'
import PropTypes from 'prop-types' //make sure to run command on cmd "yarn add prop-types"

class ListContacts extends Component 
{
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }
    state = {
        query: '' //Initalized and is blank
    }
    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim() //This is where query gets reset from users values
        }))
    }
    clearQuery = () => {
        this.updateQuery('') //This sets blank to the state property and resets the input fill
    }

    render() 
    {
        const { query } = this.state
        const { contacts, onDeleteContact } = this.props

        const showingContacts = query === ''
            ? contacts
            : contacts.filter((c) => (
                c.name.toLowerCase().includes(query.toLowerCase())
            ))

        return(
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts' //I assume this is from a pre-built CSS
                        type='text' //Type of value going into this search box
                        placeholder='Search Contacts' //Place holder when no one types anything in the search box
                        value={query} //The value is being updated onChange and is changing the state in updateQuery
                        onChange={(event) => this.updateQuery(event.target.value)} //This event happens when user starts typing in the search field then "event.target.value" will capture keystrokes and pass the value to updateQuery
                    />
                </div>
                {showingContacts.length !== contacts.length && ( //If showingContacts does not equal contacts '&&' makes sure to do this if true
                    <div className='showing-contacts'>
                        <span>Now Showing {showingContacts.length} of {contacts.length}</span>
                        <button onClick={this.clearQuery}>Show all</button>
                    </div>
                )}
                <ol className='contact-list'> {/* contact-list is from CSS */}
                    {showingContacts.map((contact) => ( 
                        <li key={contact.id} className='contact-list-item'> {/* Need to add key or else it will show error */}
                            <div 
                                className='contact-avatar' 
                                style={{
                                    backgroundImage: `url(${contact.avatarURL})`
                                }}
                            ></div>{/* contact-avatar is coming from CSS */}
                            <div className='contact-details'> {/* contact-details is coming from CSS */}
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button 
                                onClick={() => onDeleteContact(contact)} //Added onclick function and passing function prop
                                className='contact-remove'>
                                remove {/* Button to remove contacts. contact-remove is coming from CSS*/}
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

//These are assigned Prop types
//.array is an array type. .func is a function type.
ListContacts.PropTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

//Whenever creating a component make sure to default the class
export default ListContacts