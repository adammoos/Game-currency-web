<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$name = test_input($_POST["user"]);
$password = test_input($_POST["pass"]);
$product= filter_input(INPUT_POST, 'product', FILTER_SANITIZE_STRING);
switch($product) {
    //fortnite part 
    case "1000 vbucks" :
        $price = 20 ;
        break;
    case "2800 vbucks" :
        $price = 45;
        break;
    case "5000 vbucks" :
        $price = 73;
        break;
    case "13500 vbucks" :
        $price = 170;
        break;
    case "Fortnite crew" :
        $price = 20;
        break;
    case "6$ bundle" :
        $price = 15;
        break;
    case "10$ bundle" :
        $price = 35;
        break;
    case "midas bundle" :
        $price = 35;
        break;
    
    //valorant part

    case "500 vp" :
        $price = 23;
        break;
    case "1150 vp" :
        $price = 49;
        break;
    case "2150 vp" :
        $price = 88;
        break;
    case "4400 vp" :
        $price = 178;
        break;
    case "5500 vp" :
        $price = 220;
        break;
    case "10500 vp" :
        $price = 370;
        break;
}
$conx = mysqli_connect('localhost','root','','sells_account') ;
$req="INSERT INTO product VALUES ('$name','$password','$price','$product')";
$res=mysqli_query($conx,$req);
if(isset($res) ){
    header('Location: http://localhost/bac%20project/Connected%20part/payment/sell.html');die;
}
else {
    header('Location: http://localhost/bac%20project/Connected%20part/buy/buy.html');die;
}
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
    ?>
</body>
</html>