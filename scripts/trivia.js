const startGameBtn = document.querySelector('#startGameBtn');
const finishGameBtn = document.querySelector('#finishGame');
const questionCards = document.querySelectorAll('.question-card');
const nextBtn = document.querySelectorAll('.next');
const prevBtn = document.querySelectorAll('.prev');
const correctAns = document.querySelectorAll('.correct-ans');
const gamePopup = document.querySelector('.game-popup');
const playerScore = document.querySelector('#playerScore')
const feedback = document.querySelector('#feedback')
let score = 0;

let counter = 0;
nextBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        questionCards[counter].style.display = "none"
        counter++;
        questionCards[counter].style.display = "block"
        if(counter == 9){
            finishGameBtn.style.display = "block"
        }
    })
})
prevBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        questionCards[counter].style.display = "none"
        counter--;
        questionCards[counter].style.display = "block"
        if(counter != 9){
            finishGameBtn.style.display = "none"
        }
    })
})

startGameBtn.addEventListener('click',()=>{
    startGameBtn.style.display = "none";
    questionCards[0].style.display = "block"
})

finishGameBtn.addEventListener('click', ()=>{
    for(let i = 0; i < correctAns.length; i++){
        if(correctAns[i].checked){
            score++;
        }
    }
    if(score == 0){
        feedback.innerHTML = "Better luck next time";
    }
    else if(score < 5){
        feedback.innerHTML = "Your knowledge is basic";
    }
    else{
        feedback.innerHTML = "You are a pro!";
    }
    playerScore.innerHTML = score;
    gamePopup.style.display = "block";
})