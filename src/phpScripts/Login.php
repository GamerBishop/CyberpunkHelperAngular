<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
 
 
 // Create connection
 $conn = new mysqli($servername, $UserName, $Password, $dbname);
 
 // Check connection
 if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
 } 
 


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{ 
$pwd = mysqli_real_escape_string($conn, trim($request->Password));
$user = mysqli_real_escape_string($conn, trim($request->UserName));
$sql = "SELECT * FROM users where UserName='$user' and Password='$pwd'";

if($result = mysqli_query($conn,$sql))
{ 
    $row = mysqli_fetch_assoc($result); 
     print json_encode($row);
}
else
{
	echo "fail";
http_response_code(404);
}
}
?>