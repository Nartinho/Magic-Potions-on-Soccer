(function(){
	var TitleScreen = function(gameplayManager){
		this.initialize(gameplayManager);		
	}
	var p = TitleScreen.prototype = new createjs.Container(); // inherit from Container
	
	p.name = "titlescreen";
	p.shape;
	p.graphics;
	p.background;
		
	p.Container_initialize = p.initialize;
	p.initialize = function(gameplayManager){
		
		this.shape = new createjs.Shape();
		this.graphics = new createjs.Graphics().beginFill("#000000").drawRect(0, 0, 100, 100);
		this.shape = new createjs.Shape(this.graphics)
		
		this.background = new createjs.Bitmap("asset/images/TitleScreen.png");
		
		this.addChild(this.background);
	}
	
	window.TitleScreen = TitleScreen;
}());