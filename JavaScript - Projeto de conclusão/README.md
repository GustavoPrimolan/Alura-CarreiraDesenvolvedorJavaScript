<h1>Imagens do Projeto Desenvolvido - Jogo da Forca (gallows)</h1>

<img src="imgs/01.PNG"/>
<img src="imgs/02.PNG"/>
<img src="imgs/03.PNG"/>
<img src="imgs/04.PNG"/>
<img src="imgs/05.PNG"/>
<img src="imgs/06.PNG"/>
<img src="imgs/07.PNG"/>


----------------------------------------------------------------------------------------------------
<h1>Se��o 01 - Introdu��o</h1>


Seja bem-vindo! Meu nome � Fl�vio Almeida (twitter: @flaviohalmeida) e muito provavelmente j� nos encontramos em outros cursos da Alura. Desta vez, estou aqui para propor um desafio de n�vel intermedi�rio. Voc� gosta de desafio?

O desafio � a constru��o de um jogo utilizando todo o seu conhecimento adquirido na carreira de Desenvolvedor JavaScript.

Um desafio
Para que o desafio realmente exista, adotaremos um fluxo um tanto diferente. Voc� primeiro receber� as instru��es do que deve ser feito para s� depois consultar opcionalmente a solu��o do instrutor. Caber� a voc� decidir o quanto se dedicar� ao problema a ser resolvido antes de consultar o gabarito. Ali�s, a solu��o do instrutor � uma entre as dezenas de solu��es poss�veis e a melhor solu��o ser� aquela desenvolvida por voc�! Vai encarar?

Colocando em pr�tica seu conhecimento adquirido
A boa not�cia � que voc� pode recorrer a qualquer momento aos cursos que comp�es a carreira desenvolvedor javascript. Na data de cria��o deste treinamento, s�o eles:

HTTP: Entendendo a web por baixo dos panos

JavaScript: Programando na linguagem da web

Curso jQuery: Domine a biblioteca mais popular do mercado

Curso jQuery: Avance na biblioteca mais popular do mercado parte 2

Express�es regulares: Capturando textos de forma m�gica

Nossas carreiras evoluem e n�o se preocupe se novos cursos forem introduzidos na carreira, voc� s� precisar� focar nos que foram listados anteriormente para concluir o desafio. E falando em desafio, que desafio � esse?

O projeto
N�s criaremos um jogo da forca. Em um primeiro momento, pode lhe parecer que o escopo do projeto � pequeno, mas voc� ver� que precisar� da bagagem adquirida na carreira desenvolvedor javascript.

Agora que voc� j� sabe at� onde chegaremos, fa�a o primeiro exerc�cio obrigat�rio do cap�tulo. Nele voc� baixar� o projeto com as imagens e os scripts necess�rios que ser�o utilizados durante o curso. Uma maneira c�moda para baix�-los.

Sucesso e bom estudo, meus alunos.

A p�gina gallows.html possui a seguinte estrutura. Ela exibe alguns elementos na tela e importa os CSS que utilizaremos, inclusive o script do jQuery:
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/sprite.css">
    <link rel="stylesheet" href="css/lacuna.css">
    <title>Jogo da Forca</title>
</head>
<body>
    <div class="jumbotron">
        <h2 class="text-center">Jogo da forca</h2>
    </div>
    <div class="container">

        <!-- div com a classe sprite -->
        <div class="sprite"></div>

        <ul class="lacunas text-center"></ul>

        <div class="text-center">
        <input id="entrada" 
            class="entrada"
            placeholder="Palavra secreta" autofocus>
        </div>
    </div>

    <script src="js/jquery.min.js"></script>
</body>
</html>
```
O nome gallows significa "forca" em ingl�s. Nada de mais, apenas para deixar o projeto mais chique.

Entrevistas de emprego
N�o � raro o candidato a uma vaga precisar programar na frente de um avaliador para mostrar suas capacidades com determinada linguagem. Na maioria das vezes, o que � avaliado � a capacidade de organiza��o do c�digo do candidato. Para quem esta come�ando na carreira de programador JavaScript, este curso visa consolidar o que foi aprendido, mas tamb�m ensina uma maneira bem estrutura de organizar o c�digo. Aproveite!

<h2>Orienta��es Gerais</h2>

Durante a cria��o do projeto, temos algumas regras que precisamos seguir. Vejamos:

A constru��o da aplica��o ser� feita em etapas e o aluno n�o poder� pular, adiantar ou perverter a ordem estipulada em cada cap�tulo.

Durante cada etapa, haver� uma estrutura a ser seguida (nomes de fun��es, vari�veis), mas a implementa��o da solu��o ser� responsabilidade do aluno.

jQuery deve ser usado para toda manipula��o do DOM.

Preparados?

-----------------------------------------------------------------------------------------
<h1>Se��o 02 - Sprite</h1>

<h2>Sprite - PARTE 1</h2>
O projeto que baixamos tem como finalidade definir uma estrutura comum a ser seguida durante todo o curso. Para a comodidade do desenvolvedor, ele j� traz o jQuery e o Bootstrap para que possamos utiliz�-los sem hiato em nossa aplica��o. Todavia, vale destacar um arquivo muito especial, o gallows/img/sprite.jpeg, um sprite com os nove est�gios do jogo da for�a:

sprite.jpeg
Sprite com os nove est�gios do jogo da forca, gallows game
Orienta��es gerais
N�o podemos simplesmente exibir a imagem na integra em gallows/index.html, pois n�o far� muito sentido para quem esta jogando. A ideia � come�armos exibindo o primeiro frame do sprite e pular para o pr�ximo apenas quando o usu�rio errar o chute da letra da palavra secreta. Voc� n�o poder� usar canvas para animar o sprite, toda anima��o ser� feita atrav�s da adi��o e remo��o de classes do mundo CSS atrav�s de uma l�gica JavaScript.

Para que o aluno foque no essencial, o arquivo gallows/css/sprite.css j� traz todas as classes necess�rias para essa tarefa. Vamos escrutinar o arquivo:
```html
.sprite {
    background: url(../img/sprite.jpeg) no-repeat;
    width: 162.6px;
    height: 160.5px;
    margin: 0 auto;
}

.frame1 { background-position: 0 0; }

.frame2 { background-position: 25% 0; }

.frame3 { background-position: 50% 0; }

.frame4 { background-position: 75% 0; }

.frame5 { background-position: 100% 0; }

.frame6 { background-position: 0 100%; }

.frame7 { background-position: 25% 100%; }

.frame8 { background-position: 50% 100%; }

.frame9 { background-position: 75% 100%; }
```
A classe sprite � aquela que ao ser aplicada em um elemento container como uma div exibir� a imagem. Ela deve estar sempre acompanhada de uma classe que indique seu frame atual. Por exemplo, se quisermos exibir o quinto frame do sprite teremos:

<div class="sprite frame5"></div>
Para pularmos para o pr�ximo frame basta substituirmos a classe frame5 por frame6 e assim por diante. � poss�vel realizar as mudan�as adicionando e removendo as classes manualmente atrav�s da inspe��o de elementos do DOM para podermos visualizar o resultado que desejamos.

Padr�o a seguir
Neste cap�tulo, isolaremos toda a l�gica de opera��o do sprite no arquivo gallows/js/sprite.js. Voc� precisar� seguir uma regra ao implementar sua solu��o.

REGRA: seu sprite deve ser criado atrav�s da fun��o createSprite. Ela deve receber como par�metro o seletor CSS do elemento container na qual os frames do sprite ser�o apresentados. Seu retorno ser� um objeto com a fun��o nextFrame(). Para cada chamada da fun��o, o pr�ximo frame dever� ser exibido, inclusive a fun��o dever� cuidar para nunca exceder o limite de 9 frames utilizados pela aplica��o.

Por fim, seu gallows/index.html dever� estar desta forma, usando um temporizador para exibir cada frame a cada meio segundo. Um verdadeiro teste para verificar se a sua implementa��o de createSprite funciona como da maneira especificada:
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/sprite.css">
    <link rel="stylesheet" href="css/lacuna.css">
    <title>Jogo da Forca</title>
</head>
<body>
    <div class="jumbotron">
        <h2 class="text-center">Jogo da forca</h2>
    </div>
    <div class="container">

        <!-- div com a classe sprite -->
        <div class="sprite"></div>
        <ul class="lacunas text-center"></ul>

        <div class="text-center">
        <input id="entrada" 
            class="entrada"
            autofocus>
        </div>
    </div>
    <script src="js/jquery.min.js"></script>
    <script src="js/sprite.js"></script>
    <script>

        var sprite = createSprite('.sprite');
        setInterval(function () {
            sprite.nextFrame();
        }, 500);

    </script>
</body>
</html>
```
Antes de continuar, certifique-se de que a estrutura do seu HTML esteja igual ao que acabei de modificar. Sua �nica responsabilidade ser� criar o arquivo sprite.js na pasta correta e implement�-lo para que o comportamento esperado seja atingido.

<h2>Gabarito - PARTE 1</h2>
Dentro do arquivo gallows/js/sprite.js vamos criar a fun��o createSprite(). Ela receber� o seletor do elemento que exibir� os frames do nosso sprite. Inclusive, j� vamos buscar o elemento e guardar na vari�ve $el. Alguns programadores utilizam o prefixo $ para indicar que a vari�vel guarda um jQuery Object, padr�o que utilizarei:

function createSprite(selector) {

    var $el = $(selector);   
}
Utilizaremos o ingl�s durante a constru��o do nosso script. Evite misturar ingl�s com o portugu�s dentro de um mesmo script.

