import React, { useState } from "react"
import Category from "./Category.js"

const Categories = () => {
  const [category200, setCategory200] = useState(false)
  const [category400, setCategory400] = useState(false)
  const [category600, setCategory600] = useState(false)
  const [category800, setCategory800] = useState(false)
  const [category1000, setCategory1000] = useState(false)

  const openCategoryModal = () => {
    setCategory200((prev) => !prev)
    console.log("hi")
  }
  return (
    <>
      <div className="categories">
        {/* {props.categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          clues={category.clues}
          selectQuestion={props.selectQuestion}
        />
      ))} */}
        Configuration & Setup
      </div>
      <div className="categories">Object Manager & Lightning App Builder</div>
      <div className="categories">Sales & Marketing Applications</div>
      <div className="categories">Service & Support Applications</div>
      <div className="categories">Productivity & Collaboration</div>
      <div className="categories">Data & Analytics Management</div>
      <div className="categories">Workflow / Process Automation</div>
      <div
        className="categories"
        category200={category200}
        onClick={openCategoryModal}
      >
        $200
      </div>
      <div className="categories">$200</div>
      <div className="categories">$200</div>
      <div className="categories">$200</div>
      <div className="categories">$200</div>
      <div className="categories">$200</div>
      <div className="categories">$200</div>
      <div className="categories">$400</div>
      <div className="categories">$400</div>
      <div className="categories">$400</div>
      <div className="categories">$400</div>
      <div className="categories">$400</div>
      <div className="categories">$400</div>
      <div className="categories">$400</div>
      <div className="categories">$600</div>
      <div className="categories">$600</div>
      <div className="categories">$600</div>
      <div className="categories">$600</div>
      <div className="categories">$600</div>
      <div className="categories">$600</div>
      <div className="categories">$600</div>
      <div className="categories">$800</div>
      <div className="categories">$800</div>
      <div className="categories">$800</div>
      <div className="categories">$800</div>
      <div className="categories">$800</div>
      <div className="categories">$800</div>
      <div className="categories">$800</div>
      <div className="categories">$1000</div>
      <div className="categories">$1000</div>
      <div className="categories">$1000</div>
      <div className="categories">$1000</div>
      <div className="categories">$1000</div>
      <div className="categories">$1000</div>
      <div className="categories">$1000</div>
      <Category />
    </>
  )
}

export default Categories
