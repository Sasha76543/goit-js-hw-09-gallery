//Завдання 1
document.addEventListener('DOMContentLoaded', function () {
    const sliderInput = document.querySelector('.slider__input');
    const sliderImage = document.querySelector('.slider__image');
    function resizeImage() {
      const sliderValue = sliderInput.value;
      const newSize = sliderValue * 3;
      sliderImage.style.width = `${newSize}px`;
      sliderImage.style.height = `${newSize}px`;
    }
    function debounce(func, delay) {
      let timeout;
      return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
      };
    }
    const debouncedResizeImage = debounce(resizeImage, 500);
    sliderInput.addEventListener('input', debouncedResizeImage);
  });

//Завдання 2
// const box = document.getElementById('box');

// const moveBox = (event) => {
//   box.style.left = `${event.clientX}px`;
//   box.style.top = `${event.clientY}px`;
// };

// const debouncedMoveBox = _.debounce(moveBox, 100);

// document.addEventListener('mousemove', debouncedMoveBox)
