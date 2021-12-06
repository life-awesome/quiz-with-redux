import React from "react";

const Question = ({question}) => {
    return (
        <div className="question d-flex align-center">
            <input type="checkbox" className="checkbox-question"/>
            <div className="content-question">
                {question}
            </div>
        </div>
    )
}
export default Question