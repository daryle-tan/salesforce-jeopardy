import React, { useState } from "react"
import Category from "./Category.js"

const Categories = ({ setScore, setCluesAnswered, category, setCategory }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(false)
  const [incorrectAnswer, setIncorrectAnswer] = useState(false)
  const [categoryId, setCategoryId] = useState(0)
  const [selectedClueIndex, setSelectedClueIndex] = useState(0)
  const [idx, setIdx] = useState(null)
  const [selectedOption, setSelectedOption] = useState([])

  const values = [
    "$200",
    "$200",
    "$200",
    "$200",
    "$200",
    "$200",
    "$200",
    "$400",
    "$400",
    "$400",
    "$400",
    "$400",
    "$400",
    "$400",
    "$600",
    "$600",
    "$600",
    "$600",
    "$600",
    "$600",
    "$600",
    "$800",
    "$800",
    "$800",
    "$800",
    "$800",
    "$800",
    "$800",
    "$1000",
    "$1000",
    "$1000",
    "$1000",
    "$1000",
    "$1000",
    "$1000",
  ]
  const [hasBeenAnswered, setHasBeenAnswered] = useState(
    new Array(values.length).fill({ answered: false, id: null }),
  )

  const getClues = async (id) => {
    try {
      const response2 = await fetch("http://localhost:3001/api/clues")
      // const data2 = await response2.json()

      const indexMap = {
        7: 1,
        14: 2,
        21: 3,
        28: 4,
        1: 5,
        8: 6,
        15: 7,
        22: 8,
        29: 9,
        2: 10,
        9: 11,
        16: 12,
        23: 13,
        30: 14,
        3: 15,
        10: 16,
        17: 17,
        24: 18,
        31: 19,
        4: 20,
        11: 21,
        18: 22,
        25: 23,
        32: 24,
        5: 25,
        12: 26,
        19: 27,
        26: 28,
        33: 29,
        6: 30,
        13: 31,
        20: 32,
        27: 33,
        34: 34,
      }

      setSelectedClueIndex(indexMap[id] || 0)

      // const response = await fetch(`/api/clues/${selectedClueIndex}`)
      // const data = await response.json()

      // console.log("id", id)
      // if (!response.ok) {
      //   throw new Error(data.message || "Could not fetch clues.")
      // }
      // setDataId(data.id)
      // return data
    } catch (error) {
      console.error("Error fetching clues:", error)
    }
  }

  const openCategoryModal = (categoryId) => {
    const id = Number(categoryId.target.id)

    setIdx(id)
    setCategory((prev) => !prev)
    setSelectedAnswer(false)
    setIncorrectAnswer(false)
    setSelectedOption([])
    getClues(id)

    if (id === 0 || id === 7 || id === 14 || id === 21 || id === 28) {
      setCategoryId(1)
    } else if (id === 1 || id === 8 || id === 15 || id === 22 || id === 29) {
      setCategoryId(2)
    } else if (id === 2 || id === 9 || id === 16 || id === 23 || id === 30) {
      setCategoryId(3)
    } else if (id === 3 || id === 10 || id === 17 || id === 24 || id === 31) {
      setCategoryId(4)
    } else if (id === 4 || id === 11 || id === 18 || id === 25 || id === 32) {
      setCategoryId(5)
    } else if (id === 5 || id === 12 || id === 19 || id === 26 || id === 33) {
      setCategoryId(6)
    } else if (id === 6 || id === 13 || id === 20 || id === 27 || id === 34) {
      setCategoryId(7)
    }

    console.log(
      "categoryId:",
      categoryId,
      "category:",
      category,
      "id:",
      id,
      "selectedClueIndex:",
      selectedClueIndex,
    )
  }
  return (
    <>
      <div className="categoriesTitle">Configuration & Setup</div>
      <div className="categoriesTitle">
        Object Manager & Lightning App Builder
      </div>
      <div className="categoriesTitle">Sales & Marketing Applications</div>
      <div className="categoriesTitle">Service & Support Applications</div>
      <div className="categoriesTitle">Productivity & Collaboration</div>
      <div className="categoriesTitle">Data & Analytics Management</div>
      <div className="categoriesTitle">Workflow / Process Automation</div>
      {values.map((value, i) =>
        hasBeenAnswered[i].answered ? (
          <div key={i} id={i} className="categories"></div>
        ) : (
          <div
            key={i}
            id={i}
            className="categories"
            onClick={openCategoryModal}
          >
            {value}
          </div>
        ),
      )}

      <Category
        openCategoryModal={openCategoryModal}
        category={category}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        incorrectAnswer={incorrectAnswer}
        setIncorrectAnswer={setIncorrectAnswer}
        setHasBeenAnswered={setHasBeenAnswered}
        categoryId={categoryId}
        setScore={setScore}
        selectedClueIndex={selectedClueIndex}
        idx={idx}
        setCluesAnswered={setCluesAnswered}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        setSelectedClueIndex={setSelectedClueIndex}
      />
    </>
  )
}
export default Categories
