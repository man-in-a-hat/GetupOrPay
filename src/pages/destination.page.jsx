'use strict';

var React = require('react');
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;
var Label = require('react-bootstrap').Label;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Table = require('react-bootstrap').Table;

var UpdateLocation = require('../components/updatelocation.react.jsx');

var AccountPage = React.createClass({

  isNew: false,

  render: function() {
    if (this.isNew) {
      return (
        <div className="container vcenter text-center">
          <Row>
            <h3><Label>Create Destination</Label></h3>
          </Row>
          <form className="margin-spacious">
            <Input type="date" placeholder="Date" />
            <Input type="time" placeholder="Time" />
            <Input type="text" placeholder="Location" />
            <Input type="number" placeholder="Charge" />
          </form>
          <Button href="#/account" bsStyle="primary" bsSize="large">Create</Button>
        </div>
      );
    } else {
      return (
        <div className="container vcenter text-center">
          <Row>
            <h3><Label>Edit Destination</Label></h3>
          </Row>
          <form className="margin-spacious">
            <Input type="date" placeholder="Date" />
            <Input type="time" placeholder="Time" />
            <Input type="text" placeholder="Location" />
            <Input type="number" placeholder="Charge" />
          </form>
          <Row>
            <Col xs={6}>
              <Button href="#/account" bsStyle="primary" block>Edit</Button>
            </Col>
            <Col xs={6}>
              <Button href="#/account" block>Delete</Button>
            </Col>
          </Row>
        </div>
      );
    }
  }

});

module.exports = function () {

  React.render(
    <AccountPage />,
    document.getElementById('container')
  );

}