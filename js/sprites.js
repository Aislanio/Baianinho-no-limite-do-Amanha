
let Sprites = function(posx,posy,width,height,img,speed,quant_balas,tipo,tipo_ferramenta,moneys,music){
	this.x = posx;
	this.y = posy;
	this.width = width;
	this.height = height;
	this.img = img;
	this.speed = speed;
	this.quant_balas = quant_balas;
	this.tipo = tipo;
	this.tipo_ferramenta=  tipo_ferramenta	;
	this.moneys =moneys;
	this.music = music;	
};
Sprites.prototype.halfWidth = function(){
	return this.width /  2;
};
Sprites.prototype.halfHeight = function(){
	return this.height / 2;
};
Sprites.prototype.centerX = function(){

	return this.x + this.halfWidth();
};
Sprites.prototype.centerY = function(){

	return this.y + this.halfHeight();
};
