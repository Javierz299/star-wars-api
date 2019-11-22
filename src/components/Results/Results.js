import React from 'react'
import Result from '../Result/Result'

export default function Results(props){
    console.log('results:',props)
      
        return (
            props.names.map(n => {
                const name = n.name;
                const gender = n.gender;
 
                return (<Result 
                         key={name}  
                         name={name}
                         gender={gender} 
                         />)
            })
         )
      }
    

