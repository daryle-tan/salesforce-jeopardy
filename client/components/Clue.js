import React from "react";
import PropTypes from "prop-types";

const Clue = ({ selectQuestion, clueObject }) => (
  <div onClick={() => selectQuestion(clueObject)} className="clueValue">
    ${clueObject.value}
  </div>
);

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object
};

export default Clue;
