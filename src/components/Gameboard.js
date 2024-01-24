import React from "react"
import Categories from "./Categories.js"

const Gameboard = (props) => {
  return (
    <div
      data-testid="gameboard"
      id={props.currentQuestion.question ? "question" : "gameboard"}
    >
      {props.currentQuestion.question ? (
        <div>{props.currentQuestion.question}</div>
      ) : (
        <Categories
          categories={props.categories}
          selectQuestion={props.selectQuestion}
        />
      )}
      {/* was a question clicked?  */}
      {/* Yes? Show clue */}
      {/* No? Show Categories */}
      Hi
    </div>
  )
}

export default Gameboard
