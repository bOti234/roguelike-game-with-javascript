var nemplayer = true;
var adminBelepve = false;
var bogyo = [];
var enemy = [];
var enemyHat = [];
var enemyHP = [];
var player;
var IceTrap;
var EarthQuake;
var CloneIndicator;
var Clone;
var Teleport;
var TpVegpont;
var TpVegpontX;
var TpVegpontY;
var skillTreeMegjelent = false;
var AbListaMegjelent = false;
var ablakMegnyitva1 = false;
var ablakMegnyitva2 = false;
var level = 1;
var skill_points = 4;
var maxHP = 100;
var hp_visual = 94;
var hp_ertek = 100;
var shield_visual = 80;
var shield_ertek = 0;
var maxShield = 0;
var damage = 5;
var mana_visual = 94;
var mana_ertek = 100;
var manaBonus = mana_ertek*0.1;
var manaRegen = 1;
var manaRegenBonus = manaRegen*2;
var MaxMana = 100;
var xp_visual = 94;
var xp_ertek = 1;
var xp_gap = 100;
var xp_bonus_bogyo = 1;
var xp_bonus_enemy = 1;
var rajzoltHat;
var alfa = 180;
var gamma = 180;
var delta = 180;
var epsilon = [180,180,180,180,180,180,180,180,180,180,180,180,180,180,180];
var KnewX = 0;
var KnewY = 0;
var FiftyPosX = 0;
var FiftyPosY = 0;
var GameKezdodhet = false;
var loginName;
var requestAnimationFrame = window.requestAnimationFrame ;
window.requestAnimationFrame = requestAnimationFrame;
var WaveSzam = 1;
var scorepoint = 0;

var spellMegNincsBetoltve = true;
var SPELL_ID = [0,0,0,0,0,0];
var SPELL_DAMAGE = [0,0,0,0,0,0];
var SPELL_COST = [0,0,0,0,0,0];
var SPELL_EFFECT = [0,0,0,0,0,0];
var SPELL_ICON = [0,0,0,0,0,0];
var SPELL_INDICATOR = [0,0,0,0,0,0];
var SPELL_LEVELMIN = [0,0,0,0,0,0];
var spellX;
var spellY;
var spellSpeed = 4;
var Cooldown = 
{
	IceSpell:0,
	FireBall:0,
	Tornado:0,
	Lifesteal:0,
	Earthquake:0,
	Clone:0,
	Teleport:1,
	Smoke:2,
	Ritual:1,
	ManaBarrier:1,
	playerTouch:0,
	IceSpellMarSebzett:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	TornadoMarSebzett:0,
	LifestealMarSebzett:0,
	EarthQuakeMarSebzett:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
};
var indicator;
var IndicatorLathato = false;
var CloneIndicatorLathato = false;
var TeleportCounter = 0;
var spellKey = 0;
var BonusDamage = 0;
var BonusFrom50 = 0;
var CritChance = 0;
var ManaSteal = false;
var BonusDamageProcent = 1;
var spell_cost_reduction = 0;

var gameReady = true;
var posX = $(window).width()/2;
var posY = $(window).height()/2;
var newX = $(window).width()/2;
var newY = $(window).height()/2;
var velX = 0;
var velY = 0;
var speed = 4;
var moveSpeed = speed*0.1;
var mozgatas = false;

