import React from "react"
import { categories } from "../testdata.js"

export const Incorrect = ({ category200, openCategoryModal }) => {
  return (
    <>
      <div className="categoryOverlay"></div>

      <div className="categoryModal">
        <div className="closeButtonContainer">
          <button className="modalButton" onClick={openCategoryModal}>
            X
          </button>
        </div>
        <h1 className="incorrectHeader">Incorrect.</h1>
        <div className="question">
          <p className="questionP">{categories[0].clues[0].question}</p>
        </div>

        <div className="category" data-testid="category">
          <form>
            <div className="formContainer">
              <input
                type="radio"
                id="option1"
                name="picklist"
                value="option1"
              />
              <label htmlFor="option1" className="answerForIncorrect">
                {categories[0].clues[0].answer}{" "}
                <span className="arrow"> &lt;-- Correct Answer</span>
              </label>
              <br />
            </div>
            <div className="formContainer">
              <input
                type="radio"
                id="option2"
                name="picklist"
                value="option2"
              />
              <label htmlFor="option2" className="incorrectAnswer">
                {categories[0].clues[0].option1}
              </label>
              <br />
            </div>

            <div className="formContainer">
              <input
                type="radio"
                id="option3"
                name="picklist"
                value="option3"
              />
              <label htmlFor="option3" className="incorrectAnswer">
                {categories[0].clues[0].option2}
              </label>
              <br />
            </div>

            <div className="formContainer">
              <input
                type="radio"
                id="option4"
                name="picklist"
                value="option4"
              />
              <label htmlFor="option4" className="incorrectAnswer">
                {categories[0].clues[0].option3}
              </label>
            </div>
            <div className="submitContainer">
              <p>Explanation: {categories[0].clues[0].explanation}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
