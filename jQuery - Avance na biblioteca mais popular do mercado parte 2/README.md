<h1>Imagens do Projeto</h1>

<img src="imgs/01.PNG"/>
<img src="imgs/02.PNG"/>
<img src="imgs/03.PNG"/>
<img src="imgs/04.PNG"/>

-------------------------------------------------------------------------
<h1>Se��o 01 - Anima�es com jQuery</h1>

<h2>Introdu��o</h2>

Seja bem-vindo ao m�dulo 2 do curso de jQuery. Aqui n�s daremos continuidade ao nosso jogo Alura Typer. Nesse m�dulo focaremos em anima��es, de fade in, fade out, scroll, slide up e slide down. Vamos aprender a fazer AJAX utilizando as fun��es do jQuery, ent�o n�s iremos fazer requisi��es GET, POST, buscar e enviar dados para um servidor.

Tamb�m iremos ver os problemas mais comuns que os desenvolvedores encontram quando est�o trabalhando com AJAX, de onde eles v�m e como n�s os resolvemos. Al�m disso, estudaremos tamb�m alguns plug-ins do jQuery para melhorar algumas funcionalidades da nossa aplica��o, logo veremos como adicionamos um plug-in no nosso projeto.

Tudo isso ser� visto ao longo deste m�dulo 2 do curso de jQuery, ent�o vamos dar continuidade aos nossos estudos e colocar as m�os na massa!

<h2>Mostrando o placar</h2>

Quando come�amos o jogo, no nosso placar n�o h� nenhuma informa��o relevante para o usu�rio. O jogo poderia ser iniciado com o placar escondido, e com um bot�o para mostr�-lo ou escond�-lo. Ent�o vamos dar essa op��o ao usu�rio, ele que escolher� se quer ver o placar ou n�o.

Vamos come�ar adicionando um novo bot�o, do lado do bot�o de reiniciar. Ent�o, na p�gina principal.html, dentro da div botoes, adicionamos o bot�o:
```html
<div class="botoes">
    <a id="botao-reiniciar" class="btn-floating btn-large waves-effect waves-light red">
        <i class="material-icons">restore</i>
    </a>
    <!-- NOVO BOT�O AQUI -->
    <a id="botao-placar" class="btn-floating btn-large waves-effect waves-light green">
        <i class="material-icons">assignment</i>
    </a>
</div>
```
Como queremos que o jogo comece com o placar escondido, precisamos alterar o seu CSS, mais precisamente a propriedade display. Ent�o, no estilos.css, adicionamos:

.placar {
    display: none;
}
Agora, quando clicarmos no bot�o que adicionamos acima, o placar � mostrado. Para fazer isso, precisamos implementar um c�digo JavaScript, e como esse c�digo � referente ao placar, vamos adicion�-lo ao arquivo placar.js. Como o placar ser� mostrado quando clicarmos no bot�o, precisamos escutar o seu evento de click:

$("#botao-placar").click(mostraPlacar);
Agora precisamos implementar a fun��o mostraPlacar, que como o nome j� diz, ser� a fun��o respons�vel por mostrar o placar:

$("#botao-placar").click(mostraPlacar);

function mostraPlacar() {

}
Uma das formas de mostrarmos o placar, � justamente alterar novamente a sua propriedade CSS display de none para block. J� sabemos como alterar uma propriedade CSS com o jQuery:

$("#botao-placar").click(mostraPlacar);

function mostraPlacar() {
    $(".placar").css("display", "block");
}
Agora podemos abrir a p�gina principal.html no navegador, clicar no bot�o para mostrar o placar e perceber que o placar realmente � mostrado. Mas se clicarmos novamente no bot�o, o que acontece? Nada! O ideal � que se clicarmos novamente no bot�o, o placar seja escondido novamente. Logo, ao clicarmos no bot�o, se o placar estiver escondido, ele ser� exibido, se n�o estiver, ele ser� escondido.

Poder�amos fazer uma condi��o if para verificar o valor atual do display e invert�-lo. Mas como esse recurso de mostrar e esconder � t�o comum, o jQuery j� facilitou a nossa vida, criando a fun��o show. Com isso n�o precisamos mais alterar o CSS no JavaScript:

$("#botao-placar").click(mostraPlacar);

function mostraPlacar() {
    $(".placar").show();
}
E para esconder algo, existe a fun��o oposta, a hide:

$("#botao-placar").click(mostraPlacar);

function mostraPlacar() {
    $(".placar").hide();
}
S� que mais uma vez ter�amos que fazer um if para verificar quando chamar a fun��o show e quando chamar a fun��o hide. S� que mais uma vez o jQuery facilita a nossa vida, criando a fun��o toggle. Ela � semelhante � fun��o toggleClass, que vimos no �ltimo m�dulo, que adiciona ou remove uma classe. S� que a toggle adiciona ou esconde um elemento:

$("#botao-placar").click(mostraPlacar);

function mostraPlacar() {
    $(".placar").toggle();
}
Agora nossa funcionalidade est� pronta! Mas ela pode ficar ainda melhor. Podemos reparar que quando clicamos no bot�o para exibir o placar, nosso texto � deslocado levemente para a esquerda. Isso porque quando o placar � adicionado, a barra de rolagem do navegador tamb�m aparece, ocupando um espa�o e deslocando o texto. Podemos resolver isso mexendo novamente no CSS, para que o espa�o da barra de rolagem j� venha na p�gina, independente se houver placar ou n�o. Logo, adicionamos o seguinte c�digo no estilos.css:

body {
    overflow: scroll;
}
Para melhorar mais ainda, podemos melhorar a exibi��o do placar, porque atualmente ele aparece de maneira abrupta na p�gina. Podemos animar essa transi��o, deixando-a mais suave. Para isso, podemos ver a fun��o slideDown, que tem a mesma funcionalidade que a fun��o show, mas realiza a transi��o de uma maneira mais suave:

$("#botao-placar").click(mostraPlacar);

function mostraPlacar() {
    $(".placar").slideDown();
}
Podemos reparar agora que o placar � mostrado aos poucos, de uma maneira mais lenta. Se queremos deixar mais suave ainda, podemos passar um tempo em milissegundos por par�metro para a fun��o:

$("#botao-placar").click(mostraPlacar);

function mostraPlacar() {
    $(".placar").slideDown(600);
}
Al�m do slideDown, analogamente temos o slideUp, para mostrar um elemento. No nosso caso queremos alternar entre essas duas fun��es, para isso existe a fun��o slideToggle:

$("#botao-placar").click(mostraPlacar);

function mostraPlacar() {
    $(".placar").slideToggle(600);
}
Agora conseguimos concluir a nossa nova funcionalidade!

O que aprendemos?
Como exibir um elemento com a fun��o show e ocult�-lo com a fun��o hide.
Como alternar entre as fun��es show e hide com a fun��o toggle.
Como exibir e ocultar um elemento de uma maneira mais suave, com as fun��es slideDown e slideUp, respectivamente.
Como alternar entre as fun��es slideDown e slideUp com a fun��o slideToggle.

<h2>Removendo com fade</h2>
Um outra funcionalidade da nossa aplica��o que precisa de uma pequena anima��o � a remo��o de linhas do placar. Quando removemos alguma linha do placar, � uma remo��o abrupta, a linha desaparece, e n�o suavemente.

Para melhor experi�ncia do usu�rio, o ideal seria que a linha fosse esmaecendo aos poucos, at� chegar num ponto em que ela desapare�a.

A fun��o que � respons�vel por remover as linhas da tabela � a removeLinha, dentro do placar.js. Logo, � nela que precisamos alterar a nossa funcionalidade.

O jQuery j� possui uma fun��o que vai diminuindo a opacidade de um elemento aos poucos, at� o seu total desaparecimento, essa fun��o � a fadeOut. Ent�o vamos utiliz�-la no lugar a fun��o remove:

function removeLinha() {
    event.preventDefault();
    $(this).parent().parent().fadeOut();
}
Podemos reparar agora que o elemento vai desaparecendo aos poucos, mas ser� que ele � removido mesmo? Podemos inspecionar o HTML da tabela, e para nossa surpresa a linha continua l�, o que mudou foi que o seu display est� com valor none. Ou seja, o fadeOut vai removendo a opacidade do elemento at� um ponto e depois modifica a sua propriedade display, fazendo com que o elemento desapare�a da tela, mas continue no HTML.

N�o � exatamente isso que queremos, queremos que o elemento tamb�m seja removido do HTML, ent�o vamos chamar a fun��o remove logo ap�s a fun��o fadeOut. Para melhorar a sem�ntica do nosso c�digo, vamos tamb�m exportar a linha a ser removida para uma vari�vel:

function removeLinha() {
    event.preventDefault();
    var linha = $(this).parent().parent();

    linha.fadeOut();
    linha.remove();
}
Podemos testar novamente o nosso c�digo, mas parece que o fadeOut n�o est� funcionando! Na verdade, ele est� acontecendo, s� que o JavaScript imediatamente chama a fun��o remove, n�o esperando o t�rmino do fadeOut acontecer. O certo � s� chamarmos a fun��o remove ap�s a fun��o fadeOut* terminar. E n�s conseguimos fazer isso!

Primeiro, passamos um tempo em milissegundos por par�metro para a fun��o fadeOut, esse ser� o tempo de execu��o da fun��o:

function removeLinha() {
    event.preventDefault();
    var linha = $(this).parent().parent();

    linha.fadeOut(1000);
    linha.remove();
}
E aguardamos 1 segundo para executar a fun��o remove. N�s fazemos isso atrav�s da fun��o , que recebe dois par�metros: a fun��o que desejamos executar ap�s determinado tempo, e o pr�prio tempo que ser� aguardado para executar a fun��o:

function removeLinha() {
    event.preventDefault();
    var linha = $(this).parent().parent();

    linha.fadeOut(1000);
    setTimeout(function() {
        linha.remove();
    }, 1000);
}
Ent�o temos sempre que ter em mente que devemos remover um elemento ap�s realizar o fadeOut, j� que essa fun��o s� faz com que o elemento desapare�a da tela, mas ainda fique no HTML da p�gina.

Assim como existem o slideUp, slideDown e slideToggle, existem fun��es semelhantes que executam o fade, o fadeIn, fadeOut e fadeToggle, respectivamente.

O que aprendemos?
A fun��o fadeOut, que vai esmaecendo o elemento at� o ponto dele desaparecer, mas ele continua no HTML.


<h2>Melhorando a usabilidade</h2>
J� conseguimos ocultar e mostrar um placar atrav�s de um bot�o, mas o que acontece se clicarmos diversas vezes no bot�o, sem parar? A anima��o � realizada na mesma quantidade de vezes que o bot�o foi clicado. Logo, temos aqui um comportamento meio esquisito, mas como resolvemos isso? N�s paramos a anima��o antes de come�ar uma nova!

Como assim? Antes de realizarmos a anima��o, paramos a que estiver acontecendo atrav�s da fun��o stop do jQuery. Essa fun��o faz exatamente o que precisamos, a anima��o que estiver acontecendo no momento � interrompida, e uma pr�xima � iniciada. Ent�o, no arquivo placar.js, a fun��o mostraPlacar ficar� assim:

function mostraPlacar() {
    $(".placar").stop().slideToggle(600);
}
Agora, ao clicarmos diversas vezes no bot�o do placar, a anima��o n�o ser� executada v�rias vezes, s� ser� executada a �ltima anima��o que n�s chamamos!

O que aprendemos?
A fun��o stop, para controlar melhor as nossas anima��es.

<h2>Animando o scroll</h2>

Um usu�rio que n�o conhe�a o nosso jogo, que esteja jogando pela primeira vez, pode ter a impress�o de que, no momento que o jogo acaba, nada acontece. Seria muito bom que o placar seja aberto sempre que um jogo acabar, assim o usu�rio pode visualizar imediatamente a sua pontua��o.

S� que n�o adianta apenas exibirmos o placar para o usu�rio, pois as pontua��es ficam no final da p�gina. O ideal seria que o placar seja aberto, e a p�gina automaticamente seja scrollada para baixo, para a exibi��o completa do mesmo.

Se queremos fazer isso no momento em que o jogo termine, ou seja, no momento que a pontua��o seja inserida no placar, precisamos alterar a fun��o inserePlacar, no arquivo placar.js. Primeiramente queremos que o placar seja aberto, logo vamos dar um slideDown nele, como j� fizemos anteriormente:

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Douglas"
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);

    // NOVA LINHA AQUI
    $(".placar").slideDown(500);
}
Agora toda vez que um jogo � finalizado, o placar � aberto. Falta apenas a p�gina ser scrollada para baixo. Vamos separar essa feature em uma nova fun��o, chamada scrollPlacar:

function scrollPlacar() {

}
Antes de darmos scroll para algum lugar, precisamos saber aonde esse lugar est� na p�gina, precisamos de uma refer�ncia. E para isso existe a fun��o offset do jQuery. Ela nos d� a posi��o em que determinado elemento se encontra na p�gina.

Se queremos achar em que posi��o o placar se encontra, basta selecionarmos-o e chamar a fun��o offset:

