import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const QuizEndScreen = props => {
  const { score, restartHandler } = props

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>your score: {score}</h1>

      <button
        onClick={restartHandler}
        className={styles.restartButton}
      >
        restart quiz
      </button>
    </div>
  )
}

QuizEndScreen.propTypes = {
  score: PropTypes.string.isRequired,
  restartHandler: PropTypes.func.isRequired
}

export default QuizEndScreen