var enemyX = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var enemyAlive = [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
var enemyY = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var etx = [enemyX,enemyX,enemyX,enemyX,enemyX,enemyX,enemyX,enemyX,enemyX,enemyX,enemyX,enemyX,enemyX,enemyX,enemyX];
var ety = [enemyY,enemyY,enemyY,enemyY,enemyY,enemyY,enemyY,enemyY,enemyY,enemyY,enemyY,enemyY,enemyY,enemyY,enemyY];
var evelX = [enemyX,enemyX,enemyX,enemyX,enemyX,enemyX,enemyX,enemyX,enemyX,enemyX,enemyX,enemyX,enemyX,enemyX,enemyX];
var evelY = [enemyY,enemyY,enemyY,enemyY,enemyY,enemyY,enemyY,enemyY,enemyY,enemyY,enemyY,enemyY,enemyY,enemyY,enemyY];
var edist = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var espeed = [2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5,];
var enemyDamage = WaveSzam;



// Jaték indítása, login

$(document).ready(
function()
{
	$.get("modules/login.php", function( vissza )
	{
		$("#adminTools_doboz").hide();
		$("#csik_doboz").hide();
		$("#csik_doboz_hatter").hide();
		$("#ability_doboz").hide();
		$("#vegsoSkill_doboz").hide();
		$("#monitorLogin").html( vissza );
		scoreBoardLehiv();
		GameKezdodhet = false;
		
		$("#keptarto").hover(
		function()
		{
			$("#kepstatok").show();
		},
		function()
		{
			$("#kepstatok").hide();
		});
		
		$(".cKep").click(
		function()
		{
			$(this).attr( "id", "hat" );
			$(this).removeClass("cKep");
			$(".cKep").hide();
			$(this).addClass("cKep");
			$(this).css(
			{
				"margin":"5px",
				"width":"150px",
				"height":"179px",
				"border":"3px solid gold",
			});
			if( $(this).data("bonus") == "b_1" )	// Setting the bonus of the different hat types
			{
				manRegen = 3;
			}
			else if( $(this).data("bonus") == "b_2" )
			{
				hp_ertek = 105;
				maxHP = 105;
			}
			else if( $(this).data("bonus") == "b_3" )
			{
				BonusDamage = 2;
			}
			else
			{
				speed = speed + speed*0.15;
			}
		});
		
		$("#signinredirectgomb").click(	// Animating the sign in and sign up boxes
		function()
		{
			$("#belepestarto").animate(
			{
			"top":"0px"
			},1500);
			
			$("#regszoveg").animate(
			{
			"opacity":"0"
			},700);
		});
		
		$("#regredirectgomb").click(
		function()
		{
			$("#regisztraciotarto").animate(
			{
			"top":"0px"
			},1500);
			
			$("#regszoveg").animate(
			{
			"opacity":"0"
			},700);
		});
		
		$(".visszagomb").click(
		function()
		{
			$("#belepestarto").animate(
			{
			"top":"-250px"
			},1500);
			
			$("#regisztraciotarto").animate(
			{
			"top":"-360px"
			},1500);
			
			$("#regszoveg").animate(
			{
			"opacity":"1"
			},1850);
		});
		
		$("#reggomb").click(	// Signing up
		function()
		{
			if( $("#pass1").val() == $("#pass2").val() )
			{
				if( $("#pass1").val() !="" && $("#felh2").val() !="" && $("#email").val() !="" )
				{
					$.ajax(
					{
						url:"modules/regment.php"
						,
						type:"post"
						,
						dataType:"json" 
						,
						data:
						{
							// Küldendő adatok
							"nev":$("#felh2").val().trim() , "jelszo":$("#pass1").val().trim() , "email":$("#email").val().trim()// trim -> előtte és mögötte eltávolítja a szóközöket
						}
						,
						success:function( valasz )
						{
							if( valasz.uzenet=="1" )
							{
								loginName = $("#felh2").val().trim();
								beleptetes( $("#felh2").val().trim() );
							}
							else alert( valasz.uzenet );
						}
					});
				}
			}
			else
			{
				alert("The passwords don't match!");
			}
		});
		
		$("#belepgomb").click(	// Signing in
		function()
		{
			$.ajax(
			{
				url:"modules/belepellenor.php"
				,
				type:"post" // küldés módja
				,
				dataType:"json" // válasz formátuma
				,
				data:
				{
					// Küldendő adatok
					"nev":$("#felh").val().trim() , "jelszo":$("#pass").val().trim() // trim -> előtte és mögötte eltávolítja a szóközöket és new line-okat
				}
				,
				success:function( valasz ) // Amikor a válasz megérkezett szerver oldalról
				{
					if( valasz.uzenet=="1" )
					{
						beleptetes( $("#felh").val().trim() );
					}
					else alert( valasz.uzenet );
				}
			});
		});

		$("#jatek_start_gomb").click(	// Pressing the start button
		function()
		{
			$("#hat").removeClass("cKep");
			if( $("#cKep1").hasClass("cKep") && $("#cKep2").hasClass("cKep") && $("#cKep3").hasClass("cKep") && $("#cKep4").hasClass("cKep") )
			{
				$("#cKep1").attr( "id", "hat" );
				$("#hat").removeClass("cKep");
				var hat = document.getElementById("hat");
				manaRegen = 3;
			}
			StartZaGame();
			$("#monitorLogin").hide();
		});
	});
});

function scoreBoardLehiv()	// Getting the scoreboard
{
	$.ajax(
	{
		url:"modules/scoreboardlehiv.php"
		,
		type:"post"
		,
		dataType:"json" 
		,
		data:
		{
			
		}
		,
		success:function( valasz )
		{
			if( valasz.uzenet=="1" )
			{
				var helyezes = 1;
				var scorelista = $("<ol class='scorelista'>").appendTo("#scoreboard");
				$.each( valasz , function( idx , item )
				{
					var helyezet_darab=$("<li id='helyezes_"+helyezes+"' class='egy_helyezet'><div id='jatekosnev_"+item.id+"' class='egy_nev' style='float:left'>"+item.playername+"</div><div id='score_"+item.id+"' class='egy_score' style='float:right'>"+item.score+"</div></li><br>").appendTo( scorelista );
					helyezes++;
					$("#helyezes_6").remove();
		
				});
			}
			else alert( valasz.uzenet );
		}
	});
}

function beleptetes( aktuser )	// End of logging in -> reloads page with login data
{
	$("#userdoboz").empty();
	$("<div id='felhasznalo' style='border:3px solid black; border-radius:10px; background:#421111; padding:7px; color:gold;'>Logged in as: "+aktuser+"<br><a href='modules/logout.php' id='kilepesgomb' style='color:white;'>Logout</a></div>").appendTo( ("#userdoboz") );
	location.reload();
}

function StartZaGame()
{
	$("#csik_doboz").show();	// Showing the gam HUD
	$("#csik_doboz_hatter").show();
	$("#ability_doboz").show();
	$("#vegsoSkill_doboz").show();
/*	if( adminBelepve || $("#adminTools_doboz").hasClass("adminBelepve") )	// Admin tools -> not implemented
	{
		$("#adminTools_doboz").show(); 
	}*/
	
	GameKezdodhet = true;
	fiftyFifty();
	for(i=0; i<enemyX.length; i++)	// The number of enemies are hardcoded (which is insane :DD) I am not proud of this
	{
		enemyX[i] =(Math.random()*1000*FiftyPosX);
		enemyY[i] =(Math.random()*1000*FiftyPosY);
	}
	nemplayer = false;
	setComponent();		// Setting up player
	nemplayer = true;	
	setComponent();		// Setting up enemies
	isGameReady();		
	skillek_vissza();	// Getting skills
	abilityk_vissza();	// Getting Abilities
	$( hp_ertek ).appendTo("#hp_ertek");
	$( mana_ertek ).appendTo("#mana_ertek");
	$( xp_ertek ).appendTo("#xp_ertek");
	$( "<div id='level'>Level "+level+"</div>" ).appendTo("#tartalom");
	$("<div id='skill_point_doboz'>Skill points: "+skill_points+"</div>").appendTo("#skill_tree");
	mana_toltodes();	// Setting up mana regen :DD
	AdminTools();		// Setting up admin functions (not working since I don't implemented the html for it)
}

function AdminTools()
{
	$("#hpAdmin").click(
	function()
	{
		hp_ertek = maxHP; 
		hp_visual = 94;
		shield_ertek = maxShield; 
		shield_visual = 94;
		
		$("#hp_ertek").clear();
		$("#shield_ertek").clear();
		$( hp_ertek ).appendTo("#hp_ertek");
		$( shield_ertek ).appendTo("#shield_ertek");
		
		$("#hp_ertek").css( { "color":"#980000" } );
		$("#hp_bar").css(
		{
			"width":+hp_visual+"%"
		});
		$("#shield_bar").css(
		{
			"width":+shield_visual+"%"
		});
	});
	
	$("#manaAdmin").click(
	function()
	{
		manaRegen = 999; 
	});
	
	$("#damageAdmin").click(
	function()
	{
		BonusDamage = 999; 
	});
	
	$("#skillpontAdmin").click(
	function()
	{
		skill_points = 75; 
		$("#skill_point_doboz").empty();
		$("#skill_point_doboz").append("<div>Skill points: "+skill_points+"</div>");
	});
	
	$("#levelAdmin").click(
	function()
	{
		level = 25; 
		$("#level").empty("#level");
		$( "<div id='level2'>Level "+level+"</div>" ).appendTo("#level");
	});
}

function fiftyFifty()	// Location randomiser
{
	if( Math.random() < 0.5 )
	{
		FiftyPosX = 1;
	}
	else
	{
		FiftyPosX = -1;
	}
	if( Math.random() < 0.5 )
	{
		FiftyPosY = 1;
	}
	else
	{
		FiftyPosY = -1;
	}
}

// Jaték indítása, login vége



//Egér, enemy mozgatás

function movePlayer() 
{

	var tx = newX - posX,	// NewX = xPos of where I clicked, posX = xPos of the player
	ty = newY - posY,		// NewY = yPos of where I clicked, posY = yPos of the player
	dist = Math.sqrt(tx * tx + ty * ty);	// Pithagoras to get the diagonal
	
  if (dist >= speed) // IF THE DISTANCE IS BIGGER THAN THE SPEED?????? :DDDDDDD WHAT It doesn't have to be speed, it should only be 1. if it's less than one, t / dist will be too big
  {
    velX = (tx / dist) * speed;	// Calculating the step we make (for some reason I named it velocity, but it's not that)
    velY = (ty / dist) * speed;
    posX += velX;		// Moving the player
    posY += velY;
  }
  return dist;		// Finnally the first return after 480 lines
}

function isGameReady()
{
  if(gameReady)	// This is super unnececary
  {
    drawCanvas();		// Setting up the board
  } 
  else 
  {
    setTimeout(isGameReady, 100);
  }
}

function moveEnemy(i)	// Works same as the movePlayer, but the destination is not the click but the player
{
	//for(i=0; i<enemy.length; i++)
	//{
		etx[i] = player.x - enemyX[i];
		ety[i] = player.y - enemyY[i];
		edist[i] = Math.sqrt(etx[i] * etx[i] + ety[i] * ety[i]);
		
		if (edist[i] >= espeed[i]) 
		{
			evelX[i] = (etx[i] / edist[i]) * espeed[i];	
			evelY[i] = (ety[i] / edist[i]) * espeed[i];
			enemyX[i] += evelX[i];
			enemyY[i] += evelY[i];
		}
		return edist[i];
	//}
}

function getMousePos(c, e)
{
    var rect = c.getBoundingClientRect(), // abs. size of element
		scaleX = c.width / rect.width,    // relationship bitmap vs. element for X
		scaleY = c.height / rect.height;  // relationship bitmap vs. element for Y
	var ligma = 
	{
		x: (e.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
		y: (e.clientY - rect.top) * scaleY     // been adjusted to be relative to element
	};
    return ligma;	// What a telling variable name wow
	
}

document.onmousedown = function(e)
{
	if( GameKezdodhet )
	{
		var c = document.getElementById("canvas");
		var p = c.getContext("2d");
		var ePos = getMousePos(c, e);
		//$("#monitorLogin").append( ePos.x ," , ", ePos.y, " ");
		/*if( ( posX > -1020 && posY > -1430 ) && ( posX < 3000 && posY < 3415 ) )
		{*/
			
			if( ( ePos.x > $(window).width()/100*18.5 || ePos.y > 513 || ablakMegnyitva1==false ) && ( ePos.x < $(window).width()/100*81 || ePos.y > 513 || ablakMegnyitva2==false ) && Cooldown["Tornado"] == 0 )
			{		// If the mose click is in the game area
				if( mozgatas )
				{
					newX=posX;
					newY=posY;
					newX = ePos.x - $(window).width()/2 + newX;
					newY = ePos.y - $(window).height()/2 + newY;
				}
				else
				{
					newX = ePos.x;
					newY = ePos.y;
					mozgatas=true;
				}
				
			}
			if( Cooldown["Smoke"]==3 )
			{
				posX=player.x;
				posY=player.y;
				newX=posX;
				newY=posY;
			}
			//$("#monitorLogin").append( ePos.x ," , ", ePos.y, " ");
		//}
	}
}

//Egér, enemy mozgatás vége



// Karakter forgatás, szögek felvétele

document.onmousemove = function(e)
{
	var c = document.getElementById("canvas");
	var p = c.getContext("2d");
	var ePos = getMousePos(c, e);
	
	if( mozgatas )
	{
		KnewX = ePos.x - $(window).width()/2 + player.x;
		KnewY = ePos.y - $(window).height()/2 + player.y;
		//$("#monitorLogin").append( ePos.x ," , ", ePos.y, " ");
	}
	else
	{
		KnewX = ePos.x;
		KnewY = ePos.y;
	}
}

function moveCamera()
{
	var 
	oldalX = 0,
	oldalY = player.y - KnewY,
	oldalHossz = Math.sqrt( oldalX * oldalX + oldalY * oldalY );
	
	var
	atloX = KnewX - player.x,
	atloY = player.y - KnewY,
	atloHossz = Math.sqrt( atloX * atloX + atloY * atloY );
	
	var SinArany = oldalHossz/atloHossz;
	
	if( KnewX > player.x && KnewY < player.y )
	{
		alfa = -( ( Math.PI/2 ) + ( Math.asin( SinArany ) ) );
	}
	else if( KnewX <= player.x && KnewY > player.y )
	{
		alfa =( Math.PI/2 ) - ( Math.asin( SinArany ) );
	}
	else if( KnewX > player.x && KnewY > player.y )
	{
		alfa = -( ( Math.PI/2 ) - ( Math.asin( SinArany ) ) );
	}
	//else if( KnewX = player.x && KnewY > player.y )
	//{
	//	alfa = 0;
	//}
	else
	alfa = ( Math.PI/2 ) + ( Math.asin( SinArany ) );

	
}

function setGamma()
{
	var 
	ColdalX = 0,
	ColdalY = Clone.y - KnewY,
	ColdalHossz = Math.sqrt( ColdalX * ColdalX + ColdalY * ColdalY );
	
	var
	CatloX = KnewX - Clone.x,
	CatloY = Clone.y - KnewY,
	CatloHossz = Math.sqrt( CatloX * CatloX + CatloY * CatloY );
	
	var CSinArany = ColdalHossz/CatloHossz;
	
	if( KnewX > Clone.x && KnewY < Clone.y )
	{
		gamma = -( ( Math.PI/2 ) + ( Math.asin( CSinArany ) ) );
	}
	else if( KnewX <= Clone.x && KnewY > Clone.y )
	{
		gamma =( Math.PI/2 ) - ( Math.asin( CSinArany ) );
	}
	else if( KnewX > Clone.x && KnewY > Clone.y )
	{
		gamma = -( ( Math.PI/2 ) - ( Math.asin( CSinArany ) ) );
	}
	//else if( KnewX = Clone.x && KnewY > Clone.y )
	//{
	//	gamma = 0;
	//}
	else
	gamma = ( Math.PI/2 ) + ( Math.asin( CSinArany ) );

}

function setDelta()
{
	var 
	ToldalX = 0,
	ToldalY = indicator.y - KnewY,
	ToldalHossz = Math.sqrt( ToldalX * ToldalX + ToldalY * ToldalY );
	
	var
	TatloX = KnewX - indicator.x,
	TatloY = indicator.y - KnewY,
	TatloHossz = Math.sqrt( TatloX * TatloX + TatloY * TatloY );
	
	var TSinArany = ToldalHossz/TatloHossz;
	
	if( KnewX > indicator.x && KnewY < indicator.y )
	{
		delta = -( ( Math.PI/2 ) + ( Math.asin( TSinArany ) ) );
	}
	else if( KnewX <= indicator.x && KnewY > indicator.y )
	{
		delta =( Math.PI/2 ) - ( Math.asin( TSinArany ) );
	}
	else if( KnewX > indicator.x && KnewY > indicator.y )
	{
		delta = -( ( Math.PI/2 ) - ( Math.asin( TSinArany ) ) );
	}
	//else if( KnewX = indicator.x && KnewY > indicator.y )
	//{
	//	delta = 0;
	//}
	else
	delta = ( Math.PI/2 ) + ( Math.asin( TSinArany ) );

}

function setEpsilon(i)
{
	var 
	EoldalX = 0,
	EoldalY = enemy[i].y - player.y,
	EoldalHossz = Math.sqrt( EoldalX * EoldalX + EoldalY * EoldalY );
	
	var
	EatloX = player.x - enemy[i].x,
	EatloY = enemy[i].y - player.y,
	EatloHossz = Math.sqrt( EatloX * EatloX + EatloY * EatloY );
	
	var ESinArany = EoldalHossz/EatloHossz;
	
	if( player.x > enemy[i].x && player.y < enemy[i].y )
	{
		epsilon[i] = -( ( Math.PI/2 ) + ( Math.asin( ESinArany ) ) );
	}
	else if( player.x <= enemy[i].x && player.y > enemy[i].y )
	{
		epsilon[i] =( Math.PI/2 ) - ( Math.asin( ESinArany ) );
	}
	else if( player.x > enemy[i].x && player.y > enemy[i].y )
	{
		epsilon[i] = -( ( Math.PI/2 ) - ( Math.asin( ESinArany ) ) );
	}
	//else if( player.x = enemy[i].x && player.y > enemy[i].y )
	//{
	//	epsilon[i] = 0;
	//}
	else
	epsilon[i] = ( Math.PI/2 ) + ( Math.asin( ESinArany ) );
}

// Karakter forgatás, szögek felvétele vége



// SZÍV ( mozgás update-elése, animálása )

function drawCanvas() 
{
	if( gameReady )
	{
		var c = document.getElementById("canvas");
		var p = c.getContext("2d");
		movePlayer();
		moveCamera();
		if( posX <= -1740 || posY <= -1260 || posX >= 1740 || posY >= 1260 ) 
		{
			posX=player.x;
			posY=player.y;
			newX=posX;
			newY=posY;
		}
		player.update(posX, posY);
		if( IndicatorLathato )
		{
			indicator.update();
		}
		if( CloneIndicatorLathato )
		{
			CloneIndicator.update();
		}
		if( Cooldown["Clone"] > 0 )
		{
			Clone.update();
		} 
		rajzoltHat.update();
		//p.fillRect(posX, posY, 10, 10);
		requestAnimationFrame(drawCanvas);
		//mana_toltodes();
		if( 
		enemyAlive[0] == 0 && // XD
		enemyAlive[1] == 0 && 
		enemyAlive[2] == 0 && 
		enemyAlive[3] == 0 && 
		enemyAlive[4] == 0 && 
		enemyAlive[5] == 0 && 
		enemyAlive[6] == 0 && 
		enemyAlive[7] == 0 && 
		enemyAlive[8] == 0 && 
		enemyAlive[9] == 0 && 
		enemyAlive[10] == 0 && 
		enemyAlive[11] == 0 
		)
		{
			WaveSzam++;
			spawnEnemies();
		}
	}
	else
	{
		var c = document.getElementById("canvas");
		var p = c.getContext("2d");
		//p.clearRect(player.x-100, player.y-100, 300, 300);
		p.fillStyle="darkgreen";
		p.fillRect(-3000, -3000, 6000, 6000 );
	}
}

function CreateBorderEsHatter()
{
	var c = document.getElementById("canvas");
	var p = c.getContext("2d");
	img = new Image();
	img.src="images/hatter.jpg";
	var ptrn = p.createPattern(img, 'repeat'); // Create a pattern with this image, and set it to "repeat".
	p.fillStyle = "darkgreen";

	//p.fillRect(0, 0, c.width, c.height);
	p.fillRect(-3000, -3000, 6000, 6000 );
	//p.fillRect(0 - $(window).width()/2 + newX, 0 - $(window).height()/2 + newY, c.width, c.height); // context.fillRect(x, y, width, height);
	CreateBorder();
//	p.fillStyle = ptrn;
//	p.fillRect(-519, -879, 3018, 3798);
	//requestAnimationFrame(drawCanvas);
}

function CreateBorder()
{
	var c = document.getElementById("canvas");
	var p = c.getContext("2d");
	p.beginPath();
	p.fillStyle="black";
	p.fillRect(-1746, -1266, 3492, 2532 );
	img = new Image();
	img.src="images/hatter.jpg";
	var ptrn = p.createPattern(img, 'repeat'); // Create a pattern with this image, and set it to "repeat".
	p.fillStyle = ptrn;
	p.fillRect(-1740, -1260, 3480, 2520);
	p.stroke();
}

// SZÍV VÉGE



// KeyUp parancsok

$(document).on("keyup" , function(e)
{
	if( GameKezdodhet )
	{
		if( e.keyCode==82 )
		{
			if( skillTreeMegjelent )
			{
			//	$("#skillvonaltarto").hide();
				ablakMegnyitva1 = false;
				$("#skill_tree").animate(
				{
					"left":"-20%"
				}
				,
				1150
				,
				function()
				{
					$("#skill_tree").css(
					{ 
						"display":"none"
					});
					//$(".skillek").hide();
					setTimeout( function()
					{
						skillTreeMegjelent = false;
					} , 100 );
				});
				/*$(".egy_skill").animate(
				{
					"width":"0%"
				}, 1300);*/
			}
			else
			{
				ablakMegnyitva1 = true;
				//$(".skillek").show();
				$("#skill_tree").css( { "display":"block" } );
				$("#skill_tree").animate(
				{
					"left":"10"
				}
				,
				1150
				,
				function()
				{
				//	$("#skillvonaltarto").show();
					setTimeout( function()
					{
						skillTreeMegjelent = true;
					} , 100 );
				});
				/*$(".egy_skill").animate(
				{
					"width":"20%"
				}, 1000);*/
			}
		}
		if( e.keyCode==84 )
		{
			if( AbListaMegjelent )
			{
				ablakMegnyitva2 = false;
				$("#ability_lista").animate(
				{
					"left":"101%"
				}
				,
				1150
				,
				function()
				{
					$("#ability_lista").css(
					{ 
						"display":"none"
					});
					//$(".skillek").hide();
					setTimeout( function()
					{
						AbListaMegjelent = false;
					} , 100 );
				});
				/*$(".egy_skill").animate(
				{
					"width":"0%"
				}, 1300);*/
			}
			else
			{
				ablakMegnyitva2 = true;
				//$(".skillek").show();
				$("#ability_lista").css( { "display":"block" } );
				$("#ability_lista").animate(
				{
					"left":"81%"
				}
				,
				1150
				,
				function()
				{
					setTimeout( function()
					{
						AbListaMegjelent = true;
					} , 100 );
				});
				/*$(".egy_skill").animate(
				{
					"width":"20%"
				}, 1000);*/
			}
		}
		//Teleport
		if( e.keyCode==81 )
		{
			if( Cooldown["Teleport"] == 0 || Cooldown["Teleport"] == 3 )
			{
				Cooldown["Teleport"] = 2;
				$("#tornado_doboz").empty();
				CreateBorderEsHatter();
				for(var i=0; i<bogyo.length; i++)
				{
					bogyo[i].update();
				}
				posX = KnewX;
				posY = KnewY;
				newX = KnewX;
				newY = KnewY;
				var c = document.getElementById("canvas");
				var p = c.getContext("2d");
				p.translate(player.x-KnewX, player.y-KnewY);
				player.x = KnewX;
				player.y = KnewY;
				p.beginPath();
				p.arc(player.x, player.y, player.r , 0 , 2 * Math.PI);
				p.fillStyle = "#e8a87b";
				p.fill();
				p.stroke();
				speed = speed + 0.25;
				setTimeout(
				function()
				{
					Cooldown["Teleport"] = 0;
					$("#tornado_doboz").append("<img src='upload/skills/teleport.png' style='height:100%; padding-left:5px;'>");
				}, 60000);
			}
		}
		//Smoke bomb
		if( e.keyCode==87 )
		{
			if( Cooldown["Smoke"] == 0 )
			{
				Cooldown["Smoke"] = 3;
				$("#smoke_doboz").empty();
				$("#monitorSpell").append("<img src='images/smokescreen.gif' id='smokescreen' style='-webkit-user-select:none; position:absolute; z-index:9999;'>");
				$("#smokescreen").css(
				{
					"top":$(window).height()/2-170,
					"left":$(window).width()/2-140,
					"width":"300px",
				});
				for(i = 0; i < enemy.length; i++)
				{
					espeed[i] = 0.75;
				}
				posX=player.x;
				posY=player.y;
				newX=posX;
				newY=posY;
				setTimeout(
				function()
				{
					monitor_urit();
					Cooldown["Smoke"] = 1;
				}, 1500);
				setTimeout(
				function()
				{
					Cooldown["Smoke"] = 2;
					for(i = 0; i < enemy.length; i++)
					{
						espeed[i] = 2.5 + WaveSzam*0.25;
					}
				}, 4500);
				setTimeout(
				function()
				{
					Cooldown["Smoke"] = 0;
					$("#smoke_doboz").append("<img src='upload/skills/smokebomb.png' style='height:100%; padding-left:4px;'>");
				}, 55000);
			}
		}
		if( e.keyCode==69 )
		{
			if( Cooldown["Ritual"] == 0 )
			{
				Cooldown["Ritual"] = 1;
				$("#ritual_doboz").empty();
				CritChance = 1;
				ManaSteal = true;
				setTimeout(
				function()
				{
					ManaSteal = false;
					CritChance = 0.3;
				},10000);
				setTimeout(
				function()
				{
					Cooldown["Ritual"] = 0;
					$("#ritual_doboz").append("<img src='upload/skills/ritual.png' style='height:100%; padding-left:5px;'>");
				},70000);
			}
		}
		if( e.keyCode==49 || e.keyCode==50 || e.keyCode==51 || e.keyCode==52 || e.keyCode==53 || e.keyCode==54)
		{
			//$("#monitorLogin").append( e.key )
			SpellCast( e.key );
			IndicatorLathato = false;
			CloneIndicatorLathato = false;
		}
	}
});

// KeyUp parancsok vége



// KeyDown parancsok

$(document).on("keydown" , function(e)
{
	if( e.keyCode==49 || e.keyCode==50 || e.keyCode==51 || e.keyCode==52 || e.keyCode==53 || e.keyCode==54)
	{
		//$("#monitorLogin").append( e.key );
		IndicatorCast( e.key );
	}
	if( e.keyCode==48 )
	{
	/*	if( Cooldown["Teleport"] != 1 )
		{
			spellKey = 0;
			$("#monitorIndicator").append("<img src='upload/indicators/IndicatorTeleport1.png' id='IndicatorTeleport1' style='position:absolute; z-index:9999; display:none'>");
			var indicatorKep = document.getElementById("IndicatorTeleport1");
			indicator = new component();
			IndicatorLathato = true;
		}*/
	}
});

// KeyDown parancsok vége



// Indicator mutatása

function IndicatorCast( key )
{
	if( SPELL_LEVELMIN[key] > level )
	{
		$("#level_min_doboz").empty();
		$("#level_min_doboz").show();
		$("#level_min_doboz").append("You can only cast this ability, when you reached level "+SPELL_LEVELMIN[key]+"!");
	}
	else
	{
		if( SPELL_ID[key] == 5 )
		{
			spellEarthQuake_cast( key );
		}
		else if( SPELL_ID[key] == 6 )
		{
			CloneIndicator = new component();
			CloneIndicatorLathato = true;
		}
		else
		{
			spellKey = SPELL_ID[key];
			$("#monitorIndicator").append("<img src='upload/indicators/"+SPELL_INDICATOR[key]+"' id='spellIndicator_"+SPELL_ID[key]+"' style='position:absolute; z-index:9999; display:none'>");
			/*$("#spellIndicator_"+SPELL_ID[key]+"").css(
			{
				"top":$(window).height()/2,
				"left":$(window).width()/2,
				"width":"40px",
			});*/
			var indicatorKep = document.getElementById("spellIndicator_"+SPELL_ID[key]+"");
			indicator = new component();
			//p.drawImage(indicatorKep, $(window).width(), $(window).height());
			IndicatorLathato = true;
		}
	}
}

// Indicator mutatása vége



// Spell cast

function mana_toltodes()
{
	if( mana_ertek < MaxMana )
	{
		mana_visual = ( mana_visual ) + ( manaRegen * 94 / MaxMana  );
		mana_ertek = mana_ertek + manaRegen;
		if( mana_ertek > MaxMana )
		{
			mana_ertek = MaxMana;
		}
		if( mana_visual > 94 )
		{
			mana_visual = 94;
		}
		$("#mana_bar").animate(
		{
		"width":+mana_visual+"%"
		}, 850, "linear");
		if( mana_ertek <= MaxMana / 2 )
		{
			$("#mana_ertek").css( { "color":"white" } );
		}
		else
		{
			$("#mana_ertek").css( { "color":"darkblue" } );
		}
		$("#mana_ertek").empty();
		$("#mana_ertek").append( mana_ertek );
		
		$("#hp_bar").css(
		{
			"width":+hp_visual+"%"
		});
		$("#shield_bar").css(
		{
			"width":+shield_visual+"%"
		});
	}
	setTimeout(
	function()
	{
		mana_toltodes();
	}, 1000 );
}

function SpellCast( key )
{
	if( SPELL_LEVELMIN[key] > level )
	{
		$("#level_min_doboz").hide();
	}
	else
	{
		$("#level_min_doboz").hide();
		for(var i = 0; i < 10 ; i++)
		{
			if( i == key  )
			{
				if( SPELL_ID[key] == 1 && Cooldown["FireBall"] == 0 )
				{
					spellFireBall_cast( key );
				}
				else if( SPELL_ID[key] == 2 && Cooldown["IceSpell"] == 0 )
				{
					spellIceTrap_cast( key );
				}
				else if( SPELL_ID[key] == 3 && Cooldown["Tornado"] == 0 )
				{
					spellTornado_cast( key );
				}
				else if( SPELL_ID[key] == 4 && Cooldown["Lifesteal"] == 0 )
				{
					spellLifeSteal_cast( key );
				}
				else if( SPELL_ID[key] == 6 && Cooldown["Clone"] == 0)
				{
					spellClone_cast( key );
				}
			}
		}
	}
}

function mana_levon( key )
{
	if( SPELL_ID[key] == 4 )
	{
		SPELL_COST[key] = Math.ceil( (mana_ertek/2) );
	}
	
	mana_visual = ( mana_visual ) - ( ( SPELL_COST[key] - spell_cost_reduction ) / mana_ertek * mana_visual );
	mana_ertek = mana_ertek - SPELL_COST[key] + spell_cost_reduction;
	$("#mana_bar").animate(
	{
		"width":+mana_visual+"%"
	}, 550, "linear");
	if( mana_ertek <= MaxMana / 2 )
	{
		$("#mana_ertek").css( { "color":"white" } );
	}
	else
	{
		$("#mana_ertek").css( { "color":"darkblue" } );
	}
	$("#mana_ertek").empty();
	$("#mana_ertek").append( mana_ertek );
}

function Manasteal()
{
	if( ManaSteal )
	{
		mana_visual = mana_visual + ( ( MaxMana - mana_ertek ) / ( 5 * mana_ertek ) * mana_visual );
		mana_ertek = Math.ceil(mana_ertek + ( MaxMana - mana_ertek )/5);
		$("#mana_bar").animate(
		{
			"width":+mana_visual+"%"
		}, 550, "linear");
		if( mana_ertek <= MaxMana / 2 )
		{
			$("#mana_ertek").css( { "color":"white" } );
		}
		else
		{
			$("#mana_ertek").css( { "color":"darkblue" } );
		}
		$("#mana_ertek").empty();
		$("#mana_ertek").append( mana_ertek );
	}
}

function shieldVisszatolt()
{
	if( maxShield != 0 )
	{
		shield_visual = ( shield_visual ) + ( Math.ceil( ( maxShield - shield_ertek ) / 10) * ( 80 / maxShield ) ); 
		
		shield_ertek = Math.ceil(shield_ertek + ( ( maxShield - shield_ertek )/10 ));
		$("#shield_bar").css(
		{
			"width":+shield_visual+"%"
		});
		$("#shield_ertek").empty();
		$("#shield_ertek").append(shield_ertek);
	}
}

function monitor_urit()
{
	if( Cooldown["FireBall"] == 0 && Cooldown["IceSpell"] == 0 && Cooldown["Tornado"] == 0 )
	{
		//fireballEnd();
		$("#monitorSpell").empty();
	}
	else
	{
		setTimeout(
		function()
		{
			monitor_urit();
		},3000);
	}
}

function spellFireBall_cast( key )
{
	if( SPELL_COST[key] - spell_cost_reduction < mana_ertek )
	{
		$("#mana_bar").stop();
		mana_levon( key );
		IndicatorLathato = false;
		Cooldown["FireBall"] = 1;
		if( Cooldown["Clone"] > 0  )
		{
			cloneFireBall_cast( key );
		}
		$("#monitorSpell").append("<img src='upload/abilities/"+SPELL_ICON[key]+"' id='spellKep_"+SPELL_ID[key]+"' style='-webkit-user-select:none; position:absolute; z-index:9999;'>");
		$("#spellKep_"+SPELL_ID[key]+"").css(
		{
			"top":$(window).height()/2-20,
			"left":$(window).width()/2-20,
			"width":"40px",
		});
		var beta = alfa + (Math.PI);
		document.getElementById("spellKep_"+SPELL_ID[key]+"").style.transform = "rotate("+beta+"rad)";
		
		var Stx = KnewX - player.x,
			Sty = KnewY - player.y,
			Sdist = Math.sqrt(Stx * Stx + Sty * Sty);

		if (Sdist >= spellSpeed) 
		{
			var SvelX = (Stx / Sdist) * spellSpeed;
			var SvelY = (Sty / Sdist) * spellSpeed;
			SpellX = SvelX*55 + $(window).width()/2-20;
			SpellY = SvelY*55 + $(window).height()/2-20;
		}
		
		$("#spellKep_"+SPELL_ID[key]+"").animate(
		{
			"top":SpellY,//-($(window).height()/2-20),
			"left":SpellX,//-($(window).width()/2-20),
		}
		,
		{
			queue:false
			,
			duration:600
			,	
			progress:function()
			{
				for(var i=0; i<enemy.length; i++ )
				{
					if
					( 
						( 
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("top") + parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("height") )/2 ) > enemy[i].y - enemy[i].r - ( player.y - parseInt( $(window).height()/2 ) ) && 
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("left") + parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("width") )/2 ) > enemy[i].x - enemy[i].r - ( player.x - parseInt( $(window).width()/2 ) ) 
						) 
						&& 
						( 
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("top") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("height") )/2 < enemy[i].y + enemy[i].r - ( player.y - parseInt( $(window).height()/2 ) ) && 
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("left") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("width") )/2 < enemy[i].x + enemy[i].r - ( player.x - parseInt( $(window).width()/2 ) ) 
						) 
					)
					{
						$("#spellKep_"+SPELL_ID[key]+"").remove();
						var FireBallDamage = Math.ceil( ( parseInt( SPELL_DAMAGE[key] ) + BonusDamage ) * BonusDamageProcent );
						
						if( mana_ertek + SPELL_COST[key] - spell_cost_reduction > MaxMana/2 )
						{
							FireBallDamage = FireBallDamage + BonusFrom50;
							if( CritChance >= Math.random() )
							{
								FireBallDamage = FireBallDamage * 2;
								enemyHP[i] = enemyHP[i] - FireBallDamage;
								FireBallDamage = FireBallDamage / 2;
								FireBallDamage = FireBallDamage - BonusFrom50;
							}
							else
							{
								enemyHP[i] = enemyHP[i] - FireBallDamage;
								FireBallDamage = FireBallDamage - BonusFrom50;
							}
						}
						else
						{ 
							if( CritChance >= Math.random() )
							{
								FireBallDamage = FireBallDamage * 2;
								enemyHP[i] = enemyHP[i] - FireBallDamage;
								FireBallDamage = FireBallDamage / 2;
							}
							else
							{ enemyHP[i] = enemyHP[i] - FireBallDamage; }
						}
						if( enemyHP[i] <= 0 )
						{
							Manasteal();
							enemyAlive[i] = 0;
							xpGive(i);
							enemy[i].r = 0;
						}
					}
				}
			}
			,
			easing:"linear"
			,
			complete:function()
			{
				$("#spellKep_"+SPELL_ID[key]+"").remove();
				Cooldown["FireBall"] = 0;
				IndicatorLathato = false;
				monitor_urit();
			}
		});
		
	}
}

