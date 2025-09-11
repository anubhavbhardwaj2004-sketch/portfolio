function toggle() {
  const banner = document.querySelector('.banner');
  banner.classList.toggle('active');
  const menu = document.querySelector('.menu');
  if (banner.classList.contains('active')) {
    menu.style.transform = 'scale(1)';
    menu.style.visibility = 'visible';
    menu.style.opacity = '1';
  } else {
    menu.style.transform = 'scale(0)';
    menu.style.visibility = 'hidden';
    menu.style.opacity = '0';
  }
}
