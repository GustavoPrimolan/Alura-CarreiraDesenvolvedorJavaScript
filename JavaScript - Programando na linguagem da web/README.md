-------------------------------------------------------------------------------------------
<h1>Se��o 01 - Introdu��o</h1>

<h2>Por que aprender JavaScript?</h2>

Seja bem-vindo ao curso JavaScript: Programando na linguagem da web, eu sou o Douglas Quintanilha e serei seu instrutor no curso que te dar� uma introdu��o a essa linguagem t�o importante atualmente.

Voc� pode estar se perguntando: "por que se comenta tanto sobre JavaScript hoje em dia? Por que essa linguagem ganhou tanta popularidade, e por que eu, desenvolvedor, tenho que aprend�-la?"

Para iniciarmos nossa conversa sobre JavaScript, vale avisar que ela � a linguagem de programa��o nativa da Web. Qualquer navegador que voc� esteja utilizando, incluindo o Google Chrome, com certeza d� suporte ao JS, afinal ele � utilizado para dar dinamismo a nossas p�ginas. Por exemplo, quando clicamos na ferramenta de busca do site da Alura, o fato de que seja detectado o evento de clique no �cone da lupa e, em seguida, ocorra uma pequena anima��o para exibir a caixa de busca, � realiz�vel com JS.

Talvez voc� tenha conhecimento maior sobre HTML e CSS e garanta que seja poss�vel fazer o mesmo usando o transform, j� que tamb�m podemos criar algumas anima��es apenas com CSS puro. Por�m, certas a��es como algumas valida��es espec�ficas nos formul�rios, como aquelas realizadas nos campos de "nome" e "e-mail", n�o s�o possibilitadas unicamente com HTML. Esse tipo de dinamismo e interatividade que temos atualmente nos formul�rios e nas p�ginas Web vieram com o JavaScript.

Gra�as ao JS, aumentamos a usabilidade do usu�rio nas p�ginas web. Um exemplo � no f�rum do GUJ: quando clicamos em alguma categoria no menu, ele filtrar� os t�picos do f�rum. Isso s� � poss�vel com JavaScript.

� uma linguagem bastante poderosa que permite que o usu�rio consiga interagir com a p�gina. Isto j� seria um excelente motivo para despertar seu interesse pela linguagem, mas al�m de ser dominante nos cen�rios dos navegadores, o JavaScript recentemente tamb�m se expandiu para o lado do servidor com o lan�amento do Node.js, um ambiente que permite criarmos um servidor Web completo utilizando JavaScript. Desta forma, a linguagem ganhou grande popularidade e caiu no gosto dos desenvolvedores, tornando-se parte do coletivo imagin�rio de qualquer programador moderno.

O Javascript n�o "ganhou terreno" apenas no servidor, sendo poss�vel programarmos um Ardu�no com a biblioteca Johnny-Five, criarmos um aplicativo para Desktop utilizando o framework Electron, e at� mesmo encontramos um banco de dados como o MongoDB, que utiliza a sintaxe do JavaScript em suas queries.

O JavaScript est� presente em diversas �reas do desenvolvimento, ampliando as habilidades de desenvolvedor para os mais diversos ramos da tecnologia, e � claro, controlando e manipulando qualquer p�gina Web!

Estudaremos sua sintaxe e veremos como a linguagem funciona, quais s�o suas nuances, a partir de um pequeno projeto para explorar o JavaScript em sua principal �rea de atua��o, no Front-end, e na manipula��o de p�ginas Web.


<h2>Por que estudar Javascript?</h2>

O Javascript � uma das linaguens mais importantes de nosso tempo porque:
R:� uma linguagem que, al�m de ser a padr�o nos navegadores atuais, vem expandindo para outras �reas como servidores, banco de dados e at� plataformas de Internet of Things.
O Javascript cresceu bastante e hoje em dia pode ser encontrado nas mais diversas plataformas de desenvolvimento. Domin�-la � essencial se voc� deseja desenvolver sites para a Web, j� que ela � a linguagem que funciona em todos os navegadores e respons�vel por dar iteratividade e dinamismo as p�ginas web.


<h2>Ol� Mundo com JavaScript</h2>

Para iniciarmos nosso aprendizado em JavaScript, construiremos o projeto do site Aparecida Nutri��o.

O primeiro passo ser� baixar o projeto inicial do treinamento, dispon�vel nos exerc�cios. Ap�s descompact�-lo, acesse a pasta introducao-javascript do seu computador, e depois abra o arquivo no editor de textos. N�s vamos abri-lo tamb�m no browser, para nos familiarizarmos com o site.

tabela aparecida nutri��o

A nutricionista Aparecida fazia controle dos clientes com fichas cadastrais, preenchidas manualmente, nas quais eram armazenados dados como "Nome", "Peso", Altura Corporal" e outros. Com a cria��o do site, ela conseguir� armazenar as informa��es, a serem exibidas em uma tabela, em que novos cadastros ser�o adicionados dinamicamente por meio do JavaScript, e poder�o ser filtrados posteriormente. Ela tamb�m n�o precisar� mais fazer c�lculos manualmente, como os de IMC e da porcentagem de gordura corporal dos clientes. Todos ser�o realizados utilizando-se o JavaScript. Criaremos um site que realmente facilitar� o trabalho da Aparecida!

Come�aremos criando a fun��o que exibir� a mensagem "Hello World", ou "Ol� Mundo" no JS.

No curso, utilizaremos o editor de textos Atom, mas existem diversos outros como o Sublime Text 3 e o Visual Studio Code. Escolha de acordo com sua prefer�ncia.

Adicionaremos a funcionalidade e o dinamismo na p�gina de pacientes, e para isto precisaremos primeiro aprender como utilizarmos o JavaScript corretamente nas p�ginas. Uma primeira tentativa consiste em utilizarmos as fun��es dentro do corpo de nossa p�gina.

No in�cio do arquivo index.html, logo ap�s a tag <body>, exibiremos um alerta com JavaScript, com a fun��o alert:

<head>
    <meta charset="UTF-8">
    <title>Aparecida Nutri��o</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">
</head>
<body>
    alert("Ol� mundo");

    <!-- Restante do index.html -->
</body>
Ao abrirmos a p�gina index.html no navegador, veremos o seguinte resultado:

Navegador imprimindo alert como texto

O script est� sendo exibido como texto, ou seja, o navegador n�o fez nenhum tratamento especial para interpretar o c�digo. Precisaremos adicionar a tag <script>, mas o JavaScript n�o ser� carregado. Iremos ent�o adicion�-lo dentro da tag <head>:

<head>
    <meta charset="UTF-8">
    <title>Aparecida Nutri��o</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">

    <script>
        alert("Ol� mundo");
    </script>

</head>
Agora, quando recarregarmos a p�gina no navegador, nosso trecho de script ser� interpretado como um c�digo, e n�o como um conte�do qualquer da p�gina.

ola mundo

O alerta com a mensagem foi exibido!

A fun��o alert � uma das op��es para se exibir mensagens com JavaScript, por�m, ela n�o � a �nica. Outra fun��o �til para isto � o console.log, considerado "mais agrad�vel" para a exibi��o de uma mensagem por n�o envolver um pop-up. A mensagem ser� exibida no console do navegador.

Vamos test�-la:

<head>
    <meta charset="UTF-8">
    <title>Aparecida Nutri��o</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">

    <script>
        console.log("Oi Mundo");
    </script>

</head>
No Linux ou no Windows, acessamos o console do navegador pressionando a tecla "F12"; no iOS basta pressionar "COMMAND + ALT + J". Ao abrirmos o console, veremos a mensagem como gostar�amos:

Imprimindo uma mensagem no console do navegador

Al�m disso, o console do navegador tamb�m aceita fun��es JavaScript. Poderemos escrever novamente console.log:

console.log("Aqui tem um recado para voc�");
Ou at� mesmo um alerta:

alert("Ol�");
fun��es no console

Com o alert e o console.log, damos os primeiros passos com o JavaScript, entendendo que para seu bom funcionamento, o c�digo deve estar entre as tags <script>. Caso contr�rio, os navegadores n�o ir�o entend�-lo.

<h2>Interpretando scripts no navegador</h2>
Sabemos que o navegador entende apenas HTML e que se colocarmos scripts diretamente no corpo da mensagem ele ser� interpretado como texto. Como resolvemos isso?
R:Atrav�s da tag <script></script>. Tudo que estiver dentro dela ser� interpretado como script e n�o texto.
A tag <script> � respons�vel por nos ajudar a resolver este problema. Tudo que declaramos dentro da tag <script> � interpretado como Javascript quando o navegador passar por ali.

No caso abaixo:

<script>
alert("Ol� mundo");
</script>
Quando o navegador passar pela tag abaixo ele vai interprar o texto "alert("Ol� mundo");" e ir� executar a fun��o alert(), que � respons�vel por exibir uma pop up com a mensagem Ol� mundo.



<h2>Query Selector</h2>
Agora que temos o dom�nio das fun��es iniciais do JavaScript, alert() e console.log(), usadas para exibir mensagens ao usu�rio, vamos come�ar a manipular os dados do site da Aparecida. A p�gina deixar� de ser est�tica e ganhar� mais interatividade. O �ndice de massa corporal (IMC) ser� calculado automaticamente, e conseguiremos adicionar um novo paciente sem alterarmos o HTML. Isso dar� dinamismo e deixar� a p�gina mais moderna.

Para come�armos a manipular a p�gina, se quis�ssemos alterar o t�tulo "Meus pacientes" para "Meus clientes", como isso poderia ser feito com JavaScript? Precisar�amos ter acesso ao c�digo do arquivo HTML. Tudo o que estiver contido na tag <script> ser� interpretado como JS e, o que est� fora, como HTML. Teremos que levar as funcionalidades criadas em HTML para o mundo JS.

Primeiramente, vamos conhecer o DOM (Document Object Model), representa��o do HTML para o nosso JavaScript, acess�vel por uma palava do JavaScript chamada document.

No console do navegador, quando digitamos document e pressionamos "ENTER" em seguida, veremos tudo o que est� na p�gina HTML. O document ser� a ponte entre o JavaScript e o HTML, e tudo que for alterado nele ser� alterado na exibi��o para o usu�rio.

Vamos experimentar adicionar o document na tag <script>, lembrando que n�o iremos us�-lo entre "" (aspas), pois ele funcionar� como uma var�avel, e as aspas s�o usadas quando trabalhamos com uma string, e n�o � uma palavra ou frase que queremos imprimir.

<head>
    <meta charset="UTF-8">
    <title>Aparecida Nutri��o</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">

    <script>
        console.log("Oi Mundo");
        console.log(document);
    </script>

</head>
Se voltarmos ao navegador e atualizarmos a p�gina, veremos que no JavaScript teremos acesso ao document. Conseguiremos ver o seguinte c�digo no navegador:

#document
    <!DOCTYPE html>
    <html lang="pt-br">
        <head>...</head>
        <body>...</body>
    </html>
Mas se n�o quisermos manipular o DOM inteiro, e sim apenas um peda�o, por exemplo, o texto dentro da tag <h2>, localizada abaixo do fechamento do <header>,

<header>
    <div class="container">
        <h1>Aparecida Nutri��o</h1>
    </div>
</header>
<main>
    <section class="container">
        <h2>Meus paciente</h2>
        <table> 
            <thead>
//...
como far�amos para modificar apenas o texto "Aparecida Nutricionista", que � um peda�o do document?

Vamos encontrar uma forma de pesquisar somente a tag <h1>. Para isto, usaremos o m�todo querySelector(), passando como par�metro o que queremos encontrar - neste caso, entre aspas, pois queremos o termo exato. No console, iremos digitar:

document.querySelector("h1");
Ap�s executarmos o m�todo, ele retornar� o conte�do da tag:

document.querySelector("h1");
    <h1>Aparecida Nutri��o</h1>
Assim, ser� selecionado o primeiro h1 da p�gina, justamente aquele que queremos modificar. Ent�o podemos passar este c�digo para o navegador e imprimir o h1 no console do navegador para verificarmos se ele realmente foi selecionado, utilizando o console.log() novamente dentro da tag <script>:

<script>
    console.log(document.querySelector("h1"));
</script>
Mas ao atualizarmos a p�gina, o retorno ser� null. Por que isso acontece? Se usamos o querySelector() no console, conseguimos que o h1 seja retornado, por�m, isto n�o ocorre no c�digo. Qual � a diferen�a?

O browser, ao carregar a p�gina HTML, vai lendo linha por linha, de cima para baixo. Quando ele chega na tag <script>, ele tenta buscar um h1 na p�gina, por�m, isto n�o est� carregado em sua mem�ria. A tag <h1> est� abaixo do c�digo JavaScript e ainda n�o foi interpretado pelo navegador, logo, ele n�o poder� ser selecionado.

At� agora estamos escrevendo HTML e JavaScript no mesmo arquivo, o que pode se tornar confuso conforme nosso c�digo for crescendo. Para evitarmos isso, poderemos escrev�-los em arquivos separados.

O mesmo n�o ocorre quando executamos o c�digo no console do navegador, pois a p�gina j� estar� totalmente carregada, e o document estar� completo.

Por conta de situa��es como esta, � uma boa pr�tica colocar a tag <script> no fim do HTML, mais precisamente, como �ltimo elemento de <body> ap�s o fechamento de <main>:

<!-- ... -->
        </section>
    </main>
<script>
    console.log(document.querySelector("h1"));
</script>
</body>
Desta vez, ao recarregarmos a p�gina, o h1 � impresso no console do navegador, sendo selecionado corretamente.

Agora que conseguimos selecionar o h1, o que � preciso fazer para alterarmos o texto? Primeiramente, em vez de imprimir, salvaremos a parte selecionada, no caso o h1, dentro da vari�vel titulo. Para isso, usaremos a palavra var:

<!-- ... -->
        </section>
    </main>
<script>
    var titulo = document.querySelector("h1");
    console.log(titulo);
</script>
</body>
No console, a tag <h1> continuar� sendo exibida.

<h1>Aparecida Nutri��o</h1>
Por�m, nosso real objetivo � pegar o conte�do textual Aparecida Nutri��o.

Algumas tags, como h1, h2, p e span, possuem um conte�do de texto. Nesses casos, o JavaScript possui uma propriedade que nos permite acess�-lo: textContent. Vamos testar e imprimir o conte�do de texto da vari�vel titulo, que representa o h1:

<!-- ... -->
<script>
    var titulo = document.querySelector("h1");
    console.log(titulo);
    console.log(titulo.textContent);
</script>
De volta ao navegador, veremos uma diferen�a no que ser� impresso pelos dois console.log()s:

   <h1>Aparecida Nutri��o</h1>
Aparecida Nutri��o
Somente o texto Aparecida Nutri��o ser� impresso no segundo console.log(). Ent�o conseguiremos acessar e exibir o conte�do de texto da tag. E para alter�-lo, basta usar o textContent e passar um novo valor para o titulo, igualando-o a um novo texto:

<script>
    var titulo = document.querySelector("h1");
    console.log(titulo);
    console.log(titulo.textContent);

    titulo.textContent = "Banana";
</script>


Observe que o t�tulo da p�gina foi trocado. Se quisermos alter�-lo novamente, por exemplo, para "Aparecida Nutricionista", basta modificar a propriedade textContent.

<script>
    var titulo = document.querySelector("h1");

    titulo.textContent = "Aparecida Nutricionista";
</script>
Assim, n�s alteramos o conte�do de texto.

<h2>Boas pr�ticas</h2>

Quando programamos com o JavaScript, � prov�vel que estejamos trabalhando com outras pessoas, ent�o, o que acontece se outro desenvolvedor decidir deixar de utilizar a tag < h1>, substituindo-a por h2?

<header>
    <div class="container">
        <h2>Aparecida Nutri��o</h2>
    </div>
</header>
Ao abrirmos a p�gina no navegador, ser� exibida a seguinte mensagem no console:

Uncaught TypeError: Cannot set property 'textContent' of null
A mensagem indica que a propriedade textContent � nula e apontar� a linha na qual ocorreu o erro, no caso, na tag <script>.

<!-- ... -->
        </section>
    </main>
<script>
    var titulo = document.querySelector("h1");

    titulo.textContent = "Aparecida Nutricionista";
</script>
O h1 n�o foi encontrado porque ele deixou de existir na nossa p�gina e, sendo assim, impossibilitado de ser selecionado. O problema de se buscar uma tag no DOM � que o c�digo JavaScript fica muito atrelado ao HTML. Caso o desenvolvedor decida fazer altera��es no HTML, o c�digo deixar� de funcionar. Por isso, � uma boa pr�tica n�o buscarmos por uma tag HTML espec�fica, e usar outras op��es que a fun��o querySelector() nos disponibiliza.

Al�m das tags HTML, o querySelector() nos permite buscar por um elemento por meio da classe, do id, ou seja, dos seletores CSS. Vamos testar esse recurso adicionando uma classe dentro do <h1>:

<header>
    <div class="container">
        <h2 class="titulo">Aparecida Nutri��o</h2>
    </div>
</header>
No c�digo JS inserido na parte de baixo do arquivo, em vez de realizarmos a busca no document.querySelector() pela tag <h1>, usaremos o seletor CSS que retornaria o conte�do na mesma tag. Iremos utilizar o seletor CSS para classe: . (ponto).

<script>
    var titulo = document.querySelector(".titulo");
    titulo.textContent = "Aparecida Nutricionista";
</script>
Agora, ser�o retornados os elementos da classe .titulo, e Aparecida Nutricionista reaparece na p�gina. Se outro desenvolvedor modificar novamente a tag h1 no c�digo HTML, nosso c�digo n�o ser� prejudicado e o JavaScript continuar� sendo executado, pois deixamos as responsabilidades desacopladas.

Trata-se de uma boa pr�tica separarmos o c�digo JavaScript do HTML, no entanto, o c�digo ainda est� completo no index.html, atuando independentemente. O trecho JS est� salvo na tag <script>. � interessante desacoplarmos os c�digos em arquivos diferentes, com diferentes extens�es, .js, .html - j� temos o c�digo CSS separado em um arquivo .css.

A seguir, criaremos o arquivo principal.js na pasta /js, com todo o c�digo JavaScript. O pr�ximo passo ser� mover o c�digo da tag <script> para dentro desse arquivo:

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
A tag <script> continuar� na p�gina index.html, por�m, ela n�o ficar� vazia, e apontar� para o arquivo JavaScript externo que criamos, por meio do atributo src (referente ao termo source). Como o arquivo principal.js est� na pasta js, especificaremos o caminho completo no atributo:

<!-- ... -->
        </section>
    </main>
<script src="js/principal.js"></script>

</body>
Quando recarregarmos a p�gina, o arquivo continuar� funcionando corretamente. Vale refor�ar que � recomendado deixarmos o c�digo HTML separado do JavaScript.

Nesta aula, n�s abordamos v�rios temas sobre a linguagem JavaScript, vimos que ela ganhou relev�ncia por estar sendo usada de diferentes formas, no navegador, banco de dados, placas Ardu�no. � importante que desenvolvedores tenham, pelo menos, um conhecimento b�sico de como funciona a linguagem.

