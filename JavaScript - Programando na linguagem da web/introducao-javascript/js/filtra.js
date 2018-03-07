var campoFiltro = document.querySelector("#filtrar-tabela");

//EVENTO DE DIGITAR NO CAMPO E IR FILTRANDO DE ACORDO COM O QUE FOR DIGITADO
campoFiltro.addEventListener("input", function(){
	//PEGA O VALOR DO DONO DO EVENTO
	console.log(this.value);

	var pacientes = document.querySelectorAll(".paciente");
	
	//SE ESTÁ ESCREVENDO FAZ A FILTRAGEM
	if(this.value.length > 0){

		for(var i = 0; i < pacientes.length; i++){
			var paciente = pacientes[i];
			var tdNome = paciente.querySelector(".info-nome");	
			var nome = tdNome.textContent;
			//CRIA UMA EXPRESSÃO REGULAR, O QUE ELA BUSQUE E COMO ELA BUSQUE
			//insensitive QUE BUSCA POR MAIÚSCULO E MINÚSCULO
			var expressao = new RegExp(this.value, "i");


			//SE O NOME DO PACIENTE FOR DIFERENTE EU ESCONDO O PACIENTE
			if(!expressao.test(nome)){
				paciente.classList.add("invisivel");
			}else{
				paciente.classList.remove("invisivel");
			}
		}

	//SE NÃO ESTÁ ESCREVENDO REMOVE A CLASSE invisivel DE TODAS OS PACIENTES
	} else {
		for(var i = 0; i < pacientes.length; i++){
			var paciente = pacientes[i];
			paciente.classList.remove("invisivel");
		}
	}


});