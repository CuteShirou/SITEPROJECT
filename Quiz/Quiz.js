window.onload = function(){ 
  let score = 0;
  let EvalRerun = 0;
  const scoreElement = document.getElementById("score");
  
  const Questions = [{
    id: 0,
    q: "Quelle est la date de sortie de Beat Saber sur Windows ?",
    a: [{ text: "2016", isCorrect: false },
        { text: "2017", isCorrect: false },
        { text: "2018", isCorrect: false },
        { text: "2019", isCorrect: true }
    ]
  
  },
  {
    id: 1,
    q: "Quelle est le premier groupe de musique a avoir fais un partenariat avec Beat Saber ?",
    a: [{ text: "Imagine Dragons", isCorrect: true, isSelected: false },
        { text: "K/DA", isCorrect: false },
        { text: "Linkin Park", isCorrect: false },
        { text: "Lady Gaga", isCorrect: false }
    ]
  },
  {
    id: 2,
    q: "Quelle est la plus grande difficulté disponible dans le jeux ?",
    a: [{ text: "Insane", isCorrect: false },
        { text: "Master", isCorrect: false },
        { text: "Expert+", isCorrect: true },
        { text: ".", isCorrect: false }
    ]
  },
  {
    id: 3,
    q: "Beat Saber supporte les mods.",
    a: [{ text: "Vrai", isCorrect: true },
        { text: "Faux", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false }
    ]
  },
  {
    id: 4,
    q: "Quel studio developpe Beat Saber?",
    a: [{ text: "Beat Games", isCorrect: true },
        { text: "7th Beat Studio", isCorrect: false },
        { text: "Super Spin Digital", isCorrect: false },
        { text: "PeroPero Inc.", isCorrect: false }
    ]
  },
  {
    id: 5,
    q: "Quel est le moteur graphique de Beat Saber ?",
    a: [{ text: "Unreal Engine 4", isCorrect: false },
        { text: "Unreal Engine 5", isCorrect: false },
        { text: "Unity", isCorrect: true },
        { text: "Unreal Unity engine 6", isCorrect: false }
    ]
  },
  {
    id: 6,
    q: "Quelle est la chanson considerer comme la plus dur de Beat Saber?",
    a: [{ text: "100$ Bill: Jaroslav Beck", isCorrect: false },
        { text: "Final Boss: Camellia", isCorrect: false },
        { text: "Overkill: Riot", isCorrect: false },
        { text: "Ghost: Camellia", isCorrect: true }
    ]
  },
  {
    id: 7,
    q: "Quelle est la meilleur coupe possible pour faire un maximum de points ?",
    a: [{ text: "100°", isCorrect: true },
        { text: "60°", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false }
    ]
  },
  {
    id: 8,
    q: "Quelle est la plus grande note possible ?",
    a: [{ text: "Perfect", isCorrect: false },
        { text: "S", isCorrect: false },
        { text: "S+", isCorrect: false },
        { text: "SS", isCorrect: true }
    ]
  },
  {
    id: 9,
    q: "Quelle est la chanson la plus longue de Beat Saber? (dans le jeu de base)",
    a: [{ text: "Seven Nation Army: The White Stripes", isCorrect: false },
        { text: "Smells like teen spirit: Nirvana", isCorrect: false },
        { text: "Free Bird: Lynyrd Skynyrd", isCorrect: true },
        { text: "I was made for Lovin' you: KISS", isCorrect: false }
    ]
  }]

  var start = true;

  function iterate(id) {

  var result = document.getElementsByClassName("result");
  result[0].innerText = "";

  const question = document.getElementById("question");
  
  question.innerText = Questions[id].q;
  
  const op1 = document.getElementById('op1');
  const op2 = document.getElementById('op2');
  const op3 = document.getElementById('op3');
  const op4 = document.getElementById('op4');

  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;
  
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;
  
  var selected = "";

  op1.addEventListener("click", () => {
    op1.style.backgroundColor = "#027991";
    op2.style.backgroundColor = "#813C58";
    op3.style.backgroundColor = "#813C58";
    op4.style.backgroundColor = "#813C58";
    selected = op1.value;
  })
  op2.addEventListener("click", () => {
    op1.style.backgroundColor = "#813C58";
    op2.style.backgroundColor = "#027991";
    op3.style.backgroundColor = "#813C58";
    op4.style.backgroundColor = "#813C58";
    selected = op2.value;
  })
  op3.addEventListener("click", () => {
    op1.style.backgroundColor = "#813C58";
    op2.style.backgroundColor = "#813C58";
    op3.style.backgroundColor = "#027991";
    op4.style.backgroundColor = "#813C58";
    selected = op3.value;
  })
  op4.addEventListener("click", () => {
    op1.style.backgroundColor = "#813C58";
    op2.style.backgroundColor = "#813C58";
    op3.style.backgroundColor = "#813C58";
    op4.style.backgroundColor = "#027991";
    selected = op4.value;
  })
  
  const evaluate = document.getElementsByClassName("evaluate");
  
  evaluate[score].addEventListener("click", () => {
    if (selected == "true" && EvalRerun == 0) {
        result[0].innerHTML = "Vrai";
        result[0].style.color = "#309eff";
        score++
        document.getElementById("ScoreMarker").innerHTML = score; 
        EvalRerun++
    } else {
        result[0].innerHTML = "Faux";
        result[0].style.color = "#f03030";
        EvalRerun++
    }
    evaluate.disabled = false
  })}
  
  if (start) {
  iterate("0");
  }
  
  const next = document.getElementsByClassName('next')[0];
  var id = 0;
  
  next.addEventListener("click", () => {
  start = false;
  if (id < 10) {
    id++;
    EvalRerun--
    iterate(id);
    console.log(id);
  }
  else {
    ScoreMarker.innerHTML = score;
    document.getElementById("ScoreMarker").innerText=score;  
  }})
}