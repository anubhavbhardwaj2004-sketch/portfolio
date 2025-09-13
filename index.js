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
const aboutBtn = document.getElementById('About-btn');
aboutBtn.addEventListener('click', () => {
  window.open('about.html', '_blank');
});
const userBtn = document.getElementById('User-btn');
userBtn.addEventListener('click', () => {
  window.open('user.html', '_blank');
});
const contact_btn = document.getElementById('Contact-btn');
contact_btn.addEventListener('click', () => {
  window.open('contact.html', '_blank');
});
//watchap text 
            document.getElementById('con').addEventListener('click', function(e) {
                e.preventDefault();
                var phone = '7042178046';
                var message = 'connect for making websites';
                var url = 'https://wa.me/' + phone + '?text=' + encodeURI(message);
                window.open(url, '_blank');
            });