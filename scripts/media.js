const galleryOpener = document.querySelectorAll('.gallery-opener');
const gallery = document.querySelectorAll('.article-gallery')

galleryOpener.forEach(function(item){
    item.setAttribute('selected', "closed");
})

for(let x = 0; x < galleryOpener.length; x++){
    galleryOpener[x].addEventListener('click', ()=>{
        gallery[x].classList.toggle('opened')
        if(galleryOpener[x].getAttribute('selected') == "close"){
            galleryOpener[x].setAttribute('selected', "open")
            galleryOpener[x].innerText = "Open Gallery"
        }
        else{
            galleryOpener[x].setAttribute('selected', "close")
            galleryOpener[x].innerText = "Close Gallery"
        }
    })
}

//popup images
const images = document.querySelectorAll('.popupImg');
const imagePopupSection = document.querySelector('.image-popup');
const popupWindow = document.querySelector('.popup-window');
const closeImgPopup = document.querySelector('#closeImgPopup');

for(let i = 0; i < images.length; i++){
    images[i].addEventListener('click', ()=>{
        imagePopupSection.style.display = "block";
        popupWindow.style.backgroundImage = `url(${images[i].getAttribute('src')})`;
        popupWindow.style.animation = "getBigger 0.3s";
    });
}

closeImgPopup.addEventListener('click',()=>{
    popupWindow.style.animation = "getSmaller 0.3s";
    setTimeout(function(){
        popupWindow.style.animation = "none";
        imagePopupSection.style.display = "none";
    },300) 
})