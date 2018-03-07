-------------------------------------------------------------------------------------------
<h1>Seção 01 - Introdução</h1>

<h2>Por que aprender JavaScript?</h2>

Seja bem-vindo ao curso JavaScript: Programando na linguagem da web, eu sou o Douglas Quintanilha e serei seu instrutor no curso que te dará uma introdução a essa linguagem tão importante atualmente.

Você pode estar se perguntando: "por que se comenta tanto sobre JavaScript hoje em dia? Por que essa linguagem ganhou tanta popularidade, e por que eu, desenvolvedor, tenho que aprendê-la?"

Para iniciarmos nossa conversa sobre JavaScript, vale avisar que ela é a linguagem de programação nativa da Web. Qualquer navegador que você esteja utilizando, incluindo o Google Chrome, com certeza dá suporte ao JS, afinal ele é utilizado para dar dinamismo a nossas páginas. Por exemplo, quando clicamos na ferramenta de busca do site da Alura, o fato de que seja detectado o evento de clique no ícone da lupa e, em seguida, ocorra uma pequena animação para exibir a caixa de busca, é realizável com JS.

Talvez você tenha conhecimento maior sobre HTML e CSS e garanta que seja possível fazer o mesmo usando o transform, já que também podemos criar algumas animações apenas com CSS puro. Porém, certas ações como algumas validações específicas nos formulários, como aquelas realizadas nos campos de "nome" e "e-mail", não são possibilitadas unicamente com HTML. Esse tipo de dinamismo e interatividade que temos atualmente nos formulários e nas páginas Web vieram com o JavaScript.

Graças ao JS, aumentamos a usabilidade do usuário nas páginas web. Um exemplo é no fórum do GUJ: quando clicamos em alguma categoria no menu, ele filtrará os tópicos do fórum. Isso só é possível com JavaScript.

É uma linguagem bastante poderosa que permite que o usuário consiga interagir com a página. Isto já seria um excelente motivo para despertar seu interesse pela linguagem, mas além de ser dominante nos cenários dos navegadores, o JavaScript recentemente também se expandiu para o lado do servidor com o lançamento do Node.js, um ambiente que permite criarmos um servidor Web completo utilizando JavaScript. Desta forma, a linguagem ganhou grande popularidade e caiu no gosto dos desenvolvedores, tornando-se parte do coletivo imaginário de qualquer programador moderno.

O Javascript não "ganhou terreno" apenas no servidor, sendo possível programarmos um Arduíno com a biblioteca Johnny-Five, criarmos um aplicativo para Desktop utilizando o framework Electron, e até mesmo encontramos um banco de dados como o MongoDB, que utiliza a sintaxe do JavaScript em suas queries.

O JavaScript está presente em diversas áreas do desenvolvimento, ampliando as habilidades de desenvolvedor para os mais diversos ramos da tecnologia, e é claro, controlando e manipulando qualquer página Web!

Estudaremos sua sintaxe e veremos como a linguagem funciona, quais são suas nuances, a partir de um pequeno projeto para explorar o JavaScript em sua principal área de atuação, no Front-end, e na manipulação de páginas Web.


<h2>Por que estudar Javascript?</h2>

O Javascript é uma das linaguens mais importantes de nosso tempo porque:
R:é uma linguagem que, além de ser a padrão nos navegadores atuais, vem expandindo para outras áreas como servidores, banco de dados e até plataformas de Internet of Things.
O Javascript cresceu bastante e hoje em dia pode ser encontrado nas mais diversas plataformas de desenvolvimento. Dominá-la é essencial se você deseja desenvolver sites para a Web, já que ela é a linguagem que funciona em todos os navegadores e responsável por dar iteratividade e dinamismo as páginas web.


<h2>Olá Mundo com JavaScript</h2>

Para iniciarmos nosso aprendizado em JavaScript, construiremos o projeto do site Aparecida Nutrição.

O primeiro passo será baixar o projeto inicial do treinamento, disponível nos exercícios. Após descompactá-lo, acesse a pasta introducao-javascript do seu computador, e depois abra o arquivo no editor de textos. Nós vamos abri-lo também no browser, para nos familiarizarmos com o site.

tabela aparecida nutrição

A nutricionista Aparecida fazia controle dos clientes com fichas cadastrais, preenchidas manualmente, nas quais eram armazenados dados como "Nome", "Peso", Altura Corporal" e outros. Com a criação do site, ela conseguirá armazenar as informações, a serem exibidas em uma tabela, em que novos cadastros serão adicionados dinamicamente por meio do JavaScript, e poderão ser filtrados posteriormente. Ela também não precisará mais fazer cálculos manualmente, como os de IMC e da porcentagem de gordura corporal dos clientes. Todos serão realizados utilizando-se o JavaScript. Criaremos um site que realmente facilitará o trabalho da Aparecida!

Começaremos criando a função que exibirá a mensagem "Hello World", ou "Olá Mundo" no JS.

No curso, utilizaremos o editor de textos Atom, mas existem diversos outros como o Sublime Text 3 e o Visual Studio Code. Escolha de acordo com sua preferência.

Adicionaremos a funcionalidade e o dinamismo na página de pacientes, e para isto precisaremos primeiro aprender como utilizarmos o JavaScript corretamente nas páginas. Uma primeira tentativa consiste em utilizarmos as funções dentro do corpo de nossa página.

No início do arquivo index.html, logo após a tag <body>, exibiremos um alerta com JavaScript, com a função alert:

<head>
    <meta charset="UTF-8">
    <title>Aparecida Nutrição</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">
</head>
<body>
    alert("Olá mundo");

    <!-- Restante do index.html -->
</body>
Ao abrirmos a página index.html no navegador, veremos o seguinte resultado:

Navegador imprimindo alert como texto

O script está sendo exibido como texto, ou seja, o navegador não fez nenhum tratamento especial para interpretar o código. Precisaremos adicionar a tag <script>, mas o JavaScript não será carregado. Iremos então adicioná-lo dentro da tag <head>:

<head>
    <meta charset="UTF-8">
    <title>Aparecida Nutrição</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">

    <script>
        alert("Olá mundo");
    </script>

</head>
Agora, quando recarregarmos a página no navegador, nosso trecho de script será interpretado como um código, e não como um conteúdo qualquer da página.

ola mundo

O alerta com a mensagem foi exibido!

A função alert é uma das opções para se exibir mensagens com JavaScript, porém, ela não é a única. Outra função útil para isto é o console.log, considerado "mais agradável" para a exibição de uma mensagem por não envolver um pop-up. A mensagem será exibida no console do navegador.

Vamos testá-la:

<head>
    <meta charset="UTF-8">
    <title>Aparecida Nutrição</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">

    <script>
        console.log("Oi Mundo");
    </script>

</head>
No Linux ou no Windows, acessamos o console do navegador pressionando a tecla "F12"; no iOS basta pressionar "COMMAND + ALT + J". Ao abrirmos o console, veremos a mensagem como gostaríamos:

Imprimindo uma mensagem no console do navegador

Além disso, o console do navegador também aceita funções JavaScript. Poderemos escrever novamente console.log:

console.log("Aqui tem um recado para você");
Ou até mesmo um alerta:

alert("Olá");
funções no console

Com o alert e o console.log, damos os primeiros passos com o JavaScript, entendendo que para seu bom funcionamento, o código deve estar entre as tags <script>. Caso contrário, os navegadores não irão entendê-lo.

<h2>Interpretando scripts no navegador</h2>
Sabemos que o navegador entende apenas HTML e que se colocarmos scripts diretamente no corpo da mensagem ele será interpretado como texto. Como resolvemos isso?
R:Através da tag <script></script>. Tudo que estiver dentro dela será interpretado como script e não texto.
A tag <script> é responsável por nos ajudar a resolver este problema. Tudo que declaramos dentro da tag <script> é interpretado como Javascript quando o navegador passar por ali.

No caso abaixo:

<script>
alert("Olá mundo");
</script>
Quando o navegador passar pela tag abaixo ele vai interprar o texto "alert("Olá mundo");" e irá executar a função alert(), que é responsável por exibir uma pop up com a mensagem Olá mundo.



<h2>Query Selector</h2>
Agora que temos o domínio das funções iniciais do JavaScript, alert() e console.log(), usadas para exibir mensagens ao usuário, vamos começar a manipular os dados do site da Aparecida. A página deixará de ser estática e ganhará mais interatividade. O índice de massa corporal (IMC) será calculado automaticamente, e conseguiremos adicionar um novo paciente sem alterarmos o HTML. Isso dará dinamismo e deixará a página mais moderna.

Para começarmos a manipular a página, se quiséssemos alterar o título "Meus pacientes" para "Meus clientes", como isso poderia ser feito com JavaScript? Precisaríamos ter acesso ao código do arquivo HTML. Tudo o que estiver contido na tag <script> será interpretado como JS e, o que está fora, como HTML. Teremos que levar as funcionalidades criadas em HTML para o mundo JS.

Primeiramente, vamos conhecer o DOM (Document Object Model), representação do HTML para o nosso JavaScript, acessível por uma palava do JavaScript chamada document.

No console do navegador, quando digitamos document e pressionamos "ENTER" em seguida, veremos tudo o que está na página HTML. O document será a ponte entre o JavaScript e o HTML, e tudo que for alterado nele será alterado na exibição para o usuário.

Vamos experimentar adicionar o document na tag <script>, lembrando que não iremos usá-lo entre "" (aspas), pois ele funcionará como uma varíavel, e as aspas são usadas quando trabalhamos com uma string, e não é uma palavra ou frase que queremos imprimir.

<head>
    <meta charset="UTF-8">
    <title>Aparecida Nutrição</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">

    <script>
        console.log("Oi Mundo");
        console.log(document);
    </script>

</head>
Se voltarmos ao navegador e atualizarmos a página, veremos que no JavaScript teremos acesso ao document. Conseguiremos ver o seguinte código no navegador:

#document
    <!DOCTYPE html>
    <html lang="pt-br">
        <head>...</head>
        <body>...</body>
    </html>
Mas se não quisermos manipular o DOM inteiro, e sim apenas um pedaço, por exemplo, o texto dentro da tag <h2>, localizada abaixo do fechamento do <header>,

<header>
    <div class="container">
        <h1>Aparecida Nutrição</h1>
    </div>
</header>
<main>
    <section class="container">
        <h2>Meus paciente</h2>
        <table> 
            <thead>
//...
como faríamos para modificar apenas o texto "Aparecida Nutricionista", que é um pedaço do document?

Vamos encontrar uma forma de pesquisar somente a tag <h1>. Para isto, usaremos o método querySelector(), passando como parâmetro o que queremos encontrar - neste caso, entre aspas, pois queremos o termo exato. No console, iremos digitar:

document.querySelector("h1");
Após executarmos o método, ele retornará o conteúdo da tag:

document.querySelector("h1");
    <h1>Aparecida Nutrição</h1>
Assim, será selecionado o primeiro h1 da página, justamente aquele que queremos modificar. Então podemos passar este código para o navegador e imprimir o h1 no console do navegador para verificarmos se ele realmente foi selecionado, utilizando o console.log() novamente dentro da tag <script>:

<script>
    console.log(document.querySelector("h1"));
</script>
Mas ao atualizarmos a página, o retorno será null. Por que isso acontece? Se usamos o querySelector() no console, conseguimos que o h1 seja retornado, porém, isto não ocorre no código. Qual é a diferença?

O browser, ao carregar a página HTML, vai lendo linha por linha, de cima para baixo. Quando ele chega na tag <script>, ele tenta buscar um h1 na página, porém, isto não está carregado em sua memória. A tag <h1> está abaixo do código JavaScript e ainda não foi interpretado pelo navegador, logo, ele não poderá ser selecionado.

Até agora estamos escrevendo HTML e JavaScript no mesmo arquivo, o que pode se tornar confuso conforme nosso código for crescendo. Para evitarmos isso, poderemos escrevê-los em arquivos separados.

O mesmo não ocorre quando executamos o código no console do navegador, pois a página já estará totalmente carregada, e o document estará completo.

Por conta de situações como esta, é uma boa prática colocar a tag <script> no fim do HTML, mais precisamente, como último elemento de <body> após o fechamento de <main>:

<!-- ... -->
        </section>
    </main>
<script>
    console.log(document.querySelector("h1"));
</script>
</body>
Desta vez, ao recarregarmos a página, o h1 é impresso no console do navegador, sendo selecionado corretamente.

Agora que conseguimos selecionar o h1, o que é preciso fazer para alterarmos o texto? Primeiramente, em vez de imprimir, salvaremos a parte selecionada, no caso o h1, dentro da variável titulo. Para isso, usaremos a palavra var:

<!-- ... -->
        </section>
    </main>
<script>
    var titulo = document.querySelector("h1");
    console.log(titulo);
</script>
</body>
No console, a tag <h1> continuará sendo exibida.

<h1>Aparecida Nutrição</h1>
Porém, nosso real objetivo é pegar o conteúdo textual Aparecida Nutrição.

Algumas tags, como h1, h2, p e span, possuem um conteúdo de texto. Nesses casos, o JavaScript possui uma propriedade que nos permite acessá-lo: textContent. Vamos testar e imprimir o conteúdo de texto da variável titulo, que representa o h1:

<!-- ... -->
<script>
    var titulo = document.querySelector("h1");
    console.log(titulo);
    console.log(titulo.textContent);
</script>
De volta ao navegador, veremos uma diferença no que será impresso pelos dois console.log()s:

   <h1>Aparecida Nutrição</h1>
Aparecida Nutrição
Somente o texto Aparecida Nutrição será impresso no segundo console.log(). Então conseguiremos acessar e exibir o conteúdo de texto da tag. E para alterá-lo, basta usar o textContent e passar um novo valor para o titulo, igualando-o a um novo texto:

<script>
    var titulo = document.querySelector("h1");
    console.log(titulo);
    console.log(titulo.textContent);

    titulo.textContent = "Banana";
</script>


Observe que o título da página foi trocado. Se quisermos alterá-lo novamente, por exemplo, para "Aparecida Nutricionista", basta modificar a propriedade textContent.

<script>
    var titulo = document.querySelector("h1");

    titulo.textContent = "Aparecida Nutricionista";
</script>
Assim, nós alteramos o conteúdo de texto.

<h2>Boas práticas</h2>

Quando programamos com o JavaScript, é provável que estejamos trabalhando com outras pessoas, então, o que acontece se outro desenvolvedor decidir deixar de utilizar a tag < h1>, substituindo-a por h2?

<header>
    <div class="container">
        <h2>Aparecida Nutrição</h2>
    </div>
</header>
Ao abrirmos a página no navegador, será exibida a seguinte mensagem no console:

Uncaught TypeError: Cannot set property 'textContent' of null
A mensagem indica que a propriedade textContent é nula e apontará a linha na qual ocorreu o erro, no caso, na tag <script>.

<!-- ... -->
        </section>
    </main>
<script>
    var titulo = document.querySelector("h1");

    titulo.textContent = "Aparecida Nutricionista";
</script>
O h1 não foi encontrado porque ele deixou de existir na nossa página e, sendo assim, impossibilitado de ser selecionado. O problema de se buscar uma tag no DOM é que o código JavaScript fica muito atrelado ao HTML. Caso o desenvolvedor decida fazer alterações no HTML, o código deixará de funcionar. Por isso, é uma boa prática não buscarmos por uma tag HTML específica, e usar outras opções que a função querySelector() nos disponibiliza.

Além das tags HTML, o querySelector() nos permite buscar por um elemento por meio da classe, do id, ou seja, dos seletores CSS. Vamos testar esse recurso adicionando uma classe dentro do <h1>:

<header>
    <div class="container">
        <h2 class="titulo">Aparecida Nutrição</h2>
    </div>
</header>
No código JS inserido na parte de baixo do arquivo, em vez de realizarmos a busca no document.querySelector() pela tag <h1>, usaremos o seletor CSS que retornaria o conteúdo na mesma tag. Iremos utilizar o seletor CSS para classe: . (ponto).

<script>
    var titulo = document.querySelector(".titulo");
    titulo.textContent = "Aparecida Nutricionista";
</script>
Agora, serão retornados os elementos da classe .titulo, e Aparecida Nutricionista reaparece na página. Se outro desenvolvedor modificar novamente a tag h1 no código HTML, nosso código não será prejudicado e o JavaScript continuará sendo executado, pois deixamos as responsabilidades desacopladas.

Trata-se de uma boa prática separarmos o código JavaScript do HTML, no entanto, o código ainda está completo no index.html, atuando independentemente. O trecho JS está salvo na tag <script>. É interessante desacoplarmos os códigos em arquivos diferentes, com diferentes extensões, .js, .html - já temos o código CSS separado em um arquivo .css.