function cloneFireBall_cast( key )
{
	$("#monitorSpell").append("<img src='upload/abilities/"+SPELL_ICON[key]+"' id='spellKep_"+SPELL_ID[key]+10+"' style='-webkit-user-select:none; position:absolute; z-index:9999;'>");
	$("#spellKep_"+SPELL_ID[key]+10+"").css(
	{
		"top":Clone.y - 20 - player.y + $(window).height()/2,
		"left":Clone.x - 20 - player.x + $(window).width()/2,
		"width":"40px",
	});
	setGamma();
	var beta = gamma + (Math.PI);
	document.getElementById("spellKep_"+SPELL_ID[key]+10+"").style.transform = "rotate("+beta+"rad)";
	
	var Stx = KnewX - Clone.x,
		Sty = KnewY - Clone.y,
		Sdist = Math.sqrt(Stx * Stx + Sty * Sty);

	if (Sdist >= spellSpeed) 
	{
		var SvelX = (Stx / Sdist) * spellSpeed;
		var SvelY = (Sty / Sdist) * spellSpeed;
		SpellX = SvelX*55 + Clone.x - 20 - player.x + $(window).width()/2;
		SpellY = SvelY*55 + Clone.y - 20 - player.y + $(window).height()/2;
	}
	
	$("#spellKep_"+SPELL_ID[key]+10+"").animate(
	{
		"top":SpellY,//-($(window).height()/2-20),
		"left":SpellX,//-($(window).width()/2-20),
	}
	,
	{
		queue:false
		,
		duration:600
		,	
		progress:function()
		{
			for(var i=0; i<enemy.length; i++ )
			{
				if
				( 
					( 
						parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("top") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("height") )/2 > enemy[i].y - enemy[i].r - ( player.y - parseInt( $(window).height()/2 ) ) && 
						parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("left") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("width") )/2 > enemy[i].x - enemy[i].r - ( player.x - parseInt( $(window).width()/2 ) ) 
					) 
					&& 
					( 
						parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("top") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("height") )/2 < enemy[i].y + enemy[i].r - ( player.y - parseInt( $(window).height()/2 ) ) && 
						parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("left") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("width") )/2 < enemy[i].x + enemy[i].r - ( player.x - parseInt( $(window).width()/2 ) ) 
					) 
				)
				{
					$("#spellKep_"+SPELL_ID[key]+10+"").remove();
					var FireBallDamage = Math.ceil( ( parseInt( SPELL_DAMAGE[key] ) + BonusDamage ) * BonusDamageProcent );
					
					if( mana_ertek + SPELL_COST[key] - spell_cost_reduction > MaxMana/2 )
					{
						FireBallDamage = FireBallDamage + BonusFrom50;
						if( CritChance >= Math.random() )
						{
							FireBallDamage = FireBallDamage * 2;
							enemyHP[i] = enemyHP[i] - FireBallDamage;
							FireBallDamage = FireBallDamage / 2;
							FireBallDamage = FireBallDamage - BonusFrom50;
						}
						else
						{
							enemyHP[i] = enemyHP[i] - FireBallDamage;
							FireBallDamage = FireBallDamage - BonusFrom50;
						}
					}
					else
					{ 
						if( CritChance >= Math.random() )
						{
							FireBallDamage = FireBallDamage * 2;
							enemyHP[i] = enemyHP[i] - FireBallDamage;
							FireBallDamage = FireBallDamage / 2;
						}
						else
						{ enemyHP[i] = enemyHP[i] - FireBallDamage; }
					}
					if( enemyHP[i] <= 0 )
					{
						Manasteal();
						enemyAlive[i] = 0;
						xpGive(i);
						enemy[i].r = 0;
					}
				}
			}
		}
		,
		easing:"linear"
		,
		complete:function()
		{
			$("#spellKep_"+SPELL_ID[key]+10+"").remove();
		}
	});
}

