const toDoForm = document.querySelector(".js-toDoForm"),
 toDoInput = toDoForm.querySelector("input"),
 toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    //하나의 함수를 실행해 줄 것이다.
    const cleanToDos = toDos.filter(function(toDo){
        //li.id = string 이고 toDo.id는 int이기에 parseInt를 사용한다.
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos
    saveToDos();
}

//toDos를 가져와서 로컬에 저장한다.
function saveToDos(){
    //JSON.stringify = JS object를 string으로 바꿔준다. JSON = JavaScript Object Notation
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

//텍스트가 보이도록 해주는 함수
function paintToDo(text){
    //createElement = 무언가를 생성하기 원할때 사용하는 요소
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    //text = submit function에서 온 값
    span.innerText = text;
    //appendChild 뭔가를 그의 father element안에 넣는것
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    //toDos array안에 toDoObj를 넣게 되는것
    toDos.push(toDoObj);
    saveToDos();
}

//이름, 또는 todo를 집어 넣을때 사용되는 함수
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    //submit같은 의미
    toDoInput.value = "";
}

//저장된 todo를 불러오게 만드는 것
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        //toDos를 가져온 뒤에
        //parse = JS object로 변환시켜드림
        const parsedToDos = JSON.parse(loadedToDos);
        //forEach() = array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜 준다.
        //각각에 대해서 paintToDo라는 function이 실행
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();