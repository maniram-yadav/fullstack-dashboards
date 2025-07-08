function toggleMenu() {
    const menu = document.getElementsByClassName("menu");
    // console.log(menu)
    // console.log(menu[0].classList)
    menu[0].classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
}

function toggleForm() {
    const form = document.getElementsByClassName("loginform");
    
    // console.log(form);
    // console.log(form[0].classList);
    form[0].classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
}

const allMenus = document.querySelectorAll("#menu");
allMenus.forEach(menu =>{
    menu.addEventListener('click', event => {
     if (window.innerWidth > 640) {
        return;
    }
    const subMenuToggle = event.target.querySelector('.submenu');
    if (subMenuToggle === null) {
        return;
      }
    // subMenuToggle.classList.toggle('hidden');
    subMenuToggle.classList.toggle('h-auto');
    }
);
    
})



// document.getElementsByClassName('menu').addEventListener('click', function() {
//             const childElement = document.getElementsByClassName('submenu');
//             console.log(childElement);
//             childElement.classList.toggle('hidden');
//         });
