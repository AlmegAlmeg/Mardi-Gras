const questions = document.querySelectorAll('.question');
const spans = document.querySelectorAll('.arrow');
const answers = document.querySelectorAll('.answer')

questions.forEach(function(question){
    question.setAttribute('selected', "closed");
})

for(let j = 0; j < questions.length; j++){
    questions[j].addEventListener('click',()=>{
        answers[j].classList.toggle('opened');
        if(questions[j].getAttribute('selected') == "closed"){
            questions[j].setAttribute('selected', "opened");
            spans[j].style.transform = "rotate(180deg)";
        }
        else{
            questions[j].setAttribute('selected', "closed");
            spans[j].style.transform = "none";
        }
    })
}