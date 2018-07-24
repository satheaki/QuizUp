import React, { Component } from "react";

class AddQuestion extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const question = e.target.elements.question.value.trim();
    if (question) {
      console.log(this);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption.bind(this)}>
          <input type="text" name="question" />
          <button>Add Question</button>
        </form>
      </div>
    );
  }
}

export default AddQuestion;
