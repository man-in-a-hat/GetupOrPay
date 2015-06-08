'use strict';

var React = require('react');
var TextMessage = require('../components/textmessage.react');

module.exports = function Login() {

  React.render(
    <TextMessage text="Log in page" />,
    document.getElementById('container')
  );

}