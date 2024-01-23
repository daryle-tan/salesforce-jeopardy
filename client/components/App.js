import useState from "react"
import { categories } from "../../testdata"
import Gameboard from "./Gameboard"
import Scoreboard from "./Scoreboard"
import Response from "./Response"

export default function App() {
  const [gameState, setGameState] = useState({
    categories,
    currentQuestion: {},
    answeredQuestions: [],
    score: 0,
  })

  return (
    <div id="app">
      <Gameboard
        categories={categories}
        answeredQuestions={answeredQuestions}
        currentQuestion={currentQuestion}
        selectQuestion={selectQuestion}
      />
      <Scoreboard score={score} />
      <Response submitResponse={handleResponse} />
    </div>
  )
}