$(".placar").offset();
Essa fun��o nos retorna a dist�ncia em que o elemento est� do topo e da esquerda da p�gina. Se acessarmos o valor do topo (top), teremos o valor exato para onde queremos scrollar a p�gina. Ent�o, voltando � fun��o scrollPlacar, obteremos esse valor:

function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top;
}
Agora precisamos animar a nossa p�gina. Para isso, precisamos ver primeiramente o que queremos animar. Queremos que a p�gina inteira scrolle para baixo, p�gina inteira, em outras palavras, significa que queremos que o body inteiro seja animado.

Para animar algo, utilizamos a fun��o animate do jQuery. Ela recebe dois par�metros, um objeto que cont�m as propriedades CSS a serem animadas e os seus valores, e o tempo de dura��o da anima��o. Vamos por partes, primeiro vamos dizer que a anima��o deve durar 1 segundo (1000 milissegundos):

function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top;

    $("body").animate(
    {

    }, 1000);
}
Para conseguirmos fazer o scroll do body, utilizaremos a propriedade scrollTop, ela recebe um valor em pixels, que representa a posi��o da nossa p�gina para onde desejamos scrollar a p�gina.

Queremos que a p�gina des�a at� a posi��o do placar, certo? E j� temos acesso a esse valor, s� que ele n�o est� em pixels, ele � apenas um n�mero! Ent�o vamos concatenar esse valor � sigla px:

function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top;

    $("body").animate(
    {
        scrollTop: posicaoPlacar + "px"
    }, 1000);
}
�timo, agora com a fun��o scrollPlacar pronto, precisamos cham�-la logo depois que o placar � aberto, na fun��o inserePlacar:

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Douglas"
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);

    $(".placar").slideDown(500);
    scrollPlacar();
}
Podemos abrir o jogo e verificar o novo comportamento. Assim que o jogo � finalizado quando o tempo se esgota, o placar � aberto e a p�gina � posicionada, � scrollada at� o placar.

O que aprendemos?
A trabalhar com a fun��o animate, para animar qualquer propriedade do CSS.

<h2>Existem 1000 maneiras de se fazer...</h2>
H�lio criou a seguinte classe em um dos arquivos css do projeto:

.invisivel {
  display: none;
}
Ele tamb�m criou a seguinte estrutura HTML que possui uma lista de promo��es:

```html
  <button id="botao-promocao">Promo��es</button>
  <ul class="promocoes">
    <li>Bermuda de algod�o</li>
    <li>Sand�lia de borracha</li>
  </ul>
  <script="jquery.js">
```
Ele deseja ora ocultar e ora exibir a lista de promo��es toda vez que clicar no bot�o de promo��es. Ou seja, se ele clicar no bot�o com a lista sendo exibida, a lista deve ser ocultada, se ele clicar com ela oculta, ela deve ser exibida.

Marque todas as op��es abaixo que possui um c�digo funcional que realiza a tarefa desejada por H�lio.
R:$('#botao-promocao').click(function() {

  var promocoes = $('.promocoes');
  if(promocoes.is(':visible')) {

    promocoes.hide();
  } else {
    promocoes.show();
  }

});
 
O jQuery possui a fun��o is que permite consultar uma pseudo class. Toda vez que um elemento esta com display diferente de none ele ganha a pseudo classe :visible . A fun��o is retorna true caso o elemento esteja vis�vel. Se ele estiver vis�vel, precisamos escond�-lo e isso � feito atrav�s da fun��o hide. Para exibir o elemento, � usada a fun��o show.

Alternativa correta
$('#botao-promocao').click(function() {

  $('.promocoes').toggleClass('invisivel');

});
 
A fun��o toogleClass (n�o confundir com a fun��o toggle) adiciona uma classe caso ela n�o exista no elemento. Se existir, ela remove a classe.

Alternativa correta
$('#botao-promocao').click(function() {

  $('.promocoes').toggle();

});
 
A fun��o toggle � um atalho para as fun��es hide e show. Quando ela � chamada para um elemento vis�vel, o elemento fica invis�vel. Quando � chamada para um elemento invis�vel, ela torna o elemento vis�vel.

Alternativa correta
$('#botao-promocao').click(function() {

  var promocoes = $('.promocoes');
  if(promocoes.hasClass('invisivel')) {

    promocoes.removeClass('invisivel');
  } else {
    promocoes.addClass('invisivel');
  }

});
 
Esta correta! o jQuery possui a fun��o hasClass que retorna true se um elemento possui ou n�o uma classe. Na condi��o, removemos a classe invisivel caso o elemento j� a tenha e a adicionamos caso ele n�o a tenha. Todo esse processo � feito a cada clique do usu�rio.

Todas a op��es est�o corretas! Existem 1000 maneiras de se atingir um mesmo objetivo. Contudo, h� sempre aquela que escrevemos menos.

<h2>Escondendo ou exibindo de maneira elegante</h2>
Suzana criou um c�digo HTML para exibir uma lista de funcion�rios do m�s. Quando a p�gina � carregada, ela deve estar escondida e quando um bot�o for clicado, ela deve ser exibida lentamente de cima para baixo, para dar aquele ar de suspense. Com certeza se ela fosse exibida totalmente assim que o bot�o fosse clicado n�o haveria mist�rio.

Segue o HTML:
```html
  <button id="botao">Clique para saber os funcion�rios do m�s!</button>
  <ul class="funcionarios invisivel">
    <li>Douglas Quintanilha</li>
    <li>Fl�vio Almeida</li>
    <li>Hugo Roque</li>
  </ul>
  <script="jquery.js">
```
A lista j� come�a escondida devido � presen�a da classe invisivel. Segue a defini��o da classe:

.invisivel {
  display: none;
}
Qual das op��es abaixo implementa corretamente o efeito de exibi��o procurado por Suzana?
DICA: H� novidades que voc� n�o viu no v�deo e para isso precisar� testar o c�digo. A resposta do instrutor explicar� as novidades para engrandecer o conhecimento!

R: $('#botao').click(function() {

    $('.funcionarios').slideDown(2000);
});
 
A fun��o slideDown aceita recebe como par�metro um tempo em milissegundos. Neste exemplo, a transi��o demorar� dois segundos para ser conclu�da.

<h2>Fade que n�o</h2>
Onde est� o meu fade?
Luciano decidiu fazer um teste. Ele criou uma lista e toda vez que um item dessa lista receber um clique duplo ele deve ser removido.
```html
<ul>
	<li>A</li>
	<li>B</li>
	<li>C</li>
</ul>
<script src="jquery.js"></script>
<script>
	$('li').dblclick(function(){
		$(this).remove();
	});
</script>

Lembre-se que no evento this ser� uma refer�ncia para a li clicada. Contudo, essa refer�ncia ser� um elemento do DOM. Elementos nativos do DOM n�o possuem os m�todos de jQuery, foi por isso que this foi promovido a um objeto do jQuery atrav�s de $(this) para ent�o podermos chamar a fun��o remove().

Luciano ent�o decidiu aplicar o fade:
```html
<ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
</ul>
<script js="jquery.js"></script>
<script>
    $('li').dblclick(function() {
        $(this).fadeOut().remove();
    })
</script>
```
O problema dessa solu��o � que o elemento � removido antes do fade ser processado, sendo assim, o evento visual continua como no c�digo anterior, com a linha sendo removida abruptamente.

Qual das op��es abaixo garante que o m�todo remove ser� chamado ao t�rmino do efeito de fade?

$('li').dblclick(function() {

    var $this = $(this);

    $this.fadeOut(function() {
        $this.remove();
    })
});
 
Para evitar de ter que fazer duas vezes $(this) Suzana decidiu guardar o this promovido para jQuery Object na vari�vel $this. O prefixo $ deixa claro para ela que � um jQuery Object e n�o um this ordin�rio.

Para que a remo��o seja feito s� depois do efeito de fadeOut ter terminado, ela passou uma fun��o para a fun��o fadeOut. Essa fun��o � chamada s� quando fadeOut termina. Sendo assim, na fun��o ela p�de chamar $this.remove() com a certeza que o efeito de fadeOut j� foi processado.


<h2>Onde est� o erro?</h2>

Geraldo, assistindo o v�deo do treinamento criou aquela fun��o que realiza o scroll suave do placar:

function scrollPlacar() {

    var posicaoPlacar = $('.placar').offset().top;

    $('body').animate({ scrollTop: posicaoPlacar}, 1000);
}
O problema que o c�digo n�o esta funcionando. Consegue identificar o problema? N�o � necess�rio responder, a ideia � que voc� enxergue o ponto que precisa ser alterado. A seguir, voc� ver� a solu��o na resposta do instrutor.
R:O erro � que o valor do offset n�o foi passado com uma unidade de medida, no caso px:

function scrollPlacar() {

    var posicaoPlacar = $('.placar').offset().top;

    $('body').animate({ scrollTop: posicaoPlacar + 'px'}, 1000);
}

<h2>Menu ioi�</h2>
Jo�o est� montando um menu de dropdown em seu site de receitas, aonde ele exibe as op��es do menu quando o usu�rio coloca o mouse sobre o mesmo, e esconde assim que ele tira o mouse. Ele est� se aproveitando dos eventos de mouseenter e de mouseleave para diagnosticar quando o usu�rio est� com o mouse sobre o t�tulo do menu ou n�o. Este � o c�digo de seu menu:

```html
<h1 id="dropdown">Menu</h1>
<ul style="display: none;" id="opcoes">
    <li>Massas</li>
    <li>Carnes</li>
    <li>Saladas e Vegetais</li>
</ul>
```
E o JS que controla a anima��o:

$("#dropdown").mouseenter(function() {
    $("#opcoes").slideDown();
});

$("#dropdown").mouseleave(function() {
    $("#opcoes").slideUp();
});
O menu de Jo�o funciona corretamente, por�m quando o usu�rio passa v�rias vezes em um curto espa�o de tempo com o mouse sobre o Menu, ele fica subindo e descendo continuamente, pois os eventos de abrir e fechar o menu s�o acionados diversas vezes. Jo�o gostaria que o menu dele s� respondesse a �ltima itera��o com o usu�rio e que o menu n�o apresentasse este efeito de ioi� quando o usu�rio n�o est� interagindo com ele.

Qual c�digo abaixo ajuda o Jo�o a melhorar seu menu ?

$("#dropdown").mouseenter(function() {
    $("#opcoes").stop().slideToggle();
});

$("#dropdown").mouseleave(function() {
    $("#opcoes").stop().slideToggle();
});

A fun��o .stop() serve para interromper uma anima��o antes de come�ar a pr�xima. Quando utilizamos a chamada de .stop() antes de invocar o prox�mo .slideUp/Down , fazemos com que a anima��o anterior seja interrompida antes de dar in�cio a pr�xima, o que impede que v�rias anima��es fiquem encadeadas uma nas outras e crie um menu que fica subindo e descendo constantemente caso o usu�rio acione repetidas vezes os eventos.

<h2>Controlando o esmaecer</h2>
Qual dos c�digos abaixo configura corretamente o efeito de fadeIn para que dure 1,5 segundos, e o evento de fadeOut para que dure 4 segundos?
R:$("#elemento").fadeIn(1500);
$("#elemento").fadeOut(4000);
Conseguimos configurar a dura��o das fun��es de anima��o do jQuery passando para elas velocidade, em formato de n�mero, para a fun��o. Ent�o se desejamos que um fade dure 2 segundos, devemos informar 2000 milissegundos, pois a anima��es do jQuery trabalham com milissegundos como unidade de medida.

Tamb�m � poss�vel passar outros par�metros para as fun��es de anima��o, como objetos que configuram mais especificamente como a anima��o deve se comportar, conseguindo at� mesmo configurar certas fun��es para serem executadas ao fim de uma anima��o. Voc� pode conferir mais sobre estes detalhes na documenta��o.
http://api.jquery.com/fadein/

----------------------------------------------------------------------------------------
<h1>Se��o 02 - Buscando frases via Ajax</h1>

<h2>Trocando as frases</h2>
J� melhoramos bastante a usabilidade do nosso jogo. O que podemos fazer agora � disponibilizar outras frases para o usu�rio poder digitar, al�m da atual que j� est� por padr�o.

Atualmente, se o usu�rio quiser digitar outra frase, ele tem que ir at� o HTML da p�gina e modific�-lo, al�m de ter que reiniciar a p�gina e perder os scores que est�o no placar. O que queremos fazer aqui � disponibilizar algumas frases em um servidor, e o usu�rio ir trocando-as clicando em um bot�o, por exemplo, assim ele poder� ver como ficar� o seu placar em frases diferentes, isso ser� bastante �til para diversificar o nosso jogo.

Selecionando frases aleat�rias
Primeiramente, temos que adicionar o bot�o que alterar� a frase do jogo. Ele ficar� dentro da div botoes, na p�gina principal.html:

```html
<div class="botoes">
    <!-- outros bot�es -->
    <a id="botao-frase" class="btn-floating btn-large waves-effect waves-light blue">
        <i class="material-icons">shuffle</i>
    </a>
