import { useMemo, useReducer } from 'react'

import questionsData from '../questions.json'

export const QuizStatusEnum = {
  Init: 'INIT',
  Started: 'STARTED',
  Done: 'DONE'
}

const Types = {
  SET_QUIZ_STATUS: 'SET_QUIZ_STATUS',
  GET_NEXt_QUESTION: 'GET_NEXt_QUESTION',
  PICK_ANSWER: 'PICK_ANSWER',
  RESET_QUIZ: 'RESET_QUIZ'
}

const initialState = {
  quizStatus: QuizStatusEnum.Init,
  currentQuestionNumber: 1,
  questions: questionsData.map((question, index) => ({
    questionNumber: index + 1,
    questionCategory: decodeURIComponent(question.category),
    difficulty: question.difficulty,
    questionTitle: decodeURIComponent(question.question),
    correctAnswer: decodeURIComponent(question.correct_answer),
    incorrectAnswers:
      question.incorrect_answers.map(answer => decodeURIComponent(answer)),
    pickedAnswer: null
  }))
}

const quizeReducer = (state, action) => {
  switch (action.type) {
    case Types.SET_QUIZ_STATUS:
      return {
        ...state,
        quizStatus: action.payload
      }

    case Types.GET_NEXt_QUESTION:
      return {
        ...state,
        currentQuestionNumber: Math.min(state.currentQuestionNumber + 1)
      }

    case Types.PICK_ANSWER:
      return {
        ...state,
        questions: state.questions.map(question => {
          if (question.questionNumber === state.currentQuestionNumber) {
            return {
              ...question,
              pickedAnswer: action.payload
            }
          }

          return question
        })
      }

    case Types.RESET_QUIZ:
      return initialState

    default:
      throw new Error('invalid type')
  }
}

export const useQuiz = () => {
  const [state, dispatch] = useReducer(quizeReducer, initialState)

  const setQuizStatus = status => {
    dispatch({ type: Types.SET_QUIZ_STATUS, payload: status })
  }

  const getNextQuestion = () => {
    dispatch({ type: Types.GET_NEXt_QUESTION })
  }

  const pickAnswer = answer => {
    dispatch({ type: Types.PICK_ANSWER, payload: answer })
  }

  const resetQuiz = answer => {
    dispatch({ type: Types.RESET_QUIZ })
  }

  const totalQuestions = state.questions.length

  const numberOfAnsweredQuestions = useMemo(() => {
    return state.questions.filter(question =>
      Boolean(question.pickedAnswer)
    ).length
  }, [state.questions])

  const numberOfCorrectAnswers = useMemo(() => {
    return state.questions.filter(question =>
      question.correctAnswer === question.pickedAnswer
    ).length
  }, [state.questions])

  const currentScore = numberOfCorrectAnswers / numberOfAnsweredQuestions

  const minScore = numberOfCorrectAnswers / totalQuestions

  const maxScore =
    (numberOfCorrectAnswers + totalQuestions - numberOfAnsweredQuestions) / totalQuestions

  return {
    quizStatus: state.quizStatus,
    currentQuestion: state.questions.find(question => question.questionNumber === state.currentQuestionNumber),
    totalQuestions,
    setQuizStatus,
    getNextQuestion,
    pickAnswer,
    resetQuiz,
    currentScore,
    minScore,
    maxScore
  }
}
