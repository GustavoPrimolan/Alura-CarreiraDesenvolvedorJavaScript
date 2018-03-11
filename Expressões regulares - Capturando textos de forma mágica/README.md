-------------------------------------------------------------------------
<h1>Come�ando com Regex</h1>

<h2>Come�ando a aprender Regex com Javascript</h2>

- Express�es Regulares (Regex)
- Cadeias de caract�res que utilizam um padr�o para encontrar um certo texto.

O que � uma Express�o Regular?
Uma express�o regular, ou Regex, s�o padr�es utilizados para identificar determinadas combina��es ou cadeias de caracteres em uma string. Ela faz parte do dia a dia de todos os programadores e administradores de infra. Por meio dela, podemos validar a entrada de usu�rios ou encontrar alguma informa��o em logs, documenta��o ou sa�da de comando. O mais legal � que as regex s�o escritas independentes de uma linguagem, como JavaScript ou C#. As express�es s�o definidas em sua pr�pria linguagem formal e uma vez aprendida, podemos aplicar o conhecimento dentro da linguagem de nossa prefer�ncia. Em outras palavras, linguagens como Java, JavaScript, C# e v�rias outras possuem uma implementa��o das express�es regulares e sabem interpret�-la.

Neste curso, vamos focar nessa linguagem formal, mas claro, tamb�m mostraremos como execut�-la nas plataformas diversas.

Onde queremos chegar? Entender, por exemplo, uma regex assim:

<(img)\s+src="(.+)"(?:>(?:.*)<\/\1>|\s+\/>)
E saber execut�-la utilizando a sua linguagem. No �ltimo cap�tulo desse curso mostraremos como executar uma regex com Java, C#, PHP, Python, Ruby e JavaScript.

Ambiente de execu��o
Para testar as regex durante o curso, preparamos uma p�gina HTML e um c�digo JavaScript que interpreta a regex. Voc� pode baixar o projeto aqui. Basta extrair o ZIP e abrir o arquivo index.html.

Ao abrir, podemos ver que a p�gina mostra um formul�rio para executar e testar as regex. Vamos utilizar esse formul�rio para analisar as express�es.



Repare que j� estamos usando um vocabul�rio focado na regex. A string que queremos usar na busca, no exemplo da imagem, a string imagem.png � chamada de alvo, ou target. A express�o regular, na imagem .*png, estamos chamando de pattern. Os resultados s�o os matches.

J� estamos aplicando a primeira regex, estamos procurando algum texto que termine com png. O ponto (.) � um caractere especial e significa qualquer caractere. Ou seja, a regex n�o interpreta o ponto literalmente e sim faz um match para qualquer char.

O asterisco (*) � outro meta-char com o significado "zero, um ou mais vezes". Ao adicionar o asterisco (*), conseguimos definir a quantidade, por isso ele tamb�m � chamado de quantifier. O ponto (.) e asterisco (*) fazem parte dos metacaracteres que veremos durante o curso.

Apresentando o c�digo
Qualquer regex precisa ser interpretada por meio de uma regex engine. Esse motor � uma parte de software que processa a express�o, tentando achar o padr�o dentro da string dada, devolvendo os resultados. Normalmente a regex engine faz parte da aplica��o maior, para executar uma valida��o ou busca de uma string.

No nosso caso, usamos uma regex engine baseada na linguagem JavaScript. No treinamento, veremos ainda como usar express�es regulares em outras linguagens, como Java, C# ou Ruby.

<img src="imgs/regex-engine.png"/>

Vamos dar uma olhada na fun��o executaRegex, dentro do arquivo regex.js. Nela criamos o objeto que sabe interpretar a express�o regular. O JavaScript chama esse objeto de RegExp:

var objetoRegex = new RegExp(textoPattern, 'g');
No construtor passamos o pattern, aquilo que colocamos no input Pattern da p�gina index.html. A letra g � uma flag do mundo JavaScript e significa global, para aplicar a regex na string inteira (e n�o parar no primeiro match) .

Ap�s a inicializa��o do objeto regex, podemos execut�-lo usando o m�todo exec, que recebe como par�metro o alvo:

while (resultado = objetoRegex.exec(textoTarget)) {

    //codigo omitido

}
O m�todo exec devolve um resultado que possui a string match e outras informa��es, como a posi��o/index. Repare que estamos fazendo um la�o sempre pedindo o pr�ximo resultado.

O resto do c�digo do arquivo regex.js se preocupa com a leitura, valida��o e apresenta��o dos dados.

<h2>Regex Engine</h2>
O que � um Regex-Engine?
R: � um software para interpretar e aplicar a regex.
Uma express�o regular sozinha � apenas uma string. � preciso ter um software para interpretar a regex e aplic�-la no alvo. Esse software � o Regex Engine que existe para a maioria das plataformas de desenvolvimento, como JavaScript, C#, Python, Ruby ou PHP.

<h2>Meta Caracteres</h2>

Ainda estamos engatinhando no mundo de Express�es Regulares mas j� conhecemos alguns meta caracteres.
Quais dos caracteres abaixo n�o representa um meta-char?
R: Resposta correta: O caractere "e comercial" (&) n�o � uma meta-char.

Explica��o: Existem alguns caracteres que possuem um significado especial para o regex engine. Especial significa que o regex engine n�o interpreta o valor literal e sim diferente. Esses caracteres s�o chamados de meta caracteres.

Nessa aula j� vimos alguns:

. o "ponto" que significa qualquer char
* o asterisco que serve para definir uma quantidade de chars, zero ou mais vezes
{e } as chaves que servem para definir uma quantidade de caracteres espec�ficas que � desejado encontrar
Por exemplo:

a{3} letra a 3 vezes.
\d* um digito zero ou mais vezes
Lembrando tamb�m, se quisermos procurar pelo * ou . literalmente (sem significado especial), devemos utilizar o caractere \

Durante o curso veremos ainda mais meta chars!

<h2>O nosso primeiro problema</h2>
J� vimos um pequeno exemplo de regex e j� sabemos que existem metacaracteres (meta-char) que possuem significados especiais, como o ponto (.) ou asterisco (*). No nosso primeiro exemplo para valor, vamos focar no CPF.

Uma tarefa muito comum no dia a dia do desenvolvedor � parsear um arquivo linha a linha, onde cada linha representa um dado ou registro. H� v�rios tipos de arquivos, e nesse curso vamos usar o exemplo de arquivo CSV, ou Comma-separated Values, por exemplo:

Jo�o Fulano,123.456.789-00,21 de Maio de 1993,(21) 3079-9987,Rua do Ouvidor,50,20040-030,Rio de Janeiro
Maria Fulana, 98765432100,11 de Abril de 1995,(11) 933339871,Rua Vergueiro,3185,04101-300,S�o Paulo
denise teste, 987.654.321.00,28 de Dezembro de 1991,(31)45562712,SCS Qd. 8 Bl. B-50,11,70333-900,Rio Grande
Ent�o, em cada linha temos v�rios valores separados pela v�rgula, por exemplo:

Jo�o Fulano,123.456.789-00,21 de Maio de 1093,(21) 3079-9987,Rua Buarque de Macedo,67,22220-232,Rio de Janeiro
Encontrando n�meros
Repare que o segundo valor � um CPF que precisamos extrair dessa linha. Voc� conhece um CPF e sabe o padr�o de caracteres dele, s� falta traduzir o seu conhecimento para a linguagem que a regex engine entende!

Um CPF s�o 9 n�meros, separados em blocos de 3 n�meros por um ponto, mais um h�fen e mais dois n�meros. Para representar um n�mero, podemos utilizar uma caracter class, que � um s�mbolo especial para representar um conjunto de caracteres. No mundo de regex, um n�mero � representado pelo \d.