Vimos algumas fun��es como console() e alert(), que nos permitem exibir mensagens ao usu�rio, e conhecemos a utilidade do console de desenvolvedor, presente nos navegadores. Podemos executar c�digos JavaScript no console, com isso, conseguimos testar algumas coisas diretamente no navegador.

Vimos tamb�m como realizar a busca por algum elemento do HTML, no c�digo JavaScript. Para isto, utilizamos a vari�vel document, que cont�m todo o conte�do HTML da p�gina. Quando manipulamos o document, conseguimos manipular o que ser� exibido ao usu�rio. Essa manipula��o foi realizada por meio da sele��o de trechos da tela, feita com o querySelector(). Vimos que este m�todo busca por nome de tags - o que pode trazer problemas -, assim como seletores de CSS.

Na aula, mostramos como criar uma vari�vel no JavaScript e alterar um conte�do de texto utilizando a propriedade textContent.

Aguardo voc� nas aulas seguintes, espero que tenha gostado da introdu��o do curso.

<h2>Console do desenvolvedor</h2>
Marque as alternativas abaixo que cont�m caracter�sticas ou funcionalidades do console de desenvolvedor do navegador:
R: O console do desenvolvedor � uma ferramenta muito poderosa e vers�til para o desenvolvedor Javascript. Com ele conseguimos rapidamente ser notificados de poss�veis erros em nosso c�digo, podemos executar fun��es, observar a sa�da de algumas fun��es e executar pequenos testes das funcionalidades do Javascript de modo r�pido.

� uma boa pr�tica sempre que estivermos testando nosso site ficar com o console aberto, para ficar monitorando poss�veis erros em nosso c�digo.

Como utilizar o console � algo bastante corriqueiro, podemos nos aproveitar dos atalhos CTRL + SHIFT + J ( Win/Linux) ou CMD + ALT + J (Mac) para ter acesso ao console de modo r�pido.

<h2>Importando um arquivo externo</h2>
Qaul c�digo abaixo importa corretamente um arquivo .js chamado contador.js que se encontra na mesma pasta de nosso arquivo HTML?
R: Sabemos que � importante fazer a separa��o de mundos HTML e Javascript, por isso criamos arquivos externos para guardar nosso c�digo. S� que ao separar o Javascript em um arquivo externo, precisamos lembrar de importa-lo no HTML e para isso precisamos utilizar a tag <script> assim:

<script src="contador.js"></script>


<h2>Mensagem de boas vindas</h2>
Qual op��o abaixo substitui o hasheado (XXXX) por um c�digo que exibe uma pop up com a mensagem bem vindo?
XXXX mensagem = "Seja bem vindo ao meu site!"

XXXX(mensagem);

Queremos declarar a vari�vel mensagem, por isso devemos utilizar a palavra var para criar esta entidade:

var mensagem = "Seja bem vindo ao meu site!"
e logo em seguida desejamos exibir uma pop-up, logo � necess�rio utilizar a fun��o alert que � respons�vel por isso:

alert(mensagem);


<h2>Um tal de document</h2>
O que cont�m a vari�vel document do JavaScript?
O document � uma vari�vel muito importante do Javascript. Ela cont�m o DOM ou Document Object Model, que � como o navegador enxerga o HTML utilizado por ele para renderizar a p�gina.

O navegador, ao ler o seu arquivo HTML, cria uma c�pia em mem�ria daquele HTML e a partir dessa c�pia ele vai desenhando a sua p�gina, colocando as tags e aplicando os estilos. Esta c�pia � o que chamamos de DOM uma representa��o em mem�ria do HTML do seu arquivo, que o navegador usa para desenhar a p�gina, e a vari�vel document � quem cont�m o DOM.

Por isso, quando dizemos que com o Javascript n�s estamos manipulando o DOM, estamos manipulando o que o navegador renderizou. Ent�o ao trocar algum texto do DOM, o navegador imediatamente desenha novamente aquele texto, pois o DOM � o que o navegador usa para desenhar o seu site.

Outra caracteristica interessante, � que como manipulamos o DOM , quando trocamos um texto de um <h1> ou um estilo de um elemento, na verdade estamos alterando a representa��o em mem�ria , o que faz com que o arquivo fonte que cont�m seu HTML fique intacto!

<h2>Apenas um pedacinho...</h2>
Sabemos que o document cont�m a representa��o de todo o HTML da nossa p�gina, por�m na maioria dos casos estamos interessados em apenas uma parte do HTML e n�o em ele todo.

Qual fun��o podemos utilizar na vari�vel document para especificar que queremos trazer apenas uma parte do HTML ?
R:Quando desejamos pegar apenas parte do HTML, devemos utilizar a fun��o querySelector(). A fun��o querySelector faz a busca atrav�s de seletores CSS para trazer o HTML que voc� est� interessado. Por exemplo, no caso abaixo:

<h1 class="titulo"> Meu primeiro site</h1>
Podemos buscar este <h1> passando o seletor CSS correto para a fun��o querySelector. Utilizando o setor de tag, podemos buscar assim:

document.querySelector("h1");
E utilizando um seletor CSS de classe, ficaria assim:

document.querySelector(".titulo");
Neste caso, ambas as fun��es retornaria o h1. Ter dom�nio dos seletores CSS � importante se voc� deseja trabalhar bem com o Javascript!



----------------------------------------------------------------------------------------------------
<h1>Se��o 02 - Vari�veis e Operadores</h1>

<h2>Buscando dados do paciente</h2>
Vamos continuar com o projeto do site da Aparecida! N�s vimos como selecionar um elemento da p�gina com a fun��o querySelector(), assim como � poss�vel alterar um texto com o textContent(). Se selecionarmos um elemento da p�gina, obter e reescrevermos seu conte�do textual, poderemos realizar o c�lculo autom�tico do IMC de cada paciente cadastrado e facilitar a vida da Aparecida.

Para calcularmos o IMC, trabalharemos com valores do peso e da altura de um paciente da tabela, pois o c�lculo � feito desta forma:

IMC = peso / altura x altura;
Tendo os dados, precisaremos de uma forma para lev�-los ao mundo do JavaScript, calcular o IMC e imprimir o resultado na devida coluna. Esta ser� nossa miss�o, vamos come�ar?

Extraindo o peso e a altura do paciente
Primeiramente, vamos focar no primeiro paciente, o Paulo. No index.html, observaremos os seguintes dados HTML:

<tr class="paciente">
    <td class="info-nome">Paulo</td>
    <td class="info-peso">100</td>
    <td class="info-altura">2.00</td>
    <td class="info-gordura">10</td>
    <td class="info-imc">0</td>
</tr>
Veremos que cada paciente est� contido em uma linha da tabela (<tr>) e que em cada coluna (<td>) h� um dado. J� sabemos como selecionar um paciente, por meio do querySelector():

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector(".paciente");
Mas todos os pacientes possuem a classe paciente. Se queremos buscar o Paulo, devemos atribuir algo mais espec�fico, para isto, iremos definir um id para o primeiro paciente (primeiro-paciente):

<tr class="paciente" id="primeiro-paciente">
    <td class="info-nome">Paulo</td>
    <td class="info-peso">100</td>
    <td class="info-altura">2.00</td>
    <td class="info-gordura">10</td>
    <td class="info-imc">0</td>
</tr>
De volta ao arquivo JavaScript, em querySelector utilizaremos o seletor de id, a cerquilha (#, tamb�m conhecida como "tralha" ou "hashtag"):

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

console.log(paciente)
Vamos executar o console.log() da vari�vel paciente, e esperamos conseguir executar a tag <tr>, que cont�m o Paulo. Faremos uma segunda busca no navegador, por�m, desta vez vamos buscar em paciente, em vez de pesquisarmos no documento inteiro. O retorno ser� o seguinte:

<tr class="paciente" id="primeiro-paciente">
    <td class="info-nome">Paulo</td>
    <td class="info-peso">100</td>
    <td class="info-altura">2.00</td>
    <td class="info-gordura">10</td>
    <td class="info-imc">0</td>
</tr>
� retornado um <tr>, no entanto, nosso interesse � no peso e na altura do Paulo, que est�o dentro de tags <td>. Mais especificamente, estamos interessados no conte�do de texto da <td>, e se observarmos o c�digo, veremos que elas podem realizar a busca utilizando as classes info-peso e info-altura.

N�s j� usamos o querySelector() para buscar dentro do document, ser� que conseguimos realiz�-la tamb�m dentro de paciente?

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");

console.log(paciente); // tr
console.log(tdPeso); // td que tem o peso
Aqui, buscamos em paciente um elemento que tenha a classe .info-peso, usando o seletor de classe (.). Isso vai nos retornar a **<td>** que cont�m este dado do paciente. Observe que este dado � salvo na vari�vel tdPeso.

No console, veremos o seguinte resultado:

< tr class="paciente" id="primeiro-paciente">...</tr>
<td class="info-peso">100</td>
Novamente, exibe-se a linha com o <td>, e s� queremos o conte�do de texto, ou seja, o valor referente ao peso do paciente. Para termos acesso ao seu conte�do de texto, adicionaremos o textContent no principal.js:

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;

console.log(paciente); // tr
console.log(tdPeso); // td que tem o peso
console.log(peso); //Obter 100
No console do navegador, ser� exibido o valor 100.

    < tr class="paciente" id="primeiro-paciente">...</tr>
    <td class="info-peso">100</td>
100
No entanto, para o c�lculo do IMC, al�m do peso, precisaremos tamb�m da altura. Ent�o vamos acess�-la utilizando a mesma l�gica e criando a vari�vel tdAltura logo abaixo da vari�vel peso:

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
Fizemos uma busca com o querySelector() na vari�vel paciente. Nosso objetivo � encontrar a td com a classe .info-altura. Tamb�m criamos a vari�vel altura, que � o conte�do de texto do td, e por isso utilizamos o textContent.

Para inspecionarmos se o que foi feito deu certo, adicionaremos o console.log() para imprimir o tdAltura ap�s as vari�veis rec�m adicionadas:

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

console.log(paciente); // tr
console.log(tdAltura); 
console.log(altura);
No console, obteremos:

<tr class="paciente" id="primeiro-paciente">...</tr>
<td class="info-altura">2.00</td>

2.00
Veremos o valor 2.00 impresso no console, e obteremos os valores do peso e da altura, ent�o seguiremos para o c�lculo do IMC, a partir da seguinte f�rmula:

IMC = peso / altura x altura
Isto �, o valor da massa (peso) divido pela altura multiplicada por ela mesma.

Se a replicarmos no JavaScript utilizando os operadores matem�ticos da linguagem de programa��o, faremos o seguinte c�lculo em uma nova vari�vel, chamada de imc:

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / altura * altura;
Removeremos o console.log(), que se tornou desnecess�rio no c�digo - observe que usamos o operador * (asterisco) na multiplica��o.

No caso do paciente Paulo, o resultado do IMC deveria ser:

IMC = 100 / 2.00 x 2.00
IMC = 100 / 4.00
IMC = 25
Anotaremos a l�gica do c�lculo com coment�rio.

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / altura * altura; // 100 / 2.0 x 2.0 = 100 / 4 =>>>>>>> 25

console.log(imc);
O resultado esperado para a vari�vel imc � 25, por�m, o console exibir� 100 como resultado.

Como isso � poss�vel? Ser� que JavaScript n�o sabe fazer esta multiplica��o b�sica?

Na verdade, a multiplica��o est� sendo feita, no entanto precisaremos identificar o problema no c�digo!

<h2>Calculando e exebindo o IMC corretamente</h2>
O JavaScript sabe como multiplicar, mas n�o entendeu a mensagem que tentamos passar para ele! No c�digo, o c�lculo do IMC foi representado da seguinte forma:

var imc = peso / altura * altura;
N�s conseguimos entender que a altura deve ser multiplicada por ela mesma antes da divis�o. Por�m, esquecemos de especificar para o JavaScript o que deve ser feito, logo, o c�digo ser� executado da esquerda para direita, de forma que o primeiro c�lculo seja a divis�o do peso pela altura.

Peso / altura 

100 / 2 = 50
O passo seguinte, foi multiplicar o resultado da divis�o e multiplic�-lo pela altura.

50 x 2 = 100
Desta forma, chegamos ao resultado inesperado 100, e este n�o � o valor do IMC.

Em JavaScript, existem os operadores aritm�ticos b�sicos de todas as linguagens de programa��o: +, -, *, / e %. Temos ainda outros caracteres para nos ajudar a representar uma conta matem�tica, os par�nteses ().

Para corrigirmos o c�lculo, adicionaremos os par�nteses na conta, para indicar em qual ordem as opera��es dever�o ser executadas. De volta ao arquivo principal.js:

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);
console.log(imc);
O resultado ser� exibido apenas no console e, no caso, o valor do IMC ser� 25.

Falta atualizarmos a tabela ap�s o c�lculo do IMC. Ent�o selecionaremos a <td> do paciente, cujo valor � 0:

<tbody id="tabela-pacientes">
    <tr class="paciente" id="primeiro-paciente">
        <td class="info-nome">Paulo</td>
        <td class="info-peso">100</td>
        <td class="info-altura">2.00</td>
        <td class="info-gordura">10</td>
        <td class="info-imc">0</td>
    </tr>
Queremos que este valor seja alterado para o resultado do c�lculo:

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

// selecionando a coluna do IMC
var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);
N�s j� vimos como selecionar o tdAltura, para acessarmos o IMC, e tamb�m como usarmos o querySelector(). Ent�o basta atribuirmos o conte�do do IMC calculado ao tdImc, adicionando textContent:

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;


var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);

tdImc.textContent = imc;
Se tudo der certo, quando executarmos o c�digo no navegador, a p�gina ser� carregada com o primeiro valor do IMC preenchido:

valor imc na tabela

O IMC do Paulo � exibido na sua coluna gra�as ao script JavaScript.

<h2>Vari�veis e Operadores</h2>
Conseguimos calcular o IMC do paciente Paulo, mas o que acontece se algu�m, no momento de digitar o c�digo HTML, colocar um n�mero negativo no campo de peso? Ou se incluir um n�mero absurdo, como 10 mil quilos? Ou, sem querer, adicionar uma altura de 200?

IMC = 10000 / 2.00 x 2.00
IMC = 10000 / 4.00
IMC = 2500
O resultado ser� um valor imposs�vel. �s vezes, na pressa de digitar, a pessoa pode acabar colocando um n�mero a mais ou um sinal a menos, e dentre tantas outras informa��es, acaba n�o notando esses erros no HTML.

Valores improv�veis n�o deveriam ser aceitos pela tabela. Como j� possu�mos os dados do peso e da altura no c�digo JavaScript, � poss�vel validar as informa��es. Desta forma, o IMC do paciente s� ser� calculado se o peso e a altura forem v�lidos, e sempre teremos um IMC que reflita um valor real. Se o peso for muito alto ou a altura muito baixa, por exemplo, ser� exibida uma mensagem de aviso informando que os dados do paciente s�o inv�lidos e devem ser verificados.

Atualmente, o principal.js est� assim:

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);
tdImc.textContent = imc;
Antes de calcularmos o IMC, poderemos validar os dados, come�ando pelo peso. Com um if, verificaremos se o peso � menor ou igual a 0, ou seja, negativo. Se este for o caso, uma mensagem de alerta ser� exibida no console. Iremos adicionar o if logo abaixo da vari�vel tdImc:

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

if (peso <= 0) {
    console.log("Peso inv�lido");
}
Se colocarmos um valor inv�lido para o peso no index.html...

<tbody id="tabela-pacientes">
    <tr class="paciente" id="primeiro-paciente">
        <td class="info-nome">Paulo</td>
        <td class="info-peso">-100</td>
        <td class="info-altura">2.00</td>
        <td class="info-gordura">10</td>
        <td class="infor-imc">0</td>
    </tr>
Al�m disso, 1000 quilos tamb�m � um valor muito alto para um ser humano. Ent�o, vamos verific�-lo tamb�m, adicionando outro if:

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

if (peso <= 0) {
    console.log("Peso inv�lido");
}

if (peso > 1000) {
    console.log("Peso inv�lido");
}

var imc = peso / (altura * altura);
tdImc.textContent = imc;
No console, ser� exibida a mensagem Peso inv�lido.

peso invalido

No entanto, imagine o que aconteceria se para cada valida��o de peso, fosse necess�rio adicionar mais um if? O c�digo acabaria ficando imenso! Por�m, � poss�vel juntar os dois tipos de verifica��es em um �nico if, sendo que cada um deles retornar� true ou false para as verifica��es, ou seja, um resultado booleano. Tentaremos concatenar as verifica��es:

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

if (peso < 0 peso > 1000) {
    console.log("Peso inv�lido");
}
Por�m, como faremos para juntar as duas condi��es, sendo que o resultado dever� se enquadrar em uma ou outra condi��o? A palavra "ou" n�o existe no JavaScript, mas existe um operador l�gico nas linguagens de programa��o que poder� ser utilizado: ||, duas barras verticais que recebem o nome de pipes:

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

if (peso < 0 || peso > 1000) {
    console.log("Peso inv�lido");
}
Se a primeira condi��o, peso < 0, for verdadeira, ou a segunda condi��o, peso > 1000, for verdadeira, o c�digo no if** ser� executado. Ao testarmos, veremos que o funcionamento � o mesmo, sem a necessidade de criarmos um if para cada caso.

Seria interessante tamb�m verificarmos o valor de altura, considerando inv�lida aquela que for menor que 0 ou maior que 3:

if (altura < 0 || altura > 3.00) {
    console.log("Altura inv�lida");
}
Se testarmos rodar o c�digo com um valor fora de uma das condi��es, a mensagem Altura inv�lida ser� exibida no console. Mas o c�lculo do IMC ainda ser� realizado, mesmo nos casos em que trabalharmos com alturas e/ou pesos inv�lidos, o que n�o � o que queremos. Neste casos, gostar�amos que o IMC n�o fosse calculado.

C�lculo do IMC somente com peso e altura v�lidos
Para que o IMC n�o seja calculado quando o peso e a altura forem inv�lidos, poderemos criar duas vari�veis, uma valida��o para cada caso. Vamos inicializ�-las com true:

var pesoEhValido = true;
var alturaEhValida = true;

if (peso < 0 || peso > 1000) {
    console.log("Peso inv�lido");
}

if (altura < 0 || altura > 3.00) {
    console.log("Altura inv�lida!");
}
Poderemos testar inserindo um valor de altura inv�lido. No console, veremos a mensagem "Altura inv�lida!". Ou seja, estamos presumindo que ambos ser�o v�lidos. Mas caso n�o sejam, seus valores dever�o mudar para false dentro dos ifs:

if (peso < 0 || peso > 1000){
    console.log("Peso inv�lido!");
    pesoEhValido = false;
}

if (altura < 0 || altura > 3.00){
    console.log("Altura inv�lida!");
    alturaEhValida = false;
}
Os valores das vari�veis come�ar�o como verdadeiras, mas se algo der errado, ser�o setadas como false. Ap�s as altera��es, o c�digo ficar� assim:

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso < 0 || peso > 1000) {
    console.log("Peso inv�lido!");
    pesoEhValido = false;
}

