<?php
$to = "technipunaindia@gmail.com";
$subject = "Technipuna Contact Form";
$message = 'name=' . $_POST["name"] . '&email=' . $_POST["email"] . '&phone=' . $_POST["phone"] . '&subject=' . $_POST["subject"] . '&message=' . $_POST["message"];

$from = "technipunaindia@gmail.com";
$headers = "From:" . $from;
mail($to,$subject,$message,$headers);
echo  $message;
?>