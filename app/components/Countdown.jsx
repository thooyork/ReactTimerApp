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
  componentWillUnmount:function(){
    clearInterval(this.interval);
  },
  pauseTimer:function(){
    clearInterval(this.interval);
  },
  resetTimer:function(){
    this.setState({
      secs:0
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
        return (<Controls countdownStatus={countdownStatus} pauseTitle="Pause" onStatusChange={this.handleStatusChange}/>);
      }
      else{
        return (<CountdownForm setCountdown={this.handleSetCountdown}/>);
      }
    };

    var showAlarm = () => {
      if(alarmclass === 'alarm'){
        return (
          <audio autoPlay>
            <source src="/audio/alarm.mp3" type="audio/mpeg"/>
          </audio>
        );
      }
    };

    return(
      <div>
        <h1 className="page-title">Countdown</h1>
        <Clock alarmclass={alarmclass} seconds={secs}/>
        {renderControlArea()}
        {showAlarm()}
      </div>
    );
  }
});

module.exports = Countdown;