Excelente, temos o elemento do DOM encapsulado pelo jQuery que precisaremos iteragir e aplicar cada frame do sprite, alias, vamos aproveitar e criar um array que guardar� uma string com o nome de cada frame declarado em sprite.css:
```html
function createSprite(selector) {

    let $el = $(selector);

    var frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];
}
```
� importante sabermos qual � o frame atual, inclusive o �timo frame, pois n�o podemos exceder a quantidade de frames do array.
```html
function createSprite(selector) {

    var $el = $(selector);

    var frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];

    var current = 0;

    var last = frames.length -1;    
}
```
Quando a fun��o createSprite() for invocada, logo de cara, precisar� adicionar a primeira classe que representa um frame em nosso elemento do DOM. Fazemos isso facilmente atrav�s do jQuery com o m�todo addClass():
```html
function createSprite(selector) {

    var $el = $(selector);

    var frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];

    var current = 0;

    var last = frames.length -1; 

    $el.addClass(frames[current]);  
}
```
Agora, vamos definir a fun��o nextFrame(), aquela que ao ser chamada mudar� o estado de current para o pr�ximo frame dispon�vel. N�o basta ele adicionar a classe do pr�ximo frame, ele precisa tamb�m remover a classe anterior:
```html
function createSprite(selector) {

    var $el = $(selector);

    var frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];

    var current = 0;

    var last = frames.length -1; 

    $el.addClass(frames[current]);  

    function nextFrame() {

        $el.removeClass(frames[current])
            .addClass(frames[++current]);
    }
}
```

<h2>Gabarito - PARTE 2 - Melhorando a legibilidade</h2>
Qual � a inten��o do c�digo dentro da fun��o nexFrame()? N�o � mover do frame atual para o pr�ximo? Podemos deixar isso claro em nosso c�digo extraindo esse trecho para uma fun��o:
```html
function createSprite(selector) {

    var $el = $(selector);

    var frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];

    var current = 0;

    var last = frames.length - 1;

    $el.addClass(frames[current]);

    // pode ter qualquer frame como origem e qualquer frame como destino!

    function moveFrame (from, to) {

        $el.removeClass(from)
            .addClass(to);
    }

    function nextFrame() {

        /* 
            Usou o pr�-incremento ++current, incrementa current antes de 
            passar para a fun��o moveFrame
        */

        moveFrame(frames[current], frames[++current]);
    }
}
```
Agora que j� temos a fun��o nextFrame() pronta, precisamos fazer com que createFrame retorne um objeto JavaScript que possua essa fun��o. Fazemos isso desta forma:
```html
function createSprite(selector) {

    var $el = $(selector);

    var frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];

    var current = 0;

    var last = frames.length -1; 

    $el.addClass(frames[current]);  

    function moveFrame (from, to) {

        $el.removeClass(from)
            .addClass(to);
    }

    function nextFrame() {

        moveFrame(frames[current], frames[++current]);
    }

    return {
        nextFrame: nextFrame
    };
}
```

<h2>Gabarito - PARTE 3 - Revis�o Closure</h2>
Vale recapitular um conceito importante do JavaScript, o conceito de closure. O objeto retornado por createSprite guarda em uma de suas propriedades a fun��o nextFrame() criada internamente em createSprite. Tanto isso � verdade que nossa inten��o � usar a fun��o desta forma:

// exemplo apenas
var sprite = createSprite('.sprite');
sprite.nextFrame();
Isso s� funcionar�, porque a fun��o sprite.nextFrame() tem acesso ao contexto de createSprite() e a todas as vari�veis e fun��es declaradas neles mesmo depois de createSprite() ter terminado de executar. Sendo assim, a chamada de sprite.nextFrame() que chama por debaixo dos panos moveFrame() e que modifica ao estado da vari�vel current est� se valendo deste recurso da linguagem JavaScript.

<h2>Gabarito - PARTE 4 - a l�gica do hasNext()</h2>
Isso j� � suficiente para podermos ver a exibi��o de cada sprite a cada meio segundo. Todavia, h� um problema ainda. N�o podemos exceder a quantidade de frames definida no array. Isso significa que ao toda vez que nextFrame() for chamado, ele precisar� verificar se ainda h� o pr�ximo frame. Havendo, mudamos para o pr�ximo frame, caso contr�rio, ficamos no frame atual, no caso, o �ltimo frame do sprite que apresenta a forca completa.

Vamos criar a fun��o hasNext():
```html
function createSprite(selector) {

    var $el = $(selector);

    var frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];

    var current = 0;

    var last = frames.length - 1;

    $el.addClass(frames[current]);

    function moveFrame (from, to) {

        $el.removeClass(from)
            .addClass(to);
    }

    function hasNext() {

        return current + 1 <= last;
    }

    function nextFrame() {

        if (hasNext()) moveFrame (frames[current], frames[++current]);
    }

    return { nextFrame: nextFrame };
}
```
Excelente, nosso sprite ao chegar ao �ltimo frame fica parado. Por fim, podemos organizar um pouco melhor nosso c�digo movendo para o in�cio do bloco da fun��o createSprite as fun��es utilit�rias que criamos:
```html
function createSprite(selector) {

    function hasNext() {

        return current + 1 <= last;
    }

    function moveFrame (from, to) {

        $el.removeClass(from)
            .addClass(to);
    }

    function nextFrame() {

        if (hasNext()) moveFrame (frames[current], frames[++current]);
    }

    var $el = $(selector);

    var frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];

    var current = 0;

    var last = frames.length - 1;

    $el.addClass(frames[current]);

    return { nextFrame: nextFrame };
}
```

<h2>Gabarito - PARTE 5 - revis�o function declaration vs function expression</h2>
Excelente, terminamos nosso sprite. Todavia, mudarei ligeiramente o c�digo. Todas as fun��es que criamos foram criadas atrav�s de function declaration. Isto �, usamos a palavra reservada function seguida do nome da fun��o. H� outra forma de definirmos fun��es atrav�s de *function expression. Essa forma consiste em atribuir para a vari�vel o corpo de uma fun��o. Alterando todo o nosso c�digo temos:
```html
var createSprite = function(selector) {

    var hasNext = function() {

        return current + 1 <= last;
    }

    var moveFrame = function(from, to) {

        $el.removeClass(from)
            .addClass(to);
    }

    var nextFrame = function() {

        if (hasNext()) moveFrame (frames[current], frames[++current]);
    }

    var $el = $(selector);

    var frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];

    var current = 0;

    var last = frames.length - 1;

    $el.addClass(frames[current]);

    return { nextFrame: nextFrame };
}
```
A troca de function declaration para function expression foi uma quest�o de gosto deste instrutor. Todavia, h� uma ligeira diferente entre as duas abordagem que revisarei aqui.

Quando criarmos uma fun��o atrav�s de function declaration, mesmo que tenhamos definido a fun��o no meio ou no final do nosso script elas ser�o sempre i�adas para o topo do script. Se declaramos uma fun��o dentro da outra, elas ser�o i�adas para o in�cio da fun��o. Esse procedimento se chamada function hoisting (i�amento de fun��o). Vejamos um exemplo menos:
```html
exibeNome();

function exibeNome() {

    alert('Fl�vio Almeida');
}
```
O c�digo acima funciona como esperado, porque antes que o interpretador execute nosso c�digo, ele modificar� a sua estrutura para:
```html
function exibeNome() {

    alert('Fl�vio Almeida');
}

exibeNome();
```
Todavia, se mudarmos a declara��o do nosso c�digo para function expression ele n�o funcionar�:
```html
exibeNome(); // n�o funcionar�, exibeNome � undefined

var exibeNome = function() {

    alert('Fl�vio Almeida');
}
```
Isso acontece porque o JavaScript i�a tamb�m para o topo as declara��es de vari�veis, mas apenas sua declara��o, sem qualquer inicializa��o. Para o interpretador JavaScript seu c�digo ficar� estar� assim:
```html
var exibeNome; // i�ou a declara��o da vari�vel

exibeNome(); // repare que n�o h� qualquer valor

exibeNome = function() {

    alert('Fl�vio Almeida');
}
```
Com este exemplo, fica claro a diferen�a entre as duas abordagens. Este instrutor prefere a segunda forma porque for�a o desenvolvedor a declarar as express�o de fun��o antes do seu uso, o que � mais compreens�vel. Al�m disso, essa forma abre espa�o para outras melhorias que fogem o escopo do ECMASCRIPT 5 e entram no escopo do ES2015 (ES6). No final do curso teremos um b�nus no qual eu migrarei todo c�digo para ES2015 para que o aluno veja como essa atualiza��o do JavaScript pode ajud�-lo a escrever um c�digo ainda melhor, al�m de indicar quais cursos de outras carreiras o aluno deve procurar para adiquirir esse conhecimento.

Por fim, o setInterval proposto para testar nosso sprite funcionar� como esperado. Ao final do teste, voc� pode remov�-lo.

<h2>Sprite - PARTE 2</h2>
At� este ponto temos uma maneira isolada de controlar as mudan�as de frame do nosso sprite. Todavia, voc� ainda precisar�:

Implementar a fun��o reset() para voltar nosso sprite para o estado inicial que � a exibi��o do primeiro frame.
Implementar a fun��o isFinished() que deve retornar true ou false para sabermos que o sprite chegou ao fim, isto �, se chegou at� o seu �ltimo frame v�lido.
O papel da fun��o reset()
Para testar a fun��o reset(), vamos apagar a tag script com nosso teste do setInterval. A ideia � executar as seguintes instru��es atrav�s do console do navegador:



        var sprite = createSprite('.sprite');
        sprite.nextFrame();
        sprite.nextFrame();
        sprite.nextFrame();
        sprite.reset(); // volta a exibir o primeiro frame
        sprite.nextFrame(); // vai para o pr�ximo frame
