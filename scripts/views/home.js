// scripts/views/home.js


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
    const playerX = document.getElementById('playerX').value;
    const playerO = document.getElementById('playerO').value;

    if (playerX && playerO) {
        localStorage.setItem('playerX', playerX);
        localStorage.setItem('playerO', playerO);
        alert(`Boa sorte, ${playerX} e ${playerO}! Que vença o melhor!`);
        // Redirecionamento ou inicialização do jogo pode ser adicionado aqui.
    } else {
        alert("Por favor, insira os nomes dos jogadores.");
    }
}
