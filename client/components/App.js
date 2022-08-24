import React, { Component } from 'react';
import { categories } from '../../testdata';
import Gameboard from './Gameboard'
import Scoreboard from './Scoreboard';
import Response from './Response'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories,
      currentQuestion: {},
      answeredQuestions: [],
      score: 0, 
    };
    this.handleResponse = this.handleResponse.bind(this)
    this.selectQuestion = this.selectQuestion.bind(this)
  }

  componentDidMount() {
    // Getting data from an external API
    //1. A query to /api/categories to get a set of categories
    //2. A set of queries afterwards to /api/category at each category id to get clues for that category
  }

  handleResponse(userResponse) {
    const correctAnswer = this.state.currentQuestion.answer;
    console.log(correctAnswer)
    if (userResponse === correctAnswer) {
      this.setState((state) => ({
        score: state.score + state.currentQuestion.value,
      }))
    } else {
      this.setState((state) => ({
        currentQuestion: {},
        score: state.score - state.currentQuestion.value,
      }))
    }
    this.setState((state) => ({
      currentQuestion: {},
      answeredQuestions: state.answeredQuestions.concat(
        state.currentQuestion)
    }))
  }

  selectQuestion(question) {
    console.log(question)
    this.setState({
      currentQuestion: question,
      // answeredQuestions: this.state.answeredQuestions.concat(question)
    })
  }

  render() {
    return (
      <div id="app">
        <Gameboard
          categories={this.state.categories}
          answeredQuestions={this.state.answeredQuestions}
          currentQuestion={this.state.currentQuestion}
          selectQuestion={this.selectQuestion}
        />
        <Scoreboard score={this.state.score}/>
        <Response submitResponse={this.handleResponse} /> 
      </div>
    );
  }
}
