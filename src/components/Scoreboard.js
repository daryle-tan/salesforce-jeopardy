import React from "react"

const Scoreboard = ({ score }) => {
  return (
    <div id="scoreboard" data-testid="scoreboard">
      ${score}
    </div>
  )
}

export default Scoreboard
