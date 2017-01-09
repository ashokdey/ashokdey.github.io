
	   //seachButton holds the query comming from button
		var searchButton = document.querySelector('form');
		var loadingText  = document.querySelector('#load');
		var weatherBox = document.querySelector('#weather');
		
		//console.log(weatherBox);

		var weatherCity = document.querySelector('#weatherCity');
		var weatherDescription = document.querySelector('#weatherDescription');
		var weatherTemperature = document.querySelector('#weatherTemperature');


		searchButton.addEventListener('submit', searchWeather);

		function searchWeather(event)
		{
			event.preventDefault();

			var cityName = city.value.toUpperCase();
			

			loadingText.style.display= 'block';
			weatherBox.style.display= 'none';

			if(cityName.length == 0){
				return alert("please enter city name ");
			}

			// get data lat and lng from google maps
			var googleMaps = new XMLHttpRequest();
			var gURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + cityName;
			var gMethod = 'GET';

			// open the http request to google map api
			// pass the method and the url
			googleMaps.open(gMethod, gURL);

			//function to hangle the onreadystatechange event
			googleMaps.onreadystatechange = () => {
				if(googleMaps.readyState == XMLHttpRequest.DONE && googleMaps.status === 200) {
					
					// parse the JSON data received into a data object
					let geoData = JSON.parse(googleMaps.responseText);

					//get latitude, longitude and formatted_address from the geoData 
					let latitude = geoData.results[0].geometry.location.lat;
					let longitude = geoData.results[0].geometry.location.lng;
					let fullAddress = geoData.results[0].formatted_address;

					//once we got the latitude and longitude, we can connect to the
					// darksky weather api

					//darksky url
					darkSkyURL =`https://api.darksky.net/forecast/6cad342a1caf0f17020d8228ed704249/${latitude},${longitude}?units=si&exclude=minutely,hourly,daily,flags`;

					console.log(darkSkyURL);

					//create the weather request from darksky
					let darkSky = new XMLHttpRequest();

					// open the request
					darkSky.open('GET', darkSkyURL);

					// add the onreadystatechange function
					darkSky.onreadystatechange = () => {
						if (darkSky.readyState == XMLHttpRequest.DONE && darkSky.status === 200) {
							// if everything is ok, proceed forward
							console.log('connected to darksky');
							//parse the weather data from darksky
							let weatherData = JSON.parse(darkSky.responseText);
							console.log(weatherData);
						}
						else if (darkSky.readyState === XMLHttpRequest.DONE) {
							alert('Something broke while geting the weather');
						}
					}

					//send the request
					darkSky.send();

					// finally show the weather
					//updateWeather(weatherObject);
				}
				else if (googleMaps.readyState === XMLHttpRequest.DONE){
					alert('Something broke while reslving your address');
				}
			}

			// send the request
            googleMaps.send();
		}

		function updateWeather(weatherData){

			weatherCity.textContent = weatherData.cityName;
			weatherDescription.textContent = weatherData.description;
			weatherTemperature.textContent = weatherData.temperature;

			weatherBox.style.display = 'block';
		}


	// function constructor for geo cordinates object
	function GeoCords (lat, lgn, fullAddress) {
		this.lat = lat;
		this.lgn = lgn;
		this.fullAddress = fullAddress;
	}	

	//function constructor for weather object	
	function Weather(cityName, description){
		this.cityName = cityName;
        this.description = description;
		this._temperature ='';
	}

	Object.defineProperty(Weather.prototype,'temperature', {
	
		set : function(value){
			this._temperature =(value).toFixed(2) + ' \u00B0C.';
		},

		get : function(){
			return this._temperature;
		}
	
    });


	

