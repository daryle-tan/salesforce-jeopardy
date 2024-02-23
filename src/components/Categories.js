import React, { useState } from "react"
import Category from "./Category.js"
import { categories } from "../testdata.js"

const Categories = ({ setScore }) => {
  const [category200, setCategory200] = useState(false)
  const [category400, setCategory400] = useState(false)
  const [category600, setCategory600] = useState(false)
  const [category800, setCategory800] = useState(false)
  const [category1000, setCategory1000] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(false)
  const [incorrectAnswer, setIncorrectAnswer] = useState(false)
  const [categoryId, setCategoryId] = useState(null)
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null)
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

  const openCategoryModal = (categoryId) => {
    setCategory200((prev) => !prev)
    setSelectedAnswer(false)
    setIncorrectAnswer(false)
    console.log(categoryId.target.id, category200, categories)
    setCategoryId(categoryId)

    if (categoryId.target.id <= 0 && categoryId.target.id >= 6) {
      return 0
    } else if (categoryId.target.id <= 7 && categoryId.target.id >= 14) {
      return 1
    } else if (categoryId.target.id <= 15 && categoryId.target.id >= 21) {
      return 2
    } else if (categoryId.target.id <= 22 && categoryId.target.id >= 28) {
      return 3
    } else if (categoryId.target.id <= 29 && categoryId.target.id >= 35) {
      return 4
    }
    values.forEach((value) => {
      switch (value) {
        case "200":
          setSelectedClueIndex(0)
          break
        case "400":
          setSelectedClueIndex(1)
          break
        case "600":
          setSelectedClueIndex(2)
          break
        case "800":
          setSelectedClueIndex(3)
          break
        case "1000":
          setSelectedClueIndex(4)
          break
        default:
          break
      }
    })
    console.log(selectedClueIndex)
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
        // selectedCategoryIndex={selectedCategoryIndex}
        selectedClueIndex={selectedClueIndex}
      />
    </>
  )
}

export default Categories
