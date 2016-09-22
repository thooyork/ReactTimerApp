var React = require('react');

var Clock = React.createClass({
  render:function(){
    return(
      <div>{this.props.seconds}</div>
    );
  }
});

module.exports = Clock;
