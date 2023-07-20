
const bntMobile = document.querySelector('[data-header-nav-button]'); 

bntMobile.addEventListener('click', toggleMenu);

function toggleMenu() {
    let active = "active"
    const nav = document.querySelector('[data-header-nav]');
    nav.classList.toggle('active') // adiciona caso não tenha e remova caso tenha
    alert('teste');
}