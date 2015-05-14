<?php

defined('DB_SERVER') ? null : define("DB_SERVER", "localhost");
defined('DB_USER')   ? null : define("DB_USER", "root");
defined('DB_PASS')   ? null : define("DB_PASS", "root");
defined('DB_NAME')   ? null : define("DB_NAME", "product_reviews");

$con = mysql_connect("localhost","root","root");
	if (!$con) {
	  	die('Could not connect: ' . mysql_error());
	}

	mysql_select_db("product_reviews", $con);

		$result = mysql_query("SELECT * FROM product_reviews_table ORDER BY ID LIMIT 20");
		$reviews = array();

	while($row = mysql_fetch_array($result)) {
		$review = array(
			"FName" => $row['FName'],
			"Email" => md5( strtolower( trim( $row['Email'] ) ) ),
			"ReviewTextarea" => $row['ReviewTextarea'],
			"Rating" => $row['Rating'],			
			);
		array_push($reviews, $review);
	}
	echo json_encode($reviews);
		mysql_close($con);
?>