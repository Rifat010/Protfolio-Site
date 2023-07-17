let header = document.querySelector('header');
window.addEventListener('scroll',function(){
   
    if(this.scrollY > 100){
        header.classList.add('header-shadow')  
    }
    else{
        header.classList.remove('header-shadow')
    }
}
)