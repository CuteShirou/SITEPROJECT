var Question = function (questionObj) {
  this.value = {
    text: "Question",
    answers: []
  };

  this.selectedAnswer = null;
  this.html = null;
  this.questionText = null;
  this.questionAnswers = null;
  this.questionFeedback = null;

  this.value = Object.assign(this.value, questionObj);

  this.onQuestionAnswered = ({ detail }) => {
    this.selectedAnswer = {
      value: detail.answer,
      html: detail.answerHtml
    };
    this.update();

    document.dispatchEvent(
      new CustomEvent("question-answered", {
        detail: {
          question: this,
          answer: detail.answer
        }
      })
    );
  };

  this.create = function () {
    this.html = document.createElement("div");
    this.html.classList.add("question");

    this.questionText = document.createElement("h2");
    this.questionText.textContent = this.value.text;

    this.questionAnswers = document.createElement("div");
    this.questionAnswers.classList.add("answers");

    for (let i = 0; i < this.value.answers.length; i++) {
      const ansObj = this.value.answers[i];
      let answer = createAnswer(ansObj);

      answer.onclick = (ev) => {
        if (this.selectedAnswer !== null) {
          this.selectedAnswer.html.classList.remove("selected");
        }

        answer.classList.add("selected");

        this.html.dispatchEvent(
          new CustomEvent("question-answered", {
            detail: {
              answer: ansObj,
              answerHtml: answer
            }
          })
        );
      };

      this.questionAnswers.appendChild(answer);
    }

    this.questionFeedback = document.createElement("div");
    this.questionFeedback.classList.add("question-feedback");

    this.html.appendChild(this.questionText);
    this.html.appendChild(this.questionAnswers);
    this.html.appendChild(this.questionFeedback);

    this.html.addEventListener("question-answered", this.onQuestionAnswered);

    return this.html;
  };

  this.disable = function () {
    this.html.classList.add("disabled");
    this.html.onclick = (ev) => {
      ev.stopPropagation();
    };

    this.html.removeEventListener("question-answered", this.onQuestionAnswered);

    let answers = this.html.querySelectorAll(".answer");
    for (let i = 0; i < answers.length; i++) {
      let answer = answers[i];
      answer.onclick = null;
    }
  };

  this.remove = function () {
    let children = this.html.querySelectorAll("*");
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      this.html.removeChild(child);
    }

    this.html.removeEventListener("question-answered", this.onQuestionAnswered);

    this.html.parentNode.removeChild(this.html);
    this.html = null;
  };

  this.update = function () {
    let correctFeedback, incorrectFeedback;
    this.html = this.html || document.createElement("div");

    correctFeedback = "Nice! You got it right.";
    incorrectFeedback = "Oh! Not the correct answer.";

    if (this.selectedAnswer !== null) {
      if (this.selectedAnswer.value.isCorrect) {
        this.html.classList.add("correct");
        this.html.classList.remove("incorrect");
        this.questionFeedback.innerHTML = correctFeedback;
      } else {
        this.html.classList.add("incorrect");
        this.html.classList.remove("correct");
        this.questionFeedback.innerHTML = incorrectFeedback;
      }
    }
  };

  function createAnswer(obj) {
    this.value = {
      text: "Answer",
      isCorrect: false
    };

    this.value = Object.assign(this.value, obj);

    this.html = document.createElement("button");
    this.html.classList.add("answer");

    this.html.textContent = this.value.text;

    return this.html;
  }
};

// main.js

