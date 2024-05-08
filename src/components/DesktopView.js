import React from "react"

const DesktopView = ({ isVisible }) => {
  return (
    <div className={`error-message ${isVisible ? "" : "hidden"}`}>
      <h1 className="h1-error-message">
        Sorry, this application is currently only available for desktop view.
      </h1>
    </div>
  )
}

export default DesktopView
