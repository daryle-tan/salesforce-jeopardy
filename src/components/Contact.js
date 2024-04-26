import React from "react"

function Contact() {
  return (
    <div id="contactContainer">
      <header className="header">
        <h1 id="title" className="text-center">
          Get In Touch
        </h1>
        <p id="description" className="text-center">
          Thank you for taking the time to reach out!
        </p>
      </header>
      <form id="survey-form">
        <div className="form-group">
          <label id="name-label">Name</label>
          <input id="name" type="text" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label id="email-label">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <p>Which option best describes your reason for getting in touch?</p>
          <select id="dropdown" name="role" className="form-control" required>
            <option disabled selected value>
              Select your interest
            </option>
            <option value="Constructive Feedback">Constructive Feedback</option>
            <option value="Advertise Here">Advertise Here</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <p>Please Add Your Message</p>
          <textarea
            id="comments"
            className="input-textarea"
            name="comment"
            placeholder="Enter your message here..."
          ></textarea>
        </div>
        <div className="form-group">
          <button id="submit" type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
export default Contact
