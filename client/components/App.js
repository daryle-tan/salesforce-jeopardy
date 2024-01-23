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
        categories={this.state.categories}
        answeredQuestions={this.state.answeredQuestions}
        currentQuestion={this.state.currentQuestion}
        selectQuestion={this.selectQuestion}
      />
      <Scoreboard score={this.state.score} />
      <Response submitResponse={this.handleResponse} />
    </div>
  )
}
