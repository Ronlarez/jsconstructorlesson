// coding challange 2

(function() {



function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

Question.prototype.displayQuestion = function() {
  console.log(this.question);

  for (var i = 0; i < this.answers.length; i++) {
    console.log(i + ":" + this.answers[i]);
  }
}

Question.prototype.checkAnswer = function(ans) {
  if (ans === this.correct) {
    console.log("Correct answer!");
  }else {
    console.log("wrong answer. try again :)")
  }
}

var q1 = new Question("is javaScript the coolest programming language in the world?",
  ["yes" , "no"],
  0);

  var q2 = new Question("what is the name of this course\'s teacher?",
  ["john","micheal","jonas"],
  2);

  var q3 = new Question("what does best discribe coding?",
  ["boring","fun", "hard","tedious"],
  1);

  var q4 = new Question("this is just a random question it has no right or wrong answer",
  ["true" , "false"],
  0);

  var questions =[q1, q2, q3, q4];

  var n = Math.floor(Math.random() *
  questions.length);

questions[n].displayQuestion();

var answer = parseInt(prompt("please select the correct answer."));

questions[n].checkAnswer(answer);
})();
