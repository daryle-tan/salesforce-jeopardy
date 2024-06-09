import React from "react"
import "./styles/styles.css"
import App from "./components/App.js"
import Contact from "./components/Contact.js"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom"
import { createRoot } from "react-dom/client"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/*" element={<App />}>
      <Route path="/contact" element={<Contact />} />
    </Route>,
  ),
)

const root = document.getElementById("root")
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router> */}
  </React.StrictMode>,
)