A seguir, criaremos o arquivo principal.js na pasta /js, com todo o código JavaScript. O próximo passo será mover o código da tag <script> para dentro desse arquivo:

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
A tag <script> continuará na página index.html, porém, ela não ficará vazia, e apontará para o arquivo JavaScript externo que criamos, por meio do atributo src (referente ao termo source). Como o arquivo principal.js está na pasta js, especificaremos o caminho completo no atributo:

<!-- ... -->
        </section>
    </main>
<script src="js/principal.js"></script>

</body>
Quando recarregarmos a página, o arquivo continuará funcionando corretamente. Vale reforçar que é recomendado deixarmos o código HTML separado do JavaScript.

Nesta aula, nós abordamos vários temas sobre a linguagem JavaScript, vimos que ela ganhou relevância por estar sendo usada de diferentes formas, no navegador, banco de dados, placas Arduíno. É importante que desenvolvedores tenham, pelo menos, um conhecimento básico de como funciona a linguagem.

Vimos algumas funções como console() e alert(), que nos permitem exibir mensagens ao usuário, e conhecemos a utilidade do console de desenvolvedor, presente nos navegadores. Podemos executar códigos JavaScript no console, com isso, conseguimos testar algumas coisas diretamente no navegador.

Vimos também como realizar a busca por algum elemento do HTML, no código JavaScript. Para isto, utilizamos a variável document, que contém todo o conteúdo HTML da página. Quando manipulamos o document, conseguimos manipular o que será exibido ao usuário. Essa manipulação foi realizada por meio da seleção de trechos da tela, feita com o querySelector(). Vimos que este método busca por nome de tags - o que pode trazer problemas -, assim como seletores de CSS.

Na aula, mostramos como criar uma variável no JavaScript e alterar um conteúdo de texto utilizando a propriedade textContent.

Aguardo você nas aulas seguintes, espero que tenha gostado da introdução do curso.

<h2>Console do desenvolvedor</h2>
Marque as alternativas abaixo que contêm características ou funcionalidades do console de desenvolvedor do navegador:
R: O console do desenvolvedor é uma ferramenta muito poderosa e versátil para o desenvolvedor Javascript. Com ele conseguimos rapidamente ser notificados de possíveis erros em nosso código, podemos executar funções, observar a saída de algumas funções e executar pequenos testes das funcionalidades do Javascript de modo rápido.

É uma boa prática sempre que estivermos testando nosso site ficar com o console aberto, para ficar monitorando possíveis erros em nosso código.

Como utilizar o console é algo bastante corriqueiro, podemos nos aproveitar dos atalhos CTRL + SHIFT + J ( Win/Linux) ou CMD + ALT + J (Mac) para ter acesso ao console de modo rápido.

<h2>Importando um arquivo externo</h2>
Qaul código abaixo importa corretamente um arquivo .js chamado contador.js que se encontra na mesma pasta de nosso arquivo HTML?
R: Sabemos que é importante fazer a separação de mundos HTML e Javascript, por isso criamos arquivos externos para guardar nosso código. Só que ao separar o Javascript em um arquivo externo, precisamos lembrar de importa-lo no HTML e para isso precisamos utilizar a tag <script> assim:

<script src="contador.js"></script>


<h2>Mensagem de boas vindas</h2>
Qual opção abaixo substitui o hasheado (XXXX) por um código que exibe uma pop up com a mensagem bem vindo?
XXXX mensagem = "Seja bem vindo ao meu site!"

XXXX(mensagem);

Queremos declarar a variável mensagem, por isso devemos utilizar a palavra var para criar esta entidade:

var mensagem = "Seja bem vindo ao meu site!"
e logo em seguida desejamos exibir uma pop-up, logo é necessário utilizar a função alert que é responsável por isso:

alert(mensagem);


<h2>Um tal de document</h2>
O que contém a variável document do JavaScript?
O document é uma variável muito importante do Javascript. Ela contém o DOM ou Document Object Model, que é como o navegador enxerga o HTML utilizado por ele para renderizar a página.

O navegador, ao ler o seu arquivo HTML, cria uma cópia em memória daquele HTML e a partir dessa cópia ele vai desenhando a sua página, colocando as tags e aplicando os estilos. Esta cópia é o que chamamos de DOM uma representação em memória do HTML do seu arquivo, que o navegador usa para desenhar a página, e a variável document é quem contêm o DOM.

Por isso, quando dizemos que com o Javascript nós estamos manipulando o DOM, estamos manipulando o que o navegador renderizou. Então ao trocar algum texto do DOM, o navegador imediatamente desenha novamente aquele texto, pois o DOM é o que o navegador usa para desenhar o seu site.

Outra caracteristica interessante, é que como manipulamos o DOM , quando trocamos um texto de um <h1> ou um estilo de um elemento, na verdade estamos alterando a representação em memória , o que faz com que o arquivo fonte que contêm seu HTML fique intacto!

<h2>Apenas um pedacinho...</h2>
Sabemos que o document contém a representação de todo o HTML da nossa página, porém na maioria dos casos estamos interessados em apenas uma parte do HTML e não em ele todo.

Qual função podemos utilizar na variável document para especificar que queremos trazer apenas uma parte do HTML ?
R:Quando desejamos pegar apenas parte do HTML, devemos utilizar a função querySelector(). A função querySelector faz a busca através de seletores CSS para trazer o HTML que você está interessado. Por exemplo, no caso abaixo:

<h1 class="titulo"> Meu primeiro site</h1>
Podemos buscar este <h1> passando o seletor CSS correto para a função querySelector. Utilizando o setor de tag, podemos buscar assim:

document.querySelector("h1");
E utilizando um seletor CSS de classe, ficaria assim:

document.querySelector(".titulo");
Neste caso, ambas as funções retornaria o h1. Ter domínio dos seletores CSS é importante se você deseja trabalhar bem com o Javascript!



----------------------------------------------------------------------------------------------------
<h1>Seção 02 - Variáveis e Operadores</h1>

<h2>Buscando dados do paciente</h2>
Vamos continuar com o projeto do site da Aparecida! Nós vimos como selecionar um elemento da página com a função querySelector(), assim como é possível alterar um texto com o textContent(). Se selecionarmos um elemento da página, obter e reescrevermos seu conteúdo textual, poderemos realizar o cálculo automático do IMC de cada paciente cadastrado e facilitar a vida da Aparecida.

Para calcularmos o IMC, trabalharemos com valores do peso e da altura de um paciente da tabela, pois o cálculo é feito desta forma:

IMC = peso / altura x altura;
Tendo os dados, precisaremos de uma forma para levá-los ao mundo do JavaScript, calcular o IMC e imprimir o resultado na devida coluna. Esta será nossa missão, vamos começar?

Extraindo o peso e a altura do paciente
Primeiramente, vamos focar no primeiro paciente, o Paulo. No index.html, observaremos os seguintes dados HTML:

<tr class="paciente">
    <td class="info-nome">Paulo</td>
    <td class="info-peso">100</td>
    <td class="info-altura">2.00</td>
    <td class="info-gordura">10</td>
    <td class="info-imc">0</td>
</tr>
Veremos que cada paciente está contido em uma linha da tabela (<tr>) e que em cada coluna (<td>) há um dado. Já sabemos como selecionar um paciente, por meio do querySelector():

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector(".paciente");
Mas todos os pacientes possuem a classe paciente. Se queremos buscar o Paulo, devemos atribuir algo mais específico, para isto, iremos definir um id para o primeiro paciente (primeiro-paciente):

<tr class="paciente" id="primeiro-paciente">
    <td class="info-nome">Paulo</td>
    <td class="info-peso">100</td>
    <td class="info-altura">2.00</td>
    <td class="info-gordura">10</td>
    <td class="info-imc">0</td>
</tr>
De volta ao arquivo JavaScript, em querySelector utilizaremos o seletor de id, a cerquilha (#, também conhecida como "tralha" ou "hashtag"):

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

console.log(paciente)
Vamos executar o console.log() da variável paciente, e esperamos conseguir executar a tag <tr>, que contém o Paulo. Faremos uma segunda busca no navegador, porém, desta vez vamos buscar em paciente, em vez de pesquisarmos no documento inteiro. O retorno será o seguinte:

<tr class="paciente" id="primeiro-paciente">
    <td class="info-nome">Paulo</td>
    <td class="info-peso">100</td>
    <td class="info-altura">2.00</td>
    <td class="info-gordura">10</td>
    <td class="info-imc">0</td>
</tr>
É retornado um <tr>, no entanto, nosso interesse é no peso e na altura do Paulo, que estão dentro de tags <td>. Mais especificamente, estamos interessados no conteúdo de texto da <td>, e se observarmos o código, veremos que elas podem realizar a busca utilizando as classes info-peso e info-altura.

Nós já usamos o querySelector() para buscar dentro do document, será que conseguimos realizá-la também dentro de paciente?

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");

console.log(paciente); // tr
console.log(tdPeso); // td que tem o peso
Aqui, buscamos em paciente um elemento que tenha a classe .info-peso, usando o seletor de classe (.). Isso vai nos retornar a **<td>** que contém este dado do paciente. Observe que este dado é salvo na variável tdPeso.

No console, veremos o seguinte resultado:

< tr class="paciente" id="primeiro-paciente">...</tr>
<td class="info-peso">100</td>
Novamente, exibe-se a linha com o <td>, e só queremos o conteúdo de texto, ou seja, o valor referente ao peso do paciente. Para termos acesso ao seu conteúdo de texto, adicionaremos o textContent no principal.js:

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;

console.log(paciente); // tr
console.log(tdPeso); // td que tem o peso
console.log(peso); //Obter 100
No console do navegador, será exibido o valor 100.

    < tr class="paciente" id="primeiro-paciente">...</tr>
    <td class="info-peso">100</td>
100
No entanto, para o cálculo do IMC, além do peso, precisaremos também da altura. Então vamos acessá-la utilizando a mesma lógica e criando a variável tdAltura logo abaixo da variável peso:

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
Fizemos uma busca com o querySelector() na variável paciente. Nosso objetivo é encontrar a td com a classe .info-altura. Também criamos a variável altura, que é o conteúdo de texto do td, e por isso utilizamos o textContent.

Para inspecionarmos se o que foi feito deu certo, adicionaremos o console.log() para imprimir o tdAltura após as variáveis recém adicionadas:

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

console.log(paciente); // tr
console.log(tdAltura); 
console.log(altura);
No console, obteremos:

<tr class="paciente" id="primeiro-paciente">...</tr>
<td class="info-altura">2.00</td>

2.00
Veremos o valor 2.00 impresso no console, e obteremos os valores do peso e da altura, então seguiremos para o cálculo do IMC, a partir da seguinte fórmula:

IMC = peso / altura x altura
Isto é, o valor da massa (peso) divido pela altura multiplicada por ela mesma.

Se a replicarmos no JavaScript utilizando os operadores matemáticos da linguagem de programação, faremos o seguinte cálculo em uma nova variável, chamada de imc:

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / altura * altura;
Removeremos o console.log(), que se tornou desnecessário no código - observe que usamos o operador * (asterisco) na multiplicação.

No caso do paciente Paulo, o resultado do IMC deveria ser:

IMC = 100 / 2.00 x 2.00
IMC = 100 / 4.00
IMC = 25
Anotaremos a lógica do cálculo com comentário.

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / altura * altura; // 100 / 2.0 x 2.0 = 100 / 4 =>>>>>>> 25

console.log(imc);
O resultado esperado para a variável imc é 25, porém, o console exibirá 100 como resultado.

Como isso é possível? Será que JavaScript não sabe fazer esta multiplicação básica?

Na verdade, a multiplicação está sendo feita, no entanto precisaremos identificar o problema no código!

<h2>Calculando e exebindo o IMC corretamente</h2>
O JavaScript sabe como multiplicar, mas não entendeu a mensagem que tentamos passar para ele! No código, o cálculo do IMC foi representado da seguinte forma:

var imc = peso / altura * altura;
Nós conseguimos entender que a altura deve ser multiplicada por ela mesma antes da divisão. Porém, esquecemos de especificar para o JavaScript o que deve ser feito, logo, o código será executado da esquerda para direita, de forma que o primeiro cálculo seja a divisão do peso pela altura.

Peso / altura 

100 / 2 = 50
O passo seguinte, foi multiplicar o resultado da divisão e multiplicá-lo pela altura.

50 x 2 = 100
Desta forma, chegamos ao resultado inesperado 100, e este não é o valor do IMC.

Em JavaScript, existem os operadores aritméticos básicos de todas as linguagens de programação: +, -, *, / e %. Temos ainda outros caracteres para nos ajudar a representar uma conta matemática, os parênteses ().

Para corrigirmos o cálculo, adicionaremos os parênteses na conta, para indicar em qual ordem as operações deverão ser executadas. De volta ao arquivo principal.js:

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);
console.log(imc);
O resultado será exibido apenas no console e, no caso, o valor do IMC será 25.

Falta atualizarmos a tabela após o cálculo do IMC. Então selecionaremos a <td> do paciente, cujo valor é 0:

<tbody id="tabela-pacientes">
    <tr class="paciente" id="primeiro-paciente">
        <td class="info-nome">Paulo</td>
        <td class="info-peso">100</td>
        <td class="info-altura">2.00</td>
        <td class="info-gordura">10</td>
        <td class="info-imc">0</td>
    </tr>
Queremos que este valor seja alterado para o resultado do cálculo:

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

// selecionando a coluna do IMC
var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);
Nós já vimos como selecionar o tdAltura, para acessarmos o IMC, e também como usarmos o querySelector(). Então basta atribuirmos o conteúdo do IMC calculado ao tdImc, adicionando textContent:

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;


var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);

tdImc.textContent = imc;
Se tudo der certo, quando executarmos o código no navegador, a página será carregada com o primeiro valor do IMC preenchido:

valor imc na tabela

O IMC do Paulo é exibido na sua coluna graças ao script JavaScript.

<h2>Variáveis e Operadores</h2>
Conseguimos calcular o IMC do paciente Paulo, mas o que acontece se alguém, no momento de digitar o código HTML, colocar um número negativo no campo de peso? Ou se incluir um número absurdo, como 10 mil quilos? Ou, sem querer, adicionar uma altura de 200?

IMC = 10000 / 2.00 x 2.00
IMC = 10000 / 4.00
IMC = 2500
O resultado será um valor impossível. Às vezes, na pressa de digitar, a pessoa pode acabar colocando um número a mais ou um sinal a menos, e dentre tantas outras informações, acaba não notando esses erros no HTML.

Valores improváveis não deveriam ser aceitos pela tabela. Como já possuímos os dados do peso e da altura no código JavaScript, é possível validar as informações. Desta forma, o IMC do paciente só será calculado se o peso e a altura forem válidos, e sempre teremos um IMC que reflita um valor real. Se o peso for muito alto ou a altura muito baixa, por exemplo, será exibida uma mensagem de aviso informando que os dados do paciente são inválidos e devem ser verificados.

Atualmente, o principal.js está assim:

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
Antes de calcularmos o IMC, poderemos validar os dados, começando pelo peso. Com um if, verificaremos se o peso é menor ou igual a 0, ou seja, negativo. Se este for o caso, uma mensagem de alerta será exibida no console. Iremos adicionar o if logo abaixo da variável tdImc:

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

if (peso <= 0) {
    console.log("Peso inválido");
}
Se colocarmos um valor inválido para o peso no index.html...

<tbody id="tabela-pacientes">
    <tr class="paciente" id="primeiro-paciente">
        <td class="info-nome">Paulo</td>
        <td class="info-peso">-100</td>
        <td class="info-altura">2.00</td>
        <td class="info-gordura">10</td>
        <td class="infor-imc">0</td>
    </tr>
Além disso, 1000 quilos também é um valor muito alto para um ser humano. Então, vamos verificá-lo também, adicionando outro if:

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

if (peso <= 0) {
    console.log("Peso inválido");
}

if (peso > 1000) {
    console.log("Peso inválido");
}

var imc = peso / (altura * altura);
tdImc.textContent = imc;
No console, será exibida a mensagem Peso inválido.

peso invalido

No entanto, imagine o que aconteceria se para cada validação de peso, fosse necessário adicionar mais um if? O código acabaria ficando imenso! Porém, é possível juntar os dois tipos de verificações em um único if, sendo que cada um deles retornará true ou false para as verificações, ou seja, um resultado booleano. Tentaremos concatenar as verificações:

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

if (peso < 0 peso > 1000) {
    console.log("Peso inválido");
}
Porém, como faremos para juntar as duas condições, sendo que o resultado deverá se enquadrar em uma ou outra condição? A palavra "ou" não existe no JavaScript, mas existe um operador lógico nas linguagens de programação que poderá ser utilizado: ||, duas barras verticais que recebem o nome de pipes:

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

