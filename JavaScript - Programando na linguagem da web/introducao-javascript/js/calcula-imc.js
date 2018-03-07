//SAÍDA PARA UM POPUP
//alert("Olá Mundo!");
//APARECE NO CONSOLE NO NAVEGADOR
//console.log("Oi mundo!");

//console.log(document);
//PEGA A TAG 1 INTEIRA
//PEGA OS ELEMENTOS QUE TEM A CLASS titulo, IDEPENDENTIMENTE DA TAG
var titulo = document.querySelector(".titulo");
//IMPRIME A TAG MAIS O CONTEÚDO
console.log(titulo);

//IMPRIME SÓ O CONTEÚDO DA TAG
console.log(titulo.textContent);

//MUDA O TEXTO DA TAG QUE TEM CLASSE TÍTULO
titulo.textContent = "Aparecida Nutricionista";

console.log("FUI CARREGADO EM UM ARQUIVO JS EXTERNO");

//RETORNA A LISTA DE PACIENTES
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

	var paciente = pacientes[i];

	//CAPTURA PESO
	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	//CAPTURA ALTURA
	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);


	//CAPTURA IMC
	var tdImc = paciente.querySelector(".info-imc");

	//VALIDAÇÃO DO PESO
	if(!pesoEhValido){
		console.log("Peso inválido!");
		pesoEhValido = false;
		tdImc.textContent = "Peso Inválido";
		//ESTILO DA TAG
		//ESTILO COM 2 PALAVRAS TEM QUE USAR O CAMEL CASE
		//ENTRETANTO É UMA PRÁTICA RUIM MUDAR A COR DIRETAMENTE NO JAVASCRIPT
		//A BOA PRÁTICA É MUDAR A CLASSE PARA QUE O CSS CONSIGA ALTERAR A COR AUTOMATICAMENTE
		//paciente.style.backgroundColor = "lightcoral";
		//ADICIONA A CLASSE QUE MODIFICA O CSS PARA MIM
		paciente.classList.add("paciente-invalido");
	}

	if(!alturaEhValida){
		console.log("Altura inválida!");
		alturaEhValida = false;
		tdImc.textContent = "Altura Inválida";
		//ESTILO DA TAG
		//ESTILO COM 2 PALAVRAS TEM QUE USAR O CAMEL CASE
		//paciente.style.backgroundColor = "lightcoral";
		paciente.classList.add("paciente-invalido");
	}

	if(alturaEhValida && pesoEhValido){
		//ARRUMA AS CASAS DECIMAIS PARA 2
		tdImc.textContent = calculaImc(peso, altura);
	}

	console.log(paciente); //tr
	console.log(tdPeso);	//td
	console.log(peso);
	console.log(altura);
}


//QUANDO CLICAR NA APARECIDA NUTRICIONISTA ACONTECE ALGO
//ESCUTA O EVENTO
//FICA ESCUTANDO O EVENTO DE CLICK
//QUANDO FOR CLICADO NO TITULO SERÁ EXIBIDO A FUNÇÃO mostraMensagem
//FORMA DE FUNÇÃO NOMEADA
/*
titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
	console.log("Olá eu fui clicado");
}
*/
//FORMA DE FUNÇÃO ANÔNIMA
titulo.addEventListener("click", function(){
	console.log("Olha só posso chamar uma função anônima");
});

function validaPeso(peso){
	
	if(peso > 0 && peso < 1000){
		return true;
	}

	return false;

}

function validaAltura(altura){
	
	if(altura >= 0 && altura <= 3.0){
		return true;
	}

	return false;
}

function calculaImc(peso, altura){
	var imc = 0;

	imc = peso / (altura * altura);

	//FUNÇÃO RETORNA O IMC COM DUAS CASAS DECIMAIS
	return imc.toFixed(2);
}