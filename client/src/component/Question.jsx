import React from "react";
import "./Question.css";
import Question from "../assets/question.png";

function questionMark(){
    return(
        <div>
        {/* Question mark icon */}
                <div className="QuestionsMark">
                  <img src={Question} alt="Question mark" />
                </div>
    </div>
    )
}
export default questionMark;