import React from 'react'
import './IntroScreen.css'

export default function IntroScreen({ startQuiz }) {
  function handleClick() {
    startQuiz(true)
  }
  
  return (
    <div className='intro--container'>
      <h1 className='intro--heading'>Quizzical</h1>
      <p className='intro--subheading'>Subtitle message</p>
      <button onClick={handleClick} className='intro--button'>Start quiz</button>
    </div>
  )
}
