<?php

require_once 'config.php';
require_once 'sql.php';

$db = Sql::app();
$id = (int) $_GET['id'];
$note = $db->selectOne("SELECT id, title, description FROM note WHERE id = ?", array($id));

header("Content-type: application/json; charset=utf-8");
header('Access-Control-Allow-Origin: *');

echo json_encode($note);

?>