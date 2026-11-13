const cityInputElmt = document.querySelector("#cityInput")
const weatherResultElmt = document.querySelector("#weatherResult")
function getWeather(){
    city = cityInputElmt.value 
    fetchWeather(city)
}

async function fetchWeather(city){
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca018df54353f065aaed7d802825b8be&units=metric`)
    .then(res=>res.json())
    .then(data=>renderData(data))
    .catch(err=>console.log(err))
}

function renderData(data){
    console.log(data)
    console.log(typeof data)
    weatherResultElmt.innerHTML = `
                <h2>${data.name} <i>${data.sys.country}</i></h2>
                <p>Temp: <b>${data.main.temp} <sup>o</sup>C</b></p>
                <p>${data.weather[0].main} : <b>${data.weather[0].description}</b>
                <img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png' alt=${data.weather[0].description} />
                </p>
    `
}