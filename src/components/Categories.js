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
    if (categoryId) {
      console.log(
        "categoryId:",
        categoryId,
        "selectedClueIndex:",
        selectedClueIndex,
      )
    }
  }, [selectedClueIndex])

  const openCategoryModal = (categoryId) => {
    const id = Number(categoryId.target.id)
    setCategory200((prev) => !prev)
    setSelectedAnswer(false)
    setIncorrectAnswer(false)

    setCategoryId(categoryId)

    console.log("id:", id, "category:", category200, "categories:", categories)
    switch (id) {
      case (0, 7, 14, 21, 28):
        setCategoryId(0)
        break
      case (1, 8, 15, 22, 29):
        setCategoryId(1)
        break
      case (2, 9, 16, 23, 30):
        setCategoryId(2)
        break
      case (3, 10, 17, 24, 31):
        setCategoryId(3)
        break
      case (4, 11, 18, 25, 32):
        setCategoryId(4)
        break
      case (5, 12, 19, 26, 33):
        setCategoryId(5)
        break
      case (6, 13, 20, 27, 34):
        setCategoryId(6)

        if (id >= 0 && id <= 6) {
          setSelectedClueIndex(0)
        } else if (id >= 7 && id <= 13) {
          setSelectedClueIndex(1)
        } else if (id >= 14 && id <= 20) {
          setSelectedClueIndex(2)
        } else if (id >= 21 && id <= 27) {
          setSelectedClueIndex(3)
        } else if (id >= 28 && id <= 34) {
          setSelectedClueIndex(4)
        }
        console.log("selectedClueIndex:", selectedClueIndex)
    }
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
