//Global varable
var game;

function main()
{
	game = new Game();
	game.gameLoop();

	window.addEventListener("keypress", game.keyClick);
}

