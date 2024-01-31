import React from "react"
import Clue from "./Clue.js"

const Category = (category200, onClose) => {
  return (
    <div className="category" data-testid="category">
      <div className="categoryTitle"></div>
      {/* {props.clues.map((clue) => (
        <Clue
          key={clue.id}
          clueObject={clue}
          selectQuestion={props.selectQuestion}
        />
      ))} */}
    </div>
  )
}

export default Category
