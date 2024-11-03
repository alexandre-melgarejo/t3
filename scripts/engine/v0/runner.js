
let board = Array(9).fill(null);
let currentPlayer = 'X'; // Começa com o jogador X

function makeMove(position) {
    if (!board[position]) {
        board[position] = currentPlayer;
        document.getElementById(`cell${position}`).textContent = currentPlayer;

        if (checkWinner(currentPlayer)) {
            setTimeout(() => {
                alert(`${currentPlayer} venceu!`);
                restartGame();
            }, 300);            
//            restartGame();
        } else if (board.every(cell => cell)) {
            setTimeout(() => {
                alert('Empate!');
                restartGame();
            }, 300);//            restartGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Função para verificar se o jogador ganhou
function checkWinner(player) {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
        [0, 4, 8], [2, 4, 6] // diagonais
    ];

    return winningCombinations.some(combination => 
        combination.every(index => board[index] === player)
    );
}

// Função para reiniciar o jogo
function restartGame() {
    board.fill(null);
    currentPlayer = 'X';
    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell${i}`).textContent = '';
    }
}
