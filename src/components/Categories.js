import React, { useEffect, useState } from "react"
import Category from "./Category.js"
import { categories } from "../testdata.js"

const Categories = ({ setScore }) => {
  const [category200, setCategory200] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(false)
  const [incorrectAnswer, setIncorrectAnswer] = useState(false)
  const [categoryId, setCategoryId] = useState(null)
  const [selectedClueIndex, setSelectedClueIndex] = useState(null)
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

  useEffect(() => {
    // if (category200) {
    console.log(
      "categoryId:",
      categoryId,
      "selectedClueIndex:",
      selectedClueIndex,
    )
    // }
  }, [selectedClueIndex, categoryId, category200])

  // const openCategoryModal = (categoryId) => {
  //   const id = Number(categoryId.target.id)
  //   setCategory200((prev) => !prev)
  //   setSelectedAnswer(false)
  //   setIncorrectAnswer(false)

  //   if (id === 0 || 7 || 14 || 21 || 28) {
  //     setCategoryId(0)
  //   } else if (id === 1 || 8 || 15 || 22 || 29) {
  //     setCategoryId(1)
  //   } else if (id === 2 || 9 || 16 || 23 || 30) {
  //     setCategoryId(2)
  //   } else if (id === 3 || 10 || 17 || 24 || 31) {
  //     setCategoryId(3)
  //   } else if (id === 4 || 11 || 18 || 25 || 32) {
  //     setCategoryId(4)
  //   } else if (id === 5 || 12 || 19 || 26 || 33) {
  //     setCategoryId(5)
  //   } else if (id === 6 || 13 || 20 || 27 || 34) {
  //     setCategoryId(6)
  //   }

  //   const hasClueAtIndexZero = categories.some((category) => category.clues[0])
  //   const hasClueAtIndexOne = categories.some((category) => category.clues[1])
  //   const hasClueAtIndexTwo = categories.some((category) => category.clues[2])
  //   const hasClueAtIndexThree = categories.some((category) => category.clues[3])
  //   const hasClueAtIndexFour = categories.some((category) => category.clues[4])
  //   const hasClueAtIndexFive = categories.some((category) => category.clues[5])
  //   const hasClueAtIndexSix = categories.some((category) => category.clues[6])

  //   if (hasClueAtIndexZero) {
  //     setSelectedClueIndex(0)
  //   } else if (hasClueAtIndexOne) {
  //     setSelectedClueIndex(1)
  //   } else if (hasClueAtIndexTwo) {
  //     setSelectedClueIndex(2)
  //   } else if (hasClueAtIndexThree) {
  //     setSelectedClueIndex(3)
  //   } else if (hasClueAtIndexFour) {
  //     setSelectedClueIndex(4)
  //   } else if (hasClueAtIndexFive) {
  //     setSelectedClueIndex(5)
  //   } else if (hasClueAtIndexSix) {
  //     setSelectedClueIndex(6)
  //   }

  //   console.log(
  //     "categoryId:",
  //     categoryId,
  //     "category:",
  //     category200,
  //     "categories:",
  //     categories,
  //     "id:",
  //     id,
  //     "selectedClueIndex:",
  //     selectedClueIndex,
  //   )
  // }

  const openCategoryModal = (categoryId) => {
    const id = Number(categoryId.target.id)
    setCategory200((prev) => !prev)
    setSelectedAnswer(false)
    setIncorrectAnswer(false)

    const categoriesByIndex = [0, 1, 2, 3, 4, 5, 6]
    const categoryIndex = categoriesByIndex.findIndex(
      (index) => id >= index * 7 && id < (index + 1) * 7,
    )
    setCategoryId(categoryIndex)

    // Set selectedClueIndex based on available clues in categories
    let selectedClueIndex = 0
    while (!categories.some((category) => category.clues[selectedClueIndex])) {
      selectedClueIndex++
      if (selectedClueIndex >= categories[0].clues.length) {
        break
      }
    }
    setSelectedClueIndex(selectedClueIndex)

    console.log(
      "categoryId:",
      categoryId,
      "category:",
      category200,
      "categories:",
      categories,
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
          <div
            key={i}
            id={i}
            className="categories"
            category200={category200}
          ></div>
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
        category200={category200}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        incorrectAnswer={incorrectAnswer}
        setIncorrectAnswer={setIncorrectAnswer}
        setHasBeenAnswered={setHasBeenAnswered}
        categoryId={categoryId}
        setScore={setScore}
        selectedClueIndex={selectedClueIndex}
      />
    </>
  )
}
export default Categories
