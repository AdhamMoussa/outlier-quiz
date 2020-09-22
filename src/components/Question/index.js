import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import QuestionHead from '../QuestionHead'
import QuestionChoice from '../QuestionChoice'
import Button from '../Button'

import styles from './styles.module.css'

const Question = props => {
  const {
    questionNumber,
    totalQuestions,
    questionCategory,
    difficulty,
    questionTitle,
    correctAnswer,
    incorrectAnswers,
    pickedAnswer,
    getNextQuestion,
    pickAnswer,
    endQuiz
  } = props

  const shuffledAnswers = useMemo(() =>
    [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5), [correctAnswer, incorrectAnswers])

  const isAnsweredCorrectly = pickedAnswer === correctAnswer

  return (
    <div>
      <div className={styles.head}>
        <QuestionHead
          questionNumber={questionNumber}
          totalQuestions={totalQuestions}
          questionCategory={questionCategory}
          difficulty={difficulty}
        />
      </div>

      <h2 className={styles.title}>{questionTitle}</h2>

      <div className={styles.answersGrid}>
        {shuffledAnswers.map(answer => (
          <div key={answer} className={styles.answer}>
            <QuestionChoice
              title={answer}
              isCorrect={answer === correctAnswer}
              isPicked={pickedAnswer === answer}
              isQuestionAnswered={Boolean(pickedAnswer)}
              onClick={() => pickAnswer(answer)}
            />
          </div>
        ))}
      </div>

      <div className={styles.questionResultWrapper}>
        {pickedAnswer && (
          <p className={styles.questionResult}>
            {isAnsweredCorrectly ? 'Correct!' : 'Sorry!'}
          </p>
        )}

        {pickedAnswer && totalQuestions > questionNumber && (
          <Button onClick={getNextQuestion}>
            next question
          </Button>
        )}

        {pickedAnswer && totalQuestions === questionNumber && (
          <Button onClick={endQuiz}>
            finish quiz
          </Button>
        )}
      </div>
    </div>
  )
}

Question.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  questionCategory: PropTypes.string.isRequired,
  difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  questionTitle: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  getNextQuestion: PropTypes.func.isRequired,
  endQuiz: PropTypes.func.isRequired,
  pickAnswer: PropTypes.func.isRequired,
  pickedAnswer: PropTypes.string
}

export default Question
