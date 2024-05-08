import { React, useState, useEffect } from "react"
import Gameboard from "./Gameboard.js"
import Scoreboard from "./Scoreboard.js"
import Footer from "./Footer.js"
import "../styles/styles.css"
import Navbar from "./Navbar.js"
import DesktopView from "./DesktopView.js"

export default function App() {
  const [score, setScore] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const checkViewportSize = () => {
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const isBelowThreshold = viewportWidth < 907 || viewportHeight < 600
      setIsVisible(isBelowThreshold)

      console.log("viewportWidth", viewportWidth)
    }

    checkViewportSize()

    window.addEventListener("resize", checkViewportSize)

    return () => {
      window.removeEventListener("resize", checkViewportSize)
    }
  }, [isVisible])

  return (
    <>
      {isVisible ? (
        <DesktopView isVisible={isVisible} setIsVisible={setIsVisible} />
      ) : (
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
          <Footer isVisible={isVisible} />
        </>
      )}
    </>
  )
}