O papel da fun��o isFinished()
Para testar o isFinished(), faremos no console do Navegador:



        var sprite = createSprite('.sprite');
        sprite.nextFrame();
        sprite.nextFrame();
        sprite.isFinished(); // false
        sprite.nextFrame();
        sprite.nextFrame();
        sprite.nextFrame();
        sprite.nextFrame();
        sprite.nextFrame();
        sprite.nextFrame();
        sprite.nextFrame();
        sprite.isFinished(); // true
M�os na massa!

<h2>Gabarito</h2>
Vamos criar a fun��o reset(). Seu papel ser� substituir a classe do frame atual pelo frame inicial. Al�m disso, deve mudar o estado de current para 0. N�o podemos esquecer de adicionar a fun��o reset no objeto retornado por createSprite():
```html
var createSprite = function(selector) {

    var hasNext = function() {

        return current + 1 <= last;
    };

    var moveFrame = function(from, to) {

        $el.removeClass(from).addClass(to);
    };

    var nextFrame = function() {

        if (hasNext()) moveFrame(frames[current], frames[++current]);
    };

    var reset = function() {

        moveFrame(frames[current], frames[0])
        current = 0;
    };

    var $el = $(selector);

    var frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];

    var current = 0;

    var last = sprites.length - 1;

    $el.addClass(frames[current]);

    return { nextFrame: nextFrame, reset: reset };
}
```
Para testarmos a fun��o reset(), vamos alterar gallows/index.html e deixar apenas a instru��o que chama createSprite(). Como a vari�vel esta no escopo global, vamos acess�-la atrav�s do terminal. Nosso HTML ficar� assim:
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/sprite.css">
    <link rel="stylesheet" href="css/lacuna.css">
    <title>Jogo da Forca</title>
</head>
<body>
    <div class="jumbotron">
        <h2 class="text-center">Jogo da forca</h2>
    </div>
    <div class="container">

        <!-- div com a classe sprite -->
        <div class="sprite"></div>
        <ul class="lacunas text-center"></ul>

        <div class="text-center">
        <input id="entrada" 
            class="entrada"
            autofocus>
        </div>
    </div>
    <script src="js/jquery.min.js"></script>
    <script src="js/sprite.js"></script>
    <script>

        var sprite = createSprite('.sprite');
    </script>
</body>
</html>
```
Agora, no console do navegador, podemos fazer assim:

sprite.nextFrame();
sprite.nextFrame();
sprite.nextFrame();
sprite.reset();
sprite.nextFrame();
Agora s� falta a fun��o isFinihed, aquela que indica se o sprite chegou ao fim ou n�o.

```html
var createSprite = function(selector) {

    var hasNext = function() {

        return current + 1 <= last;
    };

    var moveFrame = function(from, to) {

        $el.removeClass(from).addClass(to);
    };

    var nextFrame = function() {

        if (hasNext()) moveFrame(frames[current], frames[++current]);
    };

    var reset = function() {

        moveFrame(frames[current], frames[0])
        current = 0;
    };

    // nova fun��o!

    var isFinished = function() {

        return !hasNext();
    };  

    var $el = $(selector);

    var frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];

    var current = 0;

    var last = sprites.length - 1;

    $el.addClass(frames[current]);

    // adicionou isFinihed no objeto retornado
    return { nextFrame: nextFrame, reset: reset, isFinished: isFinished };
}
```
Para testar, faremos a mesma coisa no console:

sprite.nextFrame();
sprite.nextFrame();
sprite.nextFrame();
sprite.nextFrame();
sprite.nextFrame();
sprite.nextFrame();
sprite.nextFrame();
sprite.nextFrame();
sprite.nextFrame();
sprite.isFinished();


<h1>Se��o 03 - L�gica do Jogo</h1>

<h2>Jogo - PARTE 1</h2>

Nosso projeto far� uma separa��o marcante entre a l�gica do jogo e sua apresenta��o (manipula��o de DOM) e neste cap�tulo voc� precisar� abordar o primeiro, a l�gica do jogo. N�o se preocupe caso voc� nunca tenha realizado essa divis�o antes, pois a estrutura m�nima necess�ria ser� passada para voc�. � importante que voc� n�o se afaste dessa estrutra. J� a implementa��o da l�gica dentro dessa estrutura ser� de sua responsabilidade.

Crie o arquivo gallows/js/jogo.js e importe-o logo ap�s do script sprite.js em gallows/index.html. Antes de liber�-lo para a implementa��o do c�digo, siga os meus passos a seguir.

Estrutura: separa��o entre a l�gica e sua apresenta��o
A primeira coisa que farei � usar a mesma estrat�gia que usamos com sprite.js, a diferen�a � que escreverei os nomes de todas as fun��es em portugu�s:

A API publica do nosso jogo, isto �, as fun��es que podem ser chamadas no objeto retornado por criaJogo() dever� ter essa estrutura:
```html
var criaJogo = function() {

    // recebe a palavra secreta e deve atribu�-la � vari�vel `palavraSecreta`. Vai para a pr�xima etapa
    var setPalavraSecreta = function (palavra) {
        console.log('falta implementar');    
    };

    // retorna as lacunas do jogo. Importante para quem for exib�-las.
    var getLacunas = function () {
        console.log('falta implementar');    
    };

    // retorna a etapa atual do jogo
    var getEtapa = function () {
        console.log('falta implementar');    
    };
};
```
Se voc� como programador achar que � necess�rio criar mais fun��es por uma quest�o de manuten��o e legibilidade fique � vontade.

Excelente, mas ainda precisamos fazer mais coisa. Para que voc� entenda com clareza at� onde eu quero chegar, abrirei no navegador o projeto com esta parte j� implementada. A p�gina s� importa jogo.js e nada mais. � atrav�s do console do navegador que interagiremos com nosso jogo.

Primeiro, vamos criar nosso jogo:

var jogo = criaJogo();
Excelente, temos uma vari�vel jogo que guarda um objeto JavaScript que possui uma s�rie de fun��es que dizem respeito ao jogo. Sabemos que um dos primeiro passos que o jogador executar� � informar a palavra secreta. Esse passo � feito em nossa API de jogo atrav�s da chamada da fun��o jogo.setPalavraSecreta():

var jogo = criaJogo();
console.log(jogo.getEtapa()); // 1
jogo.setPalavraSecreta('calopsita');
Internamente, a fun��o setPalavraSecreta deve atribuir o palavra recebida como par�metro e guard�-la na vari�vel palavraSecreta, al�m disso, deve criar as lacunas em branco. Lembre-se que o tamanho do array lacunas deve ter o mesmo tamanho da palavra secreta informada. Por fim, o jogo deve ir para a pr�xima etapa, que � a leitura dos chutes. Como voc� implementar� essa parte fica ao seu crit�rio, mas o importante � que siga a estrutura aqui definida. Inclusive, podemos testar se o array de lacunas foi criado corretamente atrav�s da fun��o getLacunas():

var jogo = criaJogo();
console.log(jogo.getEtapa()); // 1
jogo.setPalavraSecreta('calopsita');
console.log(jogo.getEtapa()); // 2
console.log(jogo.getLacunas()); // ['', '', '', '', '', '', '', '', '']
�timo, mas para que possamos acessar essas fun��es atrav�s de um objeto a fun��o iniciaJogo deve retornar um objeto com essas fun��es. Por fim, a estrutura m�nima de inciaJogo() ficar� assim:
```html
var criaJogo = function() {

    var setPalavraSecreta = function (palavra) {
        console.log('falta implementar');    
    };

    var getLacunas = function () {
        console.log('falta implementar');    
    };

    var getEtapa = function () {
        console.log('falta implementar');    
    };

    return {

        setPalavraSecreta: setPalavraSecreta, 
        getLacunas: getLacunas,
        getEtapa: getEtapa
    };
};
```
A l�gica do nosso jogo ainda esta longe de terminar, mas isso � o suficiente para este v�deo. Voc� deve chegar at� este ponto. Lembre-se que voc� poder� consultar minha resposta, mas fa�a isso depois de tentar resolver o problema primeiro.

<h2>Gabarito</h2>
Uma solu��o poss�vel � a seguinte:
```html
var criaJogo = function () {

    var etapa = 1;
    var lacunas = [];
    var palavraSecreta = '';

    // adiciona uma lacuna em branco para cada letra da palavraSecreta
    var criaLacunas = function () {
        for (let i = 0; i < palavraSecreta.length; i++) {
            lacunas.push('');
        }
    };

    // muda o estado da vari�vel etapa para indicar a pr�xima e �ltima etapa
    var proximaEtapa = function () {

        etapa = 2;
    };

    // guarda a palavra secreta, cria as lacunas e vai para a pr�xima etapa
    var setPalavraSecreta = function (palavra) {

        palavraSecreta = palavra;
        criaLacunas();
        proximaEtapa();
    };

    // �nica maneira de termos acesso �s lacunas fora da fun��o `criaJogo()`
    var getLacunas = function () {

        return lacunas;
    };

    // permite consultar em qual etapa o jogo se encontra
    var getEtapa = function () {

        return etapa;
    };

    /* 
    Tornou acess�vel apenas as fun��es que fazem sentido serem chamadas por quem utilizar nosso jogo. 
        A fun��o `proximaEtapa()` � de uso interno e s� foi criada para melhorar a legibilidade e manuten��o do c�digo, a 
        mesma coisa para a fun��o `criaLacunas()`. 
    */    
    return {
        setPalavraSecreta: setPalavraSecreta, 
        getLacunas: getLacunas,
        getEtapa: getEtapa
    }
};
```

<h2>Outra maneira para preencher lacunas</h2>
Para criarmos um array de lacunas, fizemos:
```html
var criaLacunas = function () {
    for (let i = 0; i < palavraSecreta.length; i++) {
        lacunas.push('');
    }
};
```
No entanto, podemos evitar o loop for da seguinte maneira:
```html
var criaLacunas = function () {

    lacunas = Array(palavraSecreta.length).fill('');
};
```
Quando fazemos Array(palavraSecreta.length) estamos criando um array com o mesmo tamanho da string palavraSecreta. Todavia, todos os elementos ser�o undefined. Resolvemos isso facilmente atrav�s da fun��o fill():

Array(palavraSecreta.length).fill('')
Uma forma mais enxuta e com est�tica mais funcional do que a primeira.

<h2>Jogo - PARTE 2</h2>
Nosso jogo j� consegue chegar at� a segunda etapa. Sabemos que � nesta etapa que o jogador informa o seu chute e que nosso jogo tem que ser capaz de preencher corretamente seu array lacunas com a letra informada, inclusive exibir o pr�ximo sprite da forca caso ele erre. Nesse sentido, nossa fun��o criaJogo() precisar� receber como par�metro um sprite. Vamos aproveitar e adicionar o esqueleto da fun��o processaChute, aquela que ler� o chute do jogador e atualizar� lacunas:

// recebe sprite como par�metro
```html
var criaJogo = function (sprite) {

    var etapa = 1;
    var lacunas = [];
    var palavraSecreta = '';

    var criaLacunas = function () {

        for (let i = 0; i < palavraSecreta.length; i++) {
            lacunas.push('');
        }
    };

    var proximaEtapa = function () {

        etapa = 2;
    };

    var setPalavraSecreta = function (palavra) {

        palavraSecreta = palavra;
        criaLacunas();
        proximaEtapa();
    };

    var getLacunas = function () {

        return lacunas;
    };

    var getEtapa = function () {

        return etapa;
    };

    // preencher lacuna ou exibe o pr�ximo sprite. Retorna true ou false caso o jogador tenha acertado
    var processaChute = function() {
        console.log('falta implementar');

    };

    // adicionou na propriedade do objeto
    return {
        setPalavraSecreta: setPalavraSecreta, 
        getLacunas: getLacunas,
        getEtapa: getEtapa,
        processaChute: processaChute
    }
};
```
Separando depend�ncias
Talvez voc� esteja se perguntando porque eu n�o chamei criaSprite('.sprite) dentro de criaJogo() evitando assim passar um par�metro para esta fun��o. Essa abordagem permite a troca do sprite utilizado pela aplica��o. Hoje, usamos o sprite de uma forca, talvez algu�m queria usar outro sprite com uma conota��o menos sombria. Sendo assim, quem criar um sprite com as mesmas fun��es que definimos ao criar nosso primeiro sprite poder� utiliz�-lo em nosso jogo sem ter que mexer em sua l�gica.

Mais uma vez, abrirei o projeto com esta parte pronta e os testes que devem ser realizados para que possamos ver qual ser� o resultado esperado:
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/sprite.css">
    <link rel="stylesheet" href="css/lacuna.css">
    <title>Jogo da Forca</title>
</head>
<body>
    <div class="jumbotron">
        <h2 class="text-center">Jogo da forca</h2>
    </div>
    <div class="container">
        <div class="sprite"></div>
        <ul class="lacunas text-center"></ul>

        <div class="text-center">
        <input id="entrada" 
            class="entrada"
            placeholder="Palavra secreta" autofocus>
        </div>
    </div>

    <script src="js/jquery.min.js"></script>
    <script src="js/sprite.js"></script>
    <script src="js/jogo.js"></script>
    <script>
        var jogo = criaJogo(createSprite('.sprite'));
        jogo.setPalavraSecreta('calopsita');
        console.log(jogo.getLacunas()); // ['', '', '', '', '', '', '', '', '']
        jogo.processaChute('a');
        console.log(jogo.getLacunas()); // ['', 'a', '', '', '', '', '', '', 'a']
        jogo.processaChute('c');
        console.log(jogo.getLacunas()); // ['c', 'a', '', '', '', '', '', '', 'a']
        jogo.processaChute('z'); // pr�ximo sprite deve ser exibido
    </script>
</body>
</html>
```

