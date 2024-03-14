import { useState } from "react"
import Categories from "./Categories.js"
import Resources from "./Resources.js"

const Gameboard = ({ setScore, score }) => {
  const [cluesAnswered, setCluesAnswered] = useState(0)

  return (
    <div id="gameboard">
      {cluesAnswered < 35 ? (
        <Categories
          setScore={setScore}
          setCluesAnswered={setCluesAnswered}
          cluesAnswered={cluesAnswered}
        />
      ) : (
        <Resources score={score} />
      )}
    </div>
  )
}

export default Gameboard
