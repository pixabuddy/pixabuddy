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
  ?>
    <script type="text/javascript">
    window.location = "../thank-you/";
    </script>      
  <?php
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>