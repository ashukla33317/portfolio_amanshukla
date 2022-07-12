var myNav = document.querySelector('.navbar');
var logo = document.querySelector('.nav-logo span')
var nav_hover = document.querySelector('.nav-menu')
window.onscroll = function () { 
    // "use strict";
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
        myNav.classList.add("nav-colored");
        nav_hover.classList.remove("change");
        logo.style.color='white';
    } 
    else {
        myNav.classList.remove("nav-colored");
        nav_hover.classList.add("change");
        logo.style.color='crimson';

    }
};

var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
})
