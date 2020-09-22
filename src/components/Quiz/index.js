import React from 'react'
import numeral from 'numeral'

import QuizEndScreen from '../QuizEndScreen'
import QuizInitialScreen from '../QuizInitialScreen'
import QuizProgressBar from '../QuizProgressBar'
import Question from '../Question'

import { QuizStatusEnum, useQuiz } from '../../hooks/useQuiz'

import styles from './styles.module.css'
import QuizScoreBar from '../QuizScoreBar'

const Quiz = () => {
  const {
    quizStatus,
    currentQuestion,
    totalQuestions,
    setQuizStatus,
    getNextQuestion,
    pickAnswer,
    resetQuiz,
    currentScore,
    minScore,
    maxScore
  } = useQuiz()

  if (quizStatus === QuizStatusEnum.Init) {
    return (
      <div className={styles.quiz}>
        <QuizInitialScreen
          totalQuestions={totalQuestions}
          startQuize={() => setQuizStatus(QuizStatusEnum.Started)}
        />
      </div>
    )
  }

  if (quizStatus === QuizStatusEnum.Done) {
    return (
      <div className={styles.quiz}>
        <QuizEndScreen
          restartHandler={resetQuiz}
          score={numeral(currentScore).format('0%')}
        />
      </div>
    )
  }

  return (
    <div className={styles.quiz}>
      <div className={styles.progressBar}>
        <QuizProgressBar progressPercentage={(currentQuestion.questionNumber / totalQuestions) * 100} />
      </div>

      <Question
        key={currentQuestion.questionNumber}
        questionNumber={currentQuestion.questionNumber}
        totalQuestions={totalQuestions}
        questionCategory={currentQuestion.questionCategory}
        difficulty={currentQuestion.difficulty}
        correctAnswer={currentQuestion.correctAnswer}
        incorrectAnswers={currentQuestion.incorrectAnswers}
        questionTitle={currentQuestion.questionTitle}
        pickAnswer={pickAnswer}
        pickedAnswer={currentQuestion.pickedAnswer}
        getNextQuestion={getNextQuestion}
        endQuiz={() => setQuizStatus(QuizStatusEnum.Done)}
      />

      <div>
        <QuizScoreBar
          currentScore={numeral(currentScore).format('0%')}
          minScore={numeral(minScore).format('0%')}
          maxScore={numeral(maxScore).format('0%')}
        />
      </div>
    </div>
  )
}

export default Quiz
