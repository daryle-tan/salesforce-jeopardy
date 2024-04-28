import React from "react"
import { Link } from "react-router-dom"
import { MdOutlineConnectWithoutContact } from "react-icons/md"

function Footer() {
  return (
    <div id="footer" data-testid="response">
      <Link
        className="linkFooter"
        to="/contact"
        target="_blank"
        title="Get In Touch"
      >
        <MdOutlineConnectWithoutContact size={30} />
        Go In Touch{" "}
      </Link>
    </div>
  )
}

export default Footer
