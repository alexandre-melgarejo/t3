
let board = Array(9).fill(null);
let currentPlayer = 'X'; // Começa com o jogador X
let countX = 0;
let countO = 0;
let countDraw = 0;

function makeMove(position) {

    if (!board[position]) {

        let gameOver = true

        board[position] = currentPlayer;
        document.getElementById(`cell${position}`).textContent = currentPlayer;

        if (checkWinner(currentPlayer)) {
            setTimeout(() => {
                alert(`${currentPlayer} venceu!`);
                restartGame();
            }, 300);            
        } else if (checkDraw()) {
            setTimeout(() => {
                alert('Empate!');
                restartGame();
            }, 300);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            gameOver = false;
        }

        showTurn();
        if(gameOver) {
            showScore();
        }

    }

}

// Confere se a ultima jogada venceu a partida
function checkWinner(player) {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
        [0, 4, 8], [2, 4, 6] // diagonais
    ];

    hasWinner = winningCombinations.some(combination => 
        combination.every(index => board[index] === player));

    if(hasWinner) {
        if(player === 'X') {
            countX++;
        } else {
            countO++;
        }
    }

    return hasWinner;

}

// Confere se houve empate
function checkDraw() {

    const isDraw = board.every(cell => cell);

    if(isDraw){
        countDraw++;
    }

    return isDraw;

}

// Função para reiniciar o jogo
function restartGame() {
    board.fill(null);
    currentPlayer = 'X';
    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell${i}`).textContent = '';
    }
    showScore();
    showTurn();
}

function showScore() {
    document.getElementById('scoreX').textContent = countX;
    document.getElementById('scoreO').textContent = countO;
    document.getElementById('scoreDraw').textContent = countDraw;
    document.getElementById('scoreTotal').textContent = countX + countO + countDraw;
}

// Mostra mensagem com o jogador da vez
function showTurn() {
    const playerName = localStorage.getItem('player' + currentPlayer);
    document.getElementById('message').textContent = 'Sua vez ' + playerName;
}
