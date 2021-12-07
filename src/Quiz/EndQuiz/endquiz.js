import React from "react";
import {connect} from "react-redux";

const Endquiz = ({questions, state}) => {
    return (
        <div className="result">
            <h3>Ответы</h3>
            {questions.map((obj, index) => {
                return (
                    <div className="question d-flex justify-between question-result" key={index}>
                        <div>
                            {obj.question}
                        </div>
                        {obj.answerUser === obj.rightAnswer ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}
                    </div>
                )
            })}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        questions : state.questions,
        state
    }
}
export default connect(mapStateToProps)(Endquiz)