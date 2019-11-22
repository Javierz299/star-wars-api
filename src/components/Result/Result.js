import React from 'react'

export default function Result(props) {
    console.log(props)
        return (
            <div>
                <h2>{props.name}</h2>
                 <p>{props.gender}</p>
            </div>
        )
    }

