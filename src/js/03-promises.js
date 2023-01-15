const form = document.querySelector('.form');


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => setTimeout(() => {
    if (shouldResolve) {
      resolve({ position, delay })
    } else {
      reject({ position, delay })
    }
  }, delay))
}

function setIntervalOnFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);

  let amount = parseInt(formProps.amount)
  const firstDelay = parseInt(formProps.delay)
  const delayStep = parseInt(formProps.step)

  for (let i = 0; i < amount; i++) {
    const calculatedDelay = i == 0 ? firstDelay : (firstDelay + i * delayStep)

    createPromise(i, calculatedDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

form.addEventListener('submit', setIntervalOnFormSubmit);