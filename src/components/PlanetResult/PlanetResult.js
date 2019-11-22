import React from 'react'

export default function PlanetResult(props) {
    console.log(props)
        return (
            <div>

                <h2>Planet:{props.planetName}</h2>
                 <p>Climate:{props.planetClimate}</p>
            </div>
        )
    }