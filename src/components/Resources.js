import React from "react"

const Resources = ({ score }) => {
  const handleRefresh = () => {
    window.location.reload()
  }

  return (
    <>
      {score < 15750 ? (
        <div>
          <p>Your Score: {((score / 21000) * 100).toFixed(0)}%</p>
          <p>
            Nice try but you'll need to keep working. Repetition is mother of
            all learning. Here are more resources to help you successful pass
            your certification:{" "}
          </p>
          <button onClick={handleRefresh}>Restart Game</button>
        </div>
      ) : score < 17850 ? (
        <div>
          <p>Your Score: {((score / 21000) * 100).toFixed(0)}%</p>
          <p>
            Good Job! You're on track to successfully pass the exam! Here are
            some resources to help you continue to grow your knowledge and
            skills:{" "}
          </p>
          <button onClick={handleRefresh}>Restart Game</button>
        </div>
      ) : (
        <div>
          <p>Your Score: {((score / 21000) * 100).toFixed(0)}%</p>
          <p>
            Great Job! Let's increase your probability of passing that exam.
            Here are some resources to help you continue to grow your knowledge
            and skills:{" "}
          </p>
          <button onClick={handleRefresh}>Restart Game</button>
        </div>
      )}
    </>
  )
}

export default Resources
