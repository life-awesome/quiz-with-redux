import React from "react";
import Question from "../question/question";
import {connect} from "react-redux";
import {changeQuestion} from "../../actions/change-question";

const QuizList = ({questions, answerId}) => {
    return (
        <div>
            <div className="title">
                <h2>Вопрос №{answerId}: {questions[answerId - 1].question}</h2>
            </div>
            <div className="question-list">
                {questions[answerId - 1].answers.map((obj, index )=> {
                    return <Question key = {index} question={obj.answer} statusAnswer={obj.statusAnswer} id={obj.id}/>
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
const mapDispatchToProps = dispatch => {
    return {
        onClickChangeQuestion : () => dispatch(changeQuestion())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizList)