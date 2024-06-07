import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import DesktopView from "./DesktopView.js"
import axios from "axios"

function Contact() {
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const formRef = useRef(null)

  useEffect(() => {
    const checkViewportSize = () => {
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const isBelowThreshold = viewportWidth < 735 || viewportHeight < 775
      setIsVisible(isBelowThreshold)

      console.log("viewportWidth", viewportWidth)
    }

    checkViewportSize()

    window.addEventListener("resize", checkViewportSize)

    return () => {
      window.removeEventListener("resize", checkViewportSize)
    }
  }, [isVisible])

  const onSubmitContact = async (event) => {
    event.preventDefault()

    axios
      // .get("http://localhost:3001/", {
      .get("https://salesforce-jeopardy.onrender.com/sendEmail", {
        params: {
          name: name,
          email: email,
          subject: subject,
          message: message,
        },
      })
      .then(() => {
        console.log("success")
        setContactFormSubmitted(true)
      })
      .catch(() => {
        console.log("failure")
      })
  }

  const closeConfirmationModal = () => {
    setContactFormSubmitted(false)
  }

  return (
    <>
      {isVisible ? (
        <DesktopView isVisible={isVisible} />
      ) : (
        <div id="contactBackground">
          <Link className="homeLink" to="/" title="Home Page" target="_blank">
            <div id="contactNavBar">
              <img
                src="/certforcep.webp"
                alt="Certforce Logo"
                className="logo"
              ></img>
            </div>
          </Link>
          {contactFormSubmitted ? (
            <div id="confirmationContainer">
              <div className="closeButtonContainer">
                <button
                  className="modalButton"
                  onClick={closeConfirmationModal}
                >
                  X
                </button>
              </div>
              <p className="confirmationP">
                Thank you for reaching out!
                <br />
                <br />
                We'll get back to you as soon as possible.
                <br />
                <br />
                Please allow between 48 - 72 hours for a response.
              </p>
            </div>
          ) : (
            <div id="contactContainer">
              <header className="header">
                <h1 id="title" className="text-center">
                  Get In Touch
                </h1>
                <p id="description" className="text-center">
                  Thank you for taking the time to reach out!
                </p>
              </header>
              <form id="survey-form" onSubmit={onSubmitContact} ref={formRef}>
                <div className="form-group">
                  <label id="name-label">Name: </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Wing Bo"
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label id="email-label">Email: </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <p className="p-question">
                    Which option best describes your reason for getting in
                    touch?
                  </p>
                  <select
                    className="dropdown"
                    name="subject"
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  >
                    <option value="" disabled selected hidden>
                      Select your interest
                    </option>
                    <option value="Constructive Feedback">
                      Constructive Feedback
                    </option>
                    <option value="Advertise Here">Advertise Here</option>
                    <option value="Ridiculous Comment">
                      Ridiculous Comment
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <p className="p-comment">Please add your message:</p>
                  <textarea
                    id="comments"
                    className="input-textarea"
                    name="message"
                    placeholder="Enter your message here..."
                    onChange={(event) => setMessage(event.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="form-button-container">
                  <button id="submit" type="submit" className="submit-button">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  )
}
export default Contact