let questionsData = [
  {
    text: "Quelle est la date de création de Beat Saber sur Windows ?",
    answers: [
      {
        text: "2016",
        isCorrect: false
      },
      {
        text: "2017",
        isCorrect: false
      },
      {
        text: "2018",
        isCorrect: false
      },
      {
        text: "2019",
        isCorrect: true
      }
    ]
  },
  {
    text: "Quelle est le premier groupe de musique a avoir fais un partenariat avec Beat Saber ?",
    answers: [
      {
        text: "Imagine Dragon",
        isCorrect: true
      },
      {
        text: "KDA",
        isCorrect: false
      },
      {
        text: "Linkin Park",
        isCorrect: false
      },
      {
        text: "Lady Gaga",
        isCorrect: false
      }
    ]
  },
  {
    text: "Quelle est la plus grande difficulté disponible dans le jeux ?",
    answers: [
      {
        text: "Insane",
        isCorrect: false
      },
      {
        text: "Master",
        isCorrect: false
      },
      {
        text: "Expert+",
        isCorrect: true
      }
    ]
  },
  {
    text: "Es ce que le jeu peut avoir des mods ?",
    answers: [
      {
        text: "Oui",
        isCorrect: true
      },
      {
        text: "Non",
        isCorrect: false
      },
    ]
  },
  {
    text: "Quel studio developpe Beat Saber?",
    answers: [
      {
        text: "Beat Games",
        isCorrect: true
      },
      {
        text: "7th Beat Studio",
        isCorrect: false
      },
      {
        text: "Super Spin Digital",
        isCorrect: false
      },
      {
        text: "PeroPero Inc.",
        isCorrect: false
      }
    ]
  },
  {
    text: "Quel est le moteur graphique de Unity",
    answers: [
      {
        text: "Unreal Engine 4",
        isCorrect: false
      },
      {
        text: "Unreal Engine 5",
        isCorrect: false
      },
      {
        text: "Unity",
        isCorrect: true
      },
      {
        text: "Unreal Unity Engine 6",
        isCorrect: false
      }
    ]
  },
  {
    text: "Quelle est la chanson considerer comme la plus dur de Beat Saber?",
    answers: [
      {
        text: "100$ Bill: Jaroslav Beck",
        isCorrect: false
      },
      {
        text: "Final Boss: Camellia",
        isCorrect: false
      },
      {
        text: "Overkill: Riot",
        isCorrect: false
      },
      {
        text: "Ghost: Camellia",
        isCorrect: true
      }
    ]
  },
  {
    text: "Quelle est la meilleur coupe possible pour faire un maximum de points ?",
    answers: [
      {
        text: "idéalement 100°",
        isCorrect: true
      },
      {
        text: "idéalement 60°",
        isCorrect: false
      },
    ]
  },
  {
    text: "Quelle est la plus grande note possible ?",
    answers: [
      {
        text: "Perfect",
        isCorrect: false
      },
      {
        text: "S",
        isCorrect: false
      },
      {
        text: "S+",
        isCorrect: false
      },
      {
        text: "SS",
        isCorrect: true
      },
    ]
  },
  {
    text: "Quelle est la chanson la plus longue de Beat Saber? (dans le jeu de base)",
    answers: [
      {
        text: "Seven Nation Army: The White Stripes",
        isCorrect: false
      },
      {
        text: "Smells Like Teen Spirit: Nirvana",
        isCorrect: false
      },
      {
        text: "Free Bird: Lynyrd Skynyrd",
        isCorrect: true
      },
      {
        text: "I was made for Lovin' You: KISS",
        isCorrect: false
      }
    ]
  },
];

// variables initialization
let questions = [];
let score = 0,
  answeredQuestions = 0;
let appContainer = document.getElementById("questions-container");
let scoreContainer = document.getElementById("score-container");
scoreContainer.innerHTML = `Score: ${score}/${questionsData.length}`;


// creating questions
for (var i = 0; i < questionsData.length; i++) {
  let question = new Question({
    text: questionsData[i].text,
    answers: questionsData[i].answers
  });

  appContainer.appendChild(question.create());
  questions.push(question);
}

document.addEventListener("question-answered", ({ detail }) => {
  if (detail.answer.isCorrect) {
    score++;
  }

  answeredQuestions++;
  scoreContainer.innerHTML = `Score: ${score}/${questions.length}`;
  detail.question.disable();

  if (answeredQuestions == questions.length) {
    setTimeout(function () {
      alert(`Quiz completed! \nFinal score: ${score}/${questions.length}`);
    }, 100);
  }
});

console.log(questions, questionsData);