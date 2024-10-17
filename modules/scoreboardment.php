<?php
	session_start();

	include("../connect.php");

	// Email cím egyediség ellenőrzés
	
	$vissza_nev = $kapcsolat->query("select * from scoreboard where playername='".$_SESSION["user_adatok"]["usernev"]."'");
	
	if( mysqli_num_rows($vissza_nev)==1 )
	{
		$kapcsolat->query("update scoreboard set score='".$_POST["score"]."' where playername='".$_SESSION["user_adatok"]["usernev"]."'");
		$valasz["uzenet"]="1";
	}
	else
	{
		$pcs="insert into scoreboard ( playername, score )
		values(
		'".$_SESSION["user_adatok"]["usernev"]."',
		'".$_POST["score"]."')";
		if($kapcsolat->query($pcs))
		{
			$valasz["uzenet"]="1";
		}
	}
	
	$kapcsolat->query("update users set highscore='".$_POST["score"]."' where usernev='".$_SESSION["user_adatok"]["usernev"]."'");
	
	
	
	
	print json_encode( $valasz );
?>



