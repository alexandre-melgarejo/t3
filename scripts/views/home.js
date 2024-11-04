
// Inicia pagina inicial do jogo
document.addEventListener("DOMContentLoaded", function() {
    console.log('home - DOMContentLoaded');

    //window.onload = function() {

    const playerX = localStorage.getItem('playerX');
    const playerO = localStorage.getItem('playerO');

    if (playerX) {
        document.getElementById('playerX').value = playerX;
    }

    if (playerO) {
        document.getElementById('playerO').value = playerO;
    }

});

// Atualiza os nomes enquanto são digitados
function updateBattleText() {
    const playerX = document.getElementById('playerX').value || 'X';
    const playerO = document.getElementById('playerO').value || 'O';

    document.getElementById('nameX').textContent = playerX;
    document.getElementById('nameO').textContent = playerO;
}

// Event listeners para atualizar o texto conforme o usuário digita
document.getElementById('playerX').addEventListener('input', updateBattleText);
document.getElementById('playerO').addEventListener('input', updateBattleText);

function startGame() {
    let playerX = document.getElementById('playerX').value;
    let playerO = document.getElementById('playerO').value;

    localStorage.setItem('playerX', playerX);
    localStorage.setItem('playerO', playerO);

    playerX = playerX || 'X';
    playerO = playerO || 'O';

    window.location.href = './board.html';

}
