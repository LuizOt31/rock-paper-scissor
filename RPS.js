let escolha1 = document.querySelector('#rock')
let escolha2 = document.querySelector('#paper')
let escolha3 = document.querySelector('#scissor')
let jogar = document.querySelector('.jogar')
let rodape = document.querySelector('.rodape')
let jogadaJogador
let jogadaComputador 
let resultado

escolha1.addEventListener('click', () =>{ jogadaJogador = 'rock'})
escolha2.addEventListener('click', () =>{ jogadaJogador = 'paper'})
escolha3.addEventListener('click', () =>{ jogadaJogador = 'scissor'})

jogar.addEventListener('click', () =>{
    jogadaComputador = getComputerChoice()
    playRound(jogadaJogador, jogadaComputador)
    const p = document.createElement('p')
    rodape.appendChild(p)
    p.textContent = resultado


})





function getComputerChoice (){
    let number = Math.floor(Math.random() * 3) + 1
    let luiz
    if (number == 1){
        luiz = 'scissor'
    } else if (number == 2){
        luiz = 'rock'
    } else{
        luiz = 'paper'
    }
    return luiz
}   
function playRound(jogador, computer){
    if (jogador == computer){
        resultado = 'empate'
    } else{
        if (jogador == 'scissor'){
            if (computer == 'rock'){
                resultado = 'jogador perdeu'
            } else if (computer == 'paper'){
                resultado = 'jogador ganhou'
            }
        }
        if (jogador == 'paper'){
            if (computer == 'rock'){
                resultado = 'jogador ganhou'
            } else if (computer == 'scissor'){
                resultado = 'jogador perdeu'
            }
        }
        if (jogador == 'rock'){
            if (computer == 'paper'){
                resultado = 'jogador perdeu'
            } else if (computer == 'scissor'){
                resultado = 'jogador ganhou'
            }
        }
        
    }

}
console.log(jogadaJogador)











/*

let jogador = 'scissor'
console.log(computer)
let computer = getComputerChoice()

playRound(jogador, computer)

*/