<h2>Gabarito</h2>
Dentro da fun��o processaChute, declararei tr�s vari�veis. A primeira receber� uma express�o regular criada a partir do chute informado pelo jogador. Nessa express�o, utilizo o modificador gi. O modificador g � para realizar uma pesquisa global, isto �, mesmo que ele fa�a o match da express�o na primeira letra, a express�o continuar� sendo aplicada at� o fim do texto, no caso, nosso alvo ser� palavraSecreta. O modificador i � para indicar que n�o estamos levando em considera��o na compara��o se a letra esta em mai�scula ou min�scula. A vari�vel resultado guardar� o resultado na nossa express�o regular e por fim acertou ser� um marcador para sabermos se o jogador acertou ou n�o a letra.
```html
var processaChute = function (chute) {

    var exp = new RegExp(chute, 'gi');
    var resultado;    
    var acertou = false;
};
```
Declara��o de vari�veis mais sucinta
Todavia, podemos simplificar a declara��o dessas vari�veis da seguinte maneira:
```html
var processaChute = function (chute) {

    var exp = new RegExp(chute, 'gi')
        , resultado
        , acertou = false;
};
```
Vejam que s� precisei declarar var uma �nica vez. Muito bem, agora precisamos utilizar o poder da express�o regular. N�o basta sabermos se a letra que o jogador chutou existe ou n�o em palavraScreta, precisamos saber em qual posi��o ela esta para que possamos atualizar o array de lacunas nesta posi��o com o chute.

Faremos um teste no console do navegador vermos como utilizaremos a express�o:

palavraSecreta = 'calopsita';
exp = new RegExp('a', 'gi');
exp.exec(palavraSecreta) // sa�da ["a", index: 1, input: "calopsita"]
exp.exec(palavraSecreta) // sa�da ["a", index: 8, input: "calopsita"]
exp.exec(palavraSecreta) // null, n�o encontrou mais nada
Como podemos ver, a cada chamada de exp.exec() recebemos um objeto JavaScript com uma s�rie de propriedades. Uma delas � a posi��o na qual o chute aparece, ou seja, o index. A cada chamada de exp.exec() recebemos um novo match at� que seja retornado null para indicar que a avalia��o chegou ao fim.

Com base no que cabamos de constatar no console, vamos utilizar um while para automatizar esse processo:
```html
var processaChute = function (chute) {

    var exp = new RegExp(chute, 'gi')
        , resultado
        , acertou = false;

    while (resultado = exp.exec(palavraSecreta)) {
        lacunas[resultado.index] = chute;
    }
};
```
Enquando o while estiver sendo executado, � porque h� match. Ent�o, em seu bloco, acessamos a posi��o lacunas[resultado.index] e nela atribu�mos o chute. Perfeito, pois essa abordagem conseguir� preencher todas as lacunas de um determinado chute. E o erro? Precisamos saber no final do bloco while se houve algum erro ou n�o e, caso haja, precisaremos exibir o pr�ximo frame do sprite da forca. Para isso faremos o seguinte:
```html
var processaChute = function (chute) {

    var exp = new RegExp(chute, 'gi')
        , resultado
        , acertou = false;

    while (resultado = exp.exec(palavraSecreta)) {
        acertou = true;
        lacunas[resultado.index] = chute;
    }

    if (!acertou) {
        sprite.nextFrame();
    }
};
```
O valor de acertou s� ser� true se houver match, caso contr�rio, continuar� como false. Se o usu�rio n�o acertou, chamamos sprite.nexFrame().

Todavia, podemos enxugar um pouco mais nosso c�digo com duas mudan�as:
```html
var processaChute = function (chute) {

    var exp = new RegExp(chute, 'gi')
        , resultado
        , acertou = false;

    while (resultado = exp.exec(palavraSecreta)) {

        acertou = lacunas[resultado.index] = chute;
    }

   if (!acertou) sprite.nextFrame();
};
```
A primeira � a instru��o acertou = lacunas[resultado.index] = chute;. Nela, em uma tacada s�, estamos atribuindo o chute � sua respectiva posi��o no array lacunas e guardamos o valor de lacunas na vari�vel acertou. Em JavaScript, qualquer string diferente de branco como '' � considerado true. Outra mudan�a que fizemos foi remover o bloco da condi��o if. Ali�s, podemos fazer a mesma coisa com o while:
```html
var criaJogo = function (sprite) {

    var etapa = 1;
    var lacunas = [];
    var palavraSecreta = '';

    var criaLacunas = function () {

        for (let i = 0; i < palavraSecreta.length; i++) {
            lacunas.push('');
        }
    };

    var proximaEtapa = function () {

        etapa = 2;
    };

    var setPalavraSecreta = function (palavra) {

        palavraSecreta = palavra;
        criaLacunas();
        proximaEtapa();
    };

    var getLacunas = function () {

        return lacunas;
    };

    var getEtapa = function () {

        return etapa;
    };

    var processaChute = function (chute) {

        var exp = new RegExp(chute, 'gi')
            , resultado
            , acertou = false;

        while (resultado = exp.exec(palavraSecreta)) 
            acertou = lacunas[resultado.index] = chute;

        if (!acertou) sprite.nextFrame();
    };

    return {
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa,
        processaChute: processaChute
    }
};
```
<h2>Jogo - PARTE 3</h2>