</div>
```
Por enquanto esse bot�o n�o faz nada, para ele fazer algo precisamos implementar seu c�digo JavaScript. Como esse c�digo � referente � parte de frases do nosso jogo, vamos continuar mantendo a pr�tica de separar o c�digo em arquivos para cada parte do jogo. Ent�o vamos criar o arquivo frase.js e j� import�-lo na p�gina principal.html:
```html
<!-- restante da p�gina -->
    <script src="js/jquery.js"></script>
    <script src="js/materialize.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/placar.js"></script>
    <script src="js/frase.js"></script>

</body>
</html>
```
Dentro do arquivo frase.js, quando clicarmos no bot�o, vamos chamar a fun��o fraseAleatoria:

$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {

}
Mas como faremos para gerar essa frase aleat�ria? Vamos buscar a frase em um servidor, que estar� rodando na nossa pr�pria m�quina, e nesse servidor ter�o diversas frases. Ou seja, faremos uma requisi��o para o servidor, mas de modo ass�ncrono (sem atrapalhar o fluxo da nossa aplica��o), utilizando AJAX.

Para isso, o primeiro passo � subir o servidor, que j� est� disponibilizado no projeto, dentro da pasta alura-typer/servidor. � um servidor Node.js, que iremos subir na nossa m�quina, e esse servidor ir� subir a nossa aplica��o.

Aten��o: Se voc� n�o tiver o Node.js instalado na sua m�quina, n�o se preocupe, NESTE EXERC�CIO h� um passo a passo ensinando sua instala��o em diversos sistemas operacionais.

Com o Node.js instalado, para subir o servidor, abrimos o terminal e entramos dentro da pasta alura-typer/servidor. Depois � s� digitar o seguinte comando:

npm start
Podemos reparar que o terminal ficar� travado, mas isso significa que o servidor est� funcionando! Para acessar a p�gina, abrimos a URL http://localhost:3000/principal.html.

A p�gina � a mesma, s� que ao inv�s de abrirmos diretamente o seu arquivo HTML, agora estamos utilizando o servidor, mas qual � a vantagem disso? � que agora temos todo um back-end pronto, com frases prontas e salvas no banco de dados, podemos acessar e visualizar essas frases atrav�s da URL http://localhost:3000/frases.

O que queremos � consumir essas frases e disponibiliz�-las para o usu�rio, selecionando uma delas cada vez que o bot�o de frases for clicado, que por sua vez chamar� a fun��o fraseAleatoria, ela ir� no servidor, buscar� uma das suas frases e a disponibilizar� na p�gina para o usu�rio. Vamos fazer isso no pr�ximos v�deo!

Oque aprendemos?
Como levantar o servidor que ser� respons�vel por rodar nossa aplica��o
Conhecendo o reposit�rio de frases

<h2>Ajax com get</h2>
A fun��o fraseAleatoria ser� a respons�vel por fazer uma requisi��o ao nosso servidor (http://localhost:3000/frases) e pegar uma frase, para podermos modificar o HTML da nossa p�gina com essa nova frase.

O jQuery disponibiliza diversas fun��es para fazermos requisi��es AJAX, mas n�s utilizaremos aqui a $.get, por qu�? Dentre os tipos de requisi��es HTTP, como POST, DELETE, PUT, fazemos um GET quando acessamos o servidor no navegador, atrav�s da URL http://localhost:3000/frases. Ent�o faremos um GET na fun��o tamb�m, justamente para a URL mencionada:

function fraseAleatoria() {
    $.get("http://localhost:3000/frases");
}
Mas com o retorno da fun��o, precisamos fazer algo. E passamos o que queremos fazer como segundo par�metro da fun��o:

function fraseAleatoria() {
    $.get("http://localhost:3000/frases", trocaFraseAleatoria);
}
Nada nos impede de passar uma fun��o an�nima como par�metro:

function fraseAleatoria() {
    $.get("http://localhost:3000/frases", function() {

    });
}
Mas no caso chamaremos a fun��o trocaFraseAleatoria, que iremos implementar agora:

function fraseAleatoria() {
    $.get("http://localhost:3000/frases", trocaFraseAleatoria);
}

function trocaFraseAleatoria() {

}
Para a fun��o trocaFraseAleatoria ter acesso aos dados retornados pela requisi��o, � disponibilizado um argumento para a fun��o com o pr�prio retorno da requisi��o, esse argumento � o data:

function fraseAleatoria() {
    $.get("http://localhost:3000/frases", trocaFraseAleatoria);
}

function trocaFraseAleatoria(data) {

}
A fim de testes, vamos imprimir esse argumento data e verificar o seu conte�do:

function fraseAleatoria() {
    $.get("http://localhost:3000/frases", trocaFraseAleatoria);
}

function trocaFraseAleatoria(data) {
    console.log(data);
}
Recarregamos a p�gina http://localhost:3000/principal.html e clicamos no bot�o de trocar a frase. Abrimos o console e verificamos o que foi impresso: um array com v�rios objetos dentro! Cada objeto tem um _id, um tempo e uma frase. Viu como � simples? Agora � s� trabalharmos com esse array para modificar o HTML!

Exibindo uma nova frase para o usu�rio
Dentro da fun��o, temos que pegar o campo da frase e substituir o seu texto. Primeiramente vamos substituir o seu texto pela primeira frase do array data:

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    frase.text(data[0]);
}
Mas data[0] � um objeto, certo? Lembra que cada objeto tem um _id, um tempo e uma frase? Precisamos da propriedade texto, ent�o vamos peg�-la:

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    frase.text(data[0].texto);
}
Recarregamos a p�gina e clicamos no bot�o, a frase � trocada! S� que sempre que clicarmos no bot�o, ser� exibida sempre a mesma frase, precisamos exibir uma aleat�ria, mas como?

Selecionando uma frase aleat�ria
N�o queremos pegar sempre o primeiro item do array, e sim um item aleat�rio. Temos 10 itens no nosso array, ent�o precisamos selecionar um n�mero de 0 a 9, que representar� uma frase no array data. Para isso, o JavaScript possui uma fun��o que retorna um n�mero aleat�rio, a Math.random:

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.random();
    frase.text(data[0].texto);
}
O retorno dessa fun��o � sempre um n�mero aleat�rio entre 0 e 1. Mas n�s queremos um n�mero de 0 a 9, que � o tamanho do nosso array. Para obter esse n�mero, basta multiplicar o n�mero gerado pelo pr�prio tamanho do array:

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.random() * data.length;
    frase.text(data[0].texto);
}
Mesmo o n�mero j� estando na faixa que queremos, ele ainda possui muitas casas decimais, precisamos arrendond�-lo. E o JavaScript tamb�m nos auxilia nisso, atrav�s da fun��o Math.floor, que arredonda o n�mero para baixo:

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[0].texto);
}
Agora basta pegar o item do array correspondente � posi��o do numeroAleatorio:

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
}
Podemos recarregar a p�gina e gerar as frases. Agora conseguimos, ao clique de um bot�o, trocar as frases do nosso jogo!

O que aprendemos ?
Como fazer uma requisi��o AJAX com jQuery
Buscando dados com AJAX
Como gerar um n�mero aleat�rio no Javascript
Como est� estruturado a url /frases
A buscar uma frase aleat�ria com AJAX

<h2>Arrumando tempo e texto</h2>
Agora que j� conseguimos exibir uma frase aleat�ria para o usu�rio, falta atualizarmos a contagem de palavras da nova frase e o seu tempo de digita��o (que tamb�m est� no servidor). Para a contagem de palavras, j� temos uma fun��o pronta, a atualizaTamanhoFrase, do arquivo main.js. Ent�o basta cham�-la dentro da fun��o trocaFraseAleatoria

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
}
Podemos testar e ver que agora a contagem est� sendo atualizada! Falta atualizar agora o tempo de digita��o.

J� que temos uma fun��o espec�fica para atualizar o tamanho da frase, vamos criar uma tamb�m para atualizar o tempo de digita��o, dentro do arquivo main.js. Ela receber� o tempo por par�metro:

function atualizaTempoInicial(tempo) {
    $("#tempo-digitacao").text(tempo);
}
E na fun��o trocaFraseAleatoria, vamos chamar essa nova fun��o, passando o tempo do array por par�metro:

function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);

    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}
Para o tempo de digita��o continuar se o jogo for reiniciado, a fun��o precisa atualizar tamb�m o tempoInicial, ele tem que ser igual ao tempo:

function atualizaTempoInicial(tempo) {
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}
Podemos reparar tamb�m que os marcadores n�o est�o corretos, mesmo quando digitamos corretamente a frase, a borda do campo continua vermelha. Isso porque estamos pegando a frase somente quando inicializamos o marcador. Logo, temos que pegar a frase quando digitamos alguma coisa. Ent�o vamos mover a sele��o da frase para dentro da fun��o on input:

function inicializaMarcadores() {
    campo.on("input", function() {
        var frase = $(".frase").text();

        // restante do c�digo
    });
}
A mesma coisa acontece com o tempo de digita��o, ele n�o est� decrescendo corretamente. Precisamos peg�-lo dentro da fun��o one focus

function inicializaCronometro() {
    campo.one("focus", function() {
        var tempoRestante = $("#tempo-digitacao").text();

        // restante do c�digo
    });
}
Agora sim, tudo corrigido e o nosso jogo est� funcionando corretamente!

O que aprendemos ?
Adaptando nosso sistema para funcionar com os dados do AJAX
Corrigindo o tempo de cada frase

<h2>(Obrigat�rio) Instalando e subindo o servidor</h2>

Preparando o ambiente
Nosso foco � aprender jQuery, por�m alguns recursos da biblioteca necessitam de um servidor web rodando localmente em sua m�quina. Para que voc� n�o perca o foco do jQuery e n�o caia em quest�es de infraestrutura que dizem respeito a um servidor web, disponibilizamos o projeto com tudo necess�rio para subir um servidor web localmente, inclusive com todas as dep�ndencias necess�rias j� baixadas.

� importante destacar que o uso do servidor a partir de agora n�o � opcional, pois ele j� possui registrado todos os endpoints que ser�o consumidos pela nossa aplica��o AluraTyper. Por�m, para que o servidor funcione, � necess�rio ter o Node.js instalado em sua m�quina.

O Node.js � um ambiente JavaScript multiplataforma dispon�vel para Linux, Mac e Windows. Para instal�-lo, siga as instru��es abaixo referentes a sua plataforma (vers�o 4.X):

Instalando no Linux (Ubuntu)
No Ubuntu, atrav�s do terminal (permiss�o de administrador necess�ria) execute o comando abaixo:

sudo apt-get install -y nodejs
Instalando no Windows
Baixe o instalador clicando no grande bot�o install diretamente da p�gina do Node.js. Durante a instala��o, voc� apenas clicar� bot�es para continuar o assistente. N�o troque a pasta padr�o do Node.js durante a instala��o a n�o ser que voc� saiba exatamente o que est� fazendo.

Instalando no MAC
O homebrew � a maneira mais recomendada para instalar o Node.js em sua m�quina, atrav�s do comando:

brew update
brew install node
N�o usa homebrew? Sem problema, baixe o instalador clicando no grande bot�o install diretamente da p�gina do Node.js.

Rodando o servidor
Depois do Node.js ter sido instalado, dentro da pasta do projeto alura-typer que voc� descompactou anteriormente, voc� deve encontrar a pasta servidor, navegue at� ela e dentro dela execute o comando:

npm start
Repare que seu terminal ficar� aguardando indefinidamente, sinal de que o servidor est� escutando. Agora � s� abrir o navegador no endere�o http://localhost:3000/principal.html. A p�gina do seu Alura Typer ser� exibida!

A partir daqui toda vez que voc� come�ar a trabalhar no seu projeto, deve utilizar o npm start dentro da pasta servidor para subir o servidor web!

<h2>Para levantar o servidor....</h2>

Neste treinamento precisamos inicializar um servidor, que vai conter toda a estrutura de dados do nosso backend. Fazemos isto navegando at� uma pasta e depois rodando um comando espec�fico.

Qual a pasta e qual comando devemos utilizar para levantar o servidor web que ser� utilizado no AluraTyper ?

R: pasta: /alura-typer/servidor/
comando: npm start
 
Como vamos trabalhar bastante com requisi��es AJAX neste m�dulo, precisamos levantar nosso servidor web. Fazemos isto navegando pelo terminal at� a pasta /alura-typer/servidor/ e inicializando o servidor com o comando npm start. O terminal ir� congelar, mas isto � normal, s� significa que ele est� rodando corretamente, devemos deix�-lo aberto enquanto estamos utilizando a aplica��o.

Devemos sempre acessar a p�gina do Alura Typer atrav�s do endere�o localhost:3000/principal.html.

<h2>Mas para que AJAX?</h2>
Quais as vantagens de utilizarmos requisi��es AJAX ? Marque todas as alternativas que se adequarem.

R:  AJAX nos permite carregar apenas uma parte do conte�do da p�gina, fazendo com que o site do usu�rio fique mais leve , e por consequ�ncia mais r�pido na hora de carregar.

 
Alternativa correta, � muito comum encontrarmos sites que abusam desta t�cnica, conhecida como Infinte Scrolling, ou scroll infinito em portugu�s claro. O Facebook, por exemplo, carrega apenas uma parte das postagens de seu mural, e quando o usu�rio vai se aproximando do fim da p�gina ele carrega mais postagens assincronamente e os adiciona embaixo das j� existentes! Um uso muito esperto do AJAX, assim o usu�rio n�o precisa carregar todas as postagens de todos os seus amigos antes de abrir a p�gina!

Alternativa correta
Com o AJAX tamb�m conseguimos enviar dados para o servidor sem depender de um form do HTML.

 
Alternativa correta, com AJAX conseguimos enviar dados para servidor tanto via POST como com GET tamb�m, vamos ver isto nos cap�tulos a seguir!

Alternativa correta
Com requisi��es AJAX conseguimos trazer novos dados para o usu�rio sem que ele precise trocar de p�gina.

 
Alternativa correta, podemos buscar dados do servidor e alterar a p�gina sem trocar de p�gina, o que tr�s um dinamismo as nossas p�ginas.

Alternativa correta
Com AJAX, conseguimos realizar requisi��es HTTP paralelamente ao nosso Javascript, sem interromper seu funcionamento, visto que estas requisi��es s�o ass�ncronas.

 
Alternativa correta, o AJAX, como a pr�pria sigla( Asynchronous Javascript and XML) diz � ass�ncrono, ou seja, ele envia a requisi��o de modo paralelo ao nosso Javascript, sem trav�-lo esperando a resposta.

Alternativa correta
O AJAX nos permite criar aplica��es como Chat's e notifica��es, pois n�o precisamos recarregar a p�gina para trocar dados.

 
Alternativa correta, hoje em dia notifica��es s�o muito comuns na Web, e elas s�o feitas atrav�s de requisi��es ass�ncronas no navegador. J� imaginou um chat aonde temos que recarregar a p�gina toda vez para ver se chegou uma nova mensagem ? Seria uma p�ssima experi�ncia para o usu�rio!

Com AJAX conseguimos atualizar os dados da p�gina com novas informa��es mesmo ap�s o usu�rio j� ter carregado a p�gina.

 
Alternativa correta, assim como fazemos com a troca de frases na aplica��o, com requisi��es AJAX conseguimos trazer novas informa��es e atualizar dados da p�gina. Um bom exemplo deste uso s�o os sites de e-commerce, que conseguem buscar o endere�o quando informamos o CEP, isso tudo sem trocar a p�gina.

Como voc� pode ver, muito da Web hoje em dia utiliza requisi��es AJAX, ent�o domin�-las e saber fazer bem o seu uso � essencial para um desenvolvedor moderno!

<h2>E o verbo �...</h2>
Vimos neste cap�tulo que ao subir nosso servidor local temos acesso a uma lista de frases atrav�s do endere�o localhost:3000/frases. Sabemos que por debaixo dos panos o navegador utiliza um verbo do HTTP para buscar os dados e exib�-los na tela.

Contudo, se fizermos isso em nossa aplica��o Alura Typer nossa p�gina recarregar� e nossa aplica��o desaparecer�. � por isso que ao inv�s de pedirmos esses dados atrav�s do navegador, pedimos atrav�s do JavaScript, mais notadamente atrav�s de uma requisi��o ajax. Essa requisi��o n�o recarrega a tela, contudo � responsabilidade do programador obter os dados retornados e atualizar a p�gina programaticamente atrav�s de JavaScript sem perturbar o fluxo da aplica��o.

Qual das op��es abaixo possui a fun��o do jQuery que corresponde ao acesso feito atrav�s de localhost:3000/frases?

R:$.get('localhost:3000/frases')
O jQuery n�o faz apenas as m�gicas que vimos, ele tamb�m serve de ponte de liga��o do navegador com algum servidor.

<h2>Revis�o</h2>
Durante a aula, o instrutor cria a fun��o fraseAleatoria. Vejamos um esbo�o dela.

function fraseAleatoria() {

    $.get('http://localhost:3000/frases', function(retorno) {

        console.log(retorno[0].texto);
    });
}
Quando usamos $.get precisamos passar como primeiro par�metro o endere�o do que desejamos consumir via Ajax. O segundo par�metro � aquela fun��o que ser� chamada automaticamente por $.get assim que os dados retornarem do servidor. Esse retorno pode demorar um ou mais segundos, nunca sabemos quando ela ser� terminada, por isso dizemos que $.get executa um c�digo ass�ncrono.

Contudo, temos a certeza que, assim que $.get terminar o pr�prio jQuery chamar� por debaixo dos panos a fun��o que passamos como segundo par�metro em $.get. Ele n�o apenas a chamar�, mas tamb�m passar� para esta fun��o os dados que vieram do servidor. � por isso que a fun��o passada para $.get recebe um par�metro, ali�s, poderia ser qualquer nome, no caso foi escolhido o nome retorno. O importante � que tenha um par�metro seja l� qual nome for para que tenhamos acesso ao valor retornado por $.get.

O servidor retorna um array que possui v�rias frases. Ent�o, se quisermos pegar uma frase de retorno precisamos fazer retorno[0] indicando que queremos pegar o primeiro item do array. Como cada item � um objeto que possui a propriedade texto podemos fazer retorno[0].texto para saber o texto da frase.


<h2>�ndice aleat�rio</h2>
Temos o seguinte c�digo que declara um array com tr�s frases:

var frases = ['Era uma vez...', 'J� se foi o dia...', 'Quando eu era...'];
Sabemos que atrav�s de um �ndice podemos pegar uma frase do array. Por exemplo, se quisermos a segunda frase, fazemos frases[1]. Contudo, em nossa aplica��o precisaremos de um �ndice aleat�rio para pegarmos diferentes frases.

Qual das op��es abaixo gera corretamente um �ndice de 0 a 2 que permite acessar uma das tr�s frases aleat�riamente?

let frases = ['Era uma vez...', 'J� se foi o dia...', 'Quando eu era...'];
indiceAleatorio = Math.floor(Math.random() * frases.length);
console.log(frases[indiceAleatorio]);

A fun��o Math.radom() gera um n�mero aleat�rio 0.XXXXXXXXXXX. Multiplicando este valor por TR�S podemos ter resultados como:

2.588878147813304
2.014619175605749
1.952490084285769
2.7141347835586345
1.3683070496055605
1.0116465073746952
1.9945331624835434
O problema � que queremos apenas o n�mero decimal, nesse caso usamos Math.floor que arredonda o n�mero para baixo, sendo assim, a aplica��o de Math.floor nos valores acima resulta em :

2
2
1
2
1
1
1


<h2>Recebendo os dados</h2>
Quando realizamos uma requisi��o AJAX com GET, normalmente estamos interessados em buscar algum dado do servidor. Para que possamos utilizar o dado recebido via GET, devemos deixar isto bem claro no nosso Javascript.
Quais dos c�digos abaixo faz uma requisi��o AJAX, utilizando um GET, para o endere�o http://localhost:300/frase

<h2>Recebendo os dados</h2>
Quando realizamos uma requisi��o AJAX com GET, normalmente estamos interessados em buscar algum dado do servidor. Para que possamos utilizar o dado recebido via GET, devemos deixar isto bem claro no nosso Javascript.
Quais dos c�digos abaixo faz uma requisi��o AJAX, utilizando um GET, para o endere�o http://localhost:3000/frases e imprime corretamente os dados deste endere�o no console?


R:$.get("http://localhost:3000/frases", imprimeConsole);
function imprimeConsole(dados){
    console.log(dados);
}

$.get("http://localhost:3000/frases",function(dados){
    console.log(dados);
});

Quando a fun��o $.get vai retornar dados para que sejam utilizados pelo usu�rio, � preciso colocar nos argumentos da fun��o que � chamada ao sucesso da requisi��o uma vari�vel que ir� conter os dados recebidos. Normalmente colocamos um nome semat�ntico, como dados ou data, para indicar que aquele � o resultado obtido da requisi��o AJAX:

// Como fun��o an�nima
$.get("http://localhost:3000/frases",function(dados){
    console.log(dados);
});
// Como fun��o nomeada
$.get("http://localhost:3000/frases", imprimeConsole);
function imprimeConsole(dados){
    console.log(dados);
}


---------------------------------------------------------------------------------------------
<h1>Se��o 03 - Tratando erros e melhorando a experi�ncia</h1>

<h2>Lidando com erros</h2>
A nossa aplica��o est� funcionando e a pr�xima frase j� est� sendo carregada corretamente atrav�s de uma requisi��o AJAX.

Aqui pode vir uma d�vida: O que acontece se o servidor retorna um erro? Ou se a rede apresentasse algum problema na comunica��o entre navegador e servidor? Em geral, como a nossa aplica��o se comporta quando algo inesperado acontece?

Podemos simular um problema rapidamente para ver o comportamento, basta desligar o servidor e tentar carregar uma nova frase!

Ao testar podemos ver que a aplica��o n�o mostra nenhum sinal ou mensagem ao usu�rio, ela fica passiva quando algum problema acontece. O erro aparece apenas no console do navegador:



No entanto o usu�rio (o jogador) n�o tem no��o desse console pois ele � para o desenvolvedor. Temos que pensar como apresentar o erro de uma outra forma, mais amig�vel para o usu�rio!

Mensagem de erro
O primeiro passo � criar uma mensagem de erro dentro do HTML. Vamos adicionar um novo div logo abaixo do elemento p da frase:

<div class="center">
    <p id="erro">Ocorreu um erro, por favor tente novamente!</p>
</div>
E no nosso arquivo estilos.css vamos deixar o par�grafo vermelho e esconder a mensagem por padr�o:

#erro{
    color: red;
    display: none;
}
Mensagem quando AJAX falha
A nossa mensagem deve aparecer quando a requisi��o AJAX realmente falha. Lembrando que executamos a requisi��o dentro do arquivo frase.jse � exatamente a� que vamos mexer agora. M�os � obra!

Neste arquivo frase.js, na fun��o fraseAleatoria vamos enfileirar a chamada da fun��o fail � fun��o .get. A fail recebe uma fun��o an�nima com o c�digo que � executado quando um erro acontece:

function fraseAleatoria() {
    $.get("http://localhost:3000/frases2222", trocaFraseAleatoria) //URL errada para simular um problema
    .fail(function(){
        $("#erro").show(); //ao falhar mostra a mensagem de erro
    });
}
Ao testar a nossa aplica��o com servidor desligado, a mensagem aparece pois a URL da fun��o .get est� errada. No entanto, a mensagem de erro fica vis�vel para sempre - melhor seria se ela sumisse ap�s de um determinado tempo.

Dentro da fun��o fail vamos definir um timeout para chamar hide e esconder a mensagem de erro . Podemos ainda melhorar o c�digo e, inv�s de chamar show e hide, usar a fun��o toggle:


function fraseAleatoria() {
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },1500);
    });
}
Com a implementa��o da fun��o fail garantimos que o usu�rio receba uma notifica��o em caso de erro, algo indispens�vel para qualquer aplica��o mais robusta.

O que aprendemos?
A n�o deixar o usu�rio no escuro e exibir os erros para ele.
Como lidar quando o AJAX falha: a fun��o .fail()
Exibindo erros para o usu�rio.

<h2>Implementando spinner</h2>

Um outro recurso interessante para nosso usu�rio � mostrar que estamos executando a requisi��o AJAX atrav�s de uma barra de progresso e outro recurso. Assim o usu�rio fica sabendo que a aplica��o est� trabalhando por baixo dos panos que � �til quando a rede ou servidor demora.

� muito comum, quando se usa AJAX, mostrar o componente spinner para indicar a execu��o como apresentado na imagem abaixo:



Aplicando o spinner
Na nossa aplica��o, dentro da pasta public/img j� existe um arquivo spinner.gif para esse prop�sito. Agora s� falta mostrar essa imagem enquanto a requisi��o AJAX est� sendo executada.

Vamos adicionar essa imagem dentro da div da mensagem de erro, mas antes do par�grafo do erro:
```html
<div class="center">
 <img src="img/spinner.gif" alt="Spinner" id="spinner">    
 <p id="erro">Ocorreu um erro, por favor tente novamente</p>
