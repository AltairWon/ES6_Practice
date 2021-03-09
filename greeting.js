const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

//local storage = 작은 정보를 나의 유저 컴퓨터에 저장하는 방법
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    //현재 유저가 존재를 하면(null값이 아니면) paintiGreeting을 한다.
    if(currentUser === null){

    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();