(function(){
	var CreditosScreen = function(gameplayManager){
		this.initialize(gameplayManager);
	}
	var p = CreditosScreen.prototype = new createjs.Container(); // inherit from Container
	
	p.name = "creditosscreen";
	p.shape;
	p.graphics;
	p.background;
	p.gamMan;
	
	// Usando tick da tela.
	p.tick;
	p.tickCount = 0;
	p.isActived = false;
	
	// Setup e teardown.
	p.setup;
	p.teardown;
		
	p.Container_initialize = p.initialize;
	p.initialize = function(gameplayManager){
		
		p.gamMan = gameplayManager;
		
		this.background = new createjs.Bitmap("asset/images/creditosScreen.png");
		
		this.addChild(this.background);
	}
	
	p.tick = function(event){
		// Implementando Tick;
		if (p.isActived)
		{
			p.tickCount++;
			
			if (p.tickCount >= 180)
			{
				p.gamMan.loadScreen("titlescreen");
			}			
		}
	}
	
	p.setup = function()
	{
		// Implementando setup.
		p.tickCount = 0;
				
		p.isActived = true;
	}
	
	p.tearDown = function()
	{
		// Implementando TearDown;
		
		
		p.isActived = false;
	}
	
	window.CreditosScreen = CreditosScreen;
}());