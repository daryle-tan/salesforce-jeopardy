import React from "react"

const Resources = ({ score }) => {
  return (
    <>
      {score < 15750 ? (
        <div>
          Nice try but you'll need to keep working. Repetition is mother of all
          learning. Here are more resources to help you successful pass your
          certification:{" "}
        </div>
      ) : score < 17850 ? (
        <div>
          Good Job! You're on track to successfully pass the exam! Here are some
          resources to help you continue to grow your knowledge and skills:{" "}
        </div>
      ) : (
        <div>
          Great Job! Let's increase your probability of passing that exam. Here
          are some resources to help you continue to grow your knowledge and
          skills:{" "}
        </div>
      )}
    </>
  )
}

export default Resources
