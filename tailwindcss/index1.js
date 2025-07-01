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