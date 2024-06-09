import React from "react"
import "./styles/styles.css"
import App from "./components/App.js"
import Contact from "./components/Contact.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { createRoot } from "react-dom/client"
import Gameboard from "./components/Gameboard.js"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Gameboard />} />
        {/* <Route path="/home" element={<App />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
