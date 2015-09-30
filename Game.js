
var player;
var goal;


function Game()
{
	canvasInIt();
	player = new Player();
	goal = new Goal();
}
Game.prototype.keyClick = function(e)
{
	console.log("" + e.keyCode);
	if(e.keyCode == 100){
		player.moveRight();
	}
	if(e.keyCode == 97){
		player.moveLeft();
	}	
	if(e.keyCode == 119){
		player.moveUp();
	}
	if(e.keyCode == 115){
		player.moveDown();
	}
}

Game.prototype.gameLoop = function()
{
	window.requestAnimationFrame(game.gameLoop);
	ctx.clearRect(0,0,canvas.width,canvas.height);

	goal.draw();
	player.draw();
	
	goal.moveVertical();
	if(player.checkCollision(goal))
	{
		goal.levelComplete();		
	}

}
function canvasInIt(){

	canvas = document.createElement("canvas");
	//ctx is to get context that we will draw on
	ctx = canvas.getContext("2d")

	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

}

/*function for rgb for convenience*/
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}
/*helper function*/
function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}