Nosso jogo ainda n�o sabe dizer se jogador ganhou ou perdeu, muito menos reiniciar a partida. Vamos adicionar o esqueleto de tr�s novas fun��es: ganhou, perdeu, ganhouOuPerdeu, reinicia:
```html
var criaJogo = function (sprite) {

    var etapa = 1;
    var lacunas = [];
    var palavraSecreta = '';

    var criaLacunas = function () {

        for (let i = 0; i < palavraSecreta.length; i++) {
            lacunas.push('');
        }
    };

    var proximaEtapa = function () {

        etapa = 2;
    };

    var setPalavraSecreta = function (palavra) {

        palavraSecreta = palavra;
        criaLacunas();
        proximaEtapa();
    };

    var getLacunas = function () {

        return lacunas;
    };

    var getEtapa = function () {

        return etapa;
    };

    var processaChute = function (chute) {

        var exp = new RegExp(chute, 'gi')
            , resultado
            , acertou = false;

        while (resultado = exp.exec(palavraSecreta))
            acertou = lacunas[resultado.index] = chute;

        if (!acertou) sprite.nextFrame();
    };


    // novas funcionaliades que precisamos implementar

    var ganhou = function () {
        console.log('falta implementar');
    };

    var perdeu = function () {
        console.log('falta implementar');
    };

    var ganhouOuPerdeu = function () {
        console.log('falta implementar');
    };

    var reinicia = function () {
        console.log('falta implementar');
    };

    // adicionou novas propriedades
    return {
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa,
        processaChute: processaChute,
        ganhou: ganhou,
        perdeu: perdeu,
        ganhouOuPerdeu: ganhouOuPerdeu, 
        reinicia: reinicia
    }
};
```
Como voc� deve implementar a l�gica dessas fun��es? Dessa vez n�o haver� dicas e voc� precisar� usar o bom senso para resolver essa quest�o. Como de costume, vou demonstrar como essas fun��es devem se comportar realizando testes atrav�s do console com esta parte j� implementada. Inclusive, voc� pode usar a mesma l�gica de teste aqui para verificar seu c�digo:
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/sprite.css">
    <link rel="stylesheet" href="css/lacuna.css">
    <title>Jogo da Forca</title>
</head>
<body>
    <div class="jumbotron">
        <h2 class="text-center">Jogo da forca</h2>
    </div>
    <div class="container">
        <div class="sprite"></div>
        <ul class="lacunas text-center"></ul>

        <div class="text-center">
        <input id="entrada" 
            class="entrada"
            placeholder="Palavra secreta" autofocus>
        </div>
    </div>

    <script src="js/jquery.min.js"></script>
    <script src="js/sprite.js"></script>
    <script src="js/jogo.js"></script>
    <script>
        var jogo = criaJogo(createSprite('.sprite'));
        console.log(jogo.getEtapa()); // 1
        jogo.setPalavraSecreta('calopsita');
        console.log(jogo.ganhouOuPerdeu()); // false
        jogo.processaChute('c');
        jogo.processaChute('a');
        jogo.processaChute('l');
        jogo.processaChute('o');
        jogo.processaChute('p');
        jogo.processaChute('s');
        jogo.processaChute('i');
        jogo.processaChute('t');
        console.log(jogo.ganhouOuPerdeu()); // true
        console.log(jogo.ganhou()); // true
        console.log(jogo.perdeu()); // true
        jogo.reinicia();
        console.log(jogo.getLacunas());
        console.log(jogo.getEtapa());
        jogo.setPalavraSecreta('calopsita');
        jogo.processaChute('z');
        jogo.processaChute('z');
        jogo.processaChute('z');
        jogo.processaChute('z');
        jogo.processaChute('z');
        jogo.processaChute('z');
        jogo.processaChute('z');
        jogo.processaChute('z');
        jogo.processaChute('z');
        console.log(jogo.ganhouOuPerdeu()); // true
        console.log(jogo.ganhou()); // false
        console.log(jogo.perdeu()); // true

    </script>
</body>
</html>
```

<h2>Gabarito</h2>
Vamos come�ar pela implementa��o da fun��o ganhou. Como saberemos se o jogador ganhou ou n�o? Basta verificarmos se lacunas n�o possui nenhum item com o valor ''. Podemos fazer isso facilmente com aux�lio da fun��o some() que todo array possui no ECMASCRIPT 5 em diante. Ela funcina da seguinte maneira. Se algum (some) item do array retornar true para a condi��o que definimos no callback passado para a fun��o, ela parar� imediatamente de iterar e retornar� true como resposta. Se o array for iterado at� o fim e a condi��o n�o for atendida, ser� retornado false.
```html
    var ganhou = function () {

        return lacunas.length 
            ? !lacunas.some(function(lacuna) {
                return lacuna == '';
            })
            : false;
    };
```
Para cada lacuna do array verificamos se ela � igual a ''. Se for, � porque o array de lacunas esta incompleto e some() retornar� true. Se n�o houver nenhuma lacuna com o valor '' o retorno de some ser� false. Todavia, precisamos inverter o resultado, pois para sabermos se o jogador ganhou, false deve ser considerado true, pois nenhuma lacuna em branco foi encontrada.

Para sabermos se o jogador perdeu, basta consultarmos sprite.isFinished(). Lembre-se que esta fun��o retorna true caso o sprite j� tenha chegado ao fim:
```html
var perdeu = function () {

    return sprite.isFinished();
};
```
Agora fica f�cil implementar a fun��o ganhouOuPerdeu():

```html
var ganhouOuPerdeu = function () {

    return ganhou() || perdeu();
};
```
Por fim, a fun��o reinicia() deve alterar o estado da aplica��o para o mesmo estado quando iniciamos o jogo:
```html
var reinicia = function () {

    etapa = 1;
    palavraSecreta = '';
    lacunas = [];
    sprite.reset();
};
```
Veja que foi necess�rio chamar sprite.reset() para fazer com que ele volte para o primeiro sprite.

Nosso c�digo final ficar� assim:
```html
var criaJogo = function (sprite) {

    var etapa = 1;
    var lacunas = [];
    var palavraSecreta = '';

    var criaLacunas = function () {

        for (let i = 0; i < palavraSecreta.length; i++) {
            lacunas.push('');
        }
    };

    var proximaEtapa = function () {

        etapa = 2;
    };

    var setPalavraSecreta = function (palavra) {

        palavraSecreta = palavra;
        criaLacunas();
        proximaEtapa();
    };

    var getLacunas = function () {

        return lacunas;
    };

    var getEtapa = function () {

        return etapa;
    };

    var processaChute = function (chute) {

        var exp = new RegExp(chute, 'gi')
            , resultado
            , acertou = false;

        while (resultado = exp.exec(palavraSecreta))
            acertou = lacunas[resultado.index] = chute;

        if (!acertou) sprite.nextFrame();
    };

    var ganhou = function () {

        return lacunas.length 
            ? !lacunas.some(function(lacuna) {
                return lacuna == '';
            })
            : false;
    };


    var perdeu = function () {

        return sprite.isFinished();
    };

    var ganhouOuPerdeu = function () {

        return ganhou() || perdeu();
    };

    var reinicia = function () {

        etapa = 1;
        palavraSecreta = '';
        lacunas = [];
        sprite.reset();
    };

    return {
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa,
        processaChute: processaChute,
        ganhou: ganhou,
        perdeu: perdeu,
        ganhouOuPerdeu: ganhouOuPerdeu,
        reinicia: reinicia
    }
};
```

----------------------------------------------------------------------------------------------------------
<h1>Se��o 04 - A l�gica de apresenta��o</h1>

<h2>Apresenta��o - PARTE 1</h2>

Padr�o a seguir
Chegou a hora de implementarmos a l�gica de apresenta��o do jogo, at� porque, precisamos exibir para o usu�rio o estado do jogo para que ele possa interagir com ele.

Usaremos a mesma estrat�gia que j� utilizamos anteriormente. Vamos criar o arquivo gallows/js/controller.js.

Separando depend�ncias, mais uma vez
Nele, criaremos a fun��o criaController que receber� como par�metro um objeto que representa nosso jogo. Lembre-se que j� criamos a fun��o criaJogo() que gera esse objeto para n�s.
```html
var criaController = function (jogo) {

    var $entrada = $('#entrada');
    var $lacunas = $('.lacunas');

};
```
Nossa fun��o declara em seu escopo as vari�veis $entrada e $lacunas. O prefixo $ � utilizado para deixar claro para quem esta lendo o c�digo que elas armazenam objetos criados atrav�s do jQuery. N�o � a toa que utilizamos $('#entrada') e $('.lacunas') para selecionarmos o campo de entrada do jogador e a lista de lacunas. Fica evidente que o primeiro � para podermos capturar o que o jogador digitou, j� o segundo, n�o t�o evidente assim, � a <ul class="lacunas">, aquela que receber� dinamicamente elementos do tipo <li> que exibir�o cada item do array de jogo.getLacunas().

Da mesma maneira que fizemos no cap�tulo anterior, seguem as fun��es que precisaremos implementar. Elas lidar�o com a captura da palavra secreta, exibi��o das lacunas com base nessa palavra e mudar� o texto da propriedade placeholder de $entrada para que estejamos visualmente preparados para entrarmos na etapa de chute:
```html
var criaController = function (jogo) {

    var $entrada = $('#entrada');
    var $lacunas = $('.lacunas');

    // consulta jogo.getLacunas() e exibe para o usu�rio cada lacuna 

    var exibeLacunas = function () {
        console.log('falta implementar');
    };

    // muda o texto do placeHolder do campo de entrada    
    var mudaPlaceHolder = function (texto) {

        console.log('falta implementar');
    };

    // passa para jogo.setPalavraSecreta() o valor digitado pelo jogador e chama o a fun��o `exibeLacunas()` e `mudaPlaceHolder()` definidas no controller. 

    var guardaPalavraSecreta = function () {

        console.log('falta implementar');
    };

    // faz a associa��o do evento keypress para capturar a entrada do usu�rio toda vez que ele teclar ENTER
    var inicia = function () {

        console.log('falta implementar');
    };

    // retorna um objeto com a propriedade inicia, que deve ser chamada assim que o controller for criado. 
    return { inicia: inicia };
};
```
O ponto de partida � a fun��o inicia(). Ela deve ser capaz de adicionar o evento keypress em $entrada. Todavia, s� podemos computar o evento se o usu�rio pressionar a tela ENTER. Al�m disso, ele deve ser inteligente para saber em qual etapa do jogo estamos para lidar diferentemente com a entrada do usu�rio, pois pode ser que ele esteja na primeira etapa (palavraSecreta) ou segunda etapa (chute).

O papel da fun��o inicia()
Nesse sentido, j� temos o c�digo de inicia() pronto, como ponto de partida. O c�digo inicial deve estar assim:
```html
var criaController = function (jogo) {

    var $entrada = $('#entrada');
    var $lacunas = $('.lacunas');

    var exibeLacunas = function () {
        console.log('falta implementar');
    };

    var mudaPlaceHolder = function (texto) {

        console.log('falta implementar');
    };

    var guardaPalavraSecreta = function () {

        console.log('falta implementar');
    };

    var inicia = function () {

        $entrada.keypress(function (event) {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        alert('etapa 1 - falta implementar');
                        break;
                    case 2:
                        alert('etapa 2 - falta implementar');
                        break;
                }
            }
        });
    }
    return { inicia: inicia };
};
```
O arquivo gallows/index.html:
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/sprite.css">
    <link rel="stylesheet" href="css/lacuna.css">
    <title>Jogo da Forca</title>
</head>
<body>
    <div class="jumbotron">
        <h2 class="text-center">Jogo da forca</h2>
    </div>
    <div class="container">
        <div class="sprite"></div>
        <ul class="lacunas text-center"></ul>

        <div class="text-center">
        <input id="entrada" 
            class="entrada"
            placeholder="Palavra secreta" autofocus>
        </div>
    </div>

    <script src="js/jquery.min.js"></script>
    <script src="js/sprite.js"></script>
    <script src="js/jogo.js"></script>
    <script src="js/controller.js"></script>
    <script>
        var sprite = createSprite('.sprite');
        var jogo = criaJogo(sprite);
        criaController(jogo);
    </script>
</body>
</html>
```
O mesmo c�digo pode ser escrito da seguinte maneira, sem a necessidade de se declarar as vari�veis sprite e jogo:
```html
<script>
    criaController(criaJogo(createSprite('.sprite'))).inicia();
</script>
```
Talvez essa est�gica seja melhor para alguns:
```html
<script>
    criaController(
        criaJogo(
            createSprite('.sprite')
        )
    ).inicia();
</script>
```
J� somos capazes de ver o alert sendo exibido toda vez que clicarmos enter.

