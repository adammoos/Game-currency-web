
<?php 
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
$conx = mysqli_connect('localhost','root','','sells_account') ;
if (isset($_POST['email'])) {
  $email=test_input($_POST['email']);
}
if (isset($_POST['password'])) {
  $password=test_input($_POST['password']);
}
$sql="SELECT Email,Password FROM account WHERE Email = '$email' AND Password = '$password' "; 
$result = mysqli_query($conx,$sql); 
$check = mysqli_fetch_array($result); 
if ($check){
  header('Location: http://localhost/bac%20project/connected%20part/index.html');die;
  }
  else{
    header('Location: http://localhost/bac%20project/log%20in/index.html');die;
    }
?>



