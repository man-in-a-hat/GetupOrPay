'use strict';

var React = require('react');
var Menu = require('./menu.react');

var TextMessage = React.createClass({
  render: function() {
    return (
      <div>
        <Menu />
        <h1>{this.props.text}</h1>
      </div>
    );
  }
});

module.exports = TextMessage;