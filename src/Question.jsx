// import React from 'react'
import Answer from './Answer'
import './Question.css'

export default function Question(props) {
  const answers = [...props.incorrectAnswers, props.correctAnswer]
  
  const answerElements = answers.map((answer, index) => (
    <Answer 
      key={index} 
      answer={answer}
      questionNumber={props.questionNumber} />
  ))
  
  return (
    <div>
      <div className='quiz--questions'>{props.question}</div>
      <div className='answer--container'>{answerElements}</div>
      <div className='horizontal-rule' />
    </div>
  )
}
