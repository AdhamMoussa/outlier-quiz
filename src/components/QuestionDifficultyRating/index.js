import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

const difficultyMap = {
  easy: 1,
  medium: 2,
  hard: 3
}

const QuestionDifficultyRating = props => {
  const { difficulty } = props

  return (
    <div className={styles.starsWrapper}>
      {[1, 2, 3].map(item => {
        const isActiveStar = item <= difficultyMap[difficulty]

        return (
          <div key={item} className={`${styles.star} ${isActiveStar ? styles.activeStar : ''}`}>
            <i className='fa fa-star' aria-hidden='true' />
          </div>
        )
      })}
    </div>
  )
}

QuestionDifficultyRating.propTypes = {
  difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired
}

export default QuestionDifficultyRating
