var React = require('react');

var WeatherForm = React.createClass({

	onFormSubmit: function(evt){
		evt.preventDefault();
		var city = this.refs.city.value;
		if(city.length > 0){
			this.refs.city.value = "";
			this.props.onSearch(city);
		}

	},

	render: function(){
		return(
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="city"/>
				<button>Get Weather</button>
			</form>
		);
	}
});

module.exports = WeatherForm;