'use strict';

var React = require('react');
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var SignupPage = React.createClass({

  render: function() {
    return (
      <div className="container vcenter">
        <Row>
          <Col xs={6}>
            <Button href="#/login" block>Login</Button>
          </Col>
          <Col xs={6}>
            <Button bsStyle="primary" block>Signup</Button>
          </Col>
        </Row>
        <form>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email Address" />
          <Input type="password" placeholder="Password" />
        </form>
        <Row>
          <Col xsOffset={3} xs={6}>
            <Button href="#/payment" bsStyle="primary" bsSize="large" block>Signup</Button>
          </Col>
        </Row>
      </div>
    );
  }

});

module.exports = function Signup() {

  React.render(
    <SignupPage />,
    document.getElementById('container')
  );

}