<?php
	session_start();
	
	if( isset( $_GET["logout"]) ) session_unset();

?>

<div>
	<?php
	if( isset($_SESSION["user_adatok"]) )
	{
		
	?>
	<h1>You died!</h1>
	<p>
	<div class="halalScoremutatoMost"></div>
	your high score is:<br><br>
	<div id="halalScoremutatoHigh" style="color:white;">
	<?php
	print("".$_SESSION["user_adatok"]["highscore"]."");
	?>
	</div><br>
	Do you want to overwrite it?</p>
	<button class="scoreLementGomb" id="lementIgen">Yes</button>
	<button class="scoreLementGomb restartGomb" id="lementNem">No</button>
	<?php
	}
	else
	{
	?>

	<h1>You died!</h1>
	<p><div class="halalScoremutatoMost"></div>
	You can make an account and save your score next time! </p>
	<button id="restartHaLoggedOut" class="restartGomb">Restart</button>
	<?php
	}
	?>
</div>
