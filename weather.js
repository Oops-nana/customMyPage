const weather = document.querySelector(".js-weather");

const COORDS = "coords";
const API_CODE = "c7feb62c0d43aafad694246ae91ffc08";


function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_CODE}&units=metric`)
        .then(function (response){
        return response.json()})
        .then(function (json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText  = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError)
}

function loadCoords(){
   const loadedCords = localStorage.getItem(COORDS);
   if(loadedCords === null){
       askForCoords();
   }
   else {
       const parsedCoords = JSON.parse(loadedCords);
       getWeather(parsedCoords.latitude, parsedCoords.longitude);
   }
}

function init(){

    loadCoords();
}

init();