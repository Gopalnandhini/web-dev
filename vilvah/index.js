const goTopBtn =document.querySelector('.go-top-btn');
window.addEventListener('scroll', checkHeight)
function checkHeight(){
  if(window.scrollY > 200) {
    goTopBtn.style.display = "flex"
  } else {
    goTopBtn.style.display = "none"
  }
}

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behaviour: "smooth"
  })
})

document.addEventListener('DOMContentLoaded', () => {
const counter = document.getElementById('counter');
const targetNumber = 100;  // Change this to the number you want to count to
const duration = 2000;  // Duration of the animation in milliseconds
const updateCounter = () => {
    const startTime = performance.now();
    const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentNumber = Math.floor(progress * targetNumber);
        counter.textContent = currentNumber;
        if (progress < 1) {
            const plus = document.createElement('sup');
            plus.textContent = '+';
            counter.appendChild(plus);
            requestAnimationFrame(animate);
        } else {
            counter.textContent = targetNumber;
            const plus = document.createElement('sup');
            plus.textContent = '+';
            counter.appendChild(plus);
        }
    };
    requestAnimationFrame(animate);
};
updateCounter();
});

document.addEventListener('DOMContentLoaded', () => {
const counter = document.getElementById('counter1');
const targetNumber = 400;  // Change this to the number you want to count to
const duration = 2000;  // Duration of the animation in milliseconds
const updateCounter = () => {
    const startTime = performance.now();
    const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentNumber = Math.floor(progress * targetNumber);
        counter.textContent = currentNumber;
        if (progress < 1) {
            const plus = document.createElement('sup');
            plus.textContent = '+';
            counter.appendChild(plus);
            requestAnimationFrame(animate);
        } else {
            counter.textContent = targetNumber;
            const plus = document.createElement('sup');
            plus.textContent = '+';
            counter.appendChild(plus);
        }
    };
    requestAnimationFrame(animate);
};
updateCounter();
});
