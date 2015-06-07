'use strict';

var TextMessage = React.createClass({
  render: function() {
    return (
      <div>
        <Menu />
        <h1>{this.props.text}</h1>
      </div>
    );
  }
});