O primeiro quantifier
Agora queremos que esse n�mero apare�a 3 vezes. J� vimos que o asterisco (*) significa 0, 1 ou mais vezes, ou seja, n�o atende. Queremos exatamente 3 n�meros que podemos definir pela express�o \d{3}.

Dentro das chaves definimos a quantidade que o caractere deve estar presente. Com isso, j� podemos encontrar 3 d�gitos. Agora vem o "ponto" s� que aprendemos que esse caractere possui um significado especial. No entanto queremos procurar o ponto literalmente e n�o qualquer caractere. Para deixar claro que o ponto deve ser ponto apenas, � preciso escapar o caractere com \. Assim temos:

\d{3}\.
Sabendo disso podemos definir o resto do CPF:

\d{3}\.\d{3}\.\d{3}\-\d{2}
Repare que o usamos um h�fen seguido por apenas 2 d�gitos.

<h2>M�o na massa - Encontrando o IP</h2>

O n�mero do IP de um computador � gerado ao conect�-lo � internet, esse n�mero permite que o dispositivo seja identificado e capaz de enviar/receber informa��es. Abaixo h� alguns exemplos de IP:

126.1.112.34

128.126.12.244

192.168.0.34

Cada grupo pode ter de um � tr�s algarismos. Considerando somente essa regra, como podemos encontrar o padr�o desses n�meros?

R:\\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}

 
Um IP tem quatro grupos de no m�nimo um e m�ximo tr�s n�meros. Repare que estamos escapando o ponto (.) entre os n�meros, que s�o blocos de d�gitos \d entre 1 e 3 caracteres {1,3}


<h2>M�o na massa - Encontrando o CEP</h2>

Agora tente definir a regex para encontrar o CEP dentro de uma linha no nosso CSV, por exemplo:

Jo�o Fulano,123.456.789-00,21 de Maio de 1993,(21) 3079-9987,Rua do Ouvidor,50,20040-030,Rio de Janeiro
M�os � obra!

Um CEP n�o h� muito mist�rio, s�o 5 d�gitos -(h�fen) 3 d�gitos.

Traduzindo isso para uma express�o regular:

\d{5}-\d{3}

<h2>M�o na massa - Buscando o telefone</h2>

Usando o que aprendemos at� ent�o, qual padr�o podemos utilizar para encontrar o n�mero telef�nico? Por exemplo: (21) 3216-2345

Dica: Os par�nteses s�o meta-chars e precisam ser utilizados para capturar o valor literal: \( e \)

Regex correta: \(\d{2}\) \d{4}-\d{4}

R:Quebrou a cabe�a? O par�nteses � um meta caracter de grupo, algo que ainda aprenderemos. Sendo assim, precisamos escap�-lo com um \ quando temos o interesse de encontr�-lo em uma string.

A regex n�o est� perfeita pois o telefone poderia variar, por exemplo ter com 9 n�meros ou um 0 na frente do DDD (al�m de definir melhor o espa�o). Nos pr�ximos cap�tulos veremos como definir essas possibilidades.

<h2>Para que servem Regex?</h2>
Na aula e nos �ltimos exerc�cios j� vimos alguns exemplos de express�es regulares. Com isso, avalie as seguintes op��es:

A) Extraindo se��es espec�ficas de uma arquivo de texto
B) Valida��o de formata��o de, por exemplo, e-mail ou telefone
C) An�lise de arquivos de texto e extra��o de dados para, por exemplo, gravar no banco de dados
D) Substituindo os valores de um texto para limpar, reformatar ou alterar o conte�do
Dentre essas op��es, quais alternativas correspondem �s possibilidades utilizando RegEx?

R:
Todas as alternativas est�o corretas e representam exemplos cl�ssicos para utilizar express�es regulares.

No entanto, � importante lembrar que uma express�o regular faz a an�lise de um determinado padr�o de caracteres em uma string. Podemos usar esse padr�o para por exemplo validar um email ou telefone. Para saber se o email realmente existe e validar a autenticidade do email uma regex n�o serve.

<h2>O que aprendemos?</h2>

Regex, ou express�es regulares, � uma linguagem para encontrar padr�es de texto.
Sendo uma linguagem independente, existem interpretadores para a maioria das plataformas de desenvolvimento, como JavaScript, C#, Python ou Ruby.
Uma classe de caracteres predefinida � \d, que significa qualquer d�gito.
Existem v�rios meta-char, como . ou *.
Existem quantifiers que definem quantas vezes um caractere deve aparecer:
{1} � um quantifier que significa uma vez.
* � um quantifier que significa zero, uma ou mais vezes
. � um meta-char que significa qualquer char.
Com \ podemos escapar meta-chars, por exemplo \..

---------------------------------------------------------------------------------------------
<h1>Se��o 02 - Classes de Caracteres</h1>

<h2>Entendendo Classes de Caracteres</h2>
No �ltimo cap�tulo demos uma introdu��o �s regex e vimos nossa primeira express�o para encontrar um CPF em uma linha de texto. J� criamos uma express�o regular, bastante simples ainda encontrando o CPF:

\d{3}\.\d{3}\.\d{3}-\d{2}
Olhando novamente no nosso arquivo CSV, percebemos que h� uma pequena varia��o da formata��o do CPF: 987.654.321.00 e 11122233300.

A nossa regex falha e n�o "enxerga" esses CPFs. Para fazer ela funcionar, devemos usar o poder das classes de caracteres. Na aula anterior j� vimos uma classe predefinida, o \d. Essa classe na verdade � apenas um atalho pra [0-9], ou seja qualquer d�gito. Os colchetes definem uma classe de caracteres e nada impede que criemos nossa pr�pria classe.

Repare que na d�cima segunda posi��o do CPF pode vir um ponto OU h�fen, que podemos declarar com a classe: [.-]. Perceba tamb�m que n�o escapamos o ponto (.), pois dentro dos colchetes o ponto j� possui o seu valor literal. Importante tamb�m � que a ordem n�o importa, [.-] e [-.] s�o a mesma coisa.

Caracteres opcionais
A quantidade de vezes que essa classe de caracteres deve aparecer � definida por um quantifier, por exemplo, como j� vimos:

[.-]* - ponto ou h�fen zero, uma ou mais vezes.

[.-]{1} - ponto ou h�fen uma vez.

No nosso caso [.-] � opcional, pode ter ou n�o ter, mas uma vez apenas. Dentro da regex, isso � declarado atrav�s do meta-char ponto de interroga��o (?). O ponto de interroga��o (?), que significa zero ou uma vez, � mais um quantifier.

Assim podemos combinar a classe [.-] com o quantifier ?:

[.-]?- ponto ou h�fen zero ou uma vez.
Vamos aplicar isso na nossa regex:

\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}
Agora sim, os CPFs ser�o encontrados com ou sem h�fen/ponto.

Sabendo disso at� podemos reescrever a classe \d (sim \d tamb�m � uma classe, j� predefinida). Inv�s de usar \d podemos escrever:

[0123456789]
Ou mais curto:

[0-9]
S� cuidado, o h�fen n�o possui um significado especial e define todos os n�meros de 0 at� 9.


<h2>M�os na massa: Ajudando Alura</h2>

s textos e exerc�cios no Alura usam uma formata��o para deixar uma parte em negrito, it�lico ou para mostrar que se trata de c�digo. Na primeira vers�o da Alura era necess�rio usar tags HTML no texto para essa formata��o. Por exemplo, veja uma de um exerc�cio antigo:

No <code>for</code>, o valor de <code>i</code> come�a de zero e � incrementado a cada volta enquanto <code>i < 10</code>, portando o bloco de c�digo do for � executado 10 vezes.
A sua tarefa agora � criar uma regex que procurar� o <code> ou </code> dentro do alvo acima. M�os � obra!

VER OPINI�O DO INSTRUTOR
Opini�o do Instrutor

A regex utilizada �: </?code>

Repare que usamos o meta-char ? para sinalizar que o / � opcional.



