function Goal(){
	this.x= 400;
	this.y = 0;
	this.width = 100;
	this.height = 100;
	this.alive = true;
	this.velY = 5;
	this.velX = 5;
}
Goal.prototype.moveVertical = function()
{	
	this.y += this.velY;
	this.x += this.velX;
	if(this.y + this.height > canvas.height || this.y < 0) {
		 this.velY=  -this.velY;
	}
	if(this.x + this.width > canvas.width || this.x < 0) {
		 this.velX=  -this.velX;
	}

}
Goal.prototype.levelComplete = function()
{	
	this.alive = false;
}
Goal.prototype.draw = function()
{	
	if(this.alive){
		ctx.fillStyle = rgb(0,100,0);
		ctx.strokeRect (this.x ,this.y,
					this.width,this.height);
	}
	else{
		ctx.save();		
		ctx.fillStyle=rgb(0,0,0);
		ctx.font = 'italic 50pt Calibri';
		ctx.textBaseline = "middle";

		ctx.fillText("level complete",canvas.width/2 - 200,canvas.height/2);
		ctx.restore();
	}
}