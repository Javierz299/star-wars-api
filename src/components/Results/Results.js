import React from 'react'
import Result from '../Result/Result'

export default function Display(props){
    console.log('display:',props.names)
      
       
        return (
           props.names.map(n => {
               const name = n.name;
               const height = n.height;
               const mass = n.mass;
               const hair_color = n.hair_color;
               const gender = n.gender;

               return (<Result 
                        key={name}  
                        name={name}
                        height={height}
                        mass={mass}
                        hair_color={hair_color}
                        gender={gender} 
                        />)
           })
        )
    }

