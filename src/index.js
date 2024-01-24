import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/styles.css"
import App from "./components/App.js"
import { RecoilRoot } from "recoil"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
)
