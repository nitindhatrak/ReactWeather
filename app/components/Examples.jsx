var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return(
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are a few example locations to try out</p>
			<ol>
				<li>
					<Link to="/?location=Nasik">Nasik</Link>
				</li>
				<li>
					<Link to="/?location=New York">New york</Link>
				</li>
			</ol>
		</div>
	);
	
};

module.exports = Examples;