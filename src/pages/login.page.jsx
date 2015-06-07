'use strict';

var React = require('react');
var TextMessage = require('../components/textmessage.react.jsx');

module.exports = function Login() {

  React.render(
    <TextMessage text="Log in page" />,
    document.getElementById('container')
  );

}