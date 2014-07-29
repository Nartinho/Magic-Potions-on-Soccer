(function(){	
	var test;
	
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
		
	GameManager.prototype.addScreen = function(screen)
	{
		this.screens[this.screens.length] = screen;
	}
	
	GameManager.prototype.loadScreen = function(screenName)
	{
		var index = 0;

		for (index; index < this.screens.length; index++)
		{
			if (this.screens[index].name === screenName)
			{
				this.gamStg.addChild(this.screens[index]);
				this.iLoaded = index;
			}
		}	
	}
	
	window.GameManager = GameManager;
}());