//navbar class toggle
const hamburgerBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburgerBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
})