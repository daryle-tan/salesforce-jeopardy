import React, { useState } from "react"
import Category from "./Category.js"

const Categories = ({}) => {
  const [category200, setCategory200] = useState(false)
  const [category400, setCategory400] = useState(false)
  const [category600, setCategory600] = useState(false)
  const [category800, setCategory800] = useState(false)
  const [category1000, setCategory1000] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(false)
  const [incorrectAnswer, setIncorrectAnswer] = useState(false)
  const [categoryId, setCategoryId] = useState(null)
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
  const [hasBeenAnswered, setHasBeenAnswered] = useState([
    { answered: false, id: null },
  ])

  const openCategoryModal = (categoryId) => {
    setCategory200((prev) => !prev)
    setSelectedAnswer(false)
    setIncorrectAnswer(false)
    console.log("closed")
    setCategoryId(categoryId)
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
        hasBeenAnswered[i] &&
        hasBeenAnswered[i].answered &&
        hasBeenAnswered[i].id ? (
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
        hasBeenAnswered={hasBeenAnswered}
        setHasBeenAnswered={setHasBeenAnswered}
        values={values}
        categoryId={categoryId}
      />
    </>
  )
}

export default Categories
