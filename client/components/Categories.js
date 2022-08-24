import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category'

const Categories = props => {
  return (
    <div id='categories'  data-testid="categoryList" >
      {props.categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          clues={category.clues}
          selectQuestion={props.selectQuestion}
        />
  ))}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Categories;
