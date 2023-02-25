// hamburger menu
document.querySelector(".menu").addEventListener("click", menu_reveal);
function menu_reveal() {
    document.querySelector(".menu_items").classList.toggle("reveal");
    document.querySelector(".cross").classList.toggle("cross_after");
    document.querySelector(".menu").classList.toggle("menu_after");
};

//main body
document.querySelector(".fa-angle-right").addEventListener("click", test)
function test(){
    document.querySelector(".content2").classList.toggle("content2_clicked");
    document.querySelector(".content1").classList.toggle("content1_clicked");
}