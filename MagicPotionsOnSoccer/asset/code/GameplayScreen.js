(function(){
	var GameplayScreen = function(gameplayManager){
		this.initialize(gameplayManager);
	}
	var p = GameplayScreen.prototype = new createjs.Container(); // inherit from Container
	
	p.name = "gameplayscreen";
	p.gamMan;
	
	// Usando Tick;
	p.tick;
	p.tickCount = 0;
	p.isActived = false;
	
	// Setup e Teardown.
	p.setup;
	p.tearDown;
	
	p.background;
	p.score = 0;
	p.placarJog = 0;
	p.placarIA = 0;
	p.erros = 0;
	p.acertos = 0;
	
	p.TIMETODIE = 10; // 60 segundos
	p.elapsedTime = 0;
	
	p.isGameOver = false;
	
	p.hudScore;
	p.hudPlacar;
	p.hudTime;
	
	p.gameItens = [];
	p.itensPosX = [210, 388, 580];
	p.itensPosY = [250, 370, 480];
	p.itemChave;
	
	// Métodos.
	p.cText;
	p.cItem;
	p.rigthClick;
	p.wrongClick;
		
	p.Container_initialize = p.initialize;
	p.initialize = function(gameplayManager){
		p.gamMan = gameplayManager;
		
		this.background = new createjs.Bitmap("asset/images/background.png");
		
		p.hudScore = this.cText(this.score, 650, 80);
		p.hudPlacar = this.cText(this.placarJog + "x" + this.placarIA, 90, 90);
		p.hudTime = this.cText(this.TIMETODIE - this.elapsedTime, 420, 80);
		
		var index = 0;
		var indAux = 0;
		
		for (index; index < 9; index++)
		{
			var indMod = index%3;
			if (indMod == 0 && index != 0)
			{
				indAux++;
			}
			p.gameItens[p.gameItens.length] = this.cItem(index, this.itensPosX[indAux], this.itensPosY[indMod])
		}
		
		// vish.
		var item1 = this.cItem(0, 210, 250);
		
		/*
		var isGameOver = false;
		var msgFim = false;	
		
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
		
		//TODO
		x = Math.floor((Math.random() * 660) + 100);
		y = Math.floor((Math.random() * 100) + 1);
		
		*/
		this.addChild(this.background);
		this.addChild(this.hudScore);
		this.addChild(this.hudPlacar);
		this.addChild(this.hudTime);
		
		index = 0;
		for (index; index < 9; index++)
		{
			this.addChild(p.gameItens[index]);
		}
	}
	
	p.tick = function(event)
	{
		// Implementando Tick;
		if (p.isActived)
		{
			p.tickCount++;
			
			if (p.tickCount >= 60)
			{
				p.elapsedTime++;
				p.tickCount = 0;
			}
			
			var	time = p.TIMETODIE - p.elapsedTime;
			
			if (p.isGameOver == false)
			{
				// Update Hud.
				p.hudPlacar.text = p.placarJog + "x" + p.placarIA;
				p.hudTime.text = time;
				p.hudScore.text = p.score;
			}
			else
			{
				p.isActived = false;
				
				var msgFinal = "Você ";
				if (p.placarJog > p.placarIA)
				{
					msgFinal += "venceu!";
				}
				else if (p.placarJog < p.placarIA)
				{
					msgFinal += "perdeu!";
				}
				else
				{
					msgFinal += "empatou!";
				}
				
				alert(msgFinal);
				
				p.gamMan.loadScreen("titlescreen");			
				
			}
			
			if (time <= 0)
			{
				p.isGameOver = true;
			}
		}
	}
	
	p.setup = function()
	{
		// Implementando setup.
		p.score = 0;
		p.placarJog = 0;
		p.placarIA = 0;
		p.erros = 0;
		p.acertos = 0;		
		p.elapsedTime = 0;
		
		p.tickCount = 0;
		
		p.isActived = true;
	}
	
	p.tearDown = function()
	{
		// Implementando TearDown;
		
		
		p.isActived = false;
	}
	
	p.cText = function(text, x, y)
	{ 
		var crejsText;
		
		crejsText = new createjs.Text(text, "bold 36px Arial", "#000000");
		crejsText.maxWidth = 1000;
		crejsText.textAlign = "center";
		crejsText.x = x;
		crejsText.y = y;
		
		return crejsText;
	}
	
	// Os nomes dos elementos são seus números começando de 0 (zero).
	// Por exemplo: 0, 1, 2, 3...
	p.cItem = function(nameItem, x, y)
	{ 
		var itemBitmap = new createjs.Bitmap("asset/images/ele"+ nameItem + ".jpg");
		itemBitmap.x = x;
		itemBitmap.y = y;
		itemBitmap.name = nameItem;
		
		return itemBitmap;
	}
	
	p.rigthClick = function(event)
	{
	}
	
	p.wrongClick = function()
	{
	}
	
	window.GameplayScreen = GameplayScreen;
}());