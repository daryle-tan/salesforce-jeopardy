import { useState } from "react"
import Categories from "./Categories.js"
import Resources from "./Resources.js"

const Gameboard = ({ setScore, score }) => {
  const [cluesAnswered, setCluesAnswered] = useState(0)
  const [category, setCategory] = useState(false)
  return (
    <>
      {cluesAnswered > 34 && !category ? (
        <div className="centered-resources">
          <Resources score={score} />
        </div>
      ) : (
        <div id="gameboard">
          <Categories
            setScore={setScore}
            setCluesAnswered={setCluesAnswered}
            cluesAnswered={cluesAnswered}
            category={category}
            setCategory={setCategory}
          />
        </div>
      )}
    </>
  )
}

export default Gameboard
