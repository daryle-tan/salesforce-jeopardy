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
  setHasBeenAnswered,
  categoryId,
  setScore,
  selectedClueIndex,
  idx,
}) => {
  const [selectedOption, setSelectedOption] = useState("")

  const shuffleArray = (array) => {
    const shuffledArray = [...array]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = shuffledArray[i]
      shuffledArray[i] = shuffledArray[j]
      shuffledArray[j] = temp
    }
    console.log("change")
    return shuffledArray
  }

  useEffect(() => {
    setShuffledOptions(
      shuffleArray([
        categories[categoryId].clues[selectedClueIndex].answer,
        categories[categoryId].clues[selectedClueIndex].option1,
        categories[categoryId].clues[selectedClueIndex].option2,
        categories[categoryId].clues[selectedClueIndex].option3,
      ]),
    )
  }, [categoryId, selectedClueIndex])

  const [shuffledOptions, setShuffledOptions] = useState([])

  const handleSubmit = (categoryId, event) => {
    event.preventDefault()

    if (
      selectedOption === categories[categoryId].clues[selectedClueIndex].answer
    ) {
      setSelectedAnswer(true)
      setScore(
        (prev) => prev + categories[categoryId].clues[selectedClueIndex].points,
      )
    } else if (
      selectedOption !== categories[categoryId].clues[selectedClueIndex].answer
    ) {
      setIncorrectAnswer(true)
    }
    // console.log(idx)
    setHasBeenAnswered((prev) => {
      const newHasBeenAnswered = [...prev]
      newHasBeenAnswered[idx] = {
        answered: true,
        id: idx,
      }
      return newHasBeenAnswered
    })
  }

  if (category200) {
    document.body.classList.add("active-modal")
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
              <p className="questionP">
                {categories[categoryId].clues[selectedClueIndex].question}
              </p>
            </div>

            <div className="category" data-testid="category">
              <form onSubmit={(e) => handleSubmit(categoryId, e)}>
                {shuffledOptions.map((option, index) => (
                  <div className="formContainer" key={index}>
                    <input
                      className="radioBtn"
                      type="radio"
                      id={`option${index + 1}`}
                      name="picklist"
                      value={option}
                      onChange={(e) => {
                        setSelectedOption(e.target.value)
                      }}
                    />
                    <label htmlFor={`option${index + 1}`}>{option}</label>
                    <br />
                  </div>
                ))}
                <div className="submitContainer">
                  <button type="submit" className="submitButton">
                    Submit Answer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : null}
      <div>
        {!selectedAnswer && incorrectAnswer ? (
          <Incorrect
            openCategoryModal={openCategoryModal}
            categoryId={categoryId}
            selectedClueIndex={selectedClueIndex}
          />
        ) : selectedAnswer && !incorrectAnswer ? (
          <Correct
            openCategoryModal={openCategoryModal}
            categoryId={categoryId}
            selectedClueIndex={selectedClueIndex}
          />
        ) : null}
      </div>
    </>
  )
}

export default Category
