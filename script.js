let hamburger_button = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
hamburger_button.addEventListener("click", ()=>{
    menu.classList.toggle("menu_show");
    hamburger_button.classList.toggle("hamburger_clicked")
});


// typejs
const typed = new Typed('.multi-text', {
    strings: ['Architect.', 'Chomu.', 'Suar'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
})