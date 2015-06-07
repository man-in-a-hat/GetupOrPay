'use strict';

var HelloMessage = React.createClass({
  render: function() {
    return (
      <h1>{this.props.text}</h1>
    );
  }
});

React.render(
  <HelloMessage text="Hello, world!" />,
  document.getElementById('container')
);