import { useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import DesktopView from "./DesktopView.js"

function Contact() {
  const [contactFormSubmitted, setContactFormSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
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
    const formData = new FormData(event.target)

    formData.append("access_key", "ef710176-f7e9-44b5-a5f3-c39c6e38fdd9")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json())

      if (res.success) {
        console.log("Success", res)
        formRef.current.reset()
        setContactFormSubmitted(true)
      }
    } catch (error) {
      console.error("An error occurred:", error)
    }
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
                src="/Cerforce2.webp"
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
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label id="email-label">Email: </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <p className="p-question">
                    Which option best describes your reason for getting in
                    touch?
                  </p>
                  <select className="dropdown" name="interest" required>
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
