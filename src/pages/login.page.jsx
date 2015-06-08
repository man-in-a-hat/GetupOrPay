'use strict';

var React = require('react');
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var LoginPage = React.createClass({

  render: function() {
    return (
      <div className="container vcenter">
        <Row>
          <Col xs={6}>
            <Button bsStyle="primary" block>Login</Button>
          </Col>
          <Col xs={6}>
            <Button href="#/signup" block>Signup</Button>
          </Col>
        </Row>
        <form>
          <Input type="email" placeholder="Email Address" />
          <Input type="password" placeholder="Password" />
        </form>
        <Row>
          <Col xsOffset={3} xs={6}>
            <Button bsStyle="primary" bsSize="large" block>Login</Button>
          </Col>
        </Row>
      </div>
    );
  }

});

module.exports = function Login() {

  React.render(
    <LoginPage />,
    document.getElementById('container')
  );

}