if (altura < 0 || altura > 3.00) {
    console.log("Altura inv�lida!");
    alturaEhValida = false;
}

var imc = peso / (altura * altura);
tdImc.textContent = imc;
Agora, antes de calcular o IMC, faremos uma pequena verifica��o das duas vari�veis: se a primeira (alturaEhValida) for verdadeira E a segunda (pesoEhValido) tamb�m, o IMC ser� calculado.

Para verificarmos se uma condi��o E outra s�o verdadeiras, utilizaremos o operador l�gico representado por dois & (&&):

var pesoEhValido = true;
var alturaEhValida = true;

if (peso < 0 || peso > 1000) {
    console.log("Peso inv�lido!");
    pesoEhValido = false;
}

if (altura < 0 || altura > 3.00) {
    console.log("Altura inv�lida!");
    alturaEhValida = false;
}

if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
Ao testarmos, iremos verificar se o peso ou a altura s�o inv�lidos e, neste caso, o IMC n�o ser� calculado. Na tela, veremos impresso o valor 0 na coluna da tabela.

IMC igual a 0

Os usu�rios geralmente n�o ficam com o console do navegador aberto, ent�o criaremos uma mensagem mais vis�vel para eles. Na hora de verificar o peso e a altura, se algum deles for inv�lido, deixaremos uma mensagem mais significativa alterando-se o textContent:

if (peso < 0 || peso > 1000) {
    console.log("Peso inv�lido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inv�lido!";
}

if (altura < 0 || altura > 3.00){
    console.log("Altura inv�lida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inv�lida!";
}

if (alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
peso invalido

Observe que alteramos o textContent para "Peso inv�lido" e "Altura inv�lida". Se colocarmos um peso ou uma altura inv�lidos no HTML e testar novamente a nossa p�gina, a mensagem aparecer� conforme o esperado.

mensagem de imc invalido

� poss�vel refazermos o teste alterando o valor da altura no index.html:

<tbody id="tabela-pacientes">
    <tr class="paciente" id="primeiro-paciente">
        <td class="info-nome">Paulo</td>
        <td class="info-peso">-100</td>
        <td class="info-altura">4.00</td>
        <td class="info-gordura">10</td>
        <td class="infor-imc">0</td>
    </tr>
Quando colocamos uma altura de 4.00, na tabela ser� exibida a mensagem de Altura Inv�lida!.

mensagem de altura invalida

H� uma pequena falha nas nossas condi��es se o peso for igual a 1000. O IMC continuar� sendo calculado. Faremos um ajuste no if para que isso ocorra, agora a condi��o ser� de >=:

//...

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inv�lido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inv�lido!";
}

if (altura <= 0 || altura >= 3.00){
    console.log("Altura inv�lida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inv�lida!";
}

if (alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
Tomamos o mesmo cuidado com os valores de peso. Observe que como n�o queremos que o valor 0 seja considerado v�lido para altura e peso, iremos alterar a condi��o para <=. Detectamos mais um erro que poderia ocorrer no c�digo!

Com esta �ltima valida��o, chegamos ao fim da aula. Vimos v�rios assuntos, como as l�gicas com o if e sobre como calcular o IMC adicionando os par�nteses. Mostramos o uso adequado dos operadores matem�ticos e o operador l�gico de OU (||), utilizado no if. Vimos tamb�m o &&, usado com o significado de E na condi��o.

-----------------------------------------------------------------------------
<h1>Se��o 03 - Arrays, Loop e Estilos</h1>

<h2>Replicando a valida��o e o c�lculo do IMC para todos os pacientes</h2>

Conseguimos realizar a valida��o do primeiro paciente, calculando o IMC e verificando se a altura e o peso s�o v�lidos. A seguir, replicaremos esse c�digo de valida��o e c�lculo do IMC para os demais pacientes da tabela, como no trecho abaixo:

<tbody id="tabela-pacientes">
    <tr class="paciente" id="primeiro-paciente">
        <td class="info-nome">Paulo</td>
        <td class="info-peso">1000</td>
        <td class="info-altura">2.00</td>
        <td class="info-gordura">10</td>
        <td class="info-imc">0</td>
     </tr>
//...
O c�digo respons�vel por calcular o IMC do paciente e as valida��es dos dados �, praticamente, todo o arquivo principal.js. Ent�o, bastaria copiarmos esse c�digo, modificar a classe primeiro-paciente e os nomes das vari�veis, que j� validar�amos outro paciente.

var paciente2 = document.querySelector("#segundo-paciente");

var tdPeso2 = paciente.querySelector(".info-peso");
var peso2 = tdPeso.textContent;

var tdAltura2 = paciente.querySelector(".info-peso");
var altura2 = tdAltura.textContent;
No entanto, a repeti��o de c�digo n�o � uma boa pr�tica de programa��o, o ideal � sempre reaproveitar o trabalho j� pronto. No caso, poder�amos fazer um loop - conhecido na l�gica de programa��o -, para conseguirmos iterar por cada linha da tabela, ou seja, por cada paciente. Desta forma, selecionaremos os dados de cada um deles e calcularemos os IMCs.

Ent�o, se quisermos iterar por todos os pacientes, devemos selecion�-los - e n�o somente um deles, como estamos fazendo atualmente. Se analisarmos o c�digo da tabela no index.html, veremos que todos os pacientes possuem a classe paciente:

<tbody id="tabela-pacientes">
    <tr class="paciente" id="primeiro-paciente">
        <td class="info-nome">Paulo</td>
        <td class="info-peso">-100</td>
        <td class="info-altura">4.00</td>
        <td class="info-gordura">10</td>
        <td class="infor-imc">0</td>
    </tr>
    <tbody id="tabela-pacientes">

    <tr class="paciente" id="paciente">
        <td class="info-nome">Jo�o</td>
        <td class="info-peso">80</td>
        <td class="info-altura">1.72</td>
        <td class="info-gordura">40</td>
        <td class="info-imc">0</td>
    </tr>
<!-- ... -->
Logo, em vez de buscarmos pelo id primeiro-paciente, vamos buscar pela classe paciente. Testaremos isso:

var pacientes = document.querySelector(".paciente");
console.log(pacientes);
Apesar de termos selecionado por classe, s� nos foi retornado o primeiro paciente, a primeira linha com a classe paciente. Isso porque a fun��o querySelector() nos retorna apenas um elemento, independentemente do que passarmos para a mesma. Se estivermos interessados em buscar v�rios elementos com a classe .pacientes, devemos utilizar querySelectorAll():

var pacientes = document.querySelectorAll(".paciente");
console.log(paciente);
Essa fun��o nos retorna um array no console, com todos os elementos que possuem a classe paciente.

[tr#primeiro-paciente.paciente, tr.paciente, tr.paciente, tr.paciente, tr.paciente]
Ao abrirmos o array, veremos todos os pacientes:

NodeList[5]
    0: tr#primeiro-paciente.paciente
    1: tr.paciente
    2: tr.paciente
    3: tr.paciente
    4: tr.paciente
    length: 5
Veremos impresso tamb�m a propriedade length que nos informa que temos 5 elementos.

Iterando sobre os pacientes
Agora que temos todos os pacientes da tabela, devemos iterar por eles, e para cada um deles executaremos o c�digo respons�vel por calcular o IMC e validar o peso e a altura.

H� v�rias formas de fazermos isso, e uma delas, bastante conhecida por todo mundo que j� viu algo de l�gica de programa��o � o loop for. Ele receber� tr�s argumentos: a declara��o da vari�vel inicial, at� onde queremos que essa vari�vel cres�a, e o que queremos fazer no fim de cada itera��o. Por exemplo:

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < 5; i++) {

}
Mas n�o queremos percorrer um n�mero fixo, e sim percorrer a lista de pacientes. Todo array possui uma propriedade chamada length, que nos informa o seu tamanho. Ent�o vamos us�-la para percorrer at� o tamanho da lista de pacientes:

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    console.log()

}
Deste modo, evitaremos trabalhar com um tamanho fixo de elementos.

Cada elemento do array tem um �ndice, que come�a da posi��o 0, o qual representar� o primeiro paciente, o 1 ser� o segundo, e assim por diante. Para acessarmos o paciente do array, basta passarmos o �ndice entre colchetes para o mesmo. Esse �ndice ser� a vari�vel i, que percorrer� do valor 0 at� a �ltima posi��o do array de pacientes menos 1:

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i]);
}
Feito isso, temos acesso ao pacientes[i], e bastar� movermos o c�digo que calcula o IMC e faz a valida��o para dentro do for. Al�m disso, faremos um ajuste para n�o precisarmos alterar todo o c�digo. Usaremos um pequeno "truque", criando a vari�vel paciente, que ser� um atalho para pacientes[i]:

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inv�lido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inv�lido";
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inv�lida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inv�lida";
    }

  if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc;
    }
}
De volta ao browser, veremos que conseguimos calcular o IMC de todos os pacientes!

imcs calculados

Limitando as casas decimais de um n�mero
Alguns dos IMCs possuem diversas casas decimais, tornando o n�mero imenso. Podemos melhorar isso utilizando uma fun��o que limita esta quantidade. Essa fun��o � toFixed(), que recebe como par�metro a quantidade de casas decimais a serem exibidas depois do ponto.

Vamos utiliz�-la no momento em que o IMC � impresso na c�lula:

if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
}
Agora a visualiza��o dos IMCs ficou um pouco melhor, sem tantos n�meros nas casas decimais.

imc com toFixed

Vimos um loop simples, bastante utilizado na l�gica de programa��o. Com o for, conseguimos validar o IMC e fazer os c�lculos para todos os pacientes. Se os dados de algum paciente estiverem incorretos, um aviso ser� exibido na c�lula relacionada da tabela.

<h2>Estilos com JavaScript</h2>

Faremos ajustes para deixar os nossos erros mais identific�veis. Por enquanto, temos somente cinco pacientes, e para identificar um deles cujo valor de peso ou altura seja inv�lido, vamos procurar pela mensagem exibida na �ltima coluna. Imagine se a tabela tiver 50 ou 100 pacientes cadastrados? Ser� preciso ficar scrollando a p�gina e procurar pelas mensagens!

Por isso, deixaremos uma marca��o visual para a nutricionista, indicando as linhas com erros. Faremos com que a linha com peso ou altura inv�lido exiba um fundo vermelho.

Vamos acessar o arquivo principal.js e analisar o trecho em que realizamos as valida��es:

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inv�lido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inv�lido";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inv�lida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inv�lida";
}
Para alterarmos a cor do fundo, selecionaremos a linha (cada tag tr) - o que j� fizemos anteriormente e ser� representada pela vari�vel paciente. Nosso objetivo � modificar o estilo do elemento, portanto utilizaremos a propriedade style, com os estilos aplicados. Ou seja, vamos alterar o CSS aplicado. Se adicionarmos style.color, poder�amos alterar a cor da fonte na linha.

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inv�lido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inv�lido";
    paciente.style.color = "red";
}
Quando atualizarmos a p�gina veremos que a cor da fonte foi alterada.

cor da fonte est� vermelha

Assim, por conseguirmos alterar a cor da fonte usando a propriedade color, poderemos modificar o fundo da linha ao adicionarmos a propriedade backgroundColor. Por�m, se tentarmos escrever da mesma forma como � feito no CSS (background-color), nosso c�digo n�o funcionar�. Quando queremos modificar um estilo com duas palavras, o h�fen (-) n�o � aceito pela linguagem JavaScript. Teremos que utilizar o padr�o Camel Case - no qual as palavras compostas ou frases s�o iniciadas com mai�sculas e unidas sem espa�os.

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inv�lido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inv�lido";
    paciente.style.backgroundColor = "red";
}
Sempre que houver um erro, ele ficar� em evid�ncia na tabela.

linha com o fundo vermelho

Vamos alterar a cor para um tom mais claro: lightcoral.

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inv�lida!");
    alturaEhValida = false;
    paciente.style.backgroundColor = "lightcoral";
}
linha com o fundo coral

Em seguida, vamos usar a propriedade style para sinalizar o problema na altura.

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inv�lida!");
    alturaEhValida = false;
    paciente.style.backgroundColor = "lightcoral";
}
duas linhas com dados invalidos

Sempre que ocorre um erro, ele ficar� f�cil de ser identificado na tabela. Conseguiremos fazer a linha ficar com o fundo vermelho quando algum dado for inv�lido.

No entanto, imagine a situa��o em que o designer decide que a cor de fundo n�o ser� mais vermelha, e sim laranja. Devemos nos lembrar de modific�-la nas duas verifica��es.

O local correto para definirmos o estilo da p�gina � no arquivo CSS. Novamente, � importante separarmos esses ajuste do arquivo HTML.

� importante mantermos essa separa��o dos "mundos": o HTML � utilizado para marcar os elementos, o JavaScript para adicionar dinamismo e manipular a p�gina, enquanto o CSS � respons�vel por estilizar. Logo, o ideal n�o � modificar o estilo da linha no c�digo JavaScript, ent�o qual � o meio termo entre n�o modificar o estilo diretamente, mas conseguir alter�-lo, no JavaScript?

� uma boa pr�tica, em vez de adicionarmos um estilo, incluirmos uma classe ao elemento. Ent�o criaremos uma nova classe em index.css com dados do paciente inv�lido. A classe paciente-invalido ir� indicar com quais cores trabalharemos nestes casos:

.paciente-invalido {
    background-color: lightcoral;
}
De volta ao JavaScript, assim como temos o style** para acesso aos estilos e o textContent para acessarmos o conte�do de texto de um elemento, teremos a classList para acessarmos as classes. E usando o m�todo add, adicionaremos a classe desejada, no caso, paciente-invalido:

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inv�lido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inv�lido";
    paciente.classList.add("paciente-invalido");
}
Se o designer quiser modificar a cor de fundo, dever� modific�-la no CSS e n�o mais no JavaScript. Inspecionando-se uma linha cujo fundo possui altera��o de cor, verificaremos no console que a classe paciente-invalido foi adicionada.

O pr�ximo passo ser� incluir classList.add("paciente-invalido") tamb�m na valida��o da altura:

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inv�lida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inv�lida";
    paciente.classList.add("paciente-invalido");
}
Agora, sempre que for necess�ria uma altera��o na parte visual da p�gina, elas ser�o feitas no arquivo index.css. Caso queiramos que o fundo da linha com o dado inv�lido fique com a cor azul, por exemplo, devemos alterar a classe .paciente-invalido no c�digo CSS.

.paciente-invalido{
    background-color: blue;
}
linhas com o fundo azul

N�o precisaremos localizar todos os pontos onde escrevemos lightcoral no c�digo. Evitaremos o risco de esquecermos a altera��o em algum trecho. Ao adicionarmos uma classe no CSS, nosso c�digo fica organizado.

Vamos deixar a cor do fundo da linha com o erro como estava:

.paciente-invalido{
    background-color: lightcoral;
}
Encerramos mais uma aula do curso de JavaScript, no qual apresentamos como fazer o c�lculo do IMC para todos os pacientes da tabela, em vez de um. Mostramos como selecionar v�rios elementos do HTML simultaneamente, usando a fun��o querySelectorAll(). Com ela podemos trazer uma lista de objetos selecionados contendo a classe .paciente. Depois, percorremos essa lista com o la�o for. Trabalhamos tamb�m com a propriedade length, que nos retorna o tamanho do array, al�m de aprendermos como acessar uma posi��o especifica do array utilizando o [].

Por fim, conseguimos calcular o IMC dos pacientes e arredondamos os resultados com valores decimais, fazendo uso do m�todo toFixed(). E manipulamos o estilo de um objeto no JS, por meio da propriedade style - que n�o deve ser utilizada com frequ�ncia. Na aula, explicamos a import�ncia de n�o misturarmos os "mundos" de linguagens diferentes, no caso, quando queremos alterar o visual da p�gina, devemos manipular as classes do arquivo CSS. A nova classe ser� adicionada com classList.add() no JavaScript. Este tipo de ajuste � uma boa pr�tica que deve ser adotada por facilitar a manuten��o do c�digo.

Como selecionar diversos elementos com a fun��o querySelectorAll()
Relembramos um m�todo cl�ssico de itera��o com o for
Vimos como manipular estilos com a propriedade .style
Vimos que devemos utilizar camelCase quando queremos modificar uma propriedade que tenha duas palavras, como a background-color
A boa pr�tica de n�o alterar o estilo diretamente no Javascript e sim modificar as classes dos elementos com a propriedade .classList
-----------------------------------------------------------------------------------------------------------
<h1>Se��o 04 - Eventos, Formul�rios e Criando Elementos</h1>

<h2>Escutando eventos</h2>
Nossa tabela faz o c�lculo do IMC de todos pacientes com os dois tipos de valida��es, inclusive sinalizando visualmente quando uma linha tem problemas, e assim facilitaremos a vida da Aparecida em rela��o ao cadastro de pacientes.

Atualmente, para adicionar um novo paciente, ela deve acessar o arquivo index.html e incluir uma nova <tr> na tabela, juntamente com as tags <td>, e modificar os dados da pessoa. Depois disso, uma nova linha surgir� na tabela.

Ou seja, o HTML � alterado manualmente, o que n�o � pr�tico. Seria muito simples se em vez de adicionarmos o paciente diretamente no HTML, houvesse um formul�rio no site, o qual ela pudesse preencher com os dados do paciente. E, ap�s clicar-se no bot�o "Adicionar", o paciente seria adicionado � tabela. � exatamente isso que iremos implementar.

Como esse � um curso focado em JavaScript, disponibilizaremos o formul�rio pronto, basta adicion�-lo abaixo do fechamento da tag <main>, e antes de <script>:

<!-- ... -->
<section class="container">
    <h2 id="titulo-form">Adicionar novo paciente</h2>
    <form>
        <div class="grupo">
            <label for="nome">Nome:</label>
            <input id="nome" name="nome" type="text" placeholder="digite o nome do seu paciente" class="campo">
        </div>
        <div class="grupo">
            <label for="peso">Peso:</label>
            <input id="peso" name="peso" type="text" placeholder="digite o peso do seu paciente" class="campo campo-medio">
        </div>
        <div class="grupo">
            <label for="altura">Altura:</label>
            <input id="altura" name="altura" type="text" placeholder="digite a altura do seu paciente" class="campo campo-medio">
        </div>
        <div class="grupo">
            <label for="gordura">% de Gordura:</label>
            <input id="gordura" type="text" placeholder="digite a porcentagem de gordura do seu paciente" class="campo campo-medio">
        </div>

        <button id="adicionar-paciente" class="botao bto-principal">Adicionar</button>
    </form>
</section>
O formul�rio possui os campos de preenchimento dos seguintes dados: "nome", "peso", "altura" e "% de gordura":

Formul�rio de adi��o de paciente

Quando a Aparecida preencher esses campos e clicar no bot�o "Adicionar", uma nova linha na tabela dever� ser criada, com a exibi��o dos dados rec�m adicionados atrav�s do formul�rio. Mas para faz�-lo, primeiramente devemos entender algumas funcionalidades do JavaScript.

Como faremos para detectar o exato momento em que o usu�rio clicar� no bot�o e, ent�o, executar uma a��o?

