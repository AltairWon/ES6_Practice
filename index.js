/*
console.log('Im Working. Im JS. Im Beautiful. Im worth it');
alert: 경고 메시지 Hello world라고 불린다.
const a = 221; //const 변수가 바꿀 수 없게 하려는 목적이 있다.
let b = a-5; //let 선언 변수의 종류가 두가지라 이를 구분하기 위해서 사용
a = 4;
var c // var = variable 이상한 규칙이 있는데 상관은 없다
console.log(b, a);

첫 사용은 const로!
const what = "Nicolas";
console.log(what);

Boolean
const wat = true;

Number 
const wat = 666;

Float 
const wat = 55.1;
*/

//cancel case = 변수명 중간에 스페이스가 필요하면 대문자로 써주는 것
//Array: 여러개의 변수를 하나로 묶은 것

//Object를 선언하기 위해서는 { 컬리 브라켓 }을 사용한다
//실제 객체를 만든다
//Array를 Object안에 넣어도 상관 없다.
/*
const nicoInfo = {
  name: "Nico",
  age: 33,
  gender: "Male",
  isHandsome: true,
}

//Object를 보기 위해서는 이름 옆에 . 을 붙인다.
//console은 Object이다 더 큰 Object를 뜻한다.
//console, alert은 내장함수라고 불린다.
//console.log(nicoInfo, console);

//함수를 작성해서 사용하기
//함수는 인자 argument를 받는다
function sayHello(name, age) {
  //console.log("Hello!", name, "you have", age, "years of age.");
  return `Hello ${name} you are ${age} years old`;
}

//greetAltair는 sayHello의 실행된 결과 값이다.
const greetAltair = sayHello("Altair", 15);

//이렇게 하면 undefined로 나오는데 return 값이 없기 때문이다.
//return을 사용하면 괜춘하다
console.log(greetAltair)

const calculator = {
  plus: function(a, b) {
    return a + b;
  }
}

const plus = calculator.plus(5, 5)
console.log(plus)
*/

//getElementById는 html안에 있는 title이라는 id를 찾도록 하는 함수 
//DOM = Document Object Module

/*
//addEventListener = event를 활성화 시켜주는 함수
function handleResize() {
  title.style.color = "blue";
}

window.addEventListener("click", handleResize);
*/

/*
//prompt = input을 하게 해주는 함수이지만 오래된 함수이다.
const age = prompt("How old are you");

if(age > 18 && age < 21) {
  console.log("you can drink but you should not");
} else if(age > 21) {
  console.log("Go Ahead");
} else {
  console.log("Too young");
}
*/

/*
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if(currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR
  }
}

function init() {
  title.style.color = BASE_COLOR
  title.addEventListener("click", handleClick);
}

init();

function handleOffline() {
  console.log("lalalal");
}
function handleOnline() {
  console.log("Welcome back");
}

window.addEventListener("offline", handleOffline)
window.addEventListener("online", handleOnline)
*/
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (!hasClass) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
}

function init() {
  title.addEventListener("click", handleClick);
}

init();