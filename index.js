"use strict";
(function() {

    window.addEventListener("load", init);

    function init() {
        //listener for hamburger menu opening and closing
        let icon = document.querySelector(".hamburger-icon");
        icon.addEventListener("click", toggleMenu);
        let menuLinks = document.querySelectorAll(".menu-links a");
        for (let i = 0; i < menuLinks.length; i++) {
            console.log(menuLinks[i]);
            menuLinks[i].addEventListener("click", toggleMenu);
        }

        //listener for resume
        let cv = document.getElementById("resume");
        cv.addEventListener("click", () => {
            window.open("./assets/PaulinaTeranCV.pdf");
        });

        //listener for github
        let github = document.getElementById("github-btn");
        github.addEventListener("click", () => {
            window.open("https://github.com/paulitera");
        })

        //listener for linkedin
        let linkedin = document.getElementById("linkedin-btn");
        linkedin.addEventListener("click", () => {
            window.open("https://linkedin.com/in/paultera");
        })

        //listener for project links
        document.getElementById("fungifind-git").addEventListener("click", () => {
            window.open("https://github.com/hcp-uw/shroomies");
        })
        document.getElementById("fungifind-demo").addEventListener("click", () => {
            window.open("https://drive.google.com/file/d/1b1BEqC1_AVgf_1CJTMI9pngoB5lG5Sni/view?usp=sharing");
        })
        document.getElementById("uofw-demo").addEventListener("click", () => {
            window.open("https://drive.google.com/file/d/1F35tO966i4erb4eAeiuHxCcW9C4LHr-q/view?usp=sharing");
        })
        document.getElementById("ttot-git").addEventListener("click", () => {
            window.open("https://github.com/VladimirKupryukhin/AppMessageReceiver");
        })
        document.getElementById("ttot-post").addEventListener("click", () => {
            window.open("https://devpost.com/software/touch-to-text");
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