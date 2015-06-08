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

  dataRetrieved: true,
  isItTime: false,

  render: function() {
    var content;
    if (this.isItTime) {
      content = (
        <div>
          <form className="margin-spacious">
            <UpdateLocation bsSize="large"/>
          </form>
          <h3 className="margin-spacious text-warning">45 minutes left</h3>
          <Button href="#/destination-details" block>Details</Button>
        </div>
      );
    } else if (!this.isItTime && !this.dataRetrieved) {
      content = (
        <div>
          <form className="margin-spacious">
            <h3 className="text-center" style={{color:"white"}}>Empty...</h3>
          </form>
          <Row>
            <Col xsOffset={3} xs={6}>
              <Button href="#/destination" bsStyle="primary" bsSize="large" block>Create</Button>
            </Col>
          </Row>
        </div>
      );
    } else if (!this.isItTime && this.dataRetrieved) {
      content = (
        <div>
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
          <Row>
            <Col xs={6}>
              <Button href="#/destination" bsStyle="primary" block>Edit</Button>
            </Col>
            <Col xs={6}>
              <Button href="#/account" block>Delete</Button>
            </Col>
          </Row>
        </div>
      );
    }

    return (
      <div className="container vcenter text-center">
        <Row>
          <h3><Label>Your Destination</Label></h3>
        </Row>
        {content}
      </div>
    );
  }

});

module.exports = function Account() {

  React.render(
    <AccountPage />,
    document.getElementById('container')
  );

}