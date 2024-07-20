var getQuiz = function () {
    var score = 0,
        qIndex = 0,
        inPlay = true,
        questions,
        next,
        getQuestion,
        checkAnswer,
        submit,
        getHint;
      
    questions = [
      {
        question: "What is the highest mountain in the world?",
        answer: "Everest",
        hint: "It's located in the Himalayas."
      },
      {
        question: "What is the highest mountain in Scotland?",
        answer: "Ben Nevis",
        hint: "It's located near Fort William."
      }
      // Add more questions here
    ];
    
    next = function () {
      qIndex = qIndex + 1;
      
      if (qIndex >= questions.length) {
        inPlay = false;
        console.log("You have finished the quiz.");
      }
    };
    
    getQuestion = function () {
      if (inPlay) {
        return questions[qIndex].question;
      } else {
        return "You have finished the quiz.";
      }
    };
    
    checkAnswer = function (userAnswer) {
      if (userAnswer === questions[qIndex].answer) {
        console.log("Correct!");
        score = score + 1;
      } else {
        console.log("No, the answer is " + questions[qIndex].answer);
      }
    };
    
    getHint = function () {
      if (inPlay) {
        return questions[qIndex].hint;
      } else {
        return "No hints available. Quiz is finished.";
      }
    };
    
    submit = function (userAnswer) {
      var message = "You have finished the quiz.";
      
      if (inPlay) {
        checkAnswer(userAnswer);
        next();
        message = "Your score is " + score + " out of " + qIndex;
      }
        
      return message;
    };
    
    return {
      quizMe: getQuestion,
      submit: submit,
      helpMe: getHint
    };
  };
  
  var quiz = getQuiz();
  
  
  /* Further Adventures
   *
   * 1) Run the program.
   *
   * 2) Take the quiz using the quiz.quizMe and
   *    quiz.submit methods.
   *    
   *    > quiz.quizMe()
   *      What is the highest mountain in the world?
   *    > quiz.submit("K2")
   *
   * 3) Add more questions and answers to the 'questions' array.
   *
   * 4) Implement the hint functionality by adding a 'hint' property
   *    to each question object and defining a 'getHint' function.
   *
   * 5) Add a helpMe property to the returned object that calls the
   *    getHint function.
   *
   *    return {
   *      quizMe: getQuestion,
   *      submit: submit,
   *      helpMe: getHint
   *    };
   *
   * 6) Test the quiz again and use the helpMe function to get hints.
   *
   */