</div>
```
Ao atualizar a p�gina j� aparece a imagem. Agora s� falta ativar e desativar programaticamente

Toggle do spinner
O spinner deve come�ar invis�vel, e ao executar a requisi��o AJAX, devemos mostrar e depois esconder.

Para come�ar invis�vel usamos o CSS, dentro do arquivo estilos.css:

#spinner{
    display: none;
}
Para mostr�-lo quando a requisi��o AJAX est� sendo executada � preciso alterar o arquivo frases.js. O spinner deve aparecer ao clicar no bot�o (#bot�o-frase). No in�cio da fun��o fraseAleatoria colocaremos:

$("#spinner").toggle(); //mostrando o spinner
E depois da requisi��o AJAX devemos esconder o spinner. Importante � que sempre devemos esconder o spinner, tanto faz se a requisi��o concluiu com sucesso ou falhou.

Para tal o jQuery oferece uma nova fun��o always que podemos chamar depois do fail. Segue o c�digo completo da fun��o fraseAleatoria:

function fraseAleatoria() {

    $("#spinner").toggle();

    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },1500);
    })
    .always(function(){ //sempre escondendo o spinner
        $("#spinner").toggle();
    });
}
Ao testar podemos ver que aparece e desaparece o spinner, indicando ao usu�rio que a requisi��o AJAX est� sendo executada. Repare tamb�m a nova fun��o always para invocar um c�digo sempre (erro ou sucesso) ap�s da requisi��o AJAX.

O que aprendemos:
Melhorando a experi�ncia do usu�rio
Criando um spinner na aplica��o
A fun��o .always() do jQuery


<h2>Pra que a rodinha?</h2>
Por que � bom para o usu�rio implementarmos a feature do spinner?
R: Para que o usu�rio tenha um feedback visual sobre o que est� acontecendo, tendo assim uma melhor experi�ncia, j� que anteriormente ao clicar no bot�o ele n�o tinha resposta alguma.
A principal ideia de implementar um spinner como um elemento visual ap�s uma requisi��o AJAX � informar ao usu�rio que o pedido dele est� sendo processado, e exibir visualmente um �cone cl�ssico que simboliza isto. � uma quest�o de melhorar a UX(User eXperience) do usu�rio na aplica��o, algo que � muito importante na constru��o de qualquer sistema hoje em dia.

<h2>A ver navios...</h2>
Rita fez um pequeno teste para saber se realmente era capaz de capturar o retorno de uma requisi��o Ajax do tipo get e exibir uma frase para o usu�rio. Ela fez dessa forma:

```html

