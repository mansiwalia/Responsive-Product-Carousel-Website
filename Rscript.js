/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')



 let slideImages = document.querySelectorAll('img');
let next = document.querySelector('.next');
let previous = document.querySelector('.previous');

var counter = 0;

next.addEventListener('click', slideNext);

function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length-1){
        counter = 0;
    }
    else{
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
}

//code for prev button
previous.addEventListener('click', slideprevious);

function slideprevious(){
    slideImages[counter].style.animation = 'previous1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.length-1;
    }
    else{
        counter--;
    }
    slideImages[counter].style.animation = 'previous2 0.5s ease-in forwards';
}

//auto sliding
function autosliding(){
    deleInterval = setInterval(timer, 2000);
    function timer(){
        slideNext();
    }
}
autosliding();

//stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
    clearInterval(deleInterval);
});

//Resume silding when ,ouse is out
container.addEventListener('mouseout', autosliding);

