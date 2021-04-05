<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

if (isset($_GET['NomReseau']) && isset($_GET['Description'])&& isset($_GET['Id'])){

	$Id = $_GET['Id'];
	$NomReseau = $_GET["NomReseau"] ;
	$Description = $_GET["Description"] ; 

	$conn = mysqli_connect($servername, $UserName, $Password, $dbname);

// Check connection
	if( $conn === false){
		die("ERROR: Could not connect. " . mysqli_connect_error());
	}

// Attempt insert query execution
	$sql = "INSERT INTO reseaux( Id, NomReseau, Commentaire) VALUES ('$Id', '$NomReseau','$Description')";
	if(mysqli_query( $conn, $sql)){
		
mysqli_close($conn);
		$sqle = "SELECT Id,
		NomReseau,
		Commentaire
		FROM reseaux 
		Where NomReseau = '$NomReseau' And Commentaire = '$Description'
		order by NomReseau Asc";

$conne = mysqli_connect($servername, $UserName, $Password, $dbname);
		
			$row = mysqli_fetch_assoc(mysqli_query($conne,$sqle)); 
			print json_encode($row);

	} else{
		echo "ERROR: Could not able to execute $sql. " . mysqli_error( $conn);
	}
// Close connection
	
}else{mysqli_close( $conn);
	echo "Missing parameters" ;
}

?>