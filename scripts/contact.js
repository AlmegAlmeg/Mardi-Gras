const firstName = document.querySelector('#userFirstName');
const lastName = document.querySelector('#userLastName');
const email = document.querySelector('#userEmail');
const textArea = document.querySelector('#userTypeHere');
const form = document.querySelector('form');

let okArr = document.querySelectorAll('.ok');
let notOkArr = document.querySelectorAll('.notok');
let smallArr = document.querySelectorAll('small');

let firstNameOk, lastNameOk, emailOk, textAreaOk, isOk;

const finalMsg = document.querySelector('#finalMsg')

function checkFirstName(){
    okArr[0].style.display = "none"
    notOkArr[0].style.display = "block"
    if(firstName.value == ""){
        console.log('error 1 | first name');
        smallArr[0].innerHTML = "You must enter a name"
        firstNameOk = false;
    }
    else if(firstName.value.length < 2){
        console.log('error 2 | first name');
        smallArr[0].innerHTML = "Your name must be at least 2 characters"
        firstNameOk = false;
    }
    else{
        okArr[0].style.display = "block"
        notOkArr[0].style.display = "none"
        smallArr[0].innerHTML = ""
        firstNameOk = true;
    }
}

function checkLastName(){
    okArr[1].style.display = "none"
    notOkArr[1].style.display = "block"
    if(lastName.value == ""){
        smallArr[1].innerHTML = "You must enter last name"
        lastNameOk = false
    }
    else if(lastName.value.length < 2){
        smallArr[1].innerHTML = "Your last name must be at least 2 characters"
        lastNameOk = false
    }
    else{
        okArr[1].style.display = "block"
        notOkArr[1].style.display = "none"
        smallArr[1].innerHTML = ""
        lastNameOk = true
    }
}

function checkEmail(){
    okArr[2].style.display = "none"
    notOkArr[2].style.display = "block"
    if(email.value == ""){
        smallArr[2].innerHTML = "You must enter email address"
        emailOk = false
    }
    else if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        smallArr[2].innerHTML = "Invalid email address"
        emailOk = false
    }
    else{
        okArr[2].style.display = "block"
        notOkArr[2].style.display = "none"
        smallArr[2].innerHTML = ""
        emailOk = true
    }
}

function checkTextArea(){
    okArr[3].style.display = "none"
    notOkArr[3].style.display = "block"
    if(textArea.value == ""){
        smallArr[3].innerHTML = "You must enter a message"
        textAreaOk = false
    }
    else if(textArea.value.length < 20){
        smallArr[3].innerHTML = "Your message must contain at least 20 characters"
        textAreaOk = false
    }
    else{
        okArr[3].style.display = "block"
        notOkArr[3].style.display = "none"
        smallArr[3].innerHTML = ""
        textAreaOk = true
    }
}

function checkFunctions(){
    checkFirstName();
    checkLastName();
    checkEmail();
    checkTextArea();
    if(firstNameOk == true && lastNameOk == true && emailOk == true && textAreaOk == true){
        isOk = true
    }
    else{
        isOk = false
    }
}

form.addEventListener('submit',(e)=>{
    checkFunctions()
    if(isOk == false){
        e.preventDefault()
    }
})