<p class="frase">...</p>
<script>
	$.get('http://localhost:3000/frases', function(retorno){
		var primeiraFrase = retorno[0];
		$('.frase').text(primeiraFrase);
	});
</script>
```

Contudo, assim que a p�gina era carregada, a mensagem n�o era exibida. Depois de ter ficado a ver navios durante um bom tempo e de ter quebrado muito a cabe�a foi quando ela percebeu que n�o havia iniciado o servidor disponibilizado para o treinamento. Depois de subir, seu c�digo funcionou perfeitamente.

Qual das op��es abaixo altera corretamente $.get para que exiba a mensagem 'N�o foi poss�vel obter a frase do servidor' no par�grafo da p�gina?

$.get('http://localhost:3000/frases', function(retorno) {

    let primeiraFrase = retorno[0];
       $('.frase').text(primeiraFrase);

}).fail(function() {
    $('.frase').text('N�o foi poss�vel obter a frase do servidor');
});
� muito importante lidar com erros nas requisi��es Ajax porque diversas coisas podem acontecer como a nossa internet ter ca�do, endere�o errado do servi�o e at� mesmo o servidor estar fora do ar.

<h2>Evitando instru��o duplicada</h2>
Tatiana aprendeu a lidar com poss�veis erros em requisi��es e escreveu o seguinte esbo�o de c�digo:

```html
$.get('http://localhost:3000/frases', function(retorno){
	console.log("Requisi��o efetuada com sucesso");
	console.log("FIM");

}).fail(function(){
	console.log("Requisi��o fracassou!");
	console.log("FIM");
});	

