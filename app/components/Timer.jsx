var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');


var Timer = React.createClass({
  render:function(){
    return(
      <div>
        <Clock seconds="125"/>
        <Controls/>
      </div>
    );
  }
});

module.exports = Timer;
