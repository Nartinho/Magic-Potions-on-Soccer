(function(){
	var GameplayScreen = function(label){
		this.initialize(label);
	}
	var p = GameplayScreen.prototype = new createjs.Container(); // inherit from Container
	
	p.name = "gameplayscreen";
	p.shape;
	p.graphics;
	p.background;
		
	p.Container_initialize = p.initialize;
	p.initialize = function(label){
		
		this.shape = new createjs.Shape();
		this.graphics = new createjs.Graphics().beginFill("#000000").drawRect(0, 0, 100, 100);
		this.shape = new createjs.Shape(this.graphics)
		
		this.background = new createjs.Bitmap("asset/images/TitleScreen.png");
		
		this.addChild(this.shape);
		this.addChild(this.background);
	}
	
	window.GameplayScreen = GameplayScreen;
}());