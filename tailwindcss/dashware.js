function toggleMenu(){
            const menu = document.getElementsByClassName("menu");
            console.log(menu)
            console.log(menu[0].classList)
            menu[0].classList.toggle('hidden');
}