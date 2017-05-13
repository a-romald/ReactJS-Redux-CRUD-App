<?php

require_once 'config.php';
require_once 'sql.php';

$db = Sql::app();

$note = array();
$note['title'] = htmlspecialchars($_POST['title']);
$note['description'] = htmlspecialchars($_POST['description']);

if (!empty($note['title']) && !empty($note['description'])) {
	$note_id = $db->insert('note', $note);
}

$response = [];

if (!empty($note_id)) {
	$response['result'] = 'ok';
	$response['note_id'] = $note_id;
}
else {
	$response['result'] = 'error';
}


header("Content-type: application/json; charset=utf-8");
header('Access-Control-Allow-Origin: *');

echo json_encode($response);

?>