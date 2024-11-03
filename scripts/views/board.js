var lastWinner = null;
var startNewGame = true;

document.addEventListener("DOMContentLoaded", function() {
    console.log('runner - DOMContentLoaded');

    const playerX = localStorage.getItem('playerX') || 'X';
    const playerO = localStorage.getItem('playerO') || 'O';

    document.getElementById('nameX').textContent = playerX;
    document.getElementById('nameO').textContent = playerO;

    this.startNewGame = false;

    startBoard();
    startScore();

});

function goHome() {
    console.log('goHome');

    window.location.href = 'home.html';
}

function showEmptyCells() {
    console.log('showEmptyCells');

    // Implementar a lógica para mostrar espaços vazios
}

function showScore() {
    console.log('showScore');

    const countX = Number(sessionStorage.getItem('countX')) || 0;
    const countO = Number(sessionStorage.getItem('countO')) || 0;
    const countDraw = Number(sessionStorage.getItem('countDraw')) || 0;
    const countTotal = countX + countO + countDraw;

    document.getElementById('scoreX').textContent = countX;
    document.getElementById('scoreO').textContent = countO;
    document.getElementById('scoreDraw').textContent = countDraw;
    document.getElementById('scoreTotal').textContent = countTotal;
}

// Mostra mensagem para o jogador da vez
function showTurn() {
    console.log('showTurn - ' + currentPlayer);

    const playerName = localStorage.getItem('player' + currentPlayer);
    document.getElementById('message').textContent = 'Sua vez ' + playerName;
}

function startScore() {
    console.log('startScore');

    if (this.startNewGame) {
        clearScore();
    }
    showScore();
}

function startBoard() {
    console.log('startBoard');

    clearBoard();
    showTurn();
}