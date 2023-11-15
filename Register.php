<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Beat Saber</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
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
                <li><a href="DataBase.php">DataBase</a></li>
                <li><a href="Register.php">S'identifiée</a></li>
            </ul>
        </nav>
    </header>
<body>
    <h2>Creer son compte</h2>

    <div class="logo">
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <label for="Username">Nom d'utilisateur :</label>
            <input type="text" name="Username" required><br>

            <label for="Password">Mot de passe :</label>
            <input type="Password" name="Password" required><br>

            <input type="submit" value="Crée"> 
    </form>
        <?php
        $serveur = "mysql-beatsabergps.alwaysdata.net";
        $utilisateur = "332232_codeacces";
        $motDePasse = "@[mRc~q3F!}93XG2DzdZ8Aww/36(Fx236^q#6_t*,RM3gxm.V8mYDv6RY{N6";
        $baseDeDonnees = "beatsabergps_database";
        $connexion = new mysqli($serveur, $utilisateur, $motDePasse, $baseDeDonnees);
        if ($connexion->connect_error) {
            die("La connexion à la base de données a échoué : " . $connexion->connect_error);
        }

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $Username = $_POST["Username"];
            $Password = $_POST["Password"];
            
            $requete = "INSERT INTO `COMPTES` (`ID`, `Username`, `Password`) VALUES ( '', '$Username', '$Password');";
        
            if (!$_POST['Username'] || !filter_var($_POST['Username'], FILTER_VALIDATE_USERNAME)) {
                echo "Le nom d'utilisateur est deja prit";
                if (!$_POST['Password'] || strlen($_POST['Password']) < 8 ) {
                    echo "Votre mot de passe doit etre 8 characters ou plus"; }
                    else {
                        if ($connexion->query($requete) === TRUE) {
                            echo "Inscription réussie !";
                            echo '<script type="text/javascript">
                            window.location = "index.php"
                            </script>';
                        } else {
                            echo " Erreur de Creation : " . $connexion->error;
                        }
                    }
                    $connexion->close(); 
                }
             }
            
            
        ?>
</body>
</html>
