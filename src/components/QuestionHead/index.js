import React from 'react'
import PropTypes from 'prop-types'

import QuestionDifficultyRating from '../QuestionDifficultyRating'

import styles from './styles.module.css'

const QuestionHead = props => {
  const { questionNumber, totalQuestions, questionCategory, difficulty } = props

  return (
    <div>
      <h1 className={styles.title}>
        question {questionNumber} of {totalQuestions}
      </h1>

      <h5 className={styles.category}>{questionCategory}</h5>

      <QuestionDifficultyRating difficulty={difficulty} />
    </div>
  )
}

QuestionHead.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  questionCategory: PropTypes.string.isRequired,
  difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired
}

export default QuestionHead
