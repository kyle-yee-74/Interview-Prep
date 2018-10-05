const area = document.querySelector('.mouse-area');
const state = {
  throttled: {
    x: 0,
    y: 0
  },
  debounced: {
    x:0,
    y:0
  }
};

area.addEventListener('mousemove', coordUpdater('realtime'));
area.addEventListener('mousemove', throttled(1000, coordUpdater('throttled')));
area.addEventListener('mousemove', debounced(500, coordUpdater('debounced')));

function coordUpdater(prefix) {
  const x = document.getElementById(`${prefix}X`);
  const y = document.getElementById(`${prefix}Y`);
  return function (e) {
    console.log(arguments);
    x.innerText = e.clientX;
    y.innerText = e.clientY;
  }
}

function throttled(delay, func) {
  let lastCall = 0;
  return function (...args) {
    const timeNow = (new Date).getTime();
    if (timeNow - lastCall < delay) {
      return;
    }
    lastCall = timeNow;
    return func(arguments[0]);
  }
}

function debounced(delay, func) {
  let timerId = null;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func(arguments[0]);
      timerId = null;
    }, delay);
  }
}
