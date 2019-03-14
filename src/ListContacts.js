//I created this file by right clicking src and pressing new file.
//I am following a video.
//This file is going to be responsible for listing all of the contacts.
import React, { Component } from 'react'

class ListContacts extends Component {
    //Render method describes the UI of our component
    render() {
        console.log('Props', this.props)
        return (
            <ol className='contact-list'>
            
            </ol>
        )
    }
}

//Whenever creating a component make sure to default the class
export default ListContacts