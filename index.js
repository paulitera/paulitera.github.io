"use strict";
(function() {

    window.addEventListener("load", init);

    function init() {
        //add onclicks to hamburger menu
        let icon = document.querySelector(".hamburger-icon");
        icon.addEventListener("click", toggleMenu);
        console.log(icon)
        let menuLinks = document.querySelectorAll(".menu-links a");
        for (let i = 0; i < menuLinks.length; i++) {
            console.log(menuLinks[i]);
            menuLinks[i].addEventListener("click", toggleMenu);
        }
    }

    function toggleMenu() {
        let menu = document.querySelector(".menu-links");
        let icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }

})();

// function init() {
//     //add onclicks to hamburger menu
//     let icon = document.querySelector(".hamburger-icon");
//     icon.addEventListener("click", toggleMenu);
//     console.log(icon)
//     let menuLinks = document.querySelectorAll(".menu-links a");
//     for (let i = 0; i < menuLinks.length; i++) {
//         console.log(menuLinks[i]);
//         menuLinks[i].addEventListener("click", toggleMenu);
//     }
// }

// function toggleMenu() {
//     let menu = document.querySelector(".menu-links");
//     let icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
// }