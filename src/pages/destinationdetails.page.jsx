'use strict';

var React = require('react');
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;
var Label = require('react-bootstrap').Label;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Table = require('react-bootstrap').Table;

var UpdateLocation = require('../components/updatelocation.react.jsx');

var DestinationDetailsPage = React.createClass({

  timeRemaining: 45,

  render: function() {
    return (
      <div className="container vcenter text-center">
        <Row>
          <h3><Label>Destination Details</Label></h3>
        </Row>
        <form className="margin-spacious">
          <Table striped bordered>
            <tbody>
              <tr>
                <td>Date</td>
                <td>June 2nd</td>
              </tr>
              <tr>
                <td>Time</td>
                <td>7am</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>555 W 5th</td>
              </tr>
              <tr>
                <td>Charge</td>
                <td>$20</td>
              </tr>
            </tbody>
          </Table>
        </form>
        <Row className="margin-spacious">
          <h3 className="text-danger">{this.timeRemaining} minutes left</h3>
        </Row>
        <UpdateLocation />
      </div>
    );
  }

});

module.exports = function () {

  React.render(
    <DestinationDetailsPage />,
    document.getElementById('container')
  );

}