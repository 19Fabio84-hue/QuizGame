import React from 'react'


export default function Domanda(props){
   
    return (
       <>
       <h2  className='main' key={props.id} onClick={props.toggle}>{props.value}</h2>
       
       </>
        )
}