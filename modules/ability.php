<?php

include("../connect.php");

$vissza=$kapcsolat->query("select * from abilities");

$valasz=array();

while( $sor = mysqli_fetch_assoc( $vissza ) )
{
	array_push( $valasz , $sor );
}

print( json_encode( $valasz ) );

?>