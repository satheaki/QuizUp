import React, { Component } from "react";

class Question extends React.Component {
  render() {
    return <div>Q:{this.props.questionText}</div>;
  }
}

export default Question;