function spellIceTrap_cast( key )
{
	if( SPELL_COST[key] - spell_cost_reduction < mana_ertek )
	{
		IndicatorLathato = false;
		$("#mana_bar").stop();
		mana_levon( key );
		Cooldown["IceSpell"] = 1;
		$("#monitorSpell").append("<img src='upload/abilities/"+SPELL_ICON[key]+"' id='spellKep_"+SPELL_ID[key]+"' style='-webkit-user-select:none; position:absolute; display:none; z-index:9999; width:8.6%;'>");
		IceTrap = new component();
		IceTrap.x = KnewX;
		IceTrap.y = KnewY;
		setTimeout(
		function()
		{
			$("#spellKep_"+SPELL_ID[key]+"").remove();
			Cooldown["IceSpell"] = 0;
			IndicatorLathato = false;
			//mana_toltodes();
			monitor_urit();
			for(i=0;i<enemy.length;i++)
			{
				espeed[i] = 2.5 + WaveSzam*0.25;
				Cooldown["IceSpellMarSebzett"][i] = 0;
			}
		},4000);
	}
}

function spellTornado_cast( key )
{
	if( SPELL_COST[key] - spell_cost_reduction < mana_ertek )
	{
		$("#mana_bar").stop();
		newX = player.x;
		newY = player.y;
		mana_levon( key );
		IndicatorLathato = false;
		Cooldown["Tornado"] = 1;
		if( Cooldown["Clone"] > 0 && level >= 22 )
		{
			cloneTornado_cast( key );
		}
		$("#monitorSpell").append("<img src='upload/abilities/"+SPELL_ICON[key]+"' id='spellKep_"+SPELL_ID[key]+"' style='-webkit-user-select:none; position:absolute; z-index:9999;'>");
		$("#spellKep_"+SPELL_ID[key]+"").css(
		{
			"top":$(window).height()/2-70,
			"left":$(window).width()/2-40,
			"width":"80px",
		});
		//var beta = alfa + (Math.PI);
		//document.getElementById("spellKep_"+SPELL_ID[key]+"").style.transform = "rotate("+beta+"rad)";
		var Stx = KnewX - player.x,
			Sty = KnewY - player.y,
			Sdist = Math.sqrt(Stx * Stx + Sty * Sty);

		if (Sdist >= spellSpeed)
		{
			var SvelX = (Stx / Sdist) * spellSpeed;
			var SvelY = (Sty / Sdist) * spellSpeed;
			SpellX = SvelX*80 + $(window).width()/2-40;
			SpellY = SvelY*80 + $(window).height()/2-100;
		}
		
		$("#spellKep_"+SPELL_ID[key]+"").animate(
		{
			"top":SpellY,//-($(window).height()/2-20),
			"left":SpellX,//-($(window).width()/2-20),
			"width":"130px",
		}
		,
		{
			queue:false
			,
			duration:2200
			,
			progress:function()
			{
				for(var i=0; i<enemy.length; i++ )
				{
					if // Hitbox :)
					( 
						( 
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("top") ) < enemy[i].y + enemy[i].r - player.y + parseInt( $(window).height()/2 ) && 
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("left") ) < enemy[i].x + enemy[i].r  - player.x + parseInt( $(window).width()/2 ) &&
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("top") ) > enemy[i].y - enemy[i].r - player.y + parseInt( $(window).height()/2 ) &&
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("left") ) < enemy[i].x + enemy[i].r  - player.x + parseInt( $(window).width()/2 ) 
						) 
						|| 
						(
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("top") ) < enemy[i].y + enemy[i].r - player.y + parseInt( $(window).height()/2 ) && 
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("left") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("width") ) > enemy[i].x - enemy[i].r - player.x + parseInt( $(window).width()/2 ) && 
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("top") ) > enemy[i].y - enemy[i].r - player.y + parseInt( $(window).height()/2 ) && 
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("left") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("width") ) < enemy[i].x + enemy[i].r - player.x + parseInt( $(window).width()/2 )
						) 
						||
						( 
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("top") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("height") ) > enemy[i].y - enemy[i].r - player.y + parseInt( $(window).height()/2 ) && 
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("left") ) < enemy[i].x + enemy[i].r - player.x + parseInt( $(window).width()/2 ) &&
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("top") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("height") ) < enemy[i].y + enemy[i].r - player.y + parseInt( $(window).height()/2 ) && 
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("left") ) > enemy[i].x - enemy[i].r - player.x + parseInt( $(window).width()/2 ) 
						) 
						|| 
						(
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("top") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("height") ) > enemy[i].y - enemy[i].r - player.y + parseInt( $(window).height()/2 ) && 
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("left") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("width") ) > enemy[i].x - enemy[i].r - player.x + parseInt( $(window).width()/2 ) &&
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("top") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("height") ) < enemy[i].y + enemy[i].r - player.y + parseInt( $(window).height()/2 ) && 
							parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("left") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("width") ) < enemy[i].x + enemy[i].r - player.x + parseInt( $(window).width()/2 ) 
						)
					)
					{
						enemyY[i] = parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("top") ) + player.y - parseInt( $(window).height()/2 );
						enemyX[i] = parseInt( $("#spellKep_"+SPELL_ID[key]+"").css("left") ) + 20 + enemy[i].r + player.x - parseInt( $(window).width()/2 );
						//$("#spellKep_"+SPELL_ID[key]+"").remove();
						if( Cooldown["TornadoMarSebzett"] == 0 )
						{
							Cooldown["TornadoMarSebzett"] = 1;
							var TornadoDamage = Math.ceil( ( parseInt( SPELL_DAMAGE[key] ) + BonusDamage ) * BonusDamageProcent );
							if( mana_ertek + SPELL_COST[key] - spell_cost_reduction > MaxMana/2 )
							{
								TornadoDamage = TornadoDamage + BonusFrom50;
								if( CritChance >= Math.random() )
								{
									TornadoDamage = TornadoDamage * 2;
									enemyHP[i] = enemyHP[i] - TornadoDamage;
									TornadoDamage = TornadoDamage / 2;
									TornadoDamage = TornadoDamage - BonusFrom50;
								}
								else
								{
									enemyHP[i] = enemyHP[i] - TornadoDamage;
									TornadoDamage = TornadoDamage - BonusFrom50;
								}
							}
							else
							{ 
								if( CritChance >= Math.random() )
								{
									TornadoDamage = TornadoDamage * 2;
									enemyHP[i] = enemyHP[i] - TornadoDamage;
									TornadoDamage = TornadoDamage / 2;
								}
								else
								{ enemyHP[i] = enemyHP[i] - TornadoDamage; }
							}
							if( enemyHP[i] <= 0 )
							{
								Manasteal();
								enemyAlive[i] = 0;
								xpGive(i);
								enemy[i].r = 0;
							}
						}
					}	
				}
			}
			,
			easing:"linear"
			,
			complete:function()
			{
				$("#spellKep_"+SPELL_ID[key]+"").remove();
				Cooldown["Tornado"] = 0;
				IndicatorLathato = false;
				monitor_urit();
				Cooldown["TornadoMarSebzett"] = 0;
			}
		});
	}
}

function cloneTornado_cast( key )
{
	$("#monitorSpell").append("<img src='upload/abilities/"+SPELL_ICON[key]+"' id='spellKep_"+SPELL_ID[key]+10+"' style='-webkit-user-select:none; position:absolute; z-index:9999;'>");
		$("#spellKep_"+SPELL_ID[key]+10+"").css(
		{
			"top":Clone.y - 40 - player.y + $(window).height()/2,
			"left":Clone.x - 40 - player.x + $(window).width()/2,
			"width":"80px",
		});
		//var beta = alfa + (Math.PI);
		//document.getElementById("spellKep_"+SPELL_ID[key]+10+"").style.transform = "rotate("+beta+"rad)";
		var Stx = KnewX - Clone.x,
			Sty = KnewY - Clone.y,
			Sdist = Math.sqrt(Stx * Stx + Sty * Sty);

		if (Sdist >= spellSpeed)
		{
			var SvelX = (Stx / Sdist) * spellSpeed;
			var SvelY = (Sty / Sdist) * spellSpeed;
			SpellX = SvelX*80 + Clone.x - 40 - player.x + $(window).width()/2;
			SpellY = SvelY*80 + Clone.y - 100 - player.y + $(window).height()/2;
		}
		
		$("#spellKep_"+SPELL_ID[key]+10+"").animate(
		{
			"top":SpellY,//-($(window).height()/2-20),
			"left":SpellX,//-($(window).width()/2-20),
			"width":"130px",
		}
		,
		{
			queue:false
			,
			duration:2200
			,
			progress:function()
			{
				for(var i=0; i<enemy.length; i++ )
				{
					if // Hitbox :)
					( 
						( 
							parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("top") ) < enemy[i].y + enemy[i].r - player.y + parseInt( $(window).height()/2 ) && 
							parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("left") ) < enemy[i].x + enemy[i].r  - player.x + parseInt( $(window).width()/2 ) &&
							parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("top") ) > enemy[i].y - enemy[i].r - player.y + parseInt( $(window).height()/2 ) &&
							parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("left") ) < enemy[i].x + enemy[i].r  - player.x + parseInt( $(window).width()/2 ) 
						) 
						|| 
						(
							parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("top") ) < enemy[i].y + enemy[i].r - player.y + parseInt( $(window).height()/2 ) && 
							parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("left") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("width") ) > enemy[i].x - enemy[i].r - player.x + parseInt( $(window).width()/2 ) && 
							parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("top") ) > enemy[i].y - enemy[i].r - player.y + parseInt( $(window).height()/2 ) && 
							parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("left") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("width") ) < enemy[i].x + enemy[i].r - player.x + parseInt( $(window).width()/2 )
						) 
						||
						( 
							parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("top") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("height") ) > enemy[i].y - enemy[i].r - player.y + parseInt( $(window).height()/2 ) && 
							parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("left") ) < enemy[i].x + enemy[i].r - player.x + parseInt( $(window).width()/2 ) &&
							parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("top") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("height") ) < enemy[i].y + enemy[i].r - player.y + parseInt( $(window).height()/2 ) && 
							parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("left") ) > enemy[i].x - enemy[i].r - player.x + parseInt( $(window).width()/2 ) 
						) 
						|| 
						(
							parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("top") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("height") ) > enemy[i].y - enemy[i].r - player.y + parseInt( $(window).height()/2 ) && 
							parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("left") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("width") ) > enemy[i].x - enemy[i].r - player.x + parseInt( $(window).width()/2 ) &&
							parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("top") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("height") ) < enemy[i].y + enemy[i].r - player.y + parseInt( $(window).height()/2 ) && 
							parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("left") ) + parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("width") ) < enemy[i].x + enemy[i].r - player.x + parseInt( $(window).width()/2 ) 
						)
					)
					{
						enemyY[i] = parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("top") ) + player.y - parseInt( $(window).height()/2 );
						enemyX[i] = parseInt( $("#spellKep_"+SPELL_ID[key]+10+"").css("left") ) + 20 + enemy[i].r + player.x - parseInt( $(window).width()/2 );
						//$("#spellKep_"+SPELL_ID[key]+10+"").remove();
						if( Cooldown["TornadoMarSebzett"] == 0 )
						{
							Cooldown["TornadoMarSebzett"] = 1;
							var TornadoDamage = Math.ceil( ( parseInt( SPELL_DAMAGE[key] ) + BonusDamage ) * BonusDamageProcent );
							if( mana_ertek + SPELL_COST[key] - spell_cost_reduction > MaxMana/2 )
							{
								TornadoDamage = TornadoDamage + BonusFrom50;
								if( CritChance >= Math.random() )
								{
									TornadoDamage = TornadoDamage * 2;
									enemyHP[i] = enemyHP[i] - TornadoDamage;
									TornadoDamage = TornadoDamage / 2;
									TornadoDamage = TornadoDamage - BonusFrom50;
								}
								else
								{
									enemyHP[i] = enemyHP[i] - TornadoDamage;
									TornadoDamage = TornadoDamage - BonusFrom50;
								}
							}
							else
							{ 
								if( CritChance >= Math.random() )
								{
									TornadoDamage = TornadoDamage * 2;
									enemyHP[i] = enemyHP[i] - TornadoDamage;
									TornadoDamage = TornadoDamage / 2;
								}
								else
								{ enemyHP[i] = enemyHP[i] - TornadoDamage; }
							}
							if( enemyHP[i] <= 0 )
							{
								Manasteal();
								enemyAlive[i] = 0;
								xpGive(i);
								enemy[i].r = 0;
							}
						}
					}	
				}
			}
			,
			easing:"linear"
			,
			complete:function()
			{
				$("#spellKep_"+SPELL_ID[key]+10+"").remove();
				Cooldown["Tornado"] = 0;
				IndicatorLathato = false;
				monitor_urit();
				Cooldown["TornadoMarSebzett"] = 0;
			}
		});
}

