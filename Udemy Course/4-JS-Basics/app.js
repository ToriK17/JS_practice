/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

// dice = Math.floor(Math.random() * 6 ) + 1;

//         querySelector selects values and elements just like we do in CSS
// document.querySelector('#current-' + activePlayer).textContent = dice;
//         using querySelector to manipulate the DOM via HTML
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// we add a anonoymous function below in the addEventListener method. One without a name that cannot be reused outside this method

document.querySelector('.btn-roll').addEventListener('click', function() {
  // 1. Random number 
  var dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.diplay = 'block';
  diceDOM.src = 'dice-' + dice + '.png';

  // 3. Update the round score IF the rolled number was NOT a 1 
  if (dice !== 1) {
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    // Next Player
    nextPlayer();
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  // Adds Current score to global score
  scores[activePlayer] += roundScore;

  // update th UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  // Check if player won the game

  //Next Player
  nextPlayer(); 
});  

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
}