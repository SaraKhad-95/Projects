'use strict';
const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const hidden = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const closeModals = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

showModal.forEach(el => {
  el.addEventListener('click', openModal);
});

closeModal.addEventListener('click', closeModals);
overlay.addEventListener('click', closeModals);

//Evento per uscire premendo il tasto ESC
//Ogni volta che si verifica un evento javascript crea un oggetto contenente l'evento stesso
//Ora per fare si che ascolti l'effettivo tasto sulla tastiera passiamo al parametro della funzione event
//Ora dovremmo fare in modo di passare l'oggetto come argomento alla chiamata della funzione quando su verifica l'evento

document.addEventListener('keydown', event => {
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModals();
  }
});
