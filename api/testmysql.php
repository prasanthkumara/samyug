<?php
require_once("../config/helper.php");

$helper=new helper();

var_dump($helper->listTable(sprintf("SELECT * FROM users WHERE first_name LIKE '%%%s%%'","prasanth")))
?>