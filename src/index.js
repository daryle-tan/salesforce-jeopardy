import React from "react"
import ReactDOM from "react-dom"
import "./styles/styles.css"
import App from "./components/App.js"
import Contact from "./components/Contact.js"
import { RecoilRoot } from "recoil"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="https://salesforce-jeopardy-1.onrender.com/contact"
            element={<Contact />}
          />
        </Routes>
      </RecoilRoot>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
)
