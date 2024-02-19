$(document).ready(function(){
    // mobile navbar
    const mobile= document.querySelector(".burger-btn");
    const mobileLink = document.querySelector(".nav-menus");

    mobile.addEventListener("click",function(){
        mobile.classList.toggle("is-active");
        mobile.classList.toggle("active");

    });

    //class menu on mobile clicking
    mobileLink.addEventListener("click",function(){
        const menuBars = document.querySelector(".is-active")
        if(window.innerWidth <= 768 && menuBars){
            mobile.classList.toggle("is-active");
            mobileLink.classList.toggle("active");
        }
    })
})