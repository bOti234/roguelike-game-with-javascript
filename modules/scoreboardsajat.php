<?php

include("../connect.php");

$vissza=$kapcsolat->query("select * from users where usernev='".$_POST["nev"]."'");

$valasz=array();

while( $sor = mysqli_fetch_assoc( $vissza ) )
{
	array_push( $valasz , $sor );
}

print( json_encode( $valasz ) );

?>