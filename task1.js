
 var h_nav_bar_resp = document.querySelector(".h-nav-bar-resp");
var nav_list= document.querySelector(".list");
 var nav_bar = document.querySelector(".nav_bar");
 var burger = document.querySelector(".bar-icon");

burger.addEventListener("click",()=>{
    h_nav_bar_resp.classList.toggle("v-class-resp")
    nav_list.classList.toggle("v-class-resp")
    nav_bar.classList.toggle("h-nav-bar-resp")
});
