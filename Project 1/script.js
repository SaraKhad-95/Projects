//Cominciamo a impostare l'applicazione
//1. Aggiungo l'evento del click del bottone
//2. Vogliamo che ci fa il log dell'input numerico
//3. Catturiamo l'input dell'utente in una variabile: sono stringhe
//4. Utilizziamo Number per convertire in numero
//5. Supponiamo che nn ci sia il numero digitato dall'utente e log qualcosa
//6. Ora creiamo il numero random
//7. Creiamo blocchi if/else delle varie situazioni che possono verificarsi

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //Quando non ci sono input
  if (!guess) {
    // document.querySelector('.message').textContent = '😭 Try again ';
    displayMessage('😭 Try again ');
  }

  //Quando il giocatore vince
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number! ';
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //Quando l'input è troppo alto 0 troppo basso
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High!' : 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Implementare il button AGAIN che ripristina il gioco
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
