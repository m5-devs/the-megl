<?php

$db = new mysqli('thepark.db.5969281.hostedresource.com','thepark','OIZtRQmFhopZnGgPOofbLGQbENlVcTk6BOQCNX6PgmaunxRqVO@','thepark');

header('Content-Type: application/json');

if ($db->connect_error > 0) {
	die('Connection failed: '. $db->connect_errno);
}

$result = $db->query('SELECT * FROM results');
$teams = array();

while($team = $result->fetch_array()) {
    $teams[] = $team;
}

echo json_encode($teams);

?>