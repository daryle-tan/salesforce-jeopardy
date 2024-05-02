import { React, useState } from "react"
import Gameboard from "./Gameboard.js"
import Scoreboard from "./Scoreboard.js"
import Footer from "./Footer.js"
import "../styles/styles.css"
import Navbar from "./Navbar.js"

export default function App() {
  const [score, setScore] = useState(0)

  return (
    <>
      <div id="navContainer">
        <Navbar />
      </div>

      <div id="app">
        <Gameboard score={score} setScore={setScore} />
      </div>

      <div id="scoreboardContainer">
        <Scoreboard score={score} />
      </div>
      <Footer />
    </>
  )
}
