 <?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if (isset($_GET['id'])){

 $id = $_GET['id']; 
 
 // Create connection
 $conn = new mysqli($servername, $username, $password, $dbname);
 
 // Check connection
 if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
 } 
 
   //echo "Connected successfully";
 $sql = "SELECT Ind as 'Id', Name as 'Nom', Classe, Intelligence, Reflexes, Dexterite, Technique, Prestance, Volonte, Chance, Mouvement, Corps, Empathie FROM perso where Ind ='$id'";
 $result = mysqli_query($conn,$sql); 
 if ($result->num_rows > 0) {
 // output data of each row
    $row = mysqli_fetch_assoc($result); 
     print json_encode($row);
 } 
 else 
 {
     echo "0 results";
 }
}else{
	echo "No parameter id";
}
?>