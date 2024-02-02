import React from "react"
import Clue from "./Clue.js"

const Category = ({ category200, openCategoryModal }) => {
  if (category200) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      {category200 ? (
        <div className="category" data-testid="category">
          <div className="categoryOverlay">
            <div className="categoryModal">
              <button className="modalButton" onClick={openCategoryModal}>
                X
              </button>
              Hi
            </div>
          </div>
          {/* {props.clues.map((clue) => (
        <Clue
          key={clue.id}
          clueObject={clue}
          selectQuestion={props.selectQuestion}
        />
      ))} */}
        </div>
      ) : null}
    </>
  )
}

export default Category
