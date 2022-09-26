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

let jogador = 'scissor'
console.log(computer)
let computer = getComputerChoice()
function playRound(jogador, computer){
    if (jogador == computer){
        console.log('empate')
    } else{
        if (jogador == 'scissor'){
            if (computer == 'rock'){
                console.log('jogador perdeu')
            } else if (computer == 'paper'){
                console.log('jogador ganhou')
            }
        }
        if (jogador == 'paper'){
            if (computer == 'rock'){
                console.log('jogador ganhou')
            } else if (computer == 'scissor'){
                console.log('jogador perdeu')
            }
        }
        if (jogador == 'rock'){
            if (computer == 'paper'){
                console.log('jogador perdeu')
            } else if (computer == 'scissor'){
                console.log('jogador ganhou')
            }
        }
        
    }

}
playRound(jogador, computer)

