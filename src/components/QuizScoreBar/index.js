import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.css'

const QuizScoreBar = props => {
  const { currentScore, minScore, maxScore } = props

  return (
    <div>
      <div className={styles.scoreLabelsWrapper}>
        <p className={styles.scoreLabel}>score: {currentScore}</p>
        <p className={styles.scoreLabel}>max score: {maxScore}</p>
      </div>

      <div className={styles.baseBar}>
        <div
          className={classnames(styles.bar, styles.currentBar)}
          style={{ width: currentScore }}
          title={`Score: ${currentScore}`}
        />

        <div
          className={classnames(styles.bar, styles.maxBar)}
          style={{ width: maxScore }}
          title={`Maximum Score: ${maxScore}`}
        />

        <div
          className={classnames(styles.bar, styles.minBar)}
          style={{ width: minScore }}
          title={`Minimum Score: ${minScore}`}
        />
      </div>
    </div>
  )
}

QuizScoreBar.propTypes = {
  currentScore: PropTypes.string.isRequired,
  minScore: PropTypes.string.isRequired,
  maxScore: PropTypes.string.isRequired
}

export default QuizScoreBar
