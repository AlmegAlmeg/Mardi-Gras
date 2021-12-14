//navbar class toggle
const hamburgerBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburgerBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
})

// trivia ad displays
const triviaAd = document.querySelector('.trivia-float');
const closeTriviaAd = document.querySelector("#closeTriviaAd");

closeTriviaAd.addEventListener('click', ()=>{
    triviaAd.style.opacity = "0";
})

const showTriviaAd = ()=>{
    if(document.URL.includes("trivia.html")){}
    else{
        setTimeout(()=>{
            triviaAd.style.opacity = "1";
        },2000)
    }
}
showTriviaAd()