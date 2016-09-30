var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState:function(){
    return {
      secs:0,
      timerStatus:'stopped'
    }
  },
  componentDidUpdate:function(prevProps, prevState){
    if(this.state.timerStatus !== prevState.timerStatus){
      switch (this.state.timerStatus) {
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
  startTimer:function(){
    this.interval = setInterval(() => {
      var newCount = this.state.secs + 1;
      var tStat = this.state.timerStatus;

      this.setState({
        secs: newCount,
        timerStatus:tStat
      });
    }, 1000);
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
  handleStatusChange:function(newStatus){
    this.setState({
      timerStatus:newStatus
    });
  },
  render:function(){
    var {secs, timerStatus} = this.state;
    return(
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock seconds={secs}/>
        <Controls countdownStatus={timerStatus} resetBtnClass="secondary" pauseTitle="Stop" onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;