function spellLifeSteal_cast( key )
{
	if( Cooldown["Clone"] > 0 && level >= 23 )
	{
		if( KnewX < Clone.x + player.r && KnewX > Clone.x - player.r && KnewY < Clone.y + player.r && KnewY > Clone.y - player.r )
		{
			if(  mana_ertek > 45 )
			{
				$("#mana_bar").stop();
				mana_levon( key );
				IndicatorLathato = false;
				Cooldown["Lifesteal"] = 1;
				$("#monitorSpell").append("<img src='upload/abilities/"+SPELL_ICON[key]+"' id='spellKep_"+SPELL_ID[key]+"' style='-webkit-user-select:none; position:absolute; z-index:9999;'>");
				$("#spellKep_"+SPELL_ID[key]+"").css(
				{
					"top":Clone.y - 35 - player.y + $(window).height()/2,
					"left":Clone.x - 35 - player.x + $(window).width()/2,
					"width":"70px",
				});
				
				shieldVisszatolt();
				
				setTimeout(
				function()
				{
					$("#spellKep_"+SPELL_ID[key]+"").remove();
					Cooldown["Lifesteal"] = 0;
					IndicatorLathato = false;
					monitor_urit();
				},500);
			}
		}
	}
	for(var i=0; i<enemy.length; i++ )
	{
		if( KnewX < enemy[i].x + enemy[i].r && KnewX > enemy[i].x - enemy[i].r && KnewY < enemy[i].y + enemy[i].r && KnewY > enemy[i].y - enemy[i].r )
		{
			if(  mana_ertek > 45 && Cooldown["LifestealMarSebzett"] == 0 )
			{
				Cooldown["LifestealMarSebzett"] = 1;
				$("#mana_bar").stop();
				mana_levon( key );
				IndicatorLathato = false;
				Cooldown["Lifesteal"] = 1;
				$("#monitorSpell").append("<img src='upload/abilities/"+SPELL_ICON[key]+"' id='spellKep_"+SPELL_ID[key]+"' style='-webkit-user-select:none; position:absolute; z-index:9999;'>");
				$("#spellKep_"+SPELL_ID[key]+"").css(
				{
					"top":enemy[i].y - 35 - player.y + $(window).height()/2,
					"left":enemy[i].x - 35 - player.x + $(window).width()/2,
					"width":"70px",
				});

				var LifestealDamage = Math.ceil( ( parseInt( SPELL_DAMAGE[key] ) + BonusDamage ) * BonusDamageProcent );
				if( mana_ertek + SPELL_COST[key] - spell_cost_reduction > MaxMana/2 )
				{
					LifestealDamage = LifestealDamage + BonusFrom50;
					if( CritChance >= Math.random() )
					{
						LifestealDamage = LifestealDamage * 2;
						enemyHP[i] = enemyHP[i] - LifestealDamage;
						LifestealDamage = LifestealDamage / 2;
						LifestealDamage = LifestealDamage - BonusFrom50;
					}
					else
					{
						enemyHP[i] = enemyHP[i] - LifestealDamage;
						LifestealDamage = LifestealDamage - BonusFrom50;
					}
				}
				else
				{ 
					if( CritChance >= Math.random() )
					{
						LifestealDamage = LifestealDamage * 2;
						enemyHP[i] = enemyHP[i] - LifestealDamage;
						LifestealDamage = LifestealDamage / 2;
					}
					else
					{ enemyHP[i] = enemyHP[i] - LifestealDamage; }
				}
				if( enemyHP[i] <= 0 )
				{
					Manasteal();
					enemyAlive[i] = 0;
					xpGive(i);
					enemy[i].r = 0;
				}
				
				shieldVisszatolt();
				
				setTimeout(
				function()
				{
					$("#spellKep_"+SPELL_ID[key]+"").remove();
					Cooldown["LifestealMarSebzett"] = 0;
					IndicatorLathato = false;
					monitor_urit();
				},500);
				setTimeout(
				function()
				{
					Cooldown["Lifesteal"] = 0;
				},3500);
				
			}
		}
	}
}

function spellEarthQuake_cast( key )
{
	if( SPELL_COST[key] - spell_cost_reduction < mana_ertek && Cooldown["Earthquake"] == 0 )
	{
		$("#mana_bar").stop();
		mana_levon( key );
		Cooldown["Earthquake"] = 1;
		EarthQuake = new component();
		var CurrestSpeed = speed;
		speed = 2.4;
		setTimeout(
		function()
		{
			for(var i=0; i<enemy.length; i++ )
			{ 
				Cooldown["EarthQuakeMarSebzett"][i] = 0;
				espeed[i] = 2.5 + WaveSzam*0.25;
			}
			speed = CurrestSpeed;
			Cooldown["Earthquake"] = 0;
			monitor_urit();
		},900);
	}
}

function spellClone_cast( key )
{
	if( SPELL_COST[key] - spell_cost_reduction < mana_ertek )
	{
		Cooldown["Clone"] = 1;
		CloneIndicatorLathato = false;
		$("#mana_bar").stop();
		mana_levon( key );
		Clone = new component();
		Clone.x = KnewX;
		Clone.y = KnewY;
		setTimeout(
		function()
		{
			Cooldown["Clone"] = 0;
		},10000);
	}
}
// Spell cast vége



// Component beállítás, frissítés

function setComponent()
{
	
	if( nemplayer )
	{
		var xpoz=$(window).width()/2;
		var ypoz=$(window).height()/2;
		rajzoltHat = new component(xpoz, ypoz);
		for(var i=0; i<75; i++ )
		{
			fiftyFifty();
			var xpoz=Math.round( Math.random() * 1730 * FiftyPosX );
			var ypoz=Math.round( Math.random() * 1250 * FiftyPosY );
			var radius = 15;//Math.round(Math.random()*$(window).height()*0.02);
			/*if( radius > 20 )
			{
				radius = radius-5;
			}
			if( radius < 5 )
			{
				radius = radius+7;
			}*/
			bogyo[i] = new component(xpoz, ypoz, radius);
		}
		for( var i=0; i < 1 + WaveSzam; i++ )
		{
			fiftyFifty();
			var xpoz=Math.round( Math.random() * 1720 * FiftyPosX );
			var ypoz=Math.round( Math.random() * 1240 * FiftyPosY );
			var radius = 32;//Math.round(Math.random()*$(window).height()*0.02);
			/*if( radius > 20 )
			{
				radius = radius-5;
			}
			if( radius < 5 )
			{
				radius = radius+7;
			}*/
			enemy[i] = new component(xpoz, ypoz, radius);
			enemyHat[i] = new component(xpoz, ypoz, radius);
			enemyHP[i] = 25 + (WaveSzam-1)*2;
		}
	}
	else
	{
		var xpoz=$(window).width()/2;
		var ypoz=$(window).height()/2;
		var radius = ypoz*0.05;
		player = new component(xpoz, ypoz, radius);
	}	
}

function spawnEnemies()
{
	$("#nagy_wave_mutato_hatter").show();
	$("#nagy_wave_mutato_hatter").html( "Wave "+WaveSzam+"");
	$("#nagy_wave_mutato_hatter").animate(
	{
		"opacity":"1",
	}
	,
	3000
	,
	function()
	{
		setTimeout(
		function()
		{
			$("#nagy_wave_mutato_hatter").animate(
			{
				"opacity":"0",
			}
			,
			3000
			,
			function()
			{
				$("#nagy_wave_mutato_hatter").hide();
			});
		},2000);
	});
	for( var i=0; i < 1 + WaveSzam && i < 15 ; i++ )
	{
		espeed[i] = 2.5 + WaveSzam*0.25;
		if( i == WaveSzam )
		{
			var xpoz=Math.round(Math.random()*1550*FiftyPosX+1000);
			var ypoz=Math.round(Math.random()*1900*FiftyPosY+1000);
			var radius = 32;
			enemy[i] = new component(xpoz, ypoz, radius);
			enemyHat[i] = new component(xpoz, ypoz, radius);
		}
		else
		{
			fiftyFifty();
			enemy[i].x=Math.round(Math.random()*1550*FiftyPosX+1000);
			enemy[i].y=Math.round(Math.random()*1900*FiftyPosY+1000);
			enemy[i].r= 32;
			enemyAlive[i] = 1;
			enemyX[i]=enemy[i].x;
			enemyY[i]=enemy[i].y;
		}
		enemyHP[i] = 25 + (WaveSzam-1)*3;
	}
}

