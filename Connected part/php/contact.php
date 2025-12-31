

<?php 
$conx = mysqli_connect('localhost','root','','sells_account') ;
$phone = test_input($_POST["phone"]);
$name = test_input($_POST["Name"]);
$email = test_input($_POST["email"]);
$message = test_input($_POST["Massage"]);
$req = "INSERT INTO contact VALUES ('$name','$phone','$email','$message')";
$res = mysqli_query($conx,$req);
if (isset($res)) {
  header('Location: http://localhost/bac%20project/Connected%20part/contact_done.html');die;
}
else {
  header('Location: http://localhost/bac%20project/Connected%20part/contact.html');die;
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
