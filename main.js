// Estourar o balao clicado

const containerBalao = document.querySelector('.container-balao');

setInterval(adicionarBalao, 3000);

function adicionarBalao() {
  const balaoImg = document.createElement('img');
  balaoImg.setAttribute('src', './assets/baloon.png');
  balaoImg.setAttribute('class', 'balao');
  balaoImg.setAttribute('onclick', 'estourarBalao(this)');

  let valorLeft = Math.floor(Math.random() * 90);
  let valorTop = Math.floor(Math.random() * 80);
  balaoImg.style.left = valorLeft + 'vw';
  balaoImg.style.top = valorTop + 'vh';

  containerBalao.appendChild(balaoImg);
}

function estourarBalao(balao) {
  balao.remove();
}
