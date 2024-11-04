let board = Array(9).fill(null);
let starterPlayer = 'X'; // Começa com o jogador X
let currentPlayer = starterPlayer;

let gameOver = true; // Controla se o jogo acabou (winner ou draw)

let countX = 0;
let countO = 0;
let countDraw = 0;

// Limpar tabuleiro
function clearBoard() {
    console.log('clearBoard');

    board.fill(null);
    showBoard(board);
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

    gameOver = false;

    clearBoard();
    showTurn();
}

// Registra o movimento
async function makeMove(position) {
    console.log('makeMove');

    if (gameOver) {
        return;
    }

    if (board[position]) {
        showMessage('Essa posição não está disponível.', 'danger');
    } else {

        board[position] = currentPlayer;
        showBoard(board);

        if (checkWinner(currentPlayer)) {
            const playerName = localStorage.getItem(`player${currentPlayer}`) || `Jogador ${currentPlayer}`;
            await showMessage(`Parabéns ${playerName}, essa batalha foi sua! Comemore! `, 'success', true);
        } else if (checkDraw()) {
            await showMessage('A batalha está acirrada, tivemos um empate! ', 'warning', true);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            gameOver = false;
            showTurn();
        }

        if(gameOver) {
            restartGame();
        }

    }

}

// Confere se a ultima jogada venceu a partida
function checkWinner(player) {
    console.log('checkWinner');

    let hasWinner = false;

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
        [0, 4, 8], [2, 4, 6] // diagonais
    ];

    const arrayWinner = winningCombinations.find(combination =>
        combination.every(index => board[index] === player));

    if (arrayWinner) {

        // Quem ganhou, começa a proxima partida
        lastWinner = player;
        currentPlayer = lastWinner;
        if(player === 'X') {
            countX++;
        } else {
            countO++;
        }
        
        hasWinner = true;
        gameOver = true;

        highlightWinnerCells(arrayWinner);
        saveScore();
        showScore();

    }

    return hasWinner;
}

// Confere se houve empate
function checkDraw() {
    console.log('checkDraw');

    const hasDraw = board.every(cell => cell);

    if(hasDraw){
        // Reveza inicio em caso de empate
        currentPlayer = starterPlayer === 'X' ? 'O' : 'X';
        starterPlayer = currentPlayer;

        gameOver = true;

        countDraw++;

        highlightDrawCells();
        saveScore();
        showScore();
    }

    return hasDraw;
}

// Grava o score
function saveScore() {
    console.log('saveSCore');

    sessionStorage.setItem('countX', (countX ?? 0) );
    sessionStorage.setItem('countO', (countO ?? 0) );
    sessionStorage.setItem('countDraw', (countDraw ?? 0) );
    sessionStorage.setItem('countTotal', (countX ?? 0) + (countO ?? 0) + (countDraw ?? 0) );
}
