import React, { Component } from "react";
import Question from "../components/Question";

class Questions extends React.Component {
  render() {
    return (
      <div>
        {this.props.questions.map(question => (
          <Question key={question} questionText={question} />
        ))}
      </div>
    );
  }
}

export default Questions;
