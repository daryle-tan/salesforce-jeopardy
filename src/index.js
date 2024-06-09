import React from "react"
import ReactDOM from "react-dom"
import "./styles/styles.css"
import App from "./components/App.js"
import Contact from "./components/Contact.js"
import { RecoilRoot } from "recoil"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { createRoot } from "react-dom/client"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </RecoilRoot>
    </Router>
  </React.StrictMode>,
)
