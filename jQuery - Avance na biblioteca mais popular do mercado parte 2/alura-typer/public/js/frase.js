$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);


function fraseAleatoria(){

	$("#spinner").toggle();

	//FAZ UMA REQUISIÇÃO GET
	//LOCAL ONDE AS FRASES ESTÃO EM FORMATO JSON
	//FAZ A REQUISIÇÃO E EXECUTA A FUNÇÃO
	//É POSSÍVEL FAZER UMA FUNÇÃO ANÔNIMA
	//O PARÂMETRO data É O CONTEÚDO QUE ELE PEGOU DA REQUISIÇÃO
	//O .fail() É UMA FUNÇÃO DO JQUERY QUE LIDA COM REQUISIÇÕES QUE NÃO DÃO CERTO
	$.get("http://localhost:3000/frases", trocaFraseAleatoria)
	.fail(function(){
		//DÁ UM SHOW NO ELEMENTO		
		$("#erro").toggle();
		setTimeout(function(){
			//DA UM HIDE NO ELEMENTO
			$("#erro").toggle();
		}, 2000);
		
	})
	//SEMPRE É EXECUTADO INDEPENDENTEMENTE SE DEU CERTO OU ERRADO A REQUISIÇÃO
	.always(function(){
		$("#spinner").toggle();
	});
}

function trocaFraseAleatoria(data){
	var frase = $(".frase");

	//RETORNA UM NÚMERO ALEATÓRIO ENTRE 0 E 1
	//FAZ O NÚMERO DEIXAR ARREDONDADO PARA BAIXO Math.floor();
	var numeroAleatorio = Math.floor(Math.random() * data.length);
	//O .texto É UM CAMPO DO JSON
	frase.text(data[numeroAleatorio].texto);


	//QUANDO MUDAR A FRASE A QUANTIDADE DE PALAVRAS TBM TEM QUE MUDAR
	//ESSE MÉTODO SE ENCONTRA NO main.js
	atualizaTamanhoFrase();
	//O TEMPO JÁ ESTÁ NO JSON
	atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function buscaFrase(){
	//MOSTRA O SPINNER
	$("#spinner").toggle();
	//RETORNA O VALOR DO INPUT
	var fraseId = $("#frase-id").val();
	var dados = {id : fraseId};
	//O SEGUNDO PARÂMETRO ENVIA DADOS PARA A REQUISIÇÃO
	$.get("http://localhost:3000/frases", dados, trocaFrase)
	.fail(function(){
		$("#erro").toggle();
		setTimeout(function(){
			$("#erro").toggle();
		}, 2000);
	})
	.always(function(){
		$("#spinner").toggle();
	});
}

function trocaFrase(data){
	var frase = $(".frase");
	frase.text(data.texto);
	//QUANDO MUDAR A FRASE A QUANTIDADE DE PALAVRAS TBM TEM QUE MUDAR
	//ESSE MÉTODO SE ENCONTRA NO main.js
	atualizaTamanhoFrase();
	//O TEMPO JÁ ESTÁ NO JSON
	atualizaTempoInicial(data.tempo);
}
