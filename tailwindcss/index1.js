"use strict";

const sections = document.querySelectorAll(".view");
const objOptions = {
    root: null,
    threshold: 0.3,
    rootMargin: "-100px",
};

const sectionObserver = new IntersectionObserver(callBackFunction, objOptions);

function callBackFunction(entries) {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("appear");
        } else {
            entry.target.classList.remove("appear");
        }
    });
}

sections.forEach(section => {
    console.log(section);
    sectionObserver.observe(section);
});







function toggleMenu(){
            const menu = document.getElementsByClassName("menu");
            console.log(menu)
            console.log(menu[0].classList)
            menu[0].classList.toggle('hidden');
}

// typewrite code
const textToType = "Slack\nGithub\nEmail";
const typewriterElement = document.getElementById("trail");
let charIndex = 0;
const typingSpeed = 200; 
const length = textToType.length

function typeWriter() {
    
        if (charIndex==length){
            
            typewriterElement.textContent = "";
            charIndex=0;
            setTimeout(typeWriter, 1000);
            
        } else if (charIndex < textToType.length) {
            
            // typewriterElement.innerHTML += "<div>";
            typewriterElement.textContent += textToType.charAt(charIndex);
            // typewriterElement.innerHTML += "</div>";
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        }
            
    
}

// Start the typewriter effect when the page loads
window.onload = typeWriter;