<h2>Gabarito</h2>
Vamos come�ar pela fun��o guardaPalavraSecreta:
```html
var guardaPalavraSecreta = function () {

    // passa para o jogo o chute digitado pelo usu�rio
    jogo.setPalavraSecreta($entrada.val().trim());

    // limpa o campo de entrada 

    $entrada.val('');

    // exibe para o usu�rio as lacunas de jogo.getLacunas();
    exibeLacunas();

    // muda o texto do placeholder para `chute`.
    mudaPlaceHolder('chute');
};
```
Fica evidente que precisamos implementar as fun��es exibeLacunas() e mudaPlaceHolder(). Vamos implementar a �ltima primeiro, devido a sua brevidade:
```html
var mudaPlaceHolder = function (texto) {

    $entrada
        .val('')
        .attr('placeholder', texto);
};
```
Usamos val('') para limpar o campo e attr() para mudarmos o valor de um atributo atrav�s do jQuery.

Agora, vamos para a implementa��o de exibeLacunas().

Sabemos que $lacunas � o jQuery Object que aponta para o elemento <ul class="lacunas"> de index.html. Precisamos adicionar dinamicamente as lacunas, mas antes de qualquer opera��o, faremos $lacunas.empty(). A fun��o empty() remove todos os elementos filhos de um elemento pai. Estamos realizando este processo para garantirmos que toda vez que exibeLacunas for chamado, ele remover� todos os elementos j� existentes para exibir elementos atualizados:
```html
var exibeLacunas = function () {

    $lacunas.empty();

};
```
Agora, vamos iterar em jogo.getLacunas() e para cada lacuna criaremos dinamicamente uma <li> com a classe lacuna e com texto o valor da lacuna que estamos iterando:
```html
    var exibeLacunas = function () {

        $lacunas.empty();
        jogo.getLacunas().forEach(function (lacuna) {
            $('<li>')
                .addClass('lacuna')
                .text(lacuna)
                .appendTo($lacunas);
        });
    };
```
Vamos entender essas instru��es. Atrav�s de forEach, estamos iterando na lista retornada por jogo.getLacunas(). Para cada lacuna, criamos uma <li> dinamicamente atrav�s de $('<li>'). Vejam, n�o � um seletor CSS, mas uma tag passada como par�metro para a fun��o do jQuery e essa mudan�a j� � suficiente para que o JQuery entenda que estamos criando um novo elemento. Em seguida, encadeamos as fun��es addClass e text para adicionarmos a classe lacuna e o texto da lacuna que estamos iterando. Por fim, atrav�s de appendTo indicamos em qual elemento do DOM desejamos adicionar o novo item que criamos, no caso, queremos adicionar em $lacunas, aquele elemento do DOM que referencia <li class="lacunas"> que inicializamos logo no in�cio da chamada de iniciaController.

Excelente, isso j� � suficiente para entrarmos com a palavra secreta e vermos as lacuans em branco sendo exibidas, inclusive a altera��o do valor do place holder.

Nosso c�digo final ficar� assim:
```html
var criaController = function (jogo) {

    var $entrada = $('#entrada');
    var $lacunas = $('.lacunas');

    var exibeLacunas = function () {

        $lacunas.empty();
        jogo.getLacunas().forEach(function (lacuna) {
            $('<li>')
                .addClass('lacuna')
                .text(lacuna)
                .appendTo($lacunas);
        });
    };

    var mudaPlaceHolder = function (texto) {

        $entrada
            .val('')
            .attr('placeholder', texto);
    };

    var guardaPalavraSecreta = function () {

        jogo.setPalavraSecreta($entrada.val().trim());
        $entrada.val('');
        exibeLacunas();
        mudaPlaceHolder('chute');
    };

    var inicia = function () {

        $entrada.keypress(function (event) {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        break;
                    case 2:
                        leChute();
                }
            }
        });
    }

    return { inicia: inicia };
};
```
Menos � mais
Por incr�vel que parece, utilizamos muito pouco e pontualmente o jQuery. Quando o assunto � manipula��o de DOM, menos � sempre mais!

<h2>Apresenta��o - PARTE 2</h2>
Chegou a hora de lidarmos com o chute. Para isso, precisaremos criar a fun��o leChute. O esqueleto do nosso c�digo com tudo o que j� fizemos at� agora fica assim:

var criaController = function (jogo) {

    var $entrada = $('#entrada');
    var $lacunas = $('.lacunas');

    var exibeLacunas = function () {

        $lacunas.empty();
        jogo.getLacunas().forEach(function (lacuna) {
            $('<li>')
                .addClass('lacuna')
                .text(lacuna)
                .appendTo($lacunas);
        });
    };

    var mudaPlaceHolder = function (texto) {

        $entrada
            .val('')
            .attr('placeholder', texto);
    };

    var guardaPalavraSecreta = function () {

        jogo.setPalavraSecreta($entrada.val().trim());
        $entrada.val('');
        exibeLacunas();
        mudaPlaceHolder('chute');
    };

    // esqueleto da fun��o

    var leChute = function () {

       console.log('falta implementar');
    };


    var inicia = function () {

        $entrada.keypress(function (event) {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        break;
                    case 2:
                        // chama a fun��o
                        leChute();
                        break;
                }
            }
        });
    }

    return { inicia: inicia };
};
A implementa��o de leChute ainda n�o entrar� no m�rito se o jogador acertou ou n�o. Ela deve ser capaz de exibir as lacunas atualizadas com o chute do jogador caso ele tenha acertado ou atualizar o sprite caso tenha errado. Lembre-se que a l�gica de acertou ou erro foi definida em jogo.

