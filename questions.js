const quizData = [
  {
    id: "q1",
    question: "Which of the following data structures operates on a Last-In, First-Out (LIFO) principle?",
    answers: ["Queue", "Array", "Stack", "Linked List"],
    correctAnswer: "Stack"
  },
  {
    id: "q2",
    question: "What is the primary function of a CPU?",
    answers: ["Storing data for long-term use", "Executing instructions from a computer program", "Connecting the computer to the internet", "Displaying images on a monitor"],
    correctAnswer: "Executing instructions from a computer program"
  },
  {
    id: "q3",
    question: "What is the hexadecimal representation of the decimal number 255?",
    answers: ["FF", "100", "A5", "FE"],
    correctAnswer: "FF"
  },
  {
    id: "q4",
    question: "In networking, what does the acronym TCP stand for?",
    answers: ["Transmission Control Protocol", "Transfer Communication Process", "Terminal Command Program", "Technical Computer Protocol"],
    correctAnswer: "Transmission Control Protocol"
  },
  {
    id: "q5",
    question: "Which of the following is a non-volatile type of computer memory?",
    answers: ["RAM (Random Access Memory)", "Cache Memory", "ROM (Read-Only Memory)", "Virtual Memory"],
    correctAnswer: "ROM (Read-Only Memory)"
  },
  {
    id: "q6",
    question: "What is the purpose of a compiler?",
    answers: ["To interpret and execute code line-by-line", "To convert source code into machine code", "To manage the computer's hardware resources", "To create a user interface for a program"],
    correctAnswer: "To convert source code into machine code"
  },
  {
    id: "q7",
    question: "What is the most common use of the `ping` command in a computer network?",
    answers: ["To check for network connectivity to a host", "To transfer files between two computers", "To find the physical location of a server", "To scan for open ports on a server"],
    correctAnswer: "To check for network connectivity to a host"
  },
  {
    id: "q8",
    question: "In object-oriented programming, what is the concept of a class?",
    answers: ["A set of instructions to be executed in sequence", "A type of variable that can store multiple values", "A blueprint for creating objects", "A way to hide implementation details from the user"],
    correctAnswer: "A blueprint for creating objects"
  },
  {
    id: "q9",
    question: "What is the purpose of an operating system (OS)?",
    answers: ["To run a single program at a time", "To translate code from a high-level language to machine language", "To manage computer hardware and software resources", "To physically connect a computer to the internet"],
    correctAnswer: "To manage computer hardware and software resources"
  },
  {
    id: "q10",
    question: "Which of the following is the smallest unit of data in a computer?",
    answers: ["Byte", "Kilobyte", "Bit", "Nibble"],
    correctAnswer: "Bit"
  },
  {
    id: "q11",
    question: "What is the process of finding and fixing errors in a program?",
    answers: ["Compiling", "Debugging", "Executing", "Testing"],
    correctAnswer: "Debugging"
  },
  {
    id: "q12",
    question: "What is the main role of SQL in computer science?",
    answers: ["To design and style websites", "To manage and manipulate relational databases", "To create video games and simulations", "To write operating systems"],
    correctAnswer: "To manage and manipulate relational databases"
  },
  {
    id: "q13",
    question: "What does a Boolean data type represent?",
    answers: ["A number with a decimal point", "A sequence of characters", "A logical value of true or false", "An integer without a decimal point"],
    correctAnswer: "A logical value of true or false"
  },
  {
    id: "q14",
    question: "In the context of computer architecture, what is a bus?",
    answers: ["A program that translates code", "A communication system that transfers data between components inside a computer", "A software component that manages files", "A type of database"],
    correctAnswer: "A communication system that transfers data between components inside a computer"
  },
  {
    id: "q15",
    question: "What does HTTP stand for?",
    answers: ["HyperText Transfer Protocol", "High-level Text Protocol", "Hyper Transfer and Text Protocol", "Host to Text Protocol"],
    correctAnswer: "HyperText Transfer Protocol"
  },
  {
    id: "q16",
    question: "What is the function of an algorithm?",
    answers: ["To display a user interface", "To provide a user with a way to input data", "To solve a problem by following a set of rules", "To store and organize large amounts of data"],
    correctAnswer: "To solve a problem by following a set of rules"
  },
  {
    id: "q17",
    question: "What is the main difference between a variable declared with `let` and one declared with `const` in JavaScript?",
    answers: ["`let` is block-scoped, while `const` is globally scoped.", "`const` variables can be reassigned, while `let` variables cannot.", "`let` variables can be reassigned, while `const` variables cannot.", "`let` is used for numbers, and `const` is used for strings."],
    correctAnswer: "`let` variables can be reassigned, while `const` variables cannot."
  },
  {
    id: "q18",
    question: "What is the process of converting a high-level programming language into a low-level language that a computer can understand?",
    answers: ["Interpretation", "Debugging", "Compilation", "Execution"],
    correctAnswer: "Compilation"
  },
  {
    id: "q19",
    question: "What is the purpose of a firewall?",
    answers: ["To speed up internet connection", "To translate a website's domain name into an IP address", "To filter network traffic and protect a network from unauthorized access", "To manage the storage of data on a hard drive"],
    correctAnswer: "To filter network traffic and protect a network from unauthorized access"
  },
  {
    id: "q20",
    question: "Which of the following describes a 'binary search' algorithm?",
    answers: ["It checks each element of a list one by one until the target is found.", "It works only on unsorted lists.", "It finds the maximum value in a list of numbers.", "It repeatedly divides the search interval in half to find a target value."],
    correctAnswer: "It repeatedly divides the search interval in half to find a target value."
  }
];