```
Ela imprime uma mensagem de sucesso e uma mensagem de fracasso, contudo, veja que nos dois casos ela tamb�m imprime a mensagem "FIM" para indicar o fim da requisi��o.

Qual das op��es abaixo altera o c�digo de Tatiana para que exibe em um �nico lugar a mensagem FIM logo depois da mensagem de sucesso ou fracasso?

R: 
    console.log('requsi��o efetuada com sucesso');

}).fail(function() {

    console.log('requsi��o fracassou!');


}).always(function() {
    console.log('FIM');
});
A fun��o passada para always ser� sempre chamada independente de a requisi��o foi bem ou mal sucedida.

--------------------------------------------------------------------------------------------------------
<h1>Se��o 04 - Buscando dados com AJAX</h1>

J� implementamos o nosso spinner e est� funcionando corretamente, vamos continuar aprender mais sobre AJAX.

O nosso usu�rio pode mudar a frase atrav�s do bot�o que escolhe uma frase aleatoriamente. Para melhorar ainda mais a experi�ncia seria interessante se o usu�rio pudesse escolher a frase, sem depender do sorteio. A ideia � que o usu�rio coloque a id da frase e baseado nessa id carregaremos a frase do servidor, com AJAX!

Preparando o HTML
Antes de mais nada � preciso ter um novo bot�o e um input para digitar a id. No arquivo principal.html adicionaremos mais um bot�o usando a id botao-frase-id e a cor cyan

<a id="botao-frase-id" class="btn-floating btn-large waves-effect waves-light cyan">
    <i class="material-icons">repeat_one</i>
</a>
Repare a cor cyan e a id botao-frase-id da tag a.

Logo abaixo colocaremos o input para digitar a id da frase. Como aceitamos apenas n�meros inteiros vamos usar o atributo type="number" com min="0":

<input type="number" min="0" id="frase-id">
E para ajustar o tamanho aplicamos um estilo no nosso arquivo CSS estilos.css:

#frase-id{
    width: 40px;
}


HTTP GET com Par�metros
Com o HTML e CSS devidamente preparado falta realmente implementar a funcionalidade, ou seja, usar jQuery para enviar uma requisi��o AJAX. A ideia � que o usu�rio digite a id da frase no input e clique depois no bot�o para carregar essa frase.

J� que a funcionalidade tem a ver com frase vamos colocar o c�digo dentro do arquivo frase.js, em uma nova fun��o buscaFrase

//arquivo frase.js
function buscaFrase() {

    //fique a vontade para usar console.log()
}
Na fun��o buscaFrase devemos executar uma requisi��o GET que n�o tem novidade para a gente. A novidade � que devemos enviar tamb�m o id da frase! Para tal, criamos um objeto JavaScript e o passamos para a fun��o .get do jQuery:

//arquivo frase.js
function buscaFrase() {

    $("#spinner").toggle();

    var fraseId = $("#frase-id").val();
    var dados = {id : fraseId}; //criacao do objeto JS que guarda a id

    //passando objeto como segundo parametro
    $.get("http://localhost:3000/frases", dados, trocaFrase);
}
Dessa forma o jQuery enviar a id como par�metro da requisi��o HTTP GET!

Para melhorar a usabilidade j� vamos adicionar o spinner e o tratamento de erro como visto anterioramente:

//arquivo frase.js
function buscaFrase() {

    $("#spinner").toggle();
    var fraseId = $("#frase-id").val();

    var dados = {id : fraseId}; //criacao do objeto JS que guarda a id

    //passando objeto como segundo parametro
    $.get("http://localhost:3000/frases", dados, trocaFrase)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
    })
    .always(function(){
        $("#spinner").toggle();
    });
}
Repare tamb�m que usamos uma fun��o trocaFrase como terceiro par�metro do $.get mas essa fun��o n�o existe ainda! Vamos adicion�-la logo abaixo da fun��o buscaFrase:

//arquivo frase.js
function trocaFrase(data) {

    console.log(data);

    var frase = $(".frase");
    frase.text(data.texto); //cuidado, texto com "o" no final 
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}
E no in�cio do arquivo n�o podemos esquecer de associar o bot�o com o evento click para executar a fun��o buscaFrase quando o bot�o for acionado:

$("#botao-frase-id").click(buscaFrase);
A nossa fun��o ficou bem parecida com a que busca todas as frases com a diferen�a que aprendemos como enviar dados atrav�s da fun��o .get do jQuery.

O que aprendemos?
Como enviar dados com AJAX e jQuery
Permitindo o usu�rio buscar uma frase espec�fica
Enviando dados junto da requisi��o
Implementando a troca de frase

<h2>S� quero uma fatia do bolo, n�o o bolo inteiro!</h2>

Alfredo hoje consegue obter uma lista de frases atrav�s de $.get como no exemplo abaixo:

$.get('http://localhost:3000/frases', function(retorno) {

    console.log(retorno); // imprime a lista de frases.

});
Contudo, ele quer obter a segunda frase. Para isso ele precisou alterar seu c�digo para:


$.get('http://localhost:3000/frases', function(retorno) {

    console.log(retorno[1]); // imprime a segunda frase

});
Contudo, se tiv�ssemos 1.000.000 de frases? Ter�amos que trazer uma quantidade de dados gigante para ent�o acessar um dado espec�fico.

Aprendemos que um servidor por estar configurado para aceitar um par�metro na requisi��o get que indica para ele qual dado retornar ao inv�s de retornar uma lista inteira.

Qual das op��es abaixo altera o c�digo de Alfredo para que retorna a frase com id igual a 5?

R: var parametros = {id: 5}; // usamos id porque o servidor espera receber id. Quem define o nome do par�metro � quem criou o servidor

$.get('http://localhost:3000/frases', parametros, function(retorno) {

    console.log(retorno); // imprime a frase!

});

Nesta altura do campeonato voc� j� deve ter compreendido que para consumirmos dados de um servidor precisamos conhecer esse servidor. Geralmente quem construiu o servidor gera uma documenta��o que lista todos os endere�os poss�veis, quais verbos do HTTP usar e seus par�metros. Se voc� � a pessoal que criou o servidor, fica mais f�cil ainda saber os endere�os e par�metros.

<h2>Ser� que passei?</h2>
Teobaldo, programador front-end, consultou Tamarindo Junior, programador back-end, sobre as informa��es necess�rias para poder acessar uma lista de candidatos aprovados no vestibular. Teobaldo recebeu um cart�o com identificador 955 e quer verificar se foi aprovado.

endere�o: http://candidatox.com.br/candidatos/resultado
verbo: get
par�metro: candidatoId
retorno: "aprovado" ou "reprovado"
Com base nessa informa��o como ficaria a requisi��o Ajax de Teobaldo para saber se foi aprovado ou n�o?

R:A documenta��o fornecida pelo programador backend pode variar de empresa para empresa, mas tenha absoluta certeza que essa informa��o precisa ser passada. N�o � obriga��o do programador front-end adivinhar os endere�os e quais par�metros eles recebem.

R:$.get('http://candidatox.com.br/candidatos/resultado', { candidatoId: 955 }, function(retorno) {

    if(retorno == 'aprovado') {
        alert('APROVADO');
    } else {
        alert('REPROVADO');
    }
});

<h2>Qual erro da requisi��o?</h2>
Silvio construiu um pequeno sistema para gerenciar as contas de sua casa. O sistema possui um back end que escuta requisi��es HTTP do tipo GET, aceitando como par�metro o ID da conta que ele quer consultar. O endere�o de seu sistema � https://gerenciadodeconta.com.br/contas A tabela de IDs de Silvio � a seguinte:
 ______________________
|__ID__|_Conta_|_Org�o_|
|  1   | �gua  | Cedae |
|  2   | Luz   | Light |
|  3   | G�s   |  CEG  |
|______|_______|_______|
O sistema deve retornar se a conta j� foi paga ou n�o, e printar no console o resultado. Com todavia Silvio est� com dificuldades em fazer a requisi��o AJAX correta para enviar o ID e imprimir os dados da resposta no console. Ele tentou fazer deste modo:

var contaDeAgua = 1;
$.get("https://gerenciadodecontas.com.br/contas", resultado, function(contaDeAgua){
    console.log(resultado);
});
Obviamente Silvio n�o fez os cursos da Alura, pois sua requisi��o est� com v�rios erros. Selecione todas as op��es abaixo que apontam erros da requisi��o de Silvio:

R: Silvio est� tentando enviar o ID pelo par�metro da fun��o de sucesso, quando na verdade ao enviar um dado pelas fun��es do jQuery, devemos pass�-lo como segundo par�metro da fun��o GET.
Silvio devia esperar o resultado do GET como argumento da fun��o an�nima, e n�o como segundo par�metro da fun��o $.get(). O segundo par�metro � destinado aos dados que queremos enviar.
Se queremos enviar um dado com as fun��es do jQuery, como neste caso o ID da conta, ele deve ser uma String ou um objeto Javascript, e Silvio criou a vari�vel contaDeAgua que � um n�mero simples.
Para conseguirmos enviar dados via AJAX, com jQuery, sabemos que precisamos passar os dados como uma String ou um Objeto Javascript simples, como o segundo par�metro da fun��o $.get().

Tamb�m � preciso receber como par�metro da fun��o de sucesso uma vari�vel que ir� conter o retorno do GET.

A fun��o de Silvio ficaria correta assim:

var contaDeAgua = 1;
var dados = {
    id: contaDeAgua
};
$.get("https://gerenciadodecontas.com.br/contas", dados, function(resultado){
    console.log(resultado);
});

-------------------------------------------------------------------------------------------------------
<h1>Se��o 05 - Enviando dados com POST</h1>

<h2>Introdu��o</h2>
Apesar do nosso usu�rio j� conseguir salvar o seu score atual no placar, toda vez que ele reinicia a aplica��o o placar � zerado e ele perde todos os recordes de suas jogadas anteriores. J� que estamos trabalhando com um servidor agora, podemos disponibilizar para o usu�rio a op��o de sincronizar no servidor os dados do placar, e carregar sempre estes dados ao abrir o AluraTyper.

Ent�o para come�ar a habilitar esta possibilidade de sincroniza��o, vamos colocar um bot�o de sincronismo na nossa se��o de bot�es:

<!-- principal.html -->
<a id="botao-sync" class="btn-floating btn-large waves-effect waves-light yellow">
    <i class="material-icons">swap_vert</i>
</a>
Como este bot�o tem uma fun��o de sincroniza��o e � um pouco diferente das outras duas, vamos posicion�-lo do lado direito:

/* estilos.css */

#botao-sync{
    float: right;
}


Com o bot�o adicionado, vamos atrelar um evento de click, que vai chamar a fun��o que ser� respons�vel por sincronizar o placar:

//placar.js
$("#botao-sync").click(sincronizaPlacar);

function sincronizaPlacar(){

}
Vamos come�ar esta funcionalidade.

Como salvar no servidor?
O nosso servidor al�m da url /frases tamb�m tem dispon�vel a url /placar , que se voc� acessar pelo navegador (atr�ves de um GET) ele ir� te mostrar os dados um placar salvo.

Placar visto via GET

Repare que o servidor salva o nome do usu�rio, o n�mero de pontos que ele fez e um id qualquer do banco, que n�o precisamos nos preocupar.

No caso de enviarmos um POST, ele ir� sobrescrever o placar do servidor com o placar enviado, salvando assim este �ltimo placar.

Vamos ent�o implementar um POST para salvar os dados toda vez que o usu�rio clicar no bot�o sincroniza e um GET para carregar o placar quando o usu�rio entrar na p�gina.

O que aprendemos?
A nova url do servidor /placar
Como fazer a sincronia do placar do usu�rio para que ele n�o perca os seus dados.

<h2>Salvando placar</h2>
Se o nosso objetivo � enviar o placar via POST para o servidor, para que ele sobreescreva o placar antigo e grave o atual, temos que enviar os dados em formato de dados correto, conforme � o esperado pelo servidor.

No nosso caso, devemos enviar um array de objetos Javascript, cada objeto contendo o nome de usu�rio e o n�mero de palavras no placar. Vamos come�ar obtendo estes dados da nossa tabela do placar.

Vamos come�ar criando o array vazio dentro da fun��o sincronizaPlacar() ;

function sincronizaPlacar(){
    var placar = [];
}
Lendo a tabela placar
Queremos ler todas as linhas do placar, para ent�o coloc�-las dentro do array, ent�o vamos come�ar buscando todas as linhas da tabela:

function sincronizaPlacar(){
    var placar = [];

    var linhas = $("tbody>tr");
}
J� sabemos que a fun��o seletora do jQuery aceita qualquer seletor CSS, e desta vez utilizamos o seletor de filho direto para obter todos os <tr>'s que s�o filhos de um <tbody>.

Percorrendo as linhas de modo inteligente: a fun��o $.each()
Agora que temos todas as linhas, precisamos percorrer cada linha obtendo o nome de usu�rio e de palavras. Poder�amos utilizar um for tradicional do Javascript para percorrer o array linhas, por�m vamos utilizar um recurso do jQuery que � a fun��o each():

function sincronizaPlacar(){
    var placar = [];
    var linhas = $("tbody>tr");

    linhas.each(function(){

    });
}
A fun��o each() executa a a��o da fun��o passada por par�metro para cada item do array em que ela foi chamada, no caso, o array linhas. Uma vantagem dela � que n�o precisamos saber o tamanho do array que vamos percorrer, e ela tamb�m nos d� acesso ao pr�prio elemento que ela vai executar a fun��o atrav�s do this.

Como o this neste caso � uma das linhas da tabela, queremos ter acesso ao conte�do do primeiro e segundo <td>'s, pois s�o estes que guardam os nomes do usu�rio e o n�mero de palavras.

Vamos criar vari�veis para salvar os dois dados:

function sincronizaPlacar(){
    var placar = [];
    var linhas = $("tbody>tr");

    linhas.each(function(){
        var usuario =
        var palavras =

    });
}
Para buscar o <td> que � o primeiro filho do <tr> da itera��o que estamos, podemos utilizar uma fun��o conhecida nossa do jQuery, a fun��o .find(), que faz as buscas nos elemento filhos. Por�m n�o podemos utilizar o comando this.find(), pois o this neste caso � um objeto do Javascript que representa o elemento do HTML da linha, o <tr>. Precisamos empoderar este objeto Javascript e transform�-lo em um objeto jQuery atr�ves da fun��o jQuery, assim ela ter� acesso a fun��o .find():

function sincronizaPlacar(){
    var placar = [];
    var linhas = $("tbody>tr");

    linhas.each(function(){
        var usuario = $(this).find();
        var palavras = $(this).find();

    });
}
Buscando nos filhos com seletores avan�ados
Mas pelo o que devemos buscar com a .find() ? Pelo primeiro e segundo <td>, que cont�m os dados de usu�rio e n�mero de palavras, respectivamente. Podemos utilizar qualquer seletor CSS nas fun��es de jQuery, tanto na fun��o seletora ($) quanto na fun��o .find(), e vamos nos aproveitar deste benef�cio para utilizar um seletor que nos retorna o td que � en�simo filho da linha: O seletor nth-child():

function sincronizaPlacar(){
    var placar = [];
    var linhas = $("tbody>tr");

    linhas.each(function(){
        var usuario = $(this).find("td:nth-child(1)");
        var palavras = $(this).find("td:nth-child(2)");

    });
}
Com isto vemos a import�ncia de ter um bom dom�nio de CSS at� mesmo para trabalhar com Javascript e jQuery, j� que com isto conseguimos tirar maior proveito das nossas conhecidas fun��es de sele��o.

Como queremos obter o texto e n�o o elemento em si, vamos utilizar a fun��o .text() para obter o texto dos <td>'s.

function sincronizaPlacar(){
    var placar = [];
    var linhas = $("tbody>tr");

    linhas.each(function(){
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();

    });
}
Montando o objeto a ser enviado
A estrutura que devemos enviar para o servidor � um array de objetos, ent�o precisamos salvar os dados que obtemos de cada linha dentro um novo objeto:

function sincronizaPlacar(){
    var placar = [];
    var linhas = $("tbody>tr");

    linhas.each(function(){
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();

        var score = {

        };

    });
}
Os objetos tem que ter duas propriedas, a primeira usuario, com o nome do usuario, e a segunda pontos com a quantidade de palavras digitadas:

function sincronizaPlacar(){
    var placar = [];
    var linhas = $("tbody>tr");

    linhas.each(function(){
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();

        var score = {
            usuario: usuario,
            pontos: palavras            
        };

    });
}
Com um objeto por linha criado, basta adicion�-lo dentro do array placar utilizando a fun��o push do Javascript:

function sincronizaPlacar(){
    var placar = [];
    var linhas = $("tbody>tr");

    linhas.each(function(){
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();

        var score = {
            usuario: usuario,
            pontos: palavras            
        };

        placar.push(score);
    });
}
Fazendo um POST com Ajax: enviando o placar
Com os dados obtidos do placar, podemos come�ar a envi�-los para o nosso servidor. Precisamos realizar um AJAX,para que a p�gina do usu�rio n�o recarregue, e tem que ser um POST para que os dados sejam gravados definitivamente.

Para realizar um post AJAX com jQuery , podemos utilizar a fun��o $.post:

function sincronizaPlacar(){
    var placar = [];
    var linhas = $("tbody>tr");

    linhas.each(function(){
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();

        var score = {
            usuario: usuario,
            pontos: palavras            
        };

        placar.push(score);

        $.post("http://localhost:3000/placar");
    });
}
Passamos o endere�o para qual queremos fazer o POST, mas tamb�m precisamos passsar os dados que queremos enviar, neste caso o nosso placar, e uma fun��o para ele executar ap�s o sucesso da requisi��o.

O dado que queremos enviar � o array placar, por�m j� sabemos que s� podemos enviar como dados das fun��es de AJAX do jQuery um Objeto ou uma String, por isso vamos colocar o nosso array placar dentro de um objeto antes de pass�-lo para a fun��o $.post:

function sincronizaPlacar(){
    var placar = [];
    var linhas = $("tbody>tr");

    linhas.each(function(){
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();

        var score = {
            usuario: usuario,
            pontos: palavras            
        };

        placar.push(score);

    });

    var dados = {
        placar: placar
    };

    $.post("http://localhost:3000/placar", dados, function(){

    });
 }
Vamos adicionar uma mensagem de sucesso na fun��o de conclus�o da $.post:

function sincronizaPlacar(){
        ... //restante da fun��o
        });
    $.post("http://localhost:3000/placar", dados, function(){
        console.log("Placar sincronizado com sucesso");
    });
}
Agora jogue algumas vezes o jogo para que se crie um placar, clique no bot�o sincronizar e acesse a URL http://localhost:3000/placar para ver se o seu novo placar foi salvo com sucesso!

O que aprendemos:
A importancia de dominar o CSS quando estamos trabalhando com JS e jQuery
Utilizando seletores avan�ados com a fun��o find
A fun��o $.each() para percorrer um array
O formato correto de enviar dados com as fun��es de AJAX
Enviando dados com a fun��o $.post()


<h2>Obtendo placar</h2>
Agora que nosso placar j� est� sendo salvo no servidor, seria interessante que ele fosse carregado autom�ticamente assim que a p�gina fosse aberta. Vamos come�ar a implementar isto criando a fun��o atualizaPlacar():

//placar.js

function atualizaPlacar(){

}
Esta fun��o ser� a respons�vel por fazer um GET para a url que cont�m o placar, trazer os dados, e adicion�-los ao HTML assim que a p�gina for carregada.

Buscando dados do placar
Vamos come�ar pelo get:

//placar.js

function atualizaPlacar(){
    $.get("http://localhost:3000/placar",function(){

    });
}
Queremos receber os dados do placar, ent�o precisamos receber a vari�vel data como argumento da fun��o $.get(), pois ela que ir� conter os dados que buscamos na URL:

//placar.js
function atualizaPlacar(){
    $.get("http://localhost:3000/placar",function(data){

    });
}
Iterando pelos dados recebidos
Sabemos que na data recebemos o array que cont�m o placar, ent�o para iterar por ele vamos utilizar a nossa conhecida fun��o .each(), para ganhar acesso aos objetos individuais que cont�m a pontua��o de cada linha do placar:

function atualizaPlacar(){
    $.get("http://localhost:3000/placar",function(data){
        data.each(function(){

        });
    });
}
Se tent�ssemos executar o c�digo acima, receberi�mos um erro na cara, pois arrays do Javascript n�o tem acesso a fun��o .each(), apenas objetos jQuery. Por isso, vamos envolver a variavel data com a fun��o $ para transform�-la em objeto jQuery:

function atualizaPlacar(){
    $.get("http://localhost:3000/placar",function(data){
        $(data).each(function(){

        });
    });
}
Bom, se temos acesso a cada objeto dentro do array data, podemos construir linhas da tabela para inserir estes dados no HTML. Para a criar a linha , podemos utilizar a fun��o novaLinha(usuario,palavras), que hav�amos criado em um dos cap�tulos anteriores. Esta fun��o j� � capaz de receber o nome do usu�rio e o n�mero de palavras e criar um linha HTML para ser adicionada ao placar, basta passarmos os dados do objeto que estamos iterando:

function atualizaPlacar(){
    $.get("http://localhost:3000/placar",function(data){
        $(data).each(function(){
            var linha = novaLinha(this.usuario, this.pontos);
        });
    });
}
Com a linha criada, podemos adicion�-la no HTML,dentro do <tbody>, com a fun��o .append():

function atualizaPlacar(){
    $.get("http://localhost:3000/placar",function(data){
        $(data).each(function(){
            var linha = novaLinha(this.usuario, this.pontos);
            $("tbody").append(linha);
        });
    });
}
Carregando o placar junto da p�gina
Fica faltando apenas chamar a fun��o atualizaPlacar() assim que a p�gina � carregada, dentro de main.js:

//main.js
$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);

    atualizaPlacar();
});
Pronto! Agora o placar deve vir preenchido corretamente assim que a p�gina for carregada!

O que aprendemos:
Como carregar o placar assim que a p�gina abrir
Relembrando as fun��es: $.get, .each(), .append(), $(function(){})

<h2>Detalhe remo��o</h2>
Agora que nosso placar est� sendo carregado junto da p�gina, ficou faltando apenas habilitar o evento de click nos �cones da lixeira, ap�s as linhas serem inseridas no placar.

Para fazer isto, basta adicionarmos um evento de click no bot�o remover que fica dentro da linha gerada pela fun��o novaLinha:

function atualizaPlacar(){
    $.get("http://localhost:3000/placar",function(data){
        $(data).each(function(){
            var linha = novaLinha(this.usuario, this.pontos);

            //modificado aqui
            linha.find(".botao-remover").click(removeLinha);

            $("tbody").append(linha);
        });
    });
}
Mais uma vez estamos reaproveitando fun��es que criamos anteriormente. Agora sim o nosso placar est� carregando corretamente!

O que aprendemos:
A n�o esquecer de adicionar o evento de remo��o quando criamos uma linha com a fun��o novaLinha

<h2>Iterando com jQuery</h2>

Temos o seguinte HTML:
```html
<ul>
	<li>A</li>
	<li>B</li>
	<li>C</li>	
