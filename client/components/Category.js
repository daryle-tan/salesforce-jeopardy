import React from 'react';
import PropTypes from 'prop-types';
import Clue from "./Clue"

const Category = props => {
  return (
    <div className='category'  data-testid="category">
      <div className='categoryTitle'>{props.title}</div>
      {props.clues.map((clue) => (
        <Clue
          key={clue.id}
          clueObject={clue}
          selectQuestion={props.selectQuestion}
        />
      ))}
      
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string,
  clues: PropTypes.array
  // selectQuestion: PropTypes.func,
  // currentQuestion: PropTypes.object,

};

export default Category;
