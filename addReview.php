<?php

$myjson = json_decode($_POST['add_review'], true);
var_dump($myjson);


$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "product_reviews";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
if ($conn->query("INSERT INTO product_reviews_table VALUES "
                . "('" . $myjson['NULL'] . "', '" . $myjson['FName'] . "', '" . $myjson['Email'] . "',
                 '" . $myjson['ReviewTextarea'] . "','" . $myjson['Rating'] . "')") === TRUE) {
    echo "OK";
} else {
    echo "Error";
};
$conn->close();
?>
