//BUSCA O BOTÃO DE ADICIONAR
var botaoAdicionar = document.querySelector("#adicionar-paciente");
//EVENTO PARA QUANDO CLICAR NO BOTÃO EXECUTA A FUNÇÃO
botaoAdicionar.addEventListener("click", function(event){
	//PREVINE O COMPORTAMENTO PADRÃO PARA QUANDO CLICAR NÃO RECARREGAR A P´´AGINA
	event.preventDefault();

	var form = document.querySelector("#form-adiciona");
	//PEGA A TAG INTEIRA DO INPUT ALTURA
	console.log(form.altura);
	//PEGA O VALOR DO INPUT
	console.log(form.altura.value);

	var paciente = obtemPacienteDoFormulario(form);

	//IMPRIME O OBJETO PACIENTE
	console.log(paciente);
	//IMPRIME A GORDURA DO PACIENTE
	console.log(paciente.gordura);
	
	var erros = validaPaciente(paciente);


	//SE NÃO FOR VÁLIDO ELE NÃO ADICIONA NA TABELA
	if(erros.length > 0){
		exibeMensagensDeErro(erros);
		return;
	}


	adicionaPacienteNaTabela(paciente);

	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";
	console.log(mensagensErro);
	form.reset();
});


function adicionaPacienteNaTabela(paciente){
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form){
	
	//OBJETO NO JAVASCRIPT
	var paciente = {
		//ATRIBUIO O VALOR DO NOME DO FORMULÁRIO NO ATRIBUTO nome
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		//INSERE O IMC EXECUTANDO A FUNÇÃO calculaImc, PASSANDO O PESO E A ALTURA
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function montaTr(paciente){
	//CRIA UM ELEMENTO NO HTML
	//NO CASO, CRIA UMA TR PQ UM PACIENTE É UMA TR
	var pacienteTr = document.createElement("tr");

	pacienteTr.classList.add("paciente");


	//COLOCA DENTRO DA TR AS TDs
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gorduraTd"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));


	return pacienteTr;
}

function montaTd(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente){

	var erros = [];
	if(!validaPeso(paciente.peso)){
		erros.push("Peso é inválido!");
	}

	if(!validaAltura(paciente.altura)){
		erros.push("Altura é inválida!");
	}

	//SE O NOME DO PACIENTE FOR EM BRANCO
	if(paciente.nome.length == 0){
		erros.push("O nome não pode ser em branco");
	}

	//SE A GORDURA FOR VAZIA
	if(paciente.gordura.length == 0){
		erros.push("Gordura do paciente não pode ser em branco");
	}

	if(paciente.peso.length == 0){
		erros.push("O peso não pode ser em branco");
	}

	if(paciente.altura.length == 0){
		erros.push("A altura não pode ser em branco");
	}

	return erros;

}

function exibeMensagensDeErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	
	//TODA VEZ QUE EXIBIR AS MENSAGENS DE ERRO APAGA AS ANTIGAS
	ul.innerHTML = "";

	//FOR EACH DO JAVASCRIPT PASSANDO COMO PARÂMETRO CADA ELEMENTO DO ARRAY
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});

}

