<?php

$myjson = json_decode($_POST['add_review'], true);
var_dump($myjson);


$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "product_reviews";

$conn = new mysqli($servername, $username, $password, $dbname);

// if ($conn->query("INSERT INTO product_reviews_table VALUES "
//                 . "('" . $myjson['NULL'] . "', '" . $myjson['FName'] . "', '" . $myjson['Email'] . "',
//                  '" . $myjson['ReviewTextarea'] . "','" . $myjson['Rating'] . "')") === TRUE) {
// 	echo "OK";
// } else {
//     echo "Error";
// };
$emailCheck = mysql_query("SELECT * FROM product_reviews_table WHERE Email = 'daniel.sandu11@gmail.com'");
if (mysql_num_rows($emailCheck) > 0) {
     // echo $myjson['Email'];
	echo "Email already exists!";
} else {
	echo "Nu exista!"
}

$conn->close();
?>

