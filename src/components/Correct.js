import React from "react"
import { categories } from "../testdata.js"

function Correct({ categoryId, selectedClueIndex, openCategoryModal }) {
  return (
    <>
      <div className="categoryOverlay"></div>

      <div className="categoryModal">
        <div className="closeButtonContainer">
          <button className="modalButton" onClick={openCategoryModal}>
            X
          </button>
        </div>
        <h1 className="correctHeader">Correct!</h1>
        <div className="question">
          <p className="questionP">
            {categories[categoryId].clues[selectedClueIndex].question}
          </p>
        </div>

        <div className="category" data-testid="category">
          <form>
            <div className="formContainer">
              <input
                className="radioButton"
                type="radio"
                id="option1"
                name="picklist"
                value="option1"
              />
              <label htmlFor="option1" className="correctAnswer">
                {categories[categoryId].clues[selectedClueIndex].answer}
              </label>
              <br />
            </div>
            <div className="formContainer">
              <input
                className="radioButton"
                type="radio"
                id="option2"
                name="picklist"
                value="option2"
              />
              <label htmlFor="option2">
                {categories[categoryId].clues[selectedClueIndex].option1}
              </label>
              <br />
            </div>

            <div className="formContainer">
              <input
                className="radioButton"
                type="radio"
                id="option3"
                name="picklist"
                value="option3"
              />
              <label htmlFor="option3">
                {categories[categoryId].clues[selectedClueIndex].option2}
              </label>
              <br />
            </div>

            <div className="formContainer">
              <input
                className="radioButton"
                type="radio"
                id="option4"
                name="picklist"
                value="option4"
              />
              <label htmlFor="option4">
                {categories[categoryId].clues[selectedClueIndex].option3}
              </label>
            </div>
            <div className="submitContainer">
              <p>
                Explanation:{" "}
                {categories[categoryId].clues[selectedClueIndex].explanation}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Correct
