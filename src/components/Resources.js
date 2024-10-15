import React from "react"

const Resources = ({ score }) => {
  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <>
      {score < 15750 ? (
        <div className="resourceContainer">
          <p className="resourceScore">
            Your Score: {((score / 21000) * 100).toFixed(0)}%
          </p>
          <p className="resourceBody">
            Nice try but you'll need to keep working. Repetition is a key to
            learning. Let's run it back! If you're looking for more resources to
            help you successfully pass your certification, take a look at this:{" "}
          </p>
          <a
            href="https://focusonforce.com?ref=277520"
            rel="noopener noreferrer"
            target="_blank"
            title="Focus on Force Page"
          >
            <img
              src="/focusonforce.webp"
              alt="Focus on Force Logo"
              className="resourceLogo"
            ></img>
          </a>
          <button onClick={handleRefresh} className="submit-button">
            Restart Game
          </button>
        </div>
      ) : score < 18900 ? (
        <div className="resourceContainer">
          <p className="resourceScore">
            Your Score: {((score / 21000) * 100).toFixed(0)}%
          </p>
          <p className="resourceBody">
            Good Job! You're on track to successfully pass the exam! Here are
            more resources to help you grow your knowledge and skills:{" "}
          </p>
          <a
            href="https://focusonforce.com?ref=277520"
            rel="noopener noreferrer"
            target="_blank"
            title="Focus on Force Page"
          >
            <img
              src="/focusonforce.webp"
              alt="Focus on Force Logo"
              className="resourceLogo"
            ></img>
          </a>
          <button onClick={handleRefresh} className="submit-button">
            Restart Game
          </button>
        </div>
      ) : (
        <div className="resourceContainer">
          <p className="resourceScore">
            Your Score: {((score / 21000) * 100).toFixed(0)}%
          </p>
          <p className="resourceBody">
            Great Job! Let's increase your probability of passing that exam.
            Here are more resources to help you grow your knowledge and skills:{" "}
          </p>
          <a
            href="https://focusonforce.com?ref=277520"
            rel="noopener noreferrer"
            target="_blank"
            title="Focus on Force Page"
          >
            <img
              src="/focusonforce.webp"
              alt="Focus on Force Logo"
              className="resourceLogo"
            ></img>
          </a>

          <button onClick={handleRefresh} className="submit-button">
            Restart Game
          </button>
        </div>
      )}
    </>
  )
}

export default Resources
