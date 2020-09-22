import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

import styles from './styles.module.css'

const QuizInitialScreen = props => {
  const { totalQuestions, startQuize } = props

  return (
    <div>
      <h1 className={styles.title}>This quiz has {totalQuestions} questions</h1>

      <Button onClick={startQuize}>Start Quize</Button>
    </div>
  )
}

QuizInitialScreen.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  startQuize: PropTypes.func.isRequired
}

export default QuizInitialScreen