A a��o de "perceber o que o usu�rio est� fazendo na p�gina" � o que chamamos de evento do browser, que pode ser escutado com o JavaScript. A��es como clicar, duplo clique, scrollar, passar o mouse em cima, s�o exemplos dos tipos de intera��o que o usu�rio pode fazer com a p�gina.

Para escutarmos um evento de clique, devemos especificar em qual elemento queremos faz�-lo. Se queremos identificar o momento do clique do bot�o, usaremos a vari�vel titulo seguida de um "escutador de evento" que escutar� as intera��es dos usu�rios, addEventListener(). Ela ser� respons�vel por adicionar o escutador de evento, como j� diz o nome traduzido para o portugu�s. Em que tipo de evento estamos interessados? No caso, justamente no evento de click. Queremos que algo aconte�a quando o usu�rio clicar no elemento. Indicaremos o que deve ser feito usando-se a fun��o mostraMensagem(). Dentro dela, adicionaremos console.log("Ol�, eu fui clicado!").

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
    console.log("Ol� eu fui clicado!");
}
Observe que na vari�vel titulo, chamamos a fun��o mostraMensagem() ao pass�-la como segundo par�metro do addEventListener().

Em seguida, vamos atualizar a p�gina do browser e verificar se as altera��es est�o funcionando. Clicaremos no t�tulo "Aparecida Nutricionista", que � o conte�do da tag <h1>, e para cada clique a mensagem ser� exibida no console.

mensagem eu fui clicada � exibida

N�s conseguimos adicionar o escutador de eventos no t�tulo da p�gina. Quando ele percebe que o usu�rio interagiu a partir de um clique, ele chama a fun��o mostraMensagem(). Desta forma, atrelamos o evento com um determinado trecho de c�digo HTML.

Uma outra abordagem que poder�amos adotar seria usarmos uma fun��o an�nima. Em vez de declararmos mostraMensagem como um par�metro addEventListener(), poder�amos chamar diretamente function():

titulo.addEventListener("click", function (){
    console.log("Olha s� posso chamar uma fun��o an�nima.")
});
Observe que a fun��o ainda possui as chaves ({}), mas n�o recebe um nome. Fun��es an�nimas s�o bastante utilizadas, principalmente no caso de eventos. Al�m disso, chamamos uma fun��o quando interagimos com um evento de clique, que s� existir� quando o bot�o for clicado.

Resumindo, podemos trabalhar tanto com uma fun��o nomeada, como a mostraMensagem(), ou uma fun��o an�nima, que ser� criada como segundo par�metro da addEventListener(). Por enquanto, vamos praticar utilizando uma fun��o an�nima.

Por�m, n�o queremos adicionar um evento de clique quando clicamos no t�tulo, e sim ap�s o clique do usu�rio no bot�o "Adicionar" do formul�rio. A �nica a��o que realizaremos a principio ser� exibir uma mensagem no console.

Teremos que selecionar o bot�o no JavaScript! No fim do trecho do c�digo referente ao formul�rio, encontraremos a tag <button>, acima do fechamento de <form> em index.html:

<!-- ... -->
    <div class="grupo">
        <label for="gordura">% de Gordura</label>
        <input for="gordura" name="gordura" type="text" placehoder="digite a porcentagem de gordura do seu paciente" class="campo campo-medio">
    </div>

    <button id="adicionar-paciente" class="botao bto-principal">Adicionar</a>
</form>
Em seguida, vamos adicionar o bot�o no arquivo principal.js. Abaixo do �ltimo if de valida��o dos dados, criaremos a vari�vel botaoAdicionar, e o bot�o ser� levado pela fun��o document, usaremos o querySelector() para buscar no HTML e, nos par�nteses da fun��o incluiremos o seletor #adicionar-paciente:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
console.log(botaoAdicionar)
Adicionaremos o console.log() para verificarmos se o c�digo est� funcionando. No browser, a mensagem ser� exibida se atualizarmos a p�gina, indicando que conseguimos pegar o bot�o como gostar�amos.

tag button no console

N�s tamb�m queremos escutar um evento de clique do bot�o, por isso, adicionaremos novamente addEventListener().

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    console.log("Oi, cliquei no bot�o.");
});
No entanto, se tentarmos clicar no bot�o "Adicionar" do formul�rio, a mensagem n�o ser� exibida no console. Por que isso acontece?

Por padr�o, sempre que clicamos em um bot�o contido em uma tag <form> do HTML, os seus dados ser�o enviados para outra p�gina. Como n�o especificamos uma p�gina para ser o alvo da tag <form>, a �nica a��o realizada � a limpeza dos dados, e a p�gina sendo recarregada em seguida. Ao fazermos isto, al�m do formul�rio, o console fica limpo tamb�m - por isso, n�o veremos a mensagem.

O evento de clique est� sendo escutado corretamente, por�m, como a p�gina � recarregada rapidamente, n�o conseguiremos ver a mensagem impressa no console. Desta forma, n�o conseguiremos salvar os dados do paciente na tabela, nem exibir a mensagem.

O que devemos fazer para que a p�gina n�o seja recarregada e tenha o comportamento esperado?

<h2>O bot�o que falhou</h2>
Maria est� ansiosa para descobrir a raz�o do seu c�digo n�o ter funcionado. � um c�digo simples, que exibe um alerta quando um bot�o � clicado:

<button id="botao">clique-me</button>
<script>

    var botao = document.querySelector('#botao');

    function botaoHandler() {

        alert('Bot�o clicado');
    }

    botao.addEventListener('click', botaoHandler());
</script>
Medite sobre o c�digo de Maria e tente descobrir o problema. Assim que tiver chegado a uma conclus�o, clique em "Ver Opini�o do Instrutor" para ver a resposta do instrutor.

VER OPINI�O DO INSTRUTOR
Opini�o do Instrutor

O problema est� nessa linha:

botao.addEventListener('click', botaoHandler());
Em vez de associar a fun��o botaoHandler para o evento click, ela acabou associando o retorno da fun��o, ao adiciona-la usando par�nteses. Como a fun��o n�o retorna nada, o c�digo que ser� executado ser� igual a nada quando o bot�o for clicado. Para corrigirmos o c�digo, basta retiramos os par�nteses:

botao.addEventListener('click', botaoHandler);
Veja que n�o estamos mais chamando a fun��o, mas passando-a por inteiro para o evento click . Quando o bot�o for clicado, por debaixo dos panos, o navegador executar� botaoHandler() para n�s.

<h2>Evitando o comportamento padr�o de um evento</h2>
O comportamento padr�o do bot�o que se encontra no formul�rio � limpar os dados preenchidos nos campos, recarregar a p�gina e enviar os dados. N�s queremos evitar esse comportamento padr�o.

Para isso, devemos chamar uma fun��o caracter�stica dos eventos, que faz com que o evento n�o fa�a seu comportamento padr�o. Desta forma, ele n�o executar� este comportamento e reagir� conforme o que pedimos no evento, no caso, a exibi��o de uma mensagem. Implementaremos a fun��o event.preventDefault():

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
});
Essa fun��o faz exatamente o que seu nome diz, prevenindo o comportamento padr�o do evento. Mas para utiliz�-la, receberemos como segundo par�metro a fun��o an�nima, o event:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Oi eu sou o botao e fui clicado");
});
Em seguida, testaremos novamente a p�gina, preenchendo o formul�rio e clicando no bot�o "Adicionar". Podemos reparar em duas coisas: a p�gina n�o foi recarregada e o formul�rio n�o foi limpo. Al�m disso, conseguimos ver a mensagem no console.

mensagem de bot�o clicado foi exibido no console

A fun��o event.preventDefault() conseguiu evitar o comportamento padr�o do formul�rio.

Conseguimos detectar o evento de clique no bot�o (e no t�tulo), em seguida, implementaremos o que queremos de fato: adicionar os dados do paciente na tabela. Veremos como fazer isso com JavaScript mais adiante!

<h2>Adicionando pacientes na tabela</h2>
Para adicionarmos o paciente na tabela, devemos capturar seus dados do formul�rio. Para isto, sabemos que devemos traz�-los do mundo HTML para o do JavaScript, selecionando-os.

Vamos adicionar um id ao formul�rio:

<form id="form-adiciona">
    <!-- restante do formul�rio omitido -->
</form>
Agora conseguimos selecion�-lo no mundo JavaScript:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
});
Atrav�s do formul�rio, temos acesso aos seus inputs, acessando atrav�s da sua propriedade name. � poss�vel vermos no HTML que todos os inputs possuem uma propriedade name, bastando utiliz�-lo para termos acesso ao input:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome;

});
Mas n�o estamos interessados no campo em si, no input, e sim no seu valor. Para acessar o valor de um campo em JavaScript, utilizaremos a propriedade value:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;

});
Sabendo disso, poderemos capturar o valor do restante dos campos:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

});
Com isso, conseguimos trazer os dados do formul�rio do HTML para o JavaScript, e adicionar o paciente na tabela.

Criando um elemento HTML com JavaScript
Com os dados em m�os, como vamos fazer para "criar" um paciente? At� agora vimos como trazer algo do mundo HTML para o mundo JavaScript, mas agora � o contr�rio: temos os dados no mundo JavaScript e queremos criar uma nova linha na tabela com eles, que � no mundo HTML. Ou seja, queremos criar um elemento HTML utilizando JavaScript.

Para isso, vamos utilizar a fun��o createElement, que como o pr�prio nome indica, cria um elemento HTML. Poderemos olhar o HTML da tabela e ver que se queremos criar um novo paciente, devemos criar uma nova tr, que por sua vez possui v�rias tds, cada uma com o seu dado.

Logo, se queremos criar um paciente, vamos criar uma nova tr. Para criarmos um elemento, precisaremos informar onde queremos criar, isto �, em document:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

});
Agora que sabemos criar um elemento, podemos criar as tds:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

});
S� que criamos seis elementos distintos, seria como se tiv�ssemos criado um HTML assim:

<tr></tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
Sabemos que temos que colocar os dados dentro das tds, e depois peg�-las e coloc�-las na tr. Vamos por passos, primeiro colocando os dados dentro das tds, que j� sabemos como � feito.

Lembra quando alteramos o conte�do de texto do t�tulo? Utilizamos a propriedade textContent, passando para ela o novo dado. Pois aqui � a mesma coisa, vamos alterar o conte�do de texto das tds, passando os seus respectivos valores, capturados do formul�rio:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

});
Utilizando o JavaScript para adicionar um elemento dentro de outro
Agora devemos adicionar cada td dentro da tr. No JavaScript existe uma fun��o chamada appendChild. Ela adiciona como filho o elemento passado a ela como par�metro. Logo, vamos chamar essa fun��o na tr, passando a td como par�metro, uma por uma:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

});
Agora j� temos algo mais pr�ximo do que � um paciente, e falta colocarmos ele dentro da tabela. Para isto, vamos selecionar a tabela, o tbody do HTML atrav�s do seu id, e utilizar a fun��o appendChild para adicionar a tr como sua filha:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});
Agora, no momento em que preenchemos os dados do formul�rio e clicamos em Adicionar, o paciente � adicionado � tabela!

Ainda n�o estamos calculando o IMC, mas faremos isso no pr�ximo cap�tulo, vendo como construir um c�digo bem organizado.

<h2>De declara��o de fun��o para fun��o an�nima</h2>

Aprendemos a declarar fun��es, inclusive aprendemos a associ�-las � eventos como no exemplo abaixo:
<code>
<button id="botao">clique-me</button>
<script>

    var botao = document.querySelector('#botao');

    function botaoHandler() {

        alert('Bot�o clicado');
    }

    botao.addEventListener('click', botaoHandler);
</script>
</code>
Por ser uma declara��o de fun��o, podemos utilizar a mesma fun��o para outros eventos do sistema. No entanto, quando n�o faz muito sentido reaproveitar a fun��o em outros lugares podemos declar�-la na forma an�nima. Qual das op��es abaixo possui o c�digo anterior modificado para trabalhar com fun��es an�nimas?
var botao = document.querySelector('#botao');

botao.addEventListener('click', function() {

    alert('Bot�o clicado');

});

<h2>Para saber mais: event shortcut</h2>
Vejamos o seguinte exemplo de c�digo:

<button id="botao">clique-me</button>
<script>

    var botao = document.querySelector('#botao');

    function botaoHandler() {

        alert('Bot�o clicado');
    }

    botao.addEventListener('click', botaoHandler);
</script>
Nele associamos uma fun��o ao evento click, aquele disparado toda vez que o elemento for clicado, em nosso caso, um bot�o. A vantagem do addEventListener � que podemos executar mais de uma fun��o para o mesmo evento. Vejamos:

<button id="botao">clique-me</button>
<script>

    var botao = document.querySelector('#botao');

    function botaoHandler() {

        alert('Bot�o clicado');
    }

     function outroHandler() {

        alert('Bot�o clicado tamb�m!');
    }


    botao.addEventListener('click', botaoHandler);
    botao.addEventListener('click', outroHandler);
</script>
Nesse caso, temos uma fila de eventos, na qual o primeiro adicionado na fila ser� executado e o segundo em seguida. No entanto, quando desejamos executar apenas uma �nica fun��o por evento, podemos escrever o c�digo da seguinte forma usando um event shortcut:

<button id="botao">clique-me</button>
<script>

    var botao = document.querySelector('#botao');

    function botaoHandler() {

        alert('Bot�o clicado');
    }

     function outroHandler() {

        alert('Bot�o clicado tamb�m!');
    }


    botao.onclick = botaoHandler;
</script>
Para cada evento existente no JavaScript, h� a propriedade on + nomeDoEvent. No caso, temos onclick para o evento click, onmouseover para o evento mouseover e assim por diante. Nesse caso, a fun��o que desejamos executar � atribu�da direto na propriedade. No entanto, essa forma tem uma limita��o, como estamos guardando a fun��o em uma propriedade, se adicionarmos outra fun��o, essa sobrescrever� a anterior. Vejamos:

<button id="botao">clique-me</button>
<script>

    var botao = document.querySelector('#botao');

    function botaoHandler() {

        alert('Bot�o clicado');
    }

     function outroHandler() {

        alert('Bot�o clicado tamb�m!');
    }


    botao.onclick = botaoHandler;
    botao.onclick = outroHandler; // substitui botaoHandler
</script>
Sendo assim, a boa pr�tica � trabalhar com addEventListener() mesmo que voc� s� queira adicionar um �nico evento. Porque mais tarde, se outro desenvolvedor quiser adicionar outro evento para o mesmo elemento, n�o corremos o risco de substituir a fun��o j� associada por outra.


------------------------------------------------------------------------------------------------------------------
<h1>Se��o 05 - Boas Pr�ticas com Javascript</h1>

<h2>Quebrando o c�digo em arquivos diferentes</h2>

Nossa aplica��o JavaScript come�ou a crescer bastante, n�s conseguimos calcular o IMC dos pacientes da tabela, al�m de ser poss�vel adicionarmos um novo cadastro ap�s preenchermos um formul�rio. Ficou faltando calcular o IMC dos novos pacientes cadastrados!

� medida em que formos adicionando mais funcionalidades, o arquivo JS cresceu - mesmo que com apenas duas. Com isso, vai se tornando mais dif�cil sua manuten��o. O nosso c�digo est� funcional, por�m n�o muito organizado. O c�digo est� agrupado em um grande arquivo com muitas responsabilidades e isso dificulta a adi��o de novas funcionalidades. Imagine se formos calcular o IMC do paciente rec�m adicionado...

Teremos que aumentar ainda mais o c�digo; uma boa pr�tica para quem est� come�ando a desenvolver � sempre organiz�-lo, dividindo o c�digo por funcionalidades. Uma maneira de faz�-lo � criar novos arquivos JS e separar o trecho respons�vel pelo c�lculo IMC do c�digo relacionado ao <form>.

O pr�ximo passo ser� criar o arquivo form.js na pasta js. Ele ser� respons�vel por cuidar de todos os arquivos que tenham a ver com o formul�rio. Moveremos para l� todo o trecho respons�vel por adicionar um paciente na tabela. A seguir, moveremos o c�digo:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});
Agora os arquivos ficaram menores e simplificamos a manuten��o do c�digo.

Para deixar os arquivos mais sem�nticos e organizados, vamos alterar o nome do arquivo principal.js, e deixar claro qual a sua responsabilidade. No caso, iremos renome�-lo como calcula-imc.js.

Em seguida, no index.html, vamos alterar o src da tag <script>, abaixo do fechamento da tag <section>:

<script src="js/calcula-imc.js" ></script>
<script src="js/form.js" ></script>
Separamos os arquivos, deixando cada uma com uma funcionalidade, e o c�digo ficar� melhor organizado. Mais adiante, continuaremos fazendo outras melhorias na aplica��o.

<h2>Agulha no palheiro!</h2>
Leopoldo se vangloriava do seu arsenal de fun��es criadas por ele para resolver problemas do dia a dia. Todas elas eram declaradas no arquivo minhas-funcoes.js.

Voc� enxerga desvantagens em declarar todas as fun��es em um arquivo? H� alguma vantagem? Pense a respeito e em seguida veja a opini�o do instrutor.
A vantagem de declararmos todas as fun��es em um �nico arquivo � favorecer sua importa��o em nossas p�ginas, pois se fossem v�rios arquivos precisar�amos importar um a um.

Uma desvantagem dessa abordagem � que fica mais complicado de um desenvolvedor trabalhar com o mesmo arquivo ao mesmo tempo. Se o desenvolvedor A precisa alterar a fun��o X e o desenvolvedor B a fun��o Y o risco do trabalho ser perdido quando o arquivo for atualizado � grande. Mesmo com ferramentas de versionamento de c�digo o desenvolvedor ter� que resolver conflitos que s�o bastantes comuns nessa abordagem.

Outro ponto � o seguinte. Se das 100 fun��es declaradas no arquivo apenas um necessitar manuten��o, caso o desenvolvedor cometa algum erro de sintaxe, isso comprometer� todas as fun��es, pois nada ser� mais carregado. Sendo assim, as chances de introduzir problemas quando for resolver um s�o bem maiores.

Quando temos arquivos separados, cada arquivo possui uma responsabilidade e uma ou mais fun��es que fazem sentido naquela responsabilidade. Por exemplo, podemos ter um arquivo chamado conversao.js e nele termos fun��es que convertem valores monet�rios com R$ para n�meros, e n�meros para o formato com R$. Al�m disso, se separamos outras funcionalidades por arquivo, quando alterarmos esses arquivos, se cometermos algum erro, apenas uma ou mais fun��es do arquivo ser�o comprometidas e o restante dos outros arquivos poder�o ser carregados sem problema (a n�o ser que um arquivo dependa do outro).

Por fim, assim como na vida real separamos meias de cuecas/calcinhas e de camisas para nos auxiliar na busca, separar arquivos por grupos comuns tamb�m nos ajuda a encontrar e dar manuten��o em nosso c�digo.

<h2>Criando fun��es</h2>
Outra boa pr�tica que poderemos implementar no c�digo � separar os blocos de c�digo em blocos menores, em fun��es. Mostramos como um bloco grande de c�digo � respons�vel por fazer muitas coisas.

