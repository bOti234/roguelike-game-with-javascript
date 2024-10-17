<?php

	include("../connect.php");
	
	$vissza= $kapcsolat ->query("SELECT * FROM scoreboard ORDER BY score DESC LIMIT 0.05");
	
	$valasz=array();
	
	if( mysqli_num_rows( $vissza ) > 0 )
	{
		while( $sor=mysqli_fetch_assoc( $vissza ) )
		{
			array_push( $valasz , $sor );
		}
		$valasz["uzenet"]="1";
	}
	else
	$valasz["uzenet"]=$kapcsolat;
	
	print json_encode( $valasz );
?>