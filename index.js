function toggle() {
  const banner = document.querySelector('.banner');
  banner.classList.toggle('active');
  const menu = document.querySelector('.menu');
  if (banner.classList.contains('active')) {
    menu.style.transform = 'scale(1)';
    menu.style.visibility = 'visible';
    menu.style.opacity = '1';
    menu.style.backgroundColor = 'rgba(0, 0, 0, 0.8) opacity(-10)';
  } else {
    menu.style.transform = 'scale(0)';
    menu.style.visibility = 'hidden';
    menu.style.opacity = '0';
  }
}
const banner = document.querySelector('.banner');
banner.addEventListener('click', toggle);

 const menu = document.querySelector('.menu');
 menu.addEventListener('click', toggle);
 menu.addEventListener('click', (e) => {
  
  e.stopPropagation();
 });
 ;
