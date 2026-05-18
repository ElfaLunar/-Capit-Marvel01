const container = document.getElementById('hover-container');
const heroImage = document.getElementById('hero-image');
const infoText = document.getElementById('info-text');

container.addEventListener('mouseenter', () => {
  heroImage.style.transform = 'translateX(250px)';
  infoText.style.opacity = '1';
  infoText.style.transform = 'translateX(0)';
});

container.addEventListener('mouseleave', () => {
  heroImage.style.transform = 'translateX(0)';
  infoText.style.opacity = '0';
  infoText.style.transform = 'translateX(-20px)';
});
