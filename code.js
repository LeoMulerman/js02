fetch('https://api.openweathermap.org/data/2.5/weather?lat=55.75&lon=37.62&appid=7efabe70efeb4455a75bfc6cfc62eb60')
.then(function(resp) {return resp.json()})
.then(function(data) {
    console.log(data.name);
    console.log(data);
    two.innerHTML = (data.main.temp - 273.15).toFixed(1) + '&#8451';
})

let p = document.querySelector('p');
let two = document.querySelector('.two');

