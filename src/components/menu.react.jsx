'use strict';

var React = require('react');
var Button = require('react-bootstrap').Button;

var Menu = React.createClass({
  render: function() {
    return (
      <div>
        <Button>Default</Button>
        <a href="#/login">Log in</a>
        |
        <a href="#/signup">Sign up</a>
      </div>
    );
  }
});

module.exports = Menu;