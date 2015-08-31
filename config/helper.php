<?php
require_once("config.php");

Class helper
{
	public function connectDB()
	{
		$mysqli = new mysqli(MYSQL_HOST, MYSQL_USERNAME, MYSQL_PASSWORD,MYSQL_DATABASE);
		if ($mysqli->connect_errno) {
		    return  $this->formatError("Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error);
		}

		return $mysqli;
	}

	public function listTable($query)
	{
		error_log($query);
		$mysqli=$this->connectDB();
		
		$rows=$mysqli->query($query);

		if (!$rows) 
		{
		    return $this->formatError($mysqli->error);
		}

		$result=array();
		while($row=$rows->fetch_assoc())
		{
			$result[]=$row;
		}

		return $result;
	}

	public function getRow($query)
	{
		$mysqli=$this->connectDB();
		
		$rows=$mysqli->query($query);

		if (!$rows) 
		{
		    return $this->formatError($mysqli->error);
		}

		$result=$rows->fetch_assoc();

		return $result;
	}

	public function formatError($message)
	{
		return array("error"=>$message);
	}
}
?>