import React from "react"

function Contact() {
  return (
    <div id="container">
      <header className="header">
        <h1 id="title" className="text-center">
          Survey Form
        </h1>
        <p id="description" className="text-center">
          Thank you for taking the time to help us improve
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
          <label id="number-label">
            Age <span className="clue">(optional)</span>
          </label>
          <input
            id="number"
            type="number"
            min="10"
            max="100"
            placeholder="Age"
          />
        </div>
        <div className="form-group">
          <p>Which option best describes your current role?</p>
          <select id="dropdown" name="role" className="form-control" required>
            <option disabled selected value>
              Select current role
            </option>
            <option value="student">Student</option>
            <option value="job">Full Time Job</option>
            <option value="preferNo">Prefer not to say</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <p>Do you like to code?</p>
          <label>
            <input
              name="user-recommend"
              value="yes"
              type="radio"
              className="input-radio"
              checked
            />
            Yes!
          </label>
          <label>
            <input
              name="user-recommend"
              value="no"
              type="radio"
              className="input-radio"
            />
            no...
          </label>
        </div>
        <div className="form-group">
          <p>
            What type of programming do you prefer?
            <span className="clue">(Check all that apply)</span>
          </p>
          <label>
            <input
              type="checkbox"
              name="prefer"
              value="front-end"
              className="input-checkbox"
            />
            Front-end
          </label>
          <label>
            <input
              type="checkbox"
              name="prefer"
              value="back-end"
              className="input-checkbox"
            />
            Back-end
          </label>
          <label>
            <input
              type="checkbox"
              name="prefer"
              value="data-visualization"
              className="input-checkbox"
            />
            Data Visualization
          </label>
          <label>
            <input
              type="checkbox"
              name="prefer"
              value="api"
              className="input-checkbox"
            />
            API
          </label>
          <label>
            <input
              type="checkbox"
              name="prefer"
              value="devops"
              className="input-checkbox"
            />
            DevOps
          </label>
          <label>
            <input
              type="checkbox"
              name="prefer"
              value="sql"
              className="input-checkbox"
            />
            SQL
          </label>
        </div>
        <div className="form-group">
          <p>Any comments or suggestions?</p>
          <textarea
            id="comments"
            className="input-textarea"
            name="comment"
            placeholder="Enter your comment here..."
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
