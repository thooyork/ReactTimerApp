var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');


var Countdown = React.createClass({
  getInitialState:function(){
    return{ secs:0 }
  },
  intVal:null,
  startCountdown:function(counter){
    var that = this;

    this.setState({
      secs:parseInt(counter)
    });

    if(this.intVal != null){
      clearInterval(this.intVal);
    }

    this.intVal = setInterval(function(){
      counter -= 1;
      if(counter >= 0){
        that.setState({
          secs:counter
        });
      }
      else{
        clearInterval(that.intVal);
        alert('ALARM!');
      }
    },1000);

  },

  render:function(){
    return(
      <div>
        <Clock seconds={this.state.secs}/>
        <Controls startCountdown={this.startCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
