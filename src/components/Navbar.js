import React from "react"

function Navbar() {
  return (
    <div className="navbarContainer">
      <img src="/certforcep.webp" alt="Certforce Logo" className="logo"></img>

      <div className="tabs">
        <div className="certTab active">
          <div>Administrator</div>
        </div>

        <div className="certTab">
          <div className="coming-soon1">Coming Soon</div>
          <div>Platform App Builder</div>
        </div>

        <div className="certTab">
          <div>Developer I</div>
          <span className="coming-soon2">Coming Soon</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