Isso foi um exemplo real do Alura, usamos essa regex para substituir </?code>com o char backstick. A nova formata��o do Alura se chama de Markdown, ou seja, o texto que usava <code> se tornou:

No `for`, o valor de `i` come�a de zero e � incrementado a cada volta enquanto `i < 10`, portando o bloco de c�digo do for � executado 10 vezes.
Veremos ainda como podemos substituir uma string atrav�s de uma regex!!

<h2>Qual � a classe?</h2>
Veja as alternativas abaixo.
Qual � a classe correta para definir os n�meros entre 1 e 3 e 6 e 9?
R:[1-36-9]

<h2>Praticando classes e quantifier</h2>
No exemplo do CPF, usamos a classe de caracteres \d para descrever todos os d�gitos. Se existe uma classe para d�gitos, tamb�m deve ter uma para letras, certo?

Para ver isso em um exemplo real, vamos olhar novamente no nosso arquivo CSV. Repare que temos uma coluna que possui uma data extensa: 11 de Abril de 1995. Que tal definir uma regex para esse padr�o textual?

Vamos copiar a data e colocar no nosso formul�rio. � sempre �til analisar a regex por partes e testar passo a passo. O in�cio � bem simples, temos dois d�gitos e j� sabemos descrever essa classe:

\d\d
No entanto, para ser uma data, isso � muito abrangente e por isso definimos nossa pr�pria classe de d�gitos, mais espec�fica:

[0-3]?\d
Isso pega os dias com um ou dois d�gitos, mas o primeiro dia pode ser apenas 0, 1, 2 ou 3. Dentro da classe at� podemos deixar isso mais explicito:

[0123]?\d
Trabalhando com espa�os
Depois do dia, vem um espa�o e a s�laba de. Como poder�amos definir um espa�o dentro de uma regex? E se n�o for o espa�o e sim um tab? Felizmente j� existe uma classe predefinida, a \s. \s significa whitespace. A defini��o do \s pode variar um pouco entre as implementa��es, mas normalmente � um atalho para [ \t\r\n\f] onde:

O primeiro caractere � um espa�o branco.
\t � um tab.
\r � carriage return.
\n � newline.
\f � form feed.
� muito coisa para se lembrar, ent�o � melhor usar o \s. Vamos aplicar isso na nossa regex, j� usando um quantifier, pois podemos ter mais do que um espa�o:

[0123]?\d\s{1,}
Nos colchetes colocamos 1, que significa um ou mais. Novamente existe um atalho, j� que isso � muito comum:

[0123]?\d\s+
O s�mbolo + � um outro atalho para definir a quantidade e agora j� conhecemos todos:

? - zero ou uma vez.
* - zero ou mais vezes.
+ - uma ou mais vezes.
{n} - exatamente n vezes.
{n,} - no m�nimo n vezes.
{n,m} - no m�nimo n vezes, no m�ximo m vezes.
Agora sim podemos continuar com o valor literal de e o m�s. O primeiro � muito simples pois basta colocar a palavra seguida por um ou mais whitespaces:

[0123]?\d\s+de\s+
D� match em: 11 de

Classes de letras
Para descrever o m�s, devemos usar uma nova classe de letras, seguem alguns exemplos:

[A-Z] significa de A at� Z, sempre mai�scula.
[a-z] significa de a at� z, sempre min�scula,
[A-Za-z] significa A-Z ou a-z.
[abc] significa a, b ou c.
Sabendo disso, podemos combinar a classe com um quantifier. Vamos come�ar com uma letra mai�scula ,seguida por uma quantidade de letras min�sculas, adicionando ainda a letra � (do m�s mar�o):

[A-Z][a-z�]+
Tamb�m podemos ser mais restritivos ainda, como um m�s escrito tem no m�ximo 8 caracteres (depois da primeira letra), temos:

[0123]?\d\s+de\s+[A-Z][a-z�]{1,8}
D� match em: 21 de Maio

Continuando, tem mais uma vez a s�laba de, repetindo a express�o anterior:

[0123]?\d\s+de\s+[A-Z][a-z�]{1,8}\s+de\s+
D� match em: 21 de Maio de

Por fim podemos declarar o ano que � composto por quatro d�gitos:

[0123]?\d\s+de\s+[A-Z][a-z�]{1,8}\s+de\s+\d\d\d\d
D� match em: 21 de Maio de 1993

Daria tamb�m para melhorar um pouco mais a express�o, deixando claro que o ano deve come�ar com 1 ou 2 seguido por 3 d�gitos:

[0123]?\d\s+de\s+[A-Z][a-z�]{1,8}\s+de\s+[12]\d{3}
D� match em: 21 de Maio de 1993

Por fim, n�o podemos esquecer de mencionar a classe de word char. Um word char � apresentado com \w e � um atalho para [A-Za-z0-9_].

<h2>Trabalhando com hor�rios</h2>

No v�deo vimos como definir uma regex para encontrar a data. Agora precisamos garantir que o nosso usu�rio preencha um hor�rio que siga esse padr�o: 19h32min16s.
Qual express�o regular podemos usar nesse padr�o?
R: Regex correta: \d{2}h\d{2}min\d{2}s

Como n�o precisamos limitar os n�meros nesse padr�o, podemos utilizar a classe padr�o \d para trabalhar com d�gitos.

Tem uma regex parecida nas respostas, no entanto ela usa uma \ na frente de cada classes de digitos:

\[0-9]{2}h\[0-9]{2}min\[0-9]{2}s
Sem essa barra a regex tamb�m funcionaria:

[0-9]{2}h[0-9]{2}min[0-9]{2}s


<h2>M�o na massa: Reconhecendo a placa de um ve�culo</h2>

Fomos contratados para desenvolver um sistema para cadastro de ve�culos em um estacionamento. Para isso, precisaremos cadastrar as placas dos ve�culos no sistema e para fazer a valida��o usaremos express�o regular.
Como seria a express�o regular que devemos usar para validarmos a placa de um carro?
Exemplo de placa: KMG-8089

R:Primeiro deve definir as 3 letras mai�sculas: [A-Z]{3}

Agora s� falta o h�fen e os 4 d�gitos, a regex completa fica:

[A-Z]{3}-\d{4}

<h2>M�o na massa: Express�o regular a favor dos alunos!</h2>
Gilberto � professor de f�sica em um col�gio cuja m�dia para passar � 8. Ali�s, uma m�dia bem alta. Contudo, este professor � amigo dos alunos, e costuma parovar aqueles que conseguem notas de 7.2 a 7.9.
Ajude Gilberto e, claro, seus alunos, separando do arquivo CSV os nomes e as notas dos alunos que tiraram de 7.2 a 7.9 para que o professor "camarada" possa aprov�-los!
9.8 - Robson, 7.1 - Teresa, 4.5 - Arm�nio, 6.5 - Zulu, 7.7 - Stefania, 7.8, 5.0 - Romeu, 7.2 - Pompilho, 3.1 - Reinaldo, 7.3 - Bernadete, 4.7 - Cin�rio

Use o avaliador de express�o regular disponibilizado pelo curso.

R: [1]?[7-9]\.\d\s+-\s+\w+

Vejamos! Queremos pegar todo mundo que comece com nota 7.

