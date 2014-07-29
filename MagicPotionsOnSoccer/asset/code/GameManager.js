(function(){	

	var GameManager = function(stage){
		initialize(stage);
	}
	p = GameManager.prototype;
	p.gamStg;
	p.isLoaded;
	p.screens = [];
	p.iLoaded = 0;	

	this.initialize = function(stage)
	{		
		p.gamStg = stage;
	}
		
	p.addScreen = function(screen)
	{
		p.screens[this.screens.length] = screen;
	}
	
	p.loadScreen = function(screenName)
	{
		
		if (p.isLoaded == true)
		{
			//alert("descarregando" + p.screens[p.iLoaded].name)
			p.screens[p.iLoaded].tearDown();
			p.gamStg.removeChild(p.screens[p.iLoaded]);
		}
		
		var index = 0;
		
		for (index; index < p.screens.length; index++)
		{	
			//alert("carregando " + p.screens[index].name)
			if (p.screens[index].name === screenName)
			{
				p.screens[index].setup();
				p.tick = p.screens[index].tick;
				p.iLoaded = index;
				p.isLoaded = true;
				
				p.gamStg.addChild(p.screens[index]);				
			}
		}		
	}
	
	p.tick = function(event)
	{
	}
	
	window.GameManager = GameManager;
}());