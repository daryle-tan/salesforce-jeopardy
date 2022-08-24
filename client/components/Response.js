import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Response extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userResponse: ''
    }
    this.recordResponse = this.recordResponse.bind(this);
    this.submitResponse = this.submitResponse.bind(this)
  }
  recordResponse(event) {
    this.setState({ userResponse: event.target.value });

  }
  submitResponse(event) {
    // this function should fire when the user fills the response and hits 'enter'
    // Is the user response correct? 
    // yes/no? What should happen?
    if (event.key === "Enter") {
      this.props.submitResponse(this.state.userResponse)
    }
   
  }
  render(){
    return (
      <div id='response' data-testid="response">
        <input
          type='text'
          placeholder='Answers go here!'
          value={this.state.userResponse}
          onChange={this.recordResponse}     
          onKeyDown={this.submitResponse}
          // onSubmit={this.recordResponse}
        />
      </div>
    )
  }
}

Response.propTypes = {
  recordResponse: PropTypes.func,
  submitResponse: PropTypes.func,
}