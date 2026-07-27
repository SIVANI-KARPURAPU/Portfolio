/*=========================================================
    PORTFOLIO SCRIPT
    Author : OpenAI
=========================================================*/

/*==============================
LOADER
==============================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});


/*==============================
AOS ANIMATION
==============================*/

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 900,

        once: true,

        easing: "ease-in-out"

    });

}


/*==============================
TYPING EFFECT
==============================*/

if (typeof Typed !== "undefined") {

    new Typed(".typing", {

        strings: [

            "Cloud Engineer",

            "AWS Certified Cloud Practitioner",

            "CloudOps Learner",

            "Machine Learning Enthusiast",

            "Open to Full-Time Opportunities"

        ],

        typeSpeed: 70,

        backSpeed: 45,

        backDelay: 1500,

        loop: true

    });

}


/*==============================
MOBILE MENU
==============================*/

const menuBtn = document.getElementById("menu-btn");

const navMenu = document.querySelector(".nav-menu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        menuBtn.classList.toggle("fa-xmark");

    });

}


/*==============================
CLOSE MENU AFTER CLICK
==============================*/

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/*==============================
ACTIVE NAV LINK
==============================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==============================
SCROLL PROGRESS BAR
==============================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight -

                   document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    if(progressBar){

        progressBar.style.width = progress + "%";

    }

});


/*==============================
BACK TO TOP BUTTON
==============================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(!topBtn) return;

    if(window.scrollY > 500){

        topBtn.style.opacity = "1";

        topBtn.style.visibility = "visible";

    }

    else{

        topBtn.style.opacity = "0";

        topBtn.style.visibility = "hidden";

    }

});


/*==============================
HEADER SHADOW
==============================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(!header) return;

    if(window.scrollY > 50){

        header.style.boxShadow =

        "0 10px 30px rgba(0,0,0,.25)";

    }

    else{

        header.style.boxShadow = "none";

    }

});


/*==============================
DARK MODE BUTTON
(Current Theme Only)
==============================*/

const themeBtn = document.getElementById("theme-toggle");

if(themeBtn){

    themeBtn.addEventListener("click",()=>{

        themeBtn.classList.toggle("rotate");

    });

}


/*==============================
CONTACT FORM
==============================*/

const form = document.querySelector("form");

if(form){

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("Thank you for contacting me! I will get back to you soon.");

        form.reset();

    });

}


/*==============================
SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*==============================
END OF FILE
==============================*/