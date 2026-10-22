const botoes = document.querySelectorAll("button");

const resultado = document.getElementById("resultado");

const pontuacaodojogador = document.getElementById("pontos-do-usuário");

const pontuacaodamaquina = document.getElementById("pontos-da-máquina");


let usuario = 0;
let maquina = 0;


botoes.forEach((botao) => {
botao.addEventListener("click", ()=> {
const result =  playRound(botao.id, computerPlay());
resultado.textContent = result;

});

});

function computerPlay() {
    const escolhas = ["Pedra","Papel","Tesoura"];
    const ecolhasAleatoria = Math.floor(Math.random()*escolhas.length);
    return escolhas[ecolhasAleatoria];
}

function  playRound(seleçãodojogador,selecaodocomputador) {
    if (seleçãodojogador === selecaodocomputador) {
        return "deu empate"
    }else if (
    (seleçãodojogador === "rock" && selecaodocomputador  ==="scissors")||
    (seleçãodojogador === "paper" && selecaodocomputador === "rock") ||
    ( seleçãodojogador === "scissors" && selecaodocomputador === "paper")
){
        usuario++;
    pontuacaodojogador.textContent = usuario;
    return "You win! " + seleçãodojogador + " beats " + selecaodocomputador;
    }else{
        selecaodocomputador++;
    pontuacaodamaquina.textContent = maquina;
    return "You lose! " + selecaodocomputador + " beats " + seleçãodojogador;
    }

}



