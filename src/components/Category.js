import { useEffect, useState } from "react"
import { categories } from "../testdata.js"
import Correct from "./Correct.js"
import { Incorrect } from "./Incorrect.js"

const Category = ({
  category200,
  openCategoryModal,
  selectedAnswer,
  setSelectedAnswer,
  incorrectAnswer,
  setIncorrectAnswer,
  hasBeenAnswered,
  setHasBeenAnswered,
  values,
  categoryId,
}) => {
  const [selectedOption, setSelectedOption] = useState("")

  const handleSubmit = (categoryId, event) => {
    event.preventDefault()

    if (selectedOption === categories[0].clues[0].answer) {
      setSelectedAnswer(true)
    } else if (selectedOption !== categories[0].clues[0].answer) {
      setIncorrectAnswer(true)
    }

    setHasBeenAnswered((prevState) => {
      if (!hasBeenAnswered[0].answered && hasBeenAnswered[0].id === null) {
        return [
          {
            answered: true,
            id: categoryId,
          },
        ]
      } else {
        return [
          ...prevState,
          {
            answered: true,
            id: categoryId,
          },
        ]
      }
    })
    console.log(categoryId)
  }

  if (category200) {
    document.body.classList.add("active-modal")
    console.log(categories)
  } else {
    document.body.classList.remove("active-modal")
  }

  return (
    <>
      {category200 ? (
        <>
          <div className="categoryOverlay"></div>

          <div className="categoryModal">
            <div className="closeButtonContainer">
              <button className="modalButton" onClick={openCategoryModal}>
                X
              </button>
            </div>
            <div className="question">
              <p className="questionP">{categories[0].clues[0].question}</p>
            </div>

            <div className="category" data-testid="category">
              <form onSubmit={(e) => handleSubmit(categoryId, e)}>
                <div className="formContainer">
                  <input
                    type="radio"
                    id="option1"
                    name="picklist"
                    value={categories[0].clues[0].answer}
                    onChange={(e) => {
                      setSelectedOption(e.target.value)
                    }}
                  />
                  <label htmlFor="option1">
                    {categories[0].clues[0].answer}
                  </label>
                  <br />
                </div>
                <div className="formContainer">
                  <input
                    type="radio"
                    id="option2"
                    name="picklist"
                    value={categories[0].clues[0].option1}
                    onChange={(e) => {
                      setSelectedOption(e.target.value)
                    }}
                  />
                  <label htmlFor="option2">
                    {categories[0].clues[0].option1}
                  </label>
                  <br />
                </div>

                <div className="formContainer">
                  <input
                    type="radio"
                    id="option3"
                    name="picklist"
                    value={categories[0].clues[0].option2}
                    onChange={(e) => {
                      setSelectedOption(e.target.value)
                    }}
                  />
                  <label htmlFor="option3">
                    {categories[0].clues[0].option2}
                  </label>
                  <br />
                </div>

                <div className="formContainer">
                  <input
                    type="radio"
                    id="option4"
                    name="picklist"
                    value={categories[0].clues[0].option3}
                    onChange={(e) => {
                      setSelectedOption(e.target.value)
                    }}
                  />
                  <label htmlFor="option4">
                    {categories[0].clues[0].option3}
                  </label>
                </div>
                <div className="submitContainer">
                  <button type="submit">Submit Answer</button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : null}
      <div>
        {!selectedAnswer && incorrectAnswer ? (
          <Incorrect openCategoryModal={openCategoryModal} />
        ) : selectedAnswer && !incorrectAnswer ? (
          <Correct openCategoryModal={openCategoryModal} />
        ) : null}
      </div>
    </>
  )
}

export default Category
