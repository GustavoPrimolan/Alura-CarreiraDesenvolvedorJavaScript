var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
	console.log("Buscando pacientes...");

	//OBJETO DO JAVASCRIPT RESPONSÁVEL POR FAZER REQUISIÇÕES HTTP
	//ANTIGAMENTE FAZIA APENAS TRANSMISSÃO DE XML HOJE JÁ FAZ OUTROS TIPOS
	var xhr = new XMLHttpRequest();

	//QUAL TIPO DE REQUISIÇÃO E PARA ONDE
	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	//QUANDO A RESPOSTA ESTIVER CARREGADA É EXECUTADA A FUNÇÃO
	xhr.addEventListener("load", function(){
		var erroAjax = document.querySelector("#erro-ajax");

		//SE O STATUS FOR POSITIVO (200)
		if(xhr.status == 200){
			erroAjax.classList.add("invisivel");
			//MOSTRA A RESPOSTA
			var resposta = xhr.responseText;
			//IMRPIME O TIPO DA VARIÁVEL
			console.log(resposta);
			console.log(typeof resposta);


			//TRANSFORMADOR JSON PARA OBJETOS JAVASCRIPT
			//PARSER DE JSON PARA JAVASCRIPT
			var pacientes = JSON.parse(resposta);
			console.log(pacientes);
			console.log(typeof pacientes);

			pacientes.forEach(function(paciente){
				adicionaPacienteNaTabela(paciente);
			});
		} else {
			console.log(xhr.status);
			console.log(xhr.responseText);
			
			erroAjax.classList.remove("invisivel");
		}
		

	});

	//ENVIA A REQUISIÇÃO
	xhr.send();
});