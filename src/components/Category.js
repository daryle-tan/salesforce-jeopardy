import { useEffect, useState } from "react"
import Correct from "./Correct.js"
import { Incorrect } from "./Incorrect.js"

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
}) => {
  const [shuffledOptions, setShuffledOptions] = useState([])
  const [categories1, setCategories] = useState([])

  const shuffleArray = (array) => {
    const shuffledArray = [...array]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = shuffledArray[i]
      shuffledArray[i] = shuffledArray[j]
      shuffledArray[j] = temp
    }

    return shuffledArray
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/clues")
        const data = await response.json()
        setCategories(data)

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
    // console.log("selected option", selectedOption, "isCorrect", isCorrect)
    // console.log("selectedOptions:", selectedOptions)
    // console.log("answer:", answer)
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

  // const parts = categories1[selectedClueIndex].question.split("?")
  // const firstPart = parts[0] // Text before the question mark
  // const secondPart = parts[1]
  // const stringWithNewLine = `${firstPart}?\n${secondPart.trim()}`

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
            <div>
              <div className="question">
                <p className="questionP">
                  {categories1[selectedClueIndex].question
                    .split("?")
                    .map((line, index, array) => (
                      <div key={index}>
                        <span>
                          {line.trim()}
                          {index !== array.length - 1 &&
                          array[index + 1].trim() !== "" ? (
                            <>
                              <br />
                            </>
                          ) : (
                            ""
                          )}
                        </span>
                        {index !== array.length - 1 && <br />}
                      </div>
                    ))}
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
                            setSelectedOption((prev) => [
                              ...prev,
                              e.target.value,
                            ])
                          } else {
                            setSelectedOption((prev) =>
                              prev.filter(
                                (option) => option !== e.target.value,
                              ),
                            )
                          }
                        }}
                      />
                      <label
                        htmlFor={`option${index + 1}`}
                        className="categoryLabel"
                      >
                        {option}
                      </label>
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
