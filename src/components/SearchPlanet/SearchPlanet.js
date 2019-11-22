import React from 'react'


export default function SearchPlanet(props) {

    const handleSubmitForm = (event) => {
        event.preventDefault();
        console.log('working')


        const planet = event.target.planet.value
        console.log(planet)

        
        fetch(`https://swapi.co/api/planets/?search=${planet}`)
            .then(res => {
                if(res.ok){
                    return res.json();
                } else {
                    return res.json().then(e => Promise.reject(e));
                }
            })
            .then(data => props.planet(data.results))

           
            
    }

        return (
            <form onSubmit={handleSubmitForm}>

                <label htmlFor="planet">Search by Planet:</label>
                <input id="planet" name="planet" placeholder="Tatooine"></input>
                <button>Search</button>
            </form>
        )
    }
