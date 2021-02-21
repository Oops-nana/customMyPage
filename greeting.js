const form = document.querySelector('.js-form');
const input = form.querySelector("input");
const greeting = document.querySelector('.js-greetings');

const UserLs = "currentUser",
    Showing_Cn = "showing";

function paintGreeting(text){
    form.classList.remove(Showing_Cn);
    greeting.classList.add(Showing_Cn);
    greeting.innerText = `Hello ${text}`
}

function saveName(text){
    localStorage.setItem(UserLs,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(Showing_Cn);
    form.addEventListener("submit",handleSubmit);
}

function loadName(){
    const currentUser = localStorage.getItem(UserLs);
    if (currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();