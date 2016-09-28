var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');


var Countdown = React.createClass({
  getInitialState:function(){
    return{ secs:0,
      countdownStatus:'stopped',
    alarmclass:null }
  },
  componentDidUpdate:function(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  },
  startTimer:function(){
    this.interval = setInterval(() => {
      var newCount = this.state.secs - 1;
      var newAlarm = null;
      if (newCount < 0){
        newCount = 0
      }
      if(newCount === 0){
        newAlarm = 'alarm';
      }
      this.setState({
        secs: newCount,
        alarmclass:newAlarm
      });
    }, 1000);
  },
  handleSetCountdown:function(seconds){
    this.setState({
      secs:parseInt(seconds, 10),
      countdownStatus:'started',
      alarmclass:null
    });
  },

  render:function(){
    return(
      <div>
        <Clock alarmclass={this.state.alarmclass} seconds={this.state.secs}/>
        <Controls setCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