No arquivo calcula-imc.js, temos um for respons�vel por pegar os dados dos pacientes, fazer a valida��o do peso e da altura e, depois, calcular o IMC e inserir os dados na tabela. Ou seja, temos tr�s funcionalidades dentro do mesmo bloco.

Essas funcionalidades, como o c�lculo do IMC, s�o necess�rias em outros pontos do nosso c�digo no form.js. Quando estamos adicionando um paciente na tabela por meio do formul�rio, atualmente, a linha fica sem o resultado do c�lculo do IMC.

Ou seja, precisaremos calcular o IMC tamb�m no form.js, n�o s� no c�digo que atualmente est� preso no calcula-imc.js. Queremos reaproveitar o c�digo, e isto ser� poss�vel se chamarmos uma fun��o que calcule o IMC em form.js. A fun��o calculaImc() receber� peso e altura como par�metros:

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calculaImc(peso, altura);
A fun��o tamb�m poder� ser chamada em calcula-imc.js, reaproveitando assim a l�gica de c�lculo do IMC. Vamos cri�-la em seguida, e ela j� retornar� o IMC com duas casas decimais:

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc;
}
Depois, vamos cham�-la tamb�m dentro da valida��o do pesoe altura que antecede a fun��o calculaImc():

if ( alturaEhValida && pesoEhValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc.toFixed(2);
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc;
}
No browser, veremos que o c�lculo ser� realizado e o resultado ser� exibido na tabela.

calculo do imc ser� exibido

Mas faremos um pequeno ajuste no c�digo: em vez de passarmos toFixed() em if, iremos mov�-lo para o retorno da fun��o calculaImc(). Com as altera��es, o nosso c�digo fica assim:

 if ( alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}
    function calculaImc(peso, altura){
        var imc = 0;

        imc = peso / (altura * altura);

        return imc.toFixed(2);
    }
A vantagem de termos uma fun��o separada � que conseguimos executar o calculaImc() no arquivo form.js:

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calculaImc(peso,altura);
Pode-se afirmar que o conte�do de texto do imcTd ser� o retorno da fun��o calculaImc(). Neste caso, tamb�m teremos peso, altura, e queremos calcular o IMC. Em seguida, a vari�vel pacienteTr tamb�m receber� o imcTd quando formos adicion�-la na tr.

pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);
Agora, ao adicionarmos um paciente na tabela pelo formul�rio, uma nova linha ser� inserida, com o valor do IMC calculado e exibido na tabela. Para exemplificar, vamos experimentar cadastrar os dados do paciente Alvaro.

Com isto, conseguiremos extrair a responsabilidade de se calcular o IMC, que estava presa no calcula-imc.js, fazendo o reuso desse c�digo. Logo, � uma boa pr�tica extrairmos um c�digo que queremos reusar em outros locais, para fun��es externas.

linha com dados do Alvaro

N�s conseguimos reutilizar o c�digo para se calcular o IMC e, ap�s movermos a fun��o, separamos a responsabilidade de se fazer este c�lculo. Uma boa pr�tica de programa��o � extrairmos a��es que queremos reutilizar - como o c�lculo do IMC - para fun��es externas. Fica mais essa dica de melhorias do c�digo!

<h2>Criando um objeto paciente</h2>

Continuando com as melhorias e refatora��es do nosso c�digo e aplicando-se boas pr�ticas, seria interessante quebrarmos o c�digo do form.js em fun��es menores, considerando que atualmente temos uma fun��o com v�rias responsabilidades, como capturar os valores do formul�rio, criar a tr e as tds do paciente, colocar os valores nas linhas, e por �ltimo colocar as tds na tr, e por fim a tr na tabela. Isto �, h� quatro funcionalidades em uma mesma fun��o, o que dificulta a manuten��o do c�digo.

Imagine outro desenvolvedor tendo que interpretar o bloco de c�digo gigante, ele ter� dificuldade para entender qual a sua utilidade, pois isto n�o est� expl�cito. O ideal � quebrarmos o c�digo em v�rias fun��es menores, o que, al�m de deix�-lo mais organizado, faz com que as responsabilidades sejam separadas, cada fun��o com uma diferente. Vamos comentar o que cada trecho faz:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //Extraindo informacoes do paciente do form
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
Mais abaixo teremos o trecho respons�vel por criar as tags tr e td:

//cria a tr e a td do paciente
var pacienteTr = document.createElement("tr");

var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calculaImc(peso,altura);

pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);
Em seguida, temos o trecho respons�vel por adicionar o paciente.

//adicionando o paciente na tabela.
var tabela = document.querySelector("#tabela-pacientes";

tabela.appendChild(pacienteTr);
Temos pelo menos tr�s fun��es que trabalhar�o com tarefas menores.

Fun��o para capturar os dados do formul�rio
A primeira coisa que podemos fazer � extrair a responsabilidade de capturar os dados do paciente do formul�rio para uma nova fun��o que receber� o nome obtemPacienteDoFormulario(). Ela receber� o formul�rio por par�metro e extrair� os dados dele:

var form = document.querySelector("#form-adiciona");
// Extraindo informacoes do paciente do form
obtemPacienteDoFormulario(form)
Criaremos a fun��o obtemPacienteDoFormulario(), para onde iremos mover as vari�veis nome, peso, altura e gordura.

function obtemPacienteDoFormulario(form) {
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
}
Esse c�digo est� pegando todos os valores e extraindo para vari�veis. O nome, peso, altura e gordura s�o caracter�sticas do paciente. Logo, eles pertencem ao mesmo paciente e poderiam ser representados pela mesma coisa. Quando falamos em representar um paciente, falamos de objetos. Nas linguagens de programa��o, objetos representam coisas do mundo real, ou mesmo da programa��o.

Ao criarmos um paciente, sabemos que ele deve ter um nome, peso, altura e gordura. Ent�o, agruparemos todas as caracter�sticas em uma mesma vari�vel criando um objeto em JavaScript usando chaves ({}):

function obtemPacienteDoFormulario(form) {

    var paciente = {

    }

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
}
Dentro das chaves, passamos as propriedades do objeto, que nada mais s�o que as suas caracter�sticas. Para criar uma propriedade, passamos o seu nome e o seu valor, mas n�o com um igual e sim com dois pontos. Por exemplo, a propriedade nome:

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }
    return paciente
}
Assim, atribu�mos �s propriedades os valores extra�dos do formul�rio e, no fim, a fun��o retornar� o objeto paciente.

Na parte de cima do arquivo, vamos declarar a vari�vel paciente.

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    console.log(paciente);
Em seguida, testaremos preencher o formul�rio no browser, ap�s clicarmos no bot�o "Adicionar", veremos os dados quebrados na ultima linha. No entanto, o objeto ser� impresso no console.

objeto impresso no console

O objeto paciente representa as propriedades do paciente. Se imprimirmos paciente.nome, paciente.gordura, poderemos acessar cada um dos dados individualmente.

nome e gordura no console

Esta maneira de representar uma vari�vel que cont�m v�rias caracter�sticas j� foi utilizada anteriormente. Quando selecionamos um elemento com o querySelector(), ele tamb�m nos devolver� um objeto, como no trecho abaixo do calcula-imc.js:

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
No exemplo, o elemento possui a propriedade textContent e value. Esse trecho do HTML � representado por um objeto. No caso da fun��o obtemPacienteDoFormulario() do form.js, n�s criamos as caracter�sticas do paciente.

Vamos continuar com o c�digo adicionando outra caracter�stica: o imc. Seu valor ser� a fun��o criada anteriormente calculaImc() e passaremos o peso e a gordura do formul�rio como par�metros:

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.altura.value, form.peso.value)
    }
}
Por fim, a fun��o retornar� o objeto que cont�m todos os dados do paciente, incluindo o imc:

imc exibido no console

Conseguimos representar o paciente adicionado por meio de um objeto e este se encontra dispon�vel no come�o do arquivo. Enxugamos as responsabilidades, e podemos continuar com esse processo de melhorias com o restante da fun��o!

Utilizamos objetos no Javascript como na maioria das linguagens de programa��o orientadas , aonde os objetos podemos compar�-los com objetos da vida real. Um objeto � uma entidade independente, com propriedades e tipos. Compare-o com uma x�cara, por exemplo. Uma x�cara � um objeto, com propriedades. Uma x�cara tem uma cor, uma forma, peso, um material de composi��o, etc. Da mesma forma, objetos em JavaScript podem ter propriedades, que definem suas caracter�sticas.

Para declaramos um objeto, utilizamos a sintaxe com {}, exemplo:

var xicara = {};
S� que de nada nos serve um objeto vazio, ent�o podemos dar caracter�sticas a este objeto atrav�s de suas propriedades:

var xicara = {
    cor: "azul",
    peso: 125,
    tipo: "ch�"
};
As propriedades de um objeto s�o separadas por um : do seu valor e utilizamos uma v�rgula ao final de cada propriedade para separ�-la da pr�xima. Podemos acessar as propriedades de um objeto Javascript como abaixo:

xicara.cor // azul
xicara.peso // 125
xicara.tipo // ch�
xicara.modelo // undefined, este objeto n�o possui a propriedade modelo
Ou seja, nosso exemplo estava errado por que estava utilizando o sinal de = em vez do de : para separar as propriedades de seus valores.

<h2>Melhorando ainda mais o c�digo</h2>
Outra responsabilidade a ser extra�da � a cria��o da tr e das tds do paciente. Atualmente o trecho do c�digo do form.js est� assim:

//cria a tr e a td do paciente
var pacienteTr = document.createElement("tr");

var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calculaImc(peso,altura);

pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);
Na parte de baixo do arquivo, criaremos a fun��o montaTr, que receber� um paciente como par�metro e, como o pr�prio nome indica, montar� a tr com os dados:

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");

    return pacienteTr;
}
Em seguida, devemos preench�-la com as tds do paciente. Se movermos o c�digo referente aos dados do paciente para dentro da fun��o, ela ficaria mais leg�vel:

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}
As tags td ser�o criadas, e ent�o preenchidas com paciente.nome, paciente.peso, paciente.altura, paciente.gordura e j� n�o precisaremos calcular o IMC, pois o c�lculo foi feito em paciente.imc.

Por fim, chamaremos a fun��o montaTr quando o bot�o for clicado. A fun��o ficar� dentro da vari�vel pacienteTr:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    // Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    // Cria a tr e a td do paciente
    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

});
Ao preenchermos os dados do formul�rio, veremos que eles continuar�o sendo adicionados � tabela com o c�digo mais leg�vel.

Adicionando classes aos elementos
Ao inspecionarmos o HTML da nossa tabela, veremos que os pacientes adicionados por meio do formul�rio n�o possuem algumas caracter�sticas dos pacientes nativos. A tr do paciente nativo possui a classe paciente, assim como as tds - cada uma com uma classe indicando a informa��o contida na td. J� os pacientes que adicionamos com o formul�rio n�o possuem classes - tanto na tr quanto nas tds. Ou seja, n�o estamos criando um paciente exatamente igual ao paciente nativo.

Vamos alterar o c�digo da fun��o montaTr para criar um paciente com as classes corretas. J� sabemos como adicionar uma classe a um elemento, a seguir, adicionaremos a classe paciente na tr. Para isso, usaremos o m�todo add():

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}
Se testarmos no navegador, veremos que a tr ser� criada com a classe. Por�m, falta adicionarmos as classes nas tds, por exemplo, info-nome e info-peso:

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    nomeTd.textContent = paciente.nome;
Temos que fazer esse c�digo para todas as tds, criar o elemento, incluir a classe e o valor. Observe que por termos separado as fun��es, j� sabemos onde fazer as altera��es.

Fun��o para criar e montar uma td
Quando identificamos c�digos repetidos, temos a op��o de export�-los para uma fun��o, que ser� respons�vel por eles. A fun��o montaTd criar� a td e adicionar� a classe juntamente com o dado. Como a classe e o dado variam de acordo com a td, iremos receb�-los por par�metro na fun��o:

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add("info-nome");
    td.textContent = paciente.nome;

    return td;
}
Agora basta chamar essa fun��o em montaTr:

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add("info-nome");
    td.textContent = paciente.nome;

    var nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    nomeTd.textContent = paciente.nome;
//...
Por�m, ter�amos que ter diversas linhas de c�digo fazendo a mesma tarefa. O c�digo repetidamente criaria a td, adicionaria uma classe e depois o dado. Ser� que existe alguma forma de simplificarmos esse trabalho? Sim, podemos criar diretamente uma fun��o que monta as tags td: montaTd().

function montaTd(dado){
    var td = document.createElement("td");
    td.textContent
}
No td criado, deve ser adicionado como o conte�do de texto o dado, al�m de uma classe. Com as altera��es, o trecho ficar� da seguinte maneira:

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
Depois, chamaremos a fun��o montaTd() na vari�vel pesoTd.

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    nomeTd.textContent = paciente.nome;

    var pesoTd = montaTd(paciente.peso, "info-peso");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)
Assim, deixaremos bem claro quais s�o as responsabilidades do nosso c�digo, separando em uma fun��o a cria��o da tag td. Para cada uma delas, chamaremos a fun��o montaTd().

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-peso");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc "info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    return pacienteTr;
}
� poss�vel adicionarmos o paciente pelo formul�rio e inspecionarmos o seu HTML. Assim, sua estrutura, incluindo as classes, est� igual � de um paciente nativo.

Limpando o formul�rio ap�s adicionar o paciente
� poss�vel "enxugar" ainda mais o nosso c�digo, adicionando o montaTd diretamente no appendChild().

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
Ap�s adicionarmos um paciente na tabela, os dados continuar�o no formul�rio.

dados do pedro adicionados na tabela

� recomend�vel limp�-los para n�o corrermos o risco de adicionarmos pacientes iguais. Poderemos limpar os campos do formul�rio chamando a fun��o reset() depois de inserirmos o paciente na tabela.

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);


    form.reset();
});
Desta forma, quando um paciente � adicionado, os dados no formul�rio ser�o apagados.

Nesta aula vimos boas pr�ticas, aprendemos que n�o � bom trabalharmos com um c�digo gigantesco em um �nico arquivo - o ideal � quebr�-lo, dividindo as responsabilidades em diferentes arquivos, simplificando a manuten��o. Se temos um problema no formul�rio, por exemplo, saberemos que devemos trabalhar com o arquivo form.js - em vez de buscarmos o erro em um arquivo de 300 linhas. Al�m disso, vimos que tamb�m � boa pr�tica separarmos as responsabilidades em fun��es, deixando o c�digo mais leg�vel. Cada linha tem uma fun��o espec�fica, independente ao restante do c�digo, que est� mais organizado e leg�vel.

Falamos tamb�m sobre os objetos do JavaScript, que possuem caracter�sticas e representam coisas do mundo real. No nosso caso, o objeto representa um paciente, mas j� hav�amos trabalhado com outros, por�m, sem denomin�-los como tal. Para criarmos um objeto, usamos as chaves ({}) e as propriedades, separando com v�rgula as diferentes caracter�sticas.

Esta aula foi sobre boas pr�ticas e refatora��o, para que voc� possa se tornar um excelente desenvolvedor. Continuaremos a seguir!

<h2>Sobre boas pr�ticas de c�digo</h2>
Pensando em boas pr�ticas de c�digo, qual das afirmativas � falsa quando falamos em quebrar uma fun��o grande em diversas fun��es menores?
R:Sabemos que quebrar uma grande fun��o complexa � uma boa pr�tica por causa de diversos fatores, mas podemos citar como os principais deles:

Dar manuten��o ao c�digo fica muito mais f�cil, visto que agora podemos examinar v�rios pequenos blocos , que s�o muito mais f�ceis de compreender do que um grande bloco de texto
Ao quebrar uma grande fun��o, tamb�m estamos deixando ela com menos responsabilidades, com a meta de atingir o ideal de que cada fun��o tenha apenas uma �nica responsabilidade.
O c�digo tamb�m fica muito mais f�cil de testar, pois se temos diversas fun��es pequenas conseguimos ir testando uma a uma em busca de erros ou bugs do c�digo.
E por �ltimo, a legibilidade do c�digo aumenta muito, pois dando nomes sem�nticos a cada uma das fun��es menores conseguimos deixar bem claro o que aquela parte do c�digo deve fazer e facilita o entendimento do todo como um geral.

-------------------------------------------------------------------------------------------
<h1>Se��o 06 - Valida��o de Formul�rios</h1>

<h2>Validando os dados do formul�rio</h2>

O �ltimo cap�tulo foi dedicado � organiza��o do nosso c�digo, principalmente da parte referente ao formul�rio, que j� est� adicionando pacientes.

Tivemos um grande trabalho para criar o c�digo de valida��o do peso, altura, por�m, quando inserimos os dados de um paciente pelo formul�rio, se preenchermos com um valor negativo no campo de "Peso", o IMC ser� calculado com um valor negativo.

imc com valor negativo

N�o gostar�amos que isso acontecesse. Da mesma forma, se adicion�ssemos um valor absurdo de altura, como 20metros, o c�lculo do IMC tamb�m ser� realizado.

imc com valor muito baixo

Atualmente as valida��es implementadas s�o feitas apenas com pacientes que j� estavam na tabela. O ideal � reaproveitar o c�digo de valida��o, para tamb�m validar os dados do formul�rio antes de adicionarmos o paciente na tabela. Caso os dados sejam inv�lidos, exibiremos uma mensagem informando qual deles cont�m um valor inapropriado.

Como trata-se de uma valida��o dos dados do formul�rio, devemos faz�-la no form.js. N�s queremos fazer a valida��o do paciente antes de adicion�-lo � tabela, caso o valor seja positivo. A seguir, criaremos a fun��o chamada validaPaciente(), que receber� como par�metro a vari�vel paciente, cujos valores estar�o preenchidos com os dados do formul�rio gra�as � fun��o obtemPacienteDoFormulario():

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}
A reutiliza��o do c�digo se mostra �til, por termos paciente montado e pronto para ser utilizado no validaPaciente(). Ela ser� respons�vel por testar as propriedade com peso e altura para identificar se os valores s�o v�lidos. Come�aremos criando um if:

function validaPaciente(paciente){
    if(paciente.altura < 3.0 && paciente.altura >= 0){
        return true;
    }
}
Criamos a condi��o de que se a altura form menor que 3 e maior ou igual a 0, o valor ser� v�lido. Por�m, esta valida��o dos dados j� foi realizada em calcula-imc.js:

var tdImc = paciente.querySelector(".info-imc");
var PesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000){
console.log("Peso inv�lido!");
pesoEhValido = false;
tdImc.textContent = "Peso inv�lido!";
paciente.classList.add("paciente-invalido");
}

if(altura <= 0 || altura >= 3.00){
console.log("Altura inv�lida!");
alturaEhValida = false;
tdImc.textContent = "Altura inv�lida!";
paciente.classList.add("paciente-invalido");
}

If(alturaEhValida && pesoEhValido){
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
}
Queremos reaproveitar esta l�gica para facilitar inclusive a manuten��o do c�digo. Para n�o corrermos o risco de rescrevermos um c�digo j� existente, extrairemos a l�gica de verifica��o dos dados para uma fun��o espec�fica, validaPeso(). Ela receber� peso como par�metro e retornar� true se o valor estiver entre 0 e 1000. Se n�o estiver, o retorno ser� false:

