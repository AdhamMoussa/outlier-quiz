import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.css'

const QuestionChoice = props => {
  const { title, isPicked, isCorrect, isQuestionAnswered, onClick } = props

  const styleClassNames = classnames([styles.choice, {
    [styles.picked]: isPicked && isQuestionAnswered,
    [styles.wrongNotPicked]: !isPicked && !isCorrect && isQuestionAnswered,
    [styles.correctNotPicked]: !isPicked && isCorrect && isQuestionAnswered
  }])

  return (
    <button
      className={styleClassNames}
      onClick={onClick}
      disabled={isQuestionAnswered}
    >
      {title}
    </button>
  )
}

QuestionChoice.propTypes = {
  title: PropTypes.string.isRequired,
  isPicked: PropTypes.bool.isRequired,
  isQuestionAnswered: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default QuestionChoice
