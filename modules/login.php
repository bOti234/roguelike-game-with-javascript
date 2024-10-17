<?php
	session_start();
	
	if( isset( $_GET["logout"]) ) session_unset();

?>
<div id="szurkehatter"></div>
<div id="toplista"></div>
<div id="userdoboz" style="position:absolute; top:55px; left:10px; z-index:1000; -webkit-user-select:none;">
	<?php
		if( isset($_SESSION["user_adatok"]) )
		{
			print("<div id='felhasznalo' style=' border:3px solid black; -webkit-user-select:none; border-radius:10px; background:#421111; padding:7px; color:gold;'>Logged in as: ".$_SESSION["user_adatok"]["usernev"]."<br><a href='modules/logout.php' id='kilepesgomb' style='color:white; -webkit-user-select:none;'>Logout</a></div>");
		}
		else
		{
	?>
	<div id="regszoveg">
		<button id="signinredirectgomb" style="-webkit-user-select:none;">Sign in</button>
		<br>
		You don't have an account? 
		<br>
		<button id="regredirectgomb" style="-webkit-user-select:none;">Register now!</button>
	</div>
	<div id="belepestarto" style="position:absolute; top:-250px; left:0px; width:220px; height:163px; z-index:1001; border:3px solid black; border-radius:10px; background:#421111; padding:7px; color:gold;">
		<input type="text" id="felh" placeholder="Player name...">
		<br>
		<input type="password" class="pass" id="pass" placeholder="Password...">
		<br>
		<button id="belepgomb">Login</button>
		<br>
		<div class="visszagomb"><<<</div>
	</div>
	<div id="regisztraciotarto" style="position:absolute; top:-360px; left:0px; width:220px; height:276px; z-index:1001; border:3px solid black; border-radius:10px; background:#421111; padding:7px; color:gold;">

		<input type="text" class="felh" id="felh2" placeholder="Player name">
		<br>
		<input type="password" class="pass" id="pass1" placeholder="Password">
		<br>
		<input type="password" class="pass" id="pass2" placeholder="Password again">
		<br>
		<input type="text" id="email" placeholder="Email">
		<br>
		<button id="reggomb" >Register</button>
		<br>
		<div class="visszagomb"><<<</div>
	</div>
	<?php
		}	
	?>			
</div>
	<?php
		if( isset($_SESSION["user_adatok"]) )
		{
			print("<div id='scoreboard' style='position:absolute; top:4.7%; left:80%; width:18%;  min-height:30%; z-index:1001; border:3px solid black; border-radius:10px; background:#421111; padding:7px; color:gold;'><h1 style='text-align:center'>Scoreboard</h1><div id='sajat_pontszam_nev' style='float:left; color:white;'>Your highscore as ".$_SESSION["user_adatok"]["usernev"].":</div><div id='sajat_pontszam' style='float:right; color:white;'>".$_SESSION["user_adatok"]["highscore"]."</div><br></div>");
		}
		else
		{
	?>
	<div id='scoreboard' style='position:absolute; top:4.7%; left:80%; width:18%;  min-height:30%; z-index:1001; border:3px solid black; border-radius:10px; background:#421111; padding:7px; color:gold;'>
	<h1 style='text-align:center'>Scoreboard</h1>
	</div>
	<?php
		}	
	?>
<div id="logoTarto"><img id="logoKep" src="images/logo.png"></div>
<button class="belepes" id="jatek_start_gomb" style="-webkit-user-select:none;">Play</button>
<div class="belepes" id="keptarto">
<?php
	$mappa=opendir("../images/character");
	
	$szamlalo = -2;
	
	while($fajl=readdir($mappa) )
	{
		$szamlalo++;
		if(($fajl != ".") and ($fajl != "..") and ($fajl != "Thumbs.db"))
		{
			print("<img src='images/character/".$fajl."' id='cKep".$szamlalo."' data-bonus='b_".$szamlalo."' class='cKep'>");
		}
	}
?>
</div>
<div id="kepstatok">
<div class="kepstatszoveg" style="color:blue;"> Blue: +2 mana regeneration.</div>
<div class="kepstatszoveg" style="color:darkgreen;"> Green: +5 maximum health.</div>
<div class="kepstatszoveg" style="color:red;"> Red: +2 damage.</div>
<div class="kepstatszoveg" style="color:white;"> White: +15% movement speed.</div>
</div>
<div id="controlsDoboz" style="position:absolute; top:50%; left:0.52%; width:23%; height:46%; z-index:1001; border:3px solid black; border-radius:10px; background:#421111; padding:7px; color:gold;">
<h1 style="text-align:center">Controls</h1>
<br>
<p>Movement: left mouse button</p>
<br>
<p>Opening/closing the skill tree : R<br>Opening/closing the ability shop : T<br>Teleport (only when learned) : Q<br>Smoke bomb (only when learned) : W<br>Ritual (only when learned) : E</p>
<br>
<p>Casting the abilities: 1 to 6<br>You can hold the numbers down, to see the range of the ability.</p>
<br>
</div>
<div id="GameplayDoboz" style="position:absolute; top:50%; left:75%; width:23%; height:46%; z-index:1001; border:3px solid black; border-radius:10px; background:#421111; padding:7px; color:gold;">
<h1 style="text-align:center">Gameplay</h1>
<p>Goal: survive as long as you can!<br>You have to kill the red circles or else they will touch and kill you.<br>Learn new skills and abilities that will help you survive.</p>
<p>Mechanics: In each wave more and more enemies will spawn.<br>The longer you survive, the stronger and faster are the enemies.</p>
<p>You can unlock a new ability on every fourth level, but you can always check, which ability you will get.<br>The stronger skills cost more, and cannot be learned until the weaker ones are.</p>
<p>Be quick! The enemies will instantly spawn when you start a game, or a nother wave starts.</p>
<p>Pick a skin, write your nickname in the text box, and start the game!<p>
</div>