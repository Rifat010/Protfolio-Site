let header = document.querySelector('header');
let navbar = document.querySelector('.navbar');
let overlay = document.querySelector('.mobaile-body-overlay');
let navToggler = document.querySelector('.toggle-bar') ;
let navCloseBtn = document.querySelector('.close-btn');

window.addEventListener('scroll',function(){
   
    if(this.scrollY > 100){
        header.classList.add('header-shadow')  
    }
    else{
        header.classList.remove('header-shadow')
    }
}
)

// nav toggler event Listener
navToggler.addEventListener('click',function(){
    navbar.style.width =  40 + '%';
    overlay.style.width = 60 + '%'
})
// nav close btn event Listener 
navCloseBtn.addEventListener('click',function(){
    navbar.style.width = 0 + '%'
    overlay.style.width = 0 + '%'
})
