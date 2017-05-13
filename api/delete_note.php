<?php

require_once 'config.php';
require_once 'sql.php';

$db = Sql::app();
$id = (int) $_GET['id'];
$del = $db->delete('note', "id = '$id'");

$response = [];
if ($del) $response['result'] = 'ok';
else $response['result'] = 'error';

header("Content-type: application/json; charset=utf-8");
header('Access-Control-Allow-Origin: *');

echo json_encode($response);

?>