if (peso < 0 || peso > 1000) {
    console.log("Peso inválido");
}
Se a primeira condição, peso < 0, for verdadeira, ou a segunda condição, peso > 1000, for verdadeira, o código no if** será executado. Ao testarmos, veremos que o funcionamento é o mesmo, sem a necessidade de criarmos um if para cada caso.

Seria interessante também verificarmos o valor de altura, considerando inválida aquela que for menor que 0 ou maior que 3:

if (altura < 0 || altura > 3.00) {
    console.log("Altura inválida");
}
Se testarmos rodar o código com um valor fora de uma das condições, a mensagem Altura inválida será exibida no console. Mas o cálculo do IMC ainda será realizado, mesmo nos casos em que trabalharmos com alturas e/ou pesos inválidos, o que não é o que queremos. Neste casos, gostaríamos que o IMC não fosse calculado.

Cálculo do IMC somente com peso e altura válidos
Para que o IMC não seja calculado quando o peso e a altura forem inválidos, poderemos criar duas variáveis, uma validação para cada caso. Vamos inicializá-las com true:

var pesoEhValido = true;
var alturaEhValida = true;

if (peso < 0 || peso > 1000) {
    console.log("Peso inválido");
}

if (altura < 0 || altura > 3.00) {
    console.log("Altura inválida!");
}
Poderemos testar inserindo um valor de altura inválido. No console, veremos a mensagem "Altura inválida!". Ou seja, estamos presumindo que ambos serão válidos. Mas caso não sejam, seus valores deverão mudar para false dentro dos ifs:

if (peso < 0 || peso > 1000){
    console.log("Peso inválido!");
    pesoEhValido = false;
}

if (altura < 0 || altura > 3.00){
    console.log("Altura inválida!");
    alturaEhValida = false;
}
Os valores das variáveis começarão como verdadeiras, mas se algo der errado, serão setadas como false. Após as alterações, o código ficará assim:

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso < 0 || peso > 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
}

if (altura < 0 || altura > 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
}

var imc = peso / (altura * altura);
tdImc.textContent = imc;
Agora, antes de calcular o IMC, faremos uma pequena verificação das duas variáveis: se a primeira (alturaEhValida) for verdadeira E a segunda (pesoEhValido) também, o IMC será calculado.

Para verificarmos se uma condição E outra são verdadeiras, utilizaremos o operador lógico representado por dois & (&&):

var pesoEhValido = true;
var alturaEhValida = true;

if (peso < 0 || peso > 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
}

if (altura < 0 || altura > 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
}

if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
Ao testarmos, iremos verificar se o peso ou a altura são inválidos e, neste caso, o IMC não será calculado. Na tela, veremos impresso o valor 0 na coluna da tabela.

IMC igual a 0

Os usuários geralmente não ficam com o console do navegador aberto, então criaremos uma mensagem mais visível para eles. Na hora de verificar o peso e a altura, se algum deles for inválido, deixaremos uma mensagem mais significativa alterando-se o textContent:

if (peso < 0 || peso > 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura < 0 || altura > 3.00){
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
}

if (alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
peso invalido

Observe que alteramos o textContent para "Peso inválido" e "Altura inválida". Se colocarmos um peso ou uma altura inválidos no HTML e testar novamente a nossa página, a mensagem aparecerá conforme o esperado.

mensagem de imc invalido

É possível refazermos o teste alterando o valor da altura no index.html:

<tbody id="tabela-pacientes">
    <tr class="paciente" id="primeiro-paciente">
        <td class="info-nome">Paulo</td>
        <td class="info-peso">-100</td>
        <td class="info-altura">4.00</td>
        <td class="info-gordura">10</td>
        <td class="infor-imc">0</td>
    </tr>
Quando colocamos uma altura de 4.00, na tabela será exibida a mensagem de Altura Inválida!.

mensagem de altura invalida

Há uma pequena falha nas nossas condições se o peso for igual a 1000. O IMC continuará sendo calculado. Faremos um ajuste no if para que isso ocorra, agora a condição será de >=:

//...

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.00){
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
}

if (alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
Tomamos o mesmo cuidado com os valores de peso. Observe que como não queremos que o valor 0 seja considerado válido para altura e peso, iremos alterar a condição para <=. Detectamos mais um erro que poderia ocorrer no código!

Com esta última validação, chegamos ao fim da aula. Vimos vários assuntos, como as lógicas com o if e sobre como calcular o IMC adicionando os parênteses. Mostramos o uso adequado dos operadores matemáticos e o operador lógico de OU (||), utilizado no if. Vimos também o &&, usado com o significado de E na condição.

-----------------------------------------------------------------------------
<h1>Seção 03 - Arrays, Loop e Estilos</h1>

<h2>Replicando a validação e o cálculo do IMC para todos os pacientes</h2>

Conseguimos realizar a validação do primeiro paciente, calculando o IMC e verificando se a altura e o peso são válidos. A seguir, replicaremos esse código de validação e cálculo do IMC para os demais pacientes da tabela, como no trecho abaixo:

<tbody id="tabela-pacientes">
    <tr class="paciente" id="primeiro-paciente">
        <td class="info-nome">Paulo</td>
        <td class="info-peso">1000</td>
        <td class="info-altura">2.00</td>
        <td class="info-gordura">10</td>
        <td class="info-imc">0</td>
     </tr>
//...
O código responsável por calcular o IMC do paciente e as validações dos dados é, praticamente, todo o arquivo principal.js. Então, bastaria copiarmos esse código, modificar a classe primeiro-paciente e os nomes das variáveis, que já validaríamos outro paciente.

var paciente2 = document.querySelector("#segundo-paciente");

var tdPeso2 = paciente.querySelector(".info-peso");
var peso2 = tdPeso.textContent;

var tdAltura2 = paciente.querySelector(".info-peso");
var altura2 = tdAltura.textContent;
No entanto, a repetição de código não é uma boa prática de programação, o ideal é sempre reaproveitar o trabalho já pronto. No caso, poderíamos fazer um loop - conhecido na lógica de programação -, para conseguirmos iterar por cada linha da tabela, ou seja, por cada paciente. Desta forma, selecionaremos os dados de cada um deles e calcularemos os IMCs.

Então, se quisermos iterar por todos os pacientes, devemos selecioná-los - e não somente um deles, como estamos fazendo atualmente. Se analisarmos o código da tabela no index.html, veremos que todos os pacientes possuem a classe paciente:

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
        <td class="info-nome">João</td>
        <td class="info-peso">80</td>
        <td class="info-altura">1.72</td>
        <td class="info-gordura">40</td>
        <td class="info-imc">0</td>
    </tr>
<!-- ... -->
Logo, em vez de buscarmos pelo id primeiro-paciente, vamos buscar pela classe paciente. Testaremos isso:

var pacientes = document.querySelector(".paciente");
console.log(pacientes);
Apesar de termos selecionado por classe, só nos foi retornado o primeiro paciente, a primeira linha com a classe paciente. Isso porque a função querySelector() nos retorna apenas um elemento, independentemente do que passarmos para a mesma. Se estivermos interessados em buscar vários elementos com a classe .pacientes, devemos utilizar querySelectorAll():

var pacientes = document.querySelectorAll(".paciente");
console.log(paciente);
Essa função nos retorna um array no console, com todos os elementos que possuem a classe paciente.

[tr#primeiro-paciente.paciente, tr.paciente, tr.paciente, tr.paciente, tr.paciente]
Ao abrirmos o array, veremos todos os pacientes:

NodeList[5]
    0: tr#primeiro-paciente.paciente
    1: tr.paciente
    2: tr.paciente
    3: tr.paciente
    4: tr.paciente
    length: 5
Veremos impresso também a propriedade length que nos informa que temos 5 elementos.

Iterando sobre os pacientes
Agora que temos todos os pacientes da tabela, devemos iterar por eles, e para cada um deles executaremos o código responsável por calcular o IMC e validar o peso e a altura.

Há várias formas de fazermos isso, e uma delas, bastante conhecida por todo mundo que já viu algo de lógica de programação é o loop for. Ele receberá três argumentos: a declaração da variável inicial, até onde queremos que essa variável cresça, e o que queremos fazer no fim de cada iteração. Por exemplo:

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < 5; i++) {

}
Mas não queremos percorrer um número fixo, e sim percorrer a lista de pacientes. Todo array possui uma propriedade chamada length, que nos informa o seu tamanho. Então vamos usá-la para percorrer até o tamanho da lista de pacientes:

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    console.log()

}
Deste modo, evitaremos trabalhar com um tamanho fixo de elementos.

Cada elemento do array tem um índice, que começa da posição 0, o qual representará o primeiro paciente, o 1 será o segundo, e assim por diante. Para acessarmos o paciente do array, basta passarmos o índice entre colchetes para o mesmo. Esse índice será a variável i, que percorrerá do valor 0 até a última posição do array de pacientes menos 1:

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i]);
}
Feito isso, temos acesso ao pacientes[i], e bastará movermos o código que calcula o IMC e faz a validação para dentro do for. Além disso, faremos um ajuste para não precisarmos alterar todo o código. Usaremos um pequeno "truque", criando a variável paciente, que será um atalho para pacientes[i]:

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
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
    }

  if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc;
    }
}
De volta ao browser, veremos que conseguimos calcular o IMC de todos os pacientes!

imcs calculados

Limitando as casas decimais de um número
Alguns dos IMCs possuem diversas casas decimais, tornando o número imenso. Podemos melhorar isso utilizando uma função que limita esta quantidade. Essa função é toFixed(), que recebe como parâmetro a quantidade de casas decimais a serem exibidas depois do ponto.

Vamos utilizá-la no momento em que o IMC é impresso na célula:

if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
}
Agora a visualização dos IMCs ficou um pouco melhor, sem tantos números nas casas decimais.

imc com toFixed

Vimos um loop simples, bastante utilizado na lógica de programação. Com o for, conseguimos validar o IMC e fazer os cálculos para todos os pacientes. Se os dados de algum paciente estiverem incorretos, um aviso será exibido na célula relacionada da tabela.

<h2>Estilos com JavaScript</h2>

Faremos ajustes para deixar os nossos erros mais identificáveis. Por enquanto, temos somente cinco pacientes, e para identificar um deles cujo valor de peso ou altura seja inválido, vamos procurar pela mensagem exibida na última coluna. Imagine se a tabela tiver 50 ou 100 pacientes cadastrados? Será preciso ficar scrollando a página e procurar pelas mensagens!

Por isso, deixaremos uma marcação visual para a nutricionista, indicando as linhas com erros. Faremos com que a linha com peso ou altura inválido exiba um fundo vermelho.

Vamos acessar o arquivo principal.js e analisar o trecho em que realizamos as validações:

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
}
Para alterarmos a cor do fundo, selecionaremos a linha (cada tag tr) - o que já fizemos anteriormente e será representada pela variável paciente. Nosso objetivo é modificar o estilo do elemento, portanto utilizaremos a propriedade style, com os estilos aplicados. Ou seja, vamos alterar o CSS aplicado. Se adicionarmos style.color, poderíamos alterar a cor da fonte na linha.

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.style.color = "red";
}
Quando atualizarmos a página veremos que a cor da fonte foi alterada.

cor da fonte está vermelha

Assim, por conseguirmos alterar a cor da fonte usando a propriedade color, poderemos modificar o fundo da linha ao adicionarmos a propriedade backgroundColor. Porém, se tentarmos escrever da mesma forma como é feito no CSS (background-color), nosso código não funcionará. Quando queremos modificar um estilo com duas palavras, o hífen (-) não é aceito pela linguagem JavaScript. Teremos que utilizar o padrão Camel Case - no qual as palavras compostas ou frases são iniciadas com maiúsculas e unidas sem espaços.

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.style.backgroundColor = "red";
}
Sempre que houver um erro, ele ficará em evidência na tabela.

linha com o fundo vermelho

Vamos alterar a cor para um tom mais claro: lightcoral.

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    paciente.style.backgroundColor = "lightcoral";
}
linha com o fundo coral

Em seguida, vamos usar a propriedade style para sinalizar o problema na altura.

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    paciente.style.backgroundColor = "lightcoral";
}
duas linhas com dados invalidos

Sempre que ocorre um erro, ele ficará fácil de ser identificado na tabela. Conseguiremos fazer a linha ficar com o fundo vermelho quando algum dado for inválido.

No entanto, imagine a situação em que o designer decide que a cor de fundo não será mais vermelha, e sim laranja. Devemos nos lembrar de modificá-la nas duas verificações.

O local correto para definirmos o estilo da página é no arquivo CSS. Novamente, é importante separarmos esses ajuste do arquivo HTML.

É importante mantermos essa separação dos "mundos": o HTML é utilizado para marcar os elementos, o JavaScript para adicionar dinamismo e manipular a página, enquanto o CSS é responsável por estilizar. Logo, o ideal não é modificar o estilo da linha no código JavaScript, então qual é o meio termo entre não modificar o estilo diretamente, mas conseguir alterá-lo, no JavaScript?

É uma boa prática, em vez de adicionarmos um estilo, incluirmos uma classe ao elemento. Então criaremos uma nova classe em index.css com dados do paciente inválido. A classe paciente-invalido irá indicar com quais cores trabalharemos nestes casos:

.paciente-invalido {
    background-color: lightcoral;
}
De volta ao JavaScript, assim como temos o style** para acesso aos estilos e o textContent para acessarmos o conteúdo de texto de um elemento, teremos a classList para acessarmos as classes. E usando o método add, adicionaremos a classe desejada, no caso, paciente-invalido:

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
}
Se o designer quiser modificar a cor de fundo, deverá modificá-la no CSS e não mais no JavaScript. Inspecionando-se uma linha cujo fundo possui alteração de cor, verificaremos no console que a classe paciente-invalido foi adicionada.

O próximo passo será incluir classList.add("paciente-invalido") também na validação da altura:

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
}
Agora, sempre que for necessária uma alteração na parte visual da página, elas serão feitas no arquivo index.css. Caso queiramos que o fundo da linha com o dado inválido fique com a cor azul, por exemplo, devemos alterar a classe .paciente-invalido no código CSS.

.paciente-invalido{
    background-color: blue;
}
linhas com o fundo azul

Não precisaremos localizar todos os pontos onde escrevemos lightcoral no código. Evitaremos o risco de esquecermos a alteração em algum trecho. Ao adicionarmos uma classe no CSS, nosso código fica organizado.

Vamos deixar a cor do fundo da linha com o erro como estava:

.paciente-invalido{
    background-color: lightcoral;
}
Encerramos mais uma aula do curso de JavaScript, no qual apresentamos como fazer o cálculo do IMC para todos os pacientes da tabela, em vez de um. Mostramos como selecionar vários elementos do HTML simultaneamente, usando a função querySelectorAll(). Com ela podemos trazer uma lista de objetos selecionados contendo a classe .paciente. Depois, percorremos essa lista com o laço for. Trabalhamos também com a propriedade length, que nos retorna o tamanho do array, além de aprendermos como acessar uma posição especifica do array utilizando o [].

Por fim, conseguimos calcular o IMC dos pacientes e arredondamos os resultados com valores decimais, fazendo uso do método toFixed(). E manipulamos o estilo de um objeto no JS, por meio da propriedade style - que não deve ser utilizada com frequência. Na aula, explicamos a importância de não misturarmos os "mundos" de linguagens diferentes, no caso, quando queremos alterar o visual da página, devemos manipular as classes do arquivo CSS. A nova classe será adicionada com classList.add() no JavaScript. Este tipo de ajuste é uma boa prática que deve ser adotada por facilitar a manutenção do código.

Como selecionar diversos elementos com a função querySelectorAll()
Relembramos um método clássico de iteração com o for
Vimos como manipular estilos com a propriedade .style
Vimos que devemos utilizar camelCase quando queremos modificar uma propriedade que tenha duas palavras, como a background-color
A boa prática de não alterar o estilo diretamente no Javascript e sim modificar as classes dos elementos com a propriedade .classList
-----------------------------------------------------------------------------------------------------------
<h1>Seção 04 - Eventos, Formulários e Criando Elementos</h1>

<h2>Escutando eventos</h2>
Nossa tabela faz o cálculo do IMC de todos pacientes com os dois tipos de validações, inclusive sinalizando visualmente quando uma linha tem problemas, e assim facilitaremos a vida da Aparecida em relação ao cadastro de pacientes.

Atualmente, para adicionar um novo paciente, ela deve acessar o arquivo index.html e incluir uma nova <tr> na tabela, juntamente com as tags <td>, e modificar os dados da pessoa. Depois disso, uma nova linha surgirá na tabela.

Ou seja, o HTML é alterado manualmente, o que não é prático. Seria muito simples se em vez de adicionarmos o paciente diretamente no HTML, houvesse um formulário no site, o qual ela pudesse preencher com os dados do paciente. E, após clicar-se no botão "Adicionar", o paciente seria adicionado à tabela. É exatamente isso que iremos implementar.

