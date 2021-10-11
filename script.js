var formInput = document.querySelector('#form');
var submitForm = document.querySelector('#submit');
var nameInput = document.querySelector('#name');
var temp = document.querySelector('#temp');
var desc = document.querySelector('#desc');
var cityName = document.querySelector('#cityname')
var cityContainer = document.querySelector('.city-container');
var cityName5 = document.querySelector('#cityname5');
var temp5 = document.querySelector('#temp5');
var desc5 = document.querySelector('#desc5');
var displayhidden = document.querySelector('.display1');
var displayhidden2 = document.querySelector('.display2');
var displayhidden3 = document.querySelector('.display3');
var displayhidden4 = document.querySelector('.display4');
var displayhidden5 = document.querySelector('.display5');

var cityContainer = (localStorage.getItem("name"));

submitForm.addEventListener('click',
    function (params) {
        params.preventDefault()
        document.querySelector('.city-container').innerHTML = nameInput.value
        localStorage.setItem("name", nameInput.value)
    });


submitForm.addEventListener('click',
    function (params) {
        params.preventDefault()
        displayhidden.classList.remove('hide')
        displayhidden2.classList.remove('hide')
        displayhidden3.classList.remove('hide')
        displayhidden4.classList.remove('hide')
        displayhidden5.classList.remove('hide')
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + nameInput.value + '&appid=9491934551733d8df2bc4f7f62a5b0ee')
            .then(function (resp) { return resp.json() })
            .then(function (data) {
                weather(data);
            });
            

        fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + nameInput.value + '&appid=9491934551733d8df2bc4f7f62a5b0ee')
            .then(function (resp) { return resp.json() })
            .then(function (data5) {
                weather1(data5);
                weather2(data5);
                weather3(data5);
                weather4(data5);
                weather5(data5);
            });
    });

function weather(d) {
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

    document.getElementById('desc').innerHTML = d.weather[0].description;
    document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
    document.getElementById('cityname').innerHTML = d.name;
}

function weather1(d) {
    var fahrenheit = Math.round(((parseFloat(d.list[0].main.temp) - 273.15) * 1.8) + 32);
    document.getElementById('tempday1').innerHTML = fahrenheit + '&deg';
}
function weather2(d) {
    var fahrenheit = Math.round(((parseFloat(d.list[10].main.temp) - 273.15) * 1.8) + 32);
    document.getElementById('tempday2').innerHTML = fahrenheit + '&deg';
}
function weather3(d) {
    var fahrenheit = Math.round(((parseFloat(d.list[16].main.temp) - 273.15) * 1.8) + 32);
    document.getElementById('tempday3').innerHTML = fahrenheit + '&deg';
}
function weather4(d) {
    var fahrenheit = Math.round(((parseFloat(d.list[26].main.temp) - 273.15) * 1.8) + 32);
    document.getElementById('tempday4').innerHTML = fahrenheit + '&deg';
}
function weather5(d) {
    var fahrenheit = Math.round(((parseFloat(d.list[33].main.temp) - 273.15) * 1.8) + 32);
    document.getElementById('tempday5').innerHTML = fahrenheit + '&deg';
}