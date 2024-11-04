var lastWinner = null;
var startNewGame = true;

// Inicia pagina
document.addEventListener("DOMContentLoaded", function() {
    console.log('runner - DOMContentLoaded');

    const playerX = localStorage.getItem('playerX') || 'X';
    const playerO = localStorage.getItem('playerO') || 'O';

    document.getElementById('nameX').textContent = playerX;
    document.getElementById('nameO').textContent = playerO;

    if (startNewGame) {
        showMessage(`🍀 Boa sorte, <strong>${playerX}</strong> e <strong>${playerO}</strong>! 🍀`, 'success', false);
        gameOver = false;
    }

    this.startNewGame = false;
    
    setTimeout(() => {
        startBoard();
        startScore();
    }, 2000);

});

// Volta para página inicial do jogo
function goHome() {
    console.log('goHome');

    window.location.href = 'home.html';
}

function showEmptyCells() {
    console.log('showEmptyCells');

    // Implementar a lógica para mostrar espaços vazios
}

// Exibe score na tela
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

// Mostra mensagem informando jogador da vez
function showTurn() {
    console.log('showTurn - ' + currentPlayer);

    const playerName = localStorage.getItem('player' + currentPlayer);
    showMessage('Vez de: <strong>' + playerName + '</strong>', 'info');
}

// Limpa e mostra o score
function startScore() {
    console.log('startScore');

    if (this.startNewGame) {
        clearScore();
    }
    showScore();
}

// Limpa o tabuleiro e convida player para jogar
function startBoard() {
    console.log('startBoard');

    clearBoard();
    showTurn();
}

function showBoard(board) {
    document.querySelectorAll('.cell').forEach((cell, index) => {
        cell.textContent = board[index] || '';
        // cell.style.backgroundColor = '';

        cell.classList.remove('bg-secondary-subtle');
        cell.classList.remove('bg-primary-subtle');
        cell.classList.remove('fw-bold');
        cell.classList.remove('text-primary');
    });    
}

// Pinta as celulas vencedoras
function highlightWinnerCells(arrayWinner) {
    arrayWinner.forEach(index => {
        const cell = document.getElementById(`cell${index}`);
        // cell.style.backgroundColor = '#76ff03';
        cell.classList.add('bg-primary-subtle');
        cell.classList.add('fw-bold');
        cell.classList.add('text-primary');
    });
}

// Pinta o tabuleiro no empate
function highlightDrawCells() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.classList.add('bg-secondary-subtle');
    });
}

// Exibe mensagens para os players
function showMessage(message, type = info, pause = false) {
    console.log('showMessage - ' + message);

    const messageDiv = document.getElementById('message');

    let htmlContent = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            ${message}
                        `;

    if (pause === true) {
        // htmlContent += `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;
        // htmlContent += `<button id="close-message" type="button" class="button btn-outline-light" data-bs-dismiss="alert" aria-label="Close">Clique para continuar</button>`;
        htmlContent += `<button id="close-message" type="button" class="btn btn-link btn-sm" aria-label="Close">clique para continuar</button>`;
    }
    htmlContent += `</div>`;

    messageDiv.innerHTML = htmlContent;
    messageDiv.style.display = 'block';

    if (pause === true) {
        return new Promise((resolve) => {
            messageDiv.querySelector('#close-message').addEventListener('click', () => {
                messageDiv.style.display = 'none';
                resolve();
            });
        });
    }
}