7\.
Lembre-se que precisamos escapar o . usando um \ antes por ele ser um meta char. Agora, vamos definir nossa pr�pria classe usando colchetes. Nela, precisamos aceitar somente um n�mero de 2 a 9`:

7\.[2-9]
Perfeito, com isso temos as possibilidades 7.2,7.3,7.4,7.5,7.6,7.7, 7.8 e 7.9.

Sabemos que depois do n�mero, temos um espa�o e um h�fen seguido de espa�o:

7\.[2-9]\s+-\s+
Por fim, depois do h�fen queremos pegar qualquer quantidade de caracteres, por isso usaremos o atalho de classe \w que pega qualquer d�gito, seja ele letra ou n�mero:

7\.[2-9]\s+-\s+\w+

<h2>M�o na massa: Uma express�o regular incorreta pode prejudicar algu�m</h2>
Laudilene, � professora de filosofia, amiga de Gilberto, professor de f�sica. Ambos d�o uma "colher de ch�" para seus alunos. No caso de Laudi, ela d� at� meio ponto para que seus alunos atinjam a m�dia 8 para serem aprovados.

Depois de calcular as m�dias das provas dos alunos, Laudi, muito cansada, lan�ou todas as m�dias em um arquivo texto:

10 - Bruce, 9.5 - Miranda, 7.9    - Bob, 10 - Zimbabue, 7.5 - Bety
Para extrairmos a nota e o nome de alunos eleg�veis para receberem at� meio ponto podemos usar a express�o.

[7]\.[5-9] - \w+
Contudo, se copiarmos e colocarmos a linha com as m�dias do aluno em nosso testador de express�o e usarmos a express�o acima, recebemos como "match" apenas

7.5 - Bety
Coitado de Bob! Ele tem direito tamb�m!

Explique por que a nota e o nome de Bob n�o entraram na sele��o e proponha um solu��o alterando a express�o regular utilizada.

Veja o texto com as m�dias digitado por Laudi:

10 - Bruce, 9.5 - Miranda, 7.9    - Bob, 10 - Zimbabue, 7.5 - Bety
Veja que sem querer, ela adicionou mais de um espa�o separando a nota de Bob do h�fen. Esse pequeno detalhe foi suficiente para que nossa express�o [7]\.[5-9] - \w+ n�o fosse capaz de adicionar a nota de Bob na sele��o. Tudo isso porque usamos um espa�o antes do h�fen e um espa�o depois. Poder�amos at� corrigir no arquivo original, mas se Laudi errar novamente?

Vamos alterar nossa express�o regular para considerar um ou mais espa�os (inclusive tab) antes do h�fen e depois. Para isso usamos \s+. Alterando nossa express�o:

[7]\.[5-9]\s+-\s+\w+
Lembre-se que \s � um atalho para espa�os, tab's e que o + significa um ou mais.

<h2>M�o na massa: Separando joio do trigo</h2>
Temos a seguinte linha:
BALEIRO GARROTE SERROTE GOLEIRO ROTEIRO
Escreva uma express�o regular que fa�a match apenas com as palavras GARROTE, SERROTE e ROTEIRO. N�o esque�a de usar nossa ferramenta para testar nossas express�es regulares.

Uma solu��o poss�vel �:

[A-Z]*ROT[A-Z]+
Veja que usamos a classe de caracteres [A-Z] porque queremos lidar apenas com todos as letras em mai�sculo. Al�m disso, na primeira parte da express�o temos [A-Z]*, usamos o quantifier * que indica zero ou mais vezes. Por fim temos [A-Z]*ROT[A-Z]+.

<h2>Mais sobre classes</h2>
As classes s�o uma das partes mais importantes de express�es regulares, t�o importante que vamos falar mais um pouco sobre elas :)

Algo que n�o podemos esquecer �, quando definimos uma classe, a grande maioria dos meta chars s�o interpretados como caracteres literais, ou seja, n�o s�o mais meta-chars!

Por exemplo, vamos analisar a classe [a+] Ela � composta dos chars a e + e dentro dos colchetes o char + n�o � um quantifier!

Para entender melhor, fa�a o teste com o alvo a+a+ aplicando a regex [a+]:



Repare que temos 4 matches. A regex engine selecionou cada caracter da classe separadamente (a ou +), apenas um caractere por vez. Consequentemente achou 4 matches.

Agora tente a regex [a+]+ com o mesmo alvo:



Repare que temos apenas um match! A regex engine aplicou o caractere a ou +, uma ou mais vezes no alvo!

Sabendo disso e dado o seguinte alvo: ?classes+poderosas*

Qual regex abaixo seleciona o alvo inteiro (um match apenas)?

Resposta correta: [a-z?*+]+



Como falamos, a grande maioria de meta-chars s�o valores literais na defini��o da classe (dentro de []). Por exemplo, a classe abaixo define apenas valores literais:

[.?+*{}]
Apenas os caracteres \ (barra invertida), - (h�fen) e ^ (circunflexo) realmente s�o meta-chars dentro de uma classe. O h�fen e a barra invertida j� vimos na aula, por exemplo na classe:

[a-z\d]
Definimos uma classe com letras min�sculas e d�gitos.

O circunflexo (^) significa nega��o dentro dos colchetes e mais para frente falamos mais sobre ele! Aguarde :)


<h2>Opcional: Validando o usu�rio no servi�o Rest</h2>
Voc� � um desenvolvedor back-end de uma startup que possui uma aplica��o web de an�ncios de restaurantes e lanchonetes. A aplica��o que foi desenvolvida usando AngularJS no client-side consumindo servi�os Rest desenvolvidos em Jersey/JAX-RS, precisa fazer um cadastro dos seus usu�rios que possuem um username.

Esse username possui regras de quais caracteres ele pode compor e n�s queremos que ele seja v�lido antes de consultarmos no banco de dados as informa��es sobre ele.

Vamos ver abaixo a action que receber� o usu�rio para ser cadastrado:

@POST
@Path("/user")
@Consumes(MediaType.APPLICATION_JSON)
public Response listaDeRestaurantes(@Valid User user) { 
    // codigo omitido
}
O projeto utiliza a especifica��o Bean Validation que permite realizar valida��es de modelos atrav�s de anota��es. Para validar um campo usando express�es regulares, podermos usar a anota��o @Pattern(regexp="...")

// User.java
public class User {
    @Pattern(regexp = "???")
    @NotEmpty
    private String username;

}
O username precisa ser da seguinte forma:

O limite � de 10 caracteres;
O primeiro caractere deve ser uma letra do alfabeto, n�o pode ser um n�mero;
A partir do segundo caractere podemos ter letras mai�sculas, min�sculas e n�meros;
Como deve ficar a anota��o @Pattern com uma express�o regular com essas caracter�sticas?


A resposta �: [a-zA-Z][a-zA-Z0-9]{0,9}.

Tamb�m � poss�vel usar express�es regulares na anota��o @Path do JAX-RS. Por exemplo: @Path("/username/{username:[a-zA-Z][a-zA-Z0-9]{0,9}")

Se voc� quiser conhecer um pouco mais sobre Jersey e AngularJS (1 e 2) temos alguns treinamentos espec�ficos sobre esses temas:


<h2>Para saber mais: Melhorando a legibilidade</h2>
Na aula criamos um pequeno "monstro" para definir a express�o da data:

[0123]?\d\s+de\s+[A-Z][a-z�]{1,8}\s+de\s+[12]\d{3}
Como poder�amos deixar a express�o mais f�cil de entender?

Uma forma f�cil de melhorar a legibilidade seria usar algumas vari�veis auxiliares, que deixam claro o que estamos definindo, por exemplo no JavaScript podemos criar 4 vari�veis:

var DIA  = "[0123]?\d"; 
var _DE_ = "\s+de\s+";
var MES  = "[A-Za-z][a-z�]{1,8}";
var ANO  = "[12]\d{3}";
Repare que cada vari�vel representa uma parte da regex. Depois disso � s� concatenar esses vari�veis para ter a express�o final:

var stringRegex = DIA + _DE_ +  MES + _DE_ + ANO;
Essa string passamos para a regex engine do JavaScript:

var objetoRegex  = new RegExp(stringRegex, 'g');

Uma regex � algo muito compacto e aquilo que escrevemos hoje, amanh� j� pode ser dif�cil de se entender. Criar vari�veis auxiliares pode ajudar muito para deixar claro o que a regex representa, mesmo para desenvolvedores que n�o s�o especialistas de express�es regulares.

<h2>O que aprendemos?</h2>
O que aprendemos?
Podemos definir facilmente a classe de qualquer caractere com o [A-Z].

Conhecemos todos os quantifiers como ?, +, * e {n}.

\s significa whitespace e � um atalho para [ \t\r\n\f].

\w significa word char e � uma atalho para [A-Za-z0-9_].


-----------------------------------------------------------------------------------------
<h1>Se��o 03 - Encontrando a posi��o certa com �ncoras</h1>

<h2>Selecionando com �ncoras</h2>

Vamos continuar com nosso exemplo CSV e copiar a segunda linha para nosso formul�rio:

denise teste, 987.654.321-00,28 de Dezembro de 1991,(31)45562712,SCS Qd. 8 Bl. B-50,11,70333-900,Rio Grande
Um problema comum para resolver no dia a dia � a procura de uma palavra especifica. Nesse exemplo, vamos tentar achar a preposi��o de. A primeira ideia seria colocar o valor literal de. Ao testar, percebemos que a regex pega mais do que o desejado, como denise ou Grande. Com aquilo que j� aprendemos, vamos refinar a regex e colocar um whitespace no in�cio e no fim da preposi��o: \sde\s

Agora sim, a regex s� encontra as palavras corretas, no entanto tamb�m selecionou o espa�o no in�cio e fim da preposi��o.

Word boundary
O que queremos na verdade � encontrar o in�cio e o fim de uma palavra, que podemos definir pela regex \b. \b � uma das �ncoras, chamada de word boundary. Uma �ncora n�o seleciona um caractere, e sim apenas uma posi��o no texto alvo. Ou seja, a �ncora \b sozinha devolve nada (zero-length) mas combinada com um valor literal, ou outra regex, podemos finalmente definir como encontrar a preposi��o de:

\bde\b
Repare que usamos o \b no in�cio e no fim, ou seja, queremos buscar exatamente a preposi��o de. Testando isso no nosso formul�rio, agora sim s� selecionamos apenas a palavra de. Vamos testar a �ncora em um outro exemplo para deixar bem claro como ela funciona. Abaixo temos uma sequ�ncia de letras a e queremos selecionar as sequ�ncias com tr�s a (a{3}):

aaa aaaa aaa aaaa aaa
Vamos testar uma vez sem \b, uma vez com \b no in�cio, e outra com \b no in�cio e fim:

a{3}

a{3}\b

\ba{3}\b


<h2>O que s�o �ncoras?</h2>
Descreva com suas palavras para que serve uma �ncora dentro de uma express�o regular!
R: Uma �ncora n�o casa caracteres como as classes fazem, e nem definem quantidades. �ncoras marcam uma posi��o espec�fica no alvo, por isso n�o � poss�vel combin�-las com um quantifier.

Existem v�rias �ncoras predefinidas, mas as mais comuns s�o ^, $ e \b. Lembrando tamb�m que os caracteres ^ e $ s�o meta-chars.

<h2>�ncoras de in�cio e fim</h2>
A ideia de definir uma �ncora n�o s� existe para palavras, existem outras que podem ser muito �teis. H� situa��es onde precisamos avaliar uma string inteira e n�o s� uma parte. Um bom exemplo s�o as URIs que vemos o tempo todo no desenvolvimento. Que tal avaliar?

Vamos utilizar o caminho do arquivo html que representa o nosso formul�rio:

file:///Users/nico/Downloads/regex/index.html
Queremos avaliar a linha inteira e temos que garantir que nada vem antes. Para isso existe a �ncora ^. Igualmente tem uma �ncora que avaliar o fim da string: $. Sabendo disso vamos definir:

^file.+html$
Ou seja, tem que come�ar com file e terminar com html. Ao colocar algo antes ou depois do alvo, a regex j� n�o aplica mais:

N�o pega:

xfile:///Users/nico/Downloads/regex/index.html
Tamb�m n�o pega:

file:///Users/nico/Downloads/regex/index.htmlx
H� muito a melhorar nessa regex para sermos mais espec�ficos, e vamos atacar isso no pr�ximo cap�tulo mas agora � a hora dos exerc�cios.

<h2>M�o na massa: Encontrando o n�mero de um CPF</h2>
Dada a seguinte regex, que encontra o n�mero de um CPF: ^\d{3}\.\d{3}\.\d{3}-\d{2}$. Qual das strings abaixo � compat�vel com ela?
Resposta correta: 111.111.111-11

Como foi visto no cap�tulo, o circunflexo (^) � uma �ncora e garante que na string nada deve vir antes, por isso a string CPF: 111.111.111-11 n�o � compat�vel, pois antes do n�mero do CPF h� o trecho CPF:. J� o $ � o contr�rio, nada na string deve vir depois, por isso a string 111.111.111-11 � o n�mero do meu CPF tamb�m n�o � compat�vel, pois depois do n�mero do CPF h� o trecho � o n�mero do meu CPF.

<h2>M�o na massa: Encontrando uma string que comece com determinada express�o</h2>
Temos aqui um erro que aconteceu em um sistema:

Caused by: com.mysql.jdbc.exceptions.jdbc4.CommunicationsException: Communications link failure
Sabendo que o erro sempre come�a com a express�o Caused by:, fa�a uma regex que capture-o.

Um regex simples que pode ser feita �:

^Caused by:.*
A �ncora ^ garantir� que, na string, nada deve vir antes de Caused by:, ou seja, a string deve come�ar com essa express�o. A seguinte string n�o seria v�lida, por exemplo: Error Caused by:


<h2>M�o na massa: Encontrando uma express�o de data</h2>
Qual das regex abaixo capturaria exatamente as strings de data que seguem o modelo: Data: dia/mes/ano ou Data:dia/mes/ano?

Alvos: Data: 02/09/1964 ou Data:02/09/1964.

Se tiver com d�vida, use o nosso testador.

<h2>M�o na massa: Encontrando uma express�o de data</h2>
Qual das regex abaixo capturaria exatamente as strings de data que seguem o modelo: Data: dia/mes/ano ou Data:dia/mes/ano?

Alvos: Data: 02/09/1964 ou Data:02/09/1964.

Se tiver com d�vida, use o nosso testador.
R:A regex para pegar data � bem simples, voc�s j� sabem: [0-9]{2}\/[0-9]{2}\/[0-9]{4}.

Mas tamb�m queremos a express�o Data: e um espa�o (por exemplo: \s) entre eles, que � opcional, ou seja, temos que utilizar o interroga��o (?). Basta adicion�-los � regex acima: Data:\s?[0-9]{2}\/[0-9]{2}\/[0-9]{4}.

Mas como queremos exatamente essa string, precisamos colocar as �ncoras ^ e $, no in�cio e fim da string, respectivamente: ^Data:[\s]?[0-9]{2}\/[0-9]{2}\/[0-9]{4}$


<h2>M�o na massa: Extens�o de arquivo</h2>
Temos a seguinte regex:

.*\.html$
Ela captura uma p�gina html, seja o nome de um arquivo, uma url de uma p�gina, etc... Qual das strings abaixo n�o ser� capturada pela regex?

A string index.htmlx n�o ser� capturada pois a regex, atrav�s da �ncora $, n�o admite nada ap�s a express�o .html.

<h2>Para saber mais: \B</h2>
Vimos na aula o �ncora\b (word boundary) para selecionar a posi��o antes ou depois de uma palavra.

Existe a invers�o do \b, o non-word-boundary: \B (B mai�sculo)

Para entender melhor � sempre bom o exemplo pr�tico. Experimente no nosso testador:

Alvo: portugu�s proporcional compor

Pattern: \Bpor\B

<h2>Para saber mais: �ncoras no Python</h2>
Um uso ainda mais pr�tico de �ncoras e regex no desenvolvimento web � no framework Django que utiliza como linguagem o Python.

Por exemplo, podemos definir uma rota, ou seja, a URL requisitada, dessa maneira:

regex_url = r'(.*/exercises/\d+/answer/\d+)$'
Repare que usamos uma �ncora no final, al�m de usar a classe de d�gitos \d.

<h2>O que aprendemos?</h2>
O que aprendemos?
Existem �ncoras predefinidas que selecionam uma posi��o dentro do alvo.
\b � uma �ncora que seleciona um word boundary, isso � o in�cio ou fim da palavra.
^ � uma �ncora que seleciona o in�cio da string alvo.
$ � uma �ncora que seleciona o fim do alvo.

------------------------------------------------------------------------------------------------------
<h1>Se��o 04 - Trabalhando com Grupos</h1>


Vamos voltar novamente no nosso exemplo CSV e relembrar a regex que extrai a data:

[0123]?\d\s+de\s+[A-Z][a-z�]{1,8}\s+de\s+[12]\d{3}
Ao executar, a regex devolve a data completa, como planejamos. Agora imagine que queremos sim fazer um match da data, mas selecionar apenas o ano. Para tal existem os grupos. Um grupo � definido atrav�s de par�nteses (). Ou seja, basta colocar a parte da regex que define o ano em par�nteses:

[0123]?\d\s+de\s+[A-Z][a-z�]{1,8}\s+de\s+([12]\d{3})
Para ver os grupos dentro do nosso formul�rio, devemos habilitar o checkbox "Mostra grupos":



Dentro do c�digo JavaScript, o m�todo exec devolve um array, com o match inteiro e os grupos da regex. Esses resultados � que estamos mostrando no formul�rio. Sabendo disso, podemos definir mais grupos para tamb�m selecionar o dia e o m�s:

([0123]?\d)\s+de\s+([A-Z][a-z�]{1,8})\s+de\s+([12]\d{3})
A regex com o alvo 21 de Maio de 1993 devolve, al�m do match inteiro, os grupos 21, Maio e 1993.

Grupos opcionais
Atrav�s de um grupo, podemos tamb�m definir um conjunto de caracteres como opcional. J� conhecemos o quantifier que significa opcional, o ? (zero ou uma vez). Agora s� falta combinar o ? com um grupo. Por exemplo, podemos deixar a preposi��o de como opcional: (de\s+)?, e aplicando isso na regex nas duas preposi��es:

([0123]?\d)\s+(de\s+)?([A-Z][a-z�]{1,8})\s+(de\s+)?([12]\d{3})
Essa regex pega datas como: 21 Maio 1993, 21 Maio de 1993 e 21 de Maio de 1993

Non-capturing groups
Agora temos um novo problema: usamos os grupos justamente para selecionar o dia, m�s e ano. Com os dois novos grupos, tamb�m recebemos as preposi��es como resposta. Por exemplo, usando o alvo 21 de Maio de 1993, o nosso formul�rio devolve os grupos:

21 ||| de  ||| Maio ||| de  ||| 1993
Os caracteres ||| s�o apenas o separador dos grupos, utilizado no nosso c�digo JavaScript e n�o importam na avalia��o. Agora, a pergunta �: como podemos usar um grupo que n�o � devolvido pela regex? Para tal existem os non-capturing groups!

Novamente usaremos o simbolo ?, mas agora no in�cio do grupo junto com os dois pontos, por exemplo para a preposi��o de: (?:de\s+)?

Aplicando isso na regex inteira, no alvo 21 de Maio de 1993:

([0123]?\d)\s+(?:de\s+)?([A-Z][a-z�]{1,8})\s+(?:de\s+)?([12]\d{3})
Isso devolve os grupos:

21 de Maio de 1993 ||| 21 ||| Maio ||| 1993
Perfeito, a preposi��o de, que faz parte da regex, n�o aparece como grupo!


<h2>Excluindo grupos que n�o queremos</h2>
Ao trabalharmos com datas, � bem comum visualiz�-las em diversos formatos, como, por exemplo, 20 de maio de 2015 ou 20 maio 2015. Para o nosso sistema, a preposi��o de n�o faz tanto sentido quanto para o usu�rio e, portanto, podemos ignor�-la. Sabemos que podemos pedir ao Regex Engine para que n�o devolva nenhum grupo espec�fico atrav�s de non-capturing groups.

O que queremos ent�o � pedir ao Regex Engine para que n�o devolva o grupo formado pelo de e por um whitespace (\s). Qual das op��es abaixo faz um uso correto dos non-capturing groups?
Resposta correta: (?:de\s+)?

Muito cuidado para n�o confundir non-capturing groups com os quantifier. Ambos utilizam o mesmo s�mbolo (?), portanto possuem objetivos diferentes. Relembrando:

Non-Capturing group - (?:de\s+) (n�o deve devolver o grupo formado pela preposi��o de e por um \s)
Quantifier - [a-z]? (a classe deve ocorrer zero ou uma vez)

<h2>M�o na massa: CPF e o digito verificador</h2>
Nos cap�tulos anteriores definimos uma regex para encontrar um CPF dentro de uma string. Usamos a regex abaixo:
 \d{3}[-.]?\d{3}[.-]?\d{3}[.-]?\d{2}
Talvez voc� j� ouviu falar do Digito verificador, que � representado pelo dois n�meros no final do CPF. Atrav�s desse dois n�meros podemos calcular se o CPF est� valido. Esse c�lculo tamb�m � conhecido como m�dulo 11.

A sua tarefa n�o � calcular e sim definir um grupo na regex em cima que devolve os d�gitos verificadores. M�os � obra!

A regex abaixo adicionou apenas par�nteses na �ltima parte da regex:

\d{3}[-.]?\d{3}[.-]?\d{3}[.-]?(\d{2})


Caso queria saber mais sobre o c�lculo m�dulo 11 segue um link de uma p�gina externa que traz um exemplo:

http://www.goulart.pro.br/cbasico/Calculo_dv.htm

Segue tamb�m um link de um mini-calculador, onde podemos usar o c�lculo modulo 11:

http://www.cjdinfo.com.br/utilitario-calculo-digito-modulo-11

Para o CPF hipot�tico 111.222.333 o digito verificador real � 96.

<h2>M�o na massa: o detetive e a mensagem criptografada</h2>

Um agente secreto conseguiu capturar a seguinte mensagem criptografada:

Z171PZ7AZ23PZ7819AZ78GZ1AZ99IZ34O
Depois de algum tempo, ele descobriu a seguinte lei de forma��o: cada letra da palavra recebe o prefixo Z, mas n�o apenas isso. A letra Z � seguida de um n�mero com um ou mais d�gitos.

Com base nessa informa��o ultra secreta, crie uma express�o regular que consiga evidenciar a palavra secreta. ATEN��O: para resolver este problema voc� precisar� trabalhar com grupos, n�o deixe de marcar a op��o "Mostrar grupos" do nosso testador de express�o regulares.

RESPONDER
Opini�o do Instrutor

Uma solu��o � a express�o:

Z\d+(\w)
Veja que usamos Z\d+ para indicar que queremos ter a letra Z seguido de um ou mais d�gitos. Depois usamos Z\d+(\w), ou seja, nossa express�o ir� selecionar todos os Z seguidos de um n�mero que � seguido de qualquer letra ou n�mero, inclusive _. Contudo, o \w esta entre par�nteses e define um grupo. Isso significa que do resultado da express�o regular faremos uma nova pesquisa procurando quem � letra, n�mero, inclusive _ da sele��o. Com isso, extrairemos apenas as letras que seguem o prefixo Z(qualquer n�mero).

Em nosso testador de express�o regular teremos:

Z171P ||| P | Z7A ||| A | Z23P ||| P | Z7819A ||| A | Z78G ||| G | Z1A ||| A | Z99I ||| I | Z34O ||| O

Veja que todas as letras de cada grupo juntas formam a palavra PAPAGAIO.

<h2>M�o na massa: Tratando Exceptions</h2>

Nenhuma aplica��o � perfeita e exce��es acontecem. Normalmente as exce��es ser�o guardadas dentro de um arquivo log. Uma tarefa comum � analisar e verificar os arquivos de log para descobrir poss�veis problemas no sistema.

Uma exce��o no arquivo de log tem a seguinte cara:

Caused by: com.mysql.jdbc.exceptions.jdbc4.CommunicationsException: Communications link failure
Queremos usar uma Regex que possa encontrar essa linha e separar em dois grupos, Causa e Descri��o para simplificar a leitura:

Causa:

Caused by: com.mysql.jdbc.exceptions.jdbc4.CommunicationsException
Descri��o:

Communications link failure
Qual seria a regex usada para termos acesso � essas duas partes do todo da exception?

Podemos primeiramente fazer uma regex para a exce��o completa:

Caused[\s\w:.-]+:[\w\s]+
E ent�o, basta formar dois grupos como aprendemos nesse cap�tulo, colocando par�nteses envolvendo os grupos que queremos formar, no caso, um com a causa e outro com a descri��o.

(Caused[\s\w:.-]+):([\w\s]+)

<h2>Desafio #1: Ajudando a Alura</h2>
Na Alura existe um filtro de permiss�es para habilitar alguns recursos para usu�rios da Alura ou da Caelum. A sua tarefa � criar a regex que verifica o email desses usu�rios e extrai o nome do usu�rio

O email deve ter um @ e terminar com caelum.com.br ou alura.com.br. O nome do usu�rio (tudo antes do @) tem apenas letras min�sculas, pode ter um n�mero no final e tem de 5 a 15 caracteres.

Por exemplo:

super.mario@caelum.com.br extrai super.mario
donkey.kong@alura.com.br extrai donkey.kong
bowser1@alura.com.br extrai bowser1
Mais uma dica, para definir dentro de um grupo que queremos um OU outro usamos o caractere | (pipe). Por exemplo, selecionando alfa OU beta, escrevemos (alfa|beta)

M�os � obra!

Segue uma poss�vel regex:

([a-z.]{4,14}[a-z\d])@(?:caelum.com.br|alura.com.br)
Repare que o segundo grupo usa o pipe: | para selecionar email que terminam com caelum.com.br OU alura.com.br. Al�m disso, o grupo n�o � capturado (?:).

<h2>Desafio #2: Validando email</h2>

A valida��o de um email � um dos exemplos cl�ssicos sobre express�es regulares e claro que n�o pode faltar neste curso.

Novamente, � preciso ajudar a equipe de desenvolvedores do Alura, mas agora � preciso validar qualquer email!

Seguem algumas dicas:

Aproveite algo da sua regex do exerc�cio anterior;
use os �ncoras ^ e $;
analise parte por parte:
primeiro focando na parte local (tudo antes do @);
depois no dom�nio (tudo depois do @);
voc� pode repetir um grupo:
por exemplo, (([a-z]+)\.)+ significa v�rios caracteres min�sculos seguido por ponto, uma ou mais vezes.
Seguem alguns emails que devem ser pegos pela regex:

donkey.kong@kart.com.br
bowser1@games.info 
super-mario@nintendo.JP
TEAM.donkey-kong@MARIO.kart1.nintendo.com
E aqui alguns exemplos do que n�o pegar:

toad@kart...com
wario@kart@nintendo.com
yoshi@nintendo
daisy@nintendo.b
..@email.com


<h5>MINHA EXPRESS�O REGULAR: (?:[A-z\.?])*-?[A-z0-9]+@[A-z0-9]+(?:\.[A-z0-9]{2,})+</h5>
Segue uma poss�vel solu��o (j� bastante complexa!):

^([\w-]\.?)+@([\w-]+\.)+([A-Za-z]{2,4})+$
Vamos por partes na explica��o:

a regex usa �ncoras no in�cio ^ e fim $ para garantir o match inteiro;
antes do @, temos: ^([\w-]\.?)+
definimos uma classe com word-chars e h�fen, seguido por um ponto opcional: [\w-]\.?
essa classe pode se repetir uma ou mais vezes, ent�o criamos um grupo e + ao final: ([\w-]\.?)+
depois do @, temos:
([\w-]+\.)+, que � bastante parecido com o anterior ao @, por�m com o . obrigat�rio,
([A-Za-z]{2,4})+$, que � o final da nossa regex, seleciona o dom�nio do email, como br, com, us. O m�nimo de letras dessa parte final devem ser 2 e no m�ximo 4.
H� v�rios exemplo complexos dispon�veis na web, mas lembre-se que a autenticidade de um email s� pode ser verificada enviando um email para usu�rio.

<h2>Desafio #3: Ajudando os Correios</h2>
Precisamos ajudar os correios a entregar corretamente suas correspond�ncias. Para tal, disponibilizaram-nos um arquivo com diversas linhas, nas quais s�o necess�rias as informa��es: Nome, Rua, N�mero e CEP.

As outras informa��es tamb�m devem ser separadas para futuros servi�os dos correios, por�m n�o precisamos captur�-las neste momento.

Nico Steppat|14/05/1977|Rua Buarque de Macedo|50|22222-222|Rio de Janeiro

Romulo Henrique|14/06/1993|Rua do Lins|120|12345-322|Rio de Janeiro

Leonardo Cordeiro|01/01/1995|Rua de Campo Grande|01|00001-234|Rio de Janeiro
Tente montar uma regex que realize esse trabalho e ajude os correios!

A dica para a cria��o de regex � sempre ir passo-a-passo. Por isso, vamos analisar o seguinte padr�o, sempre lembrando de agrupar e de adicionar o pipe ao final:

Nome|data/de/nascimento|Rua onde mora|numero|cep|Cidade

Nome era necess�rio capturar, ent�o iremos criar um grupo ([\w\s]+)\|

Data de nascimento n�o era necess�rio, por isso, deixaremos esse grupo como non-capturing group (?:\d\d\/\d\d\/\d\d\d\d)\|

Rua Onde Mora � necess�rio capturar, e por isso, criamos um grupo normal: ([\w\s]+)\|

N�mero � necess�rio capturar, portanto: (\d{1,4})\|

CEP � necess�rio capturar, e podemos criar um grupo dessa maneira: (\d{5}-\d{3})\|

Cidade � a nossa �ltima an�lise, e n�o � necess�ria. Portanto, basta adicionarmos ?: para deixar o seu grupo n�o-captur�vel: (?:[\w\s]{10,})

No fim, juntando tudo:

([\w\s]+)\|(?:\d\d\/\d\d\/\d\d\d\d)\|([\w\s]+)\|(\d{1,4})\|(\d{5}-\d{3})\|(?:[\w\s]{10,})
Uma regex gigante! Por�m, como visto, se quebrarmos em v�rios pedacinhos, fica melhor para analisar e organizar o pensamento.

<h2>O que aprendemos?</h2>
Declaramos um grupo com ().
Podemos ter grupos e subgrupos.
Um grupo � retornado na hora de executar, s�o �teis para selecionar uma parte do match.
Atrav�s do ?:, dizemos que n�o queremos ver esse grupo na resposta

-----------------------------------------------------------------------------------------------------
<h1>Se��o 05 - Ganancioso ou pregui�oso</h1>
<h2>Express�es Gananciosas</h2>

Vamos continuar com os grupos, mas ver um novo exemplo. Praticar � tudo com Regex! O nosso alvo agora � uma tag HTML, escolhemos um cabe�alho (<h1>) da nossa p�gina e a tarefa � extrair o conte�do. O alvo �:

<h1 class="text-left">Express�es regulares</h1>
M�os � obra para definir a regex!

Ganancioso ou pregui�oso?
Nossa regex come�a com os valores literais <h1 seguido por qualquer caractere (.), uma ou mais vezes. Assim garantimos que todos os atributos da tag ser�o encontrados. No final colocamos o fechamento da tag (>):

<h1.+>
Ao testar percebemos que a tag inteira foi selecionada e n�o s� a primeira parte:



Como assim? Nossa regex � gananciosa por padr�o e selecionou todos os caracteres at� o �ltimo >. O meta-char, que na verdade � ganancioso, � o +, igualmente * e {} s�o tamb�m assim, e sempre selecionam o m�ximo de caracteres poss�veis, se n�o for configurado diferente. Ou seja, podemos dizer que n�o queremos "gan�ncia" e sim pregui�oso ou hesitante. Isso se faz, novamente pelo caractere ?:

<h1.+?>
Isso faz que a regex s� seleciona at� o primeiro >:



Para entender melhor, um bom teste pode ser testar a regex: <h1.{1,10} gananciosa, e depois a pregui�oso: <h1.{1,10}?. A primeira seleciona 10 caracteres depois do <h1, a segunda apenas 1 caractere.

Continuando com a elabora��o da regex, vamos definir o conte�do dentro do par�grafo, aproveitando as classes de caracteres j� vistas:

<h1.+?>([\w\s���.]+)
Dentro dos colchetes, podemos declarar mais caracteres do alfabeto portugu�s, mas para o nosso texto isso j� � suficiente. Por fim falta selecionar o fechamento da tag:

<h1.+?>([\w\s���.]+)</h1>
Repare que j� usamos um grupo para receber o conte�do do par�grafo de volta.

<h2>M�o na massa: Entendendo quantifiers gananciosos</h2>
Todos os quantifiers s�o gananciosos por padr�o. Isso significa que eles automaticamente selecionam o m�ximo de caracteres por padr�o.

Lembrando que temos os seguintes quantifiers:

? (zero ou um caractere)
+ (um ou mais caracteres)
* (zero ou mais caracteres)
{n,m} (min n, max m caracteres)
Use agora o nosso testador com um alvo simples, por exemplo a palavra alura e com a regex [a-z]+:



A nossa regex seleciona toda a palavra (1 match). Agora deixe o quantifier pregui�oso.

Quantos matches teremos?

Para deixar a regex (o quantifier) pregui�oso usamos ?: [a-z]+?

Repare que a regex seleciona um caractere por vez, temos 5 matches no caso do alvo alura:



Teste tamb�m o mesmo alvo com a regex:

Gananciosa: [a-z]{1,5}
Pregui�osa: [a-z]{1,5}?
Percebeu a diferen�a?

<h2>O recurso de backreference</h2>

Nossa regex funciona como o esperado, mas agora ela tamb�m deve funcionar para uma tag h2. Ok, nada mais f�cil do que isso, podemos pensar, basta adicionar a tag no inicio e fim, junto com a tag <h1>:

<(h1|h2).+?>([\w\s���.]+)</(h1|h2)>
O agrupamento foi necess�rio para o | funcionar, para n�o interpretar o | literalmente. Ao testar, aparentemente a regex funciona, mas ela tem um erro grave. Ela tamb�m aceita alvos com h1 no in�cio e h2 no final!

A regex pega (h1 no in�cio, h2 no final):

<h1 id="regex" class="form">Express�es regulares n�o s�o t�o dif�ceis.</h2>
O que queremos, quando a tag for uma h1, no final tamb�m deve estar uma h1, igualmente para a tag h2. Essa depend�ncia podemos definir atrav�s de back-references, uma refer�ncia para um texto j� encontrado. A sintaxe � simples, usa-se um \ seguido pelo n�mero do grupo, come�ando com 1.

Na nossa regex, a tag � definida no primeiro grupo. Ou seja, vamos usar a back-reference \1:

<(h1|h2).+?>([\w\s���.]+)<\/\1>
Agora sim! Se testarmos, a regra s� funciona com tags iguais na abertura e fechamento.

<h2>Para saber mais: Tudo que n�o �!</h2>
Na aula vimos como selecionar uma tag espec�fica dentro de um alvo e chegamos juntos a regex em baixo:

<h1.+?>([\w\s���.]+)</h1>
Com ela pegamos a tag <h1>, e o grupo devolve o conte�do da tag. Repare tamb�m que deixamos o quantifier pregui�oso para n�o pegar a tag inteira.

Por exemplo a regex <h1.+> seleciona o tag inteira:



Mas se usarmos o quantifier pregui�osamente selecionamos apenas a abertura da tag:

<h1.+?>


H� uma alternativa para resolver esse problema de abertura da tag. Podemos definir uma classe de caracteres que seleciona tudo que n�o � um >. Essa nega��o � feita atrav�s da meta-char ^.

Teste o exemplo abaixo sem usar um quantifier pregui�oso:

<h1[^>]+>


Repare que usamos a classe em conjunto com o quantifier ganancioso: [^>]+

Mesmo assim foi encontrado apenas a abertura da tag pois a nossa classe de caractere n�o inclui a caractere >

VER OPINI�O DO INSTRUTOR
Opini�o do Instrutor

Essa nega��o � algo muito comum nas regexes. H� circunst�ncias em que � mais f�cil definir o que n�o queremos em vez de dizer o que queremos. A nega��o ^ ajuda nisso. Isso tamb�m � a raz�o da exist�ncia de classes como \W (com W mai�sculo) e \D (com D mai�sculo).

O \W � a non-word char, ou seja tudo que n�o � um word char. \W � um atalho para [^\w].

A classe \D, por sua vez, � um non-digit, ou seja, \D � um atalho para [^\d]

Repare tamb�m que n�o usamos a meta-char ^ como �ncora pois aparece dentro de uma classe [^>].

<h2>Para saber mais: Tudo que n�o � #2</h2>
No exerc�cio anterior falamos que h� casos onde � mais simples definir o que n�o estamos buscando de que contr�rio.

Se lembra do exerc�cio onde era preciso analisar uma mensagem "criptografada"?

O nosso alvo era: Z171PZ7AZ23PZ7819AZ78GZ1AZ99IZ34O

E a nossa regex especificou que queremos buscar a letra Z com alguns n�meros e depois vem uma letra mai�scula:

Z\d+(\w)
Repare que nossa regex na verdade devolve caracteres que n�o queremos (Z\d+) e usamos o grupo para realmente especificar que estamos buscando (\w):



Vamos inverter a l�gica e definir o que a regex N�O deveria devolver, ou seja, n�o estamos interessados na letra Z nem no numero \d.

Em outras palavras, teste a regex:

[^Z\d]
VER OPINI�O DO INSTRUTOR
Opini�o do Instrutor

A regex s� n�o ficou menor como tamb�m o resultado melhorou, nem foi necess�rio usar um grupo!

<h2>O que aprendemos?</h2>
Aprendemos que quantifiers s�o gananciosos por padr�o e que podemos utilizar um ? logo ap�s o quantifier, deixando-o pregui�oso. Tamb�m aprendemos como podemos referenciar o texto de um grupo dentro da regex, aonde n � o n�mero do grupo.


<h1>Usando regex nas diversas linguagens</h1>
<h2>Introdu��o</h2>
Nesse cap�tulo vamos dar uma olhada em v�rias linguagens de programa��o e como utilizar as regex nelas. Escolhemos as linguagens JavaScript, Ruby, Python, C# e Java. Cada v�deo aborda uma linguagem:

V�deo 2 sobre JavaScript.
V�deo 3 sobre Ruby.
V�deo 4 sobre PHP.
V�deo 5 sobre Python.
V�deo 6 sobre C#.
V�deo 7 sobre Java.
Pula diretamente para o video que � do seu interesse.

Para facilitar, utilizaremos sempre o mesmo exemplo de regex: (\d\d)(\w) - dois d�gitos e um word char, al�m de definir dois grupos. O nosso objetivo � executar a regex em cada linguagem, recebendo os grupos e as posi��es do match.

M�os � obra!
