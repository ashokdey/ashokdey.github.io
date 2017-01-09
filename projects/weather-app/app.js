'use strict';

/**
 * App Design
 * -------------
 * Get user location
 * Give option to search
 */


// the DOM elemets are here
var searchButton = document.querySelector('#search-btn');
let loadingText  = document.querySelector('#load');
var weatherBox = document.querySelector('#weather-box');

let cityName = document.querySelector('#city-name');
let wSummary = document.querySelector('#summary');
let wRealTemp = document.querySelector('#realTemp');
let wFeelsLike = document.querySelector('#feelsLike');
let wHumidity = document.querySelector('#humidity');
let inputBox = document.querySelector('#input-box');


// helper functions

//function constructor for weather object	
function Weather(cityName, summary, realTemp, appareantTemp, humidity)
{
	this.cityName = cityName;
	this.summary = summary;
	this.realTemp = realTemp;
	this.feelsLike = appareantTemp;
	this.humidity = humidity * 100;
}

//function to update weather
let updateWeather = (wObj) =>
{
	cityName.textContent = wObj.cityName;
	wSummary.textContent = `Weather : ${wObj.summary}`;
	wRealTemp.textContent =  `Real : ${wObj.realTemp} \u00B0C`;
	wFeelsLike.textContent = `Feels Like : ${wObj.feelsLike} \u00B0C`;
	wHumidity.textContent = `Humidity : ${wObj.humidity}%`;
	inputBox.value = '';
	weatherBox.style.display = 'block';
};


// the function to search the weather
let searchWeather = (event) =>
{
	event.preventDefault();

	var cityName = inputBox.value;

	loadingText.style.display= 'block';
	weatherBox.style.display= 'none';

	if(cityName.length == 0){
		return alert("Please Enter City Name ");
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

			if (geoData.status === 'OK') {
				//get latitude, longitude and formatted_address from the geoData 
				let latitude = geoData.results[0].geometry.location.lat;
				let longitude = geoData.results[0].geometry.location.lng;
				let fullAddress = geoData.results[0].formatted_address;

				//once we got the latitude and longitude, we can connect to the
				// darksky weather api

				//darksky url
				let darkSkyURL =`https://api.darksky.net/forecast/6cad342a1caf0f17020d8228ed704249/${latitude},${longitude}?units=si&exclude=minutely,hourly,daily,flags`;

				//console.log(darkSkyURL);

				//create the weather request from darksky
				/**
				 * There is Same-Origin Policy due to which 
				 * here we have to use jQuery to load content from 
				 * different domain
				 * it took a long time to solve this 
				 * therefore don't take this for granted
				 * read about Same-Origin Policy and practice it
				*/
				$.ajax({
					dataType: 'jsonp',
					url: darkSkyURL,
					type: 'GET',
					success: function (wData) {
						//console.log(wData);
						var weatherObject = new Weather(fullAddress, wData.currently.summary,
						wData.currently.temperature, wData.currently.apparentTemperature, 
						wData.currently.humidity);

						updateWeather(weatherObject);
					},
				}).fail(() => {
					alert('Something broke while fetching weather');
				});
				// finally show the weather
				//updateWeather(weatherObject);
			
			}
			else {
				alert('Please check the address');
			}
		}
		else if (googleMaps.readyState === XMLHttpRequest.DONE){
			alert('Something broke while reslving your address');
		}
	}

	// send the request
	googleMaps.send();
};


// call the serach weather function on submit
searchButton.addEventListener('click', searchWeather);

//on Enter hit !
inputBox.addEventListener('keypress', () => {
	if (event.keyCode === 13 || event.which === 13) {
		searchWeather(event);
	}
});
