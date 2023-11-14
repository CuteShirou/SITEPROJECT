<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Beat Saber</title>
    <link rel="stylesheet" type="text/css" href="DossierPHP/DataBase.css">
</head>
<body>
    <h2>Inscription</h2>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="Username">Nom :</label>
        <input type="text" name="Username" required><br>

        <label for="Password">Mot de passe :</label>
        <input type="Password" name="Password" required><br>

        <input type="submit" value="S'inscrire">
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
    
        if ($connexion->query($requete) === TRUE) {
            echo "Inscription réussie !";
        } else {
            echo "Erreur lors de l'inscription : " . $connexion->error;
        }
    }

    $query = "SELECT * FROM COMPTES";
    $resultat = $connexion->query($query);
    echo "<h2>Résultats de la requête :</h2>";
    if ($resultat->num_rows > 0) {
        while ($row = $resultat->fetch_assoc()) {
            echo " - Nom : " . $row["Username"] . " - Password : " . $row["Password"] . "<br>";
        }
    } else {
        echo "Aucun résultat trouvé.";
    }
    $connexion->close();
    ?>
</body>
</html>