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
    console.log(categoryId, category200, categories)
    setCategoryId(categoryId)
    // setSelectedCategoryIndex(categoryId)
    // setSelectedClueIndex(categoryId)
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
        // selectedClueIndex={selectedClueIndex}
      />
    </>
  )
}

export default Categories
