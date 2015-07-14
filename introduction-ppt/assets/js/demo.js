/*
  demo.js
  A Javascript file that powers the Demo features of Slidex
  Feel free to edit this file as you wish!  You can even delete this file if you do not find it useful.
  (c) Donald Leung.  All rights reserved.
  MIT Licensed
*/

var demo = {
  quiz: {
    question1answer: "shallots",
    question2answer: "osmosis",
    question3answer: "1",
    totalCorrect: 0,
    submit: function() {
      if (document.getElementById("question1").value.toLowerCase() === demo.quiz.question1answer) {
        demo.quiz.totalCorrect++;
      }
      if (document.getElementById("question2").value.toLowerCase() === demo.quiz.question2answer) {
        demo.quiz.totalCorrect++;
      }
      if (document.getElementById("question3").value.toLowerCase() === demo.quiz.question3answer) {
        demo.quiz.totalCorrect++;
      }
      if (demo.quiz.totalCorrect >= 3) {
        alert("Hooray!  All of your answers were correct!  You are a superstar!");
      } else {
        alert("You got " + demo.quiz.totalCorrect + " out of 3 correct.  Below are the correct answers:\n\nQuestion 1: shallots\n\nQuestion 2: osmosis\n\nQuestion 3: 1 (not 16 - think carefully! :D)");
      }
      demo.quiz.totalCorrect = 0;
    }
  }
};
