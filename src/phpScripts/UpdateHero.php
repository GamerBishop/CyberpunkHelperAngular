 <?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if (isset($_GET['id']) && isset($_GET['Nom']) && isset($_GET['Classe']) && isset($_GET['Intel']) && isset($_GET['Ref']) && isset($_GET['Dex']) && isset($_GET['Tech']) && isset($_GET['Pres']) 
	&& isset($_GET['Vol']) && isset($_GET['Cha']) && isset($_GET['Mouv']) && isset($_GET['Cor']) && isset($_GET['Emp'])){

//Get Params
 $id = $_GET['id'];
 $Nom = $_GET['Nom'];
 $Classe = $_GET['Classe'];
 $Intel = $_GET['Intel'];
 $Ref = $_GET['Ref'];
 $Dex = $_GET['Dex'];
 $Tech = $_GET['Tech'];
 $Pres = $_GET['Pres'];
 $Vol = $_GET['Vol'];
 $Cha = $_GET['Cha'];
 $Mouv = $_GET['Mouv'];
 $Cor = $_GET['Cor'];
 $Emp = $_GET['Emp'];

 
 // Create connection
 $conn = new mysqli($servername, $username, $password, $dbname);
 
 // Check connection
 if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
 } 
 
   //echo "Connected successfully";
 $sql = "UPDATE
    `perso`
SET
    `Name` = '$Nom',
    `Level` = 1,
    `Classe` = '$Classe',
    `Intelligence` = '$Intel',
    `Reflexes` = '$Ref',
    `Dexterite` = '$Dex',
    `Technique` = '$Tech',
    `Prestance` = '$Pres',
    `Volonte` = '$Vol',
    `Chance` = '$Cha',
    `Mouvement` = '$Mouv',
    `Corps` = '$Cor',
    `Empathie` = '$Emp'
WHERE
    Ind ='$id'";


if ($conn->query($sql) === TRUE) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
}

}else{
	echo "Missing Parameters";
}
?>