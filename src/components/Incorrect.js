import React from "react"

export const Incorrect = ({
  categoryId,
  selectedClueIndex,
  openCategoryModal,
  selectedOption,
  categories1,
}) => {
  const answer = categories1[selectedClueIndex].answer

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
                    ? "answerForIncorrect"
                    : "incorrectAnswer"
                }
              >
                {categories1[selectedClueIndex].option1}{" "}
                <span className="arrow">
                  {checkOption(categories1[selectedClueIndex].option1)
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
                    ? "answerForIncorrect"
                    : "incorrectAnswer"
                }
              >
                {categories1[selectedClueIndex].option2}
                <span className="arrow">
                  {checkOption(categories1[selectedClueIndex].option2)
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
                    ? "answerForIncorrect"
                    : "incorrectAnswer"
                }
              >
                {categories1[selectedClueIndex].option3}
                <span className="arrow">
                  {checkOption(categories1[selectedClueIndex].option3)
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
                    ? "answerForIncorrect"
                    : "incorrectAnswer"
                }
              >
                {categories1[selectedClueIndex].option4}
                <span className="arrow">
                  {checkOption(categories1[selectedClueIndex].option4)
                    ? "← Correct Answer"
                    : null}
                </span>
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
