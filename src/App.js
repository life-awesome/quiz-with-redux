import React from "react";
import {connect} from "react-redux";
import Quiz from "./Quiz/Quiz";
import Endquiz from "./Quiz/EndQuiz/endquiz";


const App = ({ answerId, questions}) => {
    return (
        <div className="clear App flex-column">
            {answerId - 1 < questions.length
                ? <>
                    <div className="count-question">
                        <p>Количество вопрос {answerId} из {questions.length}</p>
                    </div>
                    <Quiz/>
                </>
                : <Endquiz/>}
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
