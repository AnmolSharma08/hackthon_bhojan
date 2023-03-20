<?php

if(isset($_POST['full_name'])){ //using the post method
$server = "localhost";
$username = "root";
$password = "";

$con = mysqli_connect($server,$username,$password); //connecting the server
if(!$con){
    die("Connection failed due to ". mysqli_connect_error());
}

$full_name = $_POST["full_name"];
$contact_no = $_POST["contact_no"];
$address = $_POST["address"];
$landmark = $_POST["landmark"];
$pincode = $_POST["pincode"];
$town = $_POST["town"];
$expiry_date = $_POST["expiry_date"];
$sql = "INSERT INTO `webdb` . `donate_food` (`full_name`, `contact_no`, `address`, `landmark`, `pincode`, `town`, `expiry_date`) VALUES ('$full_name', '$contact_no', '$address', '$landmark', '$pincode', '$town', '$expiry_date');"; //sql query

if ($con->query($sql)==true) { // checking sql function is inserting value or note
    echo "Thank you for DONATION!! ,Our people will reach our place shortly.";
}
else {
    echo "ERROR : $sql <br> $con->error";
}
$con->close();
}
?>