<h2>Gabarito</h2>
A fun��o leChute n�o possui qualquer l�gica, a n�o ser a opera��o de leitura da entrada do usu�rio. Ela delega para outras fun��es o restante das opera��es:
```html
var leChute = function () {

    // l� a entrada do usu�rio
    jogo.processaChute($entrada.val().trim().substr(0, 1));

    // limpa a entrada do usu�rio
    $entrada.val('');
    // solicita ao jogo que processe o chute. Se errou, o pr�prio jogo solicita ao sprite que v� para o pr�ximo frame

    // exibe as lacunas para refletir poss�veis acertos
    exibeLacunas();
}
```
O c�digo final ficar� assim:
```html
var criaController = function (jogo) {

    var $entrada = $('#entrada');
    var $lacunas = $('.lacunas');

    var exibeLacunas = function () {

        $lacunas.empty();
        jogo.getLacunas().forEach(function (lacuna) {
            $('<li>')
                .addClass('lacuna')
                .append(lacuna)
                .appendTo($lacunas);
        });
    };

    var mudaPlaceHolder = function (texto) {

        $entrada
            .val('')
            .attr('placeholder', texto);
    };

    var guardaPalavraSecreta = function () {

        jogo.setPalavraSecreta($entrada.val().trim());
        $entrada.val('');
        exibeLacunas();
        mudaPlaceHolder('chute');
    };

    var leChute = function () {

        var chute = $entrada.val().trim().substr(0, 1);
        $entrada.val('');
        jogo.processaChute(chute);
        exibeLacunas();
    };

    var inicia = function () {

        $entrada.keypress(function (event) {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        break;
                    case 2:
                        leChute();
                        break;
                }
            }
        });
    }

    return { inicia: inicia };
};
```

<h2>Apresenta��o - PARTE 3</h2>
At� agora, visualmente, o jogador n�o sabe se ganhou ou perdeu. Este teste deve ser feito a cada chute. Ali�s, j� temos a fun��o leChute e s� precisamos adicionar nesta fun��o a l�gica de acertou ou perdeu nela. Voc� utilizar� a fun��o alert() para exibir a mensagem de sucesso ou fracasso. Por fim, independente se o jogador ganhou ou perdeu, reiniciaremos o jogo. M�os na massa!

<h2>Gabarito</h2>
Vamos come�ar pela fun��o reinicia():
```html
    var reinicia = function () {

        // limpa todas as lacunas
        $lacunas.empty();
        // volta para a mensagem da etapa 1
        mudaPlaceHolder('Palavra secreta');
        // solita ao jogo que reinicia 
        jogo.reinicia();
    };
```
Agora, vamos implementar a l�gica de ganhou ou perda em leChute():
```html
    var leChute = function () {

        var chute = $entrada.val().trim().substr(0, 1);
        $entrada.val('');
        jogo.processaChute(chute);
        exibeLacunas();

        if (jogo.ganhouOuPerdeu()) {
            if (jogo.ganhou()) {
                alert('Ganhou!');
            } else if (jogo.perdeu()) {
                alert('Uma pena, tente novamente.');
            }
            reinicia();
        }
    };
```
Resolvendo o problema da atualiza��o do DOM
No entanto, apesar de funcional, dependendo do navegador, pode ser que as mensagens sejam exibidas antes da atualiza��o na tela do �ltimo chute realizado pelo usu�rio. Para evitarmos que isso aconte�a, atrasar a exibi��o das mensagens em 200 milissegundos ser� suficiente para que o �ltimo chute seja renderizado. Nosso c�digo final ficar� assim:
```html
var criaController = function (jogo) {

    var $entrada = $('#entrada');
    var $lacunas = $('.lacunas');

    var exibeLacunas = function () {

        $lacunas.empty();
        jogo.getLacunas().forEach(function (lacuna) {
            $('<li>')
                .addClass('lacuna')
                .text(lacuna)
                .appendTo($lacunas);
        });
    };

    var mudaPlaceHolder = function (texto) {

        $entrada
            .val('')
            .attr('placeholder', texto);
    };

    var guardaPalavraSecreta = function () {

        jogo.setPalavraSecreta($entrada.val().trim());
        $entrada.val('');
        exibeLacunas();
        mudaPlaceHolder('chute');
    };

    var leChute = function () {

        var chute = $entrada.val().trim().substr(0, 1);
        $entrada.val('');
        jogo.processaChute(chute);
        exibeLacunas();

        if (jogo.ganhouOuPerdeu()) {

            setTimeout(function () {
                if (jogo.ganhou()) {
                    alert('Ganhou!');
                } else if (jogo.perdeu()) {
                    alert('Uma pena, tente novamente.');
                }
                jogo.reinicia();
                reinicia();
            }, 200);
        }
    };

    var reinicia = function () {

        $lacunas.empty();
        mudaPlaceHolder('Palavra secreta');
        jogo.reinicia();
    };

    var inicia = function () {

        $entrada.keypress(function (event) {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        break;
                    case 2:
                        leChute();
                        break;
                }
            }
        });
    }

    return { inicia: inicia };
};
```

<h2>Lidando com dados inv�lidos</h2>
Nossa aplica��o esta pronta, mas o que acontecer� se o usu�rio teclar ENTER sem definir a palavra secreta, inclusive na hora do chute? Nossa aplica��o n�o se comportar� bem, entrar� em um loop infinito e travar�. Para resolver isso, podemos colocar uma l�gica de valida��o em nosso jogo.

Nas fun��es processaChute e setPalavaSecreta podemos lan�ar uma exce��o:
```html
var processaChute = function (chute) {
   if(!chute.trim()) throw Error('Chute inv�lido');
   // c�digo posterior omitido
};
var setPalavraSecreta = function (palavra) {
   if(!palavra.trim()) throw Error('Palavra inv�lida');
   // c�digo posterior omitido
};
```
Agora, toda vez que o usu�rio executar a opera��o inv�lida, a aplica��o n�o travar� e ser� exibida no console a mensagem de erro. Mas ser� que podemos exib�-la para ele?

Podemos capturar no controller os erros lan�ados pelas fun��es com uso do try e catch. Nosso c�digo ficar� assim:
```html
var criaController = function (jogo) {

    var $entrada = $('.entrada');
    var $lacunas = $('.lacunas');

    var exibeLacunas = function () {
        $lacunas.empty();
        jogo.getLacunas().forEach(function (lacuna) {
            $('<li>')
                .addClass('lacuna')
                .text(lacuna)
                .appendTo($lacunas);
        });
    };

    var mudaPlaceHolder = function (texto) {

        $entrada.attr('placeholder', texto);
    };

    var guardaPalavraSecreta = function () {

        try {
            jogo.setPalavraSecreta($entrada.val().trim());
            $entrada.val('');
            mudaPlaceHolder('chuta');
            exibeLacunas();
        } catch(err) {
            alert(err.message);
        }

    };

    var reinicia = function() {

        jogo.reinicia();
        $lacunas.empty();
        mudaPlaceHolder('palavra secreta');
    };

    var leChute = function () {

        try {
            jogo.processaChute($entrada.val().trim().substr(0, 1));
            $entrada.val('');
            exibeLacunas();

            if(jogo.ganhouOuPerdeu()) {

                setTimeout(function() {
                    if(jogo.ganhou()) {
                        alert('Parab�ns, voc� ganhou');
                    } else if (jogo.perdeu()) {
                        alert('Que pena, tente novamente')
                    }
                    reinicia();                    
                }, 200);
            }
        } catch(err) {
            alert(err.message);
        }
    };

    var inicia = function () {

        $entrada.keypress(function (event) {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        break;
                    case 2:
                        leChute();
                        break;
                }
            }
        });
    };

    return { inicia: inicia };
};
```
Todavia, lembre-se que c�digo ass�ncrono n�o pode ser capturado com try e catch, porque ele roda fora da pilha de execu��o do nosso c�digo.

<h2>Com f�cil manuten��o, podemos deixar ainda melhor nossa aplica��o</h2>

Nossa aplica��o esta pronta, mas ela pode ficar ainda melhor. Por exemplo, podemos recusar uma palavra secreta se ela n�o tiver um tamanho m�nimo, ou quem sabe aumentarmos a dificuldade do jogo pulando de dois em dois frames no lugar de um. O mais importante neste ponto � reconhecer onde essas altera��es seriam necess�rias e pela estrutura do nosso problema isso fica f�cil.

Lembre-se que o maior tempo de vida de uma aplica��o � sua fase de manuten��o e, escrever um c�digo f�cil de ler e de manter, � garantir a longo prazo o sucesso da aplica��o.

Outro ponto interessante, � como isolamos a l�gica do jogo sem mistur�-la com manipula��o de DOM, fica mais f�cil testar o core do nosso jogo em ferramentas de testes como Jasmine. Inclusive a Alura possui curso dessa ferramenta!

----------------------------------------------------------------------------------------------
<h1>Se��o 05 - B�nus: indo al�m com ES2015(ES6)</h1>

Apesar de a carreira na qual este projeto faz parte n�o abordar ES2015 (ES6) podemos modificar nosso c�digo para que use alguns dos recursos desta nova vers�o. Alura possui cursos de ES6 que podem agregar ainda mais no seu cabedal de conhecimento. Aqui, faremos um preview do que voc� pode aprender conosco.

let e const
A partir do ECMASCRIT 2015 (ES6) foi introduzida duas novas sintaxes para substituir declara��o de vari�veis com var, s�o elas let e const. Todavia, quais problemas elas v�m resolver?

Vejamos um simples exemplo:
```html
for(var i = 1; i <= 10; i++) {
    console.log(i);
}
```
console.log(i); // qual ser� o valor de i?
No exemplo anterior, qual ser� o valor da �ltima instru��o? Se voc� respondeu 11 acertou. Em linguagens como C ou Java i n�o seria acess�vel fora do bloco do for, diferente em JavaScript, pois vari�veis declaradas com var possuem escopo de fun��o e n�o de bloco, mesmo quando declaradas dentro de um bloco.

