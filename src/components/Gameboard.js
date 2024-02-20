import React from "react"
import Categories from "./Categories.js"

const Gameboard = ({ setScore }) => {
  return (
    <div id="gameboard">
      <Categories setScore={setScore} />
    </div>
  )
}

export default Gameboard
