const toDoForm = document.querySelector(".js-toDoForm")
    toDoInput = toDoForm.querySelector("input")
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function paintingToDo(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    span.innerText = text;
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function loadToDoList(){
    const loadedToDo = localStorage.getItem(TODOS_LS);
    if(loadedToDo !== null){
        const parseToDos = JSON.parse(loadedToDo);
        parseToDos.forEach(function (toDo){
            paintingToDo(toDo.text);
        });
    }
}

function handleSubmit(event){
    event.preventDefault();
    const currentData = toDoInput.value;
    paintingToDo(currentData);
    toDoInput.value = "";
}

function init(){
    loadToDoList();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();