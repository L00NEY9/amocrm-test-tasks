const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let activeInterval;

const formatTimeFromSeconds = (seconds) => {
  const formatNumberToTime = (num) => Math.floor(num).toString().padStart(2, '0');

  return [
      formatNumberToTime(seconds / 3600), // Часы
      formatNumberToTime(seconds % 3600 / 60), // Минуты
      formatNumberToTime(seconds % 3600 % 60), // Секунды
  ].join(":");
};

const createTimerAnimator = () => {
  return (seconds) => {
    let currentTime = seconds;
    timerEl.textContent = formatTimeFromSeconds(currentTime);

    if(activeInterval) clearInterval(activeInterval);

    activeInterval = setInterval(() => {
      currentTime--;
      timerEl.textContent = formatTimeFromSeconds(currentTime);
      if(currentTime === 0) clearInterval(activeInterval);
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D/g,'');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
