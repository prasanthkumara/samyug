<?php
require_once("../../config/helper.php");
require_once("../classes/User.class.php");

$helper=new Helper();
$userObj=new User();

$result=$userObj->listUsers($_POST);
echo json_encode($result);
?>