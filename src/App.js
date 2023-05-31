import React , { useState } from 'react'
import Start from './component/Sstart'
import Quiz from './component/quiz'




export default function App(){
  
   const [correctAnswer , setCorrectAnswer] = useState(false)
   const [begin , setBegin] = useState(false)
  
    function GetStartGame(){     
       setBegin(!begin)
       setCorrectAnswer(false)
    }
    function checkAnsewer(){
        setCorrectAnswer(true)   
    }
    function restart(){        
        setBegin(false)
    }
    return(
        <div className='root-ctn'>
            <img className='img-blu' src='./images/blob.png' alt='sfondo-blu'/>
            <img className='img-yellow' src='./images/bloby.png' alt='sfondo-giallo'/>
            {begin === false && <Start   toggle={GetStartGame} />}
            {begin && <Quiz  correct={correctAnswer} begin={restart} check={checkAnsewer} toggle={GetStartGame}
             />}
        </div>
    )
}