Como esse é um curso focado em JavaScript, disponibilizaremos o formulário pronto, basta adicioná-lo abaixo do fechamento da tag <main>, e antes de <script>:

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
O formulário possui os campos de preenchimento dos seguintes dados: "nome", "peso", "altura" e "% de gordura":

Formulário de adição de paciente

Quando a Aparecida preencher esses campos e clicar no botão "Adicionar", uma nova linha na tabela deverá ser criada, com a exibição dos dados recém adicionados através do formulário. Mas para fazê-lo, primeiramente devemos entender algumas funcionalidades do JavaScript.

Como faremos para detectar o exato momento em que o usuário clicará no botão e, então, executar uma ação?

A ação de "perceber o que o usuário está fazendo na página" é o que chamamos de evento do browser, que pode ser escutado com o JavaScript. Ações como clicar, duplo clique, scrollar, passar o mouse em cima, são exemplos dos tipos de interação que o usuário pode fazer com a página.

Para escutarmos um evento de clique, devemos especificar em qual elemento queremos fazê-lo. Se queremos identificar o momento do clique do botão, usaremos a variável titulo seguida de um "escutador de evento" que escutará as interações dos usuários, addEventListener(). Ela será responsável por adicionar o escutador de evento, como já diz o nome traduzido para o português. Em que tipo de evento estamos interessados? No caso, justamente no evento de click. Queremos que algo aconteça quando o usuário clicar no elemento. Indicaremos o que deve ser feito usando-se a função mostraMensagem(). Dentro dela, adicionaremos console.log("Olá, eu fui clicado!").

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
    console.log("Olá eu fui clicado!");
}
Observe que na variável titulo, chamamos a função mostraMensagem() ao passá-la como segundo parâmetro do addEventListener().

Em seguida, vamos atualizar a página do browser e verificar se as alterações estão funcionando. Clicaremos no título "Aparecida Nutricionista", que é o conteúdo da tag <h1>, e para cada clique a mensagem será exibida no console.

mensagem eu fui clicada é exibida

Nós conseguimos adicionar o escutador de eventos no título da página. Quando ele percebe que o usuário interagiu a partir de um clique, ele chama a função mostraMensagem(). Desta forma, atrelamos o evento com um determinado trecho de código HTML.

Uma outra abordagem que poderíamos adotar seria usarmos uma função anônima. Em vez de declararmos mostraMensagem como um parâmetro addEventListener(), poderíamos chamar diretamente function():

titulo.addEventListener("click", function (){
    console.log("Olha só posso chamar uma função anônima.")
});
Observe que a função ainda possui as chaves ({}), mas não recebe um nome. Funções anônimas são bastante utilizadas, principalmente no caso de eventos. Além disso, chamamos uma função quando interagimos com um evento de clique, que só existirá quando o botão for clicado.

Resumindo, podemos trabalhar tanto com uma função nomeada, como a mostraMensagem(), ou uma função anônima, que será criada como segundo parâmetro da addEventListener(). Por enquanto, vamos praticar utilizando uma função anônima.

Porém, não queremos adicionar um evento de clique quando clicamos no título, e sim após o clique do usuário no botão "Adicionar" do formulário. A única ação que realizaremos a principio será exibir uma mensagem no console.

Teremos que selecionar o botão no JavaScript! No fim do trecho do código referente ao formulário, encontraremos a tag <button>, acima do fechamento de <form> em index.html:

<!-- ... -->
    <div class="grupo">
        <label for="gordura">% de Gordura</label>
        <input for="gordura" name="gordura" type="text" placehoder="digite a porcentagem de gordura do seu paciente" class="campo campo-medio">
    </div>

    <button id="adicionar-paciente" class="botao bto-principal">Adicionar</a>
</form>
Em seguida, vamos adicionar o botão no arquivo principal.js. Abaixo do último if de validação dos dados, criaremos a variável botaoAdicionar, e o botão será levado pela função document, usaremos o querySelector() para buscar no HTML e, nos parênteses da função incluiremos o seletor #adicionar-paciente:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
console.log(botaoAdicionar)
Adicionaremos o console.log() para verificarmos se o código está funcionando. No browser, a mensagem será exibida se atualizarmos a página, indicando que conseguimos pegar o botão como gostaríamos.

tag button no console

Nós também queremos escutar um evento de clique do botão, por isso, adicionaremos novamente addEventListener().

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    console.log("Oi, cliquei no botão.");
});
No entanto, se tentarmos clicar no botão "Adicionar" do formulário, a mensagem não será exibida no console. Por que isso acontece?

Por padrão, sempre que clicamos em um botão contido em uma tag <form> do HTML, os seus dados serão enviados para outra página. Como não especificamos uma página para ser o alvo da tag <form>, a única ação realizada é a limpeza dos dados, e a página sendo recarregada em seguida. Ao fazermos isto, além do formulário, o console fica limpo também - por isso, não veremos a mensagem.

O evento de clique está sendo escutado corretamente, porém, como a página é recarregada rapidamente, não conseguiremos ver a mensagem impressa no console. Desta forma, não conseguiremos salvar os dados do paciente na tabela, nem exibir a mensagem.

O que devemos fazer para que a página não seja recarregada e tenha o comportamento esperado?

<h2>O botão que falhou</h2>
Maria está ansiosa para descobrir a razão do seu código não ter funcionado. É um código simples, que exibe um alerta quando um botão é clicado:

<button id="botao">clique-me</button>
<script>

    var botao = document.querySelector('#botao');

    function botaoHandler() {

        alert('Botão clicado');
    }

    botao.addEventListener('click', botaoHandler());
</script>
Medite sobre o código de Maria e tente descobrir o problema. Assim que tiver chegado a uma conclusão, clique em "Ver Opinião do Instrutor" para ver a resposta do instrutor.

VER OPINIÃO DO INSTRUTOR
Opinião do Instrutor

O problema está nessa linha:

botao.addEventListener('click', botaoHandler());
Em vez de associar a função botaoHandler para o evento click, ela acabou associando o retorno da função, ao adiciona-la usando parênteses. Como a função não retorna nada, o código que será executado será igual a nada quando o botão for clicado. Para corrigirmos o código, basta retiramos os parênteses:

botao.addEventListener('click', botaoHandler);
Veja que não estamos mais chamando a função, mas passando-a por inteiro para o evento click . Quando o botão for clicado, por debaixo dos panos, o navegador executará botaoHandler() para nós.

<h2>Evitando o comportamento padrão de um evento</h2>
O comportamento padrão do botão que se encontra no formulário é limpar os dados preenchidos nos campos, recarregar a página e enviar os dados. Nós queremos evitar esse comportamento padrão.

Para isso, devemos chamar uma função característica dos eventos, que faz com que o evento não faça seu comportamento padrão. Desta forma, ele não executará este comportamento e reagirá conforme o que pedimos no evento, no caso, a exibição de uma mensagem. Implementaremos a função event.preventDefault():

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
});
Essa função faz exatamente o que seu nome diz, prevenindo o comportamento padrão do evento. Mas para utilizá-la, receberemos como segundo parâmetro a função anônima, o event:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Oi eu sou o botao e fui clicado");
});
Em seguida, testaremos novamente a página, preenchendo o formulário e clicando no botão "Adicionar". Podemos reparar em duas coisas: a página não foi recarregada e o formulário não foi limpo. Além disso, conseguimos ver a mensagem no console.

mensagem de botão clicado foi exibido no console

A função event.preventDefault() conseguiu evitar o comportamento padrão do formulário.

Conseguimos detectar o evento de clique no botão (e no título), em seguida, implementaremos o que queremos de fato: adicionar os dados do paciente na tabela. Veremos como fazer isso com JavaScript mais adiante!

<h2>Adicionando pacientes na tabela</h2>
Para adicionarmos o paciente na tabela, devemos capturar seus dados do formulário. Para isto, sabemos que devemos trazê-los do mundo HTML para o do JavaScript, selecionando-os.

Vamos adicionar um id ao formulário:

<form id="form-adiciona">
    <!-- restante do formulário omitido -->
</form>
Agora conseguimos selecioná-lo no mundo JavaScript:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
});
Através do formulário, temos acesso aos seus inputs, acessando através da sua propriedade name. É possível vermos no HTML que todos os inputs possuem uma propriedade name, bastando utilizá-lo para termos acesso ao input:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome;

});
Mas não estamos interessados no campo em si, no input, e sim no seu valor. Para acessar o valor de um campo em JavaScript, utilizaremos a propriedade value:

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
Com isso, conseguimos trazer os dados do formulário do HTML para o JavaScript, e adicionar o paciente na tabela.

Criando um elemento HTML com JavaScript
Com os dados em mãos, como vamos fazer para "criar" um paciente? Até agora vimos como trazer algo do mundo HTML para o mundo JavaScript, mas agora é o contrário: temos os dados no mundo JavaScript e queremos criar uma nova linha na tabela com eles, que é no mundo HTML. Ou seja, queremos criar um elemento HTML utilizando JavaScript.

Para isso, vamos utilizar a função createElement, que como o próprio nome indica, cria um elemento HTML. Poderemos olhar o HTML da tabela e ver que se queremos criar um novo paciente, devemos criar uma nova tr, que por sua vez possui várias tds, cada uma com o seu dado.

Logo, se queremos criar um paciente, vamos criar uma nova tr. Para criarmos um elemento, precisaremos informar onde queremos criar, isto é, em document:

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
Só que criamos seis elementos distintos, seria como se tivéssemos criado um HTML assim:

<tr></tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
Sabemos que temos que colocar os dados dentro das tds, e depois pegá-las e colocá-las na tr. Vamos por passos, primeiro colocando os dados dentro das tds, que já sabemos como é feito.

Lembra quando alteramos o conteúdo de texto do título? Utilizamos a propriedade textContent, passando para ela o novo dado. Pois aqui é a mesma coisa, vamos alterar o conteúdo de texto das tds, passando os seus respectivos valores, capturados do formulário:

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
Agora devemos adicionar cada td dentro da tr. No JavaScript existe uma função chamada appendChild. Ela adiciona como filho o elemento passado a ela como parâmetro. Logo, vamos chamar essa função na tr, passando a td como parâmetro, uma por uma:

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
Agora já temos algo mais próximo do que é um paciente, e falta colocarmos ele dentro da tabela. Para isto, vamos selecionar a tabela, o tbody do HTML através do seu id, e utilizar a função appendChild para adicionar a tr como sua filha:

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
Agora, no momento em que preenchemos os dados do formulário e clicamos em Adicionar, o paciente é adicionado à tabela!

Ainda não estamos calculando o IMC, mas faremos isso no próximo capítulo, vendo como construir um código bem organizado.

<h2>De declaração de função para função anônima</h2>

Aprendemos a declarar funções, inclusive aprendemos a associá-las à eventos como no exemplo abaixo:
<code>
<button id="botao">clique-me</button>
<script>

    var botao = document.querySelector('#botao');

    function botaoHandler() {

        alert('Botão clicado');
    }

    botao.addEventListener('click', botaoHandler);
</script>
</code>
Por ser uma declaração de função, podemos utilizar a mesma função para outros eventos do sistema. No entanto, quando não faz muito sentido reaproveitar a função em outros lugares podemos declará-la na forma anônima. Qual das opções abaixo possui o código anterior modificado para trabalhar com funções anônimas?
var botao = document.querySelector('#botao');

botao.addEventListener('click', function() {

    alert('Botão clicado');

});

<h2>Para saber mais: event shortcut</h2>
Vejamos o seguinte exemplo de código:

<button id="botao">clique-me</button>
<script>

    var botao = document.querySelector('#botao');

    function botaoHandler() {

        alert('Botão clicado');
    }

    botao.addEventListener('click', botaoHandler);
</script>
Nele associamos uma função ao evento click, aquele disparado toda vez que o elemento for clicado, em nosso caso, um botão. A vantagem do addEventListener é que podemos executar mais de uma função para o mesmo evento. Vejamos:

<button id="botao">clique-me</button>
<script>

    var botao = document.querySelector('#botao');

    function botaoHandler() {

        alert('Botão clicado');
    }

     function outroHandler() {

        alert('Botão clicado também!');
    }


    botao.addEventListener('click', botaoHandler);
    botao.addEventListener('click', outroHandler);
</script>
Nesse caso, temos uma fila de eventos, na qual o primeiro adicionado na fila será executado e o segundo em seguida. No entanto, quando desejamos executar apenas uma única função por evento, podemos escrever o código da seguinte forma usando um event shortcut:

<button id="botao">clique-me</button>
<script>

    var botao = document.querySelector('#botao');

    function botaoHandler() {

        alert('Botão clicado');
    }

     function outroHandler() {

        alert('Botão clicado também!');
    }


    botao.onclick = botaoHandler;
</script>
Para cada evento existente no JavaScript, há a propriedade on + nomeDoEvent. No caso, temos onclick para o evento click, onmouseover para o evento mouseover e assim por diante. Nesse caso, a função que desejamos executar é atribuída direto na propriedade. No entanto, essa forma tem uma limitação, como estamos guardando a função em uma propriedade, se adicionarmos outra função, essa sobrescreverá a anterior. Vejamos:

<button id="botao">clique-me</button>
<script>

    var botao = document.querySelector('#botao');

    function botaoHandler() {

        alert('Botão clicado');
    }

     function outroHandler() {

        alert('Botão clicado também!');
    }


    botao.onclick = botaoHandler;
    botao.onclick = outroHandler; // substitui botaoHandler
</script>
Sendo assim, a boa prática é trabalhar com addEventListener() mesmo que você só queira adicionar um único evento. Porque mais tarde, se outro desenvolvedor quiser adicionar outro evento para o mesmo elemento, não corremos o risco de substituir a função já associada por outra.


------------------------------------------------------------------------------------------------------------------
<h1>Seção 05 - Boas Práticas com Javascript</h1>

<h2>Quebrando o código em arquivos diferentes</h2>

Nossa aplicação JavaScript começou a crescer bastante, nós conseguimos calcular o IMC dos pacientes da tabela, além de ser possível adicionarmos um novo cadastro após preenchermos um formulário. Ficou faltando calcular o IMC dos novos pacientes cadastrados!

À medida em que formos adicionando mais funcionalidades, o arquivo JS cresceu - mesmo que com apenas duas. Com isso, vai se tornando mais difícil sua manutenção. O nosso código está funcional, porém não muito organizado. O código está agrupado em um grande arquivo com muitas responsabilidades e isso dificulta a adição de novas funcionalidades. Imagine se formos calcular o IMC do paciente recém adicionado...

Teremos que aumentar ainda mais o código; uma boa prática para quem está começando a desenvolver é sempre organizá-lo, dividindo o código por funcionalidades. Uma maneira de fazê-lo é criar novos arquivos JS e separar o trecho responsável pelo cálculo IMC do código relacionado ao <form>.

O próximo passo será criar o arquivo form.js na pasta js. Ele será responsável por cuidar de todos os arquivos que tenham a ver com o formulário. Moveremos para lá todo o trecho responsável por adicionar um paciente na tabela. A seguir, moveremos o código:

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
Agora os arquivos ficaram menores e simplificamos a manutenção do código.

Para deixar os arquivos mais semânticos e organizados, vamos alterar o nome do arquivo principal.js, e deixar claro qual a sua responsabilidade. No caso, iremos renomeá-lo como calcula-imc.js.

Em seguida, no index.html, vamos alterar o src da tag <script>, abaixo do fechamento da tag <section>:

<script src="js/calcula-imc.js" ></script>
<script src="js/form.js" ></script>
Separamos os arquivos, deixando cada uma com uma funcionalidade, e o código ficará melhor organizado. Mais adiante, continuaremos fazendo outras melhorias na aplicação.

<h2>Agulha no palheiro!</h2>
Leopoldo se vangloriava do seu arsenal de funções criadas por ele para resolver problemas do dia a dia. Todas elas eram declaradas no arquivo minhas-funcoes.js.

Você enxerga desvantagens em declarar todas as funções em um arquivo? Há alguma vantagem? Pense a respeito e em seguida veja a opinião do instrutor.
A vantagem de declararmos todas as funções em um único arquivo é favorecer sua importação em nossas páginas, pois se fossem vários arquivos precisaríamos importar um a um.

Uma desvantagem dessa abordagem é que fica mais complicado de um desenvolvedor trabalhar com o mesmo arquivo ao mesmo tempo. Se o desenvolvedor A precisa alterar a função X e o desenvolvedor B a função Y o risco do trabalho ser perdido quando o arquivo for atualizado é grande. Mesmo com ferramentas de versionamento de código o desenvolvedor terá que resolver conflitos que são bastantes comuns nessa abordagem.

Outro ponto é o seguinte. Se das 100 funções declaradas no arquivo apenas um necessitar manutenção, caso o desenvolvedor cometa algum erro de sintaxe, isso comprometerá todas as funções, pois nada será mais carregado. Sendo assim, as chances de introduzir problemas quando for resolver um são bem maiores.

