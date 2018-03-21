
//UMA NOVA FORMA NO ECMASCRIPT 6 DE DECLARAR FUNÇÕES É APENAS COLOCAR A FLECHA NA FRENTE DO 
//PARÂMETRO, OU PARÊNTESES
//PARA functions QUE RECEBEM APENAS 1 PARÂMETRO É POSSÍVEL OMITIR OS PARÊNTESES
//ARROW FUNCTION
const criaJogo = sprite => {

	//NO ECMASCRIPT 6 AO INVÉS DE VAR EXISTE O let E O const
	//let SÃO PARA ATRIBUTOS QUE SÃO MUDADOS
	//const SÃO PARA ATRIBUTOS QUE NÃO POSSUEM MUDANÇAS, COMO POR EXEMPLOS, FUNÇÕES
	//TENTA SEMPRE USAR O const PRIMEIRO
	let palavraSecreta = '';
	let etapa = 1;
	let lacunas = [];


	//const ganhou = () => {
		/*MINHA IMPLEMENTAÇÃO
		var acertouLetras = true;
		if(!sprite.isFinished() && etapa != 1){
			for(var i = 0; i < lacunas.length; i++){
				if(lacunas[i] == ''){
					acertouLetras = false;
				}
			}
			return acertouLetras;
		}else{
			return false;	
		}
		*/
		//IMPLEMENTAÇÃO DO PROFESSOR
		//USANDO ECMASCRIPT 5
		//IGUAL UM FOREACH
		//SE EXISTE TAMANHO NO ARRAY, PROCURA, SE NÃO É FALSE
		//return lacunas.length ? !lacunas.some(function(lacuna){	return lacuna == ''; }) : false;
	//};

	const ganhou = () => lacunas.length ? !lacunas.some(function(lacuna){ return lacuna == '';}) : false;


	//const perdeu = () =>{
		/*MINHA IMPLEMENTAÇÃO
		if(sprite.isFinished() && !ganhou()) return true;
		return false;
		*/
		//IMPLEMENTAÇÃO PROFESSOR
		//return sprite.isFinished();
	//};

	//PARA FUNCTIONS QUE POSSUEM APENAS UMA INSTRUÇÃO É POSSÍVEL FAZER DA SEGUINTE FORMA:
	//AUTOMATICAMENTE É RETORNADO O VALOR
	const perdeu = () => sprite.isFinished();

	const ganhouOuPerdeu = () => {
		/*MINHA IMPLEMENTAÇÃO
		if(ganhou() || perdeu()) return true;
		return false;
		*/

		//IMPLEMENTAÇÃO PROFESSOR
		return ganhou() || perdeu();
	};

	const reinicia = () => {
		sprite.reset();
		lacunas = [];
		etapa = 1;
		palavraSecreta = '';
	};

	//IRÁ PREENCHER A LACUNA E SE ERRAR IRÁ PARA O PRÓXIMO SPRITE
	const processaChute = chute => {

		/*MINHA SOLUÇÃO
		var encontrouPalavra = false;
		for(var i = 0; i < palavraSecreta.length; i++){
			if(chute == palavraSecreta[i]){
				lacunas[i] = chute;
				encontrouPalavra = true;
			}
		}

		if(!encontrouPalavra){
			sprite.nextFrame();
		}
		*/

		//SOLUÇÃO PROFESSOR

		if(!chute.trim()) throw Error('Chute inválido');
		//VARRER DO INÍCIO AO FIM (g), CASE INSENSITIVE (i)
		//DECLARAR VARIÁVEIS DE UMA VEZ SÓ
		const exp = new RegExp(chute, 'gi');

		let resultado, acertou = false;

		//ENQUANTO FICA VERIFICANDO ELE VAI EXECUTANDO
		while(resultado = exp.exec(palavraSecreta)){
			//QUALQUER VALOR DIFERENTE DE 0 NO JAVASCRIPT É IGUAL A TRUE		
			acertou = lacunas[resultado.index] = chute;
			//acertou = true;

		}

		if(!acertou) sprite.nextFrame();
		
	};


	const criaLacunas = () => {
		/*
		for(var i = 0; i < palavraSecreta.length; i++){
			lacunas.push('');
		}
		*/
		//OUTRA SOLUÇÃO POSSÍVEL PARA PREENCHER AS LACUNAS, ALÉM DO LOOP FOR
		lacunas = Array(palavraSecreta.length).fill('');
	};

	const proximaEtapa = () => etapa = 2;

	//CONFIGURA A PALAVRA DO JOGO DA FORCA
	const setPalavraSecreta = (palavra) => {
		//SÓ palavra.trim() se tiver é false, POR ISSO A NEGAÇÃO
		if(!palavra.trim()) throw Error('Palavra secreta inválida');

		palavraSecreta = palavra;
		criaLacunas();
		proximaEtapa();
	};

	//PEGA O ARRAY DE QUANTAS LETRAS FORAM DESCOBERTAS E NÃO FORAM DA PALAVRA
	const getLacunas = () => {
		return lacunas;
	};


	//MOSTRA A ETAPA DO JOGO
	const getEtapa = () => {
		return etapa;
	};

	//RETORNA O OBJETO JAVA SCRIPT
	return {
		//QUANDO O VALOR E O PARÂMETRO ENVIADO FOREM IGUAIS, VOCÊ PODE OMITIR O NOME DO PARÂMETRO
		/*
		setPalavraSecreta: setPalavraSecreta,
		getLacunas: getLacunas,
		getEtapa: getEtapa,
		processaChute: processaChute,
		ganhou: ganhou,
		perdeu: perdeu,
		ganhouOuPerdeu: ganhouOuPerdeu,
		reinicia: reinicia
		*/
		setPalavraSecreta,
		getLacunas,
		getEtapa,
		processaChute,
		ganhou,
		perdeu,
		ganhouOuPerdeu,
		reinicia
	};
};