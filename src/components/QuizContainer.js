import React, { Component } from "react";
import Header from "../components/Header";
import Action from "../components/Action";
import Questions from "../components/Questions";
import Question from "../components/Questions";
import AddQuestion from "../components/AddQuestion";

class QuizContainer extends React.Component {
  render() {
    const title = "Trivia";
    const subtitle = "Get ready to QuizUp!";
    const questions = [
      "Which is the worlds Talest Building?",
      "Who is the current richest person in the world?",
      "How many continents are there in total?"
    ];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Questions questions={questions} />
        <AddQuestion />
      </div>
    );
  }
}

export default QuizContainer;
