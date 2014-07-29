(function(){
	var GameplayScreen = function(gameplayManager){
		this.initialize(gameplayManager);
	}
	var p = GameplayScreen.prototype = new createjs.Container(); // inherit from Container
	
	p.name = "gameplayscreen";
	p.gamMan;
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
	p.initialize = function(gameplayManager){
		p.gamMan = gameplayManager;
		
		this.background = new createjs.Bitmap("asset/images/background.png");
		/*
		var isGameOver = false;
		var msgFim = false;	
		
		var TIMETODIE = 60; 
		
		var hudFimDeJogo;
		hudFimDeJogo = new createjs.Text("Acabou a partida!", "bold 48px Arial", "#000000");
		hudFimDeJogo.maxWidth = 1000;
		hudFimDeJogo.textAlign = "center";
		hudFimDeJogo.x = stage.canvas.width/2;
		hudFimDeJogo.y = stage.canvas.height/2;		
		
		var hudScore;
		hudScore = new createjs.Text(score, "bold 24px Arial", "#000000");
		hudScore.maxWidth = 1000;
		hudScore.textAlign = "right";
		hudScore.x = stage.canvas.width-50;
		hudScore.y = 25;
		//stage.addChild(hudScore);

		var placarHud;
		placarHud = new createjs.Text(""+placarJog+"x"+placarIA, "bold 24px Arial", "#000000");
		placarHud.maxWidth = 1000;
		placarHud.textAlign = "center";
		placarHud.x = 100;
		placarHud.y = 25;
		//stage.addChild(placarHud);				
		
		var timeHud;
		timeHud = new createjs.Text(TIMETODIE.toString(), "bold 24px Arial", "#000000");
		timeHud.maxWidth = 1000;
		timeHud.textAlign = "center";
		timeHud.x = stage.canvas.width / 2;
		timeHud.y = 25;
		//stage.addChild(timeHud);			
		
		var ele0 = new createjs.Bitmap("asset/images/ele0.jpg");
		ele0.x = 210;
		ele0.y = 250;		
		ele0.addEventListener("click", onRightClicked);
		//stage.addChild(ele0);		
		
		var ele1 = new createjs.Bitmap("asset/images/ele1.jpg");
		ele1.x = 388;
		ele1.y = 250;		
		ele1.addEventListener("click", onWrongClicked);
		//stage.addChild(ele1);	
		
		var ele2= new createjs.Bitmap("asset/images/ele2.jpg");
		ele2.x = 580;
		ele2.y = 250;		
		ele2.addEventListener("click", onWrongClicked);
		//stage.addChild(ele2);	
		
		var ele3 = new createjs.Bitmap("asset/images/ele3.jpg");
		ele3.x = 210;
		ele3.y = 370;		
		ele3.addEventListener("click", onWrongClicked);
		//stage.addChild(ele3);	
		
		var ele4 = new createjs.Bitmap("asset/images/ele4.jpg");
		ele4.x = 388;
		ele4.y = 370;		
		ele4.addEventListener("click", onWrongClicked);
		//stage.addChild(ele4);	
		
		var ele5 = new createjs.Bitmap("asset/images/ele5.jpg");
		ele5.x = 580;
		ele5.y = 370;		
		ele5.addEventListener("click", onWrongClicked);
		//stage.addChild(ele5);	
		
		var ele6 = new createjs.Bitmap("asset/images/ele6.jpg");
		ele6.x = 210;
		ele6.y = 480;		
		ele6.addEventListener("click", onWrongClicked);
		//stage.addChild(ele6);	
		
		var ele7 = new createjs.Bitmap("asset/images/ele7.jpg");
		ele7.x = 388;
		ele7.y = 480;		
		ele7.addEventListener("click", onWrongClicked);
		//stage.addChild(ele7);	
		
		var ele8 = new createjs.Bitmap("asset/images/ele8.jpg");
		ele8.x = 580;
		ele8.y = 480;		
		ele8.addEventListener("click", onWrongClicked);
		//stage.addChild(ele8);	
		
		
		//TODO
		x = Math.floor((Math.random() * 660) + 100);
		y = Math.floor((Math.random() * 100) + 1);
		
		*/
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
	
	this.createScoreHud = function()
	{
		alert("criando");
	}
	
	window.GameplayScreen = GameplayScreen;
}());