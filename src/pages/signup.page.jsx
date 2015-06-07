'use strict';

var React = require('react');
var TextMessage = require('../components/textmessage.react.jsx');

module.exports = function Signup() {

  React.render(
    <TextMessage text="Sign up page" />,
    document.getElementById('container')
  );

}