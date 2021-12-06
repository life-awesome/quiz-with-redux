import {CHANGE_QUESTION} from "../actions/change-question";

const initialState = {
    answerId: 1,
    questions: [
        {
            id: 1,
            question: 'Как дела?',
            rightAnswer : 3,
            answers: [
                {
                    answer: 'Нормально'
                },
                {
                    answer: 'Плохо'
                },
                {
                    answer: 'Хорошо'
                },
                {
                    answer: 'Пойдет'
                }
            ]
        },
        {
            id: 2,
            question: 'Как настроение?',
            rightAnswer : 1,
            answers: [
                {
                    answer: 'Нормально'
                },
                {
                    answer: 'Плохо'
                },
                {
                    answer: 'Хорошо'
                },
                {
                    answer: 'Пойдет'
                }
            ]
        }
    ]
}



export const quizReducer = (state = initialState, actions) => {
    switch (actions.type){
        case CHANGE_QUESTION : {
            return {
                ...state,
                answerId: 2
            }
        }
        default : {
            return state
        }
    }
}
