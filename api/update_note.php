<?php

require_once 'config.php';
require_once 'sql.php';

$db = Sql::app();

$note = array();
$id = (int) $_POST['id'];
$note['title'] = htmlspecialchars($_POST['title']);
$note['description'] = htmlspecialchars($_POST['description']);

if (!empty($note['title']) && !empty($note['description'])) {
	$result = $db->update('note', $note, "id = $id");//count affected rows
}

$response = [];

if ($result) {
	$response['result'] = 'ok';	
}
else {
	$response['result'] = 'error';
}


header("Content-type: application/json; charset=utf-8");
header('Access-Control-Allow-Origin: *');

echo json_encode($response);

?>