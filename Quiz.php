<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <link rel="stylesheet" href="Quiz/StyleQuiz.css">
</head>
<body>
    <header>
        <div class="logo">
            <img src="https://cdn.discordapp.com/attachments/1161296362479034479/1163443222371123320/Campus_Pas_Campus_200x200.png" alt="Logo du site">
        </div>
        <nav>
            <ul>
                <li><a href="index.php">Accueil</a></li>
                <li><a href="apropos.html">À propos</a></li>
                <li><a href="Collab.html">Collab</a></li>
                <li><a href="Contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    <div>
        <h1 class="general-text">
            Score : <span id="ScoreMarker">0</span>
        </h1>
    </div>
    <div class="panel">
      <div class="result" id="Feedback">
        </div>
      <div class="question-container" id="question">
          Heheheheha
      </div>
      <div class="general-text" id="SquareHide">
        Bravo! Votre score est: <span id="ScoreMarker"></span>
      </div>
      <div class="option-container">
          <button class="option" onclick="" id="op1" >option1</button>
          <button class="option" id="op2" >option2</button>
          <button class="option" id="op3">option3</button>
          <button class="option" id="op4">option4</button>
      </div>
      <div class="navigation">
          <button class="evaluate">Evaluate</button>
          <button class="next">Next</button>
      </div>
  </div>
  <h1><script src="Quiz/Quiz.js"> document.write(Score) </script></h1>
    <footer>
        <p>© 2023 G.PS. Tous droits réservés. | <a href="ConditionUlti.html">Conditions d'utilisation</a> <a href="MentionLegal.html">Mentions Légales</a></p>
    </footer>
</div>
</body>
</html>