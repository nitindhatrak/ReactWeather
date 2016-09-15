var axios = require('axios');

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=bc87877d8cc38225ea7d5050de954385&units=imperial";
//bc87877d8cc38225ea7d5050de954385

module.exports = {
	getTemp: function(city){
		var encodedLocation = encodeURIComponent(city);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		console.log("url ", requestUrl);
		return axios.get(requestUrl).then(function(res){
			if(res.data.cod && res.data.message){
				console.log("url er");
				throw new Error(res.data.message);
			}
			else{
				return res.data.main.temp;
			}
		},
		function(res){
			console.log("url error");
			throw new Error(res.data.message);
		});
	}
}