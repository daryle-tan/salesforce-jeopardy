import React from "react"

function Navbar() {
  return (
    <div className="navbarContainer">
      <h1>Certforce</h1>
      <div className="tabs">
        <div className="certTab active">Administrator Cert</div>
        <div className="certTab">App Builder Cert</div>
        <div className="certTab">Developer I Cert</div>
      </div>
    </div>
  )
}

export default Navbar
