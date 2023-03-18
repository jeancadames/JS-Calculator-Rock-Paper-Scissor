const gameOptions = document.querySelectorAll('.option');
const winnerTxt = document.createElement('p');
const playerSelection = document.getElementById('player-selection');
const computerOption = document.getElementById('computer-selection');
const dashboard = document.querySelector('.dashboard');
const startBtn = document.getElementById('start');
const draws = document.getElementById('draws');
const playerW = document.getElementById('player-w');
const computerW = document.getElementById('computer-w');
const announcerP = document.createElement('p');
const restartBtn = document.getElementById('restart');

let playerWins = 0;
let computerWins = 0;
let draw = 0;

function announceWinner(counter, winner){
    if (counter == 5){
        announcerP.innerText = `The ${winner} win! Want to try again?`
        announcerP.style.marginTop = '2rem';
        dashboard.appendChild(announcerP);
        gameOptions.forEach(option => {
            option.style.display = 'none';
        });
        startBtn.style.display = 'none';
        restartBtn.style.display = 'flex';
    }
}

restartBtn.addEventListener('click', ()=>{
    dashboard.removeChild(announcerP);
    gameOptions.forEach(option => {
        option.style.display = 'flex';
    });
    startBtn.style.display = 'flex';
    restartBtn.style.display = 'none';

    playerWins = 0;
    computerWins = 0;
    draw = 0;

    playerW.innerText = playerWins;
    computerW.innerText = computerWins 
    draws.innerText = draw;
})

function computerPlay () {
        return computerOption.innerText = `${gameOptions[Math.floor(Math.random()*gameOptions.length)].innerText}`;
}

function playerPlay (){
    gameOptions.forEach(option => {
        option.addEventListener('click', ()=> {
            playerSelection.innerText = `${option.innerText}`
            computerOption.innerText = '';
        })
    });
}

playerPlay();

function playRound(){
    if(playerSelection.innerText === computerOption.innerText){
        draw++;
        draws.innerText = draw;
        winnerTxt.innerText = 'It\'s a draw!';
        dashboard.appendChild(winnerTxt)
    }
    else if((playerSelection.innerText === 'Rock' && computerOption.innerText === 'Scissors') || (playerSelection.innerText === 'Scissors' && computerOption.innerText === 'Paper') || (playerSelection.innerText === 'Paper' && computerOption.innerText === 'Rock')) {
        playerWins++;
        playerW.innerText = playerWins;
        winnerTxt.innerText = `${playerSelection.innerText} beats ${computerOption.innerText}, you win!`
        dashboard.appendChild(winnerTxt)
        announceWinner(playerWins, 'player');
    } 
    else {
        computerWins++;
        computerW.innerText = computerWins;
        winnerTxt.innerText = `${computerOption.innerText} beats ${playerSelection.innerText}, you lose!`
        dashboard.appendChild(winnerTxt)
        announceWinner(computerWins, 'computer');
    }
}

startBtn.addEventListener('click', ()=> {
  while (!playerSelection.innerText) {
    alert('You cannot play until you choose an option');
    return;
  }
  computerPlay();
  playRound();
});
