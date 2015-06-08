'use strict';

var React = require('react');
var Button = require('react-bootstrap').Button;

var UpdateLocationComponent = React.createClass({

	propTypes: {
		bsSize: React.PropTypes.string
	},

	render: function() {
		return (
			<Button bsStyle="success" bsSize={this.props.bsSize}>Update Location</Button>
		);
	}

});

module.exports = UpdateLocationComponent;