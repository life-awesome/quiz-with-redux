import {CHANGE_QUESTION} from "../actions/change-question";
import {CHANGE_STATUS_ANSWER} from "../actions/change-status-answer";

const initialState = {
    answerId: 1,
    questions: [
        {
            id: 1,
            question: 'Как дела?',
            rightAnswer: 3,
            answerUser: true,
            answers: [
                {
                    id: 1,
                    answer: 'Нормально',
                    statusAnswer: false
                },
                {
                    id: 2,
                    answer: 'Плохо',
                    statusAnswer: false
                },
                {
                    id: 3,
                    answer: 'Хорошо',
                    statusAnswer: false
                },
                {
                    id: 4,
                    answer: 'Пойдет',
                    statusAnswer: false
                }
            ]
        },
        {
            id: 2,
            question: 'Как настроение?',
            rightAnswer: 1,
            answerUser: false,
            answers: [
                {
                    id: 1,
                    answer: 'Нормально',
                    statusAnswer: false
                },
                {
                    id: 2,
                    answer: 'Плохо',
                    statusAnswer: false
                },
                {
                    id: 3,
                    answer: 'Хорошо',
                    statusAnswer: false
                },
                {
                    id: 4,
                    answer: 'Пойдет',
                    statusAnswer: false
                }
            ]
        }
    ]
}


export const quizReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case CHANGE_QUESTION : {
            return {
                ...state,
                answerId: state.answerId + 1
            }
        }
        case CHANGE_STATUS_ANSWER : {
            const arr = [...state.questions[state.answerId - 1].answers]
            const answers = arr.map((obj, index) => {
                if (obj.id === actions.payload.id) {
                    obj.statusAnswer = !obj.statusAnswer
                }
                return obj
            })

            const arrQuestions = [...state.questions]
            const questions = arrQuestions.map((obj, index) => {
                if(obj.id === state.answerId) {
                    obj.answers = answers
                }
                return obj
            })
            return {
                ...state,
                questions
            }
        }
        default : {
            return state
        }
    }
}
