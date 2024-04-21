import { useEffect, useState } from "react"
import Correct from "./Correct.js"
import { Incorrect } from "./Incorrect.js"
import { categories } from "../testdata.js"

const Category = ({
  category,
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
  setCluesAnswered,
  selectedOption,
  setSelectedOption,
  setSelectedClueIndex,
}) => {
  const [shuffledOptions, setShuffledOptions] = useState([])
  const [categories1, setCategories] = useState([])
  const [clues, setClues] = useState([])

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
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/clues")
        const data = await response.json()
        console.log(data)

        setCategories(data)
        // setSelectedClueIndex(data[])
        console.log("categories1", categories1)
        console.log("data[5]", data[5])

        // Check if selectedClueIndex is valid and data is available
        if (selectedClueIndex >= 0 && selectedClueIndex <= data.length) {
          setShuffledOptions(
            shuffleArray([
              categories1[selectedClueIndex].option1,
              categories1[selectedClueIndex].option2,
              categories1[selectedClueIndex].option3,
              categories1[selectedClueIndex].option4,
            ]),
          )
        }
      } catch (error) {
        console.error("error", error)
      }
    }

    fetchData()
    // fetchClues()
  }, [selectedClueIndex, categoryId])

  const handleSubmit = (categoryId, event) => {
    event.preventDefault()

    const selectedOptions = Array.isArray(selectedOption)
      ? selectedOption
      : [selectedOption]
    const answer = categories1[selectedClueIndex].answer

    // Check if every selected option is included in the answer array
    const isCorrect =
      selectedOptions.length === answer.length &&
      selectedOptions
        .sort()
        .every((option, index) => option === answer.sort()[index])

    if (isCorrect) {
      setSelectedAnswer(true)

      setScore((prev) => prev + categories1[selectedClueIndex].points)
    } else {
      setIncorrectAnswer(true)
    }
    console.log("selected option", selectedOption, "isCorrect", isCorrect)
    console.log("selectedOptions:", selectedOptions)
    console.log("answer:", answer)
    setCluesAnswered((prev) => prev + 1)
    setHasBeenAnswered((prev) => {
      const newHasBeenAnswered = [...prev]
      newHasBeenAnswered[idx] = {
        answered: true,
        id: idx,
      }
      return newHasBeenAnswered
    })
  }

  if (category) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }

  return (
    <>
      {category && categories1[selectedClueIndex] ? (
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
                {categories1[selectedClueIndex].question}
              </p>
            </div>

            <div className="category" data-testid="category">
              <form onSubmit={(e) => handleSubmit(categoryId, e)}>
                {shuffledOptions.map((option, index) => (
                  <div className="formContainer" key={index}>
                    <input
                      className="radioBtn"
                      type={
                        categories1[selectedClueIndex].answer.length > 1
                          ? "checkbox"
                          : "radio"
                      }
                      id={`option${index + 1}`}
                      name="picklist"
                      value={option}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedOption((prev) => [...prev, e.target.value])
                        } else {
                          setSelectedOption((prev) =>
                            prev.filter((option) => option !== e.target.value),
                          )
                        }
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
            selectedOption={selectedOption}
            categories1={categories1}
          />
        ) : selectedAnswer && !incorrectAnswer ? (
          <Correct
            openCategoryModal={openCategoryModal}
            categoryId={categoryId}
            selectedClueIndex={selectedClueIndex}
            selectedOption={selectedOption}
            categories1={categories1}
          />
        ) : null}
      </div>
    </>
  )
}

export default Category
