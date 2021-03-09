const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    //ternary operator(삼항연산자) = 작은 if문 -> ? : 기억하자
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours
    }:${minutes < 10 ? `0${minutes}`: minutes
    }:${seconds < 10 ? `0${seconds}` : seconds
    }`;
}

function init() {
    getTime();
    //setInterval = 시간을 정해서 계속해서 보여주게 만드는 함수
    setInterval(getTime, 1000);
}

init();