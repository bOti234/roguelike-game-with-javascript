<?php
	session_start();

	include("../connect.php");

	// Email cím egyediség ellenőrzés
	$hiba=0;
	$vissza_email = $kapcsolat->query("select * from users where email='".$_POST["email"]."'");
	
	if( mysqli_num_rows($vissza_email)==1 )
	{
		$hiba=1;
		
		header("Location:index.php?uzi=Someone is already using this email!");
	}
	
	if($hiba==0)
	{
		$pcs="insert into users ( usernev , jelszo , email)
		values(
		'".$_POST["nev"]."',
		'".md5($_POST["jelszo"])."',
		'".$_POST["email"]."')";
		
		if( $kapcsolat->query( $pcs ) )
		{
			$vissza=$kapcsolat->query("select * from users where usernev='".$_POST["nev"]."' and jelszo='".md5($_POST["jelszo"])."'");
			
			if( mysqli_num_rows( $vissza ) > 0 )
			{
				$sor=mysqli_fetch_assoc($vissza);
			
				$_SESSION["user_adatok"]=$sor;
			
				$valasz["uzenet"]="1";
			}
		}
		else
		{
			print("Something went wrong!");
		}
		print json_encode( $valasz );
	}
?>



