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
const nicoInfo = {
  name: "Nico",
  age: 33,
  gender: "Male",
  isHandsome: true,
  favMovies: ["Along the gods", "LOTR", "Oldboy"],
  favFood: [
    {
      name: "Kimchi", 
      fatty:false
    }, 
    {
      name: "Cheese Burger",
      fatty: "true"
    }
  ]
}

//Object를 보기 위해서는 이름 옆에 . 을 붙인다.
console.log(nicoInfo.favFood[0].fatty);

