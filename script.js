let hamburger_button = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
hamburger_button.addEventListener("click", ()=>{
    menu.classList.toggle("menu_show");
    hamburger_button.classList.toggle("hamburger_clicked")
});
// scroll animation
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.right', { origin: 'left' });
ScrollReveal().reveal('.left', { origin: 'bottom' });

// typejs
const typed = new Typed('.multi-text', {
    strings: ['Architect.', 'Urban Planer.', 'Bim Architect.'],
    typeSpeed:100,
    backSpeed:90,
    backDelay:1000,
    loop: true
})