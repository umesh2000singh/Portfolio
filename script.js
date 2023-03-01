let hamburger_button = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
hamburger_button.addEventListener("click", ()=>{
    menu.classList.toggle("menu_show");
    hamburger_button.classList.toggle("hamburger_clicked")
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
});
ScrollReveal().reveal('.right', { origin: 'left' });
ScrollReveal().reveal('.left', { origin: 'bottom' });