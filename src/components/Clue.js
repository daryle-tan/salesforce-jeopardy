import React from "react"

const Clue = ({ selectQuestion, clueObject }) => (
  <div onClick={() => selectQuestion(clueObject)} className="clueValue">
    ${clueObject.value}
  </div>
)

export default Clue
