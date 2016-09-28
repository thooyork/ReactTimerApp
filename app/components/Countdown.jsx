var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');


var Countdown = React.createClass({
  getInitialState:function(){
    return{ secs:0,
    alarmclass:null }
  },
  intVal:null,
  handleStartCountdown:function(counter){
    var that = this;

    this.setState({
      secs:parseInt(counter, 10),
      alarmclass:null
    });

    if(this.intVal != null){
      clearInterval(this.intVal);
    }

    this.intVal = setInterval(function(){
      counter -= 1;
      if(counter > 0){
        that.setState({
          secs:counter
        });
      }
      else{
        clearInterval(that.intVal);
        //ALARM !
        that.setState({
          secs:counter,
          alarmclass:'alarm'
        })
      }
    },1000);

  },

  render:function(){
    return(
      <div>
        <Clock alarmclass={this.state.alarmclass} seconds={this.state.secs}/>
        <Controls startCountdown={this.handleStartCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
