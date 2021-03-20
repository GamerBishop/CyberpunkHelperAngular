 <?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


if (isset($_GET['persoId'])){

 $persoId = $_GET['persoId']; 
 
 // Create connection
 $conn = new mysqli($servername, $username, $password, $dbname);
 
 // Check connection
 if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
 } 
 
   //echo "Connected successfully";
 $sql = "SELECT
    persocomp.PersoId, persocomp.CompId, persocomp.NiveauComp, competences.Nom, competences.Type
FROM
    persocomp,
    competences
where
    persocomp.CompId = competences.Id
And
    persocomp.PersoId = '$persoId' ";
 $result = mysqli_query($conn,$sql); 
 $myArray = array();
 if ($result->num_rows > 0) {
 // output data of each row
     while($row = $result->fetch_assoc()) {
         $myArray[] = array_map("utf8_encode", $row);
     }
     print json_encode($myArray);
 } 
 else 
 {
     echo "0 results";
 }
}
?>