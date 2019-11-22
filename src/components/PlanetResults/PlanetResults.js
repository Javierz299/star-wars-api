import React from 'react'
import PlanetResult from '../PlanetResult/PlanetResult'

export default function PlanetResults(props){
    console.log('results:',props)
      
        return (
            props.planets.map(p => {
                const name = p.name;
                const climate = p.climate;
 
                return (<PlanetResult 
                         key={name}  
                         planetName={name}
                         planetClimate={climate} 
                         />)
            })
        )
      }