import React from "react"
import Categories from "./Categories.js"

const Gameboard = (props) => {
  return (
    <div
      id="gameboard"
      // id={props.currentQuestion.question ? "question" : "gameboard"}
    >
      {/* {props.currentQuestion.question ? (
        <div>{props.currentQuestion.question}</div>
      ) : ( */}
      <Categories
        categories={props.categories}
        selectQuestion={props.selectQuestion}
      />
      {/* )}  */}
      {/* was a question clicked?  */}
      {/* Yes? Show clue */}
      {/* No? Show Categories */}
    </div>
  )
}

export default Gameboard
