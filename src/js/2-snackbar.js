import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();

  const delay = parseInt(event.target.delay.value);
  const state = event.target.state.value;

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

// Додавання классів для стилізації (окремо)
document.addEventListener('DOMContentLoaded', function () {
  const legendContainer = document.createElement('div');
  legendContainer.className = 'legend-container';

  const fieldset = document.querySelector('fieldset');

  const labels = fieldset.querySelectorAll('label');

  labels.forEach(label => {
    legendContainer.appendChild(label);
  });

  fieldset.appendChild(legendContainer);
});

const labelDelay = document.querySelector('.form > label');

labelDelay.classList.add('label-delay');

const inputDelay = labelDelay.querySelector('input[name="delay"]');

inputDelay.classList.add('delay-input');