function component( xpoz, ypoz, radius )
{
	this.x=xpoz;
	this.y=ypoz;
	this.r=radius;

	var c = document.getElementById("canvas");
	var p = c.getContext("2d");
	
	p.beginPath();
	p.arc(this.x, this.y, this.r , 0 , 2 * Math.PI);
	//p.fillStyle = "black";
	//p.fill();
	p.stroke();
	
	this.update = function()
	{
		var c = document.getElementById("canvas");
		var p = c.getContext("2d");
		hat = document.getElementById("hat");
		
		if(this == player)
		{
			CreateBorderEsHatter();
			if( Cooldown["Earthquake"] > 0 )
			{
				EarthQuake.update();
			} 
			for(var i=0; i<bogyo.length; i++)
			{
				bogyo[i].update();
			}
			if( Cooldown["IceSpell"] > 0 )
			{
				IceTrap.update();
			}
			if( Cooldown["Teleport"] > 2 )
			{
				Teleport.update();
				TpVegpont.update();
			}
			
			for(var i=0; i<enemy.length; i++)
			{
				//enemyX=player.x;
				//enemyY=player.y;
				moveEnemy(i);
				enemy[i].update(enemyX[i], enemyY[i]);
			}
			p.translate( this.x-posX, this.y-posY );
			this.x=posX;
			this.y=posY;
			if( Cooldown["Smoke"]==1 )
			{
				p.globalAlpha = 0.7;
				p.beginPath();
				p.arc(this.x, this.y, this.r , 0 , 2 * Math.PI);
				p.fillStyle = "#e8a87b";
				p.fill();
				p.stroke();
				p.globalAlpha = 1;
			}
			else
			{
				p.beginPath();
				p.arc(this.x, this.y, this.r , 0 , 2 * Math.PI);
				p.fillStyle = "#e8a87b";
				p.fill();
				p.stroke();
			}
		}
		else if( this == indicator )
		{
			if(IndicatorLathato)
			{
				if( spellKey == 0 )
				{
					$("#monitorIndicator").append("<img src='upload/indicators/IndicatorTeleport1.png' id='IndicatorTeleport1' style='position:absolute; z-index:9999; display:none'>");
					var indicatorKep = document.getElementById("IndicatorTeleport1");
					p.save();
					p.translate(KnewX, KnewY);
					p.rotate(alfa);
					p.drawImage(indicatorKep, -(indicatorKep.width/2), -(indicatorKep.height/2)+280);
					p.restore();
				}
				if( spellKey == 1 )
				{
					$("#monitorIndicator").empty();
					$("#monitorIndicator").append("<img src='upload/indicators/IndicatorFireball.png' id='spellIndicator_1' style='-webkit-user-select:none; position:absolute; z-index:9999; display:none'>");
					indicatorKep = document.getElementById("spellIndicator_1");
					p.save();
					p.translate(player.x, player.y);
					p.rotate(alfa);
					p.drawImage(indicatorKep, -(indicatorKep.width/2), -(indicatorKep.height/2)+120);
					p.restore();
					if( Cooldown["Clone"] > 0 && level >= 20 )
					{
						setGamma();
						indicatorKep = document.getElementById("spellIndicator_1");
						p.save();
						p.translate(Clone.x, Clone.y);
						p.rotate(gamma);
						p.drawImage(indicatorKep, -(indicatorKep.width/2), -(indicatorKep.height/2)+120);
						p.restore();
					}
				}
				else if( spellKey == 2 )
				{
					$("#monitorIndicator").empty();
					$("#monitorIndicator").append("<img src='upload/indicators/IndicatorCircle.png' id='spellIndicator_2' style='-webkit-user-select:none; position:absolute; z-index:9999; display:none'>");
					indicatorKep = document.getElementById("spellIndicator_2");
					p.save();
					p.translate(KnewX, KnewY);
					p.rotate(alfa);
					p.globalCompositeOperation = 'hard-light';
					p.drawImage(indicatorKep, -(indicatorKep.width/2), -(indicatorKep.height/2));
					p.restore();
					p.globalCompositeOperation = 'source-over';
					if( Cooldown["Clone"] > 0 && level >= 21 )
					{
						p.save();
						p.translate(Clone.x, Clone.y);
						p.globalCompositeOperation = 'hard-light';
						p.drawImage(indicatorKep, -(indicatorKep.width/2), -(indicatorKep.height/2));
						p.restore();
						p.globalCompositeOperation = 'source-over';
					}
				}
				else if( spellKey == 3 )
				{
					$("#monitorIndicator").empty();
					$("#monitorIndicator").append("<img src='upload/indicators/IndicatorTornado.png' id='spellIndicator_3' style='-webkit-user-select:none; position:absolute; z-index:9999; display:none'>");
					indicatorKep = document.getElementById("spellIndicator_3");
					p.save();
					p.translate(player.x, player.y);
					p.rotate(alfa);
					p.globalCompositeOperation = 'luminosity';
					p.drawImage(indicatorKep, -(indicatorKep.width/2), -(indicatorKep.height/2)+175);
					p.restore();
					p.globalCompositeOperation = 'source-over';
					if( Cooldown["Clone"] > 0 && level >= 22 )
					{
						setGamma();
						indicatorKep = document.getElementById("spellIndicator_3");
						p.save();
						p.translate(Clone.x, Clone.y);
						p.rotate(gamma);
						p.globalCompositeOperation = 'luminosity';
						p.drawImage(indicatorKep, -(indicatorKep.width/2), -(indicatorKep.height/2)+175);
						p.restore();
						p.globalCompositeOperation = 'source-over';
					}
				}
				else if( spellKey == 4 )
				{
					$("#monitorIndicator").empty();
					$("#monitorIndicator").append("<img src='upload/indicators/IndicatorLifeSteal.png' id='spellIndicator_4' style='-webkit-user-select:none; position:absolute; z-index:9999; display:none'>");
					indicatorKep = document.getElementById("spellIndicator_4");
					p.save();
					p.translate(KnewX, KnewY);
					p.rotate(alfa);
					p.drawImage(indicatorKep, -(indicatorKep.width/2), -(indicatorKep.height/2));
					p.restore();
				}
			}
		}
		else if( this == IceTrap )
		{
			$("#monitorSpell").append("<img src='upload/abilities/IceTrapSpell.png' id='spellKep_2' style='position:absolute; z-index:9999; display:none; width:8.6%;'>");
			IceTrapKep = document.getElementById("spellKep_2");
			//p.save();
			//p.translate(KnewX, KnewY);
			//p.rotate(alfa);
			/*p.arc(this.x, this.y, IceTrapKep.width/2 , 0 , 2 * Math.PI);
			p.fillStyle = "lightblue";
			p.fill();
			p.globalCompositeOperation = 'luminosity';*/
			p.drawImage(IceTrapKep, this.x-IceTrapKep.width/2, this.y-IceTrapKep.height/2);
			//p.globalCompositeOperation = 'source-over';
			//p.restore();
			if( Cooldown["Clone"] > 0 && level >= 21 )
			{
				$("#monitorSpell").append("<img src='upload/abilities/CloneIceTrapSpell.png' id='spellKep_12' style='position:absolute; z-index:9999; display:none; width:80%;'>");
				var CloneIceTrapKep = document.getElementById("spellKep_12");
				p.drawImage(CloneIceTrapKep, Clone.x-CloneIceTrapKep.width/2, Clone.y-CloneIceTrapKep.height/2);
			}
		}
		else if( this == EarthQuake )
		{
			this.x = player.x;
			this.y = player.y;
			p.beginPath();
			this.r = 375;
			p.globalCompositeOperation = 'hard-light';
			p.arc(this.x, this.y, this.r , 0 , 2 * Math.PI);
			p.fillStyle = "#9c5021";
			p.fill();
			p.stroke();
			p.globalCompositeOperation = 'source-over';
			
			if( Cooldown["Clone"] > 0 && level >= 24 )
			{
				p.beginPath();
				p.globalCompositeOperation = 'hard-light';
				p.arc(Clone.x, Clone.y, Clone.r , 0 , 2 * Math.PI);
				p.fillStyle = "#9c5021";
				p.fill();
				p.stroke();
				p.globalCompositeOperation = 'source-over';
			}
			
		}
		else if( this == CloneIndicator )
		{
			this.x = KnewX;
			this.y = KnewY;
			this.r = 250;
			p.beginPath();
			p.globalCompositeOperation = 'hard-light';
			p.arc(this.x, this.y, this.r , 0 , 2 * Math.PI);
			p.fillStyle = "#7794fc";
			p.fill();
			//p.globalCompositeOperation = 'source-over';
			p.globalCompositeOperation = 'source-over';
			//p.arc(this.x, this.y, 45 , 0 , 2 * Math.PI);
			//p.fillStyle = "white";
			//p.fill();
			p.stroke();
			p.beginPath();
			p.arc(this.x, this.y, player.r, 0 , 2 * Math.PI);
			p.fillStyle = "#c5af73";
			p.fill();
			p.stroke();
		}
		else if( this == Clone )
		{
			this.r = 250;
			p.beginPath();
			p.globalCompositeOperation = 'soft-light';
			p.arc(this.x, this.y, this.r , 0 , 2 * Math.PI);
			p.fillStyle = "blue";
			p.fill();
			//p.globalCompositeOperation = 'source-over';
			p.globalCompositeOperation = 'source-over';
			//p.arc(this.x, this.y, 45 , 0 , 2 * Math.PI);
			//p.fillStyle = "white";
			//p.fill();
			p.stroke();
			p.beginPath();
			p.arc(this.x, this.y, player.r, 0 , 2 * Math.PI);
			p.fillStyle = "#c5af73";
			p.fill();
			p.stroke();
		}
		else if( this == rajzoltHat )
		{
			p.save();
			p.translate(player.x, player.y);
			p.rotate(alfa);
			if( Cooldown["Smoke"]==1 || Cooldown["Smoke"]==3 )
			{
				p.globalAlpha = 0.7;
				p.drawImage(hat, -(hat.width/2), -(hat.height/2));
				p.restore();
				p.globalAlpha = 1;
			}
			else
			{
				p.drawImage(hat, -(hat.width/2), -(hat.height/2));
				p.restore(); 
			}
			if( Cooldown["Clone"] > 0 )
			{
				$("#monitorHats").append("<img src='upload/abilities/clone.png' id='cloneHat' style='-webkit-user-select:none; position:absolute; z-index:9999; display:none'>");
				Clonehat = document.getElementById("cloneHat");
				setGamma();
				p.save();
				p.translate(Clone.x, Clone.y);
				p.rotate(gamma);
				p.drawImage(Clonehat, -(Clonehat.width/2), -(Clonehat.height/2)-10);
				p.restore(); 
			}
		}
		else
		{
			for(i=0; i<bogyo.length; i++)
			{
				if( this==bogyo[i] )
				{
					//this.x=this.x-posX;
					//this.y=this.x-posY;
					if( ( player.x + player.r > this.x && player.x + player.r < this.x + this.r*3 ) && ( player.y + player.r > this.y && player.y + player.r < this.y + this.r*3 ) )
					{
						$("#xp_ertek").empty();
						xp_ertek = xp_ertek + ( ( 12 + WaveSzam * 3 ) * xp_bonus_bogyo );
						xp_ertek = Math.ceil(xp_ertek);
						scorepoint = Math.ceil(scorepoint + ( ( 12 + WaveSzam * 3 ) * xp_bonus_bogyo ) );
						
						if( xp_ertek >= xp_gap )
						{
							xp_ertek = xp_ertek - xp_gap;
							level++;
							skill_points = skill_points + 3;
							$("#skill_point_doboz").empty();
							$("#skill_point_doboz").append("<div>Skill points: "+skill_points+"</div>");
							xp_gap = Math.ceil(xp_gap * 1.15);
							$("#level").empty("#level");
							$( "<div id='level2'>Level "+level+"</div>" ).appendTo("#level");
						}
						xp_visual = xp_ertek/xp_gap*94
						$("#xp_bar").animate({ "width":+xp_visual+"%" }, 1000);
						$( xp_ertek ).appendTo("#xp_ertek");
						$("#scoremutato").show();
						$("#scoremutato").html("Your score: "+scorepoint+"");
						
						if( xp_ertek <= xp_gap/2 )
						{
							$("#xp_ertek").css( { "color":"white" } );
						}
						else
						{
							$("#xp_ertek").css( { "color":"black" } );
						}
						
						p.clearRect(this.x-this.r-1, this.y-this.r-1, this.r*2+2, this.r*2+2)
						this.r=0;
						//setComponent();
					}
					else if( this.r != 0  )
					{
						p.beginPath();
						p.arc(this.x, this.y, this.r , 0 , 2 * Math.PI);
						p.fillStyle = "white";
						p.fill();
						p.stroke();
					}
				}
				else if( this==enemy[i] && this.r != 0 )
				{
					this.x=enemyX[i];
					this.y=enemyY[i];
					p.beginPath();
					p.arc(this.x, this.y, this.r , 0 , 2 * Math.PI);
					p.fillStyle = "red";
					p.fill();
					p.stroke();
					//enemyHat[i].update(i); --> Laggol AF
					p.font = "30px Comic Sans MS";
					p.fillStyle = "white";
					p.fillText( enemyHP[i], this.x-18, this.y+10, );
					p.strokeText( enemyHP[i], this.x-18, this.y+10, );
					//p.restore();
					
					if( Cooldown["IceSpell"]==1 )
					{
						if( ( IceTrap.x + 83 > this.x + this.r && IceTrap.y + 83 > this.y + this.r ) && ( IceTrap.x - 83 < this.x - this.r && IceTrap.y - 83 < this.y - this.r ) )
						{
							espeed[i] = 0.75;
							IceSpelldamageCheck(i);
						}
						if( ( Cooldown["Clone"] > 0 && level >= 21 ) && ( ( Clone.x + Clone.r - 30 > this.x + this.r && Clone.y + Clone.r > this.y + this.r - 30 ) && ( Clone.x - Clone.r + 30 < this.x - this.r && Clone.y - Clone.r + 30 < this.y - this.r ) ) )
						{
							espeed[i] = 0.75;
							IceSpelldamageCheck(i);
						}
					}
					if( Cooldown["Earthquake"] == 1 )
					{
						EarthQuakedamageCheck(i);
						if( Cooldown["Clone"] > 0 && level >= 24 )
						{
							CloneEarthQuakedamageCheck(i);
						}
					}
					
					if( ( player.x + player.r > this.x - this.r + 5 && player.y + player.r > this.y - this.r + 5 ) && ( player.x - player.r < this.x + this.r- 5  && player.y - player.r < this.y + this.r - 5 ) && Cooldown["playerTouch"] == 0 && Cooldown["Smoke"]!=3 && Cooldown["Smoke"]!=1 )
					{
						playerTouchCheck();
					}
				}
				/*else if( this == enemyHat[i] ) ===> Laggol :/
				{
					$("#monitorHats").append("<img src='images/enemyHat.png' id='Ehat' style='-webkit-user-select:none; position:absolute; z-index:9999; display:none'>");
					var Ehat = document.getElementById("Ehat");
					setEpsilon(i);
					p.save();
					p.translate(enemy[i].x , enemy[i].y );
					p.rotate(epsilon[i]);
					p.drawImage(Ehat, -(Ehat.width/2), -(Ehat.height/2));
					p.restore();
				}*/
			}
		}	
	}
}

// Component beállítás, frissítés vége



// rajzolt spellek Damage-e, player touch, xp

function IceSpelldamageCheck(i)
{
	if( Cooldown["IceSpellMarSebzett"][i] == 0 )
	{
		Cooldown["IceSpellMarSebzett"][i] = 1;
		var IceSpellDamage = Math.ceil( ( 10 + BonusDamage ) * BonusDamageProcent );
		if( mana_ertek + 40 - spell_cost_reduction > MaxMana/2 )
		{
			IceSpellDamage = IceSpellDamage + BonusFrom50;
			if( CritChance >= Math.random() )
			{
				IceSpellDamage = IceSpellDamage * 2;
				enemyHP[i] = enemyHP[i] - IceSpellDamage;
				IceSpellDamage = IceSpellDamage / 2;
				IceSpellDamage = IceSpellDamage - BonusFrom50;
			}
			else
			{
				enemyHP[i] = enemyHP[i] - IceSpellDamage;
				IceSpellDamage = IceSpellDamage - BonusFrom50;
			}
		}
		else
		{ 
			if( CritChance >= Math.random() )
			{
				IceSpellDamage = IceSpellDamage * 2;
				enemyHP[i] = enemyHP[i] - IceSpellDamage;
				IceSpellDamage = IceSpellDamage / 2;
			}
			else
			{ enemyHP[i] = enemyHP[i] - IceSpellDamage; }
		}
		if( enemyHP[i] <= 0 )
		{
			Manasteal();
			enemyAlive[i] = 0;
			xpGive(i);
			enemy[i].r = 0;
		}
	}
}

function EarthQuakedamageCheck(i)
{
	var key = 5;
	var radius = 360;
	if // Hitbox :)
	( 
		( // felső jobb
			player.y - radius / Math.sqrt(2) > enemy[i].y + enemy[i].r &&
			player.x + radius / Math.sqrt(2) > enemy[i].x - enemy[i].r && 
			player.y - radius < enemy[i].y + enemy[i].r &&
			player.x < enemy[i].x - enemy[i].r
		)
		||
		( // jobb felső
			player.y > enemy[i].y + enemy[i].r &&
			player.x + radius > enemy[i].x - enemy[i].r && 
			player.y - radius / Math.sqrt(2) < enemy[i].y + enemy[i].r &&
			player.x + radius / Math.sqrt(2) < enemy[i].x - enemy[i].r
		)
		||
		( // jobb alsó
			player.y + radius / Math.sqrt(2) > enemy[i].y - enemy[i].r &&
			player.x + radius > enemy[i].x - enemy[i].r &&
			player.y < enemy[i].y - enemy[i].r &&
			player.x + radius / Math.sqrt(2) <  enemy[i].x - enemy[i].r 
		)
		||
		( // alsó jobb
			player.y + radius > enemy[i].y - enemy[i].r &&
			player.x + radius / Math.sqrt(2) > enemy[i].x - enemy[i].r &&
			player.y + radius / Math.sqrt(2) < enemy[i].y - enemy[i].r &&
			player.x < enemy[i].x - enemy[i].r
		)
		||
		( // alsó bal
			player.y + radius > enemy[i].y - enemy[i].r &&
			player.x > enemy[i].x + enemy[i].r &&
			player.y + radius / Math.sqrt(2) < enemy[i].y - enemy[i].r &&
			player.x - radius / Math.sqrt(2) < enemy[i].x + enemy[i].r 
		)
		||
		( // bal alsó
			player.y + radius / Math.sqrt(2) > enemy[i].y - enemy[i].r &&
			player.x - radius / Math.sqrt(2) >  enemy[i].x + enemy[i].r &&
			player.y < enemy[i].y - enemy[i].r &&
			player.x - radius < enemy[i].x + enemy[i].r 
		)
		||
		( // bal felső
			player.y > enemy[i].y + enemy[i].r &&
			player.x - radius / Math.sqrt(2) >  enemy[i].x + enemy[i].r &&
			player.y - radius / Math.sqrt(2) < enemy[i].y + enemy[i].r &&
			player.x - radius < enemy[i].x + enemy[i].r 
		)
		||
		( // felső bal
			player.y - radius / Math.sqrt(2) > enemy[i].y + enemy[i].r &&
			player.x > enemy[i].x + enemy[i].r && 
			player.y - radius < enemy[i].y + enemy[i].r &&
			player.x - radius / Math.sqrt(2) < enemy[i].x + enemy[i].r
		)
		||
		( // Közép -> felső jobb
			player.y + radius / Math.sqrt(2) > enemy[i].y - enemy[i].r &&
			player.x + radius / Math.sqrt(2) > enemy[i].x + enemy[i].r &&
			player.y - radius / Math.sqrt(2) < enemy[i].y - enemy[i].r &&
			player.x - radius / Math.sqrt(2) < enemy[i].x + enemy[i].r 
		)
		||
		( // Közép -> alsó jobb
			player.y + radius / Math.sqrt(2) > enemy[i].y + enemy[i].r &&
			player.x + radius / Math.sqrt(2) > enemy[i].x + enemy[i].r &&
			player.y - radius / Math.sqrt(2) < enemy[i].y + enemy[i].r &&
			player.x - radius / Math.sqrt(2) < enemy[i].x + enemy[i].r 
		)
		||
		( // Közép -> alsó bal
			player.y + radius / Math.sqrt(2) > enemy[i].y + enemy[i].r &&
			player.x + radius / Math.sqrt(2) > enemy[i].x - enemy[i].r &&
			player.y - radius / Math.sqrt(2) < enemy[i].y + enemy[i].r &&
			player.x - radius / Math.sqrt(2) < enemy[i].x - enemy[i].r 
		)
		||
		( // Közép -> felső bal
			player.y + radius / Math.sqrt(2) > enemy[i].y - enemy[i].r &&
			player.x + radius / Math.sqrt(2) > enemy[i].x - enemy[i].r &&
			player.y - radius / Math.sqrt(2) < enemy[i].y - enemy[i].r &&
			player.x - radius / Math.sqrt(2) < enemy[i].x - enemy[i].r 
		)
	)
	{
		if( Cooldown["EarthQuakeMarSebzett"][i] == 0 )
		{
			Cooldown["EarthQuakeMarSebzett"][i] = 1;
			espeed[i] = espeed[i]/4;
			var EarthQuakeDamage = Math.ceil( ( parseInt( SPELL_DAMAGE[key] ) + BonusDamage ) * BonusDamageProcent / 5 );
			if( mana_ertek + SPELL_COST[key] - spell_cost_reduction > MaxMana/2 )
			{
				EarthQuakeDamage = Math.ceil( EarthQuakeDamage + BonusFrom50/5 );
				if( CritChance >= Math.random() )
				{
					EarthQuakeDamage = EarthQuakeDamage * 2;
					enemyHP[i] = enemyHP[i] - EarthQuakeDamage;
					EarthQuakeDamage = EarthQuakeDamage / 2;
					EarthQuakeDamage = EarthQuakeDamage - BonusFrom50;
				}
				else
				{
					enemyHP[i] = enemyHP[i] - EarthQuakeDamage;
					EarthQuakeDamage = EarthQuakeDamage - BonusFrom50;
				}
			}
			else
			{ 
				if( CritChance >= Math.random() )
				{
					EarthQuakeDamage = EarthQuakeDamage * 2;
					enemyHP[i] = enemyHP[i] - EarthQuakeDamage;
					EarthQuakeDamage = EarthQuakeDamage / 2;
				}
				else
				{ enemyHP[i] = enemyHP[i] - EarthQuakeDamage; }
			}
			if( enemyHP[i] <= 0 )
			{
				Manasteal();
				enemyAlive[i] = 0;
				xpGive(i);
				enemy[i].r = 0;
			}
		}
	}
}

