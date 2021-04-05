fetch('https://api.openweathermap.org/data/2.5/weather?lat=48.16090&lon=24.49999&appid=fda4e562d5eaa765829c33cbe41af389')
      .then(function(resp){return resp.json()})
      .then(function(data){
        console.log(data);
        document.querySelector('.weather__title').textContent = data.name;
        document.querySelector('.weather__temp').innerHTML = Math.round(data.main.temp- 273) + '&deg;' + 'C';
        document.querySelector('.weather__cloudiness').textContent = data.weather[0]
        ['description'];
        document.querySelector('.weather__img li').innerHTML = '<img src="https://openweathermap.org/img/wn/'+data.weather[0]['icon'] + '@2x.png">';
        
       document.querySelector('.weather__wind').innerHTML ='Spped of wind ' + data.wind.speed +' m/s';
      })
      .catch(function () {

      });