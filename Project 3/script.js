const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

function initGame() {
  diceEl.classList.add('hidden');
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
}

function switchPlayer() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  //Useremo il metodo toggle per rimuovere dove è presente la classe e aggiungerla dove nn è presente
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', () => {
  if (playing) {
    //1. Creare un numero random compreso da 1 a 6
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display dado
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. Se è 1 cambiare player
    if (dice !== 1) {
      //Aggiungere il punteggio al current valore
      currentScore += dice;

      //Inseriamo dinamicamente il punteggio al giocatore corrente
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//Quando si fa click al bottone Hold il punteggio attuale vada nel punteggio totale
btnHold.addEventListener('click', () => {
  if (playing) {
    //1. Aggiungere il currentScore al punteggio del giocatore corrente
    //   scores[1] = scores[1] + currentScore;
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Controllare che il punteggio massimo sia >= 100
    if (scores[activePlayer] >= 20) {
      //Termine del gioco
      playing = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      diceEl.classList.add('hidden');
    } else {
      //4. Switch al prossimo giocatore
      switchPlayer();
    }
  }
});

//RESETTARE IL GIOCO CON IL BOTTONE NEW GAME
btnNew.addEventListener('click', () => {
  initGame();
  playing = true;
});
