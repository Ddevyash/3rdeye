
let toggle = document.querySelector('.hamburger');
    toggle.addEventListener('click', function (){
    document.querySelector('.nav-menu').style.display='block';
    document.querySelector('.cancel').style.display='block';
    document.querySelector('.nav-bar img').style.display='none';
    this.style.display='none';
})

let closeBtn= document.querySelector('.cancel');
    closeBtn.addEventListener('click', function(){
    document.querySelector('.nav-menu').style.display='none';
    document.querySelector('.hamburger').style.display='block';
    document.querySelector('.nav-bar img').style.display='block';
    this.style.display='none';

})

