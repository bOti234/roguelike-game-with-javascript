<!doctype html>
<html>
	<head>
		<title>
			mage.io
		</title>
		
		<meta charset="utf-8">
		
		<script type="text/javascript" src="jquery/jquery-1.8.2.js"></script>
		
		<script type="text/javascript" src="jquery/jquery-ui-1.9.1.custom.js"></script>
		
		<link rel="stylesheet" type="text/css" href="jquery/jquery-ui-1.9.1.custom.js">
		
		<link rel="stylesheet" type="text/css" href="css/main.css">
		
		<script type="text/javascript" src="js/mage.js"></script>
		
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

	</head>

	<body>
		<div id="tartalom">
			<div id="monitorLogin"></div>
			<div id="monitorHats"></div>
			<div id="monitorIndicator"></div>
			<div id="monitorSpell"></div>
			
			<canvas id="canvas" width="1920" height="1140"></canvas>
			
			<div id="skill_tree" class="ablak"></div>
			<div id="ability_lista" class="ablak"></div>
			
			<div id="ability_doboz">
				<?php
					for($i=1; $i<7; $i++)
					{
						print("<div class='ability_holder' id='ab_holder_".$i."'></div>");
					}
				?>
			</div>
			<div id="vegsoSkill_doboz">
				<div class="vegsoSkill" id="tornado_doboz"></div>
				<div class="vegsoSkill" id="smoke_doboz"></div>
				<div class="vegsoSkill" id="manabarrier_doboz"></div>
				<div class="vegsoSkill" id="ritual_doboz"></div>
			</div>
			<div id="level_min_doboz"></div>
			
			<div id="csik_doboz">
				<div class='csik' id='shield_bar' style='border:2px solid #bbbbbb; background:#cccccc; display:none'>
					<div class="ertekek" id="shield_ertek"></div>
				</div>
				<div class="csik" id="hp_bar" style="border:2px solid #bd5859; background:#f66868">
					<div class="ertekek" id="hp_ertek"></div>
				</div>
				<div class="csik" id="mana_bar" style="border:2px solid #0085a8; background:#00b2e1">
					<div class="ertekek" id="mana_ertek"></div>
				</div>
				<div class="csik" id="xp_bar" style="border:2px solid black; background:#ead266; width:1%">
					<div class="ertekek" id="xp_ertek"></div>
				</div>
			</div>
			<div id="csik_doboz_hatter">
				<div class="csik" id="shield_bar_hatter" style="border:2px solid black; background:black; display:none"></div>
				<div class="csik" id="hp_bar_hatter" style="border:2px solid #bd5859; background:black"></div>
				<div class="csik" id="mana_bar_hatter" style="border:2px solid #0085a8; background:black"></div>
				<div class="csik" id="xp_bar_hatter" style="border:2px solid black; background:black"></div>
			</div>
			<div id="nagy_wave_mutato_hatter"></div>
			<div id="scoremutato" style="position:absolute; z-index:99999; left:18%;"></div>
		</div>
		<div id="szurkehatter2" style="display:none;"></div>
		<div id="monitorDead" style="display:none;"></div>
	</body>
</html>