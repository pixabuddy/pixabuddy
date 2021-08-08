<?php
if(isset($_POST['submit'])){

  
  $email = $_POST['email']; // this is the sender's Email address
  $name = $_POST['name'];
  $services = $_POST['services'];
  $phone = $_POST['phone'];
  $details = $_POST['message'];

  $message = "New Business Enquire from website \r\n\n";
  $message .= "Name : ". $name .". \r\n\n";
  $message .= "Services : ". $services ." . \r\n\n";
  $message .= "Email : ". $email ." . \r\n\n";
  $message .= "Phone no. : ". $phone ." . \r\n\n";
  $message .= "Message : ". $details ." . \r\n\n";
  
  $to = "pixabuddy@gmail.com"; // this is your Email address
  $subject = "New enquire form website";
  $headers = "From:" . $email;
		

	if(mail($to, $subject, $message, $headers)){
    header("Location:thankyou/");
	} else {
    echo 'Unable to send email. Please try again.';
	}
}

?>