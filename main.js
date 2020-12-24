const btn = document.querySelector('.refresh-btn');
const waitBtn = document.querySelector('.wait-btn');
const roulette = document.querySelector('.roulette');
const messages = document.querySelectorAll('.msg');
const gap = 1080;
let angle = 0;
let isButtonEnabled = true;

const items = {
  poroshochek: {
    deg: 0,
    node: document.querySelector('.poroshochek'),
  },
  miska: {
    deg: 45,
    node: document.querySelector('.miska'),
  },
  eon: {
    deg: 90,
    node: document.querySelector('.eon'),
  },
  micro: {
    deg: 135,
    node: document.querySelector('.micro'),
  },
  tapki: {
    deg: 180,
    node: document.querySelector('.tapki'),
  },
  vilka: {
    deg: 225,
    node: document.querySelector('.vilka'),
  },
  tabachok: {
    deg: 270,
    node: document.querySelector('.tabachok'),
  },
  bitochek: {
    deg: 315,
    node: document.querySelector('.bitochek'),
  },
};

const getRandomItemIndex = () => {
  const keys = Object.keys(items);
  return keys[(keys.length * Math.random()) << 0];
};

const setIsButtonEnable = (enable) => {
  isButtonEnabled = enable;
  btn.style.display = enable ? 'flex' : 'none';
  waitBtn.style.display = enable ? 'none' : 'flex';
};

const hideNodes = () => messages.forEach((el) => el.classList.remove('show'));

const rotateRoulette = () => {
  hideNodes();
  setIsButtonEnable(false);
  const randomItemIndex = getRandomItemIndex();
  const randomItem = items[randomItemIndex];
  angle += gap;
  roulette.style.transform = `rotate(-${randomItem.deg + angle}deg)`;
  setTimeout(() => {
    setIsButtonEnable(true);
    randomItem.node.classList.add('show');
    delete items[randomItemIndex];
  }, 5000);
};

btn.addEventListener('click', rotateRoulette);
