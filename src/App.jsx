import React from 'react'
import IntroScreen from './IntroScreen'
import QuizScreen from './QuizScreen'
import blobBlue from './assets/blob-blue.svg'
import blobYellow from './assets/blob-yellow.svg'
import './App.css'

export default function App(){
  const [started, setStarted] = React.useState(false)

  return (
    <div className='container'>
      <img className='blob--blue' src={blobBlue} />
      <img className='blob--yellow' src={blobYellow} />
      {
        started ?
        <QuizScreen /> :
        <IntroScreen startQuiz={setStarted}/>
      }
    </div>
  )
}
