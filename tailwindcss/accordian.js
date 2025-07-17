const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    
    // Close all other accordion items
    // document.querySelectorAll('.accordion-content').forEach(item => {
    //   item.classList.togggle('hidden');
    // });
    // document.querySelectorAll('.accordion-header').forEach(item => {
    //     // item.classList.add('hidden');
    // });
    content.classList.toggle('h-10');
    
   
  });
});