Quando temos arquivos separados, cada arquivo possui uma responsabilidade e uma ou mais funções que fazem sentido naquela responsabilidade. Por exemplo, podemos ter um arquivo chamado conversao.js e nele termos funções que convertem valores monetários com R$ para números, e números para o formato com R$. Além disso, se separamos outras funcionalidades por arquivo, quando alterarmos esses arquivos, se cometermos algum erro, apenas uma ou mais funções do arquivo serão comprometidas e o restante dos outros arquivos poderão ser carregados sem problema (a não ser que um arquivo dependa do outro).

Por fim, assim como na vida real separamos meias de cuecas/calcinhas e de camisas para nos auxiliar na busca, separar arquivos por grupos comuns também nos ajuda a encontrar e dar manutenção em nosso código.

<h2>Criando funções</h2>
Outra boa prática que poderemos implementar no código é separar os blocos de código em blocos menores, em funções. Mostramos como um bloco grande de código é responsável por fazer muitas coisas.

No arquivo calcula-imc.js, temos um for responsável por pegar os dados dos pacientes, fazer a validação do peso e da altura e, depois, calcular o IMC e inserir os dados na tabela. Ou seja, temos três funcionalidades dentro do mesmo bloco.

Essas funcionalidades, como o cálculo do IMC, são necessárias em outros pontos do nosso código no form.js. Quando estamos adicionando um paciente na tabela por meio do formulário, atualmente, a linha fica sem o resultado do cálculo do IMC.

Ou seja, precisaremos calcular o IMC também no form.js, não só no código que atualmente está preso no calcula-imc.js. Queremos reaproveitar o código, e isto será possível se chamarmos uma função que calcule o IMC em form.js. A função calculaImc() receberá peso e altura como parâmetros:

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calculaImc(peso, altura);
A função também poderá ser chamada em calcula-imc.js, reaproveitando assim a lógica de cálculo do IMC. Vamos criá-la em seguida, e ela já retornará o IMC com duas casas decimais:

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc;
}
Depois, vamos chamá-la também dentro da validação do pesoe altura que antecede a função calculaImc():

if ( alturaEhValida && pesoEhValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc.toFixed(2);
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc;
}
No browser, veremos que o cálculo será realizado e o resultado será exibido na tabela.

calculo do imc será exibido

Mas faremos um pequeno ajuste no código: em vez de passarmos toFixed() em if, iremos movê-lo para o retorno da função calculaImc(). Com as alterações, o nosso código fica assim:

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
A vantagem de termos uma função separada é que conseguimos executar o calculaImc() no arquivo form.js:

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calculaImc(peso,altura);
Pode-se afirmar que o conteúdo de texto do imcTd será o retorno da função calculaImc(). Neste caso, também teremos peso, altura, e queremos calcular o IMC. Em seguida, a variável pacienteTr também receberá o imcTd quando formos adicioná-la na tr.

pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);
Agora, ao adicionarmos um paciente na tabela pelo formulário, uma nova linha será inserida, com o valor do IMC calculado e exibido na tabela. Para exemplificar, vamos experimentar cadastrar os dados do paciente Alvaro.

Com isto, conseguiremos extrair a responsabilidade de se calcular o IMC, que estava presa no calcula-imc.js, fazendo o reuso desse código. Logo, é uma boa prática extrairmos um código que queremos reusar em outros locais, para funções externas.

linha com dados do Alvaro

Nós conseguimos reutilizar o código para se calcular o IMC e, após movermos a função, separamos a responsabilidade de se fazer este cálculo. Uma boa prática de programação é extrairmos ações que queremos reutilizar - como o cálculo do IMC - para funções externas. Fica mais essa dica de melhorias do código!

<h2>Criando um objeto paciente</h2>

Continuando com as melhorias e refatorações do nosso código e aplicando-se boas práticas, seria interessante quebrarmos o código do form.js em funções menores, considerando que atualmente temos uma função com várias responsabilidades, como capturar os valores do formulário, criar a tr e as tds do paciente, colocar os valores nas linhas, e por último colocar as tds na tr, e por fim a tr na tabela. Isto é, há quatro funcionalidades em uma mesma função, o que dificulta a manutenção do código.

Imagine outro desenvolvedor tendo que interpretar o bloco de código gigante, ele terá dificuldade para entender qual a sua utilidade, pois isto não está explícito. O ideal é quebrarmos o código em várias funções menores, o que, além de deixá-lo mais organizado, faz com que as responsabilidades sejam separadas, cada função com uma diferente. Vamos comentar o que cada trecho faz:

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //Extraindo informacoes do paciente do form
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
Mais abaixo teremos o trecho responsável por criar as tags tr e td:

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
Em seguida, temos o trecho responsável por adicionar o paciente.

//adicionando o paciente na tabela.
var tabela = document.querySelector("#tabela-pacientes";

tabela.appendChild(pacienteTr);
Temos pelo menos três funções que trabalharão com tarefas menores.

Função para capturar os dados do formulário
A primeira coisa que podemos fazer é extrair a responsabilidade de capturar os dados do paciente do formulário para uma nova função que receberá o nome obtemPacienteDoFormulario(). Ela receberá o formulário por parâmetro e extrairá os dados dele:

var form = document.querySelector("#form-adiciona");
// Extraindo informacoes do paciente do form
obtemPacienteDoFormulario(form)
Criaremos a função obtemPacienteDoFormulario(), para onde iremos mover as variáveis nome, peso, altura e gordura.

function obtemPacienteDoFormulario(form) {
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
}
Esse código está pegando todos os valores e extraindo para variáveis. O nome, peso, altura e gordura são características do paciente. Logo, eles pertencem ao mesmo paciente e poderiam ser representados pela mesma coisa. Quando falamos em representar um paciente, falamos de objetos. Nas linguagens de programação, objetos representam coisas do mundo real, ou mesmo da programação.

Ao criarmos um paciente, sabemos que ele deve ter um nome, peso, altura e gordura. Então, agruparemos todas as características em uma mesma variável criando um objeto em JavaScript usando chaves ({}):

function obtemPacienteDoFormulario(form) {

    var paciente = {

    }

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
}
Dentro das chaves, passamos as propriedades do objeto, que nada mais são que as suas características. Para criar uma propriedade, passamos o seu nome e o seu valor, mas não com um igual e sim com dois pontos. Por exemplo, a propriedade nome:

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }
    return paciente
}
Assim, atribuímos às propriedades os valores extraídos do formulário e, no fim, a função retornará o objeto paciente.

Na parte de cima do arquivo, vamos declarar a variável paciente.

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    console.log(paciente);
Em seguida, testaremos preencher o formulário no browser, após clicarmos no botão "Adicionar", veremos os dados quebrados na ultima linha. No entanto, o objeto será impresso no console.

objeto impresso no console

O objeto paciente representa as propriedades do paciente. Se imprimirmos paciente.nome, paciente.gordura, poderemos acessar cada um dos dados individualmente.

nome e gordura no console

Esta maneira de representar uma variável que contém várias características já foi utilizada anteriormente. Quando selecionamos um elemento com o querySelector(), ele também nos devolverá um objeto, como no trecho abaixo do calcula-imc.js:

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
No exemplo, o elemento possui a propriedade textContent e value. Esse trecho do HTML é representado por um objeto. No caso da função obtemPacienteDoFormulario() do form.js, nós criamos as características do paciente.

Vamos continuar com o código adicionando outra característica: o imc. Seu valor será a função criada anteriormente calculaImc() e passaremos o peso e a gordura do formulário como parâmetros:

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.altura.value, form.peso.value)
    }
}
Por fim, a função retornará o objeto que contém todos os dados do paciente, incluindo o imc:

imc exibido no console

Conseguimos representar o paciente adicionado por meio de um objeto e este se encontra disponível no começo do arquivo. Enxugamos as responsabilidades, e podemos continuar com esse processo de melhorias com o restante da função!

Utilizamos objetos no Javascript como na maioria das linguagens de programação orientadas , aonde os objetos podemos compará-los com objetos da vida real. Um objeto é uma entidade independente, com propriedades e tipos. Compare-o com uma xícara, por exemplo. Uma xícara é um objeto, com propriedades. Uma xícara tem uma cor, uma forma, peso, um material de composição, etc. Da mesma forma, objetos em JavaScript podem ter propriedades, que definem suas características.

Para declaramos um objeto, utilizamos a sintaxe com {}, exemplo:

var xicara = {};
Só que de nada nos serve um objeto vazio, então podemos dar características a este objeto através de suas propriedades:

var xicara = {
    cor: "azul",
    peso: 125,
    tipo: "chá"
};
As propriedades de um objeto são separadas por um : do seu valor e utilizamos uma vírgula ao final de cada propriedade para separá-la da próxima. Podemos acessar as propriedades de um objeto Javascript como abaixo:

xicara.cor // azul
xicara.peso // 125
xicara.tipo // chá
xicara.modelo // undefined, este objeto não possui a propriedade modelo
Ou seja, nosso exemplo estava errado por que estava utilizando o sinal de = em vez do de : para separar as propriedades de seus valores.

<h2>Melhorando ainda mais o código</h2>
Outra responsabilidade a ser extraída é a criação da tr e das tds do paciente. Atualmente o trecho do código do form.js está assim:

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
Na parte de baixo do arquivo, criaremos a função montaTr, que receberá um paciente como parâmetro e, como o próprio nome indica, montará a tr com os dados:

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");

    return pacienteTr;
}
Em seguida, devemos preenchê-la com as tds do paciente. Se movermos o código referente aos dados do paciente para dentro da função, ela ficaria mais legível:

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
As tags td serão criadas, e então preenchidas com paciente.nome, paciente.peso, paciente.altura, paciente.gordura e já não precisaremos calcular o IMC, pois o cálculo foi feito em paciente.imc.

Por fim, chamaremos a função montaTr quando o botão for clicado. A função ficará dentro da variável pacienteTr:

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
Ao preenchermos os dados do formulário, veremos que eles continuarão sendo adicionados à tabela com o código mais legível.

Adicionando classes aos elementos
Ao inspecionarmos o HTML da nossa tabela, veremos que os pacientes adicionados por meio do formulário não possuem algumas características dos pacientes nativos. A tr do paciente nativo possui a classe paciente, assim como as tds - cada uma com uma classe indicando a informação contida na td. Já os pacientes que adicionamos com o formulário não possuem classes - tanto na tr quanto nas tds. Ou seja, não estamos criando um paciente exatamente igual ao paciente nativo.

Vamos alterar o código da função montaTr para criar um paciente com as classes corretas. Já sabemos como adicionar uma classe a um elemento, a seguir, adicionaremos a classe paciente na tr. Para isso, usaremos o método add():

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
Se testarmos no navegador, veremos que a tr será criada com a classe. Porém, falta adicionarmos as classes nas tds, por exemplo, info-nome e info-peso:

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    nomeTd.textContent = paciente.nome;
Temos que fazer esse código para todas as tds, criar o elemento, incluir a classe e o valor. Observe que por termos separado as funções, já sabemos onde fazer as alterações.

Função para criar e montar uma td
Quando identificamos códigos repetidos, temos a opção de exportá-los para uma função, que será responsável por eles. A função montaTd criará a td e adicionará a classe juntamente com o dado. Como a classe e o dado variam de acordo com a td, iremos recebê-los por parâmetro na função:

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add("info-nome");
    td.textContent = paciente.nome;

    return td;
}
Agora basta chamar essa função em montaTr:

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add("info-nome");
    td.textContent = paciente.nome;

    var nomeTd = document.createElement("td");
    nomeTd.classList.add("info-nome");
    nomeTd.textContent = paciente.nome;
//...
Porém, teríamos que ter diversas linhas de código fazendo a mesma tarefa. O código repetidamente criaria a td, adicionaria uma classe e depois o dado. Será que existe alguma forma de simplificarmos esse trabalho? Sim, podemos criar diretamente uma função que monta as tags td: montaTd().

function montaTd(dado){
    var td = document.createElement("td");
    td.textContent
}
No td criado, deve ser adicionado como o conteúdo de texto o dado, além de uma classe. Com as alterações, o trecho ficará da seguinte maneira:

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
Depois, chamaremos a função montaTd() na variável pesoTd.

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
Assim, deixaremos bem claro quais são as responsabilidades do nosso código, separando em uma função a criação da tag td. Para cada uma delas, chamaremos a função montaTd().

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
É possível adicionarmos o paciente pelo formulário e inspecionarmos o seu HTML. Assim, sua estrutura, incluindo as classes, está igual à de um paciente nativo.

Limpando o formulário após adicionar o paciente
É possível "enxugar" ainda mais o nosso código, adicionando o montaTd diretamente no appendChild().

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
Após adicionarmos um paciente na tabela, os dados continuarão no formulário.

dados do pedro adicionados na tabela

É recomendável limpá-los para não corrermos o risco de adicionarmos pacientes iguais. Poderemos limpar os campos do formulário chamando a função reset() depois de inserirmos o paciente na tabela.

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
Desta forma, quando um paciente é adicionado, os dados no formulário serão apagados.

Nesta aula vimos boas práticas, aprendemos que não é bom trabalharmos com um código gigantesco em um único arquivo - o ideal é quebrá-lo, dividindo as responsabilidades em diferentes arquivos, simplificando a manutenção. Se temos um problema no formulário, por exemplo, saberemos que devemos trabalhar com o arquivo form.js - em vez de buscarmos o erro em um arquivo de 300 linhas. Além disso, vimos que também é boa prática separarmos as responsabilidades em funções, deixando o código mais legível. Cada linha tem uma função específica, independente ao restante do código, que está mais organizado e legível.

Falamos também sobre os objetos do JavaScript, que possuem características e representam coisas do mundo real. No nosso caso, o objeto representa um paciente, mas já havíamos trabalhado com outros, porém, sem denominá-los como tal. Para criarmos um objeto, usamos as chaves ({}) e as propriedades, separando com vírgula as diferentes características.

Esta aula foi sobre boas práticas e refatoração, para que você possa se tornar um excelente desenvolvedor. Continuaremos a seguir!

<h2>Sobre boas práticas de código</h2>
Pensando em boas práticas de código, qual das afirmativas é falsa quando falamos em quebrar uma função grande em diversas funções menores?
R:Sabemos que quebrar uma grande função complexa é uma boa prática por causa de diversos fatores, mas podemos citar como os principais deles:

Dar manutenção ao código fica muito mais fácil, visto que agora podemos examinar vários pequenos blocos , que são muito mais fáceis de compreender do que um grande bloco de texto
Ao quebrar uma grande função, também estamos deixando ela com menos responsabilidades, com a meta de atingir o ideal de que cada função tenha apenas uma única responsabilidade.
O código também fica muito mais fácil de testar, pois se temos diversas funções pequenas conseguimos ir testando uma a uma em busca de erros ou bugs do código.
E por último, a legibilidade do código aumenta muito, pois dando nomes semânticos a cada uma das funções menores conseguimos deixar bem claro o que aquela parte do código deve fazer e facilita o entendimento do todo como um geral.

-------------------------------------------------------------------------------------------
<h1>Seção 06 - Validação de Formulários</h1>

<h2>Validando os dados do formulário</h2>

O último capítulo foi dedicado à organização do nosso código, principalmente da parte referente ao formulário, que já está adicionando pacientes.

Tivemos um grande trabalho para criar o código de validação do peso, altura, porém, quando inserimos os dados de um paciente pelo formulário, se preenchermos com um valor negativo no campo de "Peso", o IMC será calculado com um valor negativo.

imc com valor negativo

Não gostaríamos que isso acontecesse. Da mesma forma, se adicionássemos um valor absurdo de altura, como 20metros, o cálculo do IMC também será realizado.

imc com valor muito baixo

Atualmente as validações implementadas são feitas apenas com pacientes que já estavam na tabela. O ideal é reaproveitar o código de validação, para também validar os dados do formulário antes de adicionarmos o paciente na tabela. Caso os dados sejam inválidos, exibiremos uma mensagem informando qual deles contém um valor inapropriado.

Como trata-se de uma validação dos dados do formulário, devemos fazê-la no form.js. Nós queremos fazer a validação do paciente antes de adicioná-lo à tabela, caso o valor seja positivo. A seguir, criaremos a função chamada validaPaciente(), que receberá como parâmetro a variável paciente, cujos valores estarão preenchidos com os dados do formulário graças à função obtemPacienteDoFormulario():

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
A reutilização do código se mostra útil, por termos paciente montado e pronto para ser utilizado no validaPaciente(). Ela será responsável por testar as propriedade com peso e altura para identificar se os valores são válidos. Começaremos criando um if:

function validaPaciente(paciente){
    if(paciente.altura < 3.0 && paciente.altura >= 0){
        return true;
    }
}
Criamos a condição de que se a altura form menor que 3 e maior ou igual a 0, o valor será válido. Porém, esta validação dos dados já foi realizada em calcula-imc.js:

var tdImc = paciente.querySelector(".info-imc");
var PesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000){
console.log("Peso inválido!");
pesoEhValido = false;
tdImc.textContent = "Peso inválido!";
paciente.classList.add("paciente-invalido");
}

if(altura <= 0 || altura >= 3.00){
console.log("Altura inválida!");
alturaEhValida = false;
tdImc.textContent = "Altura inválida!";
paciente.classList.add("paciente-invalido");
}

If(alturaEhValida && pesoEhValido){
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
}
Queremos reaproveitar esta lógica para facilitar inclusive a manutenção do código. Para não corrermos o risco de rescrevermos um código já existente, extrairemos a lógica de verificação dos dados para uma função específica, validaPeso(). Ela receberá peso como parâmetro e retornará true se o valor estiver entre 0 e 1000. Se não estiver, o retorno será false:

function validaPeso(peso){

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}
Do mesmo jeito, vamos criar a função validaAltura():

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}
Em vez de inicializarmos as variáveis pesoEhValido e alturaEhValida com true, chamaremos as funções de validação.

var pesoEhValido = validaPeso(peso);
var alturaEhValida = validaAltura(altura);
Teremos que fazer ajustes no if também. No entanto, como estamos testando se o peso não é válido, para identificar se ele é negativo, então vamos utilizar o operador de negação (!) no calcula-imc.js. O ! será responsável por inverter os valores de positivo para negativo:

if (!pesoEhValido) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
}
Vamos testar se o código continua funcionando corretamente, alterando no HTML o valor do peso do paciente para um inválido, por exemplo, 10000.

tabela com o peso invalido

Em seguida, repetiremos o processo para validaAltura(), que receberá a altura e fará um teste semelhante dentro do if:

 if (!alturaEhValida) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
}
Testando com um valor inválido de altura, veremos que tudo funciona corretamente. Agora, com essas duas funções criadas, poderemos chamá-las na função validaPaciente(), em form.js. Vamos testar se o peso e a altura são válidos utilizando as funções que acabamos de criar. Por ora, testaremos apenas com o peso:

function validaPaciente(paciente) {
    if (validaPeso(paciente.peso)) {
        return true;
    } else {
        return false;
    }
}
O próximo passo será adicionar a função validaPaciente() no momento do clique do botão após a montagem do paciente. Incluiremos uma condição, na qual vamos imprimir uma mensagem de aviso no console se o valor do validaPaciente() for negativo.

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);

    if (!validaPaciente(paciente)) {
        console.log("Paciente inválido");
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

});
Além disso, caso o paciente tenha algum valor inválido, queremos que ele não seja adicionado na tabela. Então devemos sair da função caso a condição do if seja válida. Ou seja, se o código entrar no if, exibiremos a mensagem e retornaremos a função, adicionando-se o return vazio:

var form = document.querySelector("#form-adiciona");
var paciente = obtemPacienteDoFormulario(form);
var pacienteTr = montaTr(paciente);

if (!validaPaciente(paciente)) {
    console.log("Paciente inválido");
    return;
}

//...
Após o return sairemos da função sem executar o código abaixo dele, responsável por adicionar o paciente na tabela. Em seguida, tentaremos cadastrar um paciente com um valor de peso inválido. Ao clicarmos no botão "Adicionar", o paciente não será adicionado na tabela. Quando abrirmos o console, veremos a mensagem sobre o paciente inválido.

paciente invalido

Resolvemos o problema do peso, mas além de mostrarmos uma mensagem no console, seria interessante exibirmos uma mensagem no HTML informando para o usuário qual dado está com problema. Queremos também validar a altura do paciente, o que faremos mais adiante.

<h2>Exibindo mensagens de erro</h2>
Além de impedirmos que um paciente com dados inválidos seja adicionado na tabela, queremos mostrar uma mensagem para o usuário informando qual problema tivemos na validação.

Atualmente, o código da função validaPaciente() do form.js está assim:

function validaPaciente(paciente) {

    if (validaPeso(paciente.peso)) {
        return true;
    } else {
        return false;
    }
}
Em vez de retornarmos verdadeiro ou falso (true ou false), poderemos retornar uma mensagem de erro caso a validação seja negativa. Se o resultado for positivo, retornaremos uma string vazia:

function validaPaciente(paciente) {

    if (validaPeso(paciente.peso)) {
        return "";
    } else {
        return "Peso é inválido";
    }
}
No momento de chamarmos a função e validarmos o paciente, extrairemos a chamada da função para a variável erro. Se o tamanho da string for maior que 0, significa que ocorreu algum erro.

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
De volta ao form.js, se ocorrer algum erro na validação, selecionaremos o span que possui o id #mensagem-erro, e depois alteraremos o conteúdo de texto.

var erro = validaPaciente(paciente);

if (erro.length > 0) {
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.textContent = erro;
    return;
}
Vamos fazer um experimento e tentar preencher o formulário com dados inválidos. Após clicarmos no botão "Adicionar", será exibido uma mensagem acima do formulário.

peso eh invalido

Para deixá-la ainda mais em evidência, usaremos a cor da fonte vermelha. Ao fim de index.css, adicionaremos a classe #mensagem-erro:

#mensagem-erro {
    color: red;
}
Agora, poderemos testar e ver que a mensagem está sendo exibida corretamente.

cor da fonte em vermelho

Validando a altura
Para validarmos a altura:

function validaPaciente(paciente) {

    if (validaPeso(paciente.peso)) {
        return "";
    } else {
        return "Peso é inválido";
    }

    if (validaAltura(paciente.altura)) {
        return "";
    } else {
        return "Altura é inválida";
    }

}
A função só retornará uma coisa de cada vez, e não duas strings concatenadas. Ou ela retorna que o peso é inválido, ou que a altura é inválida. Então, em vez de retornarmos uma única string, retornaremos um array de strings.

No momento das validações, poderemos adicioná-la em um array, previamente criado:

function validaPaciente(paciente) {

    var erros = [];

    if(validaPeso(paciente.peso)){
        return "";
    }else{
        return "O Peso é inválido";
    }

    if(validaAltura(paciente.altura)){
        return ""
    }else{
        return""
    }

}
Após declararmos o array de erros com [], vamos fazer alterações na condição. Se o peso tiver algum problema, pegaremos o array de erros e colocaremos algo dentro, usando a função push(). Faremos o mesmo para a altura. Ao final da função, retornamos o array:

function validaPaciente(paciente){
    var erros = [];

    if(validaPeso(paciente.peso)){
    } else {
        erros.push("Peso é inválido")
    }
    if(validaAltura(paciente.altura)){
        erros.push("Altura é inválida!")
    }
    return erros;
}
No entanto, usaremos o operador ! para deixar o código mais legível. Apenas no caso do peso não ser válido, o erro.push() será adicionado. O mesmo será feito para a altura, e assim poderemos remover o else.

function validaPaciente(paciente) {

    var erros = [];

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}
Um detalhe é que, por estarmos trabalhando com o if simples, poderemos remover as chaves ({}) e colocar o código em uma única linha. Ele continuará sendo compreensível para o JavaScript.

function validaPaciente(paciente) {

    var erros = [];

    if (!validaPeso(paciente.peso)) erros.push("Peso é inválido");

    if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");

    return erros;
}
Mostramos essa opção para que você conhecesse essa possibilidade, mas deixaremos o código como estava anteriormente.

function validaPaciente(paciente){

    var erros = [];

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}
Porém, o código estava adaptado para imprimir uma mensagem única. Nós gostaríamos que ele imprimisse uma lista de erros. Vamos ajustar o nome da variável em form.js:

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
Precisaremos adicionar uma string. Mas, por exemplo, se tivéssemos 10 erros, teríamos que adicionar a mesma quantidade de tags <span>s? Seria mais interessante termos uma lista no HTML e, para cada erro, adicionaríamos um item nessa lista. No index.html, vamos trocar o <span> por uma tag <ul> e, dentro, adicionar várias <li>s:

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

Se o nosso objetivo é adicionar diversas mensagens de erros, uma para cada erro que surgir para o array, teremos que acessar a função do form.js e não apenas alterar o conteúdo da <ul>. Será necessário criar uma <li> para cada erro e, depois, adicioná-la na <ul>.

Vamos analisar como está o form.js:

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
Como esta lógica pode ficar complicada, iremos extrair a parte de exibição das mensagens de erro para a função exibeMensagensDeErro(). Ela será responsável por pegar o array de erros e, para cada item, criaremos uma <li> a ser adicionada na <ul> de mensagens-erro. Observe que faremos uma pequena alteração no id, em index.html:

<section class="container">
    <h2 id="titulo-form">Adicionar novo paciente</h2>
    <ul id="mensagens-erro">

    </ul>
No arquivo form.js, se queremos exibir a mensagem de erro, antes teremos que criar a função exibeMensagensDeErro(erros), recebendo o array de mensagens de erros. Vamos adicioná-la logo acima da função obtemPacienteDoFormulario():

function exibeMensagensDeErro(erros){

}
Para cada item do array, selecionaremos a ul, que será guardada em uma variável:

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
}
E para cada item do array, adicionaremos a tag <li>. Poderemos fazê-lo de diferentes formas, como usando o for tradicional:

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    for(var i = 0; i < erros.lenght ; i++){
        var erro = erros[i];
    }
}
Além do for, existe outro tipo de iteração, o forEach(), o qual não precisamos delimitar, e que passará por todos os elementos. Para cada item do array, será realizada uma ação.

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
<li></li>
Temos que falar que o texto da <li> será uma mensagem de erro, que está dentro do array de erros. Para termos acesso ao erro, recebemos o item de iteração dentro da function() e o textContent será o erro. Nós colocaremos li dentro ul, usando a função appendChild().

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
A função que exibe a mensagem de erro é:

var erros = validaPacientes(paciente);
console.log(erros);
if(erros.length > 0){
    exibeMensagensDeErro(erros);
    return;
}
Adicionaremos o console.log() para vermos o array de erros caso ocorra algum problema.

No index.html, verificaremos que havíamos adicionado uma tag <ul>:

<section class="container">
    <h2 id="titulo-form">Adicionar novo paciente</h2>
    <ul id="mensagens-erro">
    </ul>
//...
Em seguida, vamos preencher o formulário no browser. Se ocorrer algum erro, ele será exibido no console. Se cadastrarmos um paciente com os dados corretos, será impresso um array vazio.

array vazio

Vamos testar adicionar outro paciente com dados inválidos, usando valores negativos.

peso e altura são invalidos

Será impresso um array com as mensagens de erro no console, além disso, o novo paciente não foi adicionado na tabela, e duas mensagens foram exibidas acima do formulário. Se inspecionarmos essas mensagens, veremos que a <ul> está com mensagens-erro e duas tags <li>:

<h2 id="titulo-form">Adicionar novo paciente</h2>
<ul id="mensagens-erro">
    <li>Peso é inválido</li>
    <li>Altura é inválida!</li>
</ul>
A cor da fonte da mensagem não está vermelha pois mudamos o nome do id. Vamos ajustar isso no index.css e, agora, o id da <ul> é mensagens-erro e não mais mensagem-erro:

#mensagens-erro {
    color: red;
}
Adicionaremos um paciente com dados inválidos e as mensagens serão exibidas para o usuário com a fonte vermelha.

mensagens com fonte vermelha

A verificação está funcionando corretamente e o paciente não foi adicionado na tabela.

Nosso código está todo organizado, isolamos as responsabilidades em diferentes funções, tornando simples a ação de adicionar uma nova validação. Atualmente, se não preenchermos o campo "Nome", o paciente será adicionado na tabela do mesmo jeito.

paciente adicionado sem nome

Como validamos o peso e a altura, vale a pena validarmos o nome. Vamos acessar a função validaPaciente() e adicionar um novo if. Para verificar se um campo está em branco, podemos analisar o seu tamanho (length), se ele for igual 0, significa que o campo não foi preenchido. Por exemplo, o nome do paciente:

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}
Adicionaremos a mensagem O nome não pode ser em branco no caso de length ser igual a 0. Faremos validações semelhantes nos demais campos:

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    return erros;
}
Em seguida, testaremos o envio do formulário com os campos todos em branco.

formulário com todos os campos vazios

Veremos quatro mensagens de erros, e agora não conseguiremos mais adicionar pacientes com algum campo não preenchido.

Limpando as mensagens de erro
Ao tentarmos adicionar um paciente com algum dado inválido, a mensagem é impressa. Depois da correção e dos dados serem enviados, o paciente será adicionado à tabela, mas a mensagem continuará na página, em acúmulo.

Nós queremos limpar a lista de mensagens (ul), antes que as mensagens de erro sejam exibidas. Para esvaziar a ul, removeremos todo o conteúdo HTML. Para isto, utilizaremos a propriedade innerHTML, que nos permite controlar o HTML interno de um elemento. Passaremos uma string vazia para a propriedade:

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
Deste modo, sempre que as mensagens de erro forem exibidas, as anteriores serão apagadas, de forma a validarmos o formulário.

Faremos um pequeno ajuste para os casos em que adicionamos um paciente na tabela. Vamos limpar a ul no form.js. Na variável mensagensErro, usaremos document.querySelector(). Após a adição, vamos limpar as mensagens:

var tabela = document.querySelector("#tabela-pacientes");

tabela.appendChild(pacienteTr);

form.reset();

var mensagensErro = document.querySelector("#mensagens-erro");
mensagensErro.innerHTML = "";

});
Agora, quando adicionamos um paciente com sucesso, as mensagens de erro são limpas da tela.

Vimos nessa aula como validar um formulário, mostramos também a importância de organizarmos nosso código à medida em que ele vai crescendo. Demonstramos ser útil saber trabalhar com arrays, como fizemos no caso de exibirmos mais de uma mensagem de erro. É importante conhecermos as estruturas básicas do JavaScript - incluindo strings e arrays - e saber quando utilizar cada uma delas. Mostramos como fazer a validação com uma tag <ul> em vez de <span>. Nós estamos agrupando todo o conhecimento adquirido e seguiremos melhorando nossa aplicação!

<h2>A propriedade innerHTML</h2>
Sobre a propriedade innerHTML, qual das afirmativas abaixo está incorreta?
R:Para editar o HTML interno de um elemento, basta passar o novo conteúdo por parâmetro para a propriedade.

 
Não, innerHTML é uma propriedade, não uma função, então ela recebe o novo conteúdo, ou seja, utilizamos um sinal de igual (=):

document.querySelector("#alura").innerHTML = "Novo texto"

-------------------------------------------------------------------------------------------------
<h1>Seção 07 - Remoção, Delegação e Animação</h1>

<h2>Removendo pacientes</h2>

Agora que já estamos validando totalmente os nossos pacientes, podemos nos concentrar em adicionar novas funcionalidades ao site da Aparecida.

Ela pode adicionar um paciente com algum dado errado, sem querer, faltando alguma letra no nome, ou algum número no peso, por exemplo. O paciente passará pela validação, mas com os dados incorretos. E ela não conseguirá editá-lo nem removê-lo, para adicioná-lo novamente.

Então vamos implementar a opção de remoção de pacientes para a Aparecida. Ela pode ser feita através de um ícone, ou para ser mais simples, um duplo clique! Ao clicarmos duas vezes em um paciente, o mesmo é removido.

Escutando o evento de duplo clique nas linhas
Se queremos colocar um evento de duplo clique nas linhas, devemos escutar esse evento para cada linha da tabela, então vamos fazê-lo no JavaScript.

Como estamos criando uma funcionalidade nova, em nada relacionado com o formulário ou com o cálculo de IMC, vamos criar um novo arquivo na pasta js, o remover-paciente.js. É nesse arquivo que ficará toda a lógica de remoção.

Antes de mais nada, vamos importar esse arquivo no index.html:

<script src="js/calcula-imc.js" ></script>
<script src="js/form.js" ></script>
<script src="js/remover-paciente.js" ></script>
Primeiramente, devemos selecionar as linhas. Todas elas possuem a classe paciente, portanto iremos selecioná-las:

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
A função do JavaScript responsável por remover um elemento do HTML é a remove(). Então temos que chamá-la no paciente que foi clicado.

Quem será clicado? O dono do evento, certo? Este é que sofrerá a ação de duplo clique e executará a função. Para acessar o dono do evento, em que o evento está atrelado, utilizaremos uma palavra reservada do JavaScript chamada this:

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove();
    });
});
O this é uma palavra de contexto ligada com quem acionou o evento, a quem o evento está atrelado. Como o evento está atrelado ao paciente, o this fará referência a ele.

