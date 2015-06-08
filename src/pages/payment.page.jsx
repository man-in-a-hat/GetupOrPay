'use strict';

var React = require('react');
var Label = require('react-bootstrap').Label;
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var PaymentPage = React.createClass({

  render: function() {
    return (
      <div className="container vcenter text-center">
        <Row>
          <h3><Label>Payment data</Label></h3>
        </Row>
        <form className="margin-spacious">
          <Input type="number" placeholder="Card Number" />
          <Input type="date" placeholder="Expiration Date" />
          <Input type="number" placeholder="CVC" />
        </form>
        <Row>
          <Col xsOffset={3} xs={6}>
            <Button href="#/account" bsStyle="primary" bsSize="large" block>Save to Stripe</Button>
          </Col>
        </Row>
      </div>
    );
  }

});

module.exports = function () {

  React.render(
    <PaymentPage />,
    document.getElementById('container')
  );

}