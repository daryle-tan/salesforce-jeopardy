import { useState } from "react"
import Categories from "./Categories.js"
import Resources from "./Resources.js"

const Gameboard = ({ setScore, score }) => {
  const [cluesAnswered, setCluesAnswered] = useState(0)
  const [category, setCategory] = useState(false)
  return (
    <div id="gameboard">
      {cluesAnswered > 34 && !category ? (
        <Resources score={score} />
      ) : (
        <Categories
          setScore={setScore}
          setCluesAnswered={setCluesAnswered}
          cluesAnswered={cluesAnswered}
          category={category}
          setCategory={setCategory}
        />
      )}
    </div>
  )
}

export default Gameboard
