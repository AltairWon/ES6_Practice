const API_KEY = "c5d44974aee28d87ca3f4dfa9d0b4f94";
const COORDS = 'coords';

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
}

function handleGeoError() {
    console.log("Cant access geo location");
}

//간단하게 너의 위치를 파악할 수 있도록 도와주는 함수
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoSucces);
}

function loadCoords() {
    const loadedCordes = localStorage.getItem(COORDS);
    if(loadedCordes === null) {
        askForCoords();
    } else {
        //getWeather
    }
}

function init() {
    loadCoords();
}

init();