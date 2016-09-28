var React = require('react');

var Clock = React.createClass({
  getDefaultProps:function(){
    seconds:0
    alarmclass:null
  },
  propTypes:{
    seconds:React.PropTypes.number,
    alarmclass:React.PropTypes.string
  },
  addLeadingZero:function(num){
    if(num <= 9){
      num = '0' + num;
    }
    return num;
  },
  formatSeconds:function(totalSeconds){
      var mins = Math.floor(totalSeconds/60);
      var secs = (totalSeconds%60);

      secs = this.addLeadingZero(secs);
      mins = this.addLeadingZero(mins);

      return mins + ':' + secs;
  },
  render:function(){
    return(
      <div className={"clock " + (this.props.alarmclass)}>
        <div className="text">
          {this.formatSeconds(this.props.seconds)}
        </div>
      </div>
    );
  }
});

module.exports = Clock;
