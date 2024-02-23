import { React, useEffect, useState } from "react"
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
  setHasBeenAnswered,
  categoryId,
  setScore,
}) => {
  const [selectedOption, setSelectedOption] = useState("")

  const handleSubmit = (categoryId, event) => {
    event.preventDefault()

    if (selectedOption === categories[0].clues[0].answer) {
      setSelectedAnswer(true)
      setScore((prev) => prev + categories[0].clues[0].points)
    } else if (selectedOption !== categories[0].clues[0].answer) {
      setIncorrectAnswer(true)
    }
    setHasBeenAnswered((prev) => {
      const newHasBeenAnswered = [...prev]
      newHasBeenAnswered[categoryId.target.id] = {
        answered: true,
        id: categoryId.target.id,
      }
      return newHasBeenAnswered
    })
    // console.log(categoryId.target.id)
    // console.log(hasBeenAnswered)
  }

  if (category200) {
    document.body.classList.add("active-modal")
    // console.log(categories)
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

            {categories.map((category, i) => (
              <>
                <div className="question">
                  <p className="questionP">{category[i].clues[i].question}</p>
                </div>

                <div className="category" data-testid="category">
                  <form onSubmit={(e) => handleSubmit(categoryId, e)}>
                    <>
                      <div className="formContainer">
                        <input
                          className="radioBtn"
                          type="radio"
                          id="option1"
                          name="picklist"
                          value={category[i].clues[i].answer}
                          onChange={(e) => {
                            setSelectedOption(e.target.value)
                          }}
                        />
                        <label htmlFor="option1">
                          {category[i].clues[i].answer}
                        </label>
                        <br />
                      </div>
                      <div className="formContainer">
                        <input
                          className="radioBtn"
                          type="radio"
                          id="option2"
                          name="picklist"
                          value={category[i].clues[i].option1}
                          onChange={(e) => {
                            setSelectedOption(e.target.value)
                          }}
                        />
                        <label htmlFor="option2">
                          {category[i].clues[i].option1}
                        </label>
                        <br />
                      </div>

                      <div className="formContainer">
                        <input
                          className="radioBtn"
                          type="radio"
                          id="option3"
                          name="picklist"
                          value={category[i].clues[i].option2}
                          onChange={(e) => {
                            setSelectedOption(e.target.value)
                          }}
                        />
                        <label htmlFor="option3">
                          {category[i].clues[i].option2}
                        </label>
                        <br />
                      </div>

                      <div className="formContainer">
                        <input
                          className="radioBtn"
                          type="radio"
                          id="option4"
                          name="picklist"
                          value={category[i].clues[i].option3}
                          onChange={(e) => {
                            setSelectedOption(e.target.value)
                          }}
                        />
                        <label htmlFor="option4">
                          {category[i].clues[i].option3}
                        </label>
                      </div>
                    </>

                    <div className="submitContainer">
                      <button type="submit" className="submitButton">
                        Submit Answer
                      </button>
                    </div>
                  </form>
                </div>
              </>
            ))}
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
