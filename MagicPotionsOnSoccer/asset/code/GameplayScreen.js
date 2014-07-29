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
	p.randomItemTime = 0;
	
	p.isGameOver = false;
	
	// HUD.
	p.hudScore;
	p.hudPlacar;
	p.hudTime;
	
	// Itens.
	p.gameItens = [];
	p.itensPosX = [210, 388, 580];
	p.itensPosY = [250, 370, 480];
	p.itemChavePos = [388, 640];
	p.itemChaveBitmap;
	p.itemChave;
	
	// Métodos.
	p.cText;
	p.cItem;
	p.rigthClick;
	p.wrongClick;
	p.itemClick;
	p.randomItemChave;
		
	p.Container_initialize = p.initialize;
	p.initialize = function(gameplayManager){
		p.gamMan = gameplayManager;
		
		this.background = new createjs.Bitmap("asset/images/background.png");
		
		p.hudScore = this.cText(this.score, 650, 80);
		p.hudPlacar = this.cText(this.placarJog + "x" + this.placarIA, 90, 90);
		p.hudTime = this.cText(this.TIMETODIE - this.elapsedTime, 420, 80);
		
		// Escolhendo item chave.
		p.randomItemChave();
		
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
			p.gameItens[p.gameItens.length - 1].addEventListener("click", p.itemClick);
		}
				
		this.addChild(this.background);
		this.addChild(this.hudScore);
		this.addChild(this.hudPlacar);
		this.addChild(this.hudTime);
		this.addChild(p.itemChaveBitmap);
		
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
				p.randomItemTime++;
				p.tickCount = 0;
			}
			
			if (p.randomItemTime >= 2)
			{
				p.randomItemTime = 0;
				p.randomItemChave();				
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
		p.isGameOver = false;
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
	
	p.itemClick = function(event)
	{
		if (event.target.name == p.itemChave)
		{
			p.rigthClick();
		}
		else
		{
			p.wrongClick();
		}
	}
	
	p.rigthClick = function(event)
	{
		if (p.isGameOver == false)
		{
			p.acertos++;
			if (p.acertos >= 2)
			{
				p.placarJog++;
				p.score += 15;
				p.acertos = 0;
			}
		}
	}
	
	p.wrongClick = function(event)
	{
		if (p.isGameOver == false)
		{
			p.erros++;
			if (p.erros >= 2)
			{
				p.placarIA++;
				p.score -= 10;
				p.erros = 0;
			}
		}
	}
	
	p.randomItemChave = function()
	{
		p.itemChave = Math.floor((Math.random() * 9));
		p.removeChild(p.itemChaveBitmap);
		
		p.itemChaveBitmap = this.cItem(p.itemChave, p.itemChavePos[0], p.itemChavePos[1]);
		//p.itemChaveBitmap.removeListener(p.itemClick);
		p.addChild(p.itemChaveBitmap)
	}
	
	window.GameplayScreen = GameplayScreen;
}());