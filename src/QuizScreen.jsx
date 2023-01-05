import React from 'react'
import Question from './Question'
import {decode} from 'html-entities'
import './QuizScreen.css'

export default function QuizScreen() {
  const [questions, setQuestions] = React.useState([])
  
  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => setQuestions(data.results))
  }, [])
  
  const questionElements = questions.map((q, index) => (
    <Question 
      key={index}
      question={decode(q.question)}
      questionType={q.type}
      correctAnswer={decode(q.correct_answer)}
      incorrectAnswers={decode(q.incorrect_answers)}
    />
  ))
    
  return (
    <div className='quiz--container'>
      {questionElements}
    </div>
  )
}