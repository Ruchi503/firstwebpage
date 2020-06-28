function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var correct = 0;

  if (question1 == "Blue Jay") {
    correct++;
  }
  if (question2 == "C.Cristata") {
    correct++;
  }
  if (question3 == "Mixed Forests") {
    correct++;
  }

  var pictures = ["1.jpeg", "2.jpeg", "3.jpeg"];
  var messages = [
    "Great job!",
    "That's just okay",
    "You really need to do better",
  ];
  var score;

  if (correct == 0) {
    score = 2;
  }

  if (correct > 0 && correct < 3) {
    score = 1;
  }

  if (correct == 3) {
    score = 0;
  }

  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[score];
  document.getElementById("number_correct").innerHTML =
    "You got " + correct + " correct.";
  document.getElementById("picture").src = pictures[score];
}
