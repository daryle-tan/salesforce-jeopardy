import React from "react"
import Contact from "./Contact.js"
import { Link } from "react-router-dom"

function Footer() {
  const openContactModal = () => {
    return <Contact onClick={openContactModal} />
  }

  return (
    <div id="footer" data-testid="response">
      <Link to="/contact" target="_blank">
        Go In Touch
      </Link>
    </div>
  )
}

export default Footer