function renderQuestions() {
  let quizHTML = '';

  quizData.forEach((questionData, index) => {
    quizHTML += `
      <div class="quiz-container">
        <p class="question js-question">${index + 1}. ${questionData.question}</p>
      
        <div class="options-container">
          <input type="radio" name="option${index}" class="option js-option" 
            id="option1-${index}" value="${questionData.answers[0].trim()}">
          <label for="option1-${index}" class="js-option-text">
            A. ${questionData.answers[0]}</label><br>
          <input type="radio" name="option${index}" class="option js-option"
            id="option2-${index}" value="${questionData.answers[1].trim()}">
          <label for="option2-${index}" class="js-option-text">
            B. ${questionData.answers[1]}</label><br>
          <input type="radio" name="option${index}" class="option js-option"
            id="option3-${index}" value="${questionData.answers[2].trim()}">
          <label for="option3-${index}" class="js-option-text">
            C. ${questionData.answers[2]}</label><br>
          <input type="radio" name="option${index}" class="option js-option"
            id="option4-${index}" value="${questionData.answers[3].trim()}">
          <label for="option4-${index}" class="js-option-text">
            D. ${questionData.answers[3]}</label>
        </div>
      </div>
    `;
  });

  quizHTML += `
    <button class="submit-btn">Submit</button>
    <button class="restart-btn">Restart</button>
    <div class="score-space"></div>
  `;

  const container = document.querySelector('.main-container');

  if(container) {
    container.innerHTML = quizHTML;

    const submitBtn = document.querySelector('.submit-btn');
    const restartBtn = document.querySelector('.restart-btn');
    const scoreSpace = document.querySelector('.score-space');

    submitBtn.addEventListener('click', () => {
      let score = 0;
      quizData.forEach((question, index) => {
        const selected = document.querySelector(`input[name="option${index}"]:checked`);
        
        if (selected && selected.value.trim() === question.correctAnswer.trim()) {
          score++;
        }
      });
      scoreSpace.textContent = `Your score: ${score} / ${quizData.length}`;
    });

    restartBtn.addEventListener('click', () => {
        location.reload();
    });
  }
}

document.addEventListener('DOMContentLoaded', renderQuestions);