function CloneEarthQuakedamageCheck(i)
{
	var key = 5;
	var radius = 230;
	if // Hitbox :)
	( 
		( // felső jobb
			Clone.y - radius / Math.sqrt(2) > enemy[i].y + enemy[i].r &&
			Clone.x + radius / Math.sqrt(2) > enemy[i].x - enemy[i].r && 
			Clone.y - radius < enemy[i].y + enemy[i].r &&
			Clone.x < enemy[i].x - enemy[i].r
		)
		||
		( // jobb felső
			Clone.y > enemy[i].y + enemy[i].r &&
			Clone.x + radius > enemy[i].x - enemy[i].r && 
			Clone.y - radius / Math.sqrt(2) < enemy[i].y + enemy[i].r &&
			Clone.x + radius / Math.sqrt(2) < enemy[i].x - enemy[i].r
		)
		||
		( // jobb alsó
			Clone.y + radius / Math.sqrt(2) > enemy[i].y - enemy[i].r &&
			Clone.x + radius > enemy[i].x - enemy[i].r &&
			Clone.y < enemy[i].y - enemy[i].r &&
			Clone.x + radius / Math.sqrt(2) <  enemy[i].x - enemy[i].r 
		)
		||
		( // alsó jobb
			Clone.y + radius > enemy[i].y - enemy[i].r &&
			Clone.x + radius / Math.sqrt(2) > enemy[i].x - enemy[i].r &&
			Clone.y + radius / Math.sqrt(2) < enemy[i].y - enemy[i].r &&
			Clone.x < enemy[i].x - enemy[i].r
		)
		||
		( // alsó bal
			Clone.y + radius > enemy[i].y - enemy[i].r &&
			Clone.x > enemy[i].x + enemy[i].r &&
			Clone.y + radius / Math.sqrt(2) < enemy[i].y - enemy[i].r &&
			Clone.x - radius / Math.sqrt(2) < enemy[i].x + enemy[i].r 
		)
		||
		( // bal alsó
			Clone.y + radius / Math.sqrt(2) > enemy[i].y - enemy[i].r &&
			Clone.x - radius / Math.sqrt(2) >  enemy[i].x + enemy[i].r &&
			Clone.y < enemy[i].y - enemy[i].r &&
			Clone.x - radius < enemy[i].x + enemy[i].r 
		)
		||
		( // bal felső
			Clone.y > enemy[i].y + enemy[i].r &&
			Clone.x - radius / Math.sqrt(2) >  enemy[i].x + enemy[i].r &&
			Clone.y - radius / Math.sqrt(2) < enemy[i].y + enemy[i].r &&
			Clone.x - radius < enemy[i].x + enemy[i].r 
		)
		||
		( // felső bal
			Clone.y - radius / Math.sqrt(2) > enemy[i].y + enemy[i].r &&
			Clone.x > enemy[i].x + enemy[i].r && 
			Clone.y - radius < enemy[i].y + enemy[i].r &&
			Clone.x - radius / Math.sqrt(2) < enemy[i].x + enemy[i].r
		)
		||
		( // Közép -> felső jobb
			Clone.y + radius / Math.sqrt(2) > enemy[i].y - enemy[i].r &&
			Clone.x + radius / Math.sqrt(2) > enemy[i].x + enemy[i].r &&
			Clone.y - radius / Math.sqrt(2) < enemy[i].y - enemy[i].r &&
			Clone.x - radius / Math.sqrt(2) < enemy[i].x + enemy[i].r 
		)
		||
		( // Közép -> alsó jobb
			Clone.y + radius / Math.sqrt(2) > enemy[i].y + enemy[i].r &&
			Clone.x + radius / Math.sqrt(2) > enemy[i].x + enemy[i].r &&
			Clone.y - radius / Math.sqrt(2) < enemy[i].y + enemy[i].r &&
			Clone.x - radius / Math.sqrt(2) < enemy[i].x + enemy[i].r 
		)
		||
		( // Közép -> alsó bal
			Clone.y + radius / Math.sqrt(2) > enemy[i].y + enemy[i].r &&
			Clone.x + radius / Math.sqrt(2) > enemy[i].x - enemy[i].r &&
			Clone.y - radius / Math.sqrt(2) < enemy[i].y + enemy[i].r &&
			Clone.x - radius / Math.sqrt(2) < enemy[i].x - enemy[i].r 
		)
		||
		( // Közép -> felső bal
			Clone.y + radius / Math.sqrt(2) > enemy[i].y - enemy[i].r &&
			Clone.x + radius / Math.sqrt(2) > enemy[i].x - enemy[i].r &&
			Clone.y - radius / Math.sqrt(2) < enemy[i].y - enemy[i].r &&
			Clone.x - radius / Math.sqrt(2) < enemy[i].x - enemy[i].r 
		)
	)
	{
		if( Cooldown["EarthQuakeMarSebzett"][i] == 0 )
		{
			Cooldown["EarthQuakeMarSebzett"][i] = 1;
			espeed[i] = espeed[i]/4;
			var EarthQuakeDamage = Math.ceil( ( parseInt( SPELL_DAMAGE[key] ) + BonusDamage ) * BonusDamageProcent / 5 );
			if( mana_ertek + SPELL_COST[key] - spell_cost_reduction > MaxMana/2 )
			{
				EarthQuakeDamage = Math.ceil( EarthQuakeDamage + BonusFrom50/5 );
				if( CritChance >= Math.random() )
				{
					EarthQuakeDamage = EarthQuakeDamage * 2;
					enemyHP[i] = enemyHP[i] - EarthQuakeDamage;
					EarthQuakeDamage = EarthQuakeDamage / 2;
					EarthQuakeDamage = EarthQuakeDamage - BonusFrom50;
				}
				else
				{
					enemyHP[i] = enemyHP[i] - EarthQuakeDamage;
					EarthQuakeDamage = EarthQuakeDamage - BonusFrom50;
				}
			}
			else
			{ 
				if( CritChance >= Math.random() )
				{
					EarthQuakeDamage = EarthQuakeDamage * 2;
					enemyHP[i] = enemyHP[i] - EarthQuakeDamage;
					EarthQuakeDamage = EarthQuakeDamage / 2;
				}
				else
				{ enemyHP[i] = enemyHP[i] - EarthQuakeDamage; }
			}
			if( enemyHP[i] <= 0 )
			{
				Manasteal();
				enemyAlive[i] = 0;
				xpGive(i);
				enemy[i].r = 0;
			}
		}
	}
}

function playerTouchCheck()
{
	Cooldown["playerTouch"] = 1;
	if( shield_ertek > 0 )
	{
		shield_visual = ( shield_visual ) - ( enemyDamage / maxShield * 80 );
		$("#shield_bar").css(
		{
			"width":+shield_visual+"%"
		});
		$("#shield_ertek").empty();
		shield_ertek = shield_ertek - enemyDamage;
		if( shield_ertek < 0 )
		{
			$("#hp_ertek").empty();
			hp_ertek = hp_ertek + shield_ertek;
			hp_visual = hp_visual + ( 94 / maxHP * shield_ertek );
			shield_ertek = 0;
			shield_visual=0;
			$("#shield_bar").css(
			{
				"width":+shield_visual+"%"
			});
			$("#hp_bar").css(
			{
				"width":+hp_visual+"%"
			});
			$("#hp_ertek").append( hp_ertek );
		}
		$("#shield_ertek").append( shield_ertek );
	}
	else if( shield_ertek == 0 )
	{
		if( hp_ertek == 1 && Cooldown["ManaBarrier"] == 0 )
		{
			Cooldown["ManaBarrier"] = 1;
			$("#manabarrier_doboz").empty();
			shield_ertek = shield_ertek + MaxMana/5;
			maxShield = 30;
			shield_visual=80;
			$("#monitorSpell").append("<img src='upload/skills/barrier.png' id='manabarrier' style='position:absolute; top:43.5%; left:46%; width:8%; opacity:0.5; z-index:99999;'>");
			setTimeout(function(){$("#manabarrier").remove();},5000);
			
			// Valami animáció
			setTimeout(
			function()
			{
				Cooldown["ManaBarrier"] = 0;
				$("#manabarrier_doboz").append("<img src='upload/skills/barrier.png' style='height:100%; padding-left:4px;'>");
			},60000);
		}
		else
		{
			hp_visual = ( hp_visual ) - ( enemyDamage * 94 / maxHP );
			$("#hp_bar").css(
			{
				"width":+hp_visual+"%"
			});
			$("#hp_ertek").empty();
			hp_ertek = hp_ertek - enemyDamage;
			if( hp_ertek <= 0)
			{
				halalTime();
			}
			if( hp_ertek <= maxHP / 2 )
			{
				$("#hp_ertek").css( { "color":"white" } );
			}
			else
			{
				$("#hp_ertek").css( { "color":"#980000" } );
			}
			$("#hp_ertek").append( hp_ertek );
		}
	}
	setTimeout(
	function()
	{
		Cooldown["playerTouch"] = 0;
	},250);
}

function xpGive(i)
{
	if( enemyAlive[i] == 0 )
	{
		$("#xp_ertek").empty();
		xp_ertek = xp_ertek + ( ( WaveSzam * 5 + 20 ) * xp_bonus_enemy );
		xp_ertek = Math.ceil(xp_ertek);
		scorepoint = Math.ceil( scorepoint + ( ( WaveSzam * 5 + 20 ) * xp_bonus_enemy ) );
		
		if( xp_ertek >= xp_gap )
		{
			xp_ertek = xp_ertek - xp_gap;
			level++;
			skill_points = skill_points + 3;
			$("#skill_point_doboz").empty();
			$("#skill_point_doboz").append("<div>Skill points: "+skill_points+"</div>");
			xp_gap = Math.ceil(xp_gap * 1.15);
			$("#level").empty("#level");
			$( "<div id='level2'>Level "+level+"</div>" ).appendTo("#level");
		}
		xp_visual = xp_ertek/xp_gap*94
		$("#xp_bar").animate({ "width":+xp_visual+"%" }, 1000);
		$( xp_ertek ).appendTo("#xp_ertek");
		$("#scoremutato").show();
		$("#scoremutato").html("Your score: "+scorepoint+"");
		
		if( xp_ertek <= xp_gap/2 )
		{
			$("#xp_ertek").css( { "color":"white" } );
		}
		else
		{
			$("#xp_ertek").css( { "color":"black" } );
		}
	}
}

function halalTime()
{
	gameReady = false;
	var c = document.getElementById("canvas");
	var p = c.getContext("2d");
	p.fillStyle = "darkgreen";
	p.clearRect(player.x-100, player.y-100, 300, 300);
	p.fillRect(-1500, -1500, 5000, 5000 );
	$("#szurkehatter2").css({"opacity":"0"});
	$("#tartalom").hide();
	$("#szurkehatter2").show();
	$.get("modules/halalfelulet.php",function( vissza )
	{
		$("#monitorDead").html( vissza );
		$("#monitorDead").css({"display":"block","opacity":"0"});
		$(".halalScoremutatoMost").html("You got "+scorepoint+" points this round.");
		$("#szurkehatter2").animate({"opacity":"1"},{duration:1000,queue:false});
		$("#monitorDead").animate({"top":"20%","opacity":"1"},{duration:1000,queue:false});
		$(".restartGomb").click(
		function()
		{
			location.reload();
		});
		$("#lementIgen").click(
		function()
		{
			$.ajax(
			{
				url:"modules/scoreboardment.php"
				,
				type:"post"
				,
				dataType:"json" 
				,
				data:
				{
					"name":loginName,
					"score":scorepoint ,
				}
				,
				success:function( valasz )
				{
					if( valasz.uzenet=="1" )
					{
						location.reload();
					}
					else alert( valasz.uzenet );
				}
			});
		});
	});
}
// rajzolt spellek Damage-e, player touch, xp vége



// Skillek lehívás

function skillek_vissza()
{
	$.ajax(
	{
		url:"modules/skill_tree.php"
		,
		type:"post" // küldés módja
		,
		dataType:"json" // válasz formátuma
		,
		data:
		{
			
		}
		,
		success:function(valasz)
		{
			skillek_betolt( valasz );
		}
	});
}

