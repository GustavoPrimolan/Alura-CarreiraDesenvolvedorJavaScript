$("#botao-placar").click(mostraPlacar);
$("#botao-sync").click(sincronizaPlacar);


function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = $("#usuarios").val();
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.prepend(linha);

    //QUANTO TERMINAR ALGUM JOGO ELE DÁ UM slideDown()
    $(".placar").slideDown(500);
    scrollPlacar();
}

//PARA DAR SCROLL EM ALGO É NECESSÁRIO SABER PARA ONDE IRÁ O SCROLL
function scrollPlacar(){
    //PEGA A DISTÂNCIA DO PLACAR NO TOPO
    var posicaoPlacar = $(".placar").offset().top;
    console.log(posicaoPlacar + "px")
    //ANIMA O BODY
    //A FUNÇÃO ANIMATE RECEBE DOIS PARÂMETROS, 1 É A FUNÇÃO DE COMO SERÁ ANIMADO E O OUTRO É O TEMPO
    //PEGA A POSIÇÃO E TRANSFORMA EM PIXELS PARA PODER SCROLLAR
    $("html, body").animate(
    {
        scrollTop: posicaoPlacar+"px"
    },1000);
}

function novaLinha(usuario, palavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").addClass("botao-remover").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha() {
    event.preventDefault();

    //$(this).parent().parent().remove();
    //fadeOut NÃO REMOVE DA PÁGINA APENAS SOME COM O ELEMENTO
    //$(this).parent().parent().fadeOut();


    //DESAPARECE COM A LINHA E REMOVE ELA
    var linha = $(this).parent().parent();
    linha.fadeOut(1000);
    //EXISTE O fadeIn() e o fadeToggle()
    //DEPOIS DE UM SEGUNDO ELE REMOVE A LINHA
    setTimeout(function(){
        linha.remove();
    }, 1000);
    

}

function mostraPlacar(){
    //MOSTRA UM ELEMENTO
    //$(".placar").show();
    //ESCONDE UM ELEMENTO
    //$(".placar").hide();

    //MOSTRA OU ESCONDE, DEPENDE DO ESTADO DO ELEMENTO
    //$(".placar").toggle();

    //MOSTRA DESCE ATÉ O ELEMENTO QUE APARECEU
    //É POSSÍVEL PASSAR O PARÂMETRO EM MILISEGUNDOS PARA QUE SEJA O TEMPO QUE ELE IRÁ DESCER ESSA VELOCIDADE
    //$(".placar").slideDown(2000);
    //MESMA COISA QUE O SLIDE DOWN SÓ QUE AO CONTRÁRIO
    //$(".placar").slideUp(2000);

    //slideDown() + slideUp()
    //PARA ANTES DE DAR O slideToggle(), ISSO SERVE PARA CASO CLICAR VÁRIAS VEZES NO BOTÃO 
    $(".placar").stop().slideToggle(600);

}

function sincronizaPlacar(){
    //ARRAY QUE VAI PEGAR NA TABELA PARA ENVIAR VIA POST
    var placar = [];
    //TODAS TRS QUE SÃO FILHAS DIRETAS DE TBODY
    var linhas = $("tbody>tr");

    //FOR EACH DO JQUERY
    linhas.each(function(){
        //ELEMENTO HTML QUE É APENAS UM HTML VAI TER AS FUNÇÕES DO HTML
        //PRIMEIRO td QUE ESTÁ NA MINHA LINHA
        //E PEGA O TEXTO
        //SELETORES AVANÇADOS DO CSS
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();
        
        //OBJETO JAVASCRIPT
        var score = {
            usuario: usuario,
            pontos: palavras
        };


        //SALVA O OBJETO NO VETOR
        placar.push(score);

    });

    //OS DADOS PARA SEREM ENVIADOS VIA POST TÊM QUE SER COMO UM OBJETO JAVASCRIPT
    var dados = {
        placar: placar
    };

    $.post("http://localhost:3000/placar", dados, function(){
        console.log("Salvou o placar no servidor");
        //QUANDO A REQUISIÇÃO OCORRE DE ACORDO ELE ABRE A CAIXINHA EM CIMA DO BOTÃO
        //E MOSTRA NO CONTEÚDO DA CAIXA O SUCESSO
        $(".tooltip").tooltipster("open").tooltipster("content", "Sucesso ao sincronizar");
    })
    //CASO FALHE ELE ABRE O PLUGIN TOOLTIPSTER NO BOTÃO E MOSTRA A MENSAGEM FALHA
    .fail(function(){
        $(".tooltip").tooltipster("open").tooltipster("content", "Falha ao sincronizar");
    })
    //SEMPRE FECHA DEPOIS DE 1,2 SEGUNDOS
    .always(function(){
        setTimeout(function(){
            $(".tooltip").tooltipster("close");
        }, 1200);
        
    });
}

function atualizaPlacar(){

    $.get("http://localhost:3000/placar", function(data){
        //NECESSÁRIO O $ PARA PODER USAR AS FUNÇÕES DO JQUERY UTILIZANDO OS dados RECEBIDOS
        //DA API
        $(data).each(function(){
            //PEGA O USUÁRIO E OS PONTOS DOS DADOS  
            var linha = novaLinha(this.usuario, this.pontos);
            //COLOCA O EVENTO DE REMOVER LINHA
            linha.find(".botao-remover").click(removeLinha);
            //ADICIONA A LINHA NO TBODY
            $("tbody").append(linha);
        });
    });

}