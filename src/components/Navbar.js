import React from "react"

function Navbar() {
  return (
    <div className="navbarContainer">
      <img src="/Cerforce2.webp" alt="Certforce Logo" className="logo"></img>
      <div className="tabs">
        <div className="certTab active">Administrator</div>
        <div className="certTab">Platform App Builder</div>
        <div className="certTab">Developer I</div>
      </div>
    </div>
  )
}

export default Navbar
