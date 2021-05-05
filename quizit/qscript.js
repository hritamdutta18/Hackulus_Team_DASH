function buildQuiz(){
    const output = [];
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
              &nbsp;&nbsp;
            </label>`
          );
        }
        output.push(
          `<div class="question" style= "font-weight: 700;"> ${currentQuestion.question}</div>
          <div class="answers"> ${answers.join('')} </div><br> `
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  }
  
  function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'green';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });
    resultsContainer.innerHTML = `<br>&nbsp;&nbsp;Score: ${numCorrect} / ${myQuestions.length}`;
    resultsContainer.style.fontWeight= "700";
    resultsContainer.style.fontSize= "1.2em";
  }
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const n= 3;
  const myQuestions = [
    {
      question: "Question 1: " + n +" x 19 =",
      answers: {
        a: n*19 - 3,
        b: n*19 + 4,
        c: n*19,
        d: n*18
      },
      correctAnswer: "c"
    },
    {
      question: "Question 2: " + n +" x 16 =",
      answers: {
        a: n*16 - 3,
        b: n*16,
        c: n*16 + 4,
        d: n*17
      },
      correctAnswer: "b"
    },
    {
      question: "Question 3: " + n +" x 8 =",
      answers: {
        a: n*8 - 1,
        b: n*8 + 2,
        c: n*13,
        d: n*8
      },
      correctAnswer: "d"
    },
    {
      question: "Question 4: Tom wants " + n +" pencil(s). Each pencil costs Rs. 5, what is the total cost?",
      answers: {
        a: n*5 - 1,
        b: n*6,
        c: n*5 + 2,
        d: n*5
      },
      correctAnswer: "d"
    },
    {
      question: "Question 5: All " + n +" students have 13 apples each. How many apples are there in total?",
      answers: {
        a: n*13,
        b: n*12 + 12,
        c: n*13 + 1,
        d: n*12 + 3
      },
      correctAnswer: "a"
    }
  ];

  buildQuiz();
  submitButton.addEventListener('click', showResults);
  