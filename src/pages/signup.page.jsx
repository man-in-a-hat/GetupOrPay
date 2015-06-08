'use strict';

var React = require('react');
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Popover = require('react-bootstrap').Popover;

var dataRef = new Firebase('https://scorching-inferno-27.firebaseio.com/');

var SignupPage = React.createClass({

  getInitialState: function() {
    return {
      name:     '',
      email:    '',
      password: ''
    };
  },

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
        <form className="margin-spacious">
          {/* Input fields */}
          <Input type="text"     value={this.state.name}     placeholder="Name"          onChange={this.handleChangeFactory('name')} />
          <Input type="email"    value={this.state.email}    placeholder="Email Address" onChange={this.handleChangeFactory('email')} />
          <Input type="password" value={this.state.password} placeholder="Password"      onChange={this.handleChangeFactory('password')} />
          {/* Information messages */}
          {/** Empty notifiers **/}
          <Popover ref="nameEmptyMessage" className="hide text-warning" placement='top' positionLeft={70} positionTop={40}>
            You haven't filled <strong>name</strong> field
          </Popover>
          <Popover ref="emailEmptyMessage" className="hide text-warning" placement='top' positionLeft={70} positionTop={90}>
            You haven't filled <strong>email</strong> field
          </Popover>
          <Popover ref="passwordEmptyMessage" className="hide text-warning" placement='top' positionLeft={70} positionTop={140}>
            You haven't filled <strong>password</strong> field
          </Popover>
          {/** For Email field **/}
          <Popover ref="emailInvalidMessage" className="hide text-warning" placement='top' positionLeft={40} positionTop={70}>
            We think your <strong>email</strong> is invalid :( Double-check it please
          </Popover>
          <Popover ref="emailTakenMessage" className="hide text-warning" placement='top' positionLeft={40} positionTop={50}>
            It seems like your <strong>email</strong> is already taken :( Use different one or message us through <a href="http://www.meetup.com/Startup-Engineering-in-Los-Angeles/">our meetup</a>
          </Popover>
        </form>
        <Row>
          <Col xsOffset={3} xs={6}>
            <Button onClick={this.handleSingup} bsStyle="primary" bsSize="large" block>Signup</Button>
          </Col>
        </Row>
      </div>
    );
  },

  /* Returns event handler that                          */
  /* setting new value for the corresponding input field */
  handleChangeFactory: function(inputFieldName) {
    var self = this;
    return function(event) {
      var newState = {};
      newState[inputFieldName] = event.target.value;
      self.setState(newState);
    }
  },

  handleSingup: function() {
    this.hideNotifiers();
    if (validateEmail(this.state.email)) {
      dataRef.push({ a:1 });
    } else {
      this.showRef('emailInvalidMessage');
    }
  },

  hideNotifiers: function() {
    this.hideRef('emailInvalidMessage');
    this.hideRef('emailTakenMessage');
  },

  /* Helper functions for DOM manipulation through React ref attributes */
  showRef: function(refName) {
    this.removeClass(refName, 'hide');
    this.addClass(refName, 'show');
  },
  hideRef: function(refName) {
    this.removeClass(refName, 'show');
    this.addClass(refName, 'hide');
  },
  addClass: function(refName, className) {
    var ref = this.refs[refName];
    if (ref) {
      var classList = ref.getDOMNode().classList;
      classList.add(className);
    }
  },
  removeClass: function(refName, className) {
    var ref = this.refs[refName];
    if (ref) {
      var classList = ref.getDOMNode().classList;
      classList.remove(className);
    }
  }

});

module.exports = function () {

  React.render(
    <SignupPage />,
    document.getElementById('container')
  );

}

/* Helper functions */
function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}