Ao testarmos na página, e darmos um duplo clique em um paciente nativo, o mesmo é removido! Então conseguimos implementar a remoção de um paciente de um jeito bem fácil.

Mas nem tudo é perfeito, e essa implementação tem um pequeno defeito: ao adicionarmos um paciente pelo formulário, não conseguimos removê-lo. Isso porque o novo paciente não estava na página no momento em que o remover-paciente.js foi carregado (lembrando que o navegador abre a página e vai lendo o seu HTML, carregando os nossos scripts logo depois).

Então, o script seleciona somente os pacientes que já estão na página. Ao adicionar um ou mais pacientes, eles não estão escutando o evento! No momento em que um paciente for adicionado, deveríamos colocá-lo para ouvir o evento e executar o mesmo código, mas aí estaríamos duplicando código, que já sabemos não ser uma boa prática.

Veremos a seguir um outro jeito de removermos os pacientes nativos e aqueles que forem sendo adicionados depois da página ser carregada.

<h2>Um duplo clique</h2>
Qual o nome do evento que escuta um clique duplo do usuário em algum elemento?
R: dblclick

Diversos eventos possíveis:
https://developer.mozilla.org/en-US/docs/Web/Events

<h2>Delegando eventos</h2>
Para resolver o problema da remoção de pacientes, vamos nos aproveitar de uma característica do JavaScript chamada Event Bubbling, ou "borbulhamento" de eventos. Quando escutamos um evento no JavaScript, ele na verdade não acontece só no dono do evento (no nosso caso, na linha do paciente), ele acontece também no pai do paciente, no pai do pai do paciente, e assim vai subindo.

Na nossa estrutura, ao darmos um duplo clique na <tr> do paciente, o pai (<tbody>) também escuta o evento, assim com a tag <table>, até chegar no <body>.

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
Podemos fazer uma analogia com um copo de refrigerante, já que quando colocamos o refrigerante em um copo, suas bolhas vão do fundo até estourar na boca do copo. O evento seria semelhante a essa bolha.

Vamos comentar o código antigo e fazer um teste, primeiramente, selecionando o <tbody>:

var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");
Iremos colocá-lo para escutar um evento de clique, imprimindo uma mensagem no console ao ser clicado:

var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("click", function() {
    console.log("Fui clicado");
});
Ao voltarmos para a página, veremos que independente do ponto onde clicarmos no corpo da tabela, o evento será disparado, logo a mensagem será exibida no console. Independentemente se colocarmos o escutador de eventos em cada paciente ou no <tbody>, ele só precisará saber que um evento aconteceu ali dentro. O evento subirá como a bolha de refrigerante para a superfície do copo. Se colocarmos um addEventListener em cada paciente ou nas tags pai, tanto faz. Basta informá-lo de que houve um evento.

Descobrindo o elemento clicado
Para não termos que ficar escutando o evento a cada linha da tabela, e para as linhas adicionadas por meio do formulário, iremos delegar a responsabilidade de escutar os eventos para o pai de todos, no caso, a tag <tbody>. Faremos isso com addEventListenter() no remover-paciente.js:

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {

});
Dentro da função, perguntamos ao pai qual filho recebeu o clique, pois é ele que será removido. Desta vez não podemos utilizar o this, já que o dono do evento é a tabela, logo, ela acabará sendo removida. Para descobrirmos qual filho foi clicado, utilizaremos o event como parâmetro na função:

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    console.log(event.target);

});
Ele irá nos dizer quem foi clicado, quem foi o alvo, pela propriedade target. Enquanto o this se refere ao dono do evento, o event.target será quem sofreu propriamente o evento. O próximo passo será remover o elemento após o duplo clique:

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.remove();
});
Mas se testarmos, veremos que isso quase funciona. Ao clicarmos em algum campo da tabela, apenas o <td> clicado será removido. No entanto, queremos remover a linha completa, ou seja, a tag <tr>, pai do <td>.

apenas o td foi eliminado

Para selecionarmos o pai de um elemento, trabalharemos com a propriedade parentNode. A seguir selecionaremos quem foi clicado e removeremos o seu pai, uma tag <tr>:

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.remove();
});
Poderemos até separar em variáveis para deixar mais explícito:

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover 
    paiDoAlvo.remove();
});
Assim, mesmo que adicionarmos novos pacientes, no momento em que ele receber um duplo clique, o evento irá subir até chegar à tabela. Esta por sua vez, estará escutando. Desta forma, o paciente será removido.

Quando clicamos em qualquer filho, o evento consegue chegar até o pai (table). Essa estratégia é muito boa por economizarmos código, deixando-o mais sucinto. E é possível simplificarmos ainda mais o código:

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.remove();
});
Nosso código funcionará igualmente.


<h2>Animando a remoção do paciente</h2>
Ao removermos um paciente, a linha some instantaneamente, abruptamente. Para melhorarmos a experiência do usuário, seria interessante que a linha fosse sumindo gradualmente, até desaparecer totalmente da tabela.

Então vamos realizar essa implementação, animando a remoção do paciente!

Sabemos que, se queremos incluir um efeito visual, devemos fazer as alterações no arquivo CSS. Em index.css, adicionaremos a classe fadeOut, que definirá a opacidade do elemento com 0, fazendo-o sumir:

.fadeOut {
    opacity: 0;
    transition: 0.5s;
}
Para que o processo ocorra de maneira gradual, adicionaremos uma transição de meio segundo, e incluiremos esta classe no paciente utilizando o JavaScript.

Comentaremos a linha que remove o elemento com a função remove em remover-paciente.js, e depois adicionaremos a classe fadeOut ao elemento:

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");
    //event.target.parentNode.remove();
});
Vamos testar com um duplo clique no elemento e vê-lo sumindo aos poucos... No entanto, a linha continuará na tabela.

tabela com linhas vazias

Isso ocorre porque só estamos mexendo na parte visual do elemento, o HTML continuará da mesma forma. Se "descomentarmos" a linha, removeremos o elemento logo em seguida à adição da classe:

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");
    event.target.parentNode.remove();
});
Após o duplo clique em algum elemento da tabela, a linha desaparecerá instantaneamente. Por quê?

Como o computador é muito rápido, o browser processa as linhas do script instantaneamente. A classe é adicionada e logo em seguida o elemento é removido, por isso não conseguimos ver a transição acontecendo. Porém, devemos remover a linha da tabela só após o término da transição. Devemos pedir para o JavaScript aguardar meio segundo (tempo que colocamos para a transição ocorrer) para remover a linha.

Quando queremos aguardar um tempo, devemos usar a função setTimeout. Será passada como parâmetro uma função anônima com quanto tempo deve ser aguardado:

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
Com a função acima iremos assegurar a execução da função passada por parâmetro para ela, com o tempo de 500 milissegundos, equivalente a meio segundo.

Fazendo o teste novamente com um duplo clique em uma linha, a transição ocorre e, após meio segundo, a linha é removida.

Espero que você tenha gostado dessa aula! Aprendemos sobre a delegação, processo possível pelo borbulhamento, com event bubbling. Independentemente de qual elemento clicarmos, o evento sempre vai subindo para a tag pai. Conhecemos também a propriedade do event.target, que possui o parentNode. Eles foram usados no nosso código para a remoção de um paciente na nossa tabela.

------------------------------------------------------------------------------------------------
<h1>Seção 08 - Filtrando uma tabela</h1>

<h2>Filtrando os pacientes da tabela</h2>
Continuando com a construção do site da Aparecida Nutricionista, já conseguimos implementar a adição e remoção dos pacientes. Seria interessante se disponibilizássemos um filtro, com o qual a busca fosse realizada usando-se algum critério. Por exemplo, se quiséssemos acessar os dados de um determinado paciente, bastaria digitarmos seu nome em um campo de pesquisa e, então, apenas os dados do mesmo seriam listados. A tendência de uma tabela de dados é que a lista aumente cada vez mais, e caso se queira utilizar algum tipo de filtro, queremos que ela possa fazer uma busca mais específica.

Começaremos implementando um campo de busca na tabela, adicionando uma tag <input> no index.html. Criaremos uma label com o texto Filtre:. Dentro da tag, teremos também placeholder, com o texto Digite o nome do paciente.

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
Após a alteração, será exibido um campo com o filtro na tela:

filtro na tela

Faremos melhorias também na parte de estilo, e adicionaremos o seguinte código no index.css:

#filtrar-tabela {
    width: 200px;
    height: 35px;
    margin-bottom: 10px;
}
campo com ajustes na tabela

Acessando o conteúdo digitado no campo de filtragem
Resta agora implementarmos o código JavaScript que fará essa filtragem. Vamos criar o arquivo filtra.js, na pasta js. Como é um arquivo novo, vamos importá-lo em index.html:

<script src="js/calcula-imc.js" ></script>
<script src="js/form.js" ></script>
<script src="js/remover-paciente.js" ></script>
<script src="js/filtra.js" ></script>
Nosso objetivo é que conforme o nome for digitado no campo, os pacientes relacionados à busca sejam listados. Por exemplo, ao digitarmos Doug, o paciente Douglas deverá ser exibido. O conteúdo de texto que está sendo digitado no campo de busca deverá ser pego.

Só que quando queremos filtrar? Conforme o usuário vai digitando, a cada letra digitada. Ou seja, queremos detectar o evento de digitar, conhecido como input de dados. Toda vez que alguém inserir dados no campo, esse evento será disparado.

Inicialmente, selecionaremos o campo de texto no filtra.js:

var campoFiltro = document.querySelector("#filtrar-tabela");

console.log(campoFiltro);
Testando no browser, veremos que estamos conseguindo selecioná-lo. E ao clicarmos no campo, veremos o seguinte código no console:

<input type="text" name="filtro" id="filtrar-tabela" placeholder="Digite o nome do paciente">
Queremos que ao começarmos a digitar no filtro, seja iniciado o processo de filtragem, e para isto, adicionaremos um escutador de evento. Com o addEventListener() escutaremos um evento de input. Passaremos como segundo parâmetro uma função com a ação a ser executada quando alguém clicar no campo.

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log("Digitaram no campo");
});
mensagem digitaram no campo

A cada letra que inserimos, a função é chamada, o value do campo é filtrado na tabela. Poderemos utilizar campoFiltro.value dentro da função, no entanto, campoFiltro é o dono do evento. Utilizaremos a palavra de contexto this, referente ao próprio dono do evento.

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
});
Conforme o nome é digitado, podemos ir comparando com os de todos os pacientes da tabela com o querySelectAll(). Exibiremos aqueles que forem iguais, e os que forem diferentes serão escondidos. Vamos, então, selecionar todos os pacientes:

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
});
No entanto, queremos fazer a comparação com o nome dos pacientes, não com a tr. Precisaremos iterar sobre os pacientes, para então acessarmos o nome de cada um:

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
    }
});
Agora, selecionaremos o paciente, e a partir dele a td com a classe info-nome. Daí, extrairemos o nome do paciente:

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;
    }
});
A partir de então temos acesso ao nome de todos os pacientes da tabela, e também ao conteúdo de texto do campo de filtragem, só precisaremos esconder todos os pacientes que são diferentes do conteúdo de texto, e mostrar os que são iguais.

Veremos isso mais adiante.

<h2>Implementando a lógica de filtragem</h2>
Nosso próximo objetivo será esconder todos elementos diferentes do valor do campo de texto (this.value) e mostrar os que forem iguais. Para conseguirmos esconder e mostrar, usaremos o "truque" do fadeOut no index.css:

.fadeOut{
    opacity: 0;
    transition: 0.5s;
}
Quando quisermos deixar um paciente com fundo vermelho, adicionaremos uma classe no mesmo e, no CSS, definiremos a cor de fundo dos elementos com essa classe. Fizemos o mesmo para remover o paciente, portanto adicionaremos uma classe e, em index.css, incluiremos a classe .invisivel:

.invisivel{
    display: none;
}
Faremos o mesmo para esconder os pacientes, se (if) o nome for diferente do conteúdo de texto, adicionaremos uma classe. Caso não seja, isto é, se o nome for igual ao que foi digitado, removemos a classe. Faremos isso no filtra.js:

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
Se testarmos no browser digitando Douglas, somente este paciente será exibido.

filtragem do nome douglas

Porém, ao apagarmos o que foi digitado, a tabela com todos os pacientes não voltam a ser exibidos. Isso porque todos os pacientes estão com a classe invisivel, mas só deveríamos colocá-la quando houvesse algum conteúdo digitado no campo...

Criaremos um if para que a classe invisivel seja adicionada apenas quando houver algo digitado. Veremos se há algo digitado ou não por meio do seu length - se ele for 0, significa que o campo está em branco, e se for maior que 0, significará que há algo digitado:

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
No caso de não haver nada digitado, percorreremos todos os pacientes e removeremos a classe com um segundo for:

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
Em seguida, realizaremos um novo experimento com o filtro da tabela. Ao digitarmos uma letra, a lista será filtrada. Mas ao apagarmos a letra do campo de busca, a listagem será liberada.

Vamos experimentar adicionar uma paciente com um nome semelhante a outro já existente: "Tati".

tabela filtrada com Tati

Ao pesquisarmos por este termo, apenas os dados de uma paciente serão exibidos. Nossa tabela está mais funcional, e mais útil para a Aparecida. Quando ela tiver uma lista gigante, poderá escolher qual paciente quer ver listado.

<h2>Filtrando com expressão regular</h2>
Estamos com uma busca funcional, conseguimos filtrar a lista pelo nome do paciente, e quando apagamos o termo pesquisado, a lista da tabela é exibida completamente. Para tornar a nossa filtragem melhor, seria interessante que, ao digitarmos uma letra no campo de busca, todos os nomes com essa letra fossem listados. Por exemplo, ao digitarmos a letra "P", todos os pacientes que começassem com essa letra seriam exibidos. Como "Pedro", "Paulo" e "Pablo".

letra P no campo de busca

Conforme formos digitando as letras, a filtragem seria atualizada e a busca ficaria mais interativa.

Para que isso aconteça, é preciso compararmos letra por letra pelos termos buscados com os nomes cadastrados na lista. Seria trabalhoso fazer isso manualmente, mas o JavaScript, além de outras linguagens de programação, já possuem uma solução para a busca de texto: expressões regulares.

As expressões regulares são um tipo especial de texto, que nos auxilia a buscarmos por strings, facilitando quando o termo for maior. Pode ser uma busca simples, como no nosso caso, em que queremos identificar quais nomes contêm determinadas letras; ou casos complexos, se queremos pesquisar se o parágrafo contém a palavra "nome", por exemplo, é como quando os editores de texto buscam por uma palavra usando o comando "CTRL + F".

Criando expressões regulares no JavaScript
É bastante simples criar expressões regulares. Criaremos uma variável, que no caso chamaremos expressao, e em seguida colocaremos uma expressão regular dentro dela. Vamos gerar um objeto especial do JS, adicionando new e o nome RegExp():

var expressao = new RegExp();
Com a nova linha o trecho ficará da seguinte maneira:

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
Nós poderemos passar dois parâmetros para o objeto, sendo o primeiro o texto que queremos buscar, no caso, o termo digitado no campo de busca (this.value), e o segundo parâmetro será referente às características dos termos que devem ser buscados. É importante que a busca não seja case sensitive, que é a diferenciação entre letras maiúsculas e minúsculas. Devem ser buscadas tanto letras maiúsculas como minúsculas, e passaremos a letra "i" como segundo parâmetro, para indicarmos a opção case insensitive:

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
Porém, como utilizamos a expressão regular para buscar um texto específico na tabela? Em vez de compararmos com o nome inteiro do paciente (como estávamos fazendo), vamos pedir para a expressão regular verificar se um pedaço do nome do paciente possui as letras digitadas no campo de busca. Para isso, a expressão regular tem o método test(), com a qual passaremos o que queremos testar:

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
Esse teste irá retornar verdadeiro caso o nome contenha a expressão, ou falso caso não contenha. Como estamos testando se o nome não contém a expressão (por isso adicionaremos a classe invisivel), utilizaremos novamente o operador de negação (!). Logo, se o teste falhar, adicionaremos a classe; se não, ela será removida:

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
Agora a filtragem será feita a cada letra, deixando a busca mais dinâmica.

Vamos testar cadastrando mais um paciente com nomes que comecem com a mesma letra. Após adicionarmos os dados do "Pedro" e da "Tati", testaremos digitar a letra "P".

filtragem pela letra P

Em seguida, se apagarmos os termos do campo de busca, a lista de pacientes será exibida completamente na tabela. Nossa busca também será bem sucedida se buscarmos pelo termo "Tati".

busca pela Tati

Vimos usando um pouco da lógica da expressão regular e melhoramos nossa filtragem, que ficou mais elaborada. Se você se interessou pelas expressões regulares, temos um curso Expressões regulares: Capturando textos de forma mágica na Alura, que se aprofunda no assunto.

