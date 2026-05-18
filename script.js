const card = document.getElementById('hover-container');
const imgWrapper = document.querySelector('.image-wrapper');
const text = document.getElementById('info-text');

card.addEventListener('mouseenter', () => {
  imgWrapper.style.left = '70%';
  text.style.opacity = '1';
});

card.addEventListener('mouseleave', () => {
  imgWrapper.style.left = '50%';
  text.style.opacity = '0';
});
