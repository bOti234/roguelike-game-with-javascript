<?php
	session_start();

	include("../connect.php");
	
	//$valasz["uzenet"] = "Teszt"; // A tömb tartalmaz egy uzenet nevű adattagot, aminek a tartalma a "Teszt"
	
	
	$hatter=1;
	$vissza=$kapcsolat->query("select * from users where usernev='".$_POST["nev"]."' and jelszo='".md5($_POST["jelszo"])."'");

	if( mysqli_num_rows( $vissza ) > 0 )
	{
		$sor=mysqli_fetch_assoc($vissza);
		
		$_SESSION["user_adatok"]=$sor;
		
		$valasz["uzenet"]="1";
		
	}
	else
	$valasz["uzenet"]="Wrong player name or password!";
	//header("Location:ajax_beleptetes.php?uzi=Sikertelen belépés!");
	print json_encode( $valasz );
?>