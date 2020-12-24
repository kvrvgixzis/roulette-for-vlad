console.log('Hello world!');

const btn = document.querySelector('.refresh-btn');
const waitBtn = document.querySelector('.wait-btn');
const roulette = document.querySelector('.roulette');

const items = {
  poroshochek: 0,
  miska: 45,
  eon: 90,
  micro: 135,
  tapki: 180,
  vilka: 225,
  tabachok: 270,
  bitocheck: 315,
};

const messages = {
  poroshochek: document.querySelector('.poroshochek'),
  miska: document.querySelector('.miska'),
  eon: document.querySelector('.eon'),
  micro: document.querySelector('.micro'),
  tapki: document.querySelector('.tapki'),
  vilka: document.querySelector('.vilka'),
  tabachok: document.querySelector('.tabachok'),
  bitocheck: document.querySelector('.bitocheck'),
};

const gap = 1080;
let angle = 0;
let btnActive = true;

const randomItem = (obj) => {
  const keys = Object.keys(obj);
  const key = keys[(keys.length * Math.random()) << 0];
  return key;
};

const offButton = () => {
  btnActive = false;
  btn.style.display = 'none';
  waitBtn.style.display = 'flex';
};

const onButton = () => {
  btnActive = true;
  btn.style.display = 'flex';
  waitBtn.style.display = 'none';
};

const rotateRoulette = () => {
  if (!btnActive) return;
  const selectedItem = randomItem(items);

  Object.keys(messages).forEach((key) => {
    console.log('key: ', key);
    console.log('messages[key]: ', messages[key]);
    messages[key].classList.remove('show');
  });

  offButton();
  angle += gap;
  roulette.style.transform = `rotate(-${items[selectedItem] + angle}deg)`;
  setTimeout(() => {
    onButton();
    messages[selectedItem].classList.add('show');
    console.log('messages[selectedItem]: ', messages[selectedItem]);
  }, 5000);
};

btn.addEventListener('click', rotateRoulette);
