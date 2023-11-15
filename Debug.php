<!DOCTYPE html>
<html lang="fr">
<head>
    <title>DataBase Admin</title>
    <link rel="stylesheet" type="text/css" href="DossierPHP/DataBase.css">
</head>
<body>
    <h2>Creation</h2>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="Username">Nom :</label>
        <input type="text" name="Username" required><br>

        <label for="Password">Mot de passe :</label>
        <input type="text" name="Password" required><br>

        <label for="Email">Email :</label>
        <input type="text" name="Email" required><br>

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
        $Email = $_POST["Email"];
        $requete = "INSERT INTO `COMPTES` (`ID`, `Username`, `Password`, `Email`) VALUES ( '', '$Username', '$Password', '$Email');";
    
        if ($connexion->query($requete) === TRUE) {
            echo "Compte ajoutée correctement.";
        } else {
            echo "Compte déjà existant : " . $connexion->error;
        }
    }

    $query = "SELECT * FROM COMPTES";
    $resultat = $connexion->query($query);
    echo "<h2>Résultats de la requête :</h2>";
    if ($resultat->num_rows > 0) {
        while ($row = $resultat->fetch_assoc()) {
            echo " - Nom : " . $row["Username"] . " - Password : " . $row["Password"] . " - Email : " . $row["Email"] . "<br>";
        }
    } else {
        echo "Aucun résultat trouvé.";
    }
    $connexion->close();
    ?>
    <h2>QUIZ</h2>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="Feedback">Feedback :</label>
        <input type="text" name="Feedback" required><br>

        <label for="Question">Question :</label>
        <input type="text" name="Question" required><br>

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
        $Feedback = $_POST["Feedback"];
        $Question = $_POST["Question"];
        $requete2 = "INSERT INTO `QUIZ` (`ID`, `Feedback`, `Question`) VALUES ( '', '$Feedback', '$Question');";
    
        if ($connexion->query($requete2) === TRUE) {
            echo "Question ajoutée correctement.";
        } else {
            echo "Question déjà existant : " . $connexion->error;
        }
    }

    $query = "SELECT * FROM QUIZ";
    $resultat2 = $connexion->query($query);
    echo "<h2>Résultats de la requête :</h2>";
    if ($resultat2->num_rows > 0) {
        while ($row = $resultat2->fetch_assoc()) {
            echo " - Feedback : " . $row["Feedback"] . " - Question : " . $row["Question"] . "<br>";
        }
    } else {
        echo "Aucun résultat trouvé.";
    }
    $connexion->close();
    ?>
</body>
</html>