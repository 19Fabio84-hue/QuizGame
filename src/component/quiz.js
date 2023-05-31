import React , { useState } from 'react'
import Button from '../button/setButtons'
import Domanda from './domanda'


export default function GetQuizMenu(props){  
       
      // Presa dati dall' API   
    const [quizdata , setData] = useState([])
      React.useEffect( () =>{
         fetch('https://opentdb.com/api.php?amount=5')
          .then(response => response.json())
          .then(data=> setData(data.results.map(quiz=>{
            const {question , correct_answer , incorrect_answers } = quiz
            const answers = shuffleArray([
              { answer: correct_answer, isCorrect: true  },
              ...incorrect_answers.map((answer) => ({ answer, isCorrect: false  })),
            ]);
            return  {question , answers}
          })) )        
      },[]) 
      
     
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      } 
      
      
      const getAnswers = quizdata.map(prev=>{
        
        return <div className='main-ctn'>
        <Domanda  value={prev.question}/>
        <div className='btn-ctn'>
         <>
           {prev.answers.length === 2 ? <>
                   <Button check={props.correct} correct={prev.answers[0].isCorrect}  value={prev.answers[0].answer}/> 
                   <Button check={props.correct} correct={prev.answers[1].isCorrect} value={prev.answers[1].answer}/> 
           </>
           :
          <> <Button check={props.correct} correct={prev.answers[0].isCorrect} value={prev.answers[0].answer}/> 
           <Button check={props.correct} correct={prev.answers[1].isCorrect} value={prev.answers[1].answer}/> 
           <Button check={props.correct} correct={prev.answers[2].isCorrect}  value={prev.answers[2].answer}/> 
           <Button check={props.correct} correct={prev.answers[3].isCorrect} value={prev.answers[3].answer}/>
          </>}
         </>
        {/* } */}

        </div>
        
           <hr></hr>

</div>
      })
      
      return (
        <main>
           {getAnswers}     
           {props.correct ?<p type='submit' className='main-btn'  onClick={props.begin}>Restart Quiz</p>
           : <p type='submit' className='main-btn'  onClick={props.check}>Check Answer</p>}
        </main>
      )
}

 






