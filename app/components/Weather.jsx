var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	
	

	getInitialState: function(){
		return {
			isLoading: false
		}
	},

	handleSearch: function(city){
		var that = this;
		this.setState({isLoading:true});
		console.log("handleSearch ", city);
		openWeatherMap.getTemp(city).then(function(temp){
			that.setState({
				city: city,
				temp: temp,
				isLoading:false
			})
		}, function(err){
			that.setState({isLoading:false});
			alert(err);
		})	
		
	},	

	render: function(){
		var {isLoading, temp, city} = this.state;
		
		function renderMessage(){
			if(isLoading){
				return <h3>Fetching Weather...</h3>;
			}
			else{
				return <WeatherMessage temp={temp} city={city} />;
			}
		}	
		return(
			<div>
				<h3>Weather Component</h3>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;