Nesta aula, implementamos a busca! No código do filtra.js, nós utilizamos o evento de input, e com o conteúdo abordado no curso, conseguimos uma lógica interessante. Mesmo sem a expressão regular, já havíamos implementado uma busca bastante eficiente. Também vimos o uso do this, do value, e que o lenght nos garante o poder de realizar uma busca na tabela, percorrendo-a.

<h2>Criando uma Regex</h2>
Quais são os parâmetros que podemos passar para o construtor new RegExp(...)?
R:O primeiro parâmetro é o padrão (o texto da expressão regular, o que deve ser buscado) e o segundo parâmetro são uma ou mais flags (representando como queremos que a expressão regular busque).

-------------------------------------------------------------------------------------------
<h1>Seção 09 - AjaxBuscando pacientes com AJAX</h1>

<h2>Introdução ao AJAX</h2>

Continuando a construção da página da Aparecida Nutricionista, a última feature que vamos desenvolver é a capacidade de integração do site a um sistema externo, que também contém pacientes e está em outro computador. A Aparecida quer trazer esses pacientes para que eles fiquem cadastrados no mesmo sistema.

O sistema externo de pacientes pode ser acessado no navegador pelo endereço api-pacientes.herokuapp.com/pacientes. Nele, há uma lista de pacientes que devem ser integrados ao sistema da Aparecida.

[ 
    {  
        "nome": "Jéssica",
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
Nós queremos que esses pacientes sejam importados com o clique de um botão para a tabela do site de modo que, quando o usuário clicar, os dados dos pacientes serão pesquisados no sistema externo e depois adicionados ao site da Aparecida.

A primeira coisa que devemos fazer é adicionar o botão na página index.html. É nele que clicaremos para buscar os pacientes externos. Adicionaremos o botão abaixo do fechamento da tag <table>:

<button id="adicionar-paciente" class="botao bto-principal">Buscar Paciente</

    <button id="buscar-pacientes" class="botao bto-principal">Buscar Pacientes</button>

</section>
No browser já veremos o novo botão, que por enquanto ainda não funcionará:

botão buscar paciente

Precisaremos criar uma nova feature, e para isto vamos gerar um novo arquivo JavaScript na pasta js, que receberá o nome de buscar-pacientes.js. Importaremos este novo arquivo à página index.html:

<script src="js/calcula-imc.js"></script>
<script src="js/form.js"></script>
<script src="js/remover-paciente.js"></script>
<script src="js/filtra.js"></script>
<script src="js/buscar-pacientes.js"></script>
Se queremos procurar os pacientes ao clicarmos no botão de "Buscar Paciente", devemos selecioná-lo e atrelá-lo ao evento de click. Começaremos adicionando a variável botaoAdicionar:

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes");

});
buscando pacientes

Queremos replicar o passo que fizemos com o navegador, em que sabemos como acessar um endereço que pode ser aberto em uma nova aba, digitá-lo e pressionar na tecla "Enter". Ou seja, o navegador é o responsável pela requisição, indo até a URL e nos mostrando os dados. Mas como faremos isso dentro da nossa página?

Veremos como fazer a requisição com JavaScript de modo que ela vá até a URL, busque e retorne os dados, sem perder os que já estão no site da Aparecida Nutricionista. Desta forma, não dependeremos do navegador, e a nossa página vai recarregar.

No código JavaScript, devemos acessar o endereço api-pacientes.herokuapp.com/pacientes, buscar e trazer os seus dados e colocá-los na tabela. Esse endereço é uma API, uma interface de programação que disponibiliza os dados para o usuário.

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");
    https://api-pacientes.keruapp.com/pacientes
});
Não sabemos de onde vêm os dados, como e de que maneira eles foram gerados, pois eles se encontram disponibilizados e prontos para uso, sendo esta uma característica de uma API.

Ao analisarmos os dados, eles possuem uma estrutura que já conhecemos: cada paciente fica entre chaves, dentro das quais há itens formados por um par contendo chave e valor.

Além disso, todos os dados estão armazenados entre colchetes ([]), característica de um array do JavaScript. Como os dados estão disponibilizados em uma estrutura que conhecemos, será bem fácil trazê-los para dentro do código JavaScript, mas teremos que encontrar uma forma de acessá-los. Ele está com uma notação bastante parecida com o JavaScript, para realizarmos a requisição sem o navegador, somente com a linguagem.

Para fazermos essa requisição, temos um objeto bastante conhecido no JS, o XMLHttpRequest:

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    console.log("Buscando pacientes...");
    var xhr = new XMLHttpRequest();
});
O XMLHttpRequest é um objeto do JS responsável por fazer requisições HTTP. O trecho XML do nome indica que ele era utilizado anteriormente para realizar o transporte de dados do tipo XML, no entanto, atualmente ele consegue trafegar outros tipos de dados, como textos.

Para que ele realize as requisições, devemos ensiná-lo e configurá-lo do jeito que queremos. Por exemplo, informaremos que uma requisição será feita para o seguinte endereço: https://api-pacientes.herokuapp.com/pacientes, com alguns de seus métodos.

O primeiro será open(), com o qual especificaremos o tipo de requisição a ser feita, no caso, GET. Também indicaremos para onde queremos fazê-la:

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
});
Essa ação será equivalente a chegarmos no navegador no momento em que ainda não enviamos a requisição, apenas verificando se o endereço está correto, se existe e está fazendo as configurações da requisição. Para que ela seja realizada, precisaremos chamar o método send():

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.send();
});
Podemos testar o nosso botão somente com esse código! Porém, ao clicarmos no botão, nada acontecerá. Por quê? Com o código atual, é como se o JavaScript estivesse abrindo uma nova aba no navegador, em que digitamos o endereço e clicamos em "Enter". Ficou faltando a parte final, de exibição dos dados para o usuário.

Obtendo e exibindo a resposta da requisição
Para os dados serem exibidos, após o envio da requisição, devemos escutar um evento específico que é acionado quando a requisição termina e a sua resposta é carregada. Ao escutarmos o evento, carregaremos a resposta da requisição - que no caso, serão nossos dados. Esse evento é o load, característico do XMLHttpRequest:

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

    });

    xhr.send();
});
E para acessarmos os dados da resposta, usaremos a propriedade responseText do XMLHttpRequest. Para testarmos, podemos guardá-la em uma variável, e depois imprimi-la no console do navegador:

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        console.log(xhr.responseText);
    });

    xhr.send();
});
Agora, o xhr.responseText será exibido no console:

pacientes exibidos no console

Ao clicarmos no botão, os dados serão impressos no console - nós conseguimos trazer os dados de outro site para o "Aparecida Nutricionista"! O próximo passo será exibi-los na nossa tabela, criando os pacientes de acordo com os dados. Faremos isso a seguir.


<h2>O Objeto requisitor</h2>
Qual dos códigos abaixo consegue criar um objeto responsável por fazer uma requisição HTTP com Javascript?
R:O objeto XMLHttpRequest é quem é responsável por fazer requisições HTTP assíncronas com Javascript. Apesar de ter o XML no nome hoje em dia este objeto pode trafegar diversos outros tipos de dados além do XML, este nome só se manteve devido a um legado histórico.

E para instanciar um novo Objeto XMLHttpRequest devemos utilizar a sintaxe com a palavrinha new :

var xhr = new XMLHttpRequest();

<h2>Configurando nossa requisição</h2>
Dado que criamos o objeto abaixo:

var xhr = new XMLHttpRequest();
Qual dos seguintes códigos configura a nossa requisição para ser do tipo POST e para o endereço www.xyz.com.br/compras ?
R:xhr.open("POST","www.xyz.com.br/compras");

<h2>Tratando a resposta da requisição</h2>

Os dados da requisição são exibidos no console, nós só temos que transformá-lo para um formato mais palpável, e depois, adicioná-los na tabela. Até o momento, as informações vêm no formato texto, todo concatenado. Poderemos averiguar qual o formato dos dados, adicionando a variável resposta.

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var resposta = xhr.responseText;
        console.log(typeof resposta);

    });
No console, será retornado que o conteúdo é uma string, com uma estrutura bem parecida com um array do JavaScript...

O formato de dados JSON
Os dados possuem uma estrutura parecida com o objeto do JavaScript porque eles estão no formato JSON (sigla de JavaScript Object Notation), um formato de dados parecidos com os objetos do JavaScript que podemos transportar pela web.

A semelhança é tanta que podemos facilmente converter JSON (o texto da resposta da requisição) em objetos do JavaScript com os quais estamos mais acostumados a utilizar, como array ou mesmo uma string. Queremos que ele seja transformado em um array de objetos, mais útil para o JS.

Para conseguirmos transformar a resposta, que é um texto (uma string), em um array de pacientes, usaremos um "transformador", mais precisamente um parseador de JSON para objetos do JavaScript. Para realizarmos esta tarefa usaremos o método parse(). Assim, receberemos o texto em JSON, que depois será parseado. Em seguida, será retornado um objeto JavaScript. Como nossa resposta se parece com um objeto, o método entenderá isso e nos retornará um array do objetos:

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
No console, veremos que já temos um array, sendo que cada item do array é um objeto que representa o paciente, basta iterar por eles e adicionar cada um na tabela.

json transformado em array

Implementamos essa adição de pacientes à tabela, no arquivo form.js, porém, o código está preso ao escutador do evento click do botão "Adicionar":

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
Nós podemos reaproveitar o código criando a função adicionaPacienteNaTabela. Essa função receberá um paciente, e depois a tag tr será montada. O próximo passo será buscar a tabela e adicionar o pacienteTr nela.

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
Nós já temos uma função, em seguida iremos chamá-la acima do form.reset(), passando o paciente:

 adicionaPacienteNaTabela(paciente);

form.reset();
var mensagensErro = document.querySelector("#mensagens-erro");
mensagensErro.innerHTML = "";
A função de adicionar pacientes no form.js já fazia tudo isso antes:

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
Isto é, a função já montava um paciente, verificava os erros, e o adicionava na tabela. Nós poderemos chamar a função adicionaPacienteNaTabela() - com todas as ações mencionadas -, ou podemos aproveitá-la para adicionarmos os pacientes recebidos. No arquivo buscar-pacientes.js, adicionaremos adicionaPacienteNaTabela(), que por enquanto só inclui um paciente. No entanto, teremos um array com vários deles. Logo, iremos iterar pelo array usando o forEach(), e adicionaremos cada paciente contido nele.

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
Passamos o paciente como parâmetro da função anônima, o qual será adicionado na tabela em seguida. Como se tornaram desnecessários, removemos os console.log()s.

Vamos verificar se está tudo funcionando no browser. Ao clicarmos em "Buscar Pacientes", a tabela será preenchida com todos os pacientes que estavam no servidor externo.

tabela com dados importados

Tudo está funcionando como estava, incluindo a filtragem. Estamos conseguindo acessar o outro servidor, trazer os pacientes de lá e disponibilizá-los na tabela. A técnica utilizada nessa aula é conhecida como AJAX, essa maneira de fazer uma requisição de forma assíncrona com JavaScript.

É uma requisição assíncrona porque não está parando o fluxo do código, ou seja, no momento em que a requisição é feita, a execução continua normalmente. Durante esse processo de busca de pacientes no servidor externo, é possível excluir e adicionar pacientes.

Mais adiante, veremos o que acontecerá se houver algum problema na requisição.


<h2>Capturando erros de requisição</h2>

Estamos conseguindo trazer os pacientes e adicioná-los à tabela com um simples clique no botão. Mas sabemos que, na web, nem todas as requisições dão certo.

Muitas vezes, ao acessarmos um site, podemos receber um erro 404. Por exemplo, ao acessarmos a plataforma da Alura por meio de uma URL inexistente, seremos notificados sobre o tal erro. E este não é o único erro possível, também existem os erros 201, 402, 503, entre outros, que podem ocorrer ao fazermos uma requisição AJAX na web.

O ideal seria que em casos em que fizéssemos uma requisição com o JavaScript, fosse possível detectar algum erro e avisar isso ao usuário.

Para testarmos se uma requisição falhou ou não, devemos verificar o seu código HTTP. Por exemplo, o código HTTP 404 indica que tivemos problema na requisição. O código para uma requisição perfeita, que indica que deu tudo certo, é 200. Então, depois que a requisição for carregada, poderemos testar se o código é este, caso contrário, significa que houve algum erro.

Para sabermos qual o código da requisição, acessaremos a propriedade status do XMLHttpRequest.

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
Criaremos um if, com o qual testaremos o xhr.status e, neste caso, carregaremos os dados da página. Em caso de erro, cairemos no else e exibiremos o erro no console. Mostraremos tanto o chr.status como xhr.responseText.

No browser, a requisição continuará funcionando. Vamos testar o que aconteceria caso utilizássemos uma URL inexistente, como https://api-pacientes.herokuapp.com/paci1111entes.

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
Com isso, o erro e a mensagem de resposta serão exibidos no console como gostaríamos, mas seria interessante deixar mais claro ao usuário que um erro ocorreu.

status 404

Ele mostra o status 404 e nos informa que a URL não foi encontrada. Ele imprimiu Cannot GET /paciente1111entes, ou seja, ele não conseguiu pegar a referida URL. Esta é uma forma para que as ações do código só sejam executadas quando as requisições funcionarem, caso contrário, avisaremos no console, ou alertaremos o usuário de algum outro modo, como por exemplo, exibir uma mensagem de erro.

Para isto, adicionaremos um span acima da tag <table> no arquivo index.html:

<main>
    <section class="container">
        <h2>Meus pacientes</h2>
        <label for="filtrar-tabela">Filtre:</label>
        <input type="text" name="filtro" id="filtrar-tabela" placeholder="Digite o nome do paciente">
        <table>
            <!-- conteúdo da tabela omitido -->
        </table>
        <span id="erro-ajax" class="invisivel">Erro ao buscar os pacientes</span>
        <button id="buscar-pacientes" class="botao bto-principal">Buscar Pacientes</button>
    </section>
</main>
Incluímos no span a classe invisivel, e por padrão ele não aparecerá na página. E em buscar-pacientes.js criaremos a variável erro-ajax, com a qual selecionaremos o span. Em caso de erro, removeremos a classe invisivel, deixando a mensagem visível para o usuário mesmo para aqueles que estiverem com o console fechado:

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
Se alterarmos a URL para uma que não exista, a mensagem "Erro ao buscar os pacientes" é apresentada ao usuário.

mensagem de erro acima do botão

No caso da requisição ser bem sucedida e a requisição ocorrer normalmente, nós ocultaremos a mensagem novamente, adicionando a classe invisivel e movendo a variável erroAjax para cima do if:

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

página sem mensagem de erro

Nesta aula aprendemos o suficiente para fazermos requisições para outros servidores, usamos o método open() para abrir a requisição e configurarmos o método GET para o seu envio. O send() é o método que efetivamente envia a requisição, após o qual devemos escutar a resposta para sabermos quando ela retornar no responseText. Em seguida, ela será "parseada" com o JSON.parse, se a resposta for recebida no formato JSON - texto com "cara" de JavaScript.

Abordamos vários assuntos sobre a linguagem, sobre como utilizar as funções que já conhecemos para fazermos uma requisição e como integrar dois sistemas.

<h2>O XMLHttpRequest</h2>
Sobre o XMLHttpRequest, julgue as afirmativas abaixo e selecione as verdadeiras:
1- É necessário configurar a requisição com o método .open(), com o método HTTP e o endereço do servidor para qual a requisição será feita

2- É utilizado para fazer requisições assíncronas e trafegar apenas dados do tipo XML.

3- A requisição só é enviada após o método .send().

R:O XMLHtttpRequest é objeto responsável por fazer requisições HTTP com o Javascript.

Olhando as afirmativas, sabemos sim que ele deve ser configurado anteriormente com a função .open(), que ele pode trafegar diversos tipos de dados e não somente o XML ( ele tem esse nome graças a um vestígio histórico), e a requisição só é enviada mesmo após chamarmos o método .send().

<h2>Encerramento</h2>
Chegamos ao fim do curso de JavaScript: Programando na linguagem da web, no qual vimos assuntos básicos, desde a importância do JavaScript atualmente, até coisas avançadas como o filtro criado para fazermos buscas na tabela. Criamos a opção de remoção dos elementos da tabela com evento de duplo clique, vimos como cadastrar pacientes e fazer as validações de suas alturas e pesos.

Abordamos diversos assuntos ao gerarmos uma página e, apenas com conhecimentos apresentados no curso, é possível fazer implementações fantásticas, como a busca, com algumas funções, método AJAX e a lógica de programação.

Espero que vocês tenham praticado o conteúdo nos exercícios! Em caso de dúvida, vocês podem recorrer ao fórum.

Agradeço por vocês terem assistido o curso, tomara que tenham aprendido bastante. Desejo muito sucesso na carreira, e que continuem sempre estudando!

