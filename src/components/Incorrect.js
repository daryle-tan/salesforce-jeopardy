import React from "react"
import { categories } from "../testdata.js"

export const Incorrect = ({
  categoryId,
  selectedClueIndex,
  openCategoryModal,
  selectedOption,
}) => {
  const answer = categories[categoryId].clues[selectedClueIndex].answer

  const checkOption = (option) => {
    let optionValue = option.toString()
    return answer.includes(optionValue)
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
        <h1 className="incorrectHeader">Incorrect.</h1>
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
                type={
                  categories[categoryId].clues[selectedClueIndex].answer
                    .length > 1
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
                  checkOption(
                    categories[categoryId].clues[selectedClueIndex].option1,
                  )
                    ? "answerForIncorrect"
                    : "incorrectAnswer"
                }
              >
                {categories[categoryId].clues[selectedClueIndex].option1}{" "}
                <span className="arrow">
                  {checkOption(
                    categories[categoryId].clues[selectedClueIndex].option1,
                  )
                    ? "← Correct Answer"
                    : null}
                </span>
              </label>
              <br />
            </div>
            <div className="formContainer">
              <input
                className="radioButton"
                type={
                  categories[categoryId].clues[selectedClueIndex].answer
                    .length > 1
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
                  checkOption(
                    categories[categoryId].clues[selectedClueIndex].option2,
                  )
                    ? "answerForIncorrect"
                    : "incorrectAnswer"
                }
              >
                {categories[categoryId].clues[selectedClueIndex].option2}
                <span className="arrow">
                  {checkOption(
                    categories[categoryId].clues[selectedClueIndex].option2,
                  )
                    ? "← Correct Answer"
                    : null}
                </span>
              </label>
              <br />
            </div>

            <div className="formContainer">
              <input
                className="radioButton"
                type={
                  categories[categoryId].clues[selectedClueIndex].answer
                    .length > 1
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
                  checkOption(
                    categories[categoryId].clues[selectedClueIndex].option3,
                  )
                    ? "answerForIncorrect"
                    : "incorrectAnswer"
                }
              >
                {categories[categoryId].clues[selectedClueIndex].option3}
                <span className="arrow">
                  {checkOption(
                    categories[categoryId].clues[selectedClueIndex].option3,
                  )
                    ? "← Correct Answer"
                    : null}
                </span>
              </label>
              <br />
            </div>

            <div className="formContainer">
              <input
                className="radioButton"
                type={
                  categories[categoryId].clues[selectedClueIndex].answer
                    .length > 1
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
                  checkOption(
                    categories[categoryId].clues[selectedClueIndex].option4,
                  )
                    ? "answerForIncorrect"
                    : "incorrectAnswer"
                }
              >
                {categories[categoryId].clues[selectedClueIndex].option4}
                <span className="arrow">
                  {checkOption(
                    categories[categoryId].clues[selectedClueIndex].option4,
                  )
                    ? "← Correct Answer"
                    : null}
                </span>
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
