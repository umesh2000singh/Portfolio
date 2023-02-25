// hamburger menu
document.querySelector(".menu").addEventListener("click", menu_reveal);
function menu_reveal() {
    document.querySelector(".menu_items").classList.toggle("reveal");
    document.querySelector(".cross").classList.toggle("cross_after");
    document.querySelector(".menu").classList.toggle("menu_after");
};

//main body
// corousal logic
document.querySelector(".fa-angle-right").addEventListener("click", next)
function next(){
    document.querySelector(".content1").classList.add("content1_clicked");
    document.querySelector(".content2").classList.add("content2_clicked");
    document.querySelector(".photo1").classList.add("photo1_clicked");
    document.querySelector(".photo2").classList.add("photo2_clicked");
    
}
document.querySelector(".fa-angle-left").addEventListener("click", prev);
function prev(){
    document.querySelector(".content1").classList.remove("content1_clicked");
    document.querySelector(".content2").classList.remove("content2_clicked");
    document.querySelector(".photo1").classList.remove("photo1_clicked");
    document.querySelector(".photo2").classList.remove("photo2_clicked");
}