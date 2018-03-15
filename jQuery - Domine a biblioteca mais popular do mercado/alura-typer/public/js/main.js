//VARIÁVEIS GLOBAIS
var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");


//ESSA FUNÇÃO ready FAZ COM QUE QUANDO A PÁGINA ESTIVER CARREGADA POR INTEIRO]
//ELE IRÁ EXECUTAR O QUE ESTIVER DENTRO DA FUNÇÃO ANÔNIMA
/*
$(document).ready(function(){
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();

	//QUANDO CLICAR NO BOTÃO PARA REINICIAR ele executa a função reiniciaJogo
	$("#botao-reiniciar").click(reiniciaJogo);
});
*/
//APENAS O DOLAR É UM ATALHO PARA O $(document).ready()
$(function(){
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();

	//QUANDO CLICAR NO BOTÃO PARA REINICIAR ele executa a função reiniciaJogo
	$("#botao-reiniciar").click(reiniciaJogo);
	inicializaMarcadores();

});


function atualizaTamanhoFrase(){

	//jQuery RESPONSÁVEL POR SELECIONAR UM ELEMENTO
	//var frase = jQuery(".frase");
	//O $ É IGUAL A FUNÇÃO jQuery
	//.text() PEGA O TEXTO DENTRO DO ELEMENTO
	var frase = $(".frase").text();

	//DIVIDE A STRING EM ESPAÇOS
	var numPalavras = frase.split(" ").length;

	//PEGA O CONTEÚDO DO SPAN QUE FORNECE O NÚMERO DE PALAVRAS
	var tamanhoFrase = $("#tamanho-frase");

	//TROCA O NÚMERO DE PALAVRAS
	//tamanhoFrase.text("Banana");
	tamanhoFrase.text(numPalavras);

}

function inicializaContadores(){


	//QUANDO O CAMPO SOFRER O EVENTO DE CLICK FAÇA ALGO
	campo.on("input", function(){

		//PEGA O VALOR DO CAMPO
		//.val() NOS DA OS VALORES E SERVE PARA AS TAGS DE INPUT, DIFERENTE DO .text()
		console.log(campo.val());
		var conteudo = campo.val();
		var qtdPalavras = conteudo.split(/\S+/).length - 1;
		
		//MODIFICA O CONTADOR DE CARACTERES
		var qtdCaracteres = conteudo.length;
		$("#contador-caracteres").text(qtdCaracteres);

		//MODIFICA A QUANTIDADE DE PALAVRAS
		$("#contador-palavras").text(qtdPalavras);
	});	
}



function inicializaCronometro(){
	
	var tempoRestante = $("#tempo-digitacao").text();
	//QUANDO O CAMPO GANHA O FOCO
	//O TEMPO IRÁ COMEÇAR A DECRESCER
	//FUNÇÃO on FICA ESCUTANDO O TEMPO TODO
	//DIFERENTE DA FUNÇÃO one QUE ESCULTA SOMENTE UMA VEZ
	campo.one("focus", function(){
		//EXECUTA A FUNÇÃO EM UM CERTO TEMPO
		//CHAMAR COISAS DE TANTO EM TANTO TEMPO
		var cronometroID = setInterval(function(){
			//DESABILITA O BOTÃO QUANDO COMEÇA O CRONÔMETRO
			$("#botao-reiniciar").attr("disabled",true);
			tempoRestante--;
			console.log(tempoRestante);
			$("#tempo-digitacao").text(tempoRestante);


			if(tempoRestante < 1){

				clearInterval(cronometroID);
				finalizaJogo();

			}
		}, 1000);

		
	});

}

//QUANDO O CÓDIGO DENTRO DE UMA FUNÇÃO ESTÁ FICANDO MUITO GRANDE
//A BOA PRÁTICA É CRIAR OUTRA FUNÇÃO PARA SER INSERIDA NO LOCAL DA GRANDE QUANTIDADE DE CÓDIGO
function finalizaJogo(){

	//MODIFICA O ATRIBUTO OU PEGA UM VALOR DO ATRIBUTO NA TAG
	campo.attr("disabled", true);

	//PARA A FUNÇÃO setInterval PASSANDO O id DA FUNÇÃO COMO PARÂMETRO
	

	//HABILITA O BOTÃO REINICIAR QUANDO ACABAR O TEMPO
	$("#botao-reiniciar").attr("disabled", false);
	
	//ACRESCENTA UMA ATRIBUTO CSS PARA A TAG
	//CONVENSÃO NÃO COLOCAR CSS NO JAVA SCRIPT
	//POIS SEMPRE QUANDO HOUVER ALTERAÇÃO SERÁ NECESSÁRIO FAZER A BUSCA NO ARQUIVO JAVA SCRIPT
	//O CORRETO É ADICIONAR UMA CLASSE QUE JÁ POSSUI AS CARACTERÍSTICAS CSS DEFENIDAS
	//campo.css("background-color", "lightgray");

	//ADICIONA UMA CLASSE
	//campo.addClass("campo-desativado");
	//O jQuery TEM O MÉTODO toggleClass QUE FAZ A LÓGICA DE TIRAR OU POR UMA CLASSE
	campo.toggleClass("campo-desativado");
	inserePlacar();
}


function inicializaMarcadores(){


	var frase = $(".frase").text();

	campo.on("input", function(){
		var digitado = campo.val();

		//TAMANHO DO QUE FOI DIGITADO ATÉ O MOMENTO	
		var comparavel = frase.substr(0, digitado.length);

		console.log("Digitado: " + digitado);
		console.log("Frase C.:" + comparavel);

		if(digitado == comparavel){
			campo.addClass("borda-verde");
			campo.removeClass("borda-vermelha");
		}else{
			campo.addClass("borda-vermelha");
			campo.removeClass("borda-verde");
		}

	});

}


function reiniciaJogo(){
	
	/* PARA ALGUNS EVENTOS EXISTEM ATALHOS COMO O EVENTO ABAIXO
	$("#botao-reiniciar").on("click", function(){
		console.log("botao clicado");
	});
	*/
	//UM ATALHO PARA O CÓDIGO ACIMA
	//$("#botao-reiniciar").click(function(){
	campo.attr("disabled", false);
	campo.val("");
	$("#contador-palavras").text("0");
	$("#contador-caracteres").text("0");
	$("#tempo-digitacao").text(tempoInicial);
	//QUANDO REINICIAR O JOGO ELE IRÁ INICIALIZAR O CRONOMETRO NOVAMENTE
	inicializaCronometro();

	//COLOCA O toggleClass
	//campo.removeClass("campo-desativado");
	campo.toggleClass("campo-desativado");
	//});	
	campo.removeClass("borda-verde");
	campo.removeClass("borda-vermelha");
}
