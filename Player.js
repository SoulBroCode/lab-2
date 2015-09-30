
function Player()
{
	this.x= 0;
	this.y = 0;
	this.width = 60;
	this.height = 60;
}
Player.prototype.moveRight = function()
{
	this.x += 5;
}
Player.prototype.moveLeft = function()
{
	this.x -=5;
}
Player.prototype.moveUp = function()
{
	this.y -= 5;
}
Player.prototype.moveDown = function()
{
	this.y +=5;
}
Player.prototype.draw = function()
{
	//ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.fillStyle = rgb(100,0,0);
	ctx.fillRect(this.x ,this.y,
				this.width,this.height);
}
//The parameter e is the object you want to check is colliding with the player.
Player.prototype.checkCollision = function (e){
 
    var collides=false;
         
        //do the two bounding boxes overlap?
        if ((this.x < e.x + e.width) &&
        (this.x + this.width > e.x) &&
        (this.y + this.height > e.y) &&
        (this.y < e.y + e.height) )
        {           
             
            collides = true;
                     
        }
         
        return collides;
}
