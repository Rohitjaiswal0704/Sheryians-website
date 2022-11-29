var nav_i = document.querySelector(".nav>i");
var menuclick= document.querySelector(".menuclick");
var menuclick_img=document.querySelector(".menuclick>img");
var container1 = document.querySelector(".container1");

nav_i.addEventListener("click",function(){
    menuclick.style.right="0%";
    // container1.style.opacity="10%";
})
menuclick_img.addEventListener("click",function(){
    menuclick.style.right="-80%";
    // container1.style.opacity="100%";

})

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });
