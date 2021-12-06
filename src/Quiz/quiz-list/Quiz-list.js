import React from "react";
import Question from "../question/question";
import {connect} from "react-redux";

const QuizList = ({questions, answerId}) => {
    return (
        <div>
            <div className="title">
                <h2>Вопрос №{}: {questions[answerId - 1].question}</h2>
            </div>
            <div className="question-list">
                {questions[answerId - 1].answers.map((obj, index )=> {
                    return <Question key = {index} question={obj.answer}/>
                })}
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        answerId: state.answerId,
        questions : state.questions,
    }
}
export default connect(mapStateToProps)(QuizList)