</ul>
```

Qual das op��es abaixo seleciona todas as li's com $('li') e itera por cada uma delas imprimindo seu conte�do no console usando $.each??

$('li').each(function() {
    var texto = $(this).text();
    console.log(texto);
});
� poss�vel usar o each do jQuery para iterarmos em um array padr�o do JavaScript:

var letras = ['a', 'b', 'c'];

$.each(letras, function() {

     console.log(this);
});
No exemplo anterior, passamos dois par�metro para $.each. O primeiro a lista que desejamos iterar e o segundo a fun��o que ser� chamada para cada item. A cada chamada this ser� a, depois, b e depois c.

Veja que each lembra a fun��o forEach que todo array possui:

letras.forEach(function(letra) {
    console.log(letra);
});
Veja que diferente de $.each, o tradicional forEach recebe como par�metro o elemento que esta iterando e n�o atrav�s de this como em $.each.


<h2>Enviando dados para o servidor</h2>

Thathiana sabe que deve acessar o endere�o http://xyzzzww.com.br/produtos para enviar produtos. S� � poss�vel enviar um por vez.

A estrutura de um produto �:

{ nome: 'XXXXX', preco: 0}
Qual das op��es abaixo constr�i corretamente a requisi��o Ajax que envia um produto?
R: $.post('http://xyzzzww.com.br/produtos', { nome: 'Guarar�', preco: 4.50}, function() {

    alert('Produto enviado com sucesso');
});
O verbo/m�todo post � usado quando desejamos enviar os dados para o servidor. J� o get quando queremos ler um dado.

---------------------------------------------------------------------------------------------------------
<h1>Se��o 06 - Same Origin Policy e Cors</h1>

Agora que aprendemos bastante sobre AJAX � hora de conversar sobre um pequeno detalhe que � preciso se preocupar quando trabalhamos com AJAX.

Lembrando que nossa aplica��o Alura Typer est� hospedada no servidor que levantamos na linha de comando. Ou seja, na hora de acessar http://localhost:3000/principal.html o servidor deveria estar em p� para servir a p�gina ao navegador

Tamb�m j� mostrei para voc�s que existe um outro servidor na rede que tamb�m est� rodando a aplica��o. Essa aplica��o � a mesma, o mesmo c�digo rodando, no entanto em uma m�quina diferente e por isso � necess�rio trocar localhost pelo IP de maquina, no nosso caso 192.168.0.83

Acessando as frases com outro IP
Se a aplica��o nessa outra m�quina possui as mesmas funcionalidades, tamb�m podemos acessar /frases para ver todas as frases dispon�veis. N�o h� mist�rio e funcionou. Ao acesssar http://192.168.0.83/frases aparece a lista de frases dessa aplica��o.

Vamos pensar que devemos puxar as frases do outro servidor que n�o � o local. Isso � algo muito comum na web. Em outras palavras, queremos pegar dados de mais de um servidor! A nossa primeira ideia � simples: No arquivo frase.js, na fun��o fraseAleatoria vamos usar o endere�o do outro servidor:

//frase.js, na fun��o fraseAleatoria
$.get("http://192.168.0.83/frases". trocaFraseAleatoria) 
//resto omitido
Como tem no outro servidor a mesma aplica��o com mesmo c�digo, o esperado � que a requisi��o funcione! Para nossa surpresa ela falha! O que funciona em uma aplica��o n�o funciona na outra! Como assim?

Entendendo a Same Origin Policy
Ao analisar o console percebemos que o navegador simplesmente n�o permitiu a requisi��o para outro servidor. Isto � pois o navegador possui uma prote��o que � chamada de Same Origin Policy.

Same Origin significa que por padr�o o navegador n�o permite chamar um outro servidor que n�o � da mesma origem. Ou seja, se a aplica��o foi carregada pelo localhost:3000, o navegador s� permite requisi��es para localhost na porta 3000. At� o protocolo importa, por exemplo o navegador n�o permite mudar a origem do http para https.

Isso tudo existe para evitar fraudes e � uma forma de impedir que o usu�rio use um site que na verdade n�o representa a origem.

CORS - Cross-Origin Resource Sharing
Voltando para nossa aplica��o, ent�o � imposs�vel carregar as frases do outro servidor? N�o �, mas nesse caso � preciso configurar as outras origens no servidor. Aqui o outro servidor (n�o a origem que j� funciona com AJAX) adiciona um cabe�alho na resposta HTTP e baseado nessa resposta o navegador permitir uma requisi��o para outra origem.

O cabe�alho � bem simples e faz parte do protocolo HTTP:

Access-Control-Allow-Origin: http://localhost:3000, http://192.168.0.83:3000
Essa forma de permitir chamar uma outra origem tamb�m � chamado de Cross-Origin Resource Sharing ou CORS.

Repare ent�o que isso n�o � uma configura��o do jQuery ou AJAX em geral. Isso � algo que o servidor precisa se preocupar e adicionar na resposta HTTP. Como nosso foco aqui � jQuery n�o vamos dar muitos detalhes pois depende muito da linguagem e framework utilizado no lado do servidor.

No nosso caso escrevemos a aplica��o servidora em node.js (JavaScript) usando o framework Express. Para habilitar CORS com Express basta utilizar:

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000, http://192.168.0.83:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
Mais infos sobre Express no link abaixo e nos nossos cursos sobre node.js!

http://enable-cors.org/server_expressjs.html

O que aprendemos?
Um dos erros mais famosos quando utilizamos AJAX
O que � o Same Origin Policy
A prote��o do Javascript contra scripts maliciosos
O que � o CORS
CORS � uma configura��o no servidor


<h2>O tal</h2>
Marlon realizou uma compra no site compradasgalaxias.com.br, mas sua mercadoria n�o foi entregue. Contudo, ele descobriu que o endere�o compradasgalaxias.com.br/situacao aceita receber o par�metro codigo. O c�digo do seu pedido � 171. Ele teve a genial ideia de criar um programa em JavaScript que fica a cada 10 segundos realizando uma requisi��o para esse endere�o para saber a situa��o de entrega.

Ele criou o arquivo teste.html e criou o seguinte c�digo:

<script src="jquery.js">
<script>

    setInterval(function() {

        $.get('compradasgalaxias.com.br/situacao', { codigo : 171 }, function(retorno) {

            console.log(retorno);
        });

    }, 10000);
</script>
Quando ele abriu sua p�gina teste.html ele reparou que de 10 em 10 segundos ele recebia a seguinte mensagem de erro no console:

No'Access-Control-Allow-Origin' header is present on the requested
resource.
Qual das afirmativas abaixo explica corretamente a raz�o desta mensagem de erro?
R:O endere�o/porta no qual teste.html foi carregado � diferente do endere�o/porta da requisi��o Ajax. Devido ao SOP (same-origin policy) s� � poss�vel realizar uma requisi��o Ajax para o mesmo endere�o/porta no qual teste.html foi carregado.
O SOP pode parecer ruim num primeiro momento, mas ele � importante porque evita que um c�digo malicioso carregado em um site pegue, por exemplo, seu n�mero de cart�o de cr�dito e envie para outro via Ajax.


<h2>Requisi��es Ajax e CORS</h2>
Marque todas as alternativas verdadeiras a respeito de CORS:
R: 
Significa CROSS ORIGIN RESOURCE SHARING ( compartilhamento de recurso entre diferentes origens)
� caracterizado por uma informa��o especial no header de resposta do servidor.
Veja o processo de habilitar ou n�o CORS � de responsabilidade do programador back-end. Sendo assim, o programador front-end pode solicitar sua habilita��o, mas claro, quando o desenvolvedor back-end ver sentido nisso.

------------------------------------------------------------------------------------
<h1>Se��o 07 - Plugins do jQuery</h1>

<h2>Slider com Slick</h2>
A nossa aplica��o j� cresceu bastante e usamos AJAX nela. Tamb�m j� conseguimos controlar anima��es em nosso placar e recome�ar a l�gica do nosso jogo. Toda essa parte est� bem completa e usamos bastante a biblioteca jQuery.

Neste �ltimo cap�tulo vamos mostrar para voc�s algumas coisas extras. Existem funcionalidades que outros desenvolvedores criaram, �teis para o dia a dia, oferecendo pequenas bibliotecas ou plugins para acrescentar valor e melhorar ainda mais o jQuery.

Para testarmos algumas funcionalidades extras disponibilizamos uma p�gina index.html e a arquivo index.css que possuem algumas informa��es gen�ricas sobre a aplica��o, imagens e um bot�o para chamar a p�gina do jogo. Voc� pode baixar o arquivo ZIP aqui. Extraia e coloque essa p�gina HTML dentro da pasta public e o CSS dentro da pasta public/css do seu projeto:



Depois suba o servidor e Acesse:

http://localhost:3000/index.html



Aplicando carrossel com slick
O que pretendemos fazer agora � melhorar um pouco essa p�gina. � muito comum de ver nos sites e blogs por a� que as imagens ficam dentro de um carrossel ou slider. Vamos ent�o pegar as imagens e melhorar a apresenta��o usando um efeito slide que fique passando suavemente. Para habilitar tal funcionalidade usaremos um plugin (biblioteca externa) para o jQuery.

Existem melhoras de plugins, at� v�rios com o mesmo prop�sito. Nesse curso escolhemos o plugin slick:

http://kenwheeler.github.io/slick/

Acessando o link em cima voc� pode ver v�rios exemplos dele.



Aplicando slick
Ent�o chegou a hora de usar esse plugin. Para aplicar, o primeiro passo � marcar o conte�do do slider dentro de um div junto com o atributo class:
```html
<div class="slider">
    <img src="img/slide1.png" class="imagem-jogo">
    <img src="img/slide2.png" class="imagem-jogo">
    <img src="img/slide3.png" class="imagem-jogo">
