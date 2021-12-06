import React from "react";
import {connect} from "react-redux";
import {changeQuestion} from "./actions/change-question";
import Quiz from "./Quiz/Quiz";


const App = ({ answerId, questions, onClickChangeQuestion}) => {
    return (
        <div className="clear App flex-column">
            <div className="count-question">
                <p>Количество вопрос {answerId} из {questions.length}</p>
            </div>
            <Quiz/>
            <div>
                <button className="change-question" onClick={() => onClickChangeQuestion()}>Следующий вопрос</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        answerId : state.answerId,
        questions : state.questions
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onClickChangeQuestion : () => dispatch(changeQuestion())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
