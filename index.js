"use strict";
(function() {

    window.addEventListener("load", init);

    function init() {
        //onclicks to hamburger menu opening and closing
        let icon = document.querySelector(".hamburger-icon");
        icon.addEventListener("click", toggleMenu);
        let menuLinks = document.querySelectorAll(".menu-links a");
        for (let i = 0; i < menuLinks.length; i++) {
            console.log(menuLinks[i]);
            menuLinks[i].addEventListener("click", toggleMenu);
        }

        //onclick for resume
        let cv = document.getElementById("resume");
        cv.addEventListener("click", () => {
            window.open("/assets/PaulinaTeránCV.pdf");
        });

        //onclick for github
        let github = document.getElementById("github-btn");
        github.addEventListener("click", () => {
            window.open("https://github.com/paulitera");
        })

        //onclick for linkedin
        let linkedin = document.getElementById("linkedin-btn");
        linkedin.addEventListener("click", () => {
            window.open("https://linkedin.com/in/paultera");
        })
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