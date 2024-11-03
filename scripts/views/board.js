document.addEventListener("DOMContentLoaded", function() {
    const playerX = localStorage.getItem('playerX') || 'X';
    const playerO = localStorage.getItem('playerO') || 'O';

    document.getElementById('nameX').textContent = playerX;
    document.getElementById('nameO').textContent = playerO;

    // const startTime = new Date().toLocaleString();
    // document.getElementById('startTime').textContent = startTime;
});

function goHome() {
    window.location.href = 'home.html';
}

function showEmptyCells() {
    // Implementar a lógica para mostrar espaços vazios
}
