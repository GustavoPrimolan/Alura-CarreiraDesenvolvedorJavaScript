
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


