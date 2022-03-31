<?php  
  if (isset($_POST["email"])) {
    $to_email =  "info@modestotechs.com"; // $_POST["to_email"];
    $from_email = $_POST["email"];
    $subject = $_POST["subject"];
    $body = $_POST["message"];
     $headers = "From: info@modestotechs.com";
 
    if ( mail($to_email, $subject, $body, $headers)) {
      echo("Email successfully sent to $email $subject  $message ...");
    } else {
      echo("Email sending failed...");
      echo("Email successfully sent to $from_email $subject  $body ...");
    }
  }

?>