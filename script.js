// JavaScript for Tic Tac Toe Game

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

// Handle cell click
function handleCellClick(cellIndex) {
  if (board[cellIndex] !== '' || !gameActive) return;

  // Update the board state
  board[cellIndex] = currentPlayer;
  const cell = document.getElementById(`cell-${cellIndex}`);


  // Change cell color based on player
  cell.classList.add(currentPlayer === 'X' ? 'x' : 'o');

  // Check for a win or tie
  if (checkWinner()) {
    alert(`Player ${currentPlayer} wins!`);
    gameActive = false;
    return;
  }

  if (board.every(cell => cell !== '')) {
    alert("It's a tie!");
    gameActive = false;
    return;
  }

  // Switch player
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Check for a winner
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  return winningCombinations.some(combination => 
    combination.every(index => board[index] === currentPlayer)
  );
}

// Start a new game
function startGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  document.querySelectorAll('.cell').forEach(cell => {
    cell.innerText = '';
    cell.classList.remove('x', 'o'); // Remove previous styles
  });
}

// Show game rules
function GameRules() {
  alert("Game Rules:\n\n1. The game is played on a 3x3 grid.\n2. Players take turns placing their marks (X or O).\n3. The first player to align three marks in a row, column, or diagonal wins.\n4. If all cells are filled and no player wins, it's a tie.");
}

// Add event listeners to cells
document.querySelectorAll('.cell').forEach((cell, index) => {
  cell.addEventListener('click', () => handleCellClick(index));
});
