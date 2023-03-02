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
ScrollReveal().reveal('.row', { origin: 'left' });
ScrollReveal().reveal('.about-heading', { origin: 'top' });


// typejs
const typed = new Typed('.multi-text', {
    strings: ['Architect.', 'Urban Planer.', 'Bim.'],
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,
    loop: true
})