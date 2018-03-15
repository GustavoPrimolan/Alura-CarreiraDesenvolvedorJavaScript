

function inserePlacar(){
	//TABLE QUE ESTÁ DENTRO DO PLACAR
	var corpoTabela = $(".placar").find("tbody");
	var usuario = "Gustavo";
	var numPalavras = $("#contador-palavras").text();
	
	//var botaoRemover = "<a href='#'><i class='small material-icons'>delete</i></a>";

	console.log(numPalavras);

	/*
	var linha = "<tr>"+
					"<td>"+ usuario + "</td>" +
					"<td>" + numPalavras + "</td>" +
					"<td>" + botaoRemover + "</td>" +
				"</tr>";
	*/
	//IMPLEMENTAÇÃO ACIMA MUDOU FORMA CORRETA É CRIAR UM MÉTODO QUE RETORNE UMA NOVA LINHA SEM SER UMA STRING
	//ELE É UM OBJETO DO JAVASCRIPT
	//PODENDO ACRESCENTAR EVENTOS	
	var linha = novaLinha(usuario, numPalavras);

	//QUANDO CLICAR NO BOTÃO REMOVER, ELE REMOVE A LINHA
	linha.find(".botao-remover").click(removeLinha);

	//ADICIONA A LINHA DENTRO DO TBODY
	//FUNÇÃO append SEMPRE ADICIONA NO FINAL DA TABELA
	//corpoTabela.append(linha);

	//O MÉTODO prepend ADICIONA NO INÍCIO DA TABELA
	corpoTabela.prepend(linha);

}


function novaLinha(usuario, numPalavras){

	//AQUI ELE CRIA E RETORNA A tr
	var linha = $("<tr>");
	//CRIA UMA TD E INSERE O NOME DO USUÁRIO DENTRO DA TD
	var colunaUsuario = $("<td>").text(usuario);
	var colunaPalavras = $("<td>").text(numPalavras);
	var colunaRemover = $("<td>");
	//ADICIONA A CLASSE
	//E CRIA O ATRIBUTO COM A #
	var link = $("<a>").addClass("botao-remover").attr("href","#");
	var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

	//COLOCA A TAG i DENTRO DA TAG a
	link.append(icone);

	//COLOCA O BOTÃO REMOVER DENTRO DA TD
	colunaRemover.append(link);

	//COLOCA AS COLUNAS DENTRO DA TR
	linha.append(colunaUsuario);
	linha.append(colunaPalavras);
	linha.append(colunaRemover);

	return linha;

}


function removeLinha(){


//evento É UM PARÂMETRO QUE VOCÊ RECEBE NAS FUNÇÕES JS
//$(".botao-remover").click(function(event){

	//EVITA COM QUE QUANDO SE CLICA NO BOTÃO DA LIXEIRA A PÁGINA NÃO SUBA
	event.preventDefault();

	//QUEM SOFREU O EVENTO A LINHA DELE SERÁ APAGADA
	//O $ PARA FUNCIONAR O jQuery E NÃO O JAVA SCRIPT
	//parent() PEGA O PAI DO ELEMENTO
	//DOIS parent() SOBE O PAI DO PAI
	$(this).parent().parent().remove();

//});
}
