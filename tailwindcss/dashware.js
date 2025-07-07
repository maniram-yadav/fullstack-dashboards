function toggleMenu(){
            const menu = document.getElementsByClassName("menu");
            console.log(menu)
            console.log(menu[0].classList)
            menu[0].classList.toggle('hidden');
}

function toggleForm(){
            const form = document.getElementsByClassName("loginform");
            console.log(form);
            console.log(form[0].classList);
            form[0].classList.toggle('hidden');
}