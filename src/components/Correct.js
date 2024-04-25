import React from "react"
import { categories } from "../testdata.js"

function Correct({
  categoryId,
  selectedClueIndex,
  openCategoryModal,
  selectedOption,
  categories1,
}) {
  const checkOption = (option) => {
    let optionValue = option.toString()
    return selectedOption.includes(optionValue)
  }

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
          <p className="questionP">{categories1[selectedClueIndex].question}</p>
        </div>

        <div className="category" data-testid="category">
          <form>
            <div className="formContainer">
              <input
                className="radioButton"
                type={
                  categories1[selectedClueIndex].answer.length > 1
                    ? "checkbox"
                    : "radio"
                }
                id="option1"
                name="picklist"
                value="option1"
              />
              <label
                htmlFor="option1"
                className={
                  checkOption(categories1[selectedClueIndex].option1)
                    ? "correctAnswer"
                    : "category"
                }
              >
                {categories1[selectedClueIndex].option1}
              </label>
              <br />
            </div>
            <div className="formContainer">
              <input
                className="radioButton"
                type={
                  categories1[selectedClueIndex].answer.length > 1
                    ? "checkbox"
                    : "radio"
                }
                id="option2"
                name="picklist"
                value="option2"
              />
              <label
                htmlFor="option2"
                className={
                  checkOption(categories1[selectedClueIndex].option2)
                    ? "correctAnswer"
                    : "category"
                }
              >
                {categories1[selectedClueIndex].option2}
              </label>
              <br />
            </div>

            <div className="formContainer">
              <input
                className="radioButton"
                type={
                  categories1[selectedClueIndex].answer.length > 1
                    ? "checkbox"
                    : "radio"
                }
                id="option3"
                name="picklist"
                value="option3"
              />
              <label
                htmlFor="option3"
                className={
                  checkOption(categories1[selectedClueIndex].option3)
                    ? "correctAnswer"
                    : "category"
                }
              >
                {categories1[selectedClueIndex].option3}
              </label>
              <br />
            </div>

            <div className="formContainer">
              <input
                className="radioButton"
                type={
                  categories1[selectedClueIndex].answer.length > 1
                    ? "checkbox"
                    : "radio"
                }
                id="option4"
                name="picklist"
                value="option4"
              />
              <label
                htmlFor="option4"
                className={
                  checkOption(categories1[selectedClueIndex].option4)
                    ? "correctAnswer"
                    : "category"
                }
              >
                {categories1[selectedClueIndex].option4}
              </label>
            </div>
            <div className="explanationContainer">
              <span>Explanation:</span>
              <p className="explanation">
                {categories1[selectedClueIndex].explanation}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Correct
