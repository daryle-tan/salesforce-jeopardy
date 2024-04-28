import { useRef } from "react"

function Contact() {
  const formRef = useRef(null)

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
      }
    } catch (error) {
      console.error("An error occurred:", error)
    }
  }

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
            Which option best describes your reason for getting in touch?
          </p>
          <select className="dropdown" name="interest" required>
            <option value="" disabled selected hidden>
              Select your interest
            </option>
            <option value="Constructive Feedback">Constructive Feedback</option>
            <option value="Advertise Here">Advertise Here</option>
            <option value="Ridiculous Comment">Ridiculous Comment</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <p className="p-comment">Please Add Your Message</p>
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
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
export default Contact
