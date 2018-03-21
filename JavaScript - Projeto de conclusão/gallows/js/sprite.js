/* MINHA SOLUÇÃO PARA MOSTRAR SEMPRE O PRÓXIMO FRAME
function createSprite(seletorSprite){
	var contador = 1;
	var sprite = {
		$dom: $(seletorSprite),
		nextFrame: function(){
			//PRIMEIRO REMOVE O ANTERIOR SE TIVER
			this.$dom.removeClass("frame"+ (contador-1));
			//VERIFICA SE PASSOU DE NOTE
			if(contador > 9){
				contador = 1;
			}
			//ADICIONA O FRAME QUE ESTÁ O CONTADOR ATUAL
			this.$dom.addClass("frame"+contador);
			
			//SOMA O CONTADOR PARA QUE POSSA EXCLUIR O ÚLTIMO
			contador++;

		}
	}
	return sprite;
}
*/

//SOLUÇÃO INSTRUTOR DO CURSO. ACHEI MELHOR.
//ESSA FORMA É A FORMA PARA SE DECLARAR UMA FUNÇÃO QUE É CHAMADA DE FUNCTION DECLARATION
/*
function createSprite(selector){

}
*/
//EXISTE A FORMA DE FUNCTION EXPRESSION
var createSprite = function (selector){
	

	//FUNÇÕES FORAM DECLARADAS NO TOPO
	//TEM PRÓXIMO E RETORNA O VERDADEIRO
	var hasNext = function(){
		return current +1 <= last;
	};

	//PARA TORNAR MAIS LEGÍVEL O CÓDIGO CRIAMOS OUTRA FUNÇÃO PARA EXCLUIR E ADICIONAR
	var moveFrame = function(from, to){
		//MOVE DE CERTA POSIÇÃO PARA CERTA POSIÇÃO
		$el.removeClass(from).addClass(to);
	};

	var nextFrame = function(){
		//REMOVE O ATUAL E INSERE O PRÓXIMO
		/*
		$el.removeClass(frames[current])
		.addClass(frames[++current]);
		*/

		//SÓ SE TIVER PRÓXIMO A IMPLEMENTAÇÃO É FEITA
		if(hasNext()){
			//MOVE DA ATUAL PARA UMA A FRENTE JÁ FAZENDO O CONTADOR
			moveFrame(frames[current], frames[++current]);
		}
	};

	//FUNÇÃO PARA VOLTAR AO ESTADO INICIAL
	var reset = function(){
		moveFrame(frames[current], frames[0])
		current = 0;
	};

	//FUNÇÃO RETORNA SE É FIM
	var isFinished = function(){
		return !hasNext();
	}


	//NOMEAR VARÍAVEIS QUE UTILIZAM O jQuery INICIANDO COM O $ É UM BOM PADRÃO, POIS MOSTRA QUE AQUELA VARÍAVEL
	//CONSEGUE UTILIZAR OS MÉTODOS DO jQuery
	var $el = $(selector);

	var frames = ['frame1', 'frame2', 'frame3', 'frame4', 'frame5', 'frame6', 'frame7', 'frame8', 'frame9'];

	var current = 0;
	var last = frames.length-1;

	//JÁ INICÍA JOGANDO UMA CLASSE PARA O ELEMENTO
	$el.addClass(frames[current]);


	//RETORNA UM OBJETO JAVASCRIPT QUE CHAMA nextFrame EXECUTANDO O nextFrame
	return {
		nextFrame: nextFrame,
		reset: reset,
		isFinished: isFinished
	};

};

/*
VALE LEMBRAR DO CONCEITO UTILIZADO DO JAVASCRIPT, O CEITO DE CLOSURE. 
O OBJETO RETORNADO POR createSprite GUARDA EM UMA DE SUAS PROPRIEDADES A FUNÇÃO
nextFrame() CRIADA INTERNAMENTE EM createSprite.
EXEMPLO:
var sprite = createSprite('.sprite');
sprite.nextFrame();

ISSO SÓ FUNCIONARÁ, PORQUE A FUNÇÃO sprite.nextFrame()TEM ACESSO AO CONTEXTO DE createSprite()
E A TODAS AS VARIÁVEIS E FUNÇÕES DECLARADAS NELES MESMO DEPOIS DE createSprite() TER TERMINADO DE EXECUTAR.
SENDO ASSIM, A CHAMADA DE spriteNextFrame() QUE CHAMA POR DEBAIXO DOS PANOS moveFrame() E QUE MODIFICA 
AO ESTADO DA VARIÁVEL current ESTÁ SE VALENDO DESTE RECURSO DA LINGUAGEM JAVASCRIPT
*/

//DIFERENÇA ENTRE UMA FUNÇÃO DECLARADA(FUNCTION DECLARETED) E A EXPRESSÃO DE UMA FUNÇÃO (FUNCTION EXPRESSION)
//ISSO FUNCIONARIA, POIS AS FUNÇÕES DECLARADAS SÃO EXECUTADAS ANTES E DEPOIS É POSSÍVEL CHAMAR
//ISSO SE CHAMA FUNCTION HOSTING
/*
exibeNome();
function exibeNome(){
	console.log('Flavio');
}
*/
//ISSO NÃO IRÁ FUNCIONAR, POIS AS VARIÁVEIS SÃO JOGADAS NO INÍCIO ANTES DA DECLARAÇÃO DA FUNÇÃO
/*
exibeNome();
var exibeNome = function(){
	console.log('Gustavo');
};

FUNCTION EXPRESSION DEVE TERMINAR COM ; E JÁ UMA FUNCTION DECLARATION NÃO
*/
