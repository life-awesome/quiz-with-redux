import React from "react";
import {connect} from "react-redux";
import {changeStatusAnswer} from "../../actions/change-status-answer";
import {changeQuestion} from "../../actions/change-question";

const Question = ({question, statusAnswer, changeStatus, id,onClickChangeQuestion}) => {
    return (
        <div className="question d-flex align-center" onClick={() => {
            changeStatus(id)
            onClickChangeQuestion()
        }} >
            <input type="checkbox" className="checkbox-question" checked={statusAnswer} onChange={() => changeStatus(id)}/>
            <div className="content-question">
                {question}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeStatus : (id) => dispatch(changeStatusAnswer(id)),
        onClickChangeQuestion : () => dispatch(changeQuestion())
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Question)