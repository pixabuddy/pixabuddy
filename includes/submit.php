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

  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

$sql = "INSERT INTO contact (Name, Email, Subject, Phone, Message)
VALUES ('$name', '$email', '$subject', '$phone', '$message')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>

