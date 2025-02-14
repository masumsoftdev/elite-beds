// Header JS

window.addEventListener("scroll", function() {
    const header = document.getElementById("ei-header");
    if (window.scrollY > 50 ) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// Mobile Menu

const menu = document.getElementById('menu');
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('open');
});

menuClose.addEventListener('click', function() {
    menu.classList.remove('open');
});