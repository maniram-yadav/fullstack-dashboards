const sections = document.querySelectorAll('.section');
const options = {
    threshold: 0.5 
  };

// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('show-on-scroll');
//         // observer.unobserve(entry.target); 
//       }
//     });
//   }, options);
//   sections.forEach(section => {
//       console.log(section);
//       observer.observe(section);
// });




function inViewport( element ){
  var bb = element.getBoundingClientRect();
  let innerHeight = window.innerHeight;
//   console.log(bb.top,bb.bottom,bb.left,bb.right);
//   console.log(innerHeight);
  return !(bb.top > innerHeight || bb.bottom < 0); 
}

// var myElement = document.querySelector( '#section2' );

document.addEventListener('scroll', event => {
    sections.forEach(myElement => {
  
        if( inViewport( myElement ) ){
    myElement.style.background = 'red';  
    myElement.classList.add('bg');
    myElement.classList.add('show-on-scroll');
    
  } else {
    myElement.style.background = '';  
    myElement.classList.remove('bg');
    myElement.classList.remove('show-on-scroll');
  }
});

});