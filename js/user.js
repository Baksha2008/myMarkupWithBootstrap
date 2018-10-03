var numb = document.querySelector('#numb');

subMenu = document.querySelector('#subMenu');

numb.onclick = pushMenu;

function pushMenu() {
  subMenu.classList.toggle('active');
}