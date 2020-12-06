<?php

$servername = "localhost";
$username = "pixabuddy";
$password = "Pixa@buddy97";
$dbname = "Newsletter";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

  $name = $_POST['name-subscribe'];
	$email = $_POST['email-subscribe'];

$sql = "INSERT INTO subscribe (Name, Email)
VALUES ('$name', '$email')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>


<?php

if($_POST){
    function getCaptcha($SecretKey){
        $Response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret="."6Lel5qcZAAAAAPiV70I2BuM2iY5wH5Ht8NVrv29C"."&response={$SecretKey}");
        $Return = json_decode($Response);
        return $Return;
    }
    $Return = getCaptcha($_POST['g-recaptcha-response']);
    //var_dump($Return);
    if($Return->success == true && $Return->score > 0.5){
        echo "Succes!";
    }else{
        echo "You are a Robot!!";
    }
}

?>