<?php
$conx = mysqli_connect('localhost','root','','sells_account') ;
$phone = test_input($_POST["phone"]);
$email = test_input($_POST["email"]);
$password = test_input($_POST["password"]);
$name = test_input($_POST["name"]);
$req = "INSERT INTO account VALUES ('$name','$phone','$email','$password')";
$res = mysqli_query($conx,$req);
if ($res = true) {
  header('Location: http://localhost/bac%20project/log%20in/index.html');die;
}
else {
  header('Location: http://localhost/bac%20project/sign%20in/Register.html');die;;
  }

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>