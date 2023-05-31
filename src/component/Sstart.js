import React from 'react'


export default function Start(props){
    return (
    <nav>
        <h1 className='nav-title'>Quizzcall</h1>
        <p className='nav-p'>start with questions</p>
        <button onClick={props.toggle} className='nav-button'>Start quiz</button>
    </nav>

    )
}