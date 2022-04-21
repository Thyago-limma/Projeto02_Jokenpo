const prompt = require('prompt-sync')();
const jokenpo = ['Pedra','Papel','Tesoura'];

console.log('JOKENPÔ');//Titulo do jogo
console.log('\n\n');
let nome = prompt(`Qual o seu nome: `);//pergunta para saber o nome do jogador
console.log('\n\n');

do{
    //Laço de repetição caso o jogador queira jogar novamente
    let rodadas = +prompt(`Quantas Rodadas Você deseja jogar: `);
    console.clear();
    //Variáveis para contar as vitórias
    var contpc = 0
    var contplayer = 0
    let minhaescolha;

    for(let cont = 0; cont < rodadas; cont++){//for para contar o numero de partidas definidas pelo jogador

        console.log(`Seja bem vindo ${nome}! \n Hoje vamos jogar JOKENPO, suas opções são: \n [0]Pedra \n [1]papel\n [2]Tesoura\n Qual sua Escolha? `);


       
        do{ //Validação da escolha.
         minhaescolha = +prompt(` Digite Sua Escolha: `);

    }while(minhaescolha != 0 && minhaescolha != 1 && minhaescolha != 2);
    
    
  
        //Deixar o Pc escolher Aleatoriamente e depois Mostrar as Escolhas do PC e do jogador
        let escolhapc = Math.floor(Math.random() * 3 );
        console.log(`\nO jogador ${nome} escolheu ${jokenpo[minhaescolha]}\ne o Pc Escolheu ${jokenpo[escolhapc]}\n`);

        //Contador pra Determinar o Numero de Vitórias
        if((escolhapc == 0 && minhaescolha == 2) || (escolhapc == 1 && minhaescolha == 0) || (escolhapc == 2 && minhaescolha == 1)){
            contpc++
        }else if ((minhaescolha == 0 && escolhapc == 2) || (minhaescolha == 1 && escolhapc == 0) || (minhaescolha == 2 && escolhapc == 1)){
            contplayer++
        } 
        console.log(`${nome}: ${contplayer} x ${contpc}: PC `);//Imprimir o Resultado da Partida
        console.log();
    }

        //If Para Mostrar Quem foi o Campeão.
    if (contpc > contplayer) {
        console.log(`PC é o Grande Campeão.`);
    } else if (contplayer > contpc) {
        console.log(`${nome} é o Grande Campeão.`);
    } else {
        console.log(`A Partida Terminou Empatada.`);
    }

        //While Para Reiniciar a Partida,Caso a Resposta Seja "Nao" o Jogo Encerra.
    do{
        restart = prompt('Deseja jogar novamente? sim ou nao ').toLowerCase();
    }while(restart != 'sim' && restart !== 'nao');
    console.clear();
    }while(restart === 'sim');
