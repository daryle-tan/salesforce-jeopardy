import React from "react"

function Navbar() {
  return (
    <div className="navbarContainer">
      <img src="/Certforce2.png" alt="Certforce Logo" className="logo"></img>
      <div className="tabs">
        <div className="certTab active">Administrator Cert</div>
        <div className="certTab">App Builder Cert</div>
        <div className="certTab">Developer I Cert</div>
      </div>
    </div>
  )
}

export default Navbar
