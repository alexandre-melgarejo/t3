document.addEventListener("DOMContentLoaded", function() {
    const playerX = localStorage.getItem('playerX') || 'X';
    const playerO = localStorage.getItem('playerO') || 'O';

    document.getElementById('nameX').textContent = playerX;
    document.getElementById('nameO').textContent = playerO;

    // const startTime = new Date().toLocaleString();
    // document.getElementById('startTime').textContent = startTime;
});

// Outras funções do jogo
function makeMove(index) {
    // Implementar a lógica para registrar jogadas
}

function restartGame() {
    // Implementar a lógica para reiniciar o jogo
}

function goHome() {
    window.location.href = 'home.html';
}

function showEmptyCells() {
    // Implementar a lógica para mostrar espaços vazios
}