function skillek_betolt( valasz )
{
	var skillek_lista=$("<ul class='skillek'>").appendTo( $("#skill_tree") );
	$.each( valasz , function( idx , item )
	{
		var szint=item.szint;
		var skillek_darab=$("<li id='skill_"+item.id+"' class='egy_skill unmastered_skill'><img class='SkillKep' src='upload/skills/"+item.ikon+"'<br><div class='SkillNev'>"+item.nev+"</div><div class='skill_darab' id='skill_szint_"+item.id+"'>"+szint+"/"+item.limit+"</div><div class='skill_leiras'>"+item.leiras+"<div id='skill_adat_"+item.id+"' class='skill_adat'>Next upgrade: "+item.skill+"</div></div></li>").appendTo( skillek_lista );
		
		$(skillek_darab).click(
		function()
		{
			if( ( item.id == 1 ) || ( item.id == 2 ) || ( item.id == 3 ) || ( item.id == 4 ) || ( item.id == 5 && $("#skill_1").hasClass("mastered_skill") ) || ( item.id == 6 && $("#skill_2").hasClass("mastered_skill") ) || ( item.id == 7 && $("#skill_3").hasClass("mastered_skill") ) || ( item.id == 8 && $("#skill_4").hasClass("mastered_skill") ) || ( item.id == 9 && $("#skill_5").hasClass("mastered_skill") ) || ( item.id == 10 && $("#skill_6").hasClass("mastered_skill") ) || ( item.id == 11 && $("#skill_7").hasClass("mastered_skill") ) || ( item.id == 12 && $("#skill_8").hasClass("mastered_skill") ) )
			{
				if( skill_points >= item.ar )
				{
					var limit=item.limit;
					if( szint != limit )
					{
						szint++;
						skill_points = skill_points - item.ar;
						$("#skill_point_doboz").empty();
						$("#skill_point_doboz").append("<div>Skill points: "+skill_points+"</div>");
						skill_szam_novel( szint , limit , item.id );
						skill_fejleszt( szint , limit , item.id );
					}
				}
			}
		});
	});
}

// Skillek lehívása vége



// Skill fejlesztés 

function skill_szam_novel( szint , limit , id )
{
	if( szint==limit )
	{
		$("#skill_"+id+"").removeClass("unmastered_skill");
		$("#skill_"+id+"").addClass("mastered_skill");
		$("#skill_szint_"+id+"").addClass("fullos_skill");
		$("#skill_szint_"+id+"").empty();
		//$("#monitorLogin").append( id );
		$("<div>"+szint+"/"+limit+"</div>").appendTo("#skill_szint_"+id+"");
		if( id == 4 )
		{
			$("#skill_"+id+"").addClass("mastered_skill2");
			$("#skillvonaltarto1").css(
			{
				"top":"153px"
			});
			$(".skillvonal1").css(
			{
				"min-height":"12px"
			});
			$(".skillvonal2").css(
			{
				"min-height":"12px"
			});
			$("#skillvonaltarto2").css(
			{
				"top":"267px"
			});
		}
		else if( id == 8 )
		{
			$("#skill_"+id+"").addClass("mastered_skill2");
			$("#skillvonaltarto2").css(
			{
				"top":"271px"
			});
			$(".skillvonal2").css(
			{
				"min-height":"14px"
			});
		}
	}
	else
	{
		//$("#monitorLogin").append( id );
		$("#skill_szint_"+id+"").empty();
		//$("#monitorLogin").append( id );
		$("<div>"+szint+"/"+limit+"</div>").appendTo("#skill_szint_"+id+"");
	}
}

function skill_fejleszt(szint , limit , id)
{
	if( id == 1)
	{
		if( szint == limit )
		{
			speed = speed + moveSpeed;
			moveSpeed = 0;
			var skill_buff = szint * 10;
			$("#skill_adat_1").empty();
			$("#skill_adat_1").append("<div>Fully upgraded. +"+skill_buff+"% movement speed.</div>");
		}
		else
		{
			speed = speed + moveSpeed;
			var skill_buff = ( szint+1 ) * 10;
			$("#skill_adat_1").empty();
			$("#skill_adat_1").append("<div>Next upgrade: +"+skill_buff+"% movement speed.</div>");
		}
	}
	else if( id == 2 )
	{
		if( szint == limit )
		{
			$("#shield_bar").show();
			$("#shield_bar_hatter").show();
			var skill_buff = szint * 4;
			shield_ertek = maxHP * ( skill_buff ) / 100;
			maxShield = shield_ertek;
			shield_visual = 80;
			$("#shield_bar").css(
			{
				"width":+shield_visual+"%"
			});
			$("#skill_adat_2").empty();
			$("#skill_adat_2").append("<div>Fully upgraded. This shield is equal to "+skill_buff+"% of your hp.</div>");
			$("#shield_ertek").empty();
			$("#shield_ertek").append( shield_ertek );
		}
		else
		{
			$("#shield_bar").show();
			$("#shield_bar_hatter").show();
			var skill_buff = ( szint+1 ) * 4;
			shield_ertek = Math.ceil(maxHP * ( skill_buff - 4 ) / 100);
			maxShield = shield_ertek;
			shield_visual = 80;
			$("#shield_bar").css(
			{
				"width":+shield_visual+"%"
			});
			$("#skill_adat_2").empty();
			$("#skill_adat_2").append("<div>Next upgrade: This shield is equal to "+skill_buff+"% of your hp.</div>");
			$("#shield_ertek").empty();
			$("#shield_ertek").append( shield_ertek );
		}
	}
	else if( id == 3 )
	{
		if( szint == limit )
		{
			//mana_ertek = mana_ertek + manaBonus;
			MaxMana = MaxMana + manaBonus;
			manaBonus = 0;
			manaRegen = manaRegen + manaRegenBonus;
			manaRegenBonus = 0;
			//mana_ertek = MaxMana;
			//mana_visual = 94;
			var skill_buff1 = szint * 10;
			var skill_buff2 = szint * 2;
			$("#skill_adat_3").empty();
			$("#skill_adat_3").append("<div>Fully upgraded. +"+skill_buff1+"% maximum mana, +"+skill_buff2+" mana/sec, when out of combat.</div>");
			$("#mana_ertek").empty();
			//$("#mana_ertek").append( mana_ertek );
		}
		else
		{
			//mana_ertek = mana_ertek + manaBonus;
			MaxMana = MaxMana + manaBonus;
			manaRegen = manaRegen + manaRegenBonus;
			//mana_ertek = MaxMana;
			//mana_visual = 94;
			var skill_buff1 = ( szint+1 ) * 10;
			var skill_buff2 = ( szint+1 ) * 2;
			$("#skill_adat_3").empty();
			$("#skill_adat_3").append("<div>Next upgrade: +"+skill_buff1+"% maximum mana, +"+skill_buff2+" mana/sec, when out of combat.</div>");
			$("#mana_ertek").empty();
			//$("#mana_ertek").append( mana_ertek );
		}
	}
	else if( id == 4 )
	{
		if( szint == limit )
		{
			BonusDamage++;
			BonusDamageProcent = 1.1;
			var skill_buff1 = szint;
			var skill_buff2 = 10;
			$("#skill_adat_4").empty();
			$("#skill_adat_4").append("<div>Fully upgraded. +"+skill_buff1+" damage and +"+skill_buff2+"% damage to your spells.</div>");
			$("#ability_lista").empty();
			abilityk_vissza();
		}
		else
		{
			BonusDamage++;
			var skill_buff1 = ( szint+1 );
			$("#skill_adat_4").empty();
			$("#skill_adat_4").append("<div>Next upgrade: +"+skill_buff1+" damage to your spells.</div>");
			$("#ability_lista").empty();
			abilityk_vissza();
		}
	}
	else if( id == 5 )
	{
		if( szint == limit )
		{
			xp_bonus_bogyo = 1.2
			xp_bonus_enemy = 1.4
			var skill_buff1 = 20;
			var skill_buff2 = 40;
			$("#skill_adat_5").empty();
			$("#skill_adat_5").append("<div>Fully upgraded. +"+skill_buff1+"% XP from white bubbles, +"+skill_buff2+"% XP from enemies.</div>");
		}
		else
		{
			xp_bonus_bogyo = xp_bonus_bogyo + 0.05;
			xp_bonus_enemy = xp_bonus_enemy + 0.1;
			var skill_buff1 = ( szint*5 );
			var skill_buff2 = ( szint*10 );
			$("#skill_adat_5").empty();
			$("#skill_adat_5").append("<div>Next upgrade: +"+skill_buff1+"% XP from white bubbles, +"+skill_buff2+"% XP from enemies.</div>");
		}
	}
	else if( id == 6 )
	{
		if( szint == limit )
		{
			hp_ertek = hp_ertek + 5;
			maxHP = maxHP + 5;
			maxShield = maxHP * 2 / 10;
			shield_visual = 80 / maxShield * shield_ertek;
			$("#shield_bar").css(
			{
				"width":+shield_visual+"%"
			});
			var skill_buff1 = 25;
			$("#skill_adat_6").empty();
			$("#skill_adat_6").append("<div>Fully upgraded. +"+skill_buff1+"% maximum health.</div>");
			$("#hp_ertek").empty();
			$("#hp_ertek").append( hp_ertek );
		}
		else
		{
			hp_ertek = hp_ertek + 5;
			maxHP = maxHP + 5;
			maxShield = maxHP * 2 / 10
			shield_visual = 80 / maxShield * shield_ertek;
			$("#shield_bar").css(
			{
				"width":+shield_visual+"%"
			});
			var skill_buff1 = ( szint*5 );
			$("#skill_adat_6").empty();
			$("#skill_adat_6").append("<div>Next upgrade: +"+skill_buff1+"% maximum health.</div>");
			$("#hp_ertek").empty();
			$("#hp_ertek").append( hp_ertek );
		}
	}
	else if( id == 7 )
	{
		if( szint == limit )
		{
			spell_cost_reduction = 10;
			var skill_buff1 = 10;
			$("#skill_adat_7").empty();
			$("#skill_adat_7").append("<div>Fully upgraded. -"+skill_buff1+" mana cost on all of your spells.</div>");
		}
		else
		{
			spell_cost_reduction = spell_cost_reduction + 2;
			var skill_buff1 = ( szint*2 );
			$("#skill_adat_7").empty();
			$("#skill_adat_7").append("<div>Next upgrade: -"+skill_buff1+" mana cost on all of your spells.</div>");
		}
	}
	else if( id == 8 )
	{
		if( szint == limit )
		{
			BonusFrom50 = 9;
			var skill_buff1 = 9;
			$("#skill_adat_7").empty();
			$("#skill_adat_7").append("<div>Fully upgraded. +"+skill_buff1+" damage while you have at least 50% of your maximum mana.</div>");
		}
		else
		{
			BonusFrom50 = BonusFrom50 + 1.5;
			var skill_buff1 = ( szint*1.5 );
			$("#skill_adat_7").empty();
			$("#skill_adat_7").append("<div>Next upgrade: +"+skill_buff1+" damage while you have at least 50% of your maximum mana.</div>");
		}
	}
	else if( id == 9 )
	{
		Cooldown["Teleport"] = 0;
		$("#tornado_doboz").append("<img src='upload/skills/teleport.png' style='height:100%; padding-left:5px;'>");
	}
	else if( id == 10 )
	{
		Cooldown["Smoke"] = 0;
		$("#smoke_doboz").append("<img src='upload/skills/smokebomb.png' style='height:100%; padding-left:4px;'>");
	}
	else if( id == 11 )
	{
		Cooldown["ManaBarrier"] = 0;
		$("#manabarrier_doboz").append("<img src='upload/skills/barrier.png' style='height:100%; padding-left:4px;'>");
	}
	else if( id == 12 )
	{
		BonusDamageProcent = 1.25;
		CritChance = 0.3;
		Cooldown["Ritual"] = 0;
		$("#ability_lista").empty();
		abilityk_vissza();
		$("#ritual_doboz").append("<img src='upload/skills/ritual.png' style='height:100%; padding-left:5px;'>");
	}
}

// Skill fejlesztés vége



// Ability-k lehívása

function abilityk_vissza()
{
	$.ajax(
	{
		url:"modules/ability.php"
		,
		type:"post" // küldés módja
		,
		dataType:"json" // válasz formátuma
		,
		data:
		{
			
		}
		,
		success:function(valasz)
		{
			abilityk_betolt( valasz );
		}
	});
}

function abilityk_betolt( valasz )
{
	var abilityk_lista=$("<ul class='abilityk'>").appendTo( $("#ability_lista") );
	$.each( valasz , function( idx , item )
	{
		var sebzes = Math.ceil( ( parseInt( item.sebzes ) + BonusDamage ) * BonusDamageProcent );
		var abilityk_darab=$("<li id='ab_"+item.id+"' class='egy_ab'><img class='abKep' id='abKep_"+item.id+"' src='upload/abilities/"+item.ikon+"' style='width:95px'><br><div class='abNev'>"+item.nev+"</div><div class='ab_leiras'>"+item.leiras+"<div id='ab_adat_"+item.id+"' class='ab_adat'><div class='adat_darab' style='color:darkred'> Damage: "+sebzes+"</div><div class='adat_darab' style='color:blue'> Base mana cost: "+item.mana+", </div><div class='adat_darab'> Effect: "+item.effect+", </div></div></div></li>").appendTo( abilityk_lista );
		
		if( spellMegNincsBetoltve )
		{
			for(i=1;i<7;i++)
			{
				if( $("#ab_holder_"+i+"").hasClass("FullAbKocka") )
				{}
				else
				{
					$("#ab_holder_"+i+"").append( "<img class='HotbarKep' id='HotbarKep_"+item.id+"' src='upload/abilities/"+item.ikon+"' style='width:45px; padding-left:5px; padding-top:3px;'>" );
					$("#ab_holder_"+i+"").addClass("FullAbKocka");
					SPELL_ID[i] = item.id;
					SPELL_DAMAGE[i] = parseInt(item.sebzes);
					SPELL_COST[i] = parseInt(item.mana);
					SPELL_EFFECT[i] = item.effect;
					SPELL_ICON[i] = item.spell_ikon;
					SPELL_INDICATOR[i] = item.indicator;
					SPELL_LEVELMIN[i] = item.level_min;
					i=10;
				}
			}
		}
	});
	spellMegNincsBetoltve = false;
}

// Ability-k lehívása vége