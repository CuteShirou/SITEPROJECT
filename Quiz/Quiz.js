// Questions will be asked
window.onload = function(){ 
  let score = 0;
  let EvalRerun = 0;
  var Feedback = document.getElementById("Feedback")
  document.getElementById("SquareHide").style.visibility = "hidden";
  const scoreElement = document.getElementById("score");
  
  const Questions = [{
    id: 0,
    f: "Beat Saber est sortie en mai 2019.",
    q: "Quelle est la date de sortie de Beat Saber sur Windows ?",
    a: [{ text: "2016", isCorrect: false },
        { text: "2017", isCorrect: false },
        { text: "2018", isCorrect: false },
        { text: "2019", isCorrect: true }
    ]
  },
  {
    id: 1,
    f: "Leur premiere collaboration etat en juin 2019 avec la bande pop punk Imagine Dragons.",
    q: "Quelle est le premier groupe de musique a avoir fais un partenariat avec Beat Saber ?",
    a: [{ text: "Imagine Dragons", isCorrect: true, isSelected: false },
        { text: "K/DA", isCorrect: false },
        { text: "Linkin Park", isCorrect: false },
        { text: "Lady Gaga", isCorrect: false }
    ]
  },
  {
    id: 2,
    f: "il y a 5 difficultes differentes, dont Facile, Normal, Dur, Expert et Expert+.",
    q: "Quelle est la plus grande difficulté disponible dans le jeux ?",
    a: [{ text: "Insane", isCorrect: false },
        { text: "Master", isCorrect: false },
        { text: "Expert+", isCorrect: true },
        { text: "Pro", isCorrect: false }
    ]
  },
  {
    id: 3,
    f: "Meme si les mods sont souvent obsoletes due au mises a jour du jeux, elle fonctionne parfaitement et sont supporter de base.",
    q: "Beat Saber supporte les mods.",
    a: [{ text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false }
    ]
  },
  {
    id: 4,
    f: "Beat Games a ete cree en 2018 par Jan Illavsky, Vladimir Grincar et Peter Hrincar, 1 ans avant la sortie de beat saber, il reste leur seul jeu developer.",
    q: "Quel studio developpe Beat Saber?",
    a: [{ text: "Beat Games", isCorrect: true },
        { text: "7th Beat Studio", isCorrect: false },
        { text: "Super Spin Digital", isCorrect: false },
        { text: "PeroPero Inc.", isCorrect: false }
    ]
  },
  {
    id: 5,
    f: "Beat Games utilise unity pour faire marcher beat saber, ils ont reussi a cree un prototype du jeux avec, en seulement 4 semaines.",
    q: "Quel est le moteur graphique de Beat Saber ?",
    a: [{ text: "Unreal Engine", isCorrect: false },
        { text: "C++", isCorrect: false },
        { text: "Unity", isCorrect: true },
        { text: "Godot", isCorrect: false }
    ]
  },
  {
    id: 6,
    f: "En competition avec Final Boss, Ghost est generalement considerer la chanson la plus dur du jeu original, avec un BPM(Beats per minute) de 110!",
    q: "Quelle est la chanson considerer comme la plus dur de Beat Saber?",
    a: [{ text: "100$ Bill: Jaroslav Beck", isCorrect: false },
        { text: "Final Boss: Camellia", isCorrect: false },
        { text: "Overkill: Riot", isCorrect: false },
        { text: "Ghost: Camellia", isCorrect: true }
    ]
  },
  {
    id: 7,
    f: "Pour avoir un score max, il faut une coupure parfait de 100 degree",
    q: "Quelle est la meilleur coupe possible pour faire un maximum de points ?",
    a: [{ text: "100°", isCorrect: true },
        { text: "60°", isCorrect: false },
        { text: "90", isCorrect: false },
        { text: "120", isCorrect: false }
    ]
  },
  {
    id: 8,
    f: "Pour atteindre une note SS il faut avoir une precision a 90% ou plus!",
    q: "Quelle est la plus grande note possible ?",
    a: [{ text: "Perfect", isCorrect: false },
        { text: "S", isCorrect: false },
        { text: "S+", isCorrect: false },
        { text: "SS", isCorrect: true }
    ]
  },
  {
    id: 9,
    f: "Free Bird, sortie en decembre 2022, est la chanson la plus longue du jeu, durant 8 minutes et 50 secondes.",
    q: "Quelle est la chanson la plus longue de Beat Saber? (dans le jeu de base)",
    a: [{ text: "Seven Nation Army: The White Stripes", isCorrect: false },
        { text: "Smells like teen spirit: Nirvana", isCorrect: false },
        { text: "Free Bird: Lynyrd Skynyrd", isCorrect: true },
        { text: "I was made for Lovin' you: KISS", isCorrect: false }
    ]
  }
  ]
  
  // Set start
  var start = true;
  
  // Iterate
  function iterate(id) {
  
  // Getting the result display section
  var result = document.getElementsByClassName("result");
  result.innerText = Questions[id].f;
  
  // Getting the question
  const question = document.getElementById("question");
  
  
  // Setting the question text
  question.innerText = Questions[id].q;
  
  // Getting the options
  const op1 = document.getElementById('op1');
  const op2 = document.getElementById('op2');
  const op3 = document.getElementById('op3');
  const op4 = document.getElementById('op4');
  
  // Providing option text 
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;
  
  // Providing the true or false value to the options
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;
  
  var selected = "";
  
  // Show selection for op1
  op1.addEventListener("click", () => {
    op1.style.backgroundColor = "#027991";
    op2.style.backgroundColor = "#813C58";
    op3.style.backgroundColor = "#813C58";
    op4.style.backgroundColor = "#813C58";
    selected = op1.value;
  })
  
  // Show selection for op2
  op2.addEventListener("click", () => {
    op1.style.backgroundColor = "#813C58";
    op2.style.backgroundColor = "#027991";
    op3.style.backgroundColor = "#813C58";
    op4.style.backgroundColor = "#813C58";
    selected = op2.value;
  })
  
  // Show selection for op3
  op3.addEventListener("click", () => {
    op1.style.backgroundColor = "#813C58";
    op2.style.backgroundColor = "#813C58";
    op3.style.backgroundColor = "#027991";
    op4.style.backgroundColor = "#813C58";
    selected = op3.value;
  })
  
  // Show selection for op4
  op4.addEventListener("click", () => {
    op1.style.backgroundColor = "#813C58";
    op2.style.backgroundColor = "#813C58";
    op3.style.backgroundColor = "#813C58";
    op4.style.backgroundColor = "#027991";
    selected = op4.value;
  })
  
  // Grabbing the evaluate button
  const evaluate = document.getElementsByClassName("evaluate");
  
  // Evaluate method
  evaluate[score].addEventListener("click", () => {
    if (selected == "true" && EvalRerun == 0) {
        Feedback.innerText = Questions[id].f;
        Feedback.style.color = "#309eff";
        result[0].innerText = Questions[id].f;
        result[0].style.color = "#309eff";
        score++
        document.getElementById("ScoreMarker").innerHTML = score; 
        EvalRerun++
    } else {
        Feedback.innerText = Questions[id].f;
        Feedback.style.color = "#309eff";
        result[0].innerHTML = Questions[id].f;
        result[0].style.color = "#f03030";
        EvalRerun++
    }
  })
  }
  
  if (start) {
  iterate("0");
  }
  
  // Next button and method
  const next = document.getElementsByClassName('next')[0];
  var id = 0;
  
  next.addEventListener("click", () => {
  start = false;
  if (EvalRerun >= 1) {
    if (id < 10) {
      id++;
      EvalRerun--
      iterate(id);
      console.log(id);
    }
    else {
      ScoreMarker.innerHTML = score;
      document.getElementById("ScoreMarker").innerText=score;
      document.getElementById("question").style.display = "none";
      document.getElementById("op1").style.display = "none";
      document.getElementById("op2").style.display = "none";
      document.getElementById("op3").style.display = "none";
      document.getElementById("op4").style.display = "none";
    }
      
    }
    else{
      none
    }
    }
    )
  
  }