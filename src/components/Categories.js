import React from "react"
import Category from "./Category.js"

const Categories = (props) => {
  return (
    <div id="categories" data-testid="categoryList">
      {props.categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          clues={category.clues}
          selectQuestion={props.selectQuestion}
        />
      ))}
    </div>
  )
}

export default Categories
