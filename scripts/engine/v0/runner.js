let board = Array(9).fill(null);
let currentPlayer = 'X'; // Começa com o jogador X

let countX = 0;
let countO = 0;
let countDraw = 0;

// Limpar tabuleiro
function clearBoard() {
    console.log('clearBoard');

    board.fill(null);
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
    });    
}

// Limpar placar
function clearScore() {
    console.log('clearScore');

    countX = 0;
    countO = 0;
    countDraw = 0;

    saveScore();
}

// Função para reiniciar o jogo
function restartGame() {
    console.log('restartGame');

    currentPlayer = lastWinner || 'X';

    clearBoard();
    showTurn();
}

function makeMove(position) {
    console.log('makeMove');

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
    console.log('checkWinner');

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
        [0, 4, 8], [2, 4, 6] // diagonais
    ];

    hasWinner = winningCombinations.some(combination => 
        combination.every(index => board[index] === player));

    if (hasWinner) {

        lastWinner = player;

        if(hasWinner) {
            if(player === 'X') {
                countX++;
            } else {
                countO++;
            }
        }

        saveScore();

    }

    return hasWinner;
}

// Confere se houve empate
function checkDraw() {
    console.log('checkDraw');

    const hasDraw = board.every(cell => cell);

    if(hasDraw){
        countDraw++;
        saveScore();
    }

    return hasDraw;
}

function saveScore() {
    console.log('saveSCore');

    sessionStorage.setItem('countX', (countX ?? 0) );
    sessionStorage.setItem('countO', (countO ?? 0) );
    sessionStorage.setItem('countDraw', (countDraw ?? 0) );
    sessionStorage.setItem('countTotal', (countX ?? 0) + (countO ?? 0) + (countDraw ?? 0) );
}
