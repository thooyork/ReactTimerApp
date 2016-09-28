var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
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
        case 'stopped':
          this.resetTimer();
          break;
        case 'paused':
          this.pauseTimer();
          break;
      }
    }
  },
  pauseTimer:function(){
    clearInterval(this.interval);
  },
  resetTimer:function(){
    this.setState({
      secs:0,
      alarmclass:null
    });
    clearInterval(this.interval);
  },
  startTimer:function(){
    this.interval = setInterval(() => {
      var newCount = this.state.secs - 1;
      var newAlarm = null;
      var cStat = this.state.countdownStatus;

      if (newCount < 0){
        newCount = 0;
      }
      if(newCount === 0){
        cStat = 'stopped';
        newAlarm = 'alarm';
      }

      this.setState({
        secs: newCount,
        countdownStatus:cStat,
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
  handleStatusChange:function(newStatus){
    this.setState({
      countdownStatus:newStatus
    });
  },
  render:function(){
    var {secs, countdownStatus, alarmclass} = this.state;
    var renderControlArea = () => {
      if(countdownStatus !== 'stopped'){
        return (<Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>);
      }
      else{
        return (<CountdownForm setCountdown={this.handleSetCountdown}/>);
      }
    };
    return(
      <div>
        <Clock alarmclass={alarmclass} seconds={secs}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
