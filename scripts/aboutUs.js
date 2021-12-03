//Switch content in about us sections
const aboutUsBtn = document.querySelectorAll('.aboutUsBtn');
const aboutSections = document.querySelectorAll('.about-section');
const aboutListToggler = document.querySelector('#aboutListToggler');
const aboutMenu = document.querySelector('.about-menu');

aboutListToggler.addEventListener('click', ()=>{
    aboutMenu.classList.toggle("open");
});

for(let x = 0; x < aboutUsBtn.length; x++){
    aboutUsBtn[x].addEventListener('click', ()=>{
        aboutUsBtn.forEach(function(item){
            item.classList.remove('menuOpen');
        });
        aboutSections.forEach(function(sectionNum){
            sectionNum.style.display = "none";
        })
        aboutUsBtn[x].classList.add('menuOpen');
        aboutSections[x].style.display ="block";
    })
};

