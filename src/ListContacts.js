//I created this file by right clicking src and pressing new file.
//I am following a video.
//This file is going to be responsible for listing all of the contacts.
import React from 'react'

function ListContacts (props)
{
    return (
        <ol className='contact-list'> {/* contact-list is from CSS */}
            {props.contacts.map((contact) => ( 
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
                    <button className='contact-remove'>
                        remove {/* Button to remove contacts. contact-remove is coming from CSS*/}
                    </button>
                </li>
            ))}
        </ol>
    )
}

//Whenever creating a component make sure to default the class
export default ListContacts