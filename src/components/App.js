import { React, useState } from "react"
import { categories } from "../testdata.js"
import Gameboard from "./Gameboard.js"
import Scoreboard from "./Scoreboard.js"
import Response from "./Response.js"
import "../styles/styles.css"
import Navbar from "./Navbar.js"

export default function App() {
  const [gameState, setGameState] = useState({
    categories,
    currentQuestion: {},
    answeredQuestions: [],
    score: 0,
  })
  const [score, setScore] = useState(0)

  return (
    <>
      <div id="navContainer">
        <Navbar />
      </div>
      <div id="app">
        <Gameboard
        // categories={categories}
        // answeredQuestions={answeredQuestions}
        // currentQuestion={currentQuestion}
        // selectQuestion={selectQuestion}
        />
        <Scoreboard score={score} />
      </div>
      <div id="responseContainer">
        <Response />
      </div>
    </>
  )
}
