<?php

/*$notes = [];

$item1 = [
	'id' => 1,
	'title' => 'First title',
	'content' => 'first content'
];

$item2 = [
	'id' => 2,
	'title' => 'Second title',
	'content' => 'second content'
];

$item3 = [
	'id' => 3,
	'title' => 'Third title',
	'content' => 'third content'
];

$notes[] = $item1;
$notes[] = $item2;
$notes[] = $item3;

header("Content-type: application/json; charset=utf-8");
header('Access-Control-Allow-Origin: *');
echo json_encode($notes);*/

require_once 'config.php';
require_once 'sql.php';

$response = [];

$db = Sql::app();
$notes = $db->selectAll("SELECT id, title, description FROM note");

if (!empty($notes)) {
	$response['result'] = 'ok';
	$response['notes'] = $notes;
}
else {
	$response['result'] = 'empty';
}

header("Content-type: application/json; charset=utf-8");
header('Access-Control-Allow-Origin: *');
echo json_encode($response);

?>