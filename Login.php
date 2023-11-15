<?php
      $LoginE;
 if (isset($_POST["submit"])) 
    {
            $Username = $_POST['Username'];
            $Password = $_POST['Password'];
            $ID = $_POST['ID'];
            $errUsername = false;
            $errPassword = false;
            if (!$_POST['Username'] || !filter_var($_POST['Username'], FILTER_VALIDATE_USERNAME)) {
                  $errUsernameMessage = "Entrée un Username valide.";
            }
            if (!$_POST['Password'] || strlen($_POST['Password']) < 8 ) {
                $errPassMessage = "Le mots de passe dois avoir 8 caractères minimum.";
            }
    if (isset($errUsernameMessage) || isset($errPassMessage) )
        {
            $loginMessage=  '<div class="container"><div class="alert alert-danger">Désoler nous ne pouvons pas vous connecter, </div></div>';
        }
        else 
            {
             $loginMessage=  '<div class="alert alert-success">Vous vous êtes correctement connecter.</div>'; 
            }
 }
?>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Connection</title>
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="DossierPHP/Login.css" rel="stylesheet">
  </head>
  <body>
    <div class="container">
      <form class="form-signin" method="post" action="Account.php">
  <?php if (isset($loginMessage)) echo $loginMessage ; ?>
        <h2 class="text-center">Merci de vous connectez</h2>

        <label for="inputUsername" class="sr-only"></label>
        <input type="text" id="inputUsername" name="Username" class="form-control" placeholder="Username" required autofocus>
        <span class="text-danger"><?php if (isset($errUsernameMessage)) echo $errUsernameMessage; ?></span>

        <label for="inputPassword" class="sr-only"></label>
        <input type="password" id="inputPassword" name="Password" class="form-control" placeholder="Password" required>
        <span class="text-danger"><?php if (isset($errPassMessage)) echo $errPassMessage; ?></span>
        
         <button name="submit" class="btn btn-success btn-block" type="submit">Login</button>
      </form>
    </div>
  </body>
</html>