function validaPeso(peso){

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}
Do mesmo jeito, vamos criar a fun��o validaAltura():

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}
Em vez de inicializarmos as vari�veis pesoEhValido e alturaEhValida com true, chamaremos as fun��es de valida��o.

var pesoEhValido = validaPeso(peso);
var alturaEhValida = validaAltura(altura);
Teremos que fazer ajustes no if tamb�m. No entanto, como estamos testando se o peso n�o � v�lido, para identificar se ele � negativo, ent�o vamos utilizar o operador de nega��o (!) no calcula-imc.js. O ! ser� respons�vel por inverter os valores de positivo para negativo:

if (!pesoEhValido) {
    console.log("Peso inv�lido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inv�lido!";
    paciente.classList.add("paciente-invalido");
}
Vamos testar se o c�digo continua funcionando corretamente, alterando no HTML o valor do peso do paciente para um inv�lido, por exemplo, 10000.

tabela com o peso invalido

Em seguida, repetiremos o processo para validaAltura(), que receber� a altura e far� um teste semelhante dentro do if:

 if (!alturaEhValida) {
    console.log("Altura inv�lida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inv�lida!";
    paciente.classList.add("paciente-invalido");
}
Testando com um valor inv�lido de altura, veremos que tudo funciona corretamente. Agora, com essas duas fun��es criadas, poderemos cham�-las na fun��o validaPaciente(), em form.js. Vamos testar se o peso e a altura s�o v�lidos utilizando as fun��es que acabamos de criar. Por ora, testaremos apenas com o peso:

function validaPaciente(paciente) {
    if (validaPeso(paciente.peso)) {
        return true;
    } else {
        return false;
    }
}
O pr�ximo passo ser� adicionar a fun��o validaPaciente() no momento do clique do bot�o ap�s a montagem do paciente. Incluiremos uma condi��o, na qual vamos imprimir uma mensagem de aviso no console se o valor do validaPaciente() for negativo.

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);

    if (!validaPaciente(paciente)) {
        console.log("Paciente inv�lido");
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

});
Al�m disso, caso o paciente tenha algum valor inv�lido, queremos que ele n�o seja adicionado na tabela. Ent�o devemos sair da fun��o caso a condi��o do if seja v�lida. Ou seja, se o c�digo entrar no if, exibiremos a mensagem e retornaremos a fun��o, adicionando-se o return vazio:

var form = document.querySelector("#form-adiciona");
var paciente = obtemPacienteDoFormulario(form);
var pacienteTr = montaTr(paciente);

if (!validaPaciente(paciente)) {
    console.log("Paciente inv�lido");
    return;
}

//...
Ap�s o return sairemos da fun��o sem executar o c�digo abaixo dele, respons�vel por adicionar o paciente na tabela. Em seguida, tentaremos cadastrar um paciente com um valor de peso inv�lido. Ao clicarmos no bot�o "Adicionar", o paciente n�o ser� adicionado na tabela. Quando abrirmos o console, veremos a mensagem sobre o paciente inv�lido.

paciente invalido

Resolvemos o problema do peso, mas al�m de mostrarmos uma mensagem no console, seria interessante exibirmos uma mensagem no HTML informando para o usu�rio qual dado est� com problema. Queremos tamb�m validar a altura do paciente, o que faremos mais adiante.

<h2>Exibindo mensagens de erro</h2>
Al�m de impedirmos que um paciente com dados inv�lidos seja adicionado na tabela, queremos mostrar uma mensagem para o usu�rio informando qual problema tivemos na valida��o.

Atualmente, o c�digo da fun��o validaPaciente() do form.js est� assim:

function validaPaciente(paciente) {

    if (validaPeso(paciente.peso)) {
        return true;
    } else {
        return false;
    }
}
Em vez de retornarmos verdadeiro ou falso (true ou false), poderemos retornar uma mensagem de erro caso a valida��o seja negativa. Se o resultado for positivo, retornaremos uma string vazia:

function validaPaciente(paciente) {

    if (validaPeso(paciente.peso)) {
        return "";
    } else {
        return "Peso � inv�lido";
    }
}
No momento de chamarmos a fun��o e validarmos o paciente, extrairemos a chamada da fun��o para a vari�vel erro. Se o tamanho da string for maior que 0, significa que ocorreu algum erro.

var pacienteTr = montaTr(paciente);
var erro = validaPaciente(paciente);

if(erro.length > 0){
    return;
}
Pode-se exibir a mensagem em cima do form. Para isto, faremos ajustes no index.html, adicionando uma tag <span> com mensagem-erro.

<section class="container">
    <h2 id="titulo-form">Adicionar novo paciente</h2>
    <span id="mensagem-erro"></span>
    <form id="form-adiciona">
        <div class="">
            <label for="nome">Nome:</label>
            <input id="peso" name="peso" type="text" placeholder="digite o peso do seu paciente" class="campo campo-medio">
        </div>
//...
De volta ao form.js, se ocorrer algum erro na valida��o, selecionaremos o span que possui o id #mensagem-erro, e depois alteraremos o conte�do de texto.

var erro = validaPaciente(paciente);

if (erro.length > 0) {
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.textContent = erro;
    return;
}
Vamos fazer um experimento e tentar preencher o formul�rio com dados inv�lidos. Ap�s clicarmos no bot�o "Adicionar", ser� exibido uma mensagem acima do formul�rio.

peso eh invalido

Para deix�-la ainda mais em evid�ncia, usaremos a cor da fonte vermelha. Ao fim de index.css, adicionaremos a classe #mensagem-erro:

#mensagem-erro {
    color: red;
}
Agora, poderemos testar e ver que a mensagem est� sendo exibida corretamente.

cor da fonte em vermelho

Validando a altura
Para validarmos a altura:

function validaPaciente(paciente) {

    if (validaPeso(paciente.peso)) {
        return "";
    } else {
        return "Peso � inv�lido";
    }

    if (validaAltura(paciente.altura)) {
        return "";
    } else {
        return "Altura � inv�lida";
    }

}
A fun��o s� retornar� uma coisa de cada vez, e n�o duas strings concatenadas. Ou ela retorna que o peso � inv�lido, ou que a altura � inv�lida. Ent�o, em vez de retornarmos uma �nica string, retornaremos um array de strings.

No momento das valida��es, poderemos adicion�-la em um array, previamente criado:

function validaPaciente(paciente) {

    var erros = [];

    if(validaPeso(paciente.peso)){
        return "";
    }else{
        return "O Peso � inv�lido";
    }

    if(validaAltura(paciente.altura)){
        return ""
    }else{
        return""
    }

}
Ap�s declararmos o array de erros com [], vamos fazer altera��es na condi��o. Se o peso tiver algum problema, pegaremos o array de erros e colocaremos algo dentro, usando a fun��o push(). Faremos o mesmo para a altura. Ao final da fun��o, retornamos o array:

function validaPaciente(paciente){
    var erros = [];

    if(validaPeso(paciente.peso)){
    } else {
        erros.push("Peso � inv�lido")
    }
    if(validaAltura(paciente.altura)){
        erros.push("Altura � inv�lida!")
    }
    return erros;
}
No entanto, usaremos o operador ! para deixar o c�digo mais leg�vel. Apenas no caso do peso n�o ser v�lido, o erro.push() ser� adicionado. O mesmo ser� feito para a altura, e assim poderemos remover o else.

function validaPaciente(paciente) {

    var erros = [];

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso � inv�lido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura � inv�lida");
    }

    return erros;
}
Um detalhe � que, por estarmos trabalhando com o if simples, poderemos remover as chaves ({}) e colocar o c�digo em uma �nica linha. Ele continuar� sendo compreens�vel para o JavaScript.

function validaPaciente(paciente) {

    var erros = [];

    if (!validaPeso(paciente.peso)) erros.push("Peso � inv�lido");

    if (!validaAltura(paciente.altura)) erros.push("Altura � inv�lida");

    return erros;
}
Mostramos essa op��o para que voc� conhecesse essa possibilidade, mas deixaremos o c�digo como estava anteriormente.

function validaPaciente(paciente){

    var erros = [];

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso � inv�lido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura � inv�lida");
    }

    return erros;
}
Por�m, o c�digo estava adaptado para imprimir uma mensagem �nica. N�s gostar�amos que ele imprimisse uma lista de erros. Vamos ajustar o nome da vari�vel em form.js:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0){
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erros;
        return;
    }
Precisaremos adicionar uma string. Mas, por exemplo, se tiv�ssemos 10 erros, ter�amos que adicionar a mesma quantidade de tags <span>s? Seria mais interessante termos uma lista no HTML e, para cada erro, adicionar�amos um item nessa lista. No index.html, vamos trocar o <span> por uma tag <ul> e, dentro, adicionar v�rias <li>s:

<section class="container">
    <h2 id="titulo-form">Adicionar novo paciente</h2>
    <ul id="mensagens-erro">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
//...
A seguir, veremos como fazer isso usando o JavaScript.

<h2>Validando o restante dos campos</h2>

Se o nosso objetivo � adicionar diversas mensagens de erros, uma para cada erro que surgir para o array, teremos que acessar a fun��o do form.js e n�o apenas alterar o conte�do da <ul>. Ser� necess�rio criar uma <li> para cada erro e, depois, adicion�-la na <ul>.

Vamos analisar como est� o form.js:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0){
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erros;
        return;
    }
Como esta l�gica pode ficar complicada, iremos extrair a parte de exibi��o das mensagens de erro para a fun��o exibeMensagensDeErro(). Ela ser� respons�vel por pegar o array de erros e, para cada item, criaremos uma <li> a ser adicionada na <ul> de mensagens-erro. Observe que faremos uma pequena altera��o no id, em index.html:

<section class="container">
    <h2 id="titulo-form">Adicionar novo paciente</h2>
    <ul id="mensagens-erro">

    </ul>
No arquivo form.js, se queremos exibir a mensagem de erro, antes teremos que criar a fun��o exibeMensagensDeErro(erros), recebendo o array de mensagens de erros. Vamos adicion�-la logo acima da fun��o obtemPacienteDoFormulario():

function exibeMensagensDeErro(erros){

}
Para cada item do array, selecionaremos a ul, que ser� guardada em uma vari�vel:

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
}
E para cada item do array, adicionaremos a tag <li>. Poderemos faz�-lo de diferentes formas, como usando o for tradicional:

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    for(var i = 0; i < erros.lenght ; i++){
        var erro = erros[i];
    }
}
Al�m do for, existe outro tipo de itera��o, o forEach(), o qual n�o precisamos delimitar, e que passar� por todos os elementos. Para cada item do array, ser� realizada uma a��o.

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
<li></li>
Temos que falar que o texto da <li> ser� uma mensagem de erro, que est� dentro do array de erros. Para termos acesso ao erro, recebemos o item de itera��o dentro da function() e o textContent ser� o erro. N�s colocaremos li dentro ul, usando a fun��o appendChild().

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
A fun��o que exibe a mensagem de erro �:

var erros = validaPacientes(paciente);
console.log(erros);
if(erros.length > 0){
    exibeMensagensDeErro(erros);
    return;
}
Adicionaremos o console.log() para vermos o array de erros caso ocorra algum problema.

No index.html, verificaremos que hav�amos adicionado uma tag <ul>:

<section class="container">
    <h2 id="titulo-form">Adicionar novo paciente</h2>
    <ul id="mensagens-erro">
    </ul>
//...
Em seguida, vamos preencher o formul�rio no browser. Se ocorrer algum erro, ele ser� exibido no console. Se cadastrarmos um paciente com os dados corretos, ser� impresso um array vazio.

array vazio

Vamos testar adicionar outro paciente com dados inv�lidos, usando valores negativos.

peso e altura s�o invalidos

Ser� impresso um array com as mensagens de erro no console, al�m disso, o novo paciente n�o foi adicionado na tabela, e duas mensagens foram exibidas acima do formul�rio. Se inspecionarmos essas mensagens, veremos que a <ul> est� com mensagens-erro e duas tags <li>:

<h2 id="titulo-form">Adicionar novo paciente</h2>
<ul id="mensagens-erro">
    <li>Peso � inv�lido</li>
    <li>Altura � inv�lida!</li>
</ul>
A cor da fonte da mensagem n�o est� vermelha pois mudamos o nome do id. Vamos ajustar isso no index.css e, agora, o id da <ul> � mensagens-erro e n�o mais mensagem-erro:

#mensagens-erro {
    color: red;
}
Adicionaremos um paciente com dados inv�lidos e as mensagens ser�o exibidas para o usu�rio com a fonte vermelha.

mensagens com fonte vermelha

A verifica��o est� funcionando corretamente e o paciente n�o foi adicionado na tabela.

Nosso c�digo est� todo organizado, isolamos as responsabilidades em diferentes fun��es, tornando simples a a��o de adicionar uma nova valida��o. Atualmente, se n�o preenchermos o campo "Nome", o paciente ser� adicionado na tabela do mesmo jeito.

paciente adicionado sem nome

Como validamos o peso e a altura, vale a pena validarmos o nome. Vamos acessar a fun��o validaPaciente() e adicionar um novo if. Para verificar se um campo est� em branco, podemos analisar o seu tamanho (length), se ele for igual 0, significa que o campo n�o foi preenchido. Por exemplo, o nome do paciente:

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome n�o pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso � inv�lido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura � inv�lida");
    }

    return erros;
}
Adicionaremos a mensagem O nome n�o pode ser em branco no caso de length ser igual a 0. Faremos valida��es semelhantes nos demais campos:

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome n�o pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura n�o pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso n�o pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura n�o pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso � inv�lido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura � inv�lida");
    }

    return erros;
}
Em seguida, testaremos o envio do formul�rio com os campos todos em branco.

formul�rio com todos os campos vazios

Veremos quatro mensagens de erros, e agora n�o conseguiremos mais adicionar pacientes com algum campo n�o preenchido.

Limpando as mensagens de erro
Ao tentarmos adicionar um paciente com algum dado inv�lido, a mensagem � impressa. Depois da corre��o e dos dados serem enviados, o paciente ser� adicionado � tabela, mas a mensagem continuar� na p�gina, em ac�mulo.

N�s queremos limpar a lista de mensagens (ul), antes que as mensagens de erro sejam exibidas. Para esvaziar a ul, removeremos todo o conte�do HTML. Para isto, utilizaremos a propriedade innerHTML, que nos permite controlar o HTML interno de um elemento. Passaremos uma string vazia para a propriedade:

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
Deste modo, sempre que as mensagens de erro forem exibidas, as anteriores ser�o apagadas, de forma a validarmos o formul�rio.

Faremos um pequeno ajuste para os casos em que adicionamos um paciente na tabela. Vamos limpar a ul no form.js. Na vari�vel mensagensErro, usaremos document.querySelector(). Ap�s a adi��o, vamos limpar as mensagens:

var tabela = document.querySelector("#tabela-pacientes");

tabela.appendChild(pacienteTr);

form.reset();

var mensagensErro = document.querySelector("#mensagens-erro");
mensagensErro.innerHTML = "";

});
Agora, quando adicionamos um paciente com sucesso, as mensagens de erro s�o limpas da tela.

Vimos nessa aula como validar um formul�rio, mostramos tamb�m a import�ncia de organizarmos nosso c�digo � medida em que ele vai crescendo. Demonstramos ser �til saber trabalhar com arrays, como fizemos no caso de exibirmos mais de uma mensagem de erro. � importante conhecermos as estruturas b�sicas do JavaScript - incluindo strings e arrays - e saber quando utilizar cada uma delas. Mostramos como fazer a valida��o com uma tag <ul> em vez de <span>. N�s estamos agrupando todo o conhecimento adquirido e seguiremos melhorando nossa aplica��o!

<h2>A propriedade innerHTML</h2>
Sobre a propriedade innerHTML, qual das afirmativas abaixo est� incorreta?
R:Para editar o HTML interno de um elemento, basta passar o novo conte�do por par�metro para a propriedade.

 
N�o, innerHTML � uma propriedade, n�o uma fun��o, ent�o ela recebe o novo conte�do, ou seja, utilizamos um sinal de igual (=):

document.querySelector("#alura").innerHTML = "Novo texto"

-------------------------------------------------------------------------------------------------
<h1>Se��o 07 - Remo��o, Delega��o e Anima��o</h1>

<h2>Removendo pacientes</h2>

Agora que j� estamos validando totalmente os nossos pacientes, podemos nos concentrar em adicionar novas funcionalidades ao site da Aparecida.

Ela pode adicionar um paciente com algum dado errado, sem querer, faltando alguma letra no nome, ou algum n�mero no peso, por exemplo. O paciente passar� pela valida��o, mas com os dados incorretos. E ela n�o conseguir� edit�-lo nem remov�-lo, para adicion�-lo novamente.

Ent�o vamos implementar a op��o de remo��o de pacientes para a Aparecida. Ela pode ser feita atrav�s de um �cone, ou para ser mais simples, um duplo clique! Ao clicarmos duas vezes em um paciente, o mesmo � removido.

Escutando o evento de duplo clique nas linhas
Se queremos colocar um evento de duplo clique nas linhas, devemos escutar esse evento para cada linha da tabela, ent�o vamos faz�-lo no JavaScript.

Como estamos criando uma funcionalidade nova, em nada relacionado com o formul�rio ou com o c�lculo de IMC, vamos criar um novo arquivo na pasta js, o remover-paciente.js. � nesse arquivo que ficar� toda a l�gica de remo��o.

Antes de mais nada, vamos importar esse arquivo no index.html:

<script src="js/calcula-imc.js" ></script>
<script src="js/form.js" ></script>
<script src="js/remover-paciente.js" ></script>
Primeiramente, devemos selecionar as linhas. Todas elas possuem a classe paciente, portanto iremos selecion�-las:

var pacientes = document.querySelectorAll(".paciente");
Agora, para cada linha e paciente, faremos algo:

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {

});
E para cada paciente, adicionaremos um escutador de eventos para escutar o evento de duplo clique, o dblclick:

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {

    });
});
Agora falta sabermos como removeremos um elemento do DOM com JavaScript.

Removendo um elemento do HTML com JavaScript
A fun��o do JavaScript respons�vel por remover um elemento do HTML � a remove(). Ent�o temos que cham�-la no paciente que foi clicado.

Quem ser� clicado? O dono do evento, certo? Este � que sofrer� a a��o de duplo clique e executar� a fun��o. Para acessar o dono do evento, em que o evento est� atrelado, utilizaremos uma palavra reservada do JavaScript chamada this:

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove();
    });
});
O this � uma palavra de contexto ligada com quem acionou o evento, a quem o evento est� atrelado. Como o evento est� atrelado ao paciente, o this far� refer�ncia a ele.

Ao testarmos na p�gina, e darmos um duplo clique em um paciente nativo, o mesmo � removido! Ent�o conseguimos implementar a remo��o de um paciente de um jeito bem f�cil.

Mas nem tudo � perfeito, e essa implementa��o tem um pequeno defeito: ao adicionarmos um paciente pelo formul�rio, n�o conseguimos remov�-lo. Isso porque o novo paciente n�o estava na p�gina no momento em que o remover-paciente.js foi carregado (lembrando que o navegador abre a p�gina e vai lendo o seu HTML, carregando os nossos scripts logo depois).

Ent�o, o script seleciona somente os pacientes que j� est�o na p�gina. Ao adicionar um ou mais pacientes, eles n�o est�o escutando o evento! No momento em que um paciente for adicionado, dever�amos coloc�-lo para ouvir o evento e executar o mesmo c�digo, mas a� estar�amos duplicando c�digo, que j� sabemos n�o ser uma boa pr�tica.

Veremos a seguir um outro jeito de removermos os pacientes nativos e aqueles que forem sendo adicionados depois da p�gina ser carregada.

<h2>Um duplo clique</h2>
Qual o nome do evento que escuta um clique duplo do usu�rio em algum elemento?
R: dblclick

Diversos eventos poss�veis:
https://developer.mozilla.org/en-US/docs/Web/Events

<h2>Delegando eventos</h2>
Para resolver o problema da remo��o de pacientes, vamos nos aproveitar de uma caracter�stica do JavaScript chamada Event Bubbling, ou "borbulhamento" de eventos. Quando escutamos um evento no JavaScript, ele na verdade n�o acontece s� no dono do evento (no nosso caso, na linha do paciente), ele acontece tamb�m no pai do paciente, no pai do pai do paciente, e assim vai subindo.

Na nossa estrutura, ao darmos um duplo clique na <tr> do paciente, o pai (<tbody>) tamb�m escuta o evento, assim com a tag <table>, at� chegar no <body>.

<thead>
    <tr>
        <th>Nome</th>
        <th>Peso</th>
        <th>Altura</th>
        <th>Gordura Corporal(%)</th>
        <th>IMC</th>
    </tr>
</thead>
<tbody id="tabela-pacientes">
    <tr class="paciente" id="primeiro-paciente">
        <td class="info-nome">Paulo</td>
        <td class="info-peso">100</td>
        <td class="info-altura">-2.00</td>
        <td class="info-gordura">10</td>
        <td class="info-imc">0</td>
    </tr>
</body>
Podemos fazer uma analogia com um copo de refrigerante, j� que quando colocamos o refrigerante em um copo, suas bolhas v�o do fundo at� estourar na boca do copo. O evento seria semelhante a essa bolha.

Vamos comentar o c�digo antigo e fazer um teste, primeiramente, selecionando o <tbody>:

var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");
Iremos coloc�-lo para escutar um evento de clique, imprimindo uma mensagem no console ao ser clicado:

var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("click", function() {
    console.log("Fui clicado");
});
Ao voltarmos para a p�gina, veremos que independente do ponto onde clicarmos no corpo da tabela, o evento ser� disparado, logo a mensagem ser� exibida no console. Independentemente se colocarmos o escutador de eventos em cada paciente ou no <tbody>, ele s� precisar� saber que um evento aconteceu ali dentro. O evento subir� como a bolha de refrigerante para a superf�cie do copo. Se colocarmos um addEventListener em cada paciente ou nas tags pai, tanto faz. Basta inform�-lo de que houve um evento.

Descobrindo o elemento clicado
Para n�o termos que ficar escutando o evento a cada linha da tabela, e para as linhas adicionadas por meio do formul�rio, iremos delegar a responsabilidade de escutar os eventos para o pai de todos, no caso, a tag <tbody>. Faremos isso com addEventListenter() no remover-paciente.js:

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {

});
Dentro da fun��o, perguntamos ao pai qual filho recebeu o clique, pois � ele que ser� removido. Desta vez n�o podemos utilizar o this, j� que o dono do evento � a tabela, logo, ela acabar� sendo removida. Para descobrirmos qual filho foi clicado, utilizaremos o event como par�metro na fun��o:

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    console.log(event.target);

});
Ele ir� nos dizer quem foi clicado, quem foi o alvo, pela propriedade target. Enquanto o this se refere ao dono do evento, o event.target ser� quem sofreu propriamente o evento. O pr�ximo passo ser� remover o elemento ap�s o duplo clique:

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.remove();
});
Mas se testarmos, veremos que isso quase funciona. Ao clicarmos em algum campo da tabela, apenas o <td> clicado ser� removido. No entanto, queremos remover a linha completa, ou seja, a tag <tr>, pai do <td>.

apenas o td foi eliminado

Para selecionarmos o pai de um elemento, trabalharemos com a propriedade parentNode. A seguir selecionaremos quem foi clicado e removeremos o seu pai, uma tag <tr>:

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.remove();
});
Poderemos at� separar em vari�veis para deixar mais expl�cito:

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover 
    paiDoAlvo.remove();
});
Assim, mesmo que adicionarmos novos pacientes, no momento em que ele receber um duplo clique, o evento ir� subir at� chegar � tabela. Esta por sua vez, estar� escutando. Desta forma, o paciente ser� removido.

Quando clicamos em qualquer filho, o evento consegue chegar at� o pai (table). Essa estrat�gia � muito boa por economizarmos c�digo, deixando-o mais sucinto. E � poss�vel simplificarmos ainda mais o c�digo:

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.remove();
});
Nosso c�digo funcionar� igualmente.


<h2>Animando a remo��o do paciente</h2>
Ao removermos um paciente, a linha some instantaneamente, abruptamente. Para melhorarmos a experi�ncia do usu�rio, seria interessante que a linha fosse sumindo gradualmente, at� desaparecer totalmente da tabela.

Ent�o vamos realizar essa implementa��o, animando a remo��o do paciente!

Sabemos que, se queremos incluir um efeito visual, devemos fazer as altera��es no arquivo CSS. Em index.css, adicionaremos a classe fadeOut, que definir� a opacidade do elemento com 0, fazendo-o sumir:

.fadeOut {
    opacity: 0;
    transition: 0.5s;
}
Para que o processo ocorra de maneira gradual, adicionaremos uma transi��o de meio segundo, e incluiremos esta classe no paciente utilizando o JavaScript.

Comentaremos a linha que remove o elemento com a fun��o remove em remover-paciente.js, e depois adicionaremos a classe fadeOut ao elemento:

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");
    //event.target.parentNode.remove();
});
Vamos testar com um duplo clique no elemento e v�-lo sumindo aos poucos... No entanto, a linha continuar� na tabela.

tabela com linhas vazias

Isso ocorre porque s� estamos mexendo na parte visual do elemento, o HTML continuar� da mesma forma. Se "descomentarmos" a linha, removeremos o elemento logo em seguida � adi��o da classe:

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");
    event.target.parentNode.remove();
});
Ap�s o duplo clique em algum elemento da tabela, a linha desaparecer� instantaneamente. Por qu�?

Como o computador � muito r�pido, o browser processa as linhas do script instantaneamente. A classe � adicionada e logo em seguida o elemento � removido, por isso n�o conseguimos ver a transi��o acontecendo. Por�m, devemos remover a linha da tabela s� ap�s o t�rmino da transi��o. Devemos pedir para o JavaScript aguardar meio segundo (tempo que colocamos para a transi��o ocorrer) para remover a linha.

Quando queremos aguardar um tempo, devemos usar a fun��o setTimeout. Ser� passada como par�metro uma fun��o an�nima com quanto tempo deve ser aguardado:

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
Com a fun��o acima iremos assegurar a execu��o da fun��o passada por par�metro para ela, com o tempo de 500 milissegundos, equivalente a meio segundo.

Fazendo o teste novamente com um duplo clique em uma linha, a transi��o ocorre e, ap�s meio segundo, a linha � removida.

Espero que voc� tenha gostado dessa aula! Aprendemos sobre a delega��o, processo poss�vel pelo borbulhamento, com event bubbling. Independentemente de qual elemento clicarmos, o evento sempre vai subindo para a tag pai. Conhecemos tamb�m a propriedade do event.target, que possui o parentNode. Eles foram usados no nosso c�digo para a remo��o de um paciente na nossa tabela.

------------------------------------------------------------------------------------------------
<h1>Se��o 08 - Filtrando uma tabela</h1>

<h2>Filtrando os pacientes da tabela</h2>
Continuando com a constru��o do site da Aparecida Nutricionista, j� conseguimos implementar a adi��o e remo��o dos pacientes. Seria interessante se disponibiliz�ssemos um filtro, com o qual a busca fosse realizada usando-se algum crit�rio. Por exemplo, se quis�ssemos acessar os dados de um determinado paciente, bastaria digitarmos seu nome em um campo de pesquisa e, ent�o, apenas os dados do mesmo seriam listados. A tend�ncia de uma tabela de dados � que a lista aumente cada vez mais, e caso se queira utilizar algum tipo de filtro, queremos que ela possa fazer uma busca mais espec�fica.

Come�aremos implementando um campo de busca na tabela, adicionando uma tag <input> no index.html. Criaremos uma label com o texto Filtre:. Dentro da tag, teremos tamb�m placeholder, com o texto Digite o nome do paciente.

<section class="container">
    <h2>Meus pacientes</h2>
    <label for="filtrar-tabela">Filtre:</label>
    <input type="text" name="filtro" id="filtrar-tabela" placeholder="Digite o nome do paciente">
    <table>
        <thead>
          <tr>
             <th>Nome</th>
             <th>Peso(kg)</th>
             <th>Altura(m)</th>
             <th>Gordura Corporal(%)</th>
             <th>IMC</th>
    </tr>
</thead>
Ap�s a altera��o, ser� exibido um campo com o filtro na tela:

filtro na tela

Faremos melhorias tamb�m na parte de estilo, e adicionaremos o seguinte c�digo no index.css:

#filtrar-tabela {
    width: 200px;
    height: 35px;
    margin-bottom: 10px;
}
campo com ajustes na tabela

Acessando o conte�do digitado no campo de filtragem
Resta agora implementarmos o c�digo JavaScript que far� essa filtragem. Vamos criar o arquivo filtra.js, na pasta js. Como � um arquivo novo, vamos import�-lo em index.html:

<script src="js/calcula-imc.js" ></script>
<script src="js/form.js" ></script>
<script src="js/remover-paciente.js" ></script>
<script src="js/filtra.js" ></script>
Nosso objetivo � que conforme o nome for digitado no campo, os pacientes relacionados � busca sejam listados. Por exemplo, ao digitarmos Doug, o paciente Douglas dever� ser exibido. O conte�do de texto que est� sendo digitado no campo de busca dever� ser pego.

S� que quando queremos filtrar? Conforme o usu�rio vai digitando, a cada letra digitada. Ou seja, queremos detectar o evento de digitar, conhecido como input de dados. Toda vez que algu�m inserir dados no campo, esse evento ser� disparado.

Inicialmente, selecionaremos o campo de texto no filtra.js:

var campoFiltro = document.querySelector("#filtrar-tabela");

console.log(campoFiltro);
Testando no browser, veremos que estamos conseguindo selecion�-lo. E ao clicarmos no campo, veremos o seguinte c�digo no console:

<input type="text" name="filtro" id="filtrar-tabela" placeholder="Digite o nome do paciente">
Queremos que ao come�armos a digitar no filtro, seja iniciado o processo de filtragem, e para isto, adicionaremos um escutador de evento. Com o addEventListener() escutaremos um evento de input. Passaremos como segundo par�metro uma fun��o com a a��o a ser executada quando algu�m clicar no campo.

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log("Digitaram no campo");
});
mensagem digitaram no campo

A cada letra que inserimos, a fun��o � chamada, o value do campo � filtrado na tabela. Poderemos utilizar campoFiltro.value dentro da fun��o, no entanto, campoFiltro � o dono do evento. Utilizaremos a palavra de contexto this, referente ao pr�prio dono do evento.

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
});
Conforme o nome � digitado, podemos ir comparando com os de todos os pacientes da tabela com o querySelectAll(). Exibiremos aqueles que forem iguais, e os que forem diferentes ser�o escondidos. Vamos, ent�o, selecionar todos os pacientes:

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
});
No entanto, queremos fazer a compara��o com o nome dos pacientes, n�o com a tr. Precisaremos iterar sobre os pacientes, para ent�o acessarmos o nome de cada um:

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
    }
});
Agora, selecionaremos o paciente, e a partir dele a td com a classe info-nome. Da�, extrairemos o nome do paciente:

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
    }
});
A partir de ent�o temos acesso ao nome de todos os pacientes da tabela, e tamb�m ao conte�do de texto do campo de filtragem, s� precisaremos esconder todos os pacientes que s�o diferentes do conte�do de texto, e mostrar os que s�o iguais.

Veremos isso mais adiante.

<h2>Implementando a l�gica de filtragem</h2>
Nosso pr�ximo objetivo ser� esconder todos elementos diferentes do valor do campo de texto (this.value) e mostrar os que forem iguais. Para conseguirmos esconder e mostrar, usaremos o "truque" do fadeOut no index.css:

.fadeOut{
    opacity: 0;
    transition: 0.5s;
}
Quando quisermos deixar um paciente com fundo vermelho, adicionaremos uma classe no mesmo e, no CSS, definiremos a cor de fundo dos elementos com essa classe. Fizemos o mesmo para remover o paciente, portanto adicionaremos uma classe e, em index.css, incluiremos a classe .invisivel:

.invisivel{
    display: none;
}
Faremos o mesmo para esconder os pacientes, se (if) o nome for diferente do conte�do de texto, adicionaremos uma classe. Caso n�o seja, isto �, se o nome for igual ao que foi digitado, removemos a classe. Faremos isso no filtra.js:

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;

        if (nome != this.value) {
            paciente.classList.add("invisivel");
        } else {
            paciente.classList.remove("invisivel");
        }
    }
});
Se testarmos no browser digitando Douglas, somente este paciente ser� exibido.

filtragem do nome douglas

Por�m, ao apagarmos o que foi digitado, a tabela com todos os pacientes n�o voltam a ser exibidos. Isso porque todos os pacientes est�o com a classe invisivel, mas s� dever�amos coloc�-la quando houvesse algum conte�do digitado no campo...

Criaremos um if para que a classe invisivel seja adicionada apenas quando houver algo digitado. Veremos se h� algo digitado ou n�o por meio do seu length - se ele for 0, significa que o campo est� em branco, e se for maior que 0, significar� que h� algo digitado:

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if( this.value.length > 0){
        console.log("Tem algo digitado");
    }
Se testarmos no navegador, ao digitarmos um nome no campo de filtragem, obteremos "Tem algo digitado" no console:

mensagem tem algo digitado no console

Com algo digitado, queremos que o for seja executado:

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            if (nome != this.value) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    }
});
No caso de n�o haver nada digitado, percorreremos todos os pacientes e removeremos a classe com um segundo for:

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            if (nome != this.value){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
Em seguida, realizaremos um novo experimento com o filtro da tabela. Ao digitarmos uma letra, a lista ser� filtrada. Mas ao apagarmos a letra do campo de busca, a listagem ser� liberada.

Vamos experimentar adicionar uma paciente com um nome semelhante a outro j� existente: "Tati".

tabela filtrada com Tati

Ao pesquisarmos por este termo, apenas os dados de uma paciente ser�o exibidos. Nossa tabela est� mais funcional, e mais �til para a Aparecida. Quando ela tiver uma lista gigante, poder� escolher qual paciente quer ver listado.

<h2>Filtrando com express�o regular</h2>
Estamos com uma busca funcional, conseguimos filtrar a lista pelo nome do paciente, e quando apagamos o termo pesquisado, a lista da tabela � exibida completamente. Para tornar a nossa filtragem melhor, seria interessante que, ao digitarmos uma letra no campo de busca, todos os nomes com essa letra fossem listados. Por exemplo, ao digitarmos a letra "P", todos os pacientes que come�assem com essa letra seriam exibidos. Como "Pedro", "Paulo" e "Pablo".

letra P no campo de busca

Conforme formos digitando as letras, a filtragem seria atualizada e a busca ficaria mais interativa.

Para que isso aconte�a, � preciso compararmos letra por letra pelos termos buscados com os nomes cadastrados na lista. Seria trabalhoso fazer isso manualmente, mas o JavaScript, al�m de outras linguagens de programa��o, j� possuem uma solu��o para a busca de texto: express�es regulares.

As express�es regulares s�o um tipo especial de texto, que nos auxilia a buscarmos por strings, facilitando quando o termo for maior. Pode ser uma busca simples, como no nosso caso, em que queremos identificar quais nomes cont�m determinadas letras; ou casos complexos, se queremos pesquisar se o par�grafo cont�m a palavra "nome", por exemplo, � como quando os editores de texto buscam por uma palavra usando o comando "CTRL + F".

Criando express�es regulares no JavaScript
� bastante simples criar express�es regulares. Criaremos uma vari�vel, que no caso chamaremos expressao, e em seguida colocaremos uma express�o regular dentro dela. Vamos gerar um objeto especial do JS, adicionando new e o nome RegExp():

var expressao = new RegExp();
Com a nova linha o trecho ficar� da seguinte maneira:

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp();
            if (nome != this.value){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
N�s poderemos passar dois par�metros para o objeto, sendo o primeiro o texto que queremos buscar, no caso, o termo digitado no campo de busca (this.value), e o segundo par�metro ser� referente �s caracter�sticas dos termos que devem ser buscados. � importante que a busca n�o seja case sensitive, que � a diferencia��o entre letras mai�sculas e min�sculas. Devem ser buscadas tanto letras mai�sculas como min�sculas, e passaremos a letra "i" como segundo par�metro, para indicarmos a op��o case insensitive:

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");
            if (nome != this.value){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
Por�m, como utilizamos a express�o regular para buscar um texto espec�fico na tabela? Em vez de compararmos com o nome inteiro do paciente (como est�vamos fazendo), vamos pedir para a express�o regular verificar se um peda�o do nome do paciente possui as letras digitadas no campo de busca. Para isso, a express�o regular tem o m�todo test(), com a qual passaremos o que queremos testar:

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); 
            if (expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
Esse teste ir� retornar verdadeiro caso o nome contenha a express�o, ou falso caso n�o contenha. Como estamos testando se o nome n�o cont�m a express�o (por isso adicionaremos a classe invisivel), utilizaremos novamente o operador de nega��o (!). Logo, se o teste falhar, adicionaremos a classe; se n�o, ela ser� removida:

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); 

            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
Agora a filtragem ser� feita a cada letra, deixando a busca mais din�mica.

Vamos testar cadastrando mais um paciente com nomes que comecem com a mesma letra. Ap�s adicionarmos os dados do "Pedro" e da "Tati", testaremos digitar a letra "P".

filtragem pela letra P

Em seguida, se apagarmos os termos do campo de busca, a lista de pacientes ser� exibida completamente na tabela. Nossa busca tamb�m ser� bem sucedida se buscarmos pelo termo "Tati".

busca pela Tati

Vimos usando um pouco da l�gica da express�o regular e melhoramos nossa filtragem, que ficou mais elaborada. Se voc� se interessou pelas express�es regulares, temos um curso Express�es regulares: Capturando textos de forma m�gica na Alura, que se aprofunda no assunto.

Nesta aula, implementamos a busca! No c�digo do filtra.js, n�s utilizamos o evento de input, e com o conte�do abordado no curso, conseguimos uma l�gica interessante. Mesmo sem a express�o regular, j� hav�amos implementado uma busca bastante eficiente. Tamb�m vimos o uso do this, do value, e que o lenght nos garante o poder de realizar uma busca na tabela, percorrendo-a.

<h2>Criando uma Regex</h2>
Quais s�o os par�metros que podemos passar para o construtor new RegExp(...)?
R:O primeiro par�metro � o padr�o (o texto da express�o regular, o que deve ser buscado) e o segundo par�metro s�o uma ou mais flags (representando como queremos que a express�o regular busque).

-------------------------------------------------------------------------------------------
<h1>Se��o 09 - AjaxBuscando pacientes com AJAX</h1>

<h2>Introdu��o ao AJAX</h2>

Continuando a constru��o da p�gina da Aparecida Nutricionista, a �ltima feature que vamos desenvolver � a capacidade de integra��o do site a um sistema externo, que tamb�m cont�m pacientes e est� em outro computador. A Aparecida quer trazer esses pacientes para que eles fiquem cadastrados no mesmo sistema.

O sistema externo de pacientes pode ser acessado no navegador pelo endere�o api-pacientes.herokuapp.com/pacientes. Nele, h� uma lista de pacientes que devem ser integrados ao sistema da Aparecida.

[ 
    {  
        "nome": "J�ssica",
        "peso": 47,
        "altura": 1.54,
        "gordura": 17,
        "imc": 19.82

    },
    {
        "nome": "Flavio",
        "peso": 70,
        "altura": 1.7,
        "gordura": 17,
        "imc": 20.76
    }
//...
N�s queremos que esses pacientes sejam importados com o clique de um bot�o para a tabela do site de modo que, quando o usu�rio clicar, os dados dos pacientes ser�o pesquisados no sistema externo e depois adicionados ao site da Aparecida.

A primeira coisa que devemos fazer � adicionar o bot�o na p�gina index.html. � nele que clicaremos para buscar os pacientes externos. Adicionaremos o bot�o abaixo do fechamento da tag <table>:

<button id="adicionar-paciente" class="botao bto-principal">Buscar Paciente</

    <button id="buscar-pacientes" class="botao bto-principal">Buscar Pacientes</button>

</section>
No browser j� veremos o novo bot�o, que por enquanto ainda n�o funcionar�:

bot�o buscar paciente

Precisaremos criar uma nova feature, e para isto vamos gerar um novo arquivo JavaScript na pasta js, que receber� o nome de buscar-pacientes.js. Importaremos este novo arquivo � p�gina index.html:

<script src="js/calcula-imc.js"></script>
<script src="js/form.js"></script>
<script src="js/remover-paciente.js"></script>
<script src="js/filtra.js"></script>
<script src="js/buscar-pacientes.js"></script>
Se queremos procurar os pacientes ao clicarmos no bot�o de "Buscar Paciente", devemos selecion�-lo e atrel�-lo ao evento de click. Come�aremos adicionando a vari�vel botaoAdicionar:

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes");

});
buscando pacientes

Queremos replicar o passo que fizemos com o navegador, em que sabemos como acessar um endere�o que pode ser aberto em uma nova aba, digit�-lo e pressionar na tecla "Enter". Ou seja, o navegador � o respons�vel pela requisi��o, indo at� a URL e nos mostrando os dados. Mas como faremos isso dentro da nossa p�gina?

Veremos como fazer a requisi��o com JavaScript de modo que ela v� at� a URL, busque e retorne os dados, sem perder os que j� est�o no site da Aparecida Nutricionista. Desta forma, n�o dependeremos do navegador, e a nossa p�gina vai recarregar.

No c�digo JavaScript, devemos acessar o endere�o api-pacientes.herokuapp.com/pacientes, buscar e trazer os seus dados e coloc�-los na tabela. Esse endere�o � uma API, uma interface de programa��o que disponibiliza os dados para o usu�rio.

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");
    https://api-pacientes.keruapp.com/pacientes
});
N�o sabemos de onde v�m os dados, como e de que maneira eles foram gerados, pois eles se encontram disponibilizados e prontos para uso, sendo esta uma caracter�stica de uma API.

