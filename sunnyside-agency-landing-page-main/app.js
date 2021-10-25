const openMenu = document.querySelector(".openMenu");

const mainMenu = document.querySelector(".mainMenu");

console.log(openMenu);
console.log(mainMenu);

openMenu.addEventListener('click', show)

function show(){
    if(mainMenu.style.top == '4rem'){
        mainMenu.style.top = "-100%"
    }
    else{
        mainMenu.style.top = '4rem'
    }
}