const tg = window.Telegram.WebApp;
tg.expand(); // fullscreen mode

let coins = 0;
const button = document.getElementById('mine');
const counter = document.getElementById('coins');

button.addEventListener('click', () => {
  coins++;
  counter.textContent = `Coins: ${coins}`;
});