Ao analisarmos os dados, eles possuem uma estrutura que j� conhecemos: cada paciente fica entre chaves, dentro das quais h� itens formados por um par contendo chave e valor.

Al�m disso, todos os dados est�o armazenados entre colchetes ([]), caracter�stica de um array do JavaScript. Como os dados est�o disponibilizados em uma estrutura que conhecemos, ser� bem f�cil traz�-los para dentro do c�digo JavaScript, mas teremos que encontrar uma forma de acess�-los. Ele est� com uma nota��o bastante parecida com o JavaScript, para realizarmos a requisi��o sem o navegador, somente com a linguagem.

Para fazermos essa requisi��o, temos um objeto bastante conhecido no JS, o XMLHttpRequest:

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    console.log("Buscando pacientes...");
    var xhr = new XMLHttpRequest();
});
O XMLHttpRequest � um objeto do JS respons�vel por fazer requisi��es HTTP. O trecho XML do nome indica que ele era utilizado anteriormente para realizar o transporte de dados do tipo XML, no entanto, atualmente ele consegue trafegar outros tipos de dados, como textos.

Para que ele realize as requisi��es, devemos ensin�-lo e configur�-lo do jeito que queremos. Por exemplo, informaremos que uma requisi��o ser� feita para o seguinte endere�o: https://api-pacientes.herokuapp.com/pacientes, com alguns de seus m�todos.

O primeiro ser� open(), com o qual especificaremos o tipo de requisi��o a ser feita, no caso, GET. Tamb�m indicaremos para onde queremos faz�-la:

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
});
Essa a��o ser� equivalente a chegarmos no navegador no momento em que ainda n�o enviamos a requisi��o, apenas verificando se o endere�o est� correto, se existe e est� fazendo as configura��es da requisi��o. Para que ela seja realizada, precisaremos chamar o m�todo send():

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.send();
});
Podemos testar o nosso bot�o somente com esse c�digo! Por�m, ao clicarmos no bot�o, nada acontecer�. Por qu�? Com o c�digo atual, � como se o JavaScript estivesse abrindo uma nova aba no navegador, em que digitamos o endere�o e clicamos em "Enter". Ficou faltando a parte final, de exibi��o dos dados para o usu�rio.

Obtendo e exibindo a resposta da requisi��o
Para os dados serem exibidos, ap�s o envio da requisi��o, devemos escutar um evento espec�fico que � acionado quando a requisi��o termina e a sua resposta � carregada. Ao escutarmos o evento, carregaremos a resposta da requisi��o - que no caso, ser�o nossos dados. Esse evento � o load, caracter�stico do XMLHttpRequest:

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

    });

    xhr.send();
});
E para acessarmos os dados da resposta, usaremos a propriedade responseText do XMLHttpRequest. Para testarmos, podemos guard�-la em uma vari�vel, e depois imprimi-la no console do navegador:

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        console.log(xhr.responseText);
    });

    xhr.send();
});
Agora, o xhr.responseText ser� exibido no console:

pacientes exibidos no console

Ao clicarmos no bot�o, os dados ser�o impressos no console - n�s conseguimos trazer os dados de outro site para o "Aparecida Nutricionista"! O pr�ximo passo ser� exibi-los na nossa tabela, criando os pacientes de acordo com os dados. Faremos isso a seguir.


<h2>O Objeto requisitor</h2>
Qual dos c�digos abaixo consegue criar um objeto respons�vel por fazer uma requisi��o HTTP com Javascript?
R:O objeto XMLHttpRequest � quem � respons�vel por fazer requisi��es HTTP ass�ncronas com Javascript. Apesar de ter o XML no nome hoje em dia este objeto pode trafegar diversos outros tipos de dados al�m do XML, este nome s� se manteve devido a um legado hist�rico.

E para instanciar um novo Objeto XMLHttpRequest devemos utilizar a sintaxe com a palavrinha new :

var xhr = new XMLHttpRequest();

<h2>Configurando nossa requisi��o</h2>
Dado que criamos o objeto abaixo:

var xhr = new XMLHttpRequest();
Qual dos seguintes c�digos configura a nossa requisi��o para ser do tipo POST e para o endere�o www.xyz.com.br/compras ?
R:xhr.open("POST","www.xyz.com.br/compras");

<h2>Tratando a resposta da requisi��o</h2>

Os dados da requisi��o s�o exibidos no console, n�s s� temos que transform�-lo para um formato mais palp�vel, e depois, adicion�-los na tabela. At� o momento, as informa��es v�m no formato texto, todo concatenado. Poderemos averiguar qual o formato dos dados, adicionando a vari�vel resposta.

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var resposta = xhr.responseText;
        console.log(typeof resposta);

    });
No console, ser� retornado que o conte�do � uma string, com uma estrutura bem parecida com um array do JavaScript...

O formato de dados JSON
Os dados possuem uma estrutura parecida com o objeto do JavaScript porque eles est�o no formato JSON (sigla de JavaScript Object Notation), um formato de dados parecidos com os objetos do JavaScript que podemos transportar pela web.

A semelhan�a � tanta que podemos facilmente converter JSON (o texto da resposta da requisi��o) em objetos do JavaScript com os quais estamos mais acostumados a utilizar, como array ou mesmo uma string. Queremos que ele seja transformado em um array de objetos, mais �til para o JS.

Para conseguirmos transformar a resposta, que � um texto (uma string), em um array de pacientes, usaremos um "transformador", mais precisamente um parseador de JSON para objetos do JavaScript. Para realizarmos esta tarefa usaremos o m�todo parse(). Assim, receberemos o texto em JSON, que depois ser� parseado. Em seguida, ser� retornado um objeto JavaScript. Como nossa resposta se parece com um objeto, o m�todo entender� isso e nos retornar� um array do objetos:

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        console.log(resposta);
        console.log(typeof resposta);

        var pacientes = JSON.parse(resposta);
        console.log(pacientes);
        console.log(typeof pacientes);
    });

    xhr.send();
});
No console, veremos que j� temos um array, sendo que cada item do array � um objeto que representa o paciente, basta iterar por eles e adicionar cada um na tabela.

json transformado em array

Implementamos essa adi��o de pacientes � tabela, no arquivo form.js, por�m, o c�digo est� preso ao escutador do evento click do bot�o "Adicionar":

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {

    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});
N�s podemos reaproveitar o c�digo criando a fun��o adicionaPacienteNaTabela. Essa fun��o receber� um paciente, e depois a tag tr ser� montada. O pr�ximo passo ser� buscar a tabela e adicionar o pacienteTr nela.

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
N�s j� temos uma fun��o, em seguida iremos cham�-la acima do form.reset(), passando o paciente:

 adicionaPacienteNaTabela(paciente);

form.reset();
var mensagensErro = document.querySelector("#mensagens-erro");
mensagensErro.innerHTML = "";
A fun��o de adicionar pacientes no form.js j� fazia tudo isso antes:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});
Isto �, a fun��o j� montava um paciente, verificava os erros, e o adicionava na tabela. N�s poderemos chamar a fun��o adicionaPacienteNaTabela() - com todas as a��es mencionadas -, ou podemos aproveit�-la para adicionarmos os pacientes recebidos. No arquivo buscar-pacientes.js, adicionaremos adicionaPacienteNaTabela(), que por enquanto s� inclui um paciente. No entanto, teremos um array com v�rios deles. Logo, iremos iterar pelo array usando o forEach(), e adicionaremos cada paciente contido nele.

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var resposta = xhr.responseText;

        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    });

    xhr.send();
});
Passamos o paciente como par�metro da fun��o an�nima, o qual ser� adicionado na tabela em seguida. Como se tornaram desnecess�rios, removemos os console.log()s.

Vamos verificar se est� tudo funcionando no browser. Ao clicarmos em "Buscar Pacientes", a tabela ser� preenchida com todos os pacientes que estavam no servidor externo.

tabela com dados importados

Tudo est� funcionando como estava, incluindo a filtragem. Estamos conseguindo acessar o outro servidor, trazer os pacientes de l� e disponibiliz�-los na tabela. A t�cnica utilizada nessa aula � conhecida como AJAX, essa maneira de fazer uma requisi��o de forma ass�ncrona com JavaScript.

� uma requisi��o ass�ncrona porque n�o est� parando o fluxo do c�digo, ou seja, no momento em que a requisi��o � feita, a execu��o continua normalmente. Durante esse processo de busca de pacientes no servidor externo, � poss�vel excluir e adicionar pacientes.

Mais adiante, veremos o que acontecer� se houver algum problema na requisi��o.


<h2>Capturando erros de requisi��o</h2>

Estamos conseguindo trazer os pacientes e adicion�-los � tabela com um simples clique no bot�o. Mas sabemos que, na web, nem todas as requisi��es d�o certo.

Muitas vezes, ao acessarmos um site, podemos receber um erro 404. Por exemplo, ao acessarmos a plataforma da Alura por meio de uma URL inexistente, seremos notificados sobre o tal erro. E este n�o � o �nico erro poss�vel, tamb�m existem os erros 201, 402, 503, entre outros, que podem ocorrer ao fazermos uma requisi��o AJAX na web.

O ideal seria que em casos em que fiz�ssemos uma requisi��o com o JavaScript, fosse poss�vel detectar algum erro e avisar isso ao usu�rio.

Para testarmos se uma requisi��o falhou ou n�o, devemos verificar o seu c�digo HTTP. Por exemplo, o c�digo HTTP 404 indica que tivemos problema na requisi��o. O c�digo para uma requisi��o perfeita, que indica que deu tudo certo, � 200. Ent�o, depois que a requisi��o for carregada, poderemos testar se o c�digo � este, caso contr�rio, significa que houve algum erro.

Para sabermos qual o c�digo da requisi��o, acessaremos a propriedade status do XMLHttpRequest.

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {

        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });

    xhr.send();
});
Criaremos um if, com o qual testaremos o xhr.status e, neste caso, carregaremos os dados da p�gina. Em caso de erro, cairemos no else e exibiremos o erro no console. Mostraremos tanto o chr.status como xhr.responseText.

No browser, a requisi��o continuar� funcionando. Vamos testar o que aconteceria caso utiliz�ssemos uma URL inexistente, como https://api-pacientes.herokuapp.com/paci1111entes.

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
Com isso, o erro e a mensagem de resposta ser�o exibidos no console como gostar�amos, mas seria interessante deixar mais claro ao usu�rio que um erro ocorreu.

status 404

Ele mostra o status 404 e nos informa que a URL n�o foi encontrada. Ele imprimiu Cannot GET /paciente1111entes, ou seja, ele n�o conseguiu pegar a referida URL. Esta � uma forma para que as a��es do c�digo s� sejam executadas quando as requisi��es funcionarem, caso contr�rio, avisaremos no console, ou alertaremos o usu�rio de algum outro modo, como por exemplo, exibir uma mensagem de erro.

Para isto, adicionaremos um span acima da tag <table> no arquivo index.html:

<main>
    <section class="container">
        <h2>Meus pacientes</h2>
        <label for="filtrar-tabela">Filtre:</label>
        <input type="text" name="filtro" id="filtrar-tabela" placeholder="Digite o nome do paciente">
        <table>
            <!-- conte�do da tabela omitido -->
        </table>
        <span id="erro-ajax" class="invisivel">Erro ao buscar os pacientes</span>
        <button id="buscar-pacientes" class="botao bto-principal">Buscar Pacientes</button>
    </section>
</main>
Inclu�mos no span a classe invisivel, e por padr�o ele n�o aparecer� na p�gina. E em buscar-pacientes.js criaremos a vari�vel erro-ajax, com a qual selecionaremos o span. Em caso de erro, removeremos a classe invisivel, deixando a mensagem vis�vel para o usu�rio mesmo para aqueles que estiverem com o console fechado:

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});
Se alterarmos a URL para uma que n�o exista, a mensagem "Erro ao buscar os pacientes" � apresentada ao usu�rio.

mensagem de erro acima do bot�o

No caso da requisi��o ser bem sucedida e a requisi��o ocorrer normalmente, n�s ocultaremos a mensagem novamente, adicionando a classe invisivel e movendo a vari�vel erroAjax para cima do if:

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

xhr.addEventListener("load", function() {
    var erroAjax = document.querySelector("#erro-ajax");
    if (xhr.status == 200) {
        erroAjax.classList.add("invisivel");
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    } else {
        erroAjax.classList.remove("invisivel");
    }
});

xhr.send();
});
Ao testarmos, verificaremos que tudo ocorre conforme esperado. No caso de erro, visualizaremos a mensagem e, se ajustarmos o erro da URL, deixaremos de ver a mensagem de erro.

p�gina sem mensagem de erro

Nesta aula aprendemos o suficiente para fazermos requisi��es para outros servidores, usamos o m�todo open() para abrir a requisi��o e configurarmos o m�todo GET para o seu envio. O send() � o m�todo que efetivamente envia a requisi��o, ap�s o qual devemos escutar a resposta para sabermos quando ela retornar no responseText. Em seguida, ela ser� "parseada" com o JSON.parse, se a resposta for recebida no formato JSON - texto com "cara" de JavaScript.

Abordamos v�rios assuntos sobre a linguagem, sobre como utilizar as fun��es que j� conhecemos para fazermos uma requisi��o e como integrar dois sistemas.

<h2>O XMLHttpRequest</h2>
Sobre o XMLHttpRequest, julgue as afirmativas abaixo e selecione as verdadeiras:
1- � necess�rio configurar a requisi��o com o m�todo .open(), com o m�todo HTTP e o endere�o do servidor para qual a requisi��o ser� feita

2- � utilizado para fazer requisi��es ass�ncronas e trafegar apenas dados do tipo XML.

3- A requisi��o s� � enviada ap�s o m�todo .send().

R:O XMLHtttpRequest � objeto respons�vel por fazer requisi��es HTTP com o Javascript.

Olhando as afirmativas, sabemos sim que ele deve ser configurado anteriormente com a fun��o .open(), que ele pode trafegar diversos tipos de dados e n�o somente o XML ( ele tem esse nome gra�as a um vest�gio hist�rico), e a requisi��o s� � enviada mesmo ap�s chamarmos o m�todo .send().

<h2>Encerramento</h2>
Chegamos ao fim do curso de JavaScript: Programando na linguagem da web, no qual vimos assuntos b�sicos, desde a import�ncia do JavaScript atualmente, at� coisas avan�adas como o filtro criado para fazermos buscas na tabela. Criamos a op��o de remo��o dos elementos da tabela com evento de duplo clique, vimos como cadastrar pacientes e fazer as valida��es de suas alturas e pesos.

Abordamos diversos assuntos ao gerarmos uma p�gina e, apenas com conhecimentos apresentados no curso, � poss�vel fazer implementa��es fant�sticas, como a busca, com algumas fun��es, m�todo AJAX e a l�gica de programa��o.

Espero que voc�s tenham praticado o conte�do nos exerc�cios! Em caso de d�vida, voc�s podem recorrer ao f�rum.

Agrade�o por voc�s terem assistido o curso, tomara que tenham aprendido bastante. Desejo muito sucesso na carreira, e que continuem sempre estudando!

