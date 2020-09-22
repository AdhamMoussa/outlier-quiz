import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const QuizProgressBar = props => {
  const { progressPercentage } = props

  return (
    <div
      className={styles.progressBar}
      style={{ width: `${progressPercentage}%` }}
    />
  )
}

QuizProgressBar.propTypes = {
  progressPercentage: PropTypes.number.isRequired
}

export default QuizProgressBar