</div>
```
Aqui usamos a classe slider mas pode ser usada qualquer outra.

O segundo passo � copiar o slick para o nosso projeto. O download est� na p�gina do slick mas tamb�m disponibilizamos a biblioteca aqui. Uma vez extra�do o ZIP copie a pasta slick para a pasta public do seu projeto.

O terceiro passo � colocar a importa��o do CSS na p�gina index.html:

<link rel="stylesheet" type="text/css" href="slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
Obs: Para deixar redondo, colocaremos o nosso pr�prio CSS (index.css) depois da importa��o do slick.



O quarto passo � importar o arquivo JavaScript espec�fico do slick. Na p�gina index.html vamos adicionar a tag <script> logo depois da importa��o do jQuery:

<script src="slick/slick.min.js"></script>
Por fim, basta chamar o slick atrav�s de um script nosso. Como j� aprendemos, isso deve estar dentro da fun��o $(document).ready(..) do jQuery. Para tal, criaremos um novo arquivo dentro da pasta js do nosso projeto. Chamaremos o arquivo de slider.js:

//arquivo js/slider.js
$(function(){
    $(".slider").slick();
});
E claro que � preciso importar esse arquivo tamb�m na p�gina index.html:

<script src="js/slider.js"></script>
Ao testar j� devem aparecer as imagens, ainda um pouco cru pois est� sem bot�es de navega��o:



Personalizar o slick
Para deixar o nosso slider ainda melhor vamos alterar algumas propriedades dele. No site do slick tem exemplos que mostram como personalizar o slick. Vamos usar os "3 pontinhos" para facilitar o scroll, definir a velocidade e um scroll infinito, entre outras funcionalidades:

//arquivo js/slider.js
$(function(){
    $(".slider").slick( {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});
Ainda percebemos que as setas de navega��o n�o est�o aparecendo. Para ser correto, o slick j� mostra as setas mas o padr�o dele � usar a cor branca. Como nosso fundo tamb�m � branco, as setas n�o aparecem, raz�o suficiente para alterar o CSS.

No arquivo index.css adicionaremos as duas classes da seta e definiremos a cor preta. Al�m disso, vamos deixar a classe slider com altura autom�tica para ajustar as imagens dinamicamente:

.slider {
    height: auto;
}

.slick-prev:before, .slick-next:before{
    color: black;
}
Ao testar, agora sim aparecem as setas.

Neste cap�tulo vimos nosso primeiro plugin do jQuery, o slick. Existem milhares de outros plugin e nos pr�ximos cap�tulos veremos mais alguns.

<h2>Usu�rios com Selectize</h2>
Nessa aula vamos voltar para a nossa p�gina do jogo, a principal.html. Como implementamos o jogo at� agora, ela sempre est� usando o mesmo usu�rio fixo no nosso c�digo. O que queremos agora � escolher qual usu�rio est� jogando. Para tal usamos um simples elemento <select> no HTML:

Logo abaixo dos bot�es, mas antes do bot�o amarelo, adicionaremos:

<div class="select-usuarios">
 <select id="usuarios">
    <option value="Douglas">Douglas</option>
    <option value="Flavio">Flavio</option>
    <option value="Nico">Nico</option>
 </select>
</div>
E para realmente aparecer na p�ginas devemos alterar um pouco o CSS pois a biblioteca materialize por padr�o deixar o select invis�vel. Abrindo o arquivo estilos.css devemos adicionar:

.select-usuarios{
    display:inline-block;
}

#usuarios{
    display:block;
}


O select aparece na p�gina mas ainda temos o problema que os nomes est�o fixos no c�digo HTML. E se o nome do usu�rio n�o faz parte da lista? Ideal seria uma lista din�mica onde o usu�rio pode adicionar novos nomes quando quiser!

O plugin Selectize
Para melhorar o nosso select usaremos um novo plugin: Selectize

http://selectize.github.io/selectize.js/

Esse plugin tem v�rias fun��es interessantes, por exemplo, para trabalhar com tags, mostrar contatos mais importantes, selects cascatas e muito mais. No nosso caso vamos usar um select din�mico para adicionar novos usu�rios mais facilmente, O que selectize chama de Single Input Select.

O Single Input Select n�o s� adiciona novos nomes como tamb�m filtra os nomes existentes.

O primeiro passo � baixar o plugin na p�gina de github:

https://github.com/selectize/selectize.js/tree/master/dist

Voc� pode baixar os arquivos pelo site como apresentado no video ou baixar o ZIP aqui.

Ao extrair o ZIP voc� encontrar� dois arquivos. O selectize.js copie para a pasta public/js e o arquivo selectize.default.css para a pasta public/css/libs do seu projeto.

Aplicando selectize
O pr�ximo passo � importar o CSS e JavaScript. Aqui n�o h� novidade, no arquivo public/principal.html, na se��o dos imports CSS adicione (antes do estilos.css):

<!-- public/principal.html-->
<link rel="stylesheet" href="css/libs/selectize.default.css">
E no final da p�gina importe o JavaScript:

<!-- public/principal.html-->

<script src="js/selectize.js"></script>
Agora falta ainda realmente associar o nosso elemento <select> no HTML com o plugin Selectize. Isso � feito atrav�s de um pequeno JavaScript que adicionaremos no arquivo js/main.js. Nele procure a fun��o de inicializa��o (document ready ) do jQuery e adicione:

//no main.js no final da fun��o inicial do jQuery  
$("#usuarios").selectize({
    create: true,
    sortField: 'text'
});
Repare que estamos buscando o nosso select pela id (#usuarios) para chamar a fun��o selectize, j� passando duas propriedades:

create para permitir a cria��o de novos elementos
sortField para permitir a ordena��o


Melhorando a visualiza��o
O select j� est� melhor e funcional, no entanto com pouco espa�o dispon�vel. Para tal � preciso adicionar uma nova classe no nosso arquivo estilos.css para alterar a largura do select:

.selectize-input {
    width: 150px;
    vertical-align: middle;
}
Isso faz com que o select possua um tamanho de 150px e se alinhe melhor com os bot�es.



Alterando o usu�rio do Jogo
O select est� pronto, no entanto, ainda n�o alteramos o nome do jogador quando jogamos. O nome" Douglas" continua "preso" no c�digo (que chamamos de hardcoded).

Ao abrir o arquivo placar.js podemos ver o "culpado" dentro da fun��o inserePlacar:

var usuario = "Douglas";
Para alterar isso basta selecionar o select pegando o valor do input:

var usuario = $("#usuarios").val();
Isso j� � o suficiente para escolher e adicionar o placar desses usu�rios na tabela!

Nesse video vimos mais um plugin legal baseado no jQuery, mas o Selectize n�o para por ai! Vale explorar e testar os selects tamb�m!

<h2>Notifica��o com Tooltipster</h2>
Nesse v�deo vamos ver mais um plugin para melhorar a experi�ncia do usu�rio. Quando o usu�rio estiver sincronizando o placar, estamos enviando os dados para o servidor mas n�o estamos dando nenhum feedback para o usu�rio. Infelizmente aparece apenas uma mensagem no console que � algo para o desenvolvedor e n�o destinado ao usu�rio final:



Plugin Tooltipster
Nas aulas anteriores usamos o Spinner para mostrar que uma requisi��o AJAX est� sendo executada. Nesse cap�tulo veremos um novo plugin, o Tooltipster, para dar feedback ao usu�rio:

http://iamceege.github.io/tooltipster/

Esse plugin facilita dar feedback atrav�s desses pequenos bal�es que mostram alguma info:



Importando Tooltipster
Como os outros plugins, o Tooltipster precisa de um CSS e JavaScript, al�m do nosso jquery. Voc� pode baixar o tooltipster diretamente pelo site:

https://github.com/iamceege/tooltipster/archive/master.zip

Ou baixar o ZIP j� com os arquivos espec�ficos aqui:

Nesse ZIP voc� encontrar� exatamente os dois arquivos (tooltipster.bundle.min.css e tooltipster.bundle.min.js) necess�rios.

Extraia o ZIP e mova:

o arquivo tooltipster.bundle.min.css para a pasta public/css/libs
o arquivo tooltipster.bundle.min.js para a pasta public/js
Al�m disso, � preciso importar os dois arquivos na p�gina public/principal.html. Primeiro coloque o CSS do Tooltipster antes do nosso estilos.css:

<!-- principal.html-->

 <link rel="stylesheet" href="css/libs/tooltipster.bundle.min.css" />
E no final da p�gina arquivo JavaScript:

 <script src="js/tooltipster.bundle.min.js"></script>
Preparando HTML
Para esse plugin funcionar no nosso HTML devemos aplicar a classe tooltip. Como queremos dar uma mensagem ao sincronizar devemos mexer no bot�o amarelo:

<a class="tooltip �..."> 

</a>
e ainda nessa tag adicionar o atributo title para definir a dica:

<a class="tooltip �..." title="Sincronizado com sucesso">

</a>
Segue uma vez o bot�o amarelo completo:

<a id="botao-sync" class="btn-floating btn-large waves-effect waves-light yellow tooltip" title="Sincronizado com sucesso">
         <i class="material-icons">swap_vert</i>
</a>
Ativando Tooltipster
Por fim devemos usar um pequeno JavaScript para realmente acionar a dica (Tooltip). Novamente vamos abrir o arquivo main.js e adicionar um c�digo dentro da fun��o inicial do jQuery.

Depois do c�digo do plugin selectize adicione:

$(".tooltip").tooltipster();
Repare que selecionamos o elemento pela classe .tooltip para chamar a fun��o tooltipster.

J� podemos testar a funcionalidade e mover o mouse em cima do bot�o amarelo aparece a mensagem "Sincronizado com sucesso". Ou seja, o plugin funciona mas a mensagem s� deveria aparecer quando realmente houver uma sincroniza��o. Em outras palavras, usamos o evento errado para mostrar o tooltip.



Alterando o evento
O evento padr�o do tooltipster � o mouse over mas claro que podemos alterar isso. O tooltipster chama isso de trigger e oferece uma propriedade para alterar o evento. A� vem um outro problema, n�o queremos usar nenhum evento ou trigger padr�o. Ou seja, o tooltip n�o deve aparecer ao clicar ou dar um mouse-over. Devemos mostrar a mensagem quando a requisi��o AJAX terminou, por isso vamos personalizar o trigger:

$(".tooltip").tooltipster({
    trigger: "custom"
});
Isso j� desabilita qualquer evento padr�o e nossa mensagem n�o aparece mais. Para mostrar ela ap�s a requisi��o AJAX vamos chamar o tooltip programaticamente dentro da fun��o $.post. No arquivo placar.js logo ap�s do comando console.log(..):

//placar.js
$.post("http://localhost:3000/placar", dados , function() {
    console.log("Placar sincronizado com sucesso");
    $(".tooltip").tooltipster("open"); //novo
});
Podemos testar isso e realmente aparece a mensagem ap�s sincronizar. Legal, mas ela n�o desaparece mais :( Como mostramos a mensagem programaticamente tamb�m devemos fechar ela ap�s um determinado tempo.

Fechando tooltip
Ainda bem que j� conhecemos o AJAX com jQuery e j� vimos que a fun��o always � sempre executada, tanto no sucesso, tanto no erro. Vamos aproveitar ela e adicionar o c�digo para fechar o tooltip.

Na fun��o always tamb�m j� vamos definir um pequeno timeout para esperar um pouco antes de fechar a mensagem:

//placar.js

$.post("http://localhost:3000/placar", dados , function() {
    console.log("Placar sincronizado com sucesso");
    $(".tooltip").tooltipster("open"); 
}).always(function(){ //novo
    setTimeout(function() {
    $(".tooltip").tooltipster("close"); 
}, 1200);
Ao testar e clicar no bot�o de sincroniza��o a mensagem aparece e some depois de um tempo. Perfeito!

Mensagem de erro
Podemos personalizar ainda mais o Tooltipster e mostrar uma mensagem diferente quando a requisi��o AJAX falha. Lembrando que existe uma fun��o fail que � chamada quando a requisi��o falha que usaremos para mostrar uma mensagem de erro atrav�s do Tooltipster:

//placar.js

$.post("http://localhost:3000/placar", dados , function() {
    console.log("Placar sincronizado com sucesso");
    $(".tooltip").tooltipster("open"); 
}).fail(function(){
    $(".tooltip").tooltipster("open").tooltipster("content", "Falha ao sincronizar"); 
}).always(function(){ //novo
    setTimeout(function() {
    $(".tooltip").tooltipster("close"); 
}, 1200);
});
Ao testar, e causar um erro, por exemplo com uma URI errado na fun��o $.post deve aparecer a mensagem "Falha ao sincronizar"!

<h2>N�o funcionou...</h2>
Rog�rio aprendeu a utilizar jQuery assistindo este treinamento e chegou no cap�tulo de plugins. Ele baixou o Slick para poder adicionar um Carrousel. O esbo�o do seu c�digo �:

```html
<!DOCTYPE html>
<head>
    <!-- c�digo anterior omitido -->
    <link rel="stylesheet" href="slick/slick.css"/>
    <link rel="stylesheet" href="slick/slick-theme.css"/>
</head>
<body>
    <!-- c�digo anterior omitido -->

    <script src="slick/slick.min.js"></script>
    <script src="js/slider.js"></script> <!-- com o conte�do apresentado no v�deo -->
    <script src="js/jquery.js"></script>
</body>
```
Contudo, seu c�digo n�o funciona! Reflita sobre o poss�vel erro antes de continuar. A seguir, voc� ver� resposta do instrutor.

O problema � que o plugin e o script que utiliza o plugin foram carregados antes do jQuery. O jQuery precisa ser carregado antes para que o plugin se registre na biblioteca.

<h2>Selectize neles!</h2>
Ver�nica criou o seguinte select em sua aplica��o:
```html
<select id="cartoes">
</select>
```
Sabemos que para algo ser exibido � necess�rio haver dentro da tag <select> tag's <option>. No entanto, ela quer que o usu�rio insira automaticamente novos nomes no select. Para isso ela utilizou o plugin Selectize.

Para utilizarmos o plugin � necess�rio importar seu css, e claro, seu script.

Qual das op��es abaixo converte o select criado por Ver�nica em um select especial do Selectize ordenado e que permite inclus�o de novas op��es?

R: $('#cartoes').selectize({
    create: true,
    sortField: 'text'
});

<h2>Onde est� o meu tooltip?</h2>
Herculano criou um pequeno teste para testar o plugin Tooltipster:

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="css/libs/tooltipster.bundle.min.css" />
    </head>

    <body>
        <p class="tooltip">Aguarde...</p>
        <button id="botao">Meu teste</button>


        <script src="js/jquery.js"></script >
        <script src="js/tooltipster.bundle.min.js"></script>
        <script>

            $('#botao').click(function() {

                $('.tooltip').tooltipster("open").tooltipster("Ol�, sou uma mensagem do tolltipster"); 

            });

        </script>
    </body>
</html>
```
O esperado � que o bot�o da p�gina, ao ser clicado, ative o tooltipster no par�grafo com a classe tooltip, mas isso n�o aconteceu. Consegue identificar o problema em seu c�digo? Reflita bastante antes de continuar e veja a resposta do instrutor.

O problema est� na chamada

$('.tooltip').tooltipster("open").tooltipster("Ol�, sou uma mensagem do tolltipster")`.
O correto �

$('.tooltip').tooltipster("open").tooltipster("content", "Ol�, sou uma mensagem do tolltipster")`.
Repare que faltou o par�metro "content".

<h2>Finaliza��o</h2>

Chegamos ao fim do nosso curso sobre jQuery. Espero que voc�s tenham gostado e aprendido bastante na constru��o do nosso jogo.

Partimos do b�sico at� o mais avan�ado, vendo como importar o jQuery e escolher a sua vers�o . Vimos como selecionar elementos pela id, classe ou nome. Usamos as fun��es .text() e .val(), aprendemos sobre eventos e como funcionam as requisi��es AJAX, seja POST ou GET e mais recentemente vimos alguns plugins que deixam o jquery ainda mais produtivo.

Acredito que cobrimos bastante conte�do sobre essa biblioteca fant�stica e voc� j� est� preparado para encarar novos desafios com jQuery.

Caso voc� queria praticar mais um pouco de jQuery, aconselho assistir ao outro curso aqui na Alura, focado manipula��o de DOM:
Com ele voc� deve ganhar ainda mais flu�ncia e seguran�a para encarar os seus projetos.

Se ficou com alguma d�vida, por favor abra uma pergunta no f�rum. Estamos sempre presentes l�!

Agrade�o ter assistido o curso comigo!