const form = document.querySelector(".js-form"),
    input = document.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const UserLs = "currentUser",
    ShowingCn = "showing";

function paintGreeting(text){
    form.classList.remove(ShowingCn); //입력받고 폼을 없애 추가 사용자 등록 막기
    greeting.classList.add(ShowingCn);
    greeting.innerText = `Hello ${text}`;
}

function saveName(text){
    localStorage.setItem(UserLs,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);    //입력과 동시에 변경 없으면 새로고침 이후 나타남
    saveName(currentValue);
}

function askForName(){
    form.classList.add(ShowingCn);
    form.addEventListener("submit", handleSubmit);
}

function loadName(){
    const currentName = localStorage.getItem(UserLs);

    if(currentName !== null){
        paintGreeting(currentName);
    }else{
        askForName();
    }
}

function init(){
    loadName();
}

init();