import React, { Component } from 'react'


class Search extends Component {

    handleSubmitForm = (event) => {
        event.preventDefault();
        console.log('working')
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitForm}> 
                <label htmlFor="name">Search by Name:</label>
                <input id="name" name="name" placeholder="Darth Vader"></input>
                <button>Search</button>
            </form>
        )
    }
}

export default Search
