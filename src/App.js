import React from 'react'

import Question from './components/Question'

const App = () => {
  return (
    <div className='App'>
      <Question
        questionNumber={16}
        totalQuestions={20}
        questionCategory='Entertainment%3A%20Video%20Games'
        difficulty='hard'
        correctAnswer='hello'
        incorrectAnswers={['hi', 'hola', 'hala']}
        questionTitle='which one is correct?'
      />
    </div>
  )
}

export default App
