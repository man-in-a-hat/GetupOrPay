'use strict';

var Menu = React.createClass({
  render: function() {
    return (
      <div>
        <a href="#/page1">Page1</a>
        |
        <a href="#/page2">Page2</a>
      </div>
    );
  }
});

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

function Page1() {

  React.render(
    <TextMessage text="Page #1" />,
    document.getElementById('container')
  );

}

function Page2() {

  React.render(
    <TextMessage text="Page #2" />,
    document.getElementById('container')
  );

}

var routes = {
  '/page1': Page1,
  '/page2': Page2
};

var router = Router(routes);
router.init('/page1');