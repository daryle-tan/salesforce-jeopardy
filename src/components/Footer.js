import React from "react"
import { Link } from "react-router-dom"
import { MdOutlineConnectWithoutContact } from "react-icons/md"

function Footer({ isVisible }) {
  return (
    <div id="footer" data-testid="response">
      <Link
        className="contactLink"
        to="/contact"
        target="_blank"
        title="Get In Touch"
        isVisible={isVisible}
      >
        <MdOutlineConnectWithoutContact size={30} />
        Get In Touch{" "}
      </Link>
    </div>
  )
}

export default Footer
