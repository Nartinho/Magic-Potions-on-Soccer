(function(){
	var TitleScreen = function(gameplayManager){
		this.initialize(gameplayManager);		
	}
	var p = TitleScreen.prototype = new createjs.Container(); // inherit from Container
	
	p.name = "titlescreen";
	p.gamMan;
	
	p.background;	
	
	// Usando Tick
	p.tick;
	p.isActived = false;
	
	// Setup e Teardown
	p.setup;
	p.tearDown;
		
	p.Container_initialize = p.initialize;
	p.initialize = function(gameplayManager){
		
		// Gerenciador de jogo.
		p.gamMan = gameplayManager;
		//alert(p.gamMan);
		
		//Fundo da tela
		this.background = new createjs.Bitmap("asset/images/TitleScreen.png");
		
		// Botão Jogar.
		var btJogar = new createjs.Bitmap("asset/images/botaoJogar.png");
		btJogar.y = 550;
		btJogar.x = 8;
		btJogar.addEventListener("click", btJogarClick);		
		
		// Botão Tutorial.
		var btTutorial = new createjs.Bitmap("asset/images/botaoTutorial.png");
		btTutorial.y = 550;
		btTutorial.x = 258;
		btTutorial.addEventListener("click", btTutorialClick);
		
		// Botão créditos.
		var btCreditos = new createjs.Bitmap("asset/images/botaoCreditos.png");
		btCreditos.y = 550;
		btCreditos.x = 508;
		btCreditos.addEventListener("click", btCreditosClick);
		
		this.addChild(this.background);
		this.addChild(btJogar);
		this.addChild(btTutorial);
		this.addChild(btCreditos);
	}
	
	this.btJogarClick = function(event)
	{
		p.gamMan.loadScreen("gameplayscreen");
	}
	
	this.btTutorialClick = function(event)
	{
		p.gamMan.loadScreen("tutorialscreen");
	}
	
	this.btCreditosClick = function(event)
	{
		p.gamMan.loadScreen("creditosscreen");
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
	
	window.TitleScreen = TitleScreen;
}());