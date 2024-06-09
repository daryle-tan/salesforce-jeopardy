import React from "react"
import "./styles/styles.css"
import App from "./components/App.js"
import Contact from "./components/Contact.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { createRoot } from "react-dom/client"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
