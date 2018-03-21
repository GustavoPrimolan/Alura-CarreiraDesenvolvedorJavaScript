//JOGO DEPENDE DO SPRITE E O CONTROLLER DEPENDE DO JOGO
var criaController = function(jogo){

	var $entrada = $('.entrada');
	var $lacunas = $('.lacunas');

	//EXIBE AS CAIXINHAS DINÂMICAMENTE
	var exibeLacunas = function(){
		$lacunas.empty();
		jogo.getLacunas().forEach(function(lacuna){
			$('<li>')
			.addClass('lacuna')
			.text(lacuna)
			.appendTo($lacunas);
		});
	};

	var mudaPlaceHolder = function(texto) {

		$entrada.attr('placeholder', texto);
	};

	var guardaPalavraSecreta = function(){
		
		try{
			//trim PARA TIRAR OS ESPAÇOS DA ESQUERDA E DIREITA
			jogo.setPalavraSecreta($entrada.val().trim());
			$entrada.val('');
			mudaPlaceHolder('chute');
			exibeLacunas();
		}catch(err){
			alert(err.message);
		}
	};

	var reinicia = function(){
		jogo.reinicia();
		$lacunas.empty();
		mudaPlaceHolder('Palavra secreta');
	};

	var leChute = function(){

		try{
			//PEGA SEMPRE A PRIMEIRA LETRA
			var chute = $entrada.val().trim().substr(0, 1);
			jogo.processaChute(chute);
			$entrada.val('');
			exibeLacunas();

			if(jogo.ganhouOuPerdeu()){

				//TEMPO NECESSÁRIO PARA QUE A ÚLTIMA LETRA MOSTRE, ESPERANDO 200 MILISEGUNDOS	
				setTimeout(function(){
					if(jogo.ganhou()){
						alert('Parabéns, você ganhou!');
					}else if(jogo.perdeu()){
						alert('Que pena, tente novamente');
					}

					reinicia();
				}, 200);		
				
			}
		}catch(err){
			alert(err.message);
		}
		
	};



	var inicia = function(){

		//SEMPRE EXECUTADO QUANDO PRESSIONAR UMA TECLA, MAS QUERO SÓ O ENTER
		$entrada.keypress(function(event){
			//13 É O EVENTO DE ENTER
			if(event.which == 13){
				switch(jogo.getEtapa()){
					case 1:
						guardaPalavraSecreta();
						break;
					case 2:
						leChute();
						break;
				}
			}
		});
			
	};

	//ÚNICA FUNÇÃO QUE SERÁ EXECUTADA
	return {inicia: inicia};

};