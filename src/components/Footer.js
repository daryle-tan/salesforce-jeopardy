import React from "react"
import Contact from "./Contact.js"

function Footer() {
  const openContactModal = () => {
    return <Contact onClick={openContactModal} />
  }

  return (
    <div id="footer" data-testid="response">
      {/* <a href="mailto:daryle.tan@gmail.com">Contact Us</a> */}
      <Contact onClick={openContactModal} />
      <button onClick={openContactModal}>Get In Contact</button>
    </div>
  )
}

export default Footer
