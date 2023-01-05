// import React from 'react'
import './Answer.css'

export default function Answer(props) {
  function handleClick(text) {
    console.log(text)
  }
  
  return (
    <div 
      className='answer--button' 
      onClick={() => handleClick(props.answer)}>{props.answer}
    </div>
  )
}