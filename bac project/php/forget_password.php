<?php
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
$conx = mysqli_connect('localhost','root','','sells_account') ;
$name = test_input($_POST["Username"]);
$email = test_input($_POST["email"]);
$password = test_input($_POST["pass"]);

$sql= "UPDATE account SET Password = '$password' WHERE Name = '$name' "; 
$result = mysqli_query($conx,$sql); 
if(isset($result)){ 
  header('Location: http://localhost/bac%20project/log%20in/index.html');die;
}
else{ 
  header( "Location: http://localhost/bac%20project/Forget%20password/index.html" ); die;
} 
?>