import React from 'react'

export default function Result(props) {
    console.log(props)
        return (
            <div>
                <h2>Name:{props.name}</h2>
                 <p>Gender:{props.gender}</p>

            </div>
        )
    }