Outro ponto a destacar de var � que vari�veis declaradas com elas podem ser redeclaradas sem que o interpretador reclame (a n�o ser que o "use strict"; seja adicionado no script ativando um modo mais criterioso). Vejamos:
```html
var nome = 'cangaceiro';
nome = 'Fl�vio';
var nome = 'Almeida'; // � aceito!
```
Podemos resolver esses dois problemas que acabamos de ver declarando as vari�veis com let:
```html
for(let i = 1; i <= 10; i++) {
    console.log(i);
}
```
console.log(i); // erro, n�o � acess�vel fora do bloco fort
let nome = 'cangaceiro';
nome = 'Fl�vio';
let nome = 'Almeida'; // erro, n�o pode declarar novamente uma vari�vel que j� foi declarada
Excelente, e onde entra o const nessa hist�ria? Quando usado, ele n�o permite que seja mais utilizado o perador = para atriburi um novo valor a vari�vel. Vejamos:

const ID = 10;
ID = 100; // erro, n�o pode atribuir um novo valor
Como n�o podemos usar o operador = mais de uma vez, somos obrigados a atribuir o valor da vari�vel, ou seja, somos obrigado a declar�-la e inicializ�-la ou teremos um erro.

Ent�o, dentro do que acabamos de ver, podemos usar let e const em diversos pontos do nosso c�digo. Vejamos:
```html
const criaJogo = function(sprite) {

    let etapa = 1;
    let lacunas = [];
    let palavraSecreta = '';

    const criaLacunas =  function() {

        for (let i = 0; i < palavraSecreta.length; i++) {
            lacunas.push('');
        }
    };

    const proximaEtapa = function() {
        etapa = 2;
    };

    const setPalavraSecreta = function (palavra) {

        palavraSecreta = palavra;
        criaLacunas();
        proximaEtapa();
    };

    const getLacunas = function () {

        return lacunas;
    };

    const getEtapa = function () {

        return etapa;
    }

    const processaChute = function(chute) {
        // aten��o, precisou separar const e var, porque resultado n�o � inicializada
        const exp = new RegExp(chute, 'gi');
        var resultado
            ,acertou = false;

        while (resultado = exp.exec(palavraSecreta))
            acertou = lacunas[resultado.index] = chute;

        if (!acertou) sprite.nextFrame();
    };

    const ganhou = function() {

        return !lacunas.some(function(lacuna) {
            return lacuna == ''
        });
    };

    const perdeu = function () {

        return sprite.isFinished();
    };

    const ganhouOuPerdeu = function () {

        return ganhou() || perdeu();
    };

    const reinicia = function () {

        etapa = 1;
        palavraSecreta = '';
        lacunas = [];
        sprite.reset();
    };

    return {
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa, 
        processaChute: processaChute, 
        ganhou: ganhou,
        perdeu: perdeu,
        ganhouOuPerdeu: ganhouOuPerdeu,
        reinicia: reinicia
    };
};
```
Faz sentido nossas declara��es de fun��es serem declaradas com const porque n�o queremos que algu�m acidentalmente atribua um novo valor para elas. J� a vari�vel current que precisa ser incrementada precisa ser declarada com let, isto porque tanto o p�s e pr� incrementos s�o um atalho para o uso do operador =.

Agora, podemos ver outro recurso do ES2015 (ES6) que pode nos ajudar a escrever um c�digo mais enxuto.

Arrow function
Excelente, mas podemos lan�ar m�o das arrow functions que inicialmente � uma forma mais sucinta de declarar fun��es, mas nos cursos avan�ados de JavaScript aqui da Alura que abordam esse recurso voc� ver� que h� algumas diferen�as. Todavia, para nosso programa, entender que s�o uma forma sucinta j� � suficiente.

Veja como uma de nossas fun��es declaradas com arrow function (se voc� n�o declarou as fun��es como express�o, n�o poder� usar arrow function, ou seja, n�o h� function declaration com arrow function, apenas function expression):
```html
const perdeu = () => {

    return sprite.isFinished();
};
```
Agora, a processaChute:
```html
const processaChute = (chute) => {

    const exp = new RegExp(chute, 'gi');
    var resultado
        ,acertou = false;

    while (resultado = exp.exec(palavraSecreta))
        acertou = lacunas[resultado.index] = chute;

    if (!acertou) sprite.nextFrame();
};
```
Quando uma arrow function possui apenas um par�metro, podemos omitir os par�nteses:
```html
const processaChute = chute => {

    const exp = new RegExp(chute, 'gi');
    var resultado
        ,acertou = false;

    while (resultado = exp.exec(palavraSecreta))
        acertou = lacunas[resultado.index] = chute;

    if (!acertou) sprite.nextFrame();
};
```
Uma outra caracter�stica � quando o bloco de uma arrow function possui apenas uma instru��o, podemos remover seu bloco e colocar a instru��o diretamente sem a necessidade de utilizar return que j� � considerado implicitamente nesta forma abreviada de declara��o. Vejamos como perdeu() ficar�:

const perdeu = () => sprite.isFinished();
Nosso c�digo com arrow function fica assim:
```html
const criaJogo = sprite => {

    let etapa = 1;
    let lacunas = [];
    let palavraSecreta = '';

    const criaLacunas = () => {

        for (let i = 0; i < palavraSecreta.length; i++) {
            lacunas.push('');
        }
    };

    const proximaEtapa = () => etapa = 2;

    const setPalavraSecreta = palavra => {

        palavraSecreta = palavra;
        criaLacunas();
        proximaEtapa();
    };

    const getLacunas = () => lacunas;

    const getEtapa = () => etapa;

    const processaChute = chute => {

        const exp = new RegExp(chute, 'gi');
        var resultado
            ,acertou = false;

        while (resultado = exp.exec(palavraSecreta))
            acertou = lacunas[resultado.index] = chute;

        if (!acertou) sprite.nextFrame();
    };

    const ganhou = () => !lacunas.some(lacuna => lacuna == '');

    const perdeu = () => sprite.isFinished();

    const ganhouOuPerdeu = () => ganhou() || perdeu();

    const reinicia = () => {

        etapa = 1;
        palavraSecreta = '';
        lacunas = [];
        sprite.reset();
    };

    return {

        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa, 
        processaChute: processaChute, 
        ganhou: ganhou,
        perdeu: perdeu,
        ganhouOuPerdeu: ganhouOuPerdeu,
        reinicia: reinicia
    };
};
```
Atalho para declara��o de objetos literais
Vamos lan�ar nosso olhar para a �ltima instru��o de criaJogo(), aquela que retorna um objeto com algumas propriedades:
```html
return {
    setPalavraSecreta: setPalavraSecreta,
    getLacunas: getLacunas,
    getEtapa: getEtapa, 
    processaChute: processaChute, 
    ganhou: ganhou,
    perdeu: perdeu,
    ganhouOuPerdeu: ganhouOuPerdeu,
    reinicia: reinicia
};
```
Quando declaramos um objeto com a sintaxe {} estamos declarando-o na forma literal. ES2015 (ES6) criou um atalho que pode ser usado toda vez que o nome da propriedade � igual ao nome da vari�vel que ser� atribu�da a propriedade. Nesse caso, basta declararmos a propriedade no objeto:
```html
return {
    setPalavraSecreta,
    getLacunas,
    getEtapa, 
    processaChute, 
    ganhou,
    perdeu,
    ganhouOuPerdeu,
    reinicia
};
```

<h2>O c�digo do Sprite</h2>

N�o h� grandes novidades. Basta utilizarmos let e const onde se aplicarem e transformarmos nossas function expressions em arrow functions, inclusive usar o atalho para declara��o de objetos na forma literal.
```html
const createSprite = selector => {

    const hasNext = () => current + 1 <= last;

    const moveFrameTo = (from, to) =>
        $el.removeClass(sprites[from])
            .addClass(sprites[to]);

    const nextFrame = () => {

        if (hasNext()) moveFrameTo(current, ++current);
    }

    const reset = () => {

        moveFrameTo(current, 0)
        current = 0;
    }

    const isFinished = () => !hasNext();

    const $el = $(selector);

    const sprites = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];

    let current = 0;

    const last = sprites.length - 1;

    $el.addClass(sprites[current]);

    return { nextFrame, reset, isFinished };
}
```

Muito mais enxuto n�o?

<h2>O c�digo do controller</h2>
Migrar o arquivo controller.js � aplicar as mesmas melhorias que realizamos nos scripts anteriores:
```html
const criaController = jogo => {

    const $entrada = $('#entrada');
    const $lacunas = $('.lacunas');

    const exibeLacunas = () => {

        $lacunas.empty();
        jogo.getLacunas().forEach(lacuna =>
            $('<li>')
                .addClass('lacuna')
                .text(lacuna)
                .appendTo($lacunas));
    };

    const mudaPlaceHolder = texto => 
        $entrada
            .val('')
            .attr('placeholder', texto);

    const guardaPalavraSecreta = () => {

        jogo.setPalavraSecreta($entrada.val().trim());
        $entrada.val('');
        exibeLacunas();
        mudaPlaceHolder('chute');
    };

    const leChute =  () => {

        var chute = $entrada.val().trim().substr(0, 1);
        $entrada.val('');
        jogo.processaChute(chute);
        exibeLacunas();

        if (jogo.ganhouOuPerdeu()) {

            setTimeout(() => {
                if (jogo.ganhou()) {
                    alert('Ganhou!');
                } else if (jogo.perdeu()) {
                    alert('Uma pena, tente novamente.');
                }
                jogo.reinicia();
                reinicia();
            }, 200);
        }
    };

    const reinicia = () => {

        $lacunas.empty();
        mudaPlaceHolder('Palavra secreta');
        jogo.reinicia();
    };

    const inicia = () => {

        $entrada.keypress(event => {

            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        break;
                    case 2:
                        leChute();
                        break;
                }
            }
        });
    }

    return { inicia: inicia };
};
```

