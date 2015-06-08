'use strict';

var React = require('react');
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;
var Label = require('react-bootstrap').Label;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Table = require('react-bootstrap').Table;

var DestinationPage = React.createClass({

  dataRetrieved: true,

  render: function() {
    if (this.dataRetrieved) {
      return (
        <div className="container vcenter">
          <Row>
            <h3 className="text-center">Your destination</h3>
          </Row>
          <form>
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
          <Row>
            <Col xsOffset={3} xs={6}>
              <Button bsStyle="primary" bsSize="large" block>Create</Button>
            </Col>
          </Row>
        </div>
      );
    } else {
      return (
        <div className="container vcenter">
          <Row>
            <h3 className="text-center"><Label>Your destination</Label></h3>
          </Row>
          <form>
            <h3 className="text-center" style={{color:"white"}}>Empty...</h3>
          </form>
          <Row>
            <Col xsOffset={3} xs={6}>
              <Button bsStyle="primary" bsSize="large" block>Create</Button>
            </Col>
          </Row>
        </div>
      );
    }
  }

});

module.exports = function Destination() {

  React.render(
    <DestinationPage />,
    document.getElementById('container')
  );

}