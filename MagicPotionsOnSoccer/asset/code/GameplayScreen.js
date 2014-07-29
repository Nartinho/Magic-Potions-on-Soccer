(function(){
	var GameplayScreen = function(label){
		this.initialize(label);
	}
	var p = GameplayScreen.prototype = new createjs.Container(); // inherit from Container
	
	p.name = "gameplayscreen";
	
	// Usando Tick;
	p.tick;
	p.isActived = false;
	
	// Setup e Teardown.
	p.setup;
	p.tearDown;
	
	/*
	p.placarJog = 0;
	p.placarIA = 0;	
	p.score = 0;		
	p.erros = 0;
	p.acertos = 0;
	*/
	
	p.background;
		
	p.Container_initialize = p.initialize;
	p.initialize = function(label){		
		this.background = new createjs.Bitmap("asset/images/background.png");
		
		this.addChild(this.background);
	}
	
	p.tick = function(event)
	{
		// Implementando Tick;
		if (p.isActived)
		{
		
		}
	}
	
	p.setup = function()
	{
		// Implementando setup.
		
		
		p.isActived = true;
	}
	
	p.tearDown = function()
	{
		// Implementando TearDown;
		
		
		p.isActived = false;
	}
	
	window.GameplayScreen = GameplayScreen;
}());