function zoomPrev(element){
    let previousSiblingElement = element.previousElementSibling;
    if (previousSiblingElement) {
        previousSiblingElement.classList.toggle("scale-[1.3]");
    } else {
        console.log("No previous element sibling found.");
    }
}


function setToOriginal(element){
    
    let previousSiblingElement = element.previousElementSibling;
    if (previousSiblingElement) {
        previousSiblingElement.classList.toggle("scale-[1]");
    }
}

