let hamburger_button = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
hamburger_button.addEventListener("click", ()=>{
    menu.classList.toggle("menu_show");
    hamburger_button.classList.toggle("hamburger_clicked")
});


// typejs
const typed = new Typed('.multi-text', {
    strings: ['Architect.', 'Urban Planer.', 'Bim.'],
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,
    loop: true
})

// for projects
let right = document.querySelector(".fa-angle-double-right");
let left =  document.querySelector(".fa-angle-double-left");
right.addEventListener("click", ()=>{
    document.querySelector(".number").innerHTML = "2"
    document.querySelector(".building1").classList.add("building1-clicked")
    document.querySelector(".building2").classList.add("building2-clicked")
    document.querySelector(".project1").classList.add("project1-clicked")
    document.querySelector(".project2").classList.add("project2-clicked")
})
left.addEventListener("click",()=>{
    document.querySelector(".number").innerHTML = "1"
    document.querySelector(".building1").classList.remove("building1-clicked")
    document.querySelector(".building2").classList.remove("building2-clicked")
    document.querySelector(".project1").classList.remove("project1-clicked")
    document.querySelector(".project2").classList.remove("project2-clicked")
})