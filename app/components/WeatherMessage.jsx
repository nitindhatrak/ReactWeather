var React = require('react');

var WeatherMessage = ({temp, city}) => {
	
	return(
		<h1>{temp} {city}</h1>
	);
	
};

module.exports = WeatherMessage;