const weather = document.querySelector(".js-weather");
const API_KEY = "c5d44974aee28d87ca3f4dfa9d0b4f94";
const COORDS = 'coords';

function getWeather(lat, lon){
    //then() = 함수를 호출할때 사용이 되는 함수
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

//위도와 경도를 다루는 것
function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Cant access geo location");
}

//간단하게 너의 위치를 파악할 수 있도록 도와주는 함수
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoSucces);
}

function loadCoords() {
    const loadedCoordes = localStorage.getItem(COORDS);
    if(loadedCoordes === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoordes);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();