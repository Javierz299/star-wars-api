import React from 'react'



    // "films": "https://swapi.co/api/films/",
    // "people": "https://swapi.co/api/people/",
    // "planets": "https://swapi.co/api/planets/",
    // "species": "https://swapi.co/api/species/",
    // "starships": "https://swapi.co/api/starships/",
    // "vehicles": "https://swapi.co/api/vehicles/"


export default function SearchName(props) {

    const handleNameForm = (event) => {
        event.preventDefault();
        console.log('working')

        const person = event.target.name.value;
        console.log(person)

        
        fetch(`https://swapi.co/api/people/?search=${person}`)
            .then(res => {
                if(res.ok){
                    return res.json();
                } else {
                    return res.json().then(e => Promise.reject(e));
                }
            })
            .then(data => props.name(data.results))

            
    }

        return (
            <form onSubmit={handleNameForm}> 
                <label htmlFor="name">Search by Name:</label>
                <input id="name" name="name" placeholder="Darth Vader"></input>
                <button>Search</button>

                
            </form>
        )
    }


