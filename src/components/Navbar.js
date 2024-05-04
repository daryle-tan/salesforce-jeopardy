import React from "react"
import { Link } from "react-router-dom"
import { MdOutlineConnectWithoutContact } from "react-icons/md"

function Navbar() {
  return (
    <div className="navbarContainer">
      <img src="/Cerforce2.webp" alt="Certforce Logo" className="logo"></img>

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
