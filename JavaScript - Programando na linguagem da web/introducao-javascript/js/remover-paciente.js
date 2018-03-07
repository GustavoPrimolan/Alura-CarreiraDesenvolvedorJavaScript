//var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

//event É UM OBJETO QUE DIZ QUEM FOI CLICADO
tabela.addEventListener("dblclick", function(event){
	console.log(event.target);

	var alvoEvento = event.target;
	var paiDoAlvo = alvoEvento.parentNode; // TR DO PACIENTE QUE DESEJA SER REMOVIDA
	paiDoAlvo.classList.add("fadeOut");
	
	//ESPERA UM TEMPO PARA QUE SEJA EXECUTADO O CSS PARA FAZER O REGISTRO SUMIR DEVAGAR
	//ESPERA 500 MILISEGUNDOS
	setTimeout(function(){
		paiDoAlvo.remove();	
	}, 500);
	
	


	//REMOVENDO EM UMA LINHA
	//event.target.parentNode.remove();


});

/* ESSA SERIA UMA FORMA PARA DEIXAR O EVENTO ESCUTANDO PARA CADA LINHA DE PACIENTE
MAS NÃO É UMA FORMA OTIMIZADA POIS COLOCA UM ESCUTADO EM TODAS AS LINHAS
E NÃO FUNCIONA PARA REGISTROS NOVOS
pacientes.forEach(function(paciente){
	//ESCUTA UM EVENTO DE DUPLO CLIQUE	
	paciente.addEventListener("dblclick", function(){
		console.log("Fui clicado com duplo clique");
		//PEGA O PACIENTE E REMOVE A LINHA
		//O this ESTÁ ATRELADO AO DONO DO EVENTO
		this.remove();
	});


});
*/

