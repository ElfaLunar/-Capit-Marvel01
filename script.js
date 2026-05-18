const container = document.getElementById('hover-container');
const imageWrapper = document.querySelector('.image-wrapper');
const infoText = document.getElementById('info-text');

container.addEventListener('mouseenter', () => {
  imageWrapper.style.left = '75%';
  infoText.style.opacity = '1';
  infoText.style.transform = 'translateX(0)';
});

container.addEventListener('mouseleave', () => {
  imageWrapper.style.left = '50%';
  infoText.style.opacity = '0';
  infoText.style.transform = 'translateX(-20px)';
});
