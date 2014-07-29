(function(){
	var TutorialScreen = function(gameplayManager){
		this.initialize(gameplayManager);
	}
	var p = TutorialScreen.prototype = new createjs.Container(); // inherit from Container
	
	p.name = "tutorialscreen";
	p.background;
		
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
		
		this.background = new createjs.Bitmap("asset/images/tutorialScreen.png");
		
		this.addChild(this.background);
	}
	
	p.tick = function(event){
		// Implementando Tick;
		if (p.isActived)
		{
			p.tickCount++;
			
			if (p.tickCount >= 600)
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
	
	window.TutorialScreen = TutorialScreen;
}());