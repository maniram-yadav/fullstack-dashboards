document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX; 
  const mouseY = event.clientY; 
    document.querySelector('.container')
            .style.setProperty('--width', mouseX+'px');
    document.querySelector('.container')
            .style.setProperty('--height', mouseY+'px');
  console.log(`Mouse X: ${mouseX}, Mouse